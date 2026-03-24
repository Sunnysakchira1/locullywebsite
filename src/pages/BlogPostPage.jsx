import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { getPost, getRelatedPosts, posts } from '@/data/blogData';

export default function BlogPostPage({ slug }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const post = getPost(slug);

  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };
  const scrollToContact = () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };

  if (!post) return null;

  const relatedPosts = getRelatedPosts(post.relatedPosts || []).slice(0, 3);

  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.publishDate,
    dateModified: post.updatedDate || post.publishDate,
    author: {
      '@type': 'Organization',
      name: 'Locully',
      url: 'https://locully.org',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Locully',
      url: 'https://locully.org',
      logo: {
        '@type': 'ImageObject',
        url: 'https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png',
      },
    },
    description: post.metaDescription,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://locully.org/blog/${post.slug}/` },
  };

  const schemaFaq = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  } : null;

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://locully.org' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://locully.org/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://locully.org/blog/${post.slug}/` },
    ],
  };

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle} | Locully</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={`${post.metaTitle} | Locully`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://locully.org/blog/${post.slug}/`} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:modified_time" content={post.updatedDate || post.publishDate} />
        <link rel="canonical" href={`https://locully.org/blog/${post.slug}/`} />
        <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        {schemaFaq && <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>}
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
          <motion.div className="l-nav-mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
            <Link to="/" onClick={() => setMenuOpen(false)}>← Home</Link>
            <Link to="/blog/" onClick={() => setMenuOpen(false)}>Blog</Link>
            <Link to="/ai-optimization/" onClick={() => setMenuOpen(false)}>AI Optimization for Clinics</Link>
            <button onClick={openCalendly} style={{ color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0', fontFamily: 'var(--sans)', fontSize: 16, textAlign: 'left', width: '100%', fontWeight: 600 }}>
              Book a Call →
            </button>
          </motion.div>
        )}

        <div className="l-subpage-nav-spacer" />

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" style={{ padding: '12px 0', borderBottom: '1px solid var(--bdr)' }}>
          <div className="l-container">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--muted)', flexWrap: 'wrap' }}>
              <Link to="/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Home</Link>
              <span>/</span>
              <Link to="/blog/" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Blog</Link>
              <span>/</span>
              <span style={{ color: 'var(--cream)' }}>{post.title}</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header className="l-page-hero" style={{ paddingBottom: 60 }}>
          <div className="l-container l-page-hero-inner">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: 780 }}>
              {/* Category + meta row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra)', background: 'rgba(204,100,50,0.08)', border: '1px solid rgba(204,100,50,0.2)', borderRadius: 3, padding: '4px 10px' }}>
                  <Tag style={{ width: 10, height: 10 }} />
                  {post.category}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted2)' }}>
                  <Calendar style={{ width: 11, height: 11 }} />{formatDate(post.publishDate)}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted2)' }}>
                  <Clock style={{ width: 11, height: 11 }} />{post.readTime}
                </span>
              </div>

              <h1 className="l-h1" style={{ marginBottom: 24, lineHeight: 1.1, fontSize: 'clamp(32px, 4.5vw, 58px)' }}>
                {post.title}
              </h1>

              <p style={{ fontSize: 18, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, maxWidth: 640, marginBottom: 0 }}>
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </header>

        {/* Article body */}
        <div style={{ background: 'var(--bg)', paddingBottom: 80 }}>
          <div className="l-container">
            <div style={{ maxWidth: 780 }}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <post.Content />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related clinic types (if any) */}
        {post.relatedClinics && post.relatedClinics.length > 0 && (
          <section style={{ background: 'var(--bg2)', padding: '48px 0', borderTop: '1px solid var(--bdr)' }}>
            <div className="l-container">
              <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted2)', marginBottom: 16 }}>
                AI optimization for your clinic type
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {post.relatedClinics.map((clinicSlug) => {
                  const labels = {
                    'physiotherapy-clinics': 'Physiotherapy Clinics',
                    'dental-clinics': 'Dental Clinics',
                    'beauty-clinics': 'Beauty Clinics',
                    'fertility-clinics': 'Fertility Clinics',
                    'wellness-clinics': 'Wellness Clinics',
                  };
                  return (
                    <Link
                      key={clinicSlug}
                      to={`/ai-optimization/${clinicSlug}/`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 8, color: 'var(--muted)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--terra)'; e.currentTarget.style.borderColor = 'var(--terra)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderColor = 'var(--bdr)'; }}
                    >
                      {labels[clinicSlug] || clinicSlug} <ArrowRight style={{ width: 12, height: 12 }} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section style={{ background: 'var(--bg)', padding: '80px 0', borderTop: '1px solid var(--bdr)' }}>
            <div className="l-container">
              <div style={{ marginBottom: 40 }}>
                <span className="l-label" style={{ marginBottom: 16, display: 'inline-flex' }}>Related Reading</span>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.2 }}>
                  More on AI Search for Clinics
                </h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                {relatedPosts.map((related) => (
                  <motion.div
                    key={related.slug}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    style={{ background: 'var(--bg3)', border: '1px solid var(--bdr)', borderRadius: 12, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)' }}>{related.category}</span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted2)' }}>{related.readTime}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 600, color: 'var(--cream)', lineHeight: 1.3, margin: 0 }}>
                      {related.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6, fontWeight: 300, margin: 0, flex: 1 }}>
                      {related.excerpt}
                    </p>
                    <Link
                      to={`/blog/${related.slug}/`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--terra)', fontSize: 13, fontWeight: 600, textDecoration: 'none', marginTop: 4 }}
                    >
                      Read article <ArrowRight style={{ width: 13, height: 13 }} />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA + Contact */}
        <section style={{ background: 'var(--bg2)', paddingTop: 80 }}>
          <div className="l-container" style={{ paddingBottom: 16 }}>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="l-label" style={{ marginBottom: 16 }}>Get Started</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 12 }}>
                See where your brand stands <em style={{ fontStyle: 'italic', color: 'var(--terra)', fontWeight: 300 }}>in AI search</em>
              </h2>
              <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, marginBottom: 0, fontWeight: 300, lineHeight: 1.7 }}>
                We'll run your brand across ChatGPT, Perplexity, and Google AI Overviews — and show you exactly what it would take to get recommended.
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
