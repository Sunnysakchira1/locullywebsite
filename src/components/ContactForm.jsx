import React from 'react';
import LeadForm from '@/brand/LeadForm';

// Brand v2 lead form. Same Formspree endpoint, fetch + toast flow and
// logFormSubmission call as before (see src/brand/LeadForm.jsx).
// Keeps id="contact" so existing #contact anchors still land here.
const metrics = [
  { label: 'Growth', value: '+280%', sub: 'more enquiries' },
  { label: 'Visibility', value: '70%', sub: 'Top 3 Ranking' },
  { label: 'Quality', value: '4.4×', sub: 'conversion rate' },
];

const ContactForm = () => (
  <div className="lb">
    <LeadForm
      id="contact"
      idPrefix="contact"
      eyebrow="Free Audit"
      title="Get Your Free AI Audit"
      lede="See where you rank in ChatGPT, Google AI, and Claude — in 48 hours."
      hint="Include https://www. — e.g. https://www.yourclinic.com"
      aside={(
        <div>
          <div className="lb-stack">
            {metrics.map(({ label, value, sub }) => (
              <div key={label} className="lb-si" style={{ gridTemplateColumns: 'minmax(0,1fr) auto', alignItems: 'center' }}>
                <div>
                  <div className="lb-label" style={{ color: 'var(--lb-muted)', marginBottom: 4 }}>{label}</div>
                  <div className="lb-si-d">{sub}</div>
                </div>
                <span className="lb-stat-n">{value}</span>
              </div>
            ))}
          </div>
          <div className="lb-callout" style={{ marginTop: 20 }}>
            <p>
              <span className="lb-em">Free, no obligation.</span>{' '}
              We'll send you a full report on your current AI visibility and what it would take to rank #1.
            </p>
          </div>
          <p className="lb-note" style={{ marginTop: 14 }}>Secure submission · We respect your privacy</p>
        </div>
      )}
    />
  </div>
);

export default ContactForm;
