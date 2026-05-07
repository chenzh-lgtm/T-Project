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

function createHomeIcon(size, r, g, b) {
  const pixels = new Array(size * size * 4).fill(0);
  const s = size;
  
  const centerX = Math.floor(s * 0.5);
  const roofTop = Math.floor(s * 0.25);
  const roofBottom = Math.floor(s * 0.55);
  const leftWall = Math.floor(s * 0.18);
  const rightWall = Math.floor(s * 0.82);
  const floor = Math.floor(s * 0.85);
  
  const lineWidth = 3;
  
  for (let w = 0; w < lineWidth; w++) {
    drawLine(pixels, s, leftWall, roofBottom, centerX - w, roofTop, r, g, b);
    drawLine(pixels, s, rightWall, roofBottom, centerX + w, roofTop, r, g, b);
    drawLine(pixels, s, leftWall + w, roofBottom, leftWall + w, floor, r, g, b);
    drawLine(pixels, s, leftWall, floor + w, rightWall, floor + w, r, g, b);
    drawLine(pixels, s, rightWall - w, roofBottom, rightWall - w, floor, r, g, b);
  }
  
  const doorWidth = Math.floor(s * 0.15);
  const doorHeight = Math.floor(s * 0.22);
  const doorX = centerX - Math.floor(doorWidth / 2);
  const doorY = floor;
  
  for (let w = 0; w < lineWidth; w++) {
    drawLine(pixels, s, doorX + w, doorY, doorX + w, doorY - doorHeight, r, g, b);
    drawLine(pixels, s, doorX + w, doorY - doorHeight, doorX + doorWidth - w, doorY - doorHeight, r, g, b);
    drawLine(pixels, s, doorX + doorWidth - w, doorY - doorHeight, doorX + doorWidth - w, doorY, r, g, b);
  }
  
  const knobX = doorX + doorWidth - Math.floor(s * 0.06);
  const knobY = doorY - Math.floor(doorHeight * 0.5);
  for (let i = -2; i <= 2; i++) {
    for (let j = -2; j <= 2; j++) {
      setPixel(pixels, s, knobX + i, knobY + j, r, g, b);
    }
  }
  
  return pixels;
}

function createCategoryIcon(size, r, g, b) {
  const pixels = new Array(size * size * 4).fill(0);
  const s = size;
  
  const margin = Math.floor(s * 0.15);
  const lineHeight = Math.floor(s * 0.18);
  const gap = Math.floor(s * 0.08);
  const lineWidth = Math.floor(s * 0.65);
  const strokeWidth = 3;
  
  for (let w = 0; w < strokeWidth; w++) {
    drawLine(pixels, s, margin, margin + w, margin + lineWidth, margin + w, r, g, b);
    drawLine(pixels, s, margin, margin + lineHeight + gap + w, margin + lineWidth, margin + lineHeight + gap + w, r, g, b);
    drawLine(pixels, s, margin, margin + (lineHeight + gap) * 2 + w, margin + lineWidth, margin + (lineHeight + gap) * 2 + w, r, g, b);
  }
  
  const circleSize = 6;
  const circleY1 = margin + Math.floor(strokeWidth / 2);
  const circleY2 = margin + lineHeight + gap + Math.floor(strokeWidth / 2);
  const circleY3 = margin + (lineHeight + gap) * 2 + Math.floor(strokeWidth / 2);
  const circleX = margin + lineWidth + Math.floor(s * 0.08);
  
  for (let i = -circleSize; i <= circleSize; i++) {
    for (let j = -circleSize; j <= circleSize; j++) {
      if (i * i + j * j <= circleSize * circleSize) {
        setPixel(pixels, s, circleX + i, circleY1 + j, r, g, b);
        setPixel(pixels, s, circleX + i, circleY2 + j, r, g, b);
        setPixel(pixels, s, circleX + i, circleY3 + j, r, g, b);
      }
    }
  }
  
  return pixels;
}

