// Serve the exported site and verify the CSP enforces cleanly on every route:
// no securitypolicyviolation events, no blocked requests, pages render, and
// Microsoft Clarity still initializes.
import { chromium } from 'playwright-core';
import http from 'node:http';
import { readFile, stat, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.argv[2] || 'out');
const PORT = 8145;
const TYPES = { '.html':'text/html;charset=utf-8','.txt':'text/plain','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2','.xml':'application/xml' };

async function routes(dir, baseRoute = '/') {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.isDirectory() && e.name !== '_next') out.push(...await routes(path.join(dir, e.name), baseRoute + e.name + '/'));
    else if (e.name === 'index.html') out.push(baseRoute);
  }
  return out;
}

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
const all = (await routes(ROOT)).sort();

let browser;
try { browser = await chromium.launch({ channel: 'msedge', headless: true }); }
catch { browser = await chromium.launch({ headless: true }); }
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
await ctx.addInitScript(() => {
  window.__csp = [];
  document.addEventListener('securitypolicyviolation', (e) =>
    window.__csp.push(`${e.violatedDirective} blocked ${e.blockedURI || '(inline)'}`));
});
const page = await ctx.newPage();

let totalViol = 0, totalErr = 0, renderFails = 0;
const errors = (msgs) => msgs.filter((m) => !/Failed to load resource: the server responded/.test(m));

for (const route of all) {
  const consoleErrs = [];
  const onConsole = (m) => { if (m.type() === 'error') consoleErrs.push(m.text()); };
  const onPageErr = (e) => consoleErrs.push('pageerror: ' + e.message);
  page.on('console', onConsole); page.on('pageerror', onPageErr);
  const wait = route === '/' ? 5000 : 1200;
  await page.goto(base + route, { waitUntil: 'networkidle' }).catch(() => {});
  await page.waitForTimeout(wait);
  const viol = await page.evaluate(() => window.__csp || []);
  const textLen = await page.evaluate(() => (document.body && document.body.innerText || '').length);
  page.off('console', onConsole); page.off('pageerror', onPageErr);
  const errs = errors(consoleErrs);
  totalViol += viol.length; totalErr += errs.length;
  const rendered = textLen > 150;
  if (!rendered) renderFails++;
  const flag = (viol.length || errs.length || !rendered) ? ' <<<' : '';
  console.log(`${route.padEnd(48)} render:${rendered?'ok':'FAIL'} csp:${viol.length} err:${errs.length}${flag}`);
  viol.slice(0, 6).forEach((v) => console.log('      CSP: ' + v));
  errs.slice(0, 4).forEach((e) => console.log('      ERR: ' + e.slice(0, 160)));
}

// Clarity + client-nav check on home
await page.goto(base + '/', { waitUntil: 'networkidle' });
await page.waitForTimeout(5000);
const clarity = await page.evaluate(() => typeof window.clarity);
await page.locator('header a[href="/about/"], header a[href="/about"]').first().click().catch(() => {});
await page.waitForTimeout(1500);
const navUrl = page.url().replace(base, '');
const navViol = await page.evaluate(() => window.__csp.length);

console.log('\n================ SUMMARY ================');
console.log(`routes checked:        ${all.length}`);
console.log(`total CSP violations:  ${totalViol}`);
console.log(`total console errors:  ${totalErr}`);
console.log(`render failures:       ${renderFails}`);
console.log(`Clarity (window.clarity): ${clarity}  ${clarity === 'function' ? '✓ loaded' : '✗'}`);
console.log(`client-nav home->about: ${navUrl}  (cumulative CSP viol on that page: ${navViol})`);
console.log(totalViol === 0 && renderFails === 0 && clarity === 'function' ? '\nRESULT: PASS ✓' : '\nRESULT: NEEDS ATTENTION');

await browser.close();
server.close();
