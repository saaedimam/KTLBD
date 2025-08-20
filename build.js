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
