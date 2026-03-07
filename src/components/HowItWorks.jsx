import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: ['Audit your ', 'AI visibility'],
    titleEm: 1,
    body: 'We map exactly where and how AI engines mention your brand — and diagnose every gap where competitors are stealing your share of voice.',
  },
  {
    num: '02',
    title: ['Build ', 'citation authority'],
    titleEm: 1,
    body: 'Content, backlinks, and structured data engineered to make ChatGPT, Gemini, and Google AI cite your brand as the trusted answer.',
  },
  {
    num: '03',
    title: ['Compound ', 'every month'],
    titleEm: 1,
    body: 'AI visibility compounds over time. Each article, each citation, each link builds a moat competitors cannot replicate overnight.',
  },
];

const HowItWorks = () => (
  <section className="l-section l-hiw">
    <div className="l-container">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 56 }}
      >
        <div className="l-label" style={{ marginBottom: 16 }}>How It Works</div>
        <h2 className="l-h2" style={{ marginBottom: 14 }}>
          From invisible to <em className="l-serif-em">undeniable</em>
        </h2>
        <p className="l-body" style={{ maxWidth: 480, color: 'var(--muted)' }}>
          Three steps to make your brand the answer AI engines recommend — every time.
        </p>
      </motion.div>

      <div className="l-process-grid">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            className="l-process-step"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="l-process-num">{step.num}</div>
            <div className="l-process-title">
              {step.title[0]}
              <em className="l-serif-em">{step.title[1]}</em>
            </div>
            <p className="l-process-body">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
