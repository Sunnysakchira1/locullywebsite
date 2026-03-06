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
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="l-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Success Stories</span>
          <h2 className="l-h2">
            Trusted by Bangkok's <em className="l-serif-em">Leading Clinics</em>
          </h2>
        </motion.div>

        <div className="l-testi-grid">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="l-testi"
            >
              <div className="l-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} style={{ width: '14px', height: '14px', fill: 'var(--terra)', color: 'var(--terra)' }} />
                ))}
              </div>
              <p className="l-quote">"{t.content}"</p>
              <div className="l-testi-auth">
                <div className="l-testi-name">{t.name}</div>
                <div className="l-testi-role">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
