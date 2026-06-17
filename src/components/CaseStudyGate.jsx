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
            <div className="csg-eyebrow">Access granted</div>
            <h3>Opening the case study…</h3>
            <p>It's opening in a new tab. If it didn't, <a href={PROFILE_URL} target="_blank" rel="noopener noreferrer">click here</a>.</p>
          </>
        ) : (
          <>
            <div className="csg-eyebrow">Client Results · By Request</div>
            <h3>See the full case study</h3>
            <p>Our detailed client results are shared with prospective clients. Pop in your email and we'll open it for you.</p>
            <form onSubmit={submit}>
              <input
                type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourclinic.com" required autoFocus
              />
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Opening…' : 'Unlock the case study'}
              </button>
            </form>
            {status === 'error' && <p className="csg-err">Please enter a valid email and try again.</p>}
            <p className="csg-fine">No spam. We'll only use this to share results and follow up if relevant.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CaseStudyGate;
