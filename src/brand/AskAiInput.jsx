import React, { useId, useState } from 'react';
import { CTA_LABEL, goToLeadForm } from '@/brand/components';
import { PREFILL_EVENT } from '@/brand/LeadForm';
import { logEvent } from '@/lib/analytics';
import './prompt.css';

/* Prompt-style entry to the lead form: the visitor types the question their customers ask AI,
   and it lands pre-filled in the form's `field` input. Empty submit still goes to the form. */
export default function AskAiInput({ label, placeholder, field = 'question', note, className }) {
  const [value, setValue] = useState('');
  const id = useId();

  const submit = (e) => {
    e.preventDefault();
    const question = value.trim();
    if (question) {
      window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: { [field]: question } }));
      logEvent('Lead', 'ask_ai_prefill', 'audit hero');
    }
    goToLeadForm();
  };

  return (
    <form className={['lb-ask', className].filter(Boolean).join(' ')} onSubmit={submit}>
      <label className="lb-pd-label" htmlFor={id}>{label}</label>
      <div className="lb-ask-box">
        <input
          id={id}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          enterKeyHint="go"
          maxLength={200}
        />
        <button type="submit" className="lb-btn sm">{CTA_LABEL}</button>
      </div>
      {note && <p className="lb-cta-note">{note}</p>}
    </form>
  );
}
