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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const openCalendly = () => window.open('https://calendly.com/locully/30min', '_blank');

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
              Speak to Us
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section style={{
          paddingTop: '160px', paddingBottom: '100px',
          textAlign: 'center', background: 'var(--bg)',
          position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(204,100,50,0.08) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div className="l-container" style={{ position: 'relative', zIndex: 1 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="l-label" style={{ marginBottom: '28px', display: 'inline-flex' }}>About Locully</span>
              <h1 className="l-h1" style={{ marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px' }}>
                We Don't Just Do Marketing.{' '}
                <em className="l-serif-em">We Drive Revenue.</em>
              </h1>
              <p className="l-body" style={{ maxWidth: '560px', margin: '24px auto 0' }}>
                Locully is an agency built on the belief that traffic is vanity, and conversion is sanity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder */}
        <section style={{ padding: '100px 0', background: 'var(--bg2)' }}>
          <div className="l-container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="l-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Founder</span>
              <h2 className="l-h2">Meet the Mind Behind Locully</h2>
            </div>
            <FounderCard />
          </div>
        </section>

        {/* Adaptability */}
        <section style={{ padding: '100px 0', background: 'var(--bg3)' }}>
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
                <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Our Approach</span>
                <h2 className="l-h2" style={{ marginBottom: '24px' }}>
                  Adaptability is Our <em className="l-serif-em">Superpower</em>
                </h2>
                <p className="l-body" style={{ marginBottom: '20px' }}>
                  The digital landscape changes daily. Rigid strategies die fast.
                </p>
                <p className="l-body">
                  At Locully, we build agile, data-driven strategies that evolve with search — including AI-powered search.
                </p>

                <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { icon: TrendingUp, title: 'Revenue-First Mindset', desc: 'We optimize for your bottom line.' },
                    { icon: Users, title: 'Dedicated Strategists', desc: 'Direct access to senior team members.' },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} style={{
                      display: 'flex', gap: '16px', alignItems: 'flex-start',
                      padding: '20px', background: 'var(--surface)',
                      border: '1px solid var(--bdr)', borderRadius: '10px'
                    }}>
                      <div style={{
                        width: '38px', height: '38px', borderRadius: '8px',
                        background: 'rgba(204,100,50,0.12)', display: 'flex',
                        alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        <Icon style={{ width: '18px', height: '18px', color: 'var(--terra)' }} />
                      </div>
                      <div>
                        <div style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '15px', marginBottom: '4px' }}>{title}</div>
                        <div className="l-body-sm">{desc}</div>
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
                style={{
                  background: 'var(--surface)', border: '1px solid var(--bdr2)',
                  borderRadius: '16px', padding: '40px'
                }}
              >
                <h3 className="l-h3" style={{ marginBottom: '28px' }}>Why Clients Choose Us</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    "We treat your business like our own.",
                    "Transparent reporting — no vanity metrics.",
                    "Deep expertise in technical SEO & AI search.",
                    "Direct access to senior strategists.",
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: 'var(--terra)', flexShrink: 0, marginTop: '9px'
                      }} />
                      <span className="l-body">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section style={{ padding: '100px 0', background: 'var(--bg2)' }}>
          <div className="l-container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Industries</span>
              <h2 className="l-h2" style={{ marginBottom: '16px' }}>Industries We've Mastered</h2>
              <p className="l-body" style={{ maxWidth: '440px', margin: '0 auto' }}>
                Diverse experience means cross-industry insights.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
              {industries.map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  style={{
                    padding: '28px', background: 'var(--surface)',
                    border: '1px solid var(--bdr)', borderRadius: '12px',
                    transition: 'border-color 0.3s'
                  }}
                  whileHover={{ borderColor: 'rgba(204,100,50,0.35)' }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'rgba(204,100,50,0.1)', display: 'flex',
                    alignItems: 'center', justifyContent: 'center', marginBottom: '16px'
                  }}>
                    <Icon style={{ width: '22px', height: '22px', color: 'var(--terra)' }} />
                  </div>
                  <h3 style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '16px', marginBottom: '8px' }}>{title}</h3>
                  <p className="l-body-sm">{description}</p>
                </motion.div>
              ))}

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: industries.length * 0.07 }}
                onClick={openCalendly}
                style={{
                  padding: '28px', background: 'var(--terra)',
                  borderRadius: '12px', cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                  textAlign: 'center', minHeight: '160px'
                }}
              >
                <Users style={{ width: '32px', height: '32px', color: '#fff', marginBottom: '12px' }} />
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>Your Industry</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '14px' }}>Don't see your sector?</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: '#fff', fontWeight: 600, fontSize: '13px',
                  borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: '2px'
                }}>
                  Contact Us <ArrowRight style={{ width: '14px', height: '14px' }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: '120px 0', background: 'var(--bg)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: '700px', height: '400px',
            background: 'radial-gradient(ellipse, rgba(204,100,50,0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />
          <div className="l-container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 className="l-h2" style={{ marginBottom: '20px' }}>
              Ready to Stop <em className="l-serif-em">Guessing?</em>
            </h2>
            <p className="l-body" style={{ maxWidth: '480px', margin: '0 auto 40px' }}>
              Your competition isn't waiting. Let's build a strategy that turns your website into your best salesperson.
            </p>
            <button onClick={openCalendly} className="l-btn" style={{ padding: '18px 40px', fontSize: '15px' }}>
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
