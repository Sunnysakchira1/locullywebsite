import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Footer from '@/components/Footer';
import { clinics } from '@/data/clinicData';

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://locully.org' },
    { '@type': 'ListItem', position: 2, name: 'AI Optimization for Clinics', item: 'https://locully.org/ai-optimization/' },
  ],
};

export default function ForClinicsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };

  return (
    <>
      <Helmet>
        <title>AI Optimization for Bangkok Clinics | Locully</title>
        <meta name="description" content="Locully helps Bangkok clinics appear in ChatGPT, Perplexity, and Google AI Overviews. Choose your clinic type to see how AIO works for you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://locully.org/ai-optimization/" />
        <link rel="canonical" href="https://locully.org/ai-optimization/" />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

        {/* Nav */}
        <nav className="l-subpage-nav">
          <Link to="/">
            <img src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" alt="Locully" className="l-subpage-logo" />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button onClick={openCalendly} className="l-btn l-btn-sm l-nav-audit" style={{ border: 'none' }}>Book a Call</button>
            <button className="l-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X style={{ width: 18, height: 18 }} /> : <Menu style={{ width: 18, height: 18 }} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div className="l-nav-mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
              <Link to="/" onClick={() => setMenuOpen(false)}>← Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/ai-search-visibility" onClick={() => setMenuOpen(false)}>AI Search Visibility</Link>
              <Link to="/packages" onClick={() => setMenuOpen(false)}>One-Off Packages</Link>
              <Link to="/blog/" onClick={() => setMenuOpen(false)}>Blog</Link>
              <button onClick={openCalendly} style={{ color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0', fontFamily: 'var(--sans)', fontSize: 16, textAlign: 'left', width: '100%', fontWeight: 600 }}>
                Book a Call →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="l-subpage-nav-spacer" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ padding: '12px 0', borderBottom: '1px solid var(--bdr)' }}>
          <div className="l-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)' }}>
              <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <span style={{ color: 'var(--cream)' }}>AI Optimization for Clinics</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="l-page-hero">
          <div className="l-container l-page-hero-inner" style={{ textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="l-label" style={{ marginBottom: 24, display: 'inline-flex' }}>AI Optimization · Bangkok Clinics</span>
              <h1 className="l-h1" style={{ marginBottom: 16 }}>
                Your patients are on <em className="l-serif-em">ChatGPT.</em><br />Is your clinic?
              </h1>
              <p className="l-body" style={{ maxWidth: 520, margin: '0 auto 40px', color: 'var(--muted)' }}>
                Bangkok patients increasingly use AI to find and choose clinics. Locully helps your clinic appear in those recommendations — by clinic type, treatment, and location.
              </p>
              <button className="l-btn" onClick={openCalendly} style={{ border: 'none' }}>
                Book a free consultation
                <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Clinic grid */}
        <section className="l-section" style={{ background: 'var(--bg)' }}>
          <div className="l-container">
            <div className="l-label" style={{ marginBottom: 32 }}>Choose your clinic type</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
              {clinics.map((clinic, i) => (
                <motion.div
                  key={clinic.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    to={`/ai-optimization/${clinic.slug}/`}
                    style={{ display: 'flex', flexDirection: 'column', padding: '24px', background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 12, textDecoration: 'none', height: '100%', transition: 'border-color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--terra)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bdr)'}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                      Bangkok · AI Optimization
                    </div>
                    <h2 style={{ color: 'var(--cream)', fontWeight: 700, fontSize: 20, marginBottom: 10, fontFamily: 'var(--sans)' }}>
                      {clinic.namePlural}
                    </h2>
                    <p className="l-body" style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 20, flex: 1, lineClamp: 2, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {clinic.intro}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--terra)', fontSize: 13, fontWeight: 600 }}>
                      See how it works <ArrowRight style={{ width: 13, height: 13 }} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
