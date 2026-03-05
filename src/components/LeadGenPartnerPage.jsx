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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const openCalendly = () => window.open('https://calendly.com/locully/30min', '_blank');

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
      </Helmet>

      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        {/* Nav */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: 'rgba(13,10,8,0.92)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--bdr)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '0 32px', height: '68px', maxWidth: '1240px',
          margin: '0 auto', width: '100%'
        }}>
          <Link to="/">
            <img
              src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png"
              alt="Locully"
              style={{ height: '32px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <Link to="/" style={{ color: 'var(--muted)', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>
              ← Back
            </Link>
            <button onClick={openCalendly} className="l-btn" style={{ padding: '10px 22px', fontSize: '13px' }}>
              Partner With Us
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section style={{
          paddingTop: '120px', paddingBottom: '100px',
          position: 'relative', overflow: 'hidden', minHeight: '620px',
          display: 'flex', alignItems: 'center'
        }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <div style={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: 'linear-gradient(to right, rgba(13,10,8,0.97) 50%, rgba(13,10,8,0.6) 100%)'
            }} />
            <img
              src="https://images.unsplash.com/photo-1695996972287-bb156e53e878"
              alt="Busy expo hall in Bangkok"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          <div className="l-container" style={{ position: 'relative', zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ maxWidth: '680px' }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
                <MapPin style={{ width: '14px', height: '14px', color: 'var(--terra)' }} />
                <span className="l-label">Thailand Local Partner</span>
              </div>
              <h1 className="l-h1" style={{ marginBottom: '24px' }}>
                Local Marketing Partner for{' '}
                <em className="l-serif-em">Fairs & Expos</em>
              </h1>
              <p className="l-body" style={{ maxWidth: '520px', marginBottom: '40px', fontSize: '18px' }}>
                Expand your reach in Thailand without the overhead. We are your dedicated team of local marketing experts.
              </p>
              <button onClick={openCalendly} className="l-btn" style={{ padding: '18px 36px', fontSize: '15px' }}>
                Start Your Campaign <ArrowRight style={{ width: '18px', height: '18px' }} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section style={{ padding: '100px 0', background: 'var(--bg2)' }}>
          <div className="l-container">
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '64px', alignItems: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Your Local Team</span>
                <h2 className="l-h2" style={{ marginBottom: '24px' }}>
                  Local Experts in a <em className="l-serif-em">Global Marketplace</em>
                </h2>
                <p className="l-body" style={{ marginBottom: '28px' }}>
                  Navigating Thailand's exhibition sector demands local insight and cultural fluency.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {["Cultural fluency support", "Instant lead qualification", "Cost-effective market entry"].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '50%',
                        background: 'rgba(204,100,50,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        <svg width="12" height="12" fill="none" stroke="var(--terra)" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="l-body">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', height: '360px', border: '1px solid var(--bdr)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1695060704188-4a86d4be9721"
                  alt="Modern Bangkok cityscape"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(13,10,8,0.9) 0%, transparent 50%)',
                  display: 'flex', alignItems: 'flex-end', padding: '28px'
                }}>
                  <div>
                    <div className="l-label" style={{ marginBottom: '8px' }}>Why Thailand?</div>
                    <h3 className="l-h3">A Strategic Hub</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: '100px 0', background: 'var(--bg3)' }}>
          <div className="l-container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Services</span>
              <h2 className="l-h2" style={{ marginBottom: '16px' }}>Comprehensive Support</h2>
              <p className="l-body" style={{ maxWidth: '400px', margin: '0 auto' }}>
                We don't just hand out brochures. We build pipelines.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.09 }}
                  style={{
                    background: 'var(--surface)', border: '1px solid var(--bdr)',
                    borderRadius: '14px', padding: '32px',
                    transition: 'border-color 0.3s'
                  }}
                  whileHover={{ borderColor: 'rgba(204,100,50,0.35)' }}
                >
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '10px',
                    background: 'rgba(204,100,50,0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', marginBottom: '20px'
                  }}>
                    <service.icon style={{ width: '22px', height: '22px', color: 'var(--terra)' }} />
                  </div>
                  <h3 style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '17px', marginBottom: '10px' }}>{service.title}</h3>
                  <p className="l-body-sm">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expo Types */}
        <section style={{ padding: '100px 0', background: 'var(--bg2)' }}>
          <div className="l-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
              <div>
                <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Event Types</span>
                <h2 className="l-h2" style={{ marginBottom: '20px' }}>Events We Cover</h2>
                <p className="l-body" style={{ marginBottom: '32px' }}>
                  From massive international trade shows at BITEC to niche luxury expos.
                </p>
                <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--bdr)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1703757931698-6b905414d019"
                    alt="Trade show booth setup"
                    style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {expoTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      padding: '24px', background: 'var(--surface)',
                      border: '1px solid var(--bdr)', borderRadius: '12px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <div style={{
                        width: '38px', height: '38px', borderRadius: '8px',
                        background: 'var(--bg)', border: '1px solid var(--bdr)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        <type.icon style={{ width: '18px', height: '18px', color: 'var(--terra)' }} />
                      </div>
                      <h3 style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '15px' }}>{type.title}</h3>
                    </div>
                    <p className="l-body-sm">{type.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics + CTA */}
        <section style={{ padding: '100px 0', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04
          }}>
            <img
              src="https://images.unsplash.com/photo-1471823753859-b9e1e4583bc6"
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div className="l-container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Proven Impact</span>
              <h2 className="l-h2">Results Our Partners See</h2>
            </div>

            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0',
              marginBottom: '80px', borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)',
              padding: '48px 0'
            }}>
              {metrics.map((metric, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'var(--serif)', fontSize: '52px', fontWeight: 600,
                    color: 'var(--terra)', lineHeight: 1, marginBottom: '10px'
                  }}>{metric.value}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted2)' }}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div style={{
              background: 'var(--terra)', borderRadius: '16px',
              padding: '56px 48px', textAlign: 'center',
              maxWidth: '760px', margin: '0 auto'
            }}>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
                Ready to Dominate Your Next Expo?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
                Let Locully represent your brand with excellence.
              </p>
              <button
                onClick={openCalendly}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#fff', color: 'var(--terra)',
                  padding: '16px 36px', borderRadius: '6px', border: 'none',
                  fontWeight: 700, fontSize: '15px', cursor: 'pointer'
                }}
              >
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
