import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { logFormSubmission } from '@/lib/analytics';
import { CTA_LABEL } from '@/brand/components';

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdzjegj';
export const DEFAULT_SUBJECT = 'New AI Visibility Audit Request — Locully';

const emptyForm = (extraFields) => ({
  name: '', email: '', website: '',
  ...Object.fromEntries(extraFields.map((f) => [f.name, ''])),
});

/**
 * The site's one conversion point. Same Formspree fetch + toast + analytics
 * flow as the original ContactForm. Renders only the white form card.
 * `extraFields` (optional): [{ name, label, placeholder, autoComplete }] adds
 * optional text inputs after Website; their values post with the same payload.
 */
export const LeadFormCard = ({ subject = DEFAULT_SUBJECT, idPrefix = 'lead', hint, extraFields = [], ctaLabel = CTA_LABEL }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState(() => emptyForm(extraFields));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) {
      toast({ title: 'Missing Information', description: 'Please fill in all required fields.', variant: 'destructive' });
      return;
    }
    // Accept "example.com", "www.example.com" or a full URL; add https:// when it's missing.
    const site = formData.website.trim();
    if (/\s/.test(site) || !/\.[a-z]{2,}/i.test(site)) {
      toast({ title: 'Check your website', description: 'Enter your website address, e.g. yourbusiness.com', variant: 'destructive' });
      return;
    }
    const website = /^https?:\/\//i.test(site) ? site : `https://${site}`;
    setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, website, _subject: subject }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || 'Submission failed');
      setIsSubmitted(true);
      toast({ title: 'Request Sent!', description: "We've received your audit request and will be in touch shortly." });
      logFormSubmission('AI Visibility Audit Request', true);
      setTimeout(() => { setFormData(emptyForm(extraFields)); setIsSubmitted(false); }, 4000);
    } catch {
      toast({ title: 'Something went wrong', description: 'Please try again or email us at admin@locully.org.', variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const disabled = isSubmitting || isSubmitted;

  return (
    <form className="lb-lead" onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST">
      <label htmlFor={`${idPrefix}-name`}>Your name</label>
      <input id={`${idPrefix}-name`} name="name" type="text" autoComplete="name" value={formData.name}
        onChange={handleChange} placeholder="Your name" disabled={disabled} required />
      <label htmlFor={`${idPrefix}-email`}>Email</label>
      <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" value={formData.email}
        onChange={handleChange} placeholder="you@yourbusiness.com" disabled={disabled} required />
      <label htmlFor={`${idPrefix}-website`}>Website</label>
      <input id={`${idPrefix}-website`} name="website" type="text" inputMode="url" autoComplete="url"
        autoCapitalize="none" autoCorrect="off" spellCheck={false} value={formData.website}
        onChange={handleChange} placeholder="yourbusiness.com" disabled={disabled} required />
      {extraFields.map((f) => (
        <React.Fragment key={f.name}>
          <label htmlFor={`${idPrefix}-${f.name}`}>{f.label} <span className="lb-opt">(optional)</span></label>
          <input id={`${idPrefix}-${f.name}`} name={f.name} type="text" autoComplete={f.autoComplete || 'off'}
            value={formData[f.name]} onChange={handleChange} placeholder={f.placeholder} disabled={disabled} />
        </React.Fragment>
      ))}
      {hint && <p className="lb-hint">{hint}</p>}
      <button type="submit" className={`lb-btn block${isSubmitted ? ' done' : ''}`} disabled={disabled}>
        {isSubmitting ? (<><span className="lb-spin" aria-hidden="true" /> Sending…</>)
          : isSubmitted ? 'Request sent'
          : ctaLabel}
      </button>
      <p className="lb-fine">Or call <a href="tel:+66626959444">+66 62 695 9444</a> · admin@locully.org</p>
    </form>
  );
};

/**
 * Lead-form band: ground-alt section, centred header, form card and an
 * optional aside (rendered beside the form on desktop, under it on mobile).
 */
const LeadForm = ({ id = 'book', eyebrow, title, lede, headingAs: H = 'h2', aside, subject, idPrefix, hint, extraFields, ctaLabel, children, footer, alt = true }) => (
  <section id={id} className={`lb-sec${alt ? ' alt' : ''}`}>
    <div className="lb-w">
      {(eyebrow || title || lede) && (
        <div className="lb-shead">
          {eyebrow && <span className="lb-eyebrow">{eyebrow}</span>}
          {title && <H className="lb-h2">{title}</H>}
          {lede && <p className="lb-lede">{lede}</p>}
        </div>
      )}
      {children}
      <div className={`lb-lead-wrap${aside ? ' with-aside' : ''}`}>
        <LeadFormCard subject={subject} idPrefix={idPrefix || id} hint={hint} extraFields={extraFields} ctaLabel={ctaLabel} />
        {aside && <div>{aside}</div>}
      </div>
      {footer}
    </div>
  </section>
);

export default LeadForm;
