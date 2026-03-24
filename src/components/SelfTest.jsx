import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Square, ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const items = [
  "You've never searched for your own brand on ChatGPT or Perplexity",
  "When you do search, your brand doesn't appear in the recommendations",
  "Your website has no structured FAQ or Q&A section",
  "You rely entirely on Google Ads or paid media to drive enquiries",
  "Customers rarely or never mention finding you through AI search",
  "You don't know which AI-generated queries your competitors appear in",
  "Your website content hasn't been updated in over a year",
  "You've never heard of 'AI share of voice' for your industry",
];

export default function SelfTest() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [checked, setChecked] = useState([]);

  const toggle = (i) => setChecked(prev =>
    prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
  );

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const count = checked.length;

  return (
    <section ref={ref} className="l-section" style={{ background: 'var(--bg2)' }}>
      <div className="l-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="l-label" style={{ marginBottom: 20, display: 'inline-flex' }}>Self-Test</span>
          <h2 className="l-h2" style={{ marginBottom: 12 }}>
            Is your brand <em className="l-serif-em">invisible</em> to AI?
          </h2>
          <p className="l-body" style={{ color: 'var(--muted)', marginBottom: 40, maxWidth: 480 }}>
            Tick every statement that applies to you right now.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 12,
            marginBottom: 32,
          }}>
            {items.map((item, i) => {
              const isChecked = checked.includes(i);
              return (
                <motion.button
                  key={i}
                  onClick={() => toggle(i)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '16px 18px',
                    background: isChecked ? 'rgba(204,100,50,0.12)' : 'var(--surface)',
                    border: `1px solid ${isChecked ? 'var(--terra)' : 'var(--bdr)'}`,
                    borderRadius: 10, cursor: 'pointer', textAlign: 'left',
                    transition: 'all 0.2s',
                    fontFamily: 'var(--sans)',
                    color: isChecked ? 'var(--cream)' : 'var(--muted)',
                  }}
                >
                  {isChecked
                    ? <CheckSquare style={{ width: 18, height: 18, color: 'var(--terra)', flexShrink: 0, marginTop: 1 }} />
                    : <Square style={{ width: 18, height: 18, color: 'rgba(245,242,236,0.25)', flexShrink: 0, marginTop: 1 }} />
                  }
                  <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Result — 3+ checked */}
          {count >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                padding: '20px 24px',
                background: 'rgba(204,100,50,0.1)',
                border: '1px solid var(--terra)',
                borderRadius: 12,
                maxWidth: 600,
              }}
            >
              <p style={{ color: 'var(--terra)', fontWeight: 600, marginBottom: 6, fontSize: 15 }}>
                {count} of 8 — your brand is underrepresented in AI search.
              </p>
              <p className="l-body" style={{ color: 'var(--muted)', marginBottom: 16, fontSize: 14 }}>
                This is fixable. Locully specialises in exactly this — we've taken brands from zero AI citations to appearing consistently across ChatGPT, Perplexity, and Google AI Overviews.
              </p>
              <button
                className="l-btn l-btn-sm"
                onClick={scrollToContact}
                style={{ border: 'none' }}
              >
                Get a free audit — see where you stand
                <ArrowRight style={{ width: 14, height: 14 }} />
              </button>
            </motion.div>
          )}

          {/* Nudge — 1–2 checked */}
          {count > 0 && count < 3 && (
            <p style={{ color: 'var(--muted)', fontSize: 14 }}>
              {count} ticked. Keep going — most brands tick 4 or more.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
