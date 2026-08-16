import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { existsSync } from 'fs';

const distDir = 'dist/client';
const indexPath = join(distDir, 'index.html');
const nojekyllPath = join(distDir, '.nojekyll');

// Create .nojekyll file to prevent Jekyll from processing the site
if (!existsSync(nojekyllPath)) {
  writeFileSync(nojekyllPath, '', 'utf-8');
  console.log('✓ Created .nojekyll file');
}

let content = readFileSync(indexPath, 'utf-8');

// Replace absolute paths with relative paths for GitHub Pages
content = content.replace(/href="\/_next\//g, 'href="/solarParck/_next/');
content = content.replace(/src="\/_next\//g, 'src="/solarParck/_next/');
content = content.replace(/href="\/_vinext\//g, 'href="/solarParck/_vinext/');
content = content.replace(/src="\/_vinext\//g, 'src="/solarParck/_vinext/');
content = content.replace(/url\(\/_next\//g, 'url(/solarParck/_next/');
content = content.replace(/url\(\/_vinext\//g, 'url(/solarParck/_vinext/');

writeFileSync(indexPath, content, 'utf-8');

console.log('✓ Fixed asset paths for GitHub Pages deployment');
