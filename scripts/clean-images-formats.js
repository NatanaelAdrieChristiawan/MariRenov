/*
  Remove all .avif and .webp files under public/images (including subfolders like carousel).
  Keeps original PNG/JPG files intact.
*/
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET = path.join(ROOT, 'public', 'images');

function walk(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const cur = stack.pop();
    if (!fs.existsSync(cur)) continue;
    const entries = fs.readdirSync(cur, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(cur, e.name);
      if (e.isDirectory()) stack.push(p);
      else out.push(p);
    }
  }
  return out;
}

function main() {
  if (!fs.existsSync(TARGET)) return;
  const files = walk(TARGET).filter((f) => /\.(avif|webp)$/i.test(f));
  for (const f of files) {
    try {
      fs.unlinkSync(f);
      console.log('Deleted', path.relative(ROOT, f));
    } catch (e) {
      console.warn('Skip', f, e.message || e);
    }
  }
  console.log('Done.');
}

if (require.main === module) main();

module.exports = { main };
