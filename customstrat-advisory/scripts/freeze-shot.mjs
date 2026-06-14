import { chromium } from 'playwright-core';
const [url, out, selector] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.evaluate((sel) => {
  document.querySelectorAll(sel).forEach((el) => {
    const dur = parseFloat(getComputedStyle(el).animationDuration);
    if (dur) {
      el.style.animationDelay = `-${dur / 2}s`;
      el.style.animationPlayState = 'paused';
    }
  });
}, selector);
await page.waitForTimeout(300);
await page.screenshot({ path: out });
await browser.close();
console.log('frozen shot:', out);
