/**
 * Post-build script: copies dist/index.html to every route directory.
 * This ensures static hosts (Hostinger, Netlify, etc.) return 200 for
 * direct URL access to any SPA route — required for Googlebot indexing.
 */
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const dist = 'dist';
const src = join(dist, 'index.html');

const routes = [
  'about',
  'packages',
  'lead-gen-partner',
  'ai-optimization',
  'ai-optimization/physiotherapy-clinics',
  'ai-optimization/dental-clinics',
  'ai-optimization/wellness-clinics',
  'ai-optimization/fertility-clinics',
  'ai-optimization/beauty-clinics',
  'blog',
  'blog/ai-search-optimization-clinics-thailand',
  'blog/why-clinic-not-showing-chatgpt',
  'blog/how-chatgpt-chooses-clinic-recommendation',
  'blog/ai-optimization-dental-clinics-thailand',
  'blog/geo-vs-seo-clinics-bangkok',
  'blog/ai-search-audit-clinic-bangkok',
  'blog/how-to-choose-ai-optimization-agency-clinic-thailand',
  'blog/what-is-seo-complete-guide',
  'blog/on-page-seo-optimization-guide',
  'blog/backlinks-guide-seo',
  'blog/programmatic-seo-guide',
  'privacy-policy',
  'ai-search-visibility',
];

for (const route of routes) {
  const dir = join(dist, route);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  copyFileSync(src, join(dir, 'index.html'));
  console.log(`  ✓ ${route}/index.html`);
}

console.log(`\nCopied index.html to ${routes.length} routes.`);