function createProfileIcon(size, r, g, b) {
  const pixels = new Array(size * size * 4).fill(0);
  const s = size;
  
  const headRadius = Math.floor(s * 0.18);
  const headCX = Math.floor(s * 0.5);
  const headCY = Math.floor(s * 0.32);
  
  for (let y = headCY - headRadius; y <= headCY + headRadius; y++) {
    for (let x = headCX - headRadius; x <= headCX + headRadius; x++) {
      const dist = Math.sqrt((x - headCX) ** 2 + (y - headCY) ** 2);
      if (dist <= headRadius + 2 && dist >= headRadius - 3) {
        setPixel(pixels, s, x, y, r, g, b);
      }
    }
  }
  
  const bodyWidth = Math.floor(s * 0.4);
  const bodyHeight = Math.floor(s * 0.28);
  const bodyTop = headCY + headRadius + Math.floor(s * 0.05);
  const bodyLeft = headCX - Math.floor(bodyWidth / 2);
  const strokeWidth = 3;
  
  for (let w = 0; w < strokeWidth; w++) {
    drawLine(pixels, s, bodyLeft + w, bodyTop + w, bodyLeft + w, bodyTop + bodyHeight - w, r, g, b);
    drawLine(pixels, s, bodyLeft + w, bodyTop + w, bodyLeft + bodyWidth - w, bodyTop + w, r, g, b);
    drawLine(pixels, s, bodyLeft + bodyWidth - w, bodyTop + w, bodyLeft + bodyWidth - w, bodyTop + bodyHeight - w, r, g, b);
    drawLine(pixels, s, bodyLeft + w, bodyTop + bodyHeight - w, bodyLeft + Math.floor(bodyWidth * 0.3), bodyTop + bodyHeight - w, r, g, b);
    drawLine(pixels, s, bodyLeft + Math.floor(bodyWidth * 0.7), bodyTop + bodyHeight - w, bodyLeft + bodyWidth - w, bodyTop + bodyHeight - w, r, g, b);
  }
  
  const eyeSize = 4;
  const leftEyeX = headCX - Math.floor(s * 0.08);
  const rightEyeX = headCX + Math.floor(s * 0.08);
  const eyeY = headCY - Math.floor(s * 0.02);
  
  for (let i = -eyeSize; i <= eyeSize; i++) {
    for (let j = -eyeSize; j <= eyeSize; j++) {
      if (i * i + j * j <= eyeSize * eyeSize) {
        setPixel(pixels, s, leftEyeX + i, eyeY + j, r, g, b);
        setPixel(pixels, s, rightEyeX + i, eyeY + j, r, g, b);
      }
    }
  }
  
  return pixels;
}

console.log('Creating beautiful tab bar icons...\n');

const size = 81;

const gray = { r: 153, g: 153, b: 153 };
const purple = { r: 108, g: 92, b: 231 };

const homeNormal = createPNG(size, createHomeIcon(size, gray.r, gray.g, gray.b));
fs.writeFileSync(path.join(imagesDir, 'tab-home.png'), homeNormal);
console.log('Created tab-home.png (gray)');

const homeActive = createPNG(size, createHomeIcon(size, purple.r, purple.g, purple.b));
fs.writeFileSync(path.join(imagesDir, 'tab-home-active.png'), homeActive);
console.log('Created tab-home-active.png (purple)');

const categoryNormal = createPNG(size, createCategoryIcon(size, gray.r, gray.g, gray.b));
fs.writeFileSync(path.join(imagesDir, 'tab-category.png'), categoryNormal);
console.log('Created tab-category.png (gray)');

const categoryActive = createPNG(size, createCategoryIcon(size, purple.r, purple.g, purple.b));
fs.writeFileSync(path.join(imagesDir, 'tab-category-active.png'), categoryActive);
console.log('Created tab-category-active.png (purple)');

const profileNormal = createPNG(size, createProfileIcon(size, gray.r, gray.g, gray.b));
fs.writeFileSync(path.join(imagesDir, 'tab-profile.png'), profileNormal);
console.log('Created tab-profile.png (gray)');

const profileActive = createPNG(size, createProfileIcon(size, purple.r, purple.g, purple.b));
fs.writeFileSync(path.join(imagesDir, 'tab-profile-active.png'), profileActive);
console.log('Created tab-profile-active.png (purple)');

console.log('\nDone! All icons created successfully.');