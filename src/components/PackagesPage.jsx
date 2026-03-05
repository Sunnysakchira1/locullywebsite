import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  FileText, Link2, BookOpen, Layers, ArrowRight, Check,
  Sparkles, Bot, Search, Globe, TrendingUp, Shield,
} from 'lucide-react';

const packages = [
  {
    id: 'content-writing',
    name: 'Content Writing',
    price: '฿39,900',
    tagline: '20 SEO/GEO/AIO articles',
    icon: FileText,
    accentHue: 'var(--terra)',
    items: ['Optimized for Google + AI engines', 'Topical authority building', 'Internal linking structure'],
    description: 'A full content sprint — 20 long-form articles written specifically to rank in both traditional search and AI-generated answers (ChatGPT, Gemini, Google AI Overviews). Each article targets a high-intent keyword cluster and is structured so AI engines cite it as a source.',
    details: [
      { icon: Bot, title: 'Written for AI Engines', body: 'Each article is structured with clear headings, factual statements, and citation-friendly formatting — the signals AI models like ChatGPT and Gemini use when deciding what to recommend.' },
      { icon: Search, title: 'Google SEO Optimised', body: 'On-page SEO best practices baked in: target keywords, meta descriptions, schema-ready structure, and natural keyword density. Every article is built to rank.' },
      { icon: TrendingUp, title: 'Topical Authority', body: 'The 20 articles are planned as a cluster — not random posts. They cover your niche from multiple angles so Google and AI engines recognise you as the authority on the topic.' },
      { icon: Layers, title: 'Internal Linking', body: 'All articles are interlinked strategically to pass authority between pages and guide visitors deeper into your site — increasing time on site and conversion probability.' },
    ],
  },
  {
    id: 'backlink-package',
    name: 'Backlink Package',
    price: '฿49,900',
    tagline: '3 × DR50+ editorial backlinks',
    icon: Link2,
    accentHue: 'var(--terra)',
    items: ['3 × niche-relevant placements', 'Permanent do-follow links', 'Full report on all placements'],
    description: '3 high-authority editorial backlinks from DR50+ websites in your niche. Backlinks remain one of the strongest ranking signals for Google — and trusted links from relevant publications tell both Google and AI models that your brand is credible.',
    details: [
      { icon: Shield, title: '3 × DR50+ Domain Rating', body: 'We only place links on websites with a Domain Rating of 50 or above — meaning they have real authority and pass real ranking power. No PBNs, no link farms.' },
      { icon: Globe, title: 'Niche Relevant', body: 'Links are placed on websites topically relevant to your industry. A clinic gets placed on a health publication. Relevance multiplies impact.' },
      { icon: Link2, title: 'Permanent Do-Follow', body: 'The link is permanent and do-follow — meaning it continuously passes authority to your site and is never removed after a set period, unlike sponsored placements.' },
      { icon: FileText, title: 'Full Placement Report', body: 'You receive a detailed report showing the exact page the link appears on, the anchor text used, the domain metrics, and a screenshot of the live placement.' },
    ],
  },
  {
    id: 'premium-content',
    name: 'Premium Content Bundle',
    price: '฿79,900',
    tagline: '60 AI + Google optimized articles',
    icon: BookOpen,
    accentHue: 'var(--terra)',
    items: ['Full topical authority cluster', 'GEO & AIO ready', 'Schema markup included'],
    description: '60 articles that comprehensively cover your entire niche. This is a full topical authority build — the kind of content strategy that makes Google and AI engines treat your site as the definitive resource in your space.',
    details: [
      { icon: Layers, title: 'Full Topical Coverage', body: '60 articles are mapped across every relevant subtopic in your niche — from broad category pages to long-tail question articles. When AI engines look for sources on your topic, your site is unavoidable.' },
      { icon: Bot, title: 'GEO & AIO Optimised', body: 'Every article is formatted to be cited by ChatGPT, Gemini, Claude, and Google AI Overviews — not just ranked by traditional search.' },
      { icon: Globe, title: 'Schema Markup Included', body: "Structured data (JSON-LD schema) is added to key pages — helping Google and AI engines understand your content's context, improving rich snippet eligibility and AI citation rates." },
      { icon: TrendingUp, title: 'Compounding Returns', body: 'Unlike ads that stop when you stop paying, 60 articles continue to rank, get cited, and drive traffic for years. This is the highest-ROI investment in our catalogue.' },
    ],
  },
  {
    id: 'premium-backlinks',
    name: 'Premium Backlink Bundle',
    price: '฿89,900',
    tagline: '5 × DR50+ editorial backlinks',
    icon: Layers,
    accentHue: 'var(--terra)',
    items: ['5 × niche-matched placements', 'Permanent do-follow links', 'Full placement report'],
    description: '5 high-authority editorial backlinks from DR50+ websites in your niche. Five links across five different domains — the strongest authority signal in our catalogue. For businesses in competitive markets that want to dominate.',
    details: [
      { icon: Shield, title: '5 × DR50+ Links', body: 'Five independent placements on five different high-authority domains. This diversified profile looks completely natural to Google and delivers a substantial, lasting boost to your domain authority.' },
      { icon: Globe, title: 'Niche-Matched Placements', body: 'Each link is placed on a site contextually relevant to your business. We research the best-fit publications for your industry so every link carries both authority and topical relevance.' },
      { icon: TrendingUp, title: 'Compound Authority', body: 'Five DR50+ links can move a site from invisible to top 3 for competitive keywords. The combined authority signal accelerates rankings faster and further than any smaller package.' },
      { icon: FileText, title: 'Detailed Report for Each', body: 'You receive a full placement report for each of the five links — domain metrics, live URL, anchor text, and screenshot. Full transparency on every placement.' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const PackagesPage = () => {
  const openCalendly = () => window.open('https://calendly.com/locully/30min', '_blank');

  return (
    <>
      <Helmet>
        <title>One-Off Packages | Locully</title>
        <meta name="description" content="No retainer. No commitment. One-off SEO, content, and backlink packages priced in Thai Baht." />
      </Helmet>

      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        {/* Nav */}
        <nav style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(13,10,8,0.95)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--bdr)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0 32px', height: '68px'
        }}>
          <Link to="/">
            <img
              src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png"
              alt="Locully Logo"
              style={{ height: '30px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <Link to="/" style={{ color: 'var(--muted)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>
              ← Back
            </Link>
            <button onClick={openCalendly} className="l-btn" style={{ padding: '10px 22px', fontSize: '13px' }}>
              Talk to Us
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section style={{ padding: '100px 0 80px', textAlign: 'center', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '700px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(204,100,50,0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div className="l-container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
                <Sparkles style={{ width: '14px', height: '14px', color: 'var(--terra)' }} />
                <span className="l-label">One-Time Investment</span>
              </div>
            </motion.div>
            <motion.h1 className="l-h1" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
              style={{ marginBottom: '20px' }}>
              One-Off <em className="l-serif-em">Packages</em>
            </motion.h1>
            <motion.p className="l-body" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
              style={{ maxWidth: '520px', margin: '0 auto' }}>
              No retainer. No commitment. Pick a package, get results — then decide if you want more.
            </motion.p>
          </div>
        </section>

        {/* Package cards grid */}
        <section style={{ padding: '0 0 80px', background: 'var(--bg)' }}>
          <div className="l-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              {packages.map((pkg, i) => {
                const Icon = pkg.icon;
                return (
                  <motion.a
                    key={pkg.id}
                    href={`#${pkg.id}`}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    style={{
                      display: 'flex', flexDirection: 'column', gap: '20px',
                      background: 'var(--bg3)', border: '1px solid var(--bdr)',
                      borderRadius: '14px', padding: '28px', textDecoration: 'none',
                      transition: 'all 0.25s'
                    }}
                    whileHover={{ borderColor: 'rgba(204,100,50,0.4)', y: -4 }}
                  >
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '10px',
                      background: 'rgba(204,100,50,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon style={{ width: '20px', height: '20px', color: 'var(--terra)' }} />
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', color: 'var(--muted2)', textTransform: 'uppercase', marginBottom: '6px' }}>{pkg.tagline}</div>
                      <div style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>{pkg.name}</div>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '34px', fontWeight: 600, color: 'var(--terra)', lineHeight: 1 }}>{pkg.price}</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                      {pkg.items.map((item) => (
                        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <Check style={{ width: '14px', height: '14px', color: 'var(--terra)', marginTop: '2px', flexShrink: 0 }} />
                          <span className="l-body-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--terra)', fontSize: '13px', fontWeight: 600 }}>
                      Learn more <ArrowRight style={{ width: '14px', height: '14px' }} />
                    </div>
                  </motion.a>
                );
              })}
            </div>
            <p style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--muted2)', paddingBottom: '20px' }}>
              All packages are one-time purchases. Combine for maximum impact or{' '}
              <button onClick={openCalendly} style={{ color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--mono)', fontSize: '12px', fontWeight: 600 }}>
                ask us to build a custom bundle.
              </button>
            </p>
          </div>
        </section>

        {/* Detailed sections */}
        <section style={{ padding: '0 0 120px', background: 'var(--bg2)' }}>
          <div className="l-container" style={{ display: 'flex', flexDirection: 'column', gap: '100px', paddingTop: '80px' }}>
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  id={pkg.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55 }}
                  style={{ scrollMarginTop: '100px' }}
                >
                  {/* Header */}
                  <div style={{
                    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                    gap: '20px', marginBottom: '36px', flexWrap: 'wrap'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{
                        width: '56px', height: '56px', borderRadius: '12px',
                        background: 'rgba(204,100,50,0.12)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        <Icon style={{ width: '26px', height: '26px', color: 'var(--terra)' }} />
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.14em', color: 'var(--muted2)', textTransform: 'uppercase', marginBottom: '6px' }}>{pkg.tagline}</div>
                        <h2 className="l-h3">{pkg.name}</h2>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                      <div style={{ fontFamily: 'var(--serif)', fontSize: '40px', fontWeight: 600, color: 'var(--terra)' }}>{pkg.price}</div>
                      <button onClick={openCalendly} className="l-btn" style={{ padding: '12px 24px', fontSize: '13px' }}>Get Started</button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="l-body" style={{
                    maxWidth: '700px', marginBottom: '36px',
                    paddingLeft: '20px', borderLeft: '2px solid var(--terra)',
                    fontSize: '17px', lineHeight: 1.8
                  }}>
                    {pkg.description}
                  </p>

                  {/* Detail boxes */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {pkg.details.map((detail, j) => {
                      const DIcon = detail.icon;
                      return (
                        <motion.div
                          key={detail.title}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.07, duration: 0.4 }}
                          style={{
                            background: 'var(--surface)', border: '1px solid var(--bdr)',
                            borderRadius: '12px', padding: '28px',
                            transition: 'border-color 0.3s'
                          }}
                          whileHover={{ borderColor: 'rgba(204,100,50,0.35)' }}
                        >
                          <div style={{
                            width: '36px', height: '36px', borderRadius: '8px',
                            background: 'rgba(204,100,50,0.1)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', marginBottom: '16px'
                          }}>
                            <DIcon style={{ width: '17px', height: '17px', color: 'var(--terra)' }} />
                          </div>
                          <h3 style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '15px', marginBottom: '10px' }}>{detail.title}</h3>
                          <p className="l-body-sm">{detail.body}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {i < packages.length - 1 && (
                    <div style={{ marginTop: '80px', borderBottom: '1px solid var(--bdr)' }} />
                  )}
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '100px 0', background: 'var(--bg)', textAlign: 'center' }}>
          <div className="l-container">
            <h2 className="l-h2" style={{ marginBottom: '20px' }}>
              Not sure which package is <em className="l-serif-em">right?</em>
            </h2>
            <p className="l-body" style={{ maxWidth: '480px', margin: '0 auto 40px' }}>
              Book a free 30-minute call and we'll tell you exactly what will move the needle for your business.
            </p>
            <button onClick={openCalendly} className="l-btn" style={{ padding: '18px 40px', fontSize: '15px' }}>
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
