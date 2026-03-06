import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';

const ConversionComparison = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="l-section" style={{ background: 'var(--bg2)' }}>
      <div className="l-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="l-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>The Conversion Gap</span>
          <h2 className="l-h2" style={{ marginBottom: '16px' }}>
            AI Traffic Converts at <em className="l-serif-em">4.4×</em>
          </h2>
          <p className="l-body" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Quality over quantity. AI-referred visitors arrive pre-sold and ready to book.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="l-conv-flex" style={{ marginBottom: '48px', gap: 0 }}>
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="l-conv-card"
            style={{ flex: '1 1 300px', maxWidth: '400px', opacity: 0.72 }}
          >
            <div className="l-conv-title">Traditional Search</div>
            <div className="l-conv-row"><span className="l-conv-key">Visitors</span><span className="l-conv-val">100</span></div>
            <div className="l-conv-row"><span className="l-conv-key">Conversion Rate</span><span className="l-conv-val">2–3%</span></div>
            <div className="l-conv-row"><span className="l-conv-key">New Leads</span><span className="l-conv-val big">2–3</span></div>
            <p className="l-body-sm" style={{ marginTop: '16px', fontStyle: 'italic', color: 'var(--muted2)' }}>High volume, low intent</p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="l-conv-flex-mid"
            style={{ background: 'var(--bg2)' }}
          >
            <div className="l-conv-vs">
              <ArrowRight style={{ width: '18px', height: '18px' }} />
            </div>
          </motion.div>

          {/* AI Winner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="l-conv-card winner"
            style={{ flex: '1 1 300px', maxWidth: '400px', position: 'relative' }}
          >
            <div className="l-winner-badge">WINNER</div>
            <div className="l-conv-title" style={{ color: 'var(--terra)' }}>AI Recommendation</div>
            <div className="l-conv-row"><span className="l-conv-key">Visitors</span><span className="l-conv-val">100</span></div>
            <div className="l-conv-row">
              <span className="l-conv-key">Conversion Rate</span>
              <span className="l-conv-val accent">10%+ <span className="l-conv-badge">4.4×</span></span>
            </div>
            <div className="l-conv-row"><span className="l-conv-key">New Leads</span><span className="l-conv-val accent big">10–15</span></div>
            <p className="l-body-sm" style={{ marginTop: '16px', fontStyle: 'italic', color: 'var(--terra)' }}>Lower volume, higher intent</p>
          </motion.div>
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="l-callout"
          style={{ maxWidth: '760px', margin: '0 auto' }}
        >
          <p>
            <strong>Pre-qualified leads.</strong> AI search delivers visitors who've already researched their options and chosen your brand. They arrive ready to book — not browse.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionComparison;
