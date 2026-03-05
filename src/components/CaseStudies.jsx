import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const studies = [
    {
      company: 'Physio & Wellness Clinic, Bangkok',
      industry: 'HEALTHCARE',
      stats: [
        { value: '+350%', label: 'AI Mentions' },
        { value: '90%', label: 'Top 3 Rankings' },
        { value: '20–25', label: 'AI Enquiries/Mo' }
      ],
      prompts: [
        'Best physiotherapist in Thonglor',
        'Physio for runners Bangkok',
        'Best chinese medicine clinic'
      ],
      achievement: 'Increased AI mentions from 30 to 112. Now appears in Top 3 for 90% of all physio-related AI prompts in Bangkok.',
    },
    {
      company: 'Beauty Clinic, Bangkok',
      industry: 'AESTHETICS',
      stats: [
        { value: '+289%', label: 'AI Mentions' },
        { value: '70%', label: 'Top 3 Rankings' },
        { value: '10–12', label: 'AI Enquiries/Mo' }
      ],
      prompts: [
        'Best Botox clinic Bangkok',
        'Where to get fillers in Bangkok',
        'Top aesthetic clinic Bangkok'
      ],
      achievement: "Featured in ChatGPT's top recommendations. 75% conversion rate from AI-referred leads.",
    }
  ];

  return (
    <section ref={ref} className="l-section" style={{ background: 'var(--bg)' }}>
      <div className="l-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Case Studies</span>
          <h2 className="l-h2" style={{ marginBottom: '16px' }}>
            Real Results, <em className="l-serif-em">Real Growth</em>
          </h2>
          <p className="l-body" style={{ maxWidth: '520px', margin: '0 auto' }}>
            How Bangkok clinics transformed their AI visibility with Locully.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.18 }}
              style={{
                background: 'var(--bg3)', border: '1px solid var(--bdr)',
                borderRadius: '16px', padding: '40px', display: 'flex', flexDirection: 'column',
                transition: 'border-color 0.3s'
              }}
              whileHover={{ borderColor: 'rgba(204,100,50,0.35)' }}
            >
              {/* Header */}
              <div style={{ marginBottom: '32px' }}>
                <span style={{
                  fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.15em',
                  color: 'var(--terra)', background: 'rgba(204,100,50,0.1)',
                  padding: '4px 12px', borderRadius: '4px', display: 'inline-block', marginBottom: '14px'
                }}>{study.industry}</span>
                <h3 className="l-h3">{study.company}</h3>
              </div>

              {/* Stats */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px',
                marginBottom: '32px', paddingBottom: '32px',
                borderBottom: '1px solid var(--bdr)'
              }}>
                {study.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div style={{
                      fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 600,
                      color: 'var(--terra)', lineHeight: 1, marginBottom: '6px'
                    }}>{stat.value}</div>
                    <div style={{
                      fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: 'var(--muted2)'
                    }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Prompts */}
              <div style={{
                marginBottom: '24px', padding: '20px',
                background: 'var(--surface)', border: '1px dashed var(--bdr)',
                borderRadius: '10px'
              }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--muted2)', marginBottom: '12px',
                  display: 'flex', alignItems: 'center', gap: '8px'
                }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  Dominating Prompts
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {study.prompts.map((kw, idx) => (
                    <span key={idx} style={{
                      fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted)',
                      background: 'var(--bg)', border: '1px solid var(--bdr)',
                      padding: '4px 10px', borderRadius: '4px'
                    }}>"{kw}"</span>
                  ))}
                </div>
              </div>

              {/* Achievement */}
              <p className="l-body" style={{ marginBottom: '32px', flex: 1 }}>
                {study.achievement}
              </p>

              {/* Link */}
              <a
                href="https://locully-client-success-m8a58k2.gamma.site/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: 'var(--terra)', fontWeight: 600, fontSize: '14px', textDecoration: 'none',
                  paddingTop: '20px', borderTop: '1px solid var(--bdr)'
                }}
              >
                View Case Study <ArrowRight style={{ width: '16px', height: '16px' }} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
