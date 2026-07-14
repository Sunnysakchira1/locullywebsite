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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org' },
    { '@type': 'ListItem', position: 2, name: 'AI Optimization for Clinics', item: 'https://www.locully.org/ai-optimization/' },
  ],
};

// Curated guides surfaced on the hub — pushes hub authority into the blog cluster
// and gives clinic owners a reading path.
const guides = [
  { slug: 'ai-search-optimization-clinics-thailand', title: 'AI Search Optimization for Clinics: The 2026 Guide', blurb: 'The complete framework for getting your clinic recommended by ChatGPT, Perplexity, and Google AI.' },
  { slug: 'why-clinic-not-showing-chatgpt', title: "Why Your Clinic Doesn't Appear in ChatGPT", blurb: 'Six reasons clinics are invisible in AI search — and the exact fixes.' },
  { slug: 'how-chatgpt-chooses-clinic-recommendation', title: 'How ChatGPT Decides Which Clinic to Recommend', blurb: 'The three signals that determine which Bangkok clinics AI recommends.' },
  { slug: 'ai-search-audit-clinic-bangkok', title: 'The AI Search Audit Every Bangkok Clinic Should Run', blurb: 'A 10-point checklist to see exactly where you stand in AI search.' },
  { slug: 'geo-vs-seo-clinics-bangkok', title: 'GEO vs SEO for Clinics: What Bangkok Owners Need', blurb: 'What each does, how the signals differ, and which to prioritize.' },
];

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Optimization for Bangkok Clinics',
  serviceType: 'AI Search Optimization',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: { '@type': 'City', name: 'Bangkok' },
  url: 'https://www.locully.org/ai-optimization/',
  description: 'Locully helps Bangkok clinics appear in ChatGPT, Perplexity, and Google AI Overviews — AI search optimization tailored by clinic type.',
};

export default function ForClinicsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };

  return (
    <>
      <Helmet>
        <title>AI Optimization Agency Thailand — GEO & AI Search | Locully</title>
        <meta name="description" content="Locully is a Thailand AI optimization agency — we get your business recommended by ChatGPT, Perplexity, and Google AI. Pick your clinic type to see how." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.locully.org/ai-optimization/" />
        <link rel="canonical" href="https://www.locully.org/ai-optimization/" />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
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
                AI Optimization Agency <em className="l-serif-em">Thailand</em>
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

        {/* Guides for clinic owners — hub → blog cluster */}
        <section className="l-section" style={{ background: 'var(--bg2, #130E0A)', borderTop: '1px solid var(--bdr)' }}>
          <div className="l-container">
            <div className="l-label" style={{ marginBottom: 12 }}>Guides for clinic owners</div>
            <h2 className="l-h2" style={{ marginBottom: 32 }}>
              Learn how <em className="l-serif-em">AI search</em> picks clinics
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  to={`/blog/${g.slug}/`}
                  style={{ display: 'flex', flexDirection: 'column', padding: '22px', background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 12, textDecoration: 'none', height: '100%', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--terra)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bdr)'}
                >
                  <h3 style={{ color: 'var(--cream)', fontWeight: 700, fontSize: 16, marginBottom: 10, fontFamily: 'var(--sans)', lineHeight: 1.35 }}>{g.title}</h3>
                  <p className="l-body" style={{ color: 'var(--muted)', fontSize: 13.5, marginBottom: 18, flex: 1 }}>{g.blurb}</p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--terra)', fontSize: 13, fontWeight: 600 }}>Read the guide <ArrowRight style={{ width: 13, height: 13 }} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
