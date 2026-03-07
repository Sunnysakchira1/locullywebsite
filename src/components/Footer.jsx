import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="l-footer">
      <div className="l-container">
        <div className="l-footer-grid">
          <div className="l-footer-logo">
            <Link to="/">
              <img
                src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png"
                alt="Locully Logo"
              />
            </Link>
            <p className="l-footer-desc">SEO & AI Visibility Experts.<br />Rank #1 in AI Search.</p>
            <div className="l-social-row" style={{ marginTop: '20px' }}>
              <a href="https://www.linkedin.com/company/locully" target="_blank" rel="noopener noreferrer" className="l-social-btn">
                <Linkedin style={{ width: '16px', height: '16px' }} />
              </a>
              <a href="https://instagram.com/locully.th" target="_blank" rel="noopener noreferrer" className="l-social-btn">
                <Instagram style={{ width: '16px', height: '16px' }} />
              </a>
            </div>
          </div>

          <div>
            <div className="l-footer-col-title">Navigation</div>
            <div className="l-footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/lead-gen-partner">Lead Gen Partner</Link>
              <Link to="/packages">One-Off Packages</Link>
              <Link to="/ai-optimization/">AI Optimization for Clinics</Link>
            </div>
          </div>

          <div>
            <div className="l-footer-col-title">Contact</div>
            <div className="l-footer-links">
              <a href="mailto:sunny@locully.org">sunny@locully.org</a>
              <span style={{ color: 'var(--muted)', fontSize: '13.5px' }}>+66 62 695 9444</span>
              <span style={{ color: 'var(--muted2)', fontSize: '12px' }}>Bangkok, Thailand</span>
            </div>
          </div>
        </div>

        <div className="l-footer-bottom">
          <p className="l-footer-copy">© 2026 Locully Co. Ltd. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <span key={item} style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)', cursor: 'pointer' }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
