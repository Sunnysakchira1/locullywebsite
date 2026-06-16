import { Link } from 'react-router-dom';

/**
 * Shared global navbar — rendered once in App.jsx so every page has the
 * exact same sticky nav. Replaces the inconsistent per-page navs
 * (.l-nav / .l-subpage-nav), which are hidden via CSS.
 */
const Nav = () => (
  <nav className="gnav">
    <Link to="/" className="gnav-logo" aria-label="Locully home">
      <img src="/locully-wordmark.png" alt="Locully" className="gnav-logo-img" />
    </Link>

    <ul className="gnav-links">
      <li><Link to="/ai-optimization/">For Clinics</Link></li>
      <li><Link to="/ai-search-visibility">Services</Link></li>
      <li><Link to="/packages">Packages</Link></li>
      <li><Link to="/blog/">Blog</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>

    <a href="/#contact" className="gnav-cta">Get My Free AI Visibility Audit</a>
  </nav>
);

export default Nav;
