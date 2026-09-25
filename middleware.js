// Vercel Routing Middleware: returns 410 Gone for legacy local-SEO URLs retired
// in the 2026-09 architecture migration. Scoped by `matcher`, so no other path
// invokes it. The rank checker URLs are deliberately NOT here: they stay 404
// until the tool is rebuilt (see wiki/locully/website/architecture).
export const config = {
  matcher: [
    '/local-seo',
    '/local-seo/',
    '/local-seo-thailand-2025',
    '/local-seo-thailand-2025/',
    '/thailand-local-seo',
    '/thailand-local-seo/',
    '/local-seo-for-restaurants',
    '/local-seo-for-restaurants/',
    '/using-the-local-seo-rank-checker',
    '/using-the-local-seo-rank-checker/',
    '/rank-checker-copy',
    '/rank-checker-copy/',
    '/hotel',
    '/hotel/',
  ],
};

export default function middleware() {
  return new Response(
    '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Page removed | Locully</title></head><body><p>This page has been permanently removed. <a href="https://www.locully.org/">Go to Locully</a>.</p></body></html>',
    { status: 410, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=3600' } },
  );
}
