import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bfoot">
      <div className="bfoot-in">
        <div className="bfoot-grid">
          <div>
            <Link to="/" className="bfoot-logo" aria-label="Locully home">
              <img src="/locully-wordmark-navy.png" alt="Locully Logo" width="81" height="24" />
            </Link>
            <p className="bfoot-desc">SEO, AI search (GEO) and performance marketing agency in Bangkok.</p>
            <div className="bfoot-social">
              <a href="https://www.linkedin.com/company/locully" target="_blank" rel="noopener noreferrer" aria-label="Locully on LinkedIn">
                <Linkedin style={{ width: '16px', height: '16px' }} />
              </a>
              <a href="https://instagram.com/locully.th" target="_blank" rel="noopener noreferrer" aria-label="Locully on Instagram">
                <Instagram style={{ width: '16px', height: '16px' }} />
              </a>
            </div>
          </div>

          <div>
            <div className="bfoot-label">Services</div>
            <div className="bfoot-links">
              <Link to="/seo/">SEO</Link>
              <Link to="/geo/">AI search / GEO</Link>
              <Link to="/performance-marketing/">Performance marketing</Link>
              <Link to="/audit/">GEO audit</Link>
              <Link to="/packages">One-off SEO packages</Link>
              <Link to="/lead-gen-partner">Fairs &amp; expos partner</Link>
            </div>
          </div>

          <div>
            <div className="bfoot-label">Company</div>
            <div className="bfoot-links">
              <Link to="/about">About Locully</Link>
              <Link to="/rachaphon-sakchiraphong/">Founder</Link>
              <Link to="/industries/">Industries</Link>
              <Link to="/blog/">Insights</Link>
              <Link to="/contact/">Contact</Link>
            </div>
          </div>

          <div>
            <div className="bfoot-label"><Link to="/contact/">Contact</Link></div>
            <div className="bfoot-links">
              <a href="mailto:admin@locully.org">admin@locully.org</a>
              <span>+66 62 695 9444</span>
              <span>Bangkok, Thailand</span>
            </div>
          </div>
        </div>

        <div className="bfoot-bottom">
          <p className="bfoot-copy">© 2026 Locully Co. Ltd. All rights reserved.</p>
          <div className="bfoot-legal">
            <a href="https://seojuice.com" target="_blank" rel="noopener noreferrer">SEOJuice</a>
            <Link to="/privacy-policy">Privacy Policy</Link>
                        <img src="/locully-mark.png" alt="" className="bfoot-mark" width="12" height="22" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
