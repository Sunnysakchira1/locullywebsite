import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const FounderCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="l-founder"
    >
      {/* Image */}
      <div className="l-founder-img">
        <img
          src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/3500a91a4c149ce4bd90f26531350113.jpg"
          alt="Sunny Sakchiraphong - Founder of Locully"
        />
      </div>

      {/* Content */}
      <div className="l-founder-body">
        <div className="l-founder-tag">The Founder</div>
        <div className="l-founder-name">Sunny Sakchiraphong</div>
        <div className="l-founder-role">Founder & SEO Strategist</div>

        <blockquote className="l-founder-quote">
          "After 6+ years in the SEO trenches, I realized most agencies focus on vanity metrics — traffic that doesn't convert. I built Locully to change that."
          <br /><br />
          "My philosophy: <strong style={{ color: 'var(--cream)', fontStyle: 'normal' }}>No impact on revenue = no point in marketing.</strong> We don't just chase rankings; we chase growth."
        </blockquote>

        <div className="l-founder-links">
          <a href="https://www.linkedin.com/in/rachaphon-sakchiraphong/" target="_blank" rel="noopener noreferrer" className="l-founder-link">
            <Linkedin style={{ width: '16px', height: '16px' }} />
            LinkedIn
          </a>
          <a href="mailto:sunny@locully.org" className="l-founder-link">
            <Mail style={{ width: '16px', height: '16px' }} />
            Email Sunny
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FounderCard;
