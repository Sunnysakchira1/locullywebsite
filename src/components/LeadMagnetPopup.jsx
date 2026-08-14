import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { LEAD_MAGNET_DELAY_MS } from '@/lib/popupTiming';

/**
 * Lead-magnet popup. Appears once per browser session, timed to land after
 * the WhatsApp widget (see lib/popupTiming.js),
 * captures an email to Formspree (same endpoint as the contact form),
 * then delivers the "AI Search Statistics 2026" PDF.
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
    }, LEAD_MAGNET_DELAY_MS);
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

  const C = {
    overlay: { position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(26,17,8,0.55)', backdropFilter: 'blur(3px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 },
    modal: { position: 'relative', width: '100%', maxWidth: 760, background: 'var(--bg, #fff)', borderRadius: 18, overflow: 'hidden', boxShadow: '0 24px 80px rgba(26,17,8,0.45)', display: 'grid', gridTemplateColumns: '1fr 1fr' },
    left: { background: 'var(--bg2, #F8F6F3)', color: 'var(--ink, #1A1108)', padding: '36px 30px', position: 'relative', overflow: 'hidden', borderRight: '1px solid var(--bdr, #E2DDD6)', borderTop: '3px solid var(--terra, #CC6432)' },
    glow: { position: 'absolute', top: -90, right: -90, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(204,100,50,0.10), transparent 70%)' },
    eyebrow: { fontFamily: 'var(--mono, monospace)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--terra, #CC6432)' },
    leftH: { fontFamily: 'var(--serif, Georgia, serif)', fontWeight: 700, fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em', margin: '14px 0 0', color: 'var(--ink, #1A1108)' },
    leftP: { fontSize: 13, color: 'var(--muted, #6B6157)', lineHeight: 1.55, marginTop: 12, fontWeight: 400 },
    whatsIn: { fontFamily: 'var(--mono, monospace)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--terra, #CC6432)', marginTop: 18, marginBottom: 10 },
    bullets: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 },
    bullet: { fontFamily: 'var(--sans, sans-serif)', fontSize: 11.5, color: 'var(--muted, #6B6157)', lineHeight: 1.45, display: 'flex', gap: 8, alignItems: 'flex-start' },
    dot: { color: 'var(--terra, #CC6432)', flexShrink: 0, fontWeight: 700 },
    bStrong: { color: 'var(--ink, #1A1108)', fontWeight: 600 },
    right: { padding: '40px 34px', display: 'flex', flexDirection: 'column', justifyContent: 'center' },
    rEyebrow: { fontFamily: 'var(--mono, monospace)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--terra, #CC6432)' },
    rH: { fontFamily: 'var(--serif, Georgia, serif)', fontWeight: 600, fontSize: 23, lineHeight: 1.2, color: 'var(--ink, #1A1108)', margin: '8px 0 6px' },
    rP: { fontSize: 13.5, color: 'var(--muted, #6B6157)', lineHeight: 1.6, marginBottom: 18 },
    input: { width: '100%', padding: '13px 15px', fontSize: 14, fontFamily: 'var(--sans, sans-serif)', color: 'var(--ink, #1A1108)', background: 'var(--bg2, #F8F6F3)', border: '1px solid var(--bdr, #E2DDD6)', borderRadius: 9, outline: 'none' },
    btn: { width: '100%', marginTop: 10, padding: '14px 18px', fontSize: 14, fontFamily: 'var(--mono, monospace)', letterSpacing: '0.02em', color: '#fff', background: 'var(--terra, #CC6432)', border: 'none', borderRadius: 9, cursor: 'pointer' },
    fine: { fontFamily: 'var(--mono, monospace)', fontSize: 10.5, color: 'var(--muted, #6B6157)', marginTop: 12, textAlign: 'center' },
    err: { color: 'var(--red, #C13030)', fontSize: 12.5, marginTop: 10 },
    close: { position: 'absolute', top: 12, right: 12, zIndex: 2, background: 'rgba(255,255,255,0.9)', border: '1px solid var(--bdr,#E2DDD6)', borderRadius: '50%', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--ink,#1A1108)' },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          style={C.overlay}
          onClick={close}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <motion.div
            style={C.modal}
            className="lm-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <button style={C.close} onClick={close} aria-label="Close">
              <X size={16} />
            </button>

            {/* Left — the offer */}
            <div style={C.left} className="lm-left">
              <div style={C.glow} />
              <div style={C.eyebrow}>Free Report · 8 pages</div>
              <h3 style={C.leftH}>AI Search Statistics 2026</h3>
              <p style={C.leftP}>The data behind the shift to AI search — how people use ChatGPT, AI Overviews and Perplexity, and how AI decides which brands to recommend.</p>
              <div style={C.whatsIn}>What's inside</div>
              <ul style={C.bullets}>
                <li style={C.bullet}><span style={C.dot}>→</span><span><strong style={C.bStrong}>60+ stats across 6 themes</strong> — adoption, AI Overviews, zero-click, referral traffic, GEO &amp; local/healthcare</span></li>
                <li style={C.bullet}><span style={C.dot}>→</span><span><strong style={C.bStrong}>A "why it matters" takeaway</strong> on every section — what each number means for your business</span></li>
                <li style={C.bullet}><span style={C.dot}>→</span><span><strong style={C.bStrong}>Every figure sourced &amp; dated</strong> — Pew, Gartner, Google, OpenAI, Ahrefs &amp; more</span></li>
                <li style={C.bullet}><span style={C.dot}>→</span><span><strong style={C.bStrong}>Built for marketers &amp; owners</strong> — skimmable, shareable, instant download</span></li>
              </ul>
            </div>

            {/* Right — the gate */}
            <div style={C.right}>
              {status === 'done' ? (
                <>
                  <div style={C.rEyebrow}>You're in</div>
                  <h3 style={C.rH}>Your download is starting.</h3>
                  <p style={C.rP}>
                    If it didn't, <a href={PDF_URL} download style={{ color: 'var(--terra,#CC6432)', fontWeight: 600 }}>click here to grab the PDF</a>.
                  </p>
                  <button style={C.btn} onClick={close}>Done</button>
                </>
              ) : (
                <>
                  <div style={C.rEyebrow}>Free PDF · Instant download</div>
                  <h3 style={C.rH}>Get the 2026 report</h3>
                  <p style={C.rP}>Enter your email and the PDF downloads instantly. No spam — just the data.</p>
                  <form onSubmit={submit}>
                    <input
                      style={C.input}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourcompany.com"
                      required
                      autoFocus
                    />
                    <button style={C.btn} type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Preparing…' : 'Download the report →'}
                    </button>
                  </form>
                  {status === 'error' && <p style={C.err}>Please enter a valid email and try again.</p>}
                  <p style={C.fine}>We respect your inbox. Unsubscribe anytime.</p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
