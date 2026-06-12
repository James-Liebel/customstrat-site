import { chromium } from 'playwright-core';
const [url, out, width = '1440', height = '3400'] = process.argv.slice(2);
const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: +width, height: +height } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(1600); // let reveal animations settle
await page.screenshot({ path: out });
await browser.close();
console.log('shot:', out);
