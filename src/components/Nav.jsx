import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGoToAudit } from '@/brand/components';
import { industries } from '@/data/industryData';
import { useT, useLp, useLocale, useAlternate } from '@/i18n';

/**
 * Shared global navbar (brand v2), per the 2026-09 architecture brief:
 * Services ▾ · Industries ▾ · Insights · About + primary CTA.
 * Case Studies joins once /case-studies/ exists; Research joins Insights once real research exists.
 */
const SERVICES = [
  { to: '/seo/', key: 'seo' },
  { to: '/geo/', key: 'geo' },
  { to: '/performance-marketing/', key: 'performance' },
  { to: '/audit/', key: 'audit' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const onCta = useGoToAudit(close); // always opens /audit/; scrolls to its form when already there
  const t = useT();
  const l = useLp();
  const locale = useLocale();
  const alt = useAlternate(); // same page in the other language, when one exists
  const n = t.nav;
  const indName = (i) => (t.industries && t.industries[i.slug]) || i.name;
  const langLink = alt && (
    <Link to={alt.path} className="bnav-lang" hrefLang={alt.locale} lang={alt.locale} aria-label={n.switchLabel} onClick={close}>
      {n.switchTo}
    </Link>
  );

  return (
    <nav className="bnav" aria-label={n.main} lang={locale}>
      <div className="bnav-in">
        <Link to={l('/')} className="bnav-logo" aria-label={n.home} onClick={close}>
          <img src="/locully-wordmark-navy.png" alt="Locully" width="88" height="26" />
        </Link>

        <div className="bnav-right">
          <ul className="bnav-links">
            <li className="bnav-dd">
              <Link to={l('/seo/')}>{n.services}<span className="bnav-caret" aria-hidden="true" /></Link>
              <div className="bnav-dd-menu">
                {SERVICES.map((s) => <Link key={s.to} to={l(s.to)}>{n[s.key]}</Link>)}
              </div>
            </li>
            <li className="bnav-dd">
              <Link to={l('/industries/')}>{n.industries}<span className="bnav-caret" aria-hidden="true" /></Link>
              <div className="bnav-dd-menu">
                {industries.map((i) => <Link key={i.slug} to={l(`/industries/${i.slug}/`)}>{indName(i)}</Link>)}
              </div>
            </li>
            <li><Link to={l('/blog/')}>{n.insights}</Link></li>
            <li><Link to={l('/about')}>{n.about}</Link></li>
            {langLink && <li>{langLink}</li>}
          </ul>

          <a href={l('/audit/')} className="lb-btn bnav-cta" onClick={onCta}>
            <span className="bnav-cta-full">{t.cta}</span>
            <span className="bnav-cta-short">{t.ctaShort}</span>
          </a>

          <button
            type="button"
            className={`bnav-burger${open ? ' open' : ''}`}
            aria-label={n.toggle}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="bnav-mobile" onClick={close}>
          <Link to={l('/seo/')}>{n.seo}</Link>
          <Link to={l('/geo/')}>{n.geo}</Link>
          <Link to={l('/performance-marketing/')}>{n.performance}</Link>
          <Link to={l('/audit/')} className="bnav-mobile-sub">{n.audit}</Link>
          <Link to={l('/industries/')}>{n.industries}</Link>
          <Link to={l('/blog/')}>{n.insights}</Link>
          <Link to={l('/about')}>{n.about}</Link>
          <Link to={l('/contact/')}>{n.contact}</Link>
          {langLink}
          <a href={l('/audit/')} className="lb-btn" onClick={onCta}>{t.cta}</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
