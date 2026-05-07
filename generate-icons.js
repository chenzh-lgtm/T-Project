const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'images');

const icons = [
  'tab-home.png',
  'tab-home-active.png',
  'tab-category.png',
  'tab-category-active.png',
  'tab-profile.png',
  'tab-profile-active.png'
];

const createSimplePng = (filename, isActive) => {
  const color = isActive ? '6C5CE7' : '999999';

  const pngHeader = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A
  ]);

  const ihdr = createIHDRChunk(81, 81, color);
  const idat = createIDATChunk(81, 81, color);
  const iend = createIENDChunk();

  const png = Buffer.concat([pngHeader, ihdr, idat, iend]);

  fs.writeFileSync(path.join(imagesDir, filename), png);
  console.log(`Created: ${filename}`);
}

const createIHDRChunk = (width, height, color) => {
  const data = Buffer.alloc(13);
  data.writeUInt32BE(width, 0);
  data.writeUInt32BE(height, 4);
  data[8] = 8;
  data[9] = 2;
  data[10] = 0;
  data[11] = 0;
  data[12] = 0;

  return createChunk('IHDR', data);
}

const createIDATChunk = (width, height, color) => {
  const zlib = require('zlib');

  const raw = Buffer.alloc((width * 3 + 1) * height);

  for (let y = 0; y < height; y++) {
    raw[y * (width * 3 + 1)] = 0;
    for (let x = 0; x < width; x++) {
      const offset = y * (width * 3 + 1) + 1 + x * 3;
      const rgb = hexToRgb(color);
      raw[offset] = rgb.r;
      raw[offset + 1] = rgb.g;
      raw[offset + 2] = rgb.b;
    }
  }

  const compressed = zlib.deflateSync(raw);
  return createChunk('IDAT', compressed);
}

const createIENDChunk = () => {
  return createChunk('IEND', Buffer.alloc(0));
}

const createChunk = (type, data) => {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typeBuffer = Buffer.from(type);
  const crcData = Buffer.concat([typeBuffer, data]);

  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(crcData), 0);

  return Buffer.concat([length, typeBuffer, data, crc]);
}

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

const crc32 = (buffer) => {
  let crc = 0xFFFFFFFF;
  const table = makeCrcTable();

  for (let i = 0; i < buffer.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buffer[i]) & 0xFF];
  }

  return (crc ^ 0xFFFFFFFF) >>> 0;
}

const makeCrcTable = () => {
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

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

console.log('Generating tab bar icons...\n');

createSimplePng('tab-home.png', false);
createSimplePng('tab-home-active.png', true);
createSimplePng('tab-category.png', false);
createSimplePng('tab-category-active.png', true);
createSimplePng('tab-profile.png', false);
createSimplePng('tab-profile-active.png', true);

console.log('\nDone! All tab bar icons created successfully.');