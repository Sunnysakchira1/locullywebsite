import React from 'react';
import LeadForm from '@/brand/LeadForm';

// Brand v2 lead form. Same Formspree endpoint, fetch + toast flow and
// logFormSubmission call as before (see src/brand/LeadForm.jsx).
// Keeps id="contact" so existing #contact anchors still land here.
const ContactForm = () => (
  <div className="lb">
    <LeadForm
      id="contact"
      idPrefix="contact"
      eyebrow="AI audit"
      title="Get your AI audit"
      lede="See where you show up in ChatGPT, Google AI and Claude. Your report arrives within five working days."
      aside={(
        <div>
          <div className="lb-callout">
            <p>
              <span className="lb-em">Free, no obligation.</span>{' '}
              We'll send you a full report on where you show up in AI search and what it would take to get named.
            </p>
          </div>
          <p className="lb-note" style={{ marginTop: 14 }}>Secure submission · We respect your privacy</p>
        </div>
      )}
    />
  </div>
);

export default ContactForm;
