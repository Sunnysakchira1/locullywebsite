import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Users, Target, Database, MessageCircle, BarChart,
  MapPin, GraduationCap, Building2, Briefcase, Menu, X
} from 'lucide-react';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const LeadGenPartnerPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); setMenuOpen(false); };

  const services = [
    { icon: Users, title: "Local Representation", description: "Professional staff representing your brand at expos with cultural fluency and English-language support." },
    { icon: Target, title: "Lead Capture", description: "Systematic collection and qualification of leads — every contact graded by intent and readiness." },
    { icon: Database, title: "CRM Integration", description: "Seamless data entry directly into your systems the same day. No spreadsheet chaos." },
    { icon: MessageCircle, title: "Post-Event Nurturing", description: "Immediate follow-up sequences sent within 24 hours to keep your leads warm." },
    { icon: BarChart, title: "Market Intelligence", description: "Detailed analytics on attendee demographics, competitor presence, and market signals." }
  ];

  const expoTypes = [
    { title: "Study Abroad Fairs", icon: GraduationCap, desc: "Connecting universities with Thai students planning international education." },
    { title: "Property Expos", icon: Building2, desc: "Real estate investment opportunities across Southeast Asia." },
    { title: "Education Expos", icon: GraduationCap, desc: "International schools and language programmes." },
    { title: "Business Conferences", icon: Briefcase, desc: "B2B networking events at BITEC, IMPACT, and beyond." },
    { title: "Trade Shows", icon: MapPin, desc: "Industry-specific exhibitions across all major Thai venues." }
  ];

  const metrics = [
    { value: "500+", label: "Qualified Leads" },
    { value: "45%", label: "Avg. Conversion" },
    { value: "3×", label: "ROI Boost" },
    { value: "100%", label: "Data Accuracy" }
  ];

  return (
    <>
      <Helmet>
        <title>Local Marketing Partner in Thailand | Fairs & Expos | Locully</title>
        <meta name="description" content="Your Local Marketing Partner for international fairs in Thailand." />
        <link rel="canonical" href="https://locully.org/lead-gen-partner" />
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
            <button onClick={openCalendly} className="l-btn l-btn-sm" style={{ border: 'none' }}>Partner With Us</button>
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

        {/* Hero with bg image */}
        <section style={{ position: 'relative', minHeight: '520px', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to right, rgba(13,10,8,0.97) 55%, rgba(13,10,8,0.5) 100%)' }} />
            <img src="https://images.unsplash.com/photo-1695996972287-bb156e53e878" alt="Expo hall" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="l-container" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ maxWidth: '620px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <MapPin style={{ width: '14px', height: '14px', color: 'var(--terra)' }} />
                <span className="l-label">Thailand Local Partner</span>
              </div>
              <h1 className="l-h1" style={{ marginBottom: '20px' }}>
                Local Marketing Partner for <em className="l-serif-em">Fairs & Expos</em>
              </h1>
              <p className="l-body" style={{ marginBottom: '36px', fontSize: '17px' }}>
                Expand your reach in Thailand without the overhead. We are your dedicated team of local marketing experts.
              </p>
              <button onClick={openCalendly} className="l-btn l-btn-lg" style={{ border: 'none' }}>
                Start Your Campaign <ArrowRight style={{ width: '18px', height: '18px' }} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="l-section" style={{ background: 'var(--bg2)', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="l-container">
            <div className="l-two-col">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="l-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Your Local Team</span>
                <h2 className="l-h2" style={{ marginBottom: '20px' }}>
                  Local Experts in a <em className="l-serif-em">Global Marketplace</em>
                </h2>
                <p className="l-body" style={{ marginBottom: '24px' }}>Navigating Thailand's exhibition sector demands local insight and cultural fluency.</p>
                <div className="l-checklist">
                  {["Cultural fluency support", "Instant lead qualification", "Cost-effective market entry"].map((item, i) => (
                    <div key={i} className="l-check-item">
                      <div className="l-check-icon">
                        <svg width="10" height="10" fill="none" stroke="var(--terra)" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="l-check-text">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative', height: '320px', border: '1px solid var(--bdr)' }}>
                <img src="https://images.unsplash.com/photo-1695060704188-4a86d4be9721" alt="Bangkok cityscape" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,10,8,0.9) 0%, transparent 50%)', display: 'flex', alignItems: 'flex-end', padding: '24px' }}>
                  <div>
                    <div className="l-label" style={{ marginBottom: '6px' }}>Why Thailand?</div>
                    <h3 className="l-h3">A Strategic Hub</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="l-section" style={{ background: 'var(--bg3)', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="l-container">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <span className="l-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>Services</span>
              <h2 className="l-h2" style={{ marginBottom: '12px' }}>Comprehensive Support</h2>
              <p className="l-body" style={{ maxWidth: '380px', margin: '0 auto' }}>We don't just hand out brochures. We build pipelines.</p>
            </div>
            <div className="l-services-grid">
              {services.map((service, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.09 }}
                  className="l-service-card">
                  <div className="l-service-icon">
                    <service.icon style={{ width: '22px', height: '22px', color: 'var(--terra)' }} />
                  </div>
                  <div className="l-service-title">{service.title}</div>
                  <div className="l-service-desc">{service.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expo Types */}
        <section className="l-section" style={{ background: 'var(--bg2)', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="l-container">
            <div className="l-expo-grid">
              <div>
                <span className="l-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Event Types</span>
                <h2 className="l-h2" style={{ marginBottom: '16px' }}>Events We Cover</h2>
                <p className="l-body" style={{ marginBottom: '28px' }}>From massive international trade shows at BITEC to niche luxury expos.</p>
                <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--bdr)' }}>
                  <img src="https://images.unsplash.com/photo-1703757931698-6b905414d019" alt="Trade show" style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                </div>
              </div>
              <div className="l-expo-cards">
                {expoTypes.map((type, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.02 }} className="l-expo-card">
                    <div className="l-expo-card-head">
                      <div className="l-expo-card-icon">
                        <type.icon style={{ width: '18px', height: '18px', color: 'var(--terra)' }} />
                      </div>
                      <h3 style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '14px' }}>{type.title}</h3>
                    </div>
                    <p className="l-body-sm">{type.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="l-section" style={{ background: 'var(--bg)', paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="l-container">
            <div style={{ textAlign: 'center', marginBottom: '52px' }}>
              <span className="l-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>Proven Impact</span>
              <h2 className="l-h2">Results Our Partners See</h2>
            </div>
            <div className="l-metrics-band" style={{ marginBottom: '64px' }}>
              {metrics.map((metric, index) => (
                <div key={index} className="l-metric-item">
                  <span className="l-metric-big">{metric.value}</span>
                  <span className="l-metric-lbl2">{metric.label}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'var(--terra)', borderRadius: '14px', padding: '52px 40px', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px,4vw,34px)', fontWeight: 600, color: '#fff', marginBottom: '14px' }}>Ready to Dominate Your Next Expo?</h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', marginBottom: '32px', maxWidth: '440px', margin: '0 auto 32px' }}>Let Locully represent your brand with excellence.</p>
              <button onClick={openCalendly} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#fff', color: 'var(--terra)', padding: '14px 32px', borderRadius: '6px', border: 'none', fontWeight: 700, fontSize: '15px', cursor: 'pointer' }}>
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LeadGenPartnerPage;
