import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };
  const scrollToContact = () => { window.location.href = '/#contact'; setMenuOpen(false); };

  const s = {
    h2: { fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 600, color: 'var(--cream)', marginTop: 48, marginBottom: 12 },
    p: { fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 16 },
    ul: { paddingLeft: 20, marginBottom: 16 },
    li: { fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 6 },
    a: { color: 'var(--terra)', textDecoration: 'none' },
  };

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Locully</title>
        <meta name="description" content="Locully's privacy policy — how we collect, use, and protect your personal data." />
        <link rel="canonical" href="https://www.locully.org/privacy-policy" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

        {/* Nav */}
        <nav className="l-subpage-nav">
          <Link to="/">
            <img src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" alt="Locully" className="l-subpage-logo" />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={scrollToContact} className="l-btn l-btn-sm l-nav-audit" style={{ border: 'none' }}>Get Free Audit</button>
            <button className="l-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X style={{ width: 18, height: 18 }} /> : <Menu style={{ width: 18, height: 18 }} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <motion.div className="l-nav-mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}>
            <Link to="/" onClick={() => setMenuOpen(false)}>← Home</Link>
            <Link to="/ai-optimization/" onClick={() => setMenuOpen(false)}>AI Optimization for Clinics</Link>
            <Link to="/packages" onClick={() => setMenuOpen(false)}>One-Off Packages</Link>
            <Link to="/blog/" onClick={() => setMenuOpen(false)}>Blog</Link>
            <button onClick={openCalendly} style={{ color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0', fontFamily: 'var(--sans)', fontSize: 16, textAlign: 'left', width: '100%', fontWeight: 600 }}>
              Book a Call →
            </button>
          </motion.div>
        )}

        <div className="l-subpage-nav-spacer" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ padding: '12px 0', borderBottom: '1px solid var(--bdr)' }}>
          <div className="l-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)' }}>
              <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'var(--cream)' }}>Privacy Policy</span>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="l-container" style={{ maxWidth: 760, padding: '72px 24px 96px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            <div className="l-label" style={{ marginBottom: 16 }}>Legal</div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 400, color: 'var(--cream)', lineHeight: 1.15, marginBottom: 12 }}>
              Privacy Policy
            </h1>
            <p style={{ ...s.p, color: 'var(--muted2)', fontSize: 13 }}>
              Last updated: March 2026 &nbsp;·&nbsp; Locully Co. Ltd., Bangkok, Thailand
            </p>

            <div style={{ height: 1, background: 'var(--bdr)', margin: '32px 0' }} />

            <p style={s.p}>
              This Privacy Policy explains how Locully Co. Ltd. ("Locully", "we", "us", or "our") collects, uses, and protects information when you visit <a href="https://www.locully.org" style={s.a}>locully.org</a> or contact us about our services.
            </p>

            <h2 style={s.h2}>1. Information We Collect</h2>
            <p style={s.p}>We collect information in two ways:</p>
            <ul style={s.ul}>
              <li style={s.li}><strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Information you provide</strong> — name, email address, clinic name, phone number, and any other details you submit via our contact form or when booking a call.</li>
              <li style={s.li}><strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Information collected automatically</strong> — pages visited, time on site, browser type, device type, and general geographic location (country/city), collected via Google Analytics and Meta Pixel.</li>
            </ul>

            <h2 style={s.h2}>2. How We Use Your Information</h2>
            <p style={s.p}>We use the information we collect to:</p>
            <ul style={s.ul}>
              <li style={s.li}>Respond to enquiries and provide our services</li>
              <li style={s.li}>Send follow-up communications related to your request</li>
              <li style={s.li}>Improve our website and understand how visitors use it</li>
              <li style={s.li}>Run targeted advertising campaigns on Meta (Facebook/Instagram)</li>
            </ul>
            <p style={s.p}>We do not sell, rent, or trade your personal information to third parties.</p>

            <h2 style={s.h2}>3. Cookies & Tracking</h2>
            <p style={s.p}>Our website uses the following tracking tools:</p>
            <ul style={s.ul}>
              <li style={s.li}><strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Google Tag Manager / Google Analytics</strong> — measures site traffic and user behaviour anonymously.</li>
              <li style={s.li}><strong style={{ color: 'var(--cream)', fontWeight: 500 }}>Meta Pixel</strong> — tracks page views and conversions to measure ad performance on Facebook and Instagram.</li>
            </ul>
            <p style={s.p}>You can opt out of Google Analytics at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={s.a}>tools.google.com/dlpage/gaoptout</a>. You can manage Meta ad preferences at <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer" style={s.a}>facebook.com/ads/preferences</a>.</p>

            <h2 style={s.h2}>4. Data Storage & Security</h2>
            <p style={s.p}>
              Contact form submissions are processed via Formspree and stored securely. We take reasonable technical measures to protect your data, but no method of transmission over the internet is 100% secure.
            </p>

            <h2 style={s.h2}>5. Third-Party Services</h2>
            <p style={s.p}>We use the following third-party services that may process your data under their own privacy policies:</p>
            <ul style={s.ul}>
              <li style={s.li}>Formspree (contact form processing)</li>
              <li style={s.li}>Google Analytics (website analytics)</li>
              <li style={s.li}>Meta Pixel (advertising measurement)</li>
              <li style={s.li}>Calendly (call booking)</li>
              <li style={s.li}>Vercel (website hosting)</li>
            </ul>

            <h2 style={s.h2}>6. Your Rights</h2>
            <p style={s.p}>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at <a href="mailto:sunny@locully.org" style={s.a}>sunny@locully.org</a>.</p>

            <h2 style={s.h2}>7. Changes to This Policy</h2>
            <p style={s.p}>We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.</p>

            <h2 style={s.h2}>8. Contact</h2>
            <p style={s.p}>
              For any questions about this Privacy Policy:<br />
              <a href="mailto:sunny@locully.org" style={s.a}>sunny@locully.org</a><br />
              Locully Co. Ltd., Bangkok, Thailand
            </p>

          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
}
