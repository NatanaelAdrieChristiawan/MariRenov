/*
  Optimize images in public/images and public/portfolio
  - Generate WebP and AVIF variants
  - Create responsive sizes (480, 768, 1080, 1440)
  - Skip if derivative already newer than source

  Usage:
    node scripts/optimize-images.js

  Notes:
    - Requires `sharp` (install: npm i -D sharp)
    - Keeps original files; writes derivatives alongside originals with suffixes
*/

const fs = require('fs');
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Missing dependency: sharp. Install with `npm i -D sharp`');
  process.exit(1);
}

const ROOT = process.cwd();
const TARGET_DIRS = [
  path.join(ROOT, 'public', 'images'),
  path.join(ROOT, 'public', 'portfolio'),
];

const EXT_OK = new Set(['.jpg', '.jpeg', '.png']);
const SIZES = [480, 768, 1080, 1440];

function walk(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    if (!fs.existsSync(cur)) continue;
    const entries = fs.readdirSync(cur, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(cur, e.name);
      if (e.isDirectory()) stack.push(full);
      else out.push(full);
    }
  }
  return out;
}

function needsUpdate(src, dest) {
  if (!fs.existsSync(dest)) return true;
  const s = fs.statSync(src).mtimeMs;
  const d = fs.statSync(dest).mtimeMs;
  return s > d;
}

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!EXT_OK.has(ext)) return;

  const base = file.slice(0, -ext.length);
  const input = sharp(file, { failOn: 'none' });

  for (const w of SIZES) {
    const webp = `${base}-${w}.webp`;
    const avif = `${base}-${w}.avif`;

    if (needsUpdate(file, webp)) {
      await input
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(webp);
      console.log('✓ webp', path.relative(ROOT, webp));
    }

    if (needsUpdate(file, avif)) {
      await input
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .avif({ quality: 45 })
        .toFile(avif);
      console.log('✓ avif', path.relative(ROOT, avif));
    }
  }
}

async function main() {
  for (const dir of TARGET_DIRS) {
    if (!fs.existsSync(dir)) continue;
    const files = walk(dir);
    for (const f of files) {
      try {
        await processImage(f);
      } catch (e) {
        console.warn('Skip', f, e.message || e);
      }
    }
  }
  console.log('Done.');
}

if (require.main === module) {
  main();
}

module.exports = { main };
