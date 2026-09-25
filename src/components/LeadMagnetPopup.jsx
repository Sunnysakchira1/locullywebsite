import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

/**
 * Lead-magnet popup. Appears 8s after load (once per browser session),
 * captures an email to Formspree (same endpoint as the contact form),
 * then delivers the "AI Search Statistics 2026" PDF.
 * Styles: src/brand/overlays.css (.lbm-*).
 */
const FORMSPREE = 'https://formspree.io/f/mbdzjegj';
const PDF_URL = '/locully-ai-search-statistics-2026.pdf';
const SESSION_KEY = 'lm_ai_stats_shown';

export default function LeadMagnetPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setVisible(true);
      sessionStorage.setItem(SESSION_KEY, '1');
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => setVisible(false);

  const downloadPdf = () => {
    const a = document.createElement('a');
    a.href = PDF_URL;
    a.download = 'Locully-AI-Search-Statistics-2026.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setStatus('error'); return; }
    setStatus('sending');
    try {
      await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          _subject: 'AI Search Statistics 2026 — PDF download',
          source: 'lead-magnet-popup',
          magnet: 'AI Search Statistics 2026',
        }),
      });
      setStatus('done');
      downloadPdf();
    } catch {
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="lbm-overlay"
          onClick={close}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <motion.div
            className="lbm-modal"
            role="dialog"
            aria-modal="true"
            aria-label="AI Search Statistics 2026 report"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button className="lbm-close" onClick={close} aria-label="Close">
              <X size={16} />
            </button>

            {/* Left — the offer */}
            <div className="lbm-left">
              <div className="lbm-eyebrow">Free Report · 8 pages</div>
              <h3 className="lbm-h">AI Search Statistics 2026</h3>
              <p className="lbm-p">The data behind the shift to AI search — how people use ChatGPT, AI Overviews and Perplexity, and how AI decides which brands to recommend.</p>
              <div className="lbm-inside">What's inside</div>
              <ul className="lbm-list">
                <li><span><strong>60+ stats across 6 themes</strong> — adoption, AI Overviews, zero-click, referral traffic, GEO &amp; local/healthcare</span></li>
                <li><span><strong>A "why it matters" takeaway</strong> on every section — what each number means for your business</span></li>
                <li><span><strong>Every figure sourced &amp; dated</strong> — Pew, Gartner, Google, OpenAI, Ahrefs &amp; more</span></li>
                <li><span><strong>Built for marketers &amp; owners</strong> — skimmable, shareable, instant download</span></li>
              </ul>
            </div>

            {/* Right — the gate */}
            <div className="lbm-right">
              {status === 'done' ? (
                <>
                  <div className="lbm-eyebrow">You're in</div>
                  <h3 className="lbm-rh">Your download is starting.</h3>
                  <p className="lbm-p">
                    If it didn't, <a href={PDF_URL} download>click here to grab the PDF</a>.
                  </p>
                  <button className="lb-btn" onClick={close}>Done</button>
                </>
              ) : (
                <>
                  <div className="lbm-eyebrow">Free PDF · Instant download</div>
                  <h3 className="lbm-rh">Get the 2026 report</h3>
                  <p className="lbm-p">Enter your email and the PDF downloads instantly. No spam — just the data.</p>
                  <form onSubmit={submit}>
                    <input
                      className="lbm-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourcompany.com"
                      aria-label="Email"
                      required
                      autoFocus
                    />
                    <button className="lb-btn" type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Preparing…' : 'Download the report →'}
                    </button>
                  </form>
                  {status === 'error' && <p className="lbm-err">Please enter a valid email and try again.</p>}
                  <p className="lbm-fine">We respect your inbox. Unsubscribe anytime.</p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
