import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, ArrowDown } from 'lucide-react';

const ConversionComparison = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="l-section" style={{ background: 'var(--bg2)' }}>
      <div className="l-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>The Conversion Gap</span>
          <h2 className="l-h2" style={{ marginBottom: '16px' }}>
            AI Traffic Converts at <em className="l-serif-em">4.4×</em>
          </h2>
          <p className="l-body" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Quality over quantity. Why AI-referred visitors are worth more than generic search clicks.
          </p>
        </motion.div>

        <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              flex: '1 1 300px', maxWidth: '400px',
              background: 'var(--bg3)', border: '1px solid var(--bdr)',
              borderRadius: '16px 0 0 16px', padding: '40px 36px',
              opacity: 0.7
            }}
          >
            <div className="l-label" style={{ marginBottom: '20px', color: 'var(--muted)' }}>Traditional Search</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Visitors', value: '100', dim: true },
                { label: 'Conversion Rate', value: '2–3%', dim: true },
                { label: 'New Leads', value: '2–3', dim: true },
              ].map(({ label, value, dim }) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px', background: 'var(--surface)',
                  border: '1px solid var(--bdr)', borderRadius: '8px'
                }}>
                  <span className="l-body-sm">{label}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '22px', color: 'var(--muted2)' }}>{value}</span>
                </div>
              ))}
            </div>
            <p className="l-body-sm" style={{ marginTop: '20px', fontStyle: 'italic', color: 'var(--muted2)' }}>
              High volume, low intent
            </p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '72px', flexShrink: 0, background: 'var(--bg)',
              zIndex: 2
            }}
          >
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 32px rgba(204,100,50,0.4)'
            }}>
              <ArrowRight style={{ width: '20px', height: '20px', color: '#fff' }} />
            </div>
          </motion.div>

          {/* AI Winner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              flex: '1 1 300px', maxWidth: '400px', position: 'relative',
              background: 'var(--surface)', border: '1px solid var(--bdr2)',
              borderRadius: '0 16px 16px 0', padding: '40px 36px',
              boxShadow: '0 0 64px rgba(204,100,50,0.12)'
            }}
          >
            <div style={{
              position: 'absolute', top: '-14px', right: '20px',
              background: 'var(--terra)', color: '#fff',
              padding: '4px 14px', borderRadius: '20px',
              fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em'
            }}>WINNER</div>
            <div className="l-label" style={{ marginBottom: '20px' }}>AI Recommendation</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Visitors', value: '100' },
                { label: 'Conversion Rate', value: '10%+', highlight: true },
                { label: 'New Leads', value: '10–15', highlight: true },
              ].map(({ label, value, highlight }) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '16px 20px',
                  background: highlight ? 'rgba(204,100,50,0.08)' : 'var(--bg3)',
                  border: `1px solid ${highlight ? 'var(--bdr2)' : 'var(--bdr)'}`,
                  borderRadius: '8px'
                }}>
                  <span className="l-body-sm">{label}</span>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: '22px',
                    color: highlight ? 'var(--terra)' : 'var(--cream)'
                  }}>{value}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em',
                background: 'var(--terra)', color: '#fff', padding: '3px 10px', borderRadius: '4px'
              }}>4.4×</span>
              <p className="l-body-sm" style={{ fontStyle: 'italic', color: 'var(--terra)' }}>
                Lower volume, higher intent
              </p>
            </div>
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          style={{
            maxWidth: '760px', margin: '0 auto',
            background: 'var(--surface)', border: '1px solid var(--bdr2)',
            borderRadius: '12px', padding: '32px 36px',
            borderLeft: '3px solid var(--terra)'
          }}
        >
          <p className="l-body" style={{ margin: 0, lineHeight: 1.7 }}>
            <span style={{ color: 'var(--terra)', fontWeight: 600 }}>Pre-qualified leads.</span>{' '}
            AI search delivers visitors who've already been researched options and chosen your brand. 
            They arrive ready to book — not browse.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionComparison;
