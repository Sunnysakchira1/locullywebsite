import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLocale } from '@/i18n';

/**
 * Lead-magnet popup. Appears 8s after load (once per browser session),
 * captures an email to Formspree (same endpoint as the contact form),
 * then delivers the "AI Search Statistics 2026" PDF.
 * Styles: src/brand/overlays.css (.lbm-*).
 */
const FORMSPREE = 'https://formspree.io/f/mbdzjegj';
const PDF_URL = '/locully-ai-search-statistics-2026.pdf';
const SESSION_KEY = 'lm_ai_stats_shown';

const COPY = {
  en: {
    subject: 'AI Search Statistics 2026 — PDF download',
    dialog: 'AI Search Statistics 2026 report',
    close: 'Close',
    eyebrow: 'Free Report · 8 pages',
    p: 'The data behind the shift to AI search — how people use ChatGPT, AI Overviews and Perplexity, and how AI decides which brands to recommend.',
    inside: 'What\'s inside',
    list: [
      ['60+ stats across 6 themes', ' — adoption, AI Overviews, zero-click, referral traffic, GEO & local/healthcare'],
      ['A "why it matters" takeaway', ' on every section — what each number means for your business'],
      ['Every figure sourced & dated', ' — Pew, Gartner, Google, OpenAI, Ahrefs & more'],
      ['Built for marketers & owners', ' — skimmable, shareable, instant download'],
    ],
    doneEyebrow: 'You\'re in',
    doneH: 'Your download is starting.',
    doneBefore: 'If it didn\'t, ',
    doneLink: 'click here to grab the PDF',
    doneAfter: '.',
    done: 'Done',
    gateEyebrow: 'Free PDF · Instant download',
    gateH: 'Get the 2026 report',
    gateP: 'Enter your email and the PDF downloads instantly. No spam — just the data.',
    emailLabel: 'Email',
    sending: 'Preparing…',
    submit: 'Download the report →',
    error: 'Please enter a valid email and try again.',
    fine: 'We respect your inbox. Unsubscribe anytime.',
  },
  th: {
    subject: 'AI Search Statistics 2026 — PDF download [TH]',
    dialog: 'รายงาน AI Search Statistics 2026',
    close: 'ปิด',
    eyebrow: 'รายงานฟรี · 8 หน้า · รายงานภาษาอังกฤษ',
    p: 'ข้อมูลเบื้องหลังการเปลี่ยนมาใช้ AI Search ผู้คนใช้ ChatGPT, AI Overviews และ Perplexity อย่างไร และ AI เลือกแนะนำแบรนด์ไหนจากอะไร',
    inside: 'ในรายงานมีอะไรบ้าง',
    list: [
      ['สถิติกว่า 60 รายการใน 6 หัวข้อ', ' ได้แก่ การใช้งาน AI, AI Overviews, zero-click, referral traffic, GEO และธุรกิจท้องถิ่น/สุขภาพ'],
      ['สรุป “ทำไมเรื่องนี้สำคัญ”', ' ในทุกหัวข้อ บอกว่าตัวเลขแต่ละตัวมีความหมายกับธุรกิจคุณอย่างไร'],
      ['ทุกตัวเลขมีแหล่งที่มาและวันที่', ' เช่น Pew, Gartner, Google, OpenAI, Ahrefs และอื่น ๆ'],
      ['ทำมาเพื่อนักการตลาดและเจ้าของธุรกิจ', ' อ่านเร็ว แชร์ต่อง่าย ดาวน์โหลดได้ทันที'],
    ],
    doneEyebrow: 'เรียบร้อย',
    doneH: 'กำลังเริ่มดาวน์โหลด',
    doneBefore: 'ถ้ายังไม่เริ่ม ',
    doneLink: 'คลิกที่นี่เพื่อดาวน์โหลด PDF',
    doneAfter: '',
    done: 'ปิด',
    gateEyebrow: 'PDF ฟรี · ดาวน์โหลดได้ทันที',
    gateH: 'รับรายงานปี 2026',
    gateP: 'กรอกอีเมลแล้ว PDF จะดาวน์โหลดทันที รายงานภาษาอังกฤษ ไม่มีสแปม มีแต่ข้อมูล',
    emailLabel: 'อีเมล',
    sending: 'กำลังเตรียมไฟล์…',
    submit: 'ดาวน์โหลดรายงาน →',
    error: 'กรุณากรอกอีเมลให้ถูกต้องแล้วลองอีกครั้ง',
    fine: 'เราไม่ส่งอีเมลรบกวน ยกเลิกรับอีเมลได้ทุกเมื่อ',
  },
};

export default function LeadMagnetPopup() {
  const c = COPY[useLocale()];
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
          _subject: c.subject,
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
            aria-label={c.dialog}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button className="lbm-close" onClick={close} aria-label={c.close}>
              <X size={16} />
            </button>

            {/* Left — the offer */}
            <div className="lbm-left">
              <div className="lbm-eyebrow">{c.eyebrow}</div>
              <h3 className="lbm-h">AI Search Statistics 2026</h3>
              <p className="lbm-p">{c.p}</p>
              <div className="lbm-inside">{c.inside}</div>
              <ul className="lbm-list">
                {c.list.map(([strong, rest]) => (
                  <li key={strong}><span><strong>{strong}</strong>{rest}</span></li>
                ))}
              </ul>
            </div>

            {/* Right — the gate */}
            <div className="lbm-right">
              {status === 'done' ? (
                <>
                  <div className="lbm-eyebrow">{c.doneEyebrow}</div>
                  <h3 className="lbm-rh">{c.doneH}</h3>
                  <p className="lbm-p">
                    {c.doneBefore}<a href={PDF_URL} download>{c.doneLink}</a>{c.doneAfter}
                  </p>
                  <button className="lb-btn" onClick={close}>{c.done}</button>
                </>
              ) : (
                <>
                  <div className="lbm-eyebrow">{c.gateEyebrow}</div>
                  <h3 className="lbm-rh">{c.gateH}</h3>
                  <p className="lbm-p">{c.gateP}</p>
                  <form onSubmit={submit}>
                    <input
                      className="lbm-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourcompany.com"
                      aria-label={c.emailLabel}
                      required
                      autoFocus
                    />
                    <button className="lb-btn" type="submit" disabled={status === 'sending'}>
                      {status === 'sending' ? c.sending : c.submit}
                    </button>
                  </form>
                  {status === 'error' && <p className="lbm-err">{c.error}</p>}
                  <p className="lbm-fine">{c.fine}</p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
