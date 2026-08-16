#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distDir = 'dist/client';
const indexPath = join(distDir, 'index.html');

console.log('Fixing asset paths for GitHub Pages /solarParck/ base route...');

let content = readFileSync(indexPath, 'utf-8');

// Count replacements for logging
const patterns = [
  { regex: /href="\/_next\//g, replacement: 'href="/solarParck/_next/', name: 'href /_next/' },
  { regex: /src="\/_next\//g, replacement: 'src="/solarParck/_next/', name: 'src /_next/' },
  { regex: /href="\/_vinext\//g, replacement: 'href="/solarParck/_vinext/', name: 'href /_vinext/' },
  { regex: /src="\/_vinext\//g, replacement: 'src="/solarParck/_vinext/', name: 'src /_vinext/' },
  { regex: /url\(\/_next\//g, replacement: 'url(/solarParck/_next/', name: 'url(/_next/' },
  { regex: /url\(\/_vinext\//g, replacement: 'url(/solarParck/_vinext/', name: 'url(/_vinext/' },
];

let totalReplacements = 0;
for (const { regex, replacement, name } of patterns) {
  const matches = content.match(regex);
  if (matches) {
    totalReplacements += matches.length;
    console.log(`  ✓ Replaced ${matches.length} instances of ${name}`);
  }
  content = content.replace(regex, replacement);
}

writeFileSync(indexPath, content, 'utf-8');
console.log(`\n✓ Total replacements: ${totalReplacements}`);
console.log('✓ Asset paths fixed successfully');
