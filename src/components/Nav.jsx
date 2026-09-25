import { useState } from 'react';
import { Link } from 'react-router-dom';
import { goToLeadForm } from '@/brand/components';
import { industries } from '@/data/industryData';

/**
 * Shared global navbar (brand v2), per the 2026-09 architecture brief:
 * Services ▾ · Industries ▾ · Insights · About + primary CTA.
 * Case Studies joins once /case-studies/ exists; Research joins Insights once real research exists.
 */
const SERVICES = [
  { to: '/seo/', label: 'SEO' },
  { to: '/geo/', label: 'AI search / GEO' },
  { to: '/performance-marketing/', label: 'Performance marketing' },
  { to: '/geo/ai-visibility-audit/', label: 'Free AI visibility audit' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const onCta = (e) => { close(); goToLeadForm(e); };

  return (
    <nav className="bnav" aria-label="Main">
      <div className="bnav-in">
        <Link to="/" className="bnav-logo" aria-label="Locully home" onClick={close}>
          <img src="/locully-wordmark-navy.png" alt="Locully" width="88" height="26" />
        </Link>

        <div className="bnav-right">
          <ul className="bnav-links">
            <li className="bnav-dd">
              <Link to="/seo/">Services<span className="bnav-caret" aria-hidden="true" /></Link>
              <div className="bnav-dd-menu">
                {SERVICES.map((s) => <Link key={s.to} to={s.to}>{s.label}</Link>)}
              </div>
            </li>
            <li className="bnav-dd">
              <Link to="/industries/">Industries<span className="bnav-caret" aria-hidden="true" /></Link>
              <div className="bnav-dd-menu">
                {industries.map((i) => <Link key={i.slug} to={`/industries/${i.slug}/`}>{i.name}</Link>)}
              </div>
            </li>
            <li><Link to="/blog/">Insights</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <a href="/geo/ai-visibility-audit/#book" className="lb-btn bnav-cta" onClick={onCta}>
            <span className="bnav-cta-full">Free AI visibility check</span>
            <span className="bnav-cta-short">Free AI check</span>
          </a>

          <button
            type="button"
            className={`bnav-burger${open ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="bnav-mobile" onClick={close}>
          <Link to="/seo/">SEO</Link>
          <Link to="/geo/">AI search / GEO</Link>
          <Link to="/performance-marketing/">Performance marketing</Link>
          <Link to="/geo/ai-visibility-audit/" className="bnav-mobile-sub">Free AI visibility audit</Link>
          <Link to="/industries/">Industries</Link>
          <Link to="/blog/">Insights</Link>
          <Link to="/about">About</Link>
          <Link to="/contact/">Contact</Link>
          <a href="/geo/ai-visibility-audit/#book" className="lb-btn" onClick={onCta}>Get my free AI visibility check</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
