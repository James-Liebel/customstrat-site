import { chromium } from 'playwright-core';
const [url, prefix] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(900);
await page.screenshot({ path: `${prefix}-top.png`, clip: { x: 0, y: 0, width: 1440, height: 480 } });
await page.evaluate(() => window.scrollTo(0, 700));
await page.waitForTimeout(600);
await page.screenshot({ path: `${prefix}-scrolled.png`, clip: { x: 0, y: 0, width: 1440, height: 480 } });
// gutter parallax sanity: diamond positions at two scroll depths
const probe = async () => page.evaluate(() => {
  const d = document.querySelector('.fx-diamond');
  return d ? Math.round(d.getBoundingClientRect().top) : null;
});
const at700 = await probe();
await page.evaluate(() => window.scrollTo(0, 1400));
await page.waitForTimeout(400);
const at1400 = await probe();
console.log('diamond viewport-top at scroll 700 vs 1400:', at700, at1400, '(parallax active if not equal-offset)');
await browser.close();
