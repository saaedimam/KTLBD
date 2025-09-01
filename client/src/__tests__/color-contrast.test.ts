import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

function getRootVariables(css: string): Record<string, string> {
  const match = css.match(/:root\s*{([\s\S]*?)}/);
  const vars: Record<string, string> = {};
  if (match) {
    match[1].split(';').forEach(line => {
      const [prop, value] = line.split(':').map(s => s.trim());
      if (prop && value) {
        vars[prop] = value;
      }
    });
  }
  return vars;
}

function luminance(hex: string): number {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  const a = [r, g, b].map(v => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
}

function contrast(c1: string, c2: string): number {
  const L1 = luminance(c1);
  const L2 = luminance(c2);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
}

test('brand colors meet minimum contrast ratios', () => {
  const css = readFileSync('client/src/index.css', 'utf8');
  const vars = getRootVariables(css);
  const text = vars['--text'] || '#222';
  const bg = vars['--bg'] || '#fff';
  const red = vars['--brand-red'] || '#8B0000';
  const blue = vars['--brand-blue'] || '#0EA5A5';

  assert.ok(contrast(text, bg) >= 4.5, 'text and background contrast');
  assert.ok(contrast(red, '#ffffff') >= 4.5, 'brand red against white');
  assert.ok(contrast(blue, text) >= 4.5, 'brand blue against text color');
});
