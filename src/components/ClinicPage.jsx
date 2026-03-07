import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, CheckSquare, Square } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { clinics, getClinic } from '@/data/clinicData';

const selfTestItems = [
  "You've never searched for your own clinic on ChatGPT or Perplexity",
  'When you do search, your clinic doesn\'t appear in the recommendations',
  'Your website has no structured FAQ or Q&A section',
  'You rely entirely on Google Maps or paid ads to get new patients',
  'Patients rarely or never mention finding you through AI search',
  'You don\'t know which AI-generated queries your competitors appear in',
  'Your website content hasn\'t been updated in over a year',
  'You\'ve never heard of "AI share of voice" for clinics',
];

const serviceProcess = [
  {
    num: '01',
    title: ['AI Visibility ', 'Audit'],
    body: 'We benchmark your clinic across ChatGPT, Perplexity, and Google AI Overviews — showing exactly which queries you appear in, which you\'re missing, and who\'s taking your share of voice.',
  },
  {
    num: '02',
    title: ['Content & Citation ', 'Architecture'],
    body: 'We build or restructure your web content so AI engines can read, parse, and cite it. Treatment pages, condition-specific Q&A, practitioner profiles — all engineered for AI citation.',
  },
  {
    num: '03',
    title: ['Schema & Entity ', 'Signals'],
    body: 'Structured data (JSON-LD), entity disambiguation, and authority signals tell AI engines exactly what your clinic does, who it serves, and why it should be recommended.',
  },
  {
    num: '04',
    title: ['Monthly AI ', 'Reporting'],
    body: 'Every month you receive a report showing your AI citation count, which queries you\'re winning, how you rank against competitors, and where the next opportunities are.',
  },
];

