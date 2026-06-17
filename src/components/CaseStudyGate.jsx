import { useState, useEffect } from 'react';

/**
 * Email gate for the case-study / company-profile links.
 * Intercepts clicks on .case-link, captures an email to Formspree (same as
 * the contact form), then opens the profile. The real URL is only in JS,
 * not in the page source.
 */
const PROFILE_URL = 'https://sunnysakchira1.github.io/locullycompanyprofile/';
const FORMSPREE = 'https://formspree.io/f/mbdzjegj';

const CaseStudyGate = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest('.case-link');
      if (!link) return;
      e.preventDefault();
      setEmail('');
      setStatus('idle');
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setStatus('error'); return; }
    setStatus('sending');
    try {
      await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Case study / company profile access request', source: 'case-study-gate' }),
      });
      setStatus('done');
      window.open(PROFILE_URL, '_blank', 'noopener');
    } catch {
      setStatus('error');
    }
  };

  if (!open) return null;

  return (
    <div className="csg-overlay" onClick={() => setOpen(false)}>
      <div className="csg-modal" onClick={(e) => e.stopPropagation()}>
        <button className="csg-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
        {status === 'done' ? (
          <>
            <div className="csg-eyebrow">You're in</div>
            <h3>Here you go.</h3>
            <p>The case study is opening in a new tab. If it didn't, <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">click here</a>.</p>
          </>
        ) : (
          <>
            <div className="csg-eyebrow">Real Client Results</div>
            <h3>Want to see the numbers?</h3>
            <p>These are real, confidential client results. Drop your email and we'll take you straight in.</p>
            <form onSubmit={submit}>
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourclinic.com" required autoFocus
              />
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Opening…' : 'Show me the results'}
              </button>
            </form>
            {status === 'error' && <p className="csg-err">Please enter a valid email and try again.</p>}
            <p className="csg-fine">No spam — just the results.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CaseStudyGate;
