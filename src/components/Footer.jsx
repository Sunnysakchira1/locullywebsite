import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useT, useLp } from '@/i18n';

const Footer = () => {
  const t = useT();
  const l = useLp();
  const f = t.footer;
  const n = t.nav;
  return (
    <footer className="bfoot">
      <div className="bfoot-in">
        <div className="bfoot-grid">
          <div>
            <Link to={l('/')} className="bfoot-logo" aria-label={n.home}>
              <img src="/locully-wordmark-navy.png" alt="Locully Logo" width="81" height="24" />
            </Link>
            <p className="bfoot-desc">{f.desc}</p>
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
            <div className="bfoot-label">{f.services}</div>
            <div className="bfoot-links">
              <Link to={l('/seo/')}>{n.seo}</Link>
              <Link to={l('/geo/')}>{n.geo}</Link>
              <Link to={l('/performance-marketing/')}>{n.performance}</Link>
              <Link to={l('/audit/')}>{n.audit}</Link>
              <Link to={l('/lead-gen-partner')}>{f.fairs}</Link>
            </div>
          </div>

          <div>
            <div className="bfoot-label">{f.company}</div>
            <div className="bfoot-links">
              <Link to={l('/about')}>{f.aboutLocully}</Link>
              <Link to={l('/rachaphon-sakchiraphong/')}>{f.founder}</Link>
              <Link to={l('/industries/')}>{n.industries}</Link>
              <Link to={l('/blog/')}>{n.insights}</Link>
              <Link to={l('/contact/')}>{n.contact}</Link>
            </div>
          </div>

          <div>
            <div className="bfoot-label"><Link to={l('/contact/')}>{f.contact}</Link></div>
            <div className="bfoot-links">
              <a href="mailto:admin@locully.org">admin@locully.org</a>
              <span>+66 62 695 9444</span>
              <span>{f.location}</span>
            </div>
          </div>
        </div>

        <div className="bfoot-bottom">
          <p className="bfoot-copy">{f.rights}</p>
          <div className="bfoot-legal">
            <a href="https://seojuice.com" target="_blank" rel="noopener noreferrer">SEOJuice</a>
            <Link to={l('/privacy-policy')}>{f.privacy}</Link>
                        <img src="/locully-mark.png" alt="" className="bfoot-mark" width="12" height="22" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
