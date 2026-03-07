import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { FileText, Link2, BookOpen, Layers, ArrowRight, Check, Sparkles, Bot, Search, Globe, TrendingUp, Shield, Menu, X } from 'lucide-react';

const packages = [
  {
    id: 'content-writing',
    name: 'Content Writing',
    price: '฿39,900',
    tagline: '20 SEO/GEO/AIO articles',
    icon: FileText,
    items: ['Optimized for Google + AI engines', 'Topical authority building', 'Internal linking structure'],
    description: 'A full content sprint — 20 long-form articles written specifically to rank in both traditional search and AI-generated answers (ChatGPT, Gemini, Google AI Overviews). Each article targets a high-intent keyword cluster and is structured so AI engines cite it as a source.',
    details: [
      { icon: Bot, title: 'Written for AI Engines', body: 'Each article is structured with clear headings, factual statements, and citation-friendly formatting — the signals AI models like ChatGPT and Gemini use when deciding what to recommend.' },
      { icon: Search, title: 'Google SEO Optimised', body: 'On-page SEO best practices baked in: target keywords, meta descriptions, schema-ready structure, and natural keyword density. Every article is built to rank.' },
      { icon: TrendingUp, title: 'Topical Authority', body: 'The 20 articles are planned as a cluster — not random posts. They cover your niche from multiple angles so Google and AI engines recognise you as the authority on the topic.' },
      { icon: Layers, title: 'Internal Linking', body: 'All articles are interlinked strategically to pass authority between pages and guide visitors deeper into your site.' },
    ],
  },
  {
    id: 'backlink-package',
    name: 'Backlink Package',
    price: '฿49,900',
    tagline: '3 × DR50+ editorial backlinks',
    icon: Link2,
    items: ['3 × niche-relevant placements', 'Permanent do-follow links', 'Full report on all placements'],
    description: '3 high-authority editorial backlinks from DR50+ websites in your niche. Backlinks remain one of the strongest ranking signals for Google — and trusted links from relevant publications tell both Google and AI models that your brand is credible.',
    details: [
      { icon: Shield, title: '3 × DR50+ Domain Rating', body: 'We only place links on websites with a Domain Rating of 50 or above — meaning they have real authority and pass real ranking power. No PBNs, no link farms.' },
      { icon: Globe, title: 'Niche Relevant', body: 'Links are placed on websites topically relevant to your industry. A clinic gets placed on a health publication. Relevance multiplies impact.' },
      { icon: Link2, title: 'Permanent Do-Follow', body: 'The link is permanent and do-follow — meaning it continuously passes authority to your site and is never removed after a set period.' },
      { icon: FileText, title: 'Full Placement Report', body: 'You receive a detailed report showing the exact page, anchor text used, domain metrics, and a screenshot of the live placement.' },
    ],
  },
  {
    id: 'premium-content',
    name: 'Premium Content Bundle',
    price: '฿79,900',
    tagline: '60 AI + Google optimized articles',
    icon: BookOpen,
    items: ['Full topical authority cluster', 'GEO & AIO ready', 'Schema markup included'],
    description: '60 articles that comprehensively cover your entire niche. This is a full topical authority build — the kind of content strategy that makes Google and AI engines treat your site as the definitive resource in your space.',
    details: [
      { icon: Layers, title: 'Full Topical Coverage', body: '60 articles are mapped across every relevant subtopic in your niche. When AI engines look for sources on your topic, your site is unavoidable.' },
      { icon: Bot, title: 'GEO & AIO Optimised', body: 'Every article is formatted to be cited by ChatGPT, Gemini, Claude, and Google AI Overviews — not just ranked by traditional search.' },
      { icon: Globe, title: 'Schema Markup Included', body: "Structured data (JSON-LD schema) is added to key pages — improving rich snippet eligibility and AI citation rates." },
      { icon: TrendingUp, title: 'Compounding Returns', body: 'Unlike ads that stop when you stop paying, 60 articles continue to rank, get cited, and drive traffic for years.' },
    ],
  },
  {
    id: 'premium-backlinks',
    name: 'Premium Backlink Bundle',
    price: '฿89,900',
    tagline: '5 × DR50+ editorial backlinks',
    icon: Layers,
    items: ['5 × niche-matched placements', 'Permanent do-follow links', 'Full placement report'],
    description: '5 high-authority editorial backlinks from DR50+ websites in your niche. Five links across five different domains — the strongest authority signal in our catalogue.',
    details: [
      { icon: Shield, title: '5 × DR50+ Links', body: 'Five independent placements on five different high-authority domains. This diversified profile looks completely natural to Google.' },
      { icon: Globe, title: 'Niche-Matched Placements', body: 'Each link is placed on a site contextually relevant to your business. We research the best-fit publications for your industry.' },
      { icon: TrendingUp, title: 'Compound Authority', body: 'Five DR50+ links can move a site from invisible to top 3 for competitive keywords.' },
      { icon: FileText, title: 'Detailed Report for Each', body: 'You receive a full placement report for each of the five links — domain metrics, live URL, anchor text, and screenshot.' },
    ],
  },
];

const PackagesPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };

  return (
    <>
      <Helmet>
        <title>One-Off Packages | Locully</title>
        <meta name="description" content="No retainer. No commitment. One-off SEO, content, and backlink packages priced in Thai Baht." />
        <link rel="canonical" href="https://locully.org/packages" />
      </Helmet>

      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        {/* Nav */}
        <nav className="l-subpage-nav">
          <Link to="/">
            <img src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" alt="Locully Logo" className="l-subpage-logo" />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={openCalendly} className="l-btn l-btn-sm l-nav-audit" style={{ border: 'none' }}>Talk to Us</button>
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
              <Link to="/lead-gen-partner" onClick={() => setMenuOpen(false)}>Lead Gen Partner</Link>
              <button onClick={openCalendly} style={{ color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0', fontFamily: 'var(--sans)', fontSize: 16, textAlign: 'left', width: '100%', fontWeight: 600 }}>
                Book a Call →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="l-subpage-nav-spacer" />

        {/* Hero */}
        <section className="l-page-hero">
          <div className="l-container l-page-hero-inner" style={{ textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <Sparkles style={{ width: '14px', height: '14px', color: 'var(--terra)' }} />
                <span className="l-label">One-Time Investment</span>
              </div>
              <h1 className="l-h1" style={{ marginBottom: '16px' }}>
                One-Off <em className="l-serif-em">Packages</em>
              </h1>
              <p className="l-body" style={{ maxWidth: '480px', margin: '0 auto' }}>
                No retainer. No commitment. Pick a package, get results — then decide if you want more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Package summary cards */}
        <section style={{ padding: '0 0 72px', background: 'var(--bg)' }}>
          <div className="l-container">
            <div className="l-pkg-grid" style={{ marginBottom: '16px' }}>
              {packages.map((pkg, i) => {
                const Icon = pkg.icon;
                return (
                  <motion.a
                    key={pkg.id}
                    href={`#${pkg.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="l-pkg-card"
                    style={{ textDecoration: 'none' }}
                  >
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(204,100,50,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <Icon style={{ width: '20px', height: '20px', color: 'var(--terra)' }} />
                    </div>
                    <div className="l-pkg-sub">{pkg.tagline}</div>
                    <div className="l-pkg-name">{pkg.name}</div>
                    <div className="l-pkg-price">{pkg.price}</div>
                    <ul className="l-pkg-list">
                      {pkg.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <div style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--terra)', fontSize: '13px', fontWeight: 600 }}>
                      Learn more <ArrowRight style={{ width: '14px', height: '14px' }} />
                    </div>
                  </motion.a>
                );
              })}
            </div>
            <p className="l-pkg-note">
              All packages are one-time purchases. Combine for maximum impact or{' '}
              <button onClick={openCalendly} style={{ color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: '13px', fontWeight: 600 }}>
                ask us to build a custom bundle.
              </button>
            </p>
          </div>
        </section>

        {/* Detailed sections */}
        <section style={{ paddingBottom: '100px', background: 'var(--bg2)' }}>
          <div className="l-container" style={{ paddingTop: '72px' }}>
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  id={pkg.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  style={{ scrollMarginTop: '80px', marginBottom: i < packages.length - 1 ? '80px' : 0 }}
                >
                  {/* Header row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '28px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(204,100,50,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon style={{ width: '24px', height: '24px', color: 'var(--terra)' }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--muted2)', textTransform: 'uppercase', marginBottom: '4px' }}>{pkg.tagline}</div>
                        <h2 className="l-h3">{pkg.name}</h2>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 600, color: 'var(--terra)', lineHeight: 1 }}>{pkg.price}</div>
                      <button onClick={openCalendly} className="l-btn l-btn-sm" style={{ border: 'none', flexShrink: 0 }}>Get Started</button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="l-body" style={{ maxWidth: '680px', marginBottom: '32px', paddingLeft: '18px', borderLeft: '2px solid var(--terra)', lineHeight: 1.8 }}>
                    {pkg.description}
                  </p>

                  {/* Detail boxes */}
                  <div className="l-detail-grid">
                    {pkg.details.map((detail, j) => {
                      const DIcon = detail.icon;
                      return (
                        <motion.div
                          key={detail.title}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.07, duration: 0.4 }}
                          className="l-detail-box"
                        >
                          <div className="l-detail-icon">
                            <DIcon style={{ width: '16px', height: '16px', color: 'var(--terra)' }} />
                          </div>
                          <div className="l-detail-title">{detail.title}</div>
                          <p className="l-detail-body">{detail.body}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {i < packages.length - 1 && <div style={{ marginTop: '72px', height: '1px', background: 'var(--bdr)' }} />}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="l-cta-band">
          <div className="l-container">
            <h2 className="l-h2" style={{ marginBottom: '16px' }}>
              Not sure which package is <em className="l-serif-em">right?</em>
            </h2>
            <p className="l-body" style={{ maxWidth: '440px', margin: '0 auto 36px' }}>
              Book a free 30-minute call and we'll tell you exactly what will move the needle for your business.
            </p>
            <button onClick={openCalendly} className="l-btn l-btn-lg" style={{ border: 'none' }}>
              Book a Free Call <ArrowRight style={{ width: '18px', height: '18px' }} />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PackagesPage;
