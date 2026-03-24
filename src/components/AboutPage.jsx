import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Briefcase, ShoppingCart, ShieldCheck, HeartPulse,
  Flower2, Utensils, LineChart, ArrowRight, TrendingUp,
  Users, Menu, X
} from 'lucide-react';
import Footer from '@/components/Footer';
import FounderCard from './FounderCard';

const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };

  const industries = [
    { icon: ShoppingCart, title: "E-Commerce", description: "Driving high-intent traffic that converts into sales." },
    { icon: Briefcase, title: "SaaS", description: "Scaling user acquisition and reducing churn." },
    { icon: ShieldCheck, title: "Insurance", description: "Navigating complex regulations to capture leads." },
    { icon: HeartPulse, title: "Healthcare", description: "Building trust for clinics and medical providers." },
    { icon: Flower2, title: "Wellness", description: "Connecting holistic brands with consumers." },
    { icon: Utensils, title: "Hospitality", description: "Boosting bookings for hotels and travel." },
    { icon: LineChart, title: "Finance", description: "Generating qualified leads for financial services." }
  ];

  return (
    <>
      <Helmet>
        <title>About Locully | SEO & Revenue-Focused Marketing</title>
        <meta name="description" content="Locully is a revenue-focused SEO agency. We drive growth." />
        <link rel="canonical" href="https://locully.org/about" />
      </Helmet>

      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        {/* Nav */}
        <nav className="l-subpage-nav">
          <Link to="/">
            <img
              src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png"
              alt="Locully"
              className="l-subpage-logo"
            />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/" style={{ color: 'var(--muted)', fontSize: '14px', textDecoration: 'none', fontWeight: 500, display: 'none' }} className="l-nav-back">
              ← Back
            </Link>
            <button onClick={openCalendly} className="l-btn l-btn-sm" style={{ border: 'none' }}>Speak to Us</button>
            <button className="l-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X style={{ width: 18, height: 18 }} /> : <Menu style={{ width: 18, height: 18 }} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div className="l-nav-mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
              <Link to="/" onClick={() => setMenuOpen(false)}>← Home</Link>
              <Link to="/ai-search-visibility" onClick={() => setMenuOpen(false)}>AI Search Visibility</Link>
              <Link to="/ai-optimization/" onClick={() => setMenuOpen(false)}>AI Optimization for Clinics</Link>
              <Link to="/packages" onClick={() => setMenuOpen(false)}>One-Off Packages</Link>
              <Link to="/blog/" onClick={() => setMenuOpen(false)}>Blog</Link>
              <button onClick={openCalendly} style={{ color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', padding: '12px 0', fontFamily: 'var(--sans)', fontSize: 15, textAlign: 'left', width: '100%', fontWeight: 600 }}>
                Book a Call →
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="l-subpage-nav-spacer" />

        {/* Hero */}
        <section className="l-page-hero">
          <div className="l-container l-page-hero-inner" style={{ textAlign: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>About Locully</span>
              <h1 className="l-h1" style={{ marginBottom: '24px' }}>
                We Don't Just Do Marketing.<br />
                <em className="l-serif-em">We Drive Revenue.</em>
              </h1>
              <p className="l-body" style={{ maxWidth: '520px', margin: '0 auto' }}>
                Locully is an agency built on the belief that traffic is vanity, and conversion is sanity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder */}
        <section className="l-section" style={{ background: 'var(--bg2)', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="l-container">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <span className="l-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>Founder</span>
              <h2 className="l-h2">Meet the Mind Behind Locully</h2>
            </div>
            <FounderCard />
          </div>
        </section>

        {/* Adaptability */}
        <section className="l-section" style={{ background: 'var(--bg3)', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="l-container">
            <div className="l-two-col">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="l-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Our Approach</span>
                <h2 className="l-h2" style={{ marginBottom: '20px' }}>
                  Adaptability is Our <em className="l-serif-em">Superpower</em>
                </h2>
                <p className="l-body" style={{ marginBottom: '16px' }}>The digital landscape changes daily. Rigid strategies die fast.</p>
                <p className="l-body">At Locully, we build agile, data-driven strategies that evolve with search — including AI-powered search.</p>

                <div className="l-checklist">
                  {[
                    { icon: TrendingUp, title: 'Revenue-First Mindset', desc: 'We optimize for your bottom line, not vanity metrics.' },
                    { icon: Users, title: 'Dedicated Strategists', desc: 'Direct access to senior team members.' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="l-check-item">
                      <div className="l-check-icon">
                        <Icon style={{ width: '12px', height: '12px', color: 'var(--terra)' }} />
                      </div>
                      <div>
                        <div style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '14px', marginBottom: '3px' }}>{title}</div>
                        <span className="l-check-text">{desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="l-why-box"
              >
                <h3 className="l-h3" style={{ marginBottom: '24px' }}>Why Clients Choose Us</h3>
                {[
                  "We treat your business like our own.",
                  "Transparent reporting — no vanity metrics.",
                  "Deep expertise in technical SEO & AI search.",
                  "Direct access to senior strategists.",
                ].map((item, i) => (
                  <div key={i} className="l-why-item">
                    <div className="l-why-dot" />
                    <span className="l-why-text">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="l-section" style={{ background: 'var(--bg2)', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="l-container">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <span className="l-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>Industries</span>
              <h2 className="l-h2" style={{ marginBottom: '12px' }}>Industries We've Mastered</h2>
              <p className="l-body" style={{ maxWidth: '400px', margin: '0 auto' }}>Diverse experience means cross-industry insights.</p>
            </div>

            <div className="l-industries-grid">
              {industries.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="l-industry-card"
                >
                  <div className="l-industry-icon">
                    <Icon style={{ width: '20px', height: '20px', color: 'var(--terra)' }} />
                  </div>
                  <div className="l-industry-title">{title}</div>
                  <div className="l-industry-desc">{description}</div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: industries.length * 0.07 }}
                className="l-industry-card l-industry-cta"
                onClick={openCalendly}
              >
                <div className="l-industry-icon">
                  <Users style={{ width: '20px', height: '20px', color: '#fff' }} />
                </div>
                <div className="l-industry-title">Your Industry</div>
                <div className="l-industry-desc">Don't see your sector?</div>
                <div style={{ marginTop: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#fff', fontWeight: 700, fontSize: '13px', borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: '2px' }}>
                  Contact Us <ArrowRight style={{ width: '14px', height: '14px' }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="l-cta-band">
          <div className="l-container">
            <h2 className="l-h2" style={{ marginBottom: '16px' }}>
              Ready to Stop <em className="l-serif-em">Guessing?</em>
            </h2>
            <p className="l-body" style={{ maxWidth: '460px', margin: '0 auto 36px' }}>
              Your competition isn't waiting. Let's build a strategy that turns your website into your best salesperson.
            </p>
            <button onClick={openCalendly} className="l-btn l-btn-lg" style={{ border: 'none' }}>
              Speak to Us <ArrowRight style={{ width: '18px', height: '18px' }} />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
