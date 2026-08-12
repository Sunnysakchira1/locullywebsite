import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Shared global navbar — one sticky nav on every page.
 * Desktop: About · Services · Packages · Blog▾ (For Clinics under Blog) + CTA.
 * Mobile: hamburger opens a panel with all links (For Clinics nested under Blog) + CTA.
 */
const Nav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="gnav">
      <Link to="/" className="gnav-logo" aria-label="Locully home" onClick={close}>
        <img src="/locully-wordmark.png" alt="Locully" className="gnav-logo-img" />
      </Link>

      <ul className="gnav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/ai-search-visibility">Services</Link></li>
        <li><Link to="/audit">Free Audit</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li className="gnav-dd">
          <Link to="/blog/">Blog <span className="gnav-caret">▾</span></Link>
          <div className="gnav-dd-menu">
            <Link to="/ai-optimization/">For Clinics</Link>
            <Link to="/blog/">All Articles</Link>
          </div>
        </li>
      </ul>

      <Link to="/audit" className="gnav-cta">Get My Free AI Visibility Audit</Link>

      <button
        className={`gnav-burger${open ? ' open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <div className="gnav-mobile" onClick={close}>
          <Link to="/about">About</Link>
          <Link to="/ai-search-visibility">Services</Link>
          <Link to="/audit">Free Audit</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/ai-optimization/" className="gnav-mobile-sub">For Clinics</Link>
          <Link to="/audit" className="gnav-mobile-cta">Get My Free AI Visibility Audit</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
