// Renders the AI Search Statistics lead-magnet HTML to a print-ready PDF.
// Usage: node tools/leadmagnet/build-pdf.cjs
const puppeteer = require('puppeteer');
const path = require('path');

const SRC = path.join(__dirname, 'ai-search-statistics-2026.html');
const OUT = path.join(__dirname, '..', '..', 'public', 'locully-ai-search-statistics-2026.pdf');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file://' + SRC, { waitUntil: 'networkidle0' });
  // Google Fonts need a beat to render (project gotcha).
  await new Promise((r) => setTimeout(r, 4000));
  await page.pdf({
    path: OUT,
    printBackground: true,
    preferCSSPageSize: true,
  });
  await browser.close();
  console.log('PDF written →', OUT);
})();
