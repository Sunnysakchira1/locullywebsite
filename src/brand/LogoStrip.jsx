import React from 'react';
import { useLocale } from '@/i18n';
import { CLIENT_LOGOS } from '@/data/clientLogos';
import './logostrip.css';

const COPY = {
  en: { label: "Some of the businesses we've worked with", aria: 'Client logos (scrolling; focus or hover to pause)' },
  th: { label: 'ส่วนหนึ่งของธุรกิจที่เราเคยทำงานด้วย', aria: 'โลโก้ลูกค้า (เลื่อนอัตโนมัติ โฟกัสหรือวางเมาส์เพื่อหยุด)' },
};

/** Scrolling client-logo strip, same look as the homepage one. Used under the SEO and GEO heroes. */
export default function LogoStrip() {
  const c = COPY[useLocale()] || COPY.en;
  return (
    <section className="lb-logos" aria-labelledby="lb-logos-label">
      <p id="lb-logos-label" className="lb-logos-label">{c.label}</p>
      {/* Focusable so keyboard users can pause the scroll (focus-within pauses it). */}
      <div className="lb-marq" tabIndex={0} role="region" aria-label={c.aria}>
        <ul className="lb-marq-track">
          {CLIENT_LOGOS.map((l) => (
            <li className="lb-logo" key={l.src}><img src={l.src} alt={l.alt} width="178" height="89" loading="lazy" /></li>
          ))}
          {CLIENT_LOGOS.map((l) => (
            <li className="lb-logo" key={`${l.src}-dup`} aria-hidden="true"><img src={l.src} alt="" width="178" height="89" loading="lazy" /></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
