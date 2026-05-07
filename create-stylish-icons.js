const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const imagesDir = path.join(__dirname, 'images');

function createPNG(size, pixels) {
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(size, 0);
  ihdrData.writeUInt32BE(size, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6;
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdr = createChunk('IHDR', ihdrData);

  const rawData = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    const rowStart = y * (size * 4 + 1);
    rawData[rowStart] = 0;
    for (let x = 0; x < size; x++) {
      const pixelStart = rowStart + 1 + x * 4;
      const idx = y * size + x;
      rawData[pixelStart] = pixels[idx * 4] || 0;
      rawData[pixelStart + 1] = pixels[idx * 4 + 1] || 0;
      rawData[pixelStart + 2] = pixels[idx * 4 + 2] || 0;
      rawData[pixelStart + 3] = pixels[idx * 4 + 3] || 255;
    }
  }

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

function setPixel(pixels, size, x, y, r, g, b, a = 255) {
  if (x >= 0 && x < size && y >= 0 && y < size) {
    const idx = (y * size + x) * 4;
    pixels[idx] = r;
    pixels[idx + 1] = g;
    pixels[idx + 2] = b;
    pixels[idx + 3] = a;
  }
}

function drawLine(pixels, size, x0, y0, x1, y1, r, g, b) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;

  while (true) {
    setPixel(pixels, size, x0, y0, r, g, b);
    if (x0 === x1 && y0 === y1) break;
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x0 += sx; }
    if (e2 < dx) { err += dx; y0 += sy; }
  }
}

function drawCircle(pixels, size, cx, cy, radius, r, g, b, strokeWidth = 3) {
  for (let w = 0; w < strokeWidth; w++) {
    let x = radius - w - 1;
    let y = 0;
    let err = 0;

    while (x >= y) {
      setPixel(pixels, size, cx + x, cy + y, r, g, b);
      setPixel(pixels, size, cx + y, cy + x, r, g, b);
      setPixel(pixels, size, cx + y, cy - x, r, g, b);
      setPixel(pixels, size, cx + x, cy - y, r, g, b);
      setPixel(pixels, size, cx - x, cy - y, r, g, b);
      setPixel(pixels, size, cx - y, cy - x, r, g, b);
      setPixel(pixels, size, cx - y, cy + x, r, g, b);
      setPixel(pixels, size, cx - x, cy + y, r, g, b);

      y++;
      if (err <= 0) {
        err += 2 * y + 1;
      }
      if (err > 0) {
        x--;
        err -= 2 * x + 1;
      }
    }
  }
}

function drawRect(pixels, size, x, y, w, h, r, g, b, strokeWidth = 3) {
  drawLine(pixels, size, x, y, x + w, y, r, g, b);
  drawLine(pixels, size, x + w, y, x + w, y + h, r, g, b);
  drawLine(pixels, size, x + w, y + h, x, y + h, r, g, b);
  drawLine(pixels, size, x, y + h, x, y, r, g, b);
}

function createHomeIcon(size, color) {
  const pixels = new Array(size * size * 4).fill(0);
  const rgb = hexToRgb(color);
  const r = rgb.r, g = rgb.g, b = rgb.b;
  const s = size;

  const houseLeft = Math.floor(s * 0.2);
  const houseRight = Math.floor(s * 0.8);
  const houseTop = Math.floor(s * 0.35);
  const houseBottom = Math.floor(s * 0.8);
  const roofTop = Math.floor(s * 0.15);
  const roofBottom = Math.floor(s * 0.4);
  const centerX = Math.floor(s * 0.5);

  drawLine(pixels, s, houseLeft, roofBottom, centerX, roofTop, r, g, b);
  drawLine(pixels, s, centerX, roofTop, houseRight, roofBottom, r, g, b);
  drawLine(pixels, s, houseLeft, roofBottom, houseLeft, houseBottom, r, g, b);
  drawLine(pixels, s, houseLeft, houseBottom, houseRight, houseBottom, r, g, b);
  drawLine(pixels, s, houseRight, houseBottom, houseRight, roofBottom, r, g, b);

  const doorW = Math.floor(s * 0.15);
  const doorH = Math.floor(s * 0.25);
  const doorX = Math.floor(s * 0.5) - Math.floor(doorW / 2);
  const doorY = houseBottom;
  drawRect(pixels, s, doorX, doorY - doorH, doorW, doorH, r, g, b);

  return pixels;
}

function createCategoryIcon(size, color) {
  const pixels = new Array(size * size * 4).fill(0);
  const rgb = hexToRgb(color);
  const r = rgb.r, g = rgb.g, b = rgb.b;
  const s = size;

  const margin = Math.floor(s * 0.15);
  const boxH = Math.floor(s * 0.2);
  const gap = Math.floor(s * 0.08);

  drawRect(pixels, s, margin, margin, s - margin * 2, boxH, r, g, b);
  drawRect(pixels, s, margin, margin + boxH + gap, s - margin * 2, boxH, r, g, b);
  drawRect(pixels, s, margin, margin + (boxH + gap) * 2, s - margin * 2, boxH, r, g, b);

  return pixels;
}

function createProfileIcon(size, color) {
  const pixels = new Array(size * size * 4).fill(0);
  const rgb = hexToRgb(color);
  const r = rgb.r, g = rgb.g, b = rgb.b;
  const s = size;

  const headR = Math.floor(s * 0.18);
  const headCX = Math.floor(s * 0.5);
  const headCY = Math.floor(s * 0.28);

  const bodyW = Math.floor(s * 0.4);
  const bodyH = Math.floor(s * 0.25);
  const bodyTop = headCY + headR + Math.floor(s * 0.05);
  const bodyLeft = Math.floor(s * 0.5) - Math.floor(bodyW / 2);

  for (let y = headCY - headR; y <= headCY + headR; y++) {
    for (let x = headCX - headR; x <= headCX + headR; x++) {
      const dist = Math.sqrt((x - headCX) ** 2 + (y - headCY) ** 2);
      if (dist <= headR) {
        setPixel(pixels, s, x, y, r, g, b);
      }
    }
  }

  drawRect(pixels, s, bodyLeft, bodyTop, bodyW, bodyH, r, g, b);

  return pixels;
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

console.log('Creating stylish tab bar icons...\n');

const size = 81;

const homeNormal = createPNG(size, createHomeIcon(size, '#999999'));
fs.writeFileSync(path.join(imagesDir, 'tab-home.png'), homeNormal);
console.log('Created tab-home.png');

const homeActive = createPNG(size, createHomeIcon(size, '#6C5CE7'));
fs.writeFileSync(path.join(imagesDir, 'tab-home-active.png'), homeActive);
console.log('Created tab-home-active.png');

const categoryNormal = createPNG(size, createCategoryIcon(size, '#999999'));
fs.writeFileSync(path.join(imagesDir, 'tab-category.png'), categoryNormal);
console.log('Created tab-category.png');

const categoryActive = createPNG(size, createCategoryIcon(size, '#6C5CE7'));
fs.writeFileSync(path.join(imagesDir, 'tab-category-active.png'), categoryActive);
console.log('Created tab-category-active.png');

const profileNormal = createPNG(size, createProfileIcon(size, '#999999'));
fs.writeFileSync(path.join(imagesDir, 'tab-profile.png'), profileNormal);
console.log('Created tab-profile.png');

const profileActive = createPNG(size, createProfileIcon(size, '#6C5CE7'));
fs.writeFileSync(path.join(imagesDir, 'tab-profile-active.png'), profileActive);
console.log('Created tab-profile-active.png');

console.log('\nDone! All icons created successfully.');