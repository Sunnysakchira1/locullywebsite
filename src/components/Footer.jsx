import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--bdr)',
      padding: '72px 0 40px'
    }}>
      <div className="l-container">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px', marginBottom: '64px'
        }}>
          {/* Logo + tagline */}
          <div>
            <Link to="/">
              <img
                src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png"
                alt="Locully Logo"
                style={{ width: '160px', height: 'auto', objectFit: 'contain', marginBottom: '16px', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="l-body-sm" style={{ maxWidth: '220px' }}>
              SEO & AI Visibility Experts.<br />Rank #1 in AI Search.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--muted2)', marginBottom: '20px'
            }}>Navigation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Lead Gen Partner', to: '/lead-gen-partner' },
                { label: 'One-Off Packages', to: '/packages' },
              ].map(({ label, to }) => (
                <Link key={to} to={to} style={{
                  color: 'var(--muted)', fontSize: '14px', textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                  onMouseEnter={e => e.target.style.color = 'var(--terra)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >{label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--muted2)', marginBottom: '20px'
            }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="mailto:sunny@locully.org" className="l-body-sm" style={{ textDecoration: 'none', color: 'var(--muted)' }}>
                sunny@locully.org
              </a>
              <span className="l-body-sm">+66 62 695 9444</span>
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                <a href="https://www.linkedin.com/company/locully" target="_blank" rel="noopener noreferrer" style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'var(--surface)', border: '1px solid var(--bdr)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--terra)'; e.currentTarget.style.borderColor = 'var(--terra)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'var(--bdr)'; e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  <Linkedin style={{ width: '16px', height: '16px' }} />
                </a>
                <a href="https://instagram.com/locully.th" target="_blank" rel="noopener noreferrer" style={{
                  width: '36px', height: '36px', borderRadius: '8px',
                  background: 'var(--surface)', border: '1px solid var(--bdr)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--muted)', transition: 'all 0.2s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--terra)'; e.currentTarget.style.borderColor = 'var(--terra)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--surface)'; e.currentTarget.style.borderColor = 'var(--bdr)'; e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  <Instagram style={{ width: '16px', height: '16px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          paddingTop: '28px', borderTop: '1px solid var(--bdr)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px'
        }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)' }}>
            © 2026 Locully Co. Ltd. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <span key={item} style={{
                fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)',
                cursor: 'pointer', transition: 'color 0.2s'
              }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
