import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { Figure } from '@/brand/components';
import { useLocale, lp } from '@/i18n';
import '@/brand/pages/about.css';

export const FOUNDER_NAME = 'Rachaphon Sakchiraphong';
export const FOUNDER_DISPLAY = 'Rachaphon Sakchiraphong (Sunny)';
export const FOUNDER_PATH = '/rachaphon-sakchiraphong/';
export const FOUNDER_LINKEDIN = 'https://www.linkedin.com/in/rachaphon-sakchiraphong/';

const COPY = {
  en: {
    alt: 'Rachaphon Sakchiraphong (Sunny), founder and CEO of Locully',
    eyebrow: 'The founder',
    role: 'Founder and CEO, Locully',
    bio: 'Rachaphon Sakchiraphong, known as Sunny, founded the business in Bangkok in 2020 and rebranded it as Locully in 2025. Sunny sets the strategy on every Locully client account, across search and paid ads.',
    quote: '“No impact on revenue = no point in marketing.”',
    profile: 'Read Sunny’s profile',
    email: 'Email Sunny',
  },
  th: {
    alt: 'Rachaphon Sakchiraphong (Sunny) ผู้ก่อตั้งและ CEO ของ Locully',
    eyebrow: 'ผู้ก่อตั้ง',
    role: 'ผู้ก่อตั้งและ CEO ของ Locully',
    bio: 'Rachaphon Sakchiraphong หรือ Sunny ก่อตั้งธุรกิจนี้ในกรุงเทพฯ เมื่อปี 2020 และเปลี่ยนชื่อแบรนด์เป็น Locully ในปี 2025 Sunny เป็นคนวางกลยุทธ์ให้ลูกค้าทุกรายของ Locully ทั้งด้าน Search และโฆษณา',
    quote: '“No impact on revenue = no point in marketing.”',
    profile: 'อ่านประวัติของ Sunny',
    email: 'อีเมลถึง Sunny',
  },
};

/** Founder card used on /about. Canonical name form: "Rachaphon Sakchiraphong (Sunny)". */
const FounderCard = () => {
  const locale = useLocale();
  const c = COPY[locale];
  return (
  <div className="lbp-about-person">
    <Figure src="/sunny.jpeg" alt={c.alt} />

    <div className="lbp-about-body">
      <span className="lb-eyebrow">{c.eyebrow}</span>
      <h3 className="lbp-about-name">{FOUNDER_DISPLAY}</h3>
      <p className="lbp-about-role">{c.role}</p>

      <p className="lbp-about-text">
        {c.bio}
      </p>
      <blockquote className="lbp-about-quote">
        {c.quote}
      </blockquote>

      <div className="lbp-about-links">
        <Link to={lp(FOUNDER_PATH, locale)} className="lb-btn-o">{c.profile}</Link>
        <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="lb-btn-o">
          <Linkedin style={{ width: '16px', height: '16px' }} aria-hidden="true" />
          LinkedIn
        </a>
        <a href="mailto:admin@locully.org" className="lb-btn-o">
          <Mail style={{ width: '16px', height: '16px' }} aria-hidden="true" />
          {c.email}
        </a>
      </div>
    </div>
  </div>
  );
};

export default FounderCard;
