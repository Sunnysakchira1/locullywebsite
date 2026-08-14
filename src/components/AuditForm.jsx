import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HERO } from '@/data/auditData';

/**
 * Audit request form — the page's only conversion point.
 *
 * Three fields, because the audit brief genuinely needs three things and
 * nothing else. Email is the fourth, unavoidable. Posts to the same Formspree
 * endpoint as the contact form, tagged so audit requests are distinguishable.
 */
const FORMSPREE = 'https://formspree.io/f/mbdzjegj';

export default function AuditForm({ id, compact = false }) {
  const [values, setValues] = useState({ website: '', city: '', services: '', email: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [error, setError] = useState('');

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!values.website.trim()) { setError('We need your website to audit it.'); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) { setError('That email address doesn\'t look right.'); return; }
    setError('');
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: `AI Visibility Audit request — ${values.website}`,
          source: 'audit-page',
        }),
      });
      if (!res.ok) throw new Error('bad response');
      setStatus('done');
    } catch {
      setStatus('error');
      setError('That didn\'t send. Email sunny@locully.org and we\'ll pick it up from there.');
    }
  };

  if (status === 'done') {
    return (
      <div className={`aud-form aud-form-done${compact ? ' compact' : ''}`} id={id}>
        <CheckCircle2 size={26} aria-hidden="true" />
        <h3>Got it.</h3>
        <p>
          We'll come back within one working day with the 40 questions we plan to ask, so you can
          change any of them before we run anything. The report follows five working days later.
        </p>
      </div>
    );
  }

  return (
    <form className={`aud-form${compact ? ' compact' : ''}`} id={id} onSubmit={submit} noValidate>
      {!compact && (
        <>
          <h3>{HERO.formTitle}</h3>
          <p className="aud-form-sub">{HERO.formSub}</p>
        </>
      )}

      <div className="aud-field">
        <label htmlFor={`${id}-website`}>Your website</label>
        <input
          id={`${id}-website`} type="text" inputMode="url" autoComplete="url"
          placeholder="yourclinic.com" value={values.website} onChange={set('website')}
        />
      </div>

      <div className="aud-field-row">
        <div className="aud-field">
          <label htmlFor={`${id}-city`}>City</label>
          <input
            id={`${id}-city`} type="text" autoComplete="address-level2"
            placeholder="Bangkok" value={values.city} onChange={set('city')}
          />
        </div>
        <div className="aud-field">
          <label htmlFor={`${id}-services`}>Services you want more of</label>
          <input
            id={`${id}-services`} type="text"
            placeholder="dental implants, veneers" value={values.services} onChange={set('services')}
          />
        </div>
      </div>

      <div className="aud-field">
        <label htmlFor={`${id}-email`}>Where we send the report</label>
        <input
          id={`${id}-email`} type="email" autoComplete="email"
          placeholder="you@yourbusiness.com" value={values.email} onChange={set('email')}
        />
      </div>

      {error && <p className="aud-form-err">{error}</p>}

      <button type="submit" className="aud-btn aud-btn-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : HERO.cta}
        {status !== 'sending' && <ArrowRight size={16} aria-hidden="true" />}
      </button>

      <p className="aud-form-fine">{HERO.microtrust}</p>
    </form>
  );
}
