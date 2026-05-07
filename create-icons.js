const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

const icons = [
  { name: 'tab-home.png', color: '#999999' },
  { name: 'tab-home-active.png', color: '#6C5CE7' },
  { name: 'tab-category.png', color: '#999999' },
  { name: 'tab-category-active.png', color: '#6C5CE7' },
  { name: 'tab-profile.png', color: '#999999' },
  { name: 'tab-profile-active.png', color: '#6C5CE7' }
];

function createSimpleIcon(filename, color) {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  const size = 81;
  const png = createColoredSquarePng(size, r, g, b);
  fs.writeFileSync(path.join(imagesDir, filename), png);
  console.log(`Created ${filename} (${color})`);
}

function createColoredSquarePng(size, r, g, b) {
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0);
  ihdrData.writeUInt32BE(size, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 2;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = createChunk('IHDR', ihdrData);

  const rawData = Buffer.alloc((size * 3 + 1) * size);
  for (let y = 0; y < size; y++) {
    const rowStart = y * (size * 3 + 1);
    rawData[rowStart] = 0;
    for (let x = 0; x < size; x++) {
      const pixelStart = rowStart + 1 + x * 3;
      rawData[pixelStart] = r;
      rawData[pixelStart + 1] = g;
      rawData[pixelStart + 2] = b;
    }
  }

  const zlib = require('zlib');
  const compressed = zlib.deflateSync(rawData);
  const idat = createChunk('IDAT', compressed);

  const iend = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdr, idat, iend]);
}

function createChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typeBuffer = Buffer.from(type, 'ascii');
  const crcInput = Buffer.concat([typeBuffer, data]);

  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcInput), 0);

  return Buffer.concat([length, typeBuffer, data, crc]);
}

function crc32(buffer) {
  let crc = 0xFFFFFFFF;
  const table = makeCrcTable();

  for (let i = 0; i < buffer.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buffer[i]) & 0xFF];
  }

  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeCrcTable() {
  const table = new Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }
  return table;
}

console.log('Creating tab bar icons...\n');

icons.forEach(icon => {
  createSimpleIcon(icon.name, icon.color);
});

console.log('\nDone!');