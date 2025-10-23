/*
  Remove large image variants from public/portfolio, keeping only small ones.
  Deletes files ending with -768|-1080|-1440 and extension avif|webp.
*/
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET = path.join(ROOT, 'public', 'portfolio');
const RE = /-(768|1080|1440)\.(avif|webp)$/i;

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
  const files = walk(TARGET).filter((f) => RE.test(f));
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
