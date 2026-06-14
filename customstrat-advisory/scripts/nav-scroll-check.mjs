import { chromium } from 'playwright-core';
const base = process.argv[2] || 'http://localhost:8123';
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
const page = await ctx.newPage();

const NAV = ['/', '/about', '/services', '/insights', '/endorsements', '/contact'];

// Every mobile nav link, navigating from a scrolled-down home page
for (const href of NAV) {
  await page.goto(`${base}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 1800));
  await page.waitForTimeout(250);
  await page.click('button[aria-label="Open navigation menu"]');
  await page.waitForTimeout(300);
  const want = href === '/' ? '/' : href + '/';
  const el = await page.$(`#mobile-nav a[href="${href}"], #mobile-nav a[href="${want}"]`);
  if (!el) { console.log(`menu ${href.padEnd(13)} | LINK NOT FOUND`); continue; }
  await el.click();
  await page.waitForTimeout(1000);
  const y = await page.evaluate(() => Math.round(window.scrollY));
  const url = page.url().replace(base, '') || '/';
  console.log(`menu ${href.padEnd(13)} | -> ${url.padEnd(14)} | scrollY ${y} ${y === 0 ? 'OK' : 'FAIL'}`);
}

// Hash link must NOT reset to top — should land on #services
await page.goto(`${base}/`, { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
const hashEl = await page.$('a[href="/about#services"]');
if (hashEl) {
  await hashEl.click();
  await page.waitForTimeout(1200);
  const y = await page.evaluate(() => Math.round(window.scrollY));
  console.log(`hash /about#services | -> ${page.url().replace(base, '')} | scrollY ${y} ${y > 100 ? 'OK (landed on section)' : 'FAIL (reset to top)'}`);
} else {
  console.log('hash link not found on home (may require desktop layout)');
}

await browser.close();
