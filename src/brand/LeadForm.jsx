import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { logFormSubmission } from '@/lib/analytics';
import { useT } from '@/i18n';

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdzjegj';
export const DEFAULT_SUBJECT = 'New AI Visibility Audit Request — Locully';
/** window CustomEvent: detail { fieldName: value } pre-fills matching fields in any LeadFormCard. */
export const PREFILL_EVENT = 'lb:lead-prefill';

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
export const LeadFormCard = ({ subject = DEFAULT_SUBJECT, idPrefix = 'lead', hint, extraFields = [], ctaLabel, children }) => {
  const { toast } = useToast();
  const t = useT();
  const f = t.form;
  const [formData, setFormData] = useState(() => emptyForm(extraFields));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    const onPrefill = (e) => {
      const known = Object.entries(e.detail || {}).filter(([k, v]) => k in formData && typeof v === 'string');
      if (!known.length) return;
      setFormData((prev) => ({ ...prev, ...Object.fromEntries(known) }));
      // Land the cursor on the first field once the smooth scroll has had time to settle.
      setTimeout(() => document.getElementById(`${idPrefix}-name`)?.focus({ preventScroll: true }), 700);
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, [formData, idPrefix]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) {
      toast({ title: f.missingT, description: f.missingD, variant: 'destructive' });
      return;
    }
    // Accept "example.com", "www.example.com" or a full URL; add https:// when it's missing.
    const site = formData.website.trim();
    if (/\s/.test(site) || !/\.[a-z]{2,}/i.test(site)) {
      toast({ title: f.siteT, description: f.siteD, variant: 'destructive' });
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
      toast({ title: f.okT, description: f.okD });
      logFormSubmission('AI Visibility Audit Request', true);
      setTimeout(() => { setFormData(emptyForm(extraFields)); setIsSubmitted(false); }, 4000);
    } catch {
      toast({ title: f.errT, description: f.errD, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const disabled = isSubmitting || isSubmitted;

  return (
    <form className="lb-lead" onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST">
      {children}
      <label htmlFor={`${idPrefix}-name`}>{f.name}</label>
      <input id={`${idPrefix}-name`} name="name" type="text" autoComplete="name" value={formData.name}
        onChange={handleChange} placeholder={f.namePh} disabled={disabled} required />
      <label htmlFor={`${idPrefix}-email`}>{f.email}</label>
      <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" value={formData.email}
        onChange={handleChange} placeholder="you@yourbusiness.com" disabled={disabled} required />
      <label htmlFor={`${idPrefix}-website`}>{f.website}</label>
      <input id={`${idPrefix}-website`} name="website" type="text" inputMode="url" autoComplete="url"
        autoCapitalize="none" autoCorrect="off" spellCheck={false} value={formData.website}
        onChange={handleChange} placeholder="yourbusiness.com" disabled={disabled} required />
      {extraFields.map((x) => (
        <React.Fragment key={x.name}>
          <label htmlFor={`${idPrefix}-${x.name}`}>{x.label} <span className="lb-opt">{f.optional}</span></label>
          <input id={`${idPrefix}-${x.name}`} name={x.name} type="text" autoComplete={x.autoComplete || 'off'}
            value={formData[x.name]} onChange={handleChange} placeholder={x.placeholder} disabled={disabled} />
        </React.Fragment>
      ))}
      {hint && <p className="lb-hint">{hint}</p>}
      <button type="submit" className={`lb-btn block${isSubmitted ? ' done' : ''}`} disabled={disabled}>
        {isSubmitting ? (<><span className="lb-spin" aria-hidden="true" /> {f.sending}</>)
          : isSubmitted ? f.sent
          : (ctaLabel || t.cta)}
      </button>
      <p className="lb-fine">{f.orCall} <a href="tel:+66626959444">+66 62 695 9444</a> · admin@locully.org</p>
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