export default function ClinicPage({ slug }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const clinic = getClinic(slug);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };
  const scrollToContact = () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  if (!clinic) return null;

  const toggleCheck = (i) => {
    setCheckedItems(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const checkedCount = checkedItems.length;

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `AI Optimization for ${clinic.namePlural}`,
    provider: { '@id': 'https://locully.org/#organization' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    description: clinic.metaDescription,
    serviceType: 'AI Search Optimization',
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: clinic.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://locully.org' },
      { '@type': 'ListItem', position: 2, name: 'AI Optimization for Clinics', item: 'https://locully.org/ai-optimization/' },
      { '@type': 'ListItem', position: 3, name: clinic.namePlural, item: `https://locully.org/ai-optimization/${clinic.slug}/` },
    ],
  };

  const otherClinics = clinics.filter((c) => c.slug !== slug);

  return (
    <>
      <Helmet>
        <title>{clinic.headline} | Locully</title>
        <meta name="description" content={clinic.metaDescription} />
        <meta property="og:title" content={`${clinic.headline} | Locully`} />
        <meta property="og:description" content={clinic.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://locully.org/ai-optimization/${clinic.slug}/`} />
        <link rel="canonical" href={`https://locully.org/ai-optimization/${clinic.slug}/`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
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

        <AnimatePresence>
          {menuOpen && (
            <motion.div className="l-nav-mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
              <Link to="/" onClick={() => setMenuOpen(false)}>← Home</Link>
              <Link to="/ai-optimization/" onClick={() => setMenuOpen(false)}>AI Optimization for Clinics</Link>
              <Link to="/packages" onClick={() => setMenuOpen(false)}>One-Off Packages</Link>
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
              <Link to="/ai-optimization/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>For Clinics</Link>
              <span>/</span>
              <span style={{ color: 'var(--cream)' }}>{clinic.namePlural}</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="l-page-hero">
          <div className="l-container l-page-hero-inner">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <span className="l-label">AI Optimization · Bangkok</span>
              </div>
              <h1 className="l-h1" style={{ marginBottom: 20, maxWidth: 700, textAlign: 'left' }}>
                {clinic.name} Clinics<br />in <em className="l-serif-em">AI Search</em>
              </h1>
              <p className="l-body" style={{ maxWidth: 560, color: 'var(--muted)', marginBottom: 32 }}>
                {clinic.intro}
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="l-btn" onClick={scrollToContact} style={{ border: 'none' }}>
                  Get Free AI Audit
                  <ArrowRight style={{ width: 16, height: 16 }} />
                </button>
                <button className="l-btn-ghost" onClick={openCalendly}>Book a Call</button>
              </div>
              <motion.div
                className="l-stat-grid"
                style={{ gridTemplateColumns: 'repeat(3,1fr)', marginTop: 48, maxWidth: 480 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                <div className="l-stat-cell"><span className="l-stat-num">10×</span><span className="l-stat-lbl">AI Citations</span></div>
                <div className="l-stat-cell"><span className="l-stat-num">+350%</span><span className="l-stat-lbl">AI Mentions</span></div>
                <div className="l-stat-cell"><span className="l-stat-num">3+</span><span className="l-stat-lbl">AI Platforms</span></div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Self-test checklist */}
        <section className="l-section" style={{ background: 'var(--bg2, #130E0A)' }}>
          <div className="l-container">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
              <div className="l-label" style={{ marginBottom: 16 }}>Self-Test</div>
              <h2 className="l-h2" style={{ marginBottom: 12 }}>
                Is your {clinic.name.toLowerCase()} clinic <em className="l-serif-em">invisible</em> to AI?
              </h2>
              <p className="l-body" style={{ color: 'var(--muted)', marginBottom: 40, maxWidth: 520 }}>
                Tick every statement that applies to your clinic right now.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 12, marginBottom: 32 }}>
                {selfTestItems.map((item, i) => {
                  const checked = checkedItems.includes(i);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleCheck(i)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 12, padding: '16px 18px',
                        background: checked ? 'rgba(204,100,50,0.12)' : 'var(--surface)',
                        border: `1px solid ${checked ? 'var(--terra)' : 'var(--bdr)'}`,
                        borderRadius: 10, cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                        fontFamily: 'var(--sans)', color: checked ? 'var(--cream)' : 'var(--muted)',
                      }}
                    >
                      {checked
                        ? <CheckSquare style={{ width: 18, height: 18, color: 'var(--terra)', flexShrink: 0, marginTop: 1 }} />
                        : <Square style={{ width: 18, height: 18, color: 'var(--muted2, rgba(245,242,236,0.25))', flexShrink: 0, marginTop: 1 }} />
                      }
                      <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                    </button>
                  );
                })}
              </div>

              {checkedCount >= 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ padding: '20px 24px', background: 'rgba(204,100,50,0.1)', border: '1px solid var(--terra)', borderRadius: 12, maxWidth: 600 }}
                >
                  <p style={{ color: 'var(--terra)', fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
                    {checkedCount} of 8 — your clinic is underrepresented in AI search.
                  </p>
                  <p className="l-body" style={{ color: 'var(--muted)', marginBottom: 16, fontSize: 14 }}>
                    This is fixable. Locully specialises in exactly this situation — we've taken Bangkok clinics from zero AI citations to appearing consistently across ChatGPT, Perplexity, and Google AI Overviews.
                  </p>
                  <button className="l-btn l-btn-sm" onClick={scrollToContact} style={{ border: 'none' }}>
                    Get a free audit — see where you stand
                    <ArrowRight style={{ width: 14, height: 14 }} />
                  </button>
                </motion.div>
              )}

              {checkedCount > 0 && checkedCount < 3 && (
                <p style={{ color: 'var(--muted)', fontSize: 14 }}>
                  {checkedCount} ticked. Check more that apply — most clinic owners tick 4 or more.
                </p>
              )}
            </motion.div>
          </div>
        </section>

        {/* How patients search */}
        <section className="l-section" style={{ background: 'var(--bg)' }}>
          <div className="l-container">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
              <div className="l-label" style={{ marginBottom: 16 }}>Patient Behaviour</div>
              <h2 className="l-h2" style={{ marginBottom: 14 }}>
                How Bangkok patients find {clinic.name.toLowerCase()} clinics <em className="l-serif-em">through AI</em>
              </h2>
              <p className="l-body" style={{ color: 'var(--muted)', maxWidth: 520, marginBottom: 40 }}>
                {clinic.searchBehavior}
              </p>

              <div style={{ background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 12, padding: '24px 28px', marginBottom: 32, maxWidth: 600 }}>
                <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--terra)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
                  Real queries patients are asking AI right now
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {clinic.aiQueries.map((query, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--terra)', flexShrink: 0 }} />
                      <span className="l-prompt-tag" style={{ fontSize: 13 }}>{query}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="l-body" style={{ color: 'var(--muted)', maxWidth: 520 }}>
                When patients submit these queries, AI engines scan available web content and recommend a handful of clinics. Traditional SEO alone doesn't determine who gets recommended — AI optimization does.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem section */}
        <section className="l-section" style={{ background: 'var(--bg2, #130E0A)' }}>
          <div className="l-container">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
              <div className="l-label" style={{ marginBottom: 16 }}>The Problem</div>
              <h2 className="l-h2" style={{ marginBottom: 20 }}>
                While you wait, AI is recommending <em className="l-serif-em">your competitors.</em>
              </h2>
              <p className="l-body" style={{ color: 'var(--muted)', maxWidth: 560, marginBottom: 48, fontSize: 18 }}>
                {clinic.painPoint}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
                {clinic.problemPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{ padding: '24px', background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 12 }}
                  >
                    <div style={{ width: 32, height: 2, background: 'var(--terra)', marginBottom: 16, borderRadius: 2 }} />
                    <h3 style={{ color: 'var(--cream)', fontWeight: 600, fontSize: 16, marginBottom: 10, fontFamily: 'var(--sans)', lineHeight: 1.4 }}>{point.heading}</h3>
                    <p className="l-body" style={{ color: 'var(--muted)', fontSize: 14 }}>{point.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* What AIO looks like — expanded */}
        <section className="l-section" style={{ background: 'var(--bg)' }}>
          <div className="l-container">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, }} style={{ marginBottom: 56 }}>
              <div className="l-label" style={{ marginBottom: 16 }}>Our Approach</div>
              <h2 className="l-h2" style={{ marginBottom: 14 }}>
                What AI optimization looks like <em className="l-serif-em">for {clinic.name.toLowerCase()} clinics</em>
              </h2>
              <p className="l-body" style={{ color: 'var(--muted)', maxWidth: 480 }}>
                Every clinic category has different AI ranking signals. Here's our four-step process, tailored to {clinic.name.toLowerCase()} clinics specifically.
              </p>
            </motion.div>

            <div className="l-process-grid" style={{ marginBottom: 48 }}>
              {serviceProcess.map((step, i) => (
                <motion.div
                  key={step.num}
                  className="l-process-step"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="l-process-num">{step.num}</div>
                  <div className="l-process-title">
                    {step.title[0]}<em className="l-serif-em">{step.title[1]}</em>
                  </div>
                  <p className="l-process-body">{step.body}</p>
                </motion.div>
              ))}
            </div>

            {/* Clinic-specific focus areas */}
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--terra)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
                Specifically for {clinic.name.toLowerCase()} clinics, we focus on:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {clinic.serviceItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '14px 18px', background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 10 }}>
                    <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'var(--terra)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>
                      {i + 1}
                    </span>
                    <span className="l-body" style={{ color: 'var(--muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="l-section" style={{ background: 'var(--bg2, #130E0A)' }}>
          <div className="l-container">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
              <div className="l-label" style={{ marginBottom: 16 }}>Results</div>
              <h2 className="l-h2" style={{ marginBottom: 40 }}>
                What clinics like yours <em className="l-serif-em">actually see</em>
              </h2>

              <div className="l-stat-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', maxWidth: 560, marginBottom: 48 }}>
                <div className="l-stat-cell"><span className="l-stat-num">+350%</span><span className="l-stat-lbl">AI Mentions</span></div>
                <div className="l-stat-cell"><span className="l-stat-num">90%</span><span className="l-stat-lbl">Top 3 AI Rankings</span></div>
                <div className="l-stat-cell"><span className="l-stat-num">20–25</span><span className="l-stat-lbl">AI Enquiries/Mo</span></div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20, marginBottom: 32 }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 12, padding: '24px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Bangkok Clinic · Case Result</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--cream)', marginBottom: 8 }}>10×</div>
                  <p className="l-body" style={{ color: 'var(--muted)', marginBottom: 16, fontSize: 14 }}>
                    Increase in AI-driven recommendations — from zero citations to appearing consistently across ChatGPT, Perplexity, and Google AI Overviews.
                  </p>
                  <div style={{ borderTop: '1px solid var(--bdr)', paddingTop: 14 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {clinic.aiQueries.slice(0, 2).map((q, i) => (
                        <span key={i} className="l-prompt-tag" style={{ fontSize: 11 }}>{q}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 12, padding: '24px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>Why AI visibility compounds</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      { label: 'Citations build authority', desc: 'Each time AI cites your clinic, it reinforces your relevance signal — making future citations more likely across more queries.' },
                      { label: 'Content compounds over time', desc: 'Unlike ads that stop when you stop paying, optimized content continues attracting AI citations and patient enquiries indefinitely.' },
                      { label: 'Early movers hold the position', desc: 'AI recommendation slots are finite. Clinics that establish visibility now make it structurally harder for competitors to displace them.' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'flex', gap: 14 }}>
                        <span style={{ flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: 'var(--terra)', marginTop: 7 }} />
                        <div>
                          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--cream)', display: 'block', marginBottom: 3 }}>{row.label}</span>
                          <span className="l-body" style={{ color: 'var(--muted)', fontSize: 13 }}>{row.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <a href="https://locully-client-success-m8a58k2.gamma.site/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--terra)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                View full case studies <ArrowRight style={{ width: 14, height: 14 }} />
              </a>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="l-section" style={{ background: 'var(--bg)' }}>
          <div className="l-container">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
              <div className="l-label" style={{ marginBottom: 16 }}>FAQ</div>
              <h2 className="l-h2" style={{ marginBottom: 40 }}>
                Questions about AI optimization <em className="l-serif-em">for {clinic.name.toLowerCase()} clinics</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {clinic.faq.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    style={{ borderBottom: '1px solid var(--bdr)', padding: '22px 0' }}
                  >
                    <h3 style={{ color: 'var(--cream)', fontWeight: 600, marginBottom: 10, fontFamily: 'var(--sans)', fontSize: 16 }}>{item.q}</h3>
                    <p className="l-body" style={{ color: 'var(--muted)' }}>{item.a}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Other clinic types */}
        <section style={{ background: 'var(--bg2, #130E0A)', padding: '40px 0', borderTop: '1px solid var(--bdr)' }}>
          <div className="l-container">
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>AI optimization for other clinic types</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {otherClinics.map((c) => (
                <Link
                  key={c.slug}
                  to={`/ai-optimization/${c.slug}/`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 8, color: 'var(--muted)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--terra)'; e.currentTarget.style.borderColor = 'var(--terra)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--bdr)'; }}
                >
                  {c.namePlural} <ArrowRight style={{ width: 12, height: 12 }} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Contact */}
        <section style={{ background: 'var(--bg)', paddingTop: 80 }}>
          <div className="l-container" style={{ paddingBottom: 16 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="l-label" style={{ marginBottom: 16 }}>Get Started</div>
              <h2 className="l-h2" style={{ marginBottom: 12 }}>
                Get your {clinic.name.toLowerCase()} clinic <em className="l-serif-em">found on AI search</em>
              </h2>
              <p className="l-body" style={{ color: 'var(--muted)', maxWidth: 480, marginBottom: 0 }}>
                We'll show you exactly how your clinic currently appears (or doesn't) in AI search results — and what it would take to change that.
              </p>
            </motion.div>
          </div>
          <ContactForm />
        </section>

        <Footer />
      </div>
    </>
  );
}
