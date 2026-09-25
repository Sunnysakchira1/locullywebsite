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
            <p className="bfoot-desc">SEO & AI Visibility Experts.<br />Rank #1 in AI Search.</p>
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
            <div className="bfoot-label">Navigation</div>
            <div className="bfoot-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog/">Blog</Link>
              <Link to="/lead-gen-partner">Lead Gen Partner</Link>
              <Link to="/packages">One-Off Packages</Link>
              <Link to="/ai-optimization/">AI Optimization for Clinics</Link>
            </div>
          </div>

          <div>
            <div className="bfoot-label">Contact</div>
            <div className="bfoot-links">
              <a href="mailto:sunny@locully.org">sunny@locully.org</a>
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
            <span>Terms of Service</span>
            <img src="/locully-mark.png" alt="" className="bfoot-mark" width="12" height="22" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
