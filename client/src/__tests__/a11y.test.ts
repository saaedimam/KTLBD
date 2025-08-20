import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir: string): string[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const res = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(res));
    } else if (res.endsWith('.tsx') || res.endsWith('.html')) {
      files.push(res);
    }
  }
  return files;
}

const allFiles = walk('client/src');

// Alt text coverage
 test('all images include alt text', () => {
  for (const file of allFiles) {
    const content = readFileSync(file, 'utf8');
    const imgs = content.match(/<img[^>]*>/g) || [];
    for (const tag of imgs) {
      assert.ok(/alt\s*=/.test(tag), `${file} missing alt attribute`);
    }
  }
});

// Heading order in page components
 test('pages maintain logical heading order', () => {
  const pageFiles = walk('client/src/pages');
  for (const file of pageFiles) {
    const content = readFileSync(file, 'utf8');
    const headings = [...content.matchAll(/<h([1-3])/g)].map(m => Number(m[1]));
    let prev = 0;
    for (const level of headings) {
      assert.ok(level <= prev + 1, `${file} heading level jumps from ${prev} to ${level}`);
      prev = level;
    }
  }
});

// Keyboard navigation
 test('no positive tabindex values', () => {
  for (const file of allFiles) {
    const content = readFileSync(file, 'utf8');
    const matches = [...content.matchAll(/tabindex\s*=\s*["'](-?\d+)["']/g)];
    for (const [, value] of matches) {
      const num = Number(value);
      assert.ok(num <= 0, `${file} has positive tabindex ${num}`);
    }
  }
});

// Semantic tags presence
 test('semantic HTML5 elements are present', () => {
  let hasNav = false;
  let hasFooter = false;
  for (const file of allFiles) {
    const content = readFileSync(file, 'utf8');
    if (content.includes('<nav')) hasNav = true;
    if (content.includes('<footer')) hasFooter = true;
  }
  assert.ok(hasNav, 'no <nav> element found');
  assert.ok(hasFooter, 'no <footer> element found');
});
