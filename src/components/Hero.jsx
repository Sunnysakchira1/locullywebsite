import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServicesDropdown from '@/components/ServicesDropdown';
import { X, Menu } from 'lucide-react';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollToContact = () => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); };
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };

  return (
    <section className="l-hero l-grid-bg">
      <div className="l-hero-glow" />

      <nav className="l-nav">
        <Link to="/" className="l-nav-logo">
          <img src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" alt="Locully" />
        </Link>

        <ul className="l-nav-links">
          <ServicesDropdown />
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* hidden on mobile via l-nav-audit class */}
          <button className="l-btn l-btn-sm l-nav-audit" style={{ border: 'none' }} onClick={scrollToContact}>
            Get Free Audit
          </button>
          <button className="l-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X style={{ width: 20, height: 20 }} /> : <Menu style={{ width: 20, height: 20 }} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="l-nav-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/packages" onClick={() => setMenuOpen(false)}>One-Off Packages</Link>
            <Link to="/lead-gen-partner" onClick={() => setMenuOpen(false)}>Lead Gen Partner</Link>
            <button onClick={scrollToContact} style={{ color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0', fontFamily: 'var(--sans)', fontSize: 16, textAlign: 'left', width: '100%' }}>
              Get Free Audit
            </button>
            <button onClick={openCalendly} style={{ color: 'var(--terra)', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0', fontFamily: 'var(--sans)', fontSize: 16, textAlign: 'left', width: '100%', fontWeight: 600 }}>
              Book a Call →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="l-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div className="l-hero-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="l-hero-tag">AI Search Visibility Experts</span>
            <h1 className="l-h1" style={{ marginBottom: 20 }}>
              Rank&nbsp;#1<br />in&nbsp;<em className="l-serif-em">AI&nbsp;Search</em>
            </h1>
            <p className="l-hero-sub">
              Reach millions of people using ChatGPT, Google AI, and Gemini to find products and services. We make sure your brand is the answer.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
              <button className="l-btn" onClick={scrollToContact}>
                Get Free AI Audit
                <svg style={{ width: 16, height: 16, stroke: 'white', fill: 'none', strokeWidth: 2, flexShrink: 0 }} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </button>
              <button className="l-btn-ghost" onClick={openCalendly}>Book a Call</button>
            </div>
            <motion.div
              className="l-stat-grid"
              style={{ gridTemplateColumns: 'repeat(3,1fr)', marginTop: 40 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <div className="l-stat-cell"><span className="l-stat-num">+350%</span><span className="l-stat-lbl">AI Mentions</span></div>
              <div className="l-stat-cell"><span className="l-stat-num">4.4×</span><span className="l-stat-lbl">Conversion</span></div>
              <div className="l-stat-cell"><span className="l-stat-num">90%</span><span className="l-stat-lbl">Top 3</span></div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="l-chat">
              <div className="l-chat-topbar">
                <div className="l-chat-dots">
                  <div className="l-chat-dot" style={{ background: '#FF5F57' }} />
                  <div className="l-chat-dot" style={{ background: '#FEBC2E' }} />
                  <div className="l-chat-dot" style={{ background: '#28C840' }} />
                </div>
                <span className="l-chat-title">ChatGPT · Live Recommendation</span>
              </div>
              <div className="l-chat-body">
                <div className="l-chat-msg">
                  <div className="l-chat-av l-chat-av-u">U</div>
                  <div className="l-chat-bubble l-chat-bubble-u">Best physio clinics in Bangkok for sports recovery?</div>
                </div>
                <div className="l-chat-msg">
                  <div className="l-chat-av l-chat-av-ai">AI</div>
                  <div className="l-chat-bubble">
                    <div className="l-type l-type-1">Based on patient reviews and online presence,</div>
                    <div className="l-type l-type-2" style={{ marginTop: 6 }}>
                      <strong><span className="l-chat-hl">Form Recovery & Wellness</span></strong> is highly recommended — 4.9★ from 670+ reviews.
                    </div>
                    <div className="l-chat-src">
                      <span className="l-chat-pill">Sources cited: 3</span>
                      <span className="l-chat-pill">Confidence: High</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-chat-footer">
                <div className="l-chat-input">Ask ChatGPT anything...</div>
                <div className="l-chat-send">
                  <svg style={{ width: 14, height: 14, fill: 'white' }} viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
