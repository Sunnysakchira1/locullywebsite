#!/usr/bin/env node

/**
 * Generates public/sitemap.xml from authoritative sources so it never drifts
 * when pages are added:
 *   - static pages: curated list below (must match routes in App.jsx)
 *   - clinic pages: src/data/clinicData.js
 *   - blog posts:   src/data/blogData.jsx (lastmod = each post's updatedDate)
 *
 * Only indexable pages are included. /privacy-policy is intentionally omitted
 * because it is noindex — listing a noindex page in the sitemap sends Google
 * contradictory signals.
 *
 * lastmod policy: blog posts carry a real date from the data. Static and clinic
 * pages have no reliable per-page change date, so lastmod is omitted for them
 * (valid, and better than a build-time date that would churn on every deploy).
 */

import fs from 'fs';
import path from 'path';

const SITE = 'https://www.locully.org';

// path, priority, changefreq. URLs must match App.jsx routes exactly.
const STATIC_PAGES = [
  { path: '/',                     priority: '1.0', changefreq: 'weekly'  },
  { path: '/ai-search-visibility', priority: '0.9', changefreq: 'monthly' },
  { path: '/ai-optimization/',     priority: '0.9', changefreq: 'weekly'  },
  { path: '/packages',             priority: '0.8', changefreq: 'monthly' },
  { path: '/lead-gen-partner',     priority: '0.7', changefreq: 'monthly' },
  { path: '/about',                priority: '0.6', changefreq: 'monthly' },
  { path: '/blog/',                priority: '0.8', changefreq: 'weekly'  },
];

// Higher-value posts keep their curated priority; everything else defaults to 0.7.
const BLOG_PRIORITY = {
  'ai-search-optimization-clinics-thailand': '0.9',
  'ai-search-statistics': '0.9',
  'what-is-seo-complete-guide': '0.8',
  'on-page-seo-optimization-guide': '0.8',
  'backlinks-guide-seo': '0.8',
  'programmatic-seo-guide': '0.8',
  'how-ai-chooses-sources-to-cite': '0.8',
  'zero-click-search-statistics': '0.8',
  'how-many-people-use-chatgpt': '0.8',
};

// Extract every string-literal value following `key:` in a data file, in order.
function extractField(src, key) {
  const re = new RegExp(key + '\\s*:\\s*(["\'])((?:\\\\.|(?!\\1).)*)\\1', 'g');
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) out.push(m[2].trim());
  return out;
}

function readData(file, fields) {
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, 'utf8');
  const cols = {};
  for (const [name, key] of Object.entries(fields)) cols[name] = extractField(src, key);
  const n = cols[Object.keys(fields)[0]].length;
  if (!n || Object.values(cols).some(a => a.length !== n)) {
    console.error(`⚠️  ${path.basename(file)}: field count mismatch — skipping`);
    return [];
  }
  return Array.from({ length: n }, (_, i) => {
    const row = {};
    for (const name of Object.keys(cols)) row[name] = cols[name][i];
    return row;
  });
}

function urlEntry({ path: p, priority, changefreq, lastmod }) {
  return [
    '  <url>',
    `    <loc>${SITE}${p}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].filter(Boolean).join('\n');
}

function main() {
  const cwd = process.cwd();

  const clinics = readData(path.join(cwd, 'src', 'data', 'clinicData.js'), { slug: 'slug' })
    .map(c => ({ path: `/ai-optimization/${c.slug}/`, priority: '0.8', changefreq: 'monthly' }));

  const posts = readData(path.join(cwd, 'src', 'data', 'blogData.jsx'),
    { slug: 'slug', updatedDate: 'updatedDate', publishDate: 'publishDate' })
    .map(p => ({
      path: `/blog/${p.slug}/`,
      priority: BLOG_PRIORITY[p.slug] || '0.7',
      changefreq: 'monthly',
      lastmod: p.updatedDate || p.publishDate,
    }));

  const all = [...STATIC_PAGES, ...clinics, ...posts];
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '',
    all.map(urlEntry).join('\n'),
    '',
    '</urlset>',
    '',
  ].join('\n');

  const outPath = path.join(cwd, 'public', 'sitemap.xml');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, xml, 'utf8');
  console.log(`✓ sitemap.xml: ${STATIC_PAGES.length} static + ${clinics.length} clinics + ${posts.length} posts = ${all.length} URLs`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) main();
