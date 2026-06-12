import { chromium } from 'playwright-core';
const [url, out] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(900);
// Freeze the shimmer mid-sweep so the bright band is visible in the shot
await page.evaluate(() => {
  const s = document.querySelector('.cs-hero-shimmer');
  if (s) s.style.animation = 'cs-shimmer 12s linear -5.5s infinite paused';
});
await page.waitForTimeout(200);
await page.screenshot({ path: out, clip: { x: 0, y: 60, width: 1440, height: 300 } });
await browser.close();
console.log('hero shot:', out);
