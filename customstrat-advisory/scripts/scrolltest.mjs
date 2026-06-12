import { chromium } from 'playwright-core';
const [url, out] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
// scroll to the bottom in steps, like a user would
await page.evaluate(async () => {
  const h = document.documentElement.scrollHeight;
  for (let y = 0; y <= h; y += 500) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 180));
  }
  window.scrollTo(0, h);
});
await page.waitForTimeout(1200);
// report any reveal targets that are still invisible
const stuck = await page.evaluate(() => {
  const sel = '.cs-card, .cs-section-head, .cs-exhibit, .cs-shell--home .grid > div';
  return [...document.querySelectorAll(sel)]
    .filter((el) => getComputedStyle(el).opacity === '0')
    .map((el) => el.className.toString().slice(0, 50));
});
console.log('still-hidden count:', stuck.length, stuck.slice(0, 3));
await page.screenshot({ path: out }); // bottom of page at realistic viewport
await browser.close();
