import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { Figure } from '@/brand/components';
import '@/brand/pages/about.css';

export const FOUNDER_NAME = 'Rachaphon Sakchiraphong';
export const FOUNDER_DISPLAY = 'Rachaphon Sakchiraphong (Sunny)';
export const FOUNDER_PATH = '/rachaphon-sakchiraphong/';
export const FOUNDER_LINKEDIN = 'https://www.linkedin.com/in/rachaphon-sakchiraphong/';

/** Founder card used on /about. Canonical name form: "Rachaphon Sakchiraphong (Sunny)". */
const FounderCard = () => (
  <div className="lbp-about-person">
    <Figure src="/sunny.jpeg" alt="Rachaphon Sakchiraphong (Sunny), founder and CEO of Locully" />

    <div className="lbp-about-body">
      <span className="lb-eyebrow">The founder</span>
      <h3 className="lbp-about-name">{FOUNDER_DISPLAY}</h3>
      <p className="lbp-about-role">Founder and CEO, Locully</p>

      <p className="lbp-about-text">
        Rachaphon Sakchiraphong, known as Sunny, founded the business in Bangkok in 2020 and
        rebranded it as Locully in 2025. Sunny sets the strategy on every Locully client account,
        across search and paid ads.
      </p>
      <blockquote className="lbp-about-quote">
        “No impact on revenue = no point in marketing.”
      </blockquote>

      <div className="lbp-about-links">
        <Link to={FOUNDER_PATH} className="lb-btn-o">Read Sunny’s profile</Link>
        <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="lb-btn-o">
          <Linkedin style={{ width: '16px', height: '16px' }} aria-hidden="true" />
          LinkedIn
        </a>
        <a href="mailto:sunny@locully.org" className="lb-btn-o">
          <Mail style={{ width: '16px', height: '16px' }} aria-hidden="true" />
          Email Sunny
        </a>
      </div>
    </div>
  </div>
);

export default FounderCard;
