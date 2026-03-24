import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, Clock, Calendar } from 'lucide-react';
import Footer from '@/components/Footer';
import { posts } from '@/data/blogData';

export default function BlogIndexPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };
  const scrollToContact = () => {
    window.location.href = '/#contact';
    setMenuOpen(false);
  };

  const formatDate = (iso) => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://locully.org' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://locully.org/blog/' },
    ],
  };

  const schemaItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Locully Blog — AI Search Optimization for Clinics',
    numberOfItems: posts.length,
    itemListElement: posts.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://locully.org/blog/${p.slug}/`,
      name: p.title,
    })),
  };

  const [pillar, ...rest] = posts;

  return (
    <>
      <Helmet>
        <title>Blog — AI Search Optimization Insights for Clinics | Locully</title>
        <meta name="description" content="Guides, explainers, and checklists on AI search optimization for Thailand clinics. Learn how to get your clinic recommended by ChatGPT, Perplexity, and Google AI." />
        <meta property="og:title" content="Blog — AI Search Optimization Insights for Clinics | Locully" />
        <meta property="og:description" content="Guides, explainers, and checklists on AI search optimization for Thailand clinics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://locully.org/blog/" />
        <link rel="canonical" href="https://locully.org/blog/" />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaItemList)}</script>
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
              <span style={{ color: 'var(--cream)' }}>Blog</span>
            </div>
          </div>
        </nav>

        {/* Page header */}
        <header className="l-page-hero" style={{ paddingBottom: 72 }}>
          <div className="l-container l-page-hero-inner">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="l-label" style={{ marginBottom: 20 }}>Insights</div>
              <h1 className="l-h1" style={{ marginBottom: 20, maxWidth: 640, fontSize: 'clamp(36px, 5vw, 64px)' }}>
                AI Search for Clinics — <em className="l-serif-em">The guides</em>
              </h1>
              <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 520, lineHeight: 1.7, fontWeight: 300 }}>
                Practical guides on how Thailand clinics get recommended by ChatGPT, Perplexity, and Google AI Overviews.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Featured (pillar) post */}
        <section style={{ background: 'var(--bg2)', padding: '72px 0', borderTop: '1px solid var(--bdr)' }}>
          <div className="l-container">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', background: 'rgba(204,100,50,0.08)', border: '1px solid rgba(204,100,50,0.2)', borderRadius: 3, padding: '4px 10px' }}>
                  Featured · Pillar Guide
                </span>
              </div>

              <div
                style={{ background: 'var(--bg3)', border: '1px solid var(--bdr2)', borderRadius: 16, padding: 'clamp(24px, 4vw, 52px)', cursor: 'pointer' }}
                className="l-blog-featured-grid"
                onClick={() => window.location.href = `/blog/${pillar.slug}/`}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(204,100,50,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bdr2)'}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{pillar.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)' }}>
                      <Clock style={{ width: 10, height: 10 }} />{pillar.readTime}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)' }}>
                      <Calendar style={{ width: 10, height: 10 }} />{formatDate(pillar.publishDate)}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.15, marginBottom: 16 }}>
                    {pillar.title}
                  </h2>
                  <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, maxWidth: 580, marginBottom: 28 }}>
                    {pillar.excerpt}
                  </p>
                  <Link
                    to={`/blog/${pillar.slug}/`}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--terra)', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}
                    onClick={e => e.stopPropagation()}
                  >
                    Read the guide <ArrowRight style={{ width: 13, height: 13 }} />
                  </Link>
                </div>

                <div className="l-blog-side-links">
                  {(pillar.relatedPosts || []).slice(0, 4).map((slug) => {
                    const p = posts.find(x => x.slug === slug);
                    if (!p) return null;
                    return (
                      <Link
                        key={slug}
                        to={`/blog/${slug}/`}
                        onClick={e => e.stopPropagation()}
                        style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--bdr)', borderRadius: 6, color: 'var(--muted)', fontSize: 12, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'color 0.2s, border-color 0.2s' }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--terra)'; e.currentTarget.style.borderColor = 'rgba(204,100,50,0.3)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--bdr)'; }}
                      >
                        <ArrowRight style={{ width: 10, height: 10, flexShrink: 0 }} />
                        <span style={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.category}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* All posts grid */}
        <section style={{ background: 'var(--bg)', padding: '80px 0' }}>
          <div className="l-container">
            <div style={{ marginBottom: 40 }}>
              <span className="l-label" style={{ marginBottom: 12, display: 'inline-flex' }}>All Articles</span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 600, color: 'var(--cream)' }}>
                Every guide, explained
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
              {rest.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  style={{ background: 'var(--bg3)', border: '1px solid var(--bdr)', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column', gap: 14, cursor: 'pointer', transition: 'border-color 0.2s' }}
                  onClick={() => window.location.href = `/blog/${post.slug}/`}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--bdr2)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--bdr)'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{post.category}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)' }}>
                      <Clock style={{ width: 10, height: 10 }} />{post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: 20, fontWeight: 600, color: 'var(--cream)', lineHeight: 1.3, margin: 0 }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.65, fontWeight: 300, margin: 0, flex: 1 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid var(--bdr)' }}>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)' }}>{formatDate(post.publishDate)}</span>
                    <Link
                      to={`/blog/${post.slug}/`}
                      onClick={e => e.stopPropagation()}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: 'var(--terra)', fontSize: 12, fontWeight: 600, textDecoration: 'none' }}
                    >
                      Read <ArrowRight style={{ width: 12, height: 12 }} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section style={{ background: 'var(--bg2)', padding: '80px 0', borderTop: '1px solid var(--bdr)', textAlign: 'center' }}>
          <div className="l-container" style={{ maxWidth: 600, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="l-label" style={{ marginBottom: 20, justifyContent: 'center', display: 'inline-flex' }}>Free Audit</span>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.15, marginBottom: 16 }}>
                Ready to see where your brand stands in <em style={{ fontStyle: 'italic', color: 'var(--terra)', fontWeight: 300 }}>AI search?</em>
              </h2>
              <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 32 }}>
                We'll audit your current AI visibility across ChatGPT, Perplexity, and Google AI Overviews — and show you exactly where you're missing out.
              </p>
              <a href="/#contact" className="l-btn">
                Get Your Free AI Audit
                <ArrowRight style={{ width: 16, height: 16 }} />
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
