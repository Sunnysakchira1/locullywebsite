/**
 * Prerender — turn the client-only SPA into static HTML per route.
 *
 * Runs after `vite build`. For each route in public/sitemap.xml it:
 *   1. serves dist/ locally (SPA fallback to index.html),
 *   2. loads the route in headless Chrome (so React + react-helmet fully render),
 *   3. writes the rendered HTML to dist/<route>/index.html.
 *
 * Vercel serves these static files before applying the SPA rewrite, so AI
 * crawlers that don't execute JS (GPTBot, OAI-SearchBot, PerplexityBot,
 * ClaudeBot) get real content + the correct per-page <title>/meta.
 *
 * No new dependencies — Node http/fs for the server, puppeteer (already in
 * devDeps) for rendering. .cjs because package.json is "type": "module".
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * Launch headless Chrome. Vercel's build container lacks the system libs
 * stock Chrome needs (libnspr4 etc.), so there we drive @sparticuz/chromium
 * (a Chromium built to run in minimal serverless environments) via
 * puppeteer-core. Locally we use full puppeteer with its bundled browser.
 */
async function launchBrowser() {
  if (process.env.VERCEL || process.env.CI) {
    const mod = require('@sparticuz/chromium');
    const chromium = mod.default || mod; // v149 is ESM → real object on .default
    const puppeteer = require('puppeteer-core');
    return puppeteer.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox'],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless ?? true,
    });
  }
  const puppeteer = require('puppeteer');
  return puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
}

const DIST = path.join(__dirname, '..', 'dist');
const SITEMAP = path.join(__dirname, '..', 'public', 'sitemap.xml');
const PORT = 4178;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

// Hosts whose requests we abort during prerender so the build doesn't fire
// real analytics hits or inject tracker DOM into the snapshot.
const BLOCK_HOSTS = [
  'googletagmanager.com', 'google-analytics.com', 'analytics.google.com',
  'connect.facebook.net', 'facebook.com', 'clarity.ms',
  'seojuice.io', 'doubleclick.net', 'googleadservices.com',
];

function routesFromSitemap() {
  const xml = fs.readFileSync(SITEMAP, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  // Keep only the pathname (drop https://locully.org)
  return locs.map((u) => {
    try { return new URL(u).pathname; } catch { return u; }
  });
}

function outFileForRoute(route) {
  if (route === '/' || route === '') return path.join(DIST, 'index.html');
  const clean = route.replace(/^\/+|\/+$/g, '');
  return path.join(DIST, clean, 'index.html');
}

function startServer() {
  const server = http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(DIST, urlPath);

    // Directory or extensionless → try index.html, else SPA fallback.
    if (urlPath === '/' || urlPath.endsWith('/')) {
      filePath = path.join(DIST, urlPath, 'index.html');
    }
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      const ext = path.extname(urlPath);
      // Real asset that's missing → 404; otherwise serve SPA shell.
      filePath = ext && ext !== '.html' ? filePath : path.join(DIST, 'index.html');
    }
    fs.readFile(filePath, (err, buf) => {
      if (err) { res.statusCode = 404; res.end('Not found'); return; }
      res.setHeader('Content-Type', MIME[path.extname(filePath)] || 'application/octet-stream');
      res.end(buf);
    });
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

async function autoScroll(page) {
  // Trigger any whileInView / IntersectionObserver content before snapshotting.
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let y = 0;
      const step = 600;
      const timer = setInterval(() => {
        window.scrollBy(0, step);
        y += step;
        if (y >= document.body.scrollHeight) { clearInterval(timer); window.scrollTo(0, 0); resolve(); }
      }, 60);
    });
  });
}

async function main() {
  // Sitemap routes + /privacy-policy (intentionally kept out of the sitemap, but
  // still needs a static file so it survives without the SPA catch-all rewrite).
  const routes = [...routesFromSitemap(), '/privacy-policy'];
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html missing — run vite build first.');
  }
  const server = await startServer();
  const browser = await launchBrowser();

  let ok = 0;
  console.log(`\n[prerender] ${routes.length} routes →`);
  for (const route of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.setRequestInterception(true);
    page.on('request', (r) => {
      const url = r.url();
      const type = r.resourceType();
      if (BLOCK_HOSTS.some((h) => url.includes(h))) return r.abort();
      if (type === 'image' || type === 'media' || type === 'font') return r.abort();
      return r.continue();
    });

    try {
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0', timeout: 30000,
      });
      // Wait until React has actually rendered something into #root.
      await page.waitForFunction(
        () => { const r = document.getElementById('root'); return r && r.children.length > 0; },
        { timeout: 15000 }
      );
      await autoScroll(page);
      await new Promise((r) => setTimeout(r, 400)); // settle helmet + transitions

      const html = '<!doctype html>\n' + await page.evaluate(() => {
        // Remove tracker <script>/<iframe> tags that the analytics snippets
        // injected at runtime, so the static HTML matches the original <head>
        // (the inline snippets re-inject these on the client — keeping the
        // frozen copies would load GTM/Pixel/Clarity twice). SEOJuice and the
        // app bundle are original tags and are left intact.
        const INJECTED = [
          'googletagmanager.com/gtm.js', 'googletagmanager.com/gtag',
          'google-analytics.com', 'connect.facebook.net', 'clarity.ms',
          'doubleclick.net', 'googleadservices.com',
        ];
        document.querySelectorAll('script[src], iframe[src]').forEach((el) => {
          const src = el.getAttribute('src') || '';
          if (INJECTED.some((h) => src.includes(h))) el.remove();
        });
        return document.documentElement.outerHTML;
      });
      const out = outFileForRoute(route);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, html);

      const title = await page.title();
      console.log(`  ✓ ${route}  →  ${path.relative(DIST, out)}  (${(html.length / 1024).toFixed(0)}kb · "${title.slice(0, 50)}")`);
      ok++;
    } catch (e) {
      console.error(`  ✗ ${route}  —  ${e.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log(`\n[prerender] done — ${ok}/${routes.length} routes rendered.\n`);
  if (ok < routes.length) process.exit(1); // fail the build if any route didn't render
}

main().catch((e) => { console.error('[prerender] fatal:', e); process.exit(1); });
