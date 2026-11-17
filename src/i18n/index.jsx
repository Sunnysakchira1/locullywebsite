import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { TH_PATHS, TH_NOINDEX, thPath } from './th-paths';
import { STRINGS } from './strings';

export { TH_PATHS, thPath };
export const SITE = 'https://www.locully.org';

export const isThPath = (pathname = '') => pathname === '/th' || pathname.startsWith('/th/');
const stripTh = (pathname) => (isThPath(pathname) ? pathname.replace(/^\/th/, '') || '/' : pathname);

/** 'th' on /th/* URLs, otherwise 'en'. */
export const useLocale = () => (isThPath(useLocation().pathname) ? 'th' : 'en');

/** Locale path: the /th version when the page has one, else the English path. */
export const lp = (path, locale) => (locale === 'th' && TH_PATHS.includes(path) ? thPath(path) : path);

/** Hook form of lp() for components: const l = useLp(); <Link to={l('/geo/')}> */
export const useLp = () => {
  const locale = useLocale();
  return (path) => lp(path, locale);
};

/** Shared chrome strings (nav, footer, CTA, form) for the current locale. */
export const useT = () => STRINGS[useLocale()];

/** The same page in the other language, or null when there isn't one. */
export const useAlternate = () => {
  const { pathname } = useLocation();
  const en = stripTh(pathname);
  if (!TH_PATHS.includes(en)) return null;
  return isThPath(pathname) ? { locale: 'en', path: en } : { locale: 'th', path: thPath(en) };
};

/**
 * hreflang set for a page pair. `path` is the ENGLISH path (e.g. "/geo/").
 * Renders nothing when the page has no Thai version or the pair is noindex.
 * Put it on BOTH the English and the Thai page so the tags are reciprocal.
 */
export const Hreflang = ({ path }) => {
  if (!TH_PATHS.includes(path) || TH_NOINDEX.includes(path)) return null;
  return (
    <Helmet>
      <link rel="alternate" hrefLang="en" href={`${SITE}${path}`} />
      <link rel="alternate" hrefLang="th" href={`${SITE}${thPath(path)}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE}${path}`} />
    </Helmet>
  );
};

/** Sets <html lang> from the URL. Mounted once in App. */
export const HtmlLang = () => {
  const locale = useLocale();
  return (
    <Helmet>
      <html lang={locale} />
      <meta property="og:locale" content={locale === 'th' ? 'th_TH' : 'en_US'} />
    </Helmet>
  );
};
