import { useState } from 'react';
import { Link } from 'react-router-dom';
import { goToLeadForm } from '@/brand/components';

/**
 * Shared global navbar — one fixed nav on every page (brand v2).
 * Desktop: About · Services (→ /geo/) · Packages · Blog + CTA.
 * Mobile: wordmark + "Free AI check" + menu button (all links in the panel).
 */
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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/geo/">Services</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/blog/">Blog</Link></li>
          </ul>

          <a href="/#contact" className="lb-btn bnav-cta" onClick={onCta}>
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
          <Link to="/about">About</Link>
          <Link to="/geo/">Services</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/blog/">Blog</Link>
          <a href="/#contact" className="lb-btn" onClick={onCta}>Get my free AI visibility check</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
