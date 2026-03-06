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
      prompts: ['Best physiotherapist in Thonglor', 'Physio for runners Bangkok', 'Best chinese medicine clinic'],
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
      prompts: ['Best Botox clinic Bangkok', 'Where to get fillers in Bangkok', 'Top aesthetic clinic Bangkok'],
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
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="l-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Case Studies</span>
          <h2 className="l-h2" style={{ marginBottom: '16px' }}>
            Real Results, <em className="l-serif-em">Real Growth</em>
          </h2>
          <p className="l-body" style={{ maxWidth: '520px', margin: '0 auto' }}>
            How Bangkok clinics transformed their AI visibility with Locully.
          </p>
        </motion.div>

        <div className="l-cases-grid">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.18 }}
              className="l-case"
            >
              <div className="l-case-ind">{study.industry}</div>
              <div className="l-case-name">{study.company}</div>

              <div className="l-case-stats">
                {study.stats.map((stat, idx) => (
                  <div key={idx} className="l-case-stat">
                    <span className="l-case-snum">{stat.value}</span>
                    <span className="l-case-slbl">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '20px', padding: '16px', background: 'var(--surface)', border: '1px dashed var(--bdr)', borderRadius: '8px' }}>
                <div className="l-prompts-head">Dominating Prompts</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {study.prompts.map((kw, idx) => (
                    <span key={idx} className="l-prompt-tag">"{kw}"</span>
                  ))}
                </div>
              </div>

              <p className="l-body" style={{ marginBottom: '24px', flex: 1 }}>{study.achievement}</p>

              <a
                href="https://locully-client-success-m8a58k2.gamma.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="l-case-link"
                style={{ paddingTop: '20px', borderTop: '1px solid var(--bdr)', display: 'inline-flex' }}
              >
                View Case Study <ArrowRight style={{ width: '14px', height: '14px' }} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
