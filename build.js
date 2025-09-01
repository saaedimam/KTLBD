const fs = require('fs');
const path = require('path');

const defaults = {
  NEWS_API_URL: 'https://jsonplaceholder.typicode.com/posts?_limit=3',
  CONTACT_ENDPOINT: 'https://httpbin.org/post',
  CONTACT_EMAIL: 'info@ktlbd.com',
  RFQ_ENDPOINT: 'https://httpbin.org/post',
  RFQ_EMAIL: 'commercial@ktlbd.com'
};

const envPath = path.join(__dirname, '.env');
let config = { ...defaults };

if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key) config[key] = value;
  }
}

const outDir = path.join(__dirname, 'scripts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'config.js');
fs.writeFileSync(outPath, `window.CONFIG = ${JSON.stringify(config, null, 2)};\n`);
console.log('Generated', outPath);

// Copy asset helper
const assetHelperSrc = path.join(__dirname, 'scripts', 'asset-helper.js');
const assetHelperDest = path.join(outDir, 'asset-helper.js');
if (fs.existsSync(assetHelperSrc)) {
  fs.copyFileSync(assetHelperSrc, assetHelperDest);
  console.log('Copied asset helper');
}

// Also prepare a deployable static folder at ./dist for CI/CD (Vercel, Nginx)
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const buf = fs.readFileSync(src);
    fs.writeFileSync(dest, buf);
  }
}

// Files and folders to publish
const publishItems = [
  'index.html',
  '404.html',
  'scripts',
  'styles',
  'partials',
  'attached_assets',
  'public'
];

// Ensure assets directory exists in dist
const assetsDir = path.join(distDir, 'public', 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

for (const item of publishItems) {
  const src = path.join(__dirname, item);
  const dest = path.join(distDir, item);
  copyRecursive(src, dest);
}

console.log('Prepared static output at', distDir);

// Verify assets were copied
const assetsPath = path.join(distDir, 'public', 'assets');
if (fs.existsSync(assetsPath)) {
  const assetFiles = fs.readdirSync(assetsPath);
  console.log(`Copied ${assetFiles.length} assets to dist/public/assets/`);
} else {
  console.warn('Warning: Assets directory not found in dist/');
}
