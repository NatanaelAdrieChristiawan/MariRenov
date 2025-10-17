/*
  Generate public/data/portfolio.json from folders under public/portfolio/*
  - Scans each folder as one portfolio item
  - Collects all image files (jpg, jpeg, png, webp)
  - Infers type (Interior/Eksterior) from folder name
  - Generates a temporary description
*/

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const PORTFOLIO_DIR = path.join(ROOT, 'public', 'portfolio');
const OUTPUT_DIR = path.join(ROOT, 'public', 'data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'portfolio.json');

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function humanize(name) {
  // Replace separators and split PascalCase: ModernLuxuryJapandiBedroom -> Modern Luxury Japandi Bedroom
  const withSpaces = name
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();
  // Uppercase first char of each word
  return withSpaces
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function inferTypeFromTitle(title) {
  const t = title.toLowerCase();
  if (/(kitchen|bedroom|living|bath|toilet|dapur|kamar|ruang)/.test(t)) return 'Desain Interior';
  if (/(fasad|facade|exterior|eksterior|rumah|renovasi|renovation)/.test(t)) return 'Desain Eksterior';
  return 'Desain Interior';
}

function generateDescription({ title, type, location }) {
  const loc = location ? ` di ${location}` : '';
  return `${title} adalah proyek ${type.toLowerCase()}${loc} dengan pendekatan modern dan fungsional. Fokus pada kenyamanan, pencahayaan, serta pemilihan material yang tahan lama dan mudah dirawat.`;
}

function readImages(dir, folderName) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile() && IMAGE_EXTS.has(path.extname(e.name).toLowerCase()))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  return files.map((f) => encodeURI(`/portfolio/${folderName}/${f}`));
}

function main() {
  if (!fs.existsSync(PORTFOLIO_DIR)) {
    console.error(`Folder tidak ditemukan: ${PORTFOLIO_DIR}`);
    process.exit(1);
  }

  const dirs = fs
    .readdirSync(PORTFOLIO_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  const year = new Date().getFullYear();

  const items = dirs
    .map((d, idx) => {
      const folderName = d.name;
      const title = humanize(folderName);
      const type = inferTypeFromTitle(title);
      const dirPath = path.join(PORTFOLIO_DIR, folderName);
      const images = readImages(dirPath, folderName);

      if (images.length === 0) return null; // skip empty folders

      const item = {
        id: String(idx + 1),
        title,
        type,
        location: '',
        images,
        image: images[0],
        description: generateDescription({ title, type, location: '' }),
        year: String(year),
        duration: '-',
        budget: '-',
        client: '-',
        specs: [],
      };

      return item;
    })
    .filter(Boolean);

  ensureDir(OUTPUT_DIR);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(items, null, 2), 'utf8');

  console.log(`Berhasil membuat ${OUTPUT_FILE} (${items.length} item).`);
}

if (require.main === module) {
  main();
}

module.exports = { main };
