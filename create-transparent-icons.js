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
      rawData[pixelStart + 3] = pixels[idx * 4 + 3] || 0;
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

function drawLineAA(pixels, size, x0, y0, x1, y1, r, g, b) {
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;
  let err = dx - dy;
  let e2;
  let x = x0;
  let y = y0;

  while (true) {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      setPixel(pixels, size, x, y, r, g, b);
    }

    if (x === x1 && y === y1) break;
    e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x += sx;
    }
    if (e2 < dx) {
      err += dx;
      y += sy;
    }
  }
}

function createHomeIcon(size, r, g, b) {
  const pixels = new Array(size * size * 4).fill(0);
  const s = size;
  
  const centerX = Math.floor(s * 0.5);
  const roofTop = Math.floor(s * 0.25);
  const roofBottom = Math.floor(s * 0.55);
  const leftWall = Math.floor(s * 0.18);
  const rightWall = Math.floor(s * 0.82);
  const floor = Math.floor(s * 0.85);
  
  const strokeWidth = 4;
  
  for (let w = 0; w < strokeWidth; w++) {
    const offset = w - Math.floor(strokeWidth / 2);
    drawLineAA(pixels, s, leftWall, roofBottom + offset, centerX, roofTop + offset, r, g, b);
    drawLineAA(pixels, s, rightWall, roofBottom + offset, centerX, roofTop + offset, r, g, b);
    drawLineAA(pixels, s, leftWall + offset, roofBottom, leftWall + offset, floor, r, g, b);
    drawLineAA(pixels, s, leftWall, floor + offset, rightWall, floor + offset, r, g, b);
    drawLineAA(pixels, s, rightWall + offset, roofBottom, rightWall + offset, floor, r, g, b);
  }
  
  const doorWidth = Math.floor(s * 0.15);
  const doorHeight = Math.floor(s * 0.22);
  const doorX = centerX - Math.floor(doorWidth / 2);
  const doorY = floor;
  
  for (let w = 0; w < strokeWidth; w++) {
    const offset = w - Math.floor(strokeWidth / 2);
    drawLineAA(pixels, s, doorX + offset, doorY, doorX + offset, doorY - doorHeight, r, g, b);
    drawLineAA(pixels, s, doorX + offset, doorY - doorHeight, doorX + doorWidth - offset, doorY - doorHeight, r, g, b);
    drawLineAA(pixels, s, doorX + doorWidth + offset, doorY - doorHeight, doorX + doorWidth + offset, doorY, r, g, b);
  }
  
  return pixels;
}

function createCategoryIcon(size, r, g, b) {
  const pixels = new Array(size * size * 4).fill(0);
  const s = size;
  
  const margin = Math.floor(s * 0.18);
  const lineHeight = Math.floor(s * 0.16);
  const gap = Math.floor(s * 0.1);
  const lineWidth = Math.floor(s * 0.6);
  const strokeWidth = 4;
  
  for (let w = 0; w < strokeWidth; w++) {
    const offset = w - Math.floor(strokeWidth / 2);
    drawLineAA(pixels, s, margin, margin + lineHeight / 2 + offset, margin + lineWidth, margin + lineHeight / 2 + offset, r, g, b);
    drawLineAA(pixels, s, margin, margin + lineHeight + gap + lineHeight / 2 + offset, margin + lineWidth, margin + lineHeight + gap + lineHeight / 2 + offset, r, g, b);
    drawLineAA(pixels, s, margin, margin + (lineHeight + gap) * 2 + lineHeight / 2 + offset, margin + lineWidth, margin + (lineHeight + gap) * 2 + lineHeight / 2 + offset, r, g, b);
  }
  
  return pixels;
}

function createProfileIcon(size, r, g, b) {
  const pixels = new Array(size * size * 4).fill(0);
  const s = size;
  
  const headRadius = Math.floor(s * 0.18);
  const headCX = Math.floor(s * 0.5);
  const headCY = Math.floor(s * 0.32);
  
  for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
    const x = Math.floor(headCX + Math.cos(angle) * headRadius);
    const y = Math.floor(headCY + Math.sin(angle) * headRadius);
    for (let w = 0; w < 3; w++) {
      setPixel(pixels, s, x + w - 1, y, r, g, b);
      setPixel(pixels, s, x, y + w - 1, r, g, b);
    }
  }
  
  const bodyWidth = Math.floor(s * 0.35);
  const bodyHeight = Math.floor(s * 0.25);
  const bodyTop = headCY + headRadius + Math.floor(s * 0.05);
  const bodyLeft = headCX - Math.floor(bodyWidth / 2);
  const strokeWidth = 4;
  
  for (let w = 0; w < strokeWidth; w++) {
    const offset = w - Math.floor(strokeWidth / 2);
    drawLineAA(pixels, s, bodyLeft + offset, bodyTop, bodyLeft + offset, bodyTop + bodyHeight, r, g, b);
    drawLineAA(pixels, s, bodyLeft + offset, bodyTop, bodyLeft + bodyWidth + offset, bodyTop, r, g, b);
    drawLineAA(pixels, s, bodyLeft + bodyWidth + offset, bodyTop, bodyLeft + bodyWidth + offset, bodyTop + bodyHeight, r, g, b);
  }
  
  return pixels;
}

console.log('Creating transparent tab bar icons...\n');

const size = 81;

const gray = { r: 153, g: 153, b: 153 };
const purple = { r: 108, g: 92, b: 231 };

const homeNormal = createPNG(size, createHomeIcon(size, gray.r, gray.g, gray.b));
fs.writeFileSync(path.join(imagesDir, 'tab-home.png'), homeNormal);
console.log('Created tab-home.png (gray, transparent)');

const homeActive = createPNG(size, createHomeIcon(size, purple.r, purple.g, purple.b));
fs.writeFileSync(path.join(imagesDir, 'tab-home-active.png'), homeActive);
console.log('Created tab-home-active.png (purple, transparent)');

const categoryNormal = createPNG(size, createCategoryIcon(size, gray.r, gray.g, gray.b));
fs.writeFileSync(path.join(imagesDir, 'tab-category.png'), categoryNormal);
console.log('Created tab-category.png (gray, transparent)');

const categoryActive = createPNG(size, createCategoryIcon(size, purple.r, purple.g, purple.b));
fs.writeFileSync(path.join(imagesDir, 'tab-category-active.png'), categoryActive);
console.log('Created tab-category-active.png (purple, transparent)');

const profileNormal = createPNG(size, createProfileIcon(size, gray.r, gray.g, gray.b));
fs.writeFileSync(path.join(imagesDir, 'tab-profile.png'), profileNormal);
console.log('Created tab-profile.png (gray, transparent)');

const profileActive = createPNG(size, createProfileIcon(size, purple.r, purple.g, purple.b));
fs.writeFileSync(path.join(imagesDir, 'tab-profile-active.png'), profileActive);
console.log('Created tab-profile-active.png (purple, transparent)');

console.log('\nDone! All transparent icons created successfully.');