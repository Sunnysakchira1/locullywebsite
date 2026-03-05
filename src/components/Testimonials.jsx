import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const testimonials = [
    {
      name: 'Clinic Owner',
      role: 'Physio & Wellness',
      content: 'We went from Page 3 to #1 for "best physio Bangkok" in 90 days. Patient calls increased 172%.',
      rating: 5
    },
    {
      name: 'Marketing Director',
      role: 'Aesthetic Clinic',
      content: "Locully's AI visibility strategy was a game-changer. Organic enquiries doubled in 6 months.",
      rating: 5
    },
    {
      name: 'Founder',
      role: 'Wellness Brand',
      content: 'The quality of patients from AI search is remarkable. Conversion rate is 4x higher than Google Ads.',
      rating: 5
    }
  ];

  return (
    <section ref={ref} className="l-section" style={{ background: 'var(--bg3)' }}>
      <div className="l-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Success Stories</span>
          <h2 className="l-h2" style={{ marginBottom: '16px' }}>
            Trusted by Bangkok's <em className="l-serif-em">Leading Clinics</em>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                background: 'var(--surface)', border: '1px solid var(--bdr)',
                borderRadius: '14px', padding: '36px',
                display: 'flex', flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} style={{ width: '16px', height: '16px', fill: 'var(--terra)', color: 'var(--terra)' }} />
                ))}
              </div>

              <p style={{
                fontFamily: 'var(--serif)', fontSize: '17px', color: 'var(--cream)',
                lineHeight: 1.65, fontStyle: 'italic', fontWeight: 300,
                flex: 1, marginBottom: '28px'
              }}>
                "{t.content}"
              </p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                paddingTop: '20px', borderTop: '1px solid var(--bdr)'
              }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'var(--bg3)', border: '1px solid var(--bdr2)',
                  flexShrink: 0
                }} />
                <div>
                  <div style={{ color: 'var(--cream)', fontWeight: 600, fontSize: '14px' }}>{t.name}</div>
                  <div style={{ color: 'var(--muted2)', fontSize: '12px', fontFamily: 'var(--mono)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
