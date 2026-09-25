import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Figure } from '@/brand/components';
import '@/brand/pages/about.css';

const FounderCard = () => {
  return (
    <div className="lbp-about-person">
      {/* Image */}
      <Figure src="/sunny.jpeg" alt="Sunny Sakchiraphong - Founder of Locully" />

      {/* Content */}
      <div className="lbp-about-body">
        <span className="lb-eyebrow">The Founder</span>
        <div className="lbp-about-name">Sunny Sakchiraphong</div>
        <p className="lbp-about-role">Founder & SEO Strategist</p>

        <blockquote className="lbp-about-quote">
          "After 6+ years in the SEO trenches, I realized most agencies focus on vanity metrics — traffic that doesn't convert. I built Locully to change that."
          <br /><br />
          "My philosophy: <strong>No impact on revenue = no point in marketing.</strong> We don't just chase rankings; we chase growth."
        </blockquote>

        <div className="lbp-about-links">
          <a href="https://www.linkedin.com/in/rachaphon-sakchiraphong/" target="_blank" rel="noopener noreferrer" className="lb-btn-o">
            <Linkedin style={{ width: '16px', height: '16px' }} />
            LinkedIn
          </a>
          <a href="mailto:sunny@locully.org" className="lb-btn-o">
            <Mail style={{ width: '16px', height: '16px' }} />
            Email Sunny
          </a>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
