// Capture every external origin the live site loads (esp. Microsoft Clarity),
// grouped by resource type, so the CSP allowlist matches reality.
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] || '.');
const PORT = 8144;
const TYPES = { '.html':'text/html;charset=utf-8','.txt':'text/plain','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2' };
const server = http.createServer(async (req, res) => {
  try {
    let u = decodeURIComponent(req.url.split('?')[0]);
    let f = path.join(ROOT, u);
    if (u.endsWith('/')) f = path.join(f, 'index.html');
    else if (!path.extname(f) && existsSync(f) && (await stat(f)).isDirectory()) f = path.join(f, 'index.html');
    if (!existsSync(f)) { res.statusCode = 404; res.end('404'); return; }
    res.setHeader('Content-Type', TYPES[path.extname(f).toLowerCase()] || 'application/octet-stream');
    res.end(await readFile(f));
  } catch (e) { res.statusCode = 500; res.end(String(e)); }
});
await new Promise((r) => server.listen(PORT, r));
const base = `http://localhost:${PORT}`;

let browser;
try { browser = await chromium.launch({ channel: 'msedge', headless: true }); }
catch { browser = await chromium.launch({ headless: true }); }
const page = await (await browser.newContext({ viewport: { width: 1280, height: 900 } })).newPage();

const ext = new Map(); // origin -> Set(resourceType)
const record = (url, type) => {
  try {
    const o = new URL(url);
    if (o.origin === base || o.protocol === 'data:' || o.protocol === 'blob:') return;
    if (!ext.has(o.origin)) ext.set(o.origin, new Set());
    ext.get(o.origin).add(type);
  } catch {}
};
page.on('request', (r) => record(r.url(), r.resourceType()));

await page.goto(`${base}/`, { waitUntil: 'networkidle' });
await page.waitForTimeout(6000); // let Clarity load its tag + upload telemetry
// client-nav to another page to catch anything page-specific
await page.locator('header a[href="/about/"], header a[href="/about"]').first().click().catch(() => {});
await page.waitForTimeout(3000);

console.log('External origins loaded (origin -> resource types):');
if (ext.size === 0) console.log('  (none — fully self-contained)');
for (const [origin, types] of [...ext.entries()].sort()) {
  console.log(`  ${origin}  [${[...types].sort().join(', ')}]`);
}
await browser.close();
server.close();
