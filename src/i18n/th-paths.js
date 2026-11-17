/**
 * EN paths that have a Thai counterpart at /th + path ("/" → "/th/").
 * Single source of truth for: hreflang tags, the language switcher, locale-aware
 * links (lp) and tools/generate-sitemap.js. Plain ESM, no JSX/aliases, so the
 * Node sitemap script can import it.
 *
 * Blog POSTS are not here yet: they stay English-only until translated, so they
 * carry no hreflang and Thai pages link to the English post.
 */
export const TH_PATHS = [
  '/',
  '/geo/',
  '/seo/',
  '/performance-marketing/',
  '/audit/',
  '/industries/',
  '/industries/physiotherapy-clinics/',
  '/industries/dental-clinics/',
  '/industries/wellness-clinics/',
  '/industries/fertility-clinics/',
  '/industries/beauty-clinics/',
  '/industries/property/',
  '/about',
  '/rachaphon-sakchiraphong/',
  '/contact/',
  '/lead-gen-partner',
  '/blog/',
  '/privacy-policy',
];

/** Thai pages that exist but are noindex: no hreflang, not in the sitemap. */
export const TH_NOINDEX = ['/privacy-policy'];

export const thPath = (p) => (p === '/' ? '/th/' : `/th${p}`);
