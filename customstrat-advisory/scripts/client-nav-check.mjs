// Verifies that <Link> navigation is client-side (no full reload), which is
// what keeps the skeleton/background in place and lets the page transition run.
// A static file server (mimicking GitHub Pages) serves the deployed root.
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] || '.');
const PORT = 8137;
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.xml': 'application/xml',
};

const server = http.createServer(async (req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]); // ignore query, like a static host
    let filePath = path.join(ROOT, urlPath);
    if (urlPath.endsWith('/')) filePath = path.join(filePath, 'index.html');
    else if (!path.extname(filePath) && existsSync(filePath) && (await stat(filePath)).isDirectory())
      filePath = path.join(filePath, 'index.html');
    if (!existsSync(filePath)) { res.statusCode = 404; res.end('404'); return; }
    res.setHeader('Content-Type', TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream');
    res.end(await readFile(filePath));
  } catch (e) { res.statusCode = 500; res.end(String(e)); }
});
await new Promise((r) => server.listen(PORT, r));
const base = `http://localhost:${PORT}`;
console.log('Serving', ROOT, '\n');

let browser;
try { browser = await chromium.launch({ channel: 'msedge', headless: true }); }
catch { browser = await chromium.launch({ headless: true }); }
const page = await (await browser.newContext({ viewport: { width: 1280, height: 800 } })).newPage();

const reqs = [];
page.on('request', (r) => reqs.push(r.url().replace(base, '')));
page.on('response', (r) => {
  const u = r.url().replace(base, '');
  if (u.includes('.txt') || u.includes('_rsc')) console.log(`   RSC fetch ${r.status()}  ${u}`);
});

async function clickNav(label, hrefs) {
  reqs.length = 0;
  const el = await page.$(hrefs.map((h) => `header a[href="${h}"]`).join(', '));
  if (!el) { console.log(`NAV ${label}: link not found`); return; }
  await el.click();
  await page.waitForTimeout(900);
  const url = page.url().replace(base, '') || '/';
  const markerKept = await page.evaluate(() => window.__marker === 'SET');
  const wrapper = await page.evaluate(() => !!document.querySelector('.cs-page-enter'));
  console.log(`NAV ${label.padEnd(13)} -> ${url.padEnd(12)} | client-nav=${markerKept ? 'YES ✓' : 'NO — HARD RELOAD ✗'} | transition wrapper=${wrapper}\n`);
}

await page.goto(`${base}/`, { waitUntil: 'networkidle' });
await page.evaluate(() => { window.__marker = 'SET'; });
const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundImage.slice(0, 60));
console.log('home loaded. body background-image:', bg, '\n');

await clickNav('About', ['/about', '/about/']);
await clickNav('Case Studies', ['/services', '/services/']);
await clickNav('Articles', ['/insights', '/insights/']);
await clickNav('Contact', ['/contact', '/contact/']);

await browser.close();
server.close();
