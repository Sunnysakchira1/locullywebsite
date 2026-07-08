#!/usr/bin/env node

/**
 * Generates public/llms.txt — a guide to the site for AI crawlers.
 *
 * URLs are authoritative (match the routes in App.jsx). Clinic pages are pulled
 * from src/data/clinicData.js and blog posts from src/data/blogData.jsx so new
 * posts/clinics appear automatically. Static pages are curated below.
 *
 * (Rewritten 2026-07: the previous version used `routes.length` on a Map — always
 * undefined — so every page fell back to a slugged component name, e.g. /forclinics,
 * and it only scanned src/pages/. Result: llms.txt listed one page with a dead URL.)
 */

import fs from 'fs';
import path from 'path';

const SITE = 'https://www.locully.org';

// Curated static pages (rarely change). URLs match App.jsx routes exactly.
const STATIC_PAGES = [
  { url: '/', title: 'Locully — AI Search Visibility for Bangkok Clinics',
    desc: 'Get your clinic recommended by ChatGPT, Perplexity, and Google AI Overviews. Locully is a Bangkok agency specialising in AI search visibility (GEO/AIO) for healthcare clinics.' },
  { url: '/ai-optimization/', title: 'AI Optimization for Bangkok Clinics',
    desc: 'How AI search optimization works for clinics — choose your clinic type to see the specific strategy.' },
  { url: '/ai-search-visibility', title: 'AI Search Visibility Service',
    desc: "Locully's core service: making your clinic the answer AI assistants give when patients search." },
  { url: '/packages', title: 'One-Off Packages',
    desc: 'No-retainer packages — content writing and backlink building for clinics, priced per project.' },
  { url: '/lead-gen-partner', title: 'Local Marketing Partner for Fairs & Expos',
    desc: 'Locully as your on-the-ground local marketing team for international fairs and expos in Thailand.' },
  { url: '/about', title: 'About Locully',
    desc: 'Bangkok-based agency specialising exclusively in AI search visibility for healthcare clinics.' },
  { url: '/blog/', title: 'Blog',
    desc: 'Guides on AI search, GEO/AIO, and SEO for clinics.' },
  { url: '/privacy-policy', title: 'Privacy Policy',
    desc: 'How Locully collects, uses, and protects personal data.' },
];

// Extract a list of {field: value} for each object in a data file.
// Matches a JS string literal (single or double quoted, with escapes) after `key:`.
function extractField(src, key) {
  const re = new RegExp(key + '\\s*:\\s*(["\'])((?:\\\\.|(?!\\1).)*)\\1', 'g');
  const out = [];
  let m;
  while ((m = re.exec(src)) !== null) {
    out.push(m[2].replace(/\\(['"])/g, '$1').replace(/\s+/g, ' ').trim());
  }
  return out;
}

// Zip parallel field arrays into objects (all pages define every field, so
// index alignment is safe). Returns [] if counts disagree, so a parse drift
// never emits mismatched data.
function zipPages(file, fieldMap, makeEntry) {
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, 'utf8');
  const cols = {};
  for (const [name, key] of Object.entries(fieldMap)) cols[name] = extractField(src, key);
  const lens = Object.values(cols).map(a => a.length);
  const n = lens[0];
  if (!n || lens.some(l => l !== n)) {
    console.error(`⚠️  ${path.basename(file)}: field count mismatch ${JSON.stringify(lens)} — skipping`);
    return [];
  }
  return Array.from({ length: n }, (_, i) => {
    const row = {};
    for (const name of Object.keys(cols)) row[name] = cols[name][i];
    return makeEntry(row);
  });
}

function section(title, pages) {
  if (!pages.length) return '';
  const lines = pages.map(p => `- [${p.title}](${SITE}${p.url}): ${p.desc}`).join('\n');
  return `## ${title}\n${lines}\n`;
}

function main() {
  const cwd = process.cwd();

  const clinics = zipPages(
    path.join(cwd, 'src', 'data', 'clinicData.js'),
    { slug: 'slug', namePlural: 'namePlural', desc: 'metaDescription' },
    r => ({ url: `/ai-optimization/${r.slug}/`, title: `${r.namePlural} in AI Search`, desc: r.desc })
  );

  const posts = zipPages(
    path.join(cwd, 'src', 'data', 'blogData.jsx'),
    { slug: 'slug', title: 'title', desc: 'metaDescription' },
    r => ({ url: `/blog/${r.slug}/`, title: r.title, desc: r.desc })
  );

  const body = [
    '# Locully',
    '',
    '> Locully is a Bangkok-based agency specialising in AI search visibility (GEO / AIO) for healthcare clinics — making them the clinic ChatGPT, Perplexity, and Google AI Overviews recommend.',
    '',
    section('Main Pages', STATIC_PAGES),
    section('AI Optimization by Clinic Type', clinics),
    section('Blog', posts),
    '## Contact',
    '- Website: https://www.locully.org',
    '- Email: sunny@locully.org',
    '- Location: Bangkok, Thailand',
    '',
  ].join('\n');

  const outPath = path.join(cwd, 'public', 'llms.txt');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, body, 'utf8');
  console.log(`✓ llms.txt: ${STATIC_PAGES.length} static + ${clinics.length} clinics + ${posts.length} posts`);
}

const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) main();
