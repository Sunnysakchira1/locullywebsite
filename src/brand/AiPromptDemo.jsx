import React, { useCallback, useEffect, useRef, useState } from 'react';
import './prompt.css';

/* Animated mock of someone asking ChatGPT: the question types into a prompt box, sends, and the
   answer lands with the "you weren't named" verdict. Adapted from 21st.dev "ai-chat-input".
   The full question and answer are always in the DOM (untyped text is transparent, unrevealed
   rows are faded), so prerendered HTML, screen readers and reduced-motion users get all of it.
   demo: { engine?, question, intro, answers: [{ name, note }], verdict, verdictNote, caption } */

const TYPE_MS = 38;
const THINK_MS = 900;
const PAUSE_MS = 500;

const ArrowUp = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 12V2M7 2L2.5 6.5M7 2L11.5 6.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function AiPromptDemo({ demo, className }) {
  const engine = demo.engine || 'ChatGPT';
  const q = demo.question;
  // Server/prerender and first client render show the finished state; the effect rewinds it.
  const [typed, setTyped] = useState(q.length);
  const [phase, setPhase] = useState('done'); // idle | typing | thinking | answer | done
  const ref = useRef(null);
  const timers = useRef([]);
  const played = useRef(false);

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const later = (fn, ms) => { timers.current.push(setTimeout(fn, ms)); };

  const play = useCallback(() => {
    clear();
    setTyped(0);
    setPhase('typing');
    for (let i = 1; i <= q.length; i += 1) later(() => setTyped(i), PAUSE_MS + i * TYPE_MS);
    const sent = PAUSE_MS + q.length * TYPE_MS + PAUSE_MS;
    later(() => setPhase('thinking'), sent);
    later(() => setPhase('answer'), sent + THINK_MS);
    // Rows reveal on CSS delays; mark done once the verdict has landed.
    later(() => setPhase('done'), sent + THINK_MS + 1400);
  }, [q]);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!el || reduce || typeof IntersectionObserver === 'undefined') return undefined;
    setTyped(0);
    setPhase('idle');
    const io = new IntersectionObserver((entries) => {
      if (played.current || !entries.some((e) => e.isIntersecting)) return;
      played.current = true;
      io.disconnect();
      play();
    }, { threshold: 0.45 });
    io.observe(el);
    return () => { io.disconnect(); clear(); };
  }, [play]);

  const shown = phase === 'answer' || phase === 'done';

  return (
    <figure ref={ref} className={['lb-pd', `is-${phase}`, className].filter(Boolean).join(' ')}>
      <div className="lb-pd-box">
        <span className="lb-pd-label">
          Someone asks {engine}
          <span className="lb-pd-tag">Example</span>
        </span>
        {/* The full question sets the layout; while animating it is transparent and the typed
            prefix is overlaid on top, so the box never reflows as characters appear. */}
        <p className={`lb-pd-q${phase === 'done' ? '' : ' is-anim'}`}>
          <span className="lb-pd-full">{q}</span>
          {phase !== 'done' && (
            <span className="lb-pd-typed" aria-hidden="true">
              {q.slice(0, typed)}
              {phase === 'typing' && <span className="lb-pd-caret" />}
            </span>
          )}
        </p>
        <div className="lb-pd-bar" aria-hidden="true">
          <span className="lb-pd-engine"><span className="lb-pd-dot" />{engine}</span>
          <span className={`lb-pd-send${typed === q.length ? ' ready' : ''}`}><ArrowUp /></span>
        </div>
      </div>

      <div className={`lb-pd-a${shown ? ' shown' : ''}`}>
        <span className="lb-pd-label">
          {engine} answers
          {phase === 'thinking' && <span className="lb-pd-think" aria-hidden="true"><i /><i /><i /></span>}
        </span>
        <p className="lb-pd-intro lb-pd-in" style={{ '--d': 0 }}>{demo.intro}</p>
        <ol>
          {demo.answers.map((a, i) => (
            <li key={a.name} className="lb-pd-in" style={{ '--d': i + 1 }}>
              <span className="lb-pd-rank" aria-hidden="true">{i + 1}</span>
              <span><strong>{a.name}</strong><span className="lb-pd-note">{a.note}</span></span>
            </li>
          ))}
        </ol>
        <div className="lb-pd-verdict lb-pd-in" style={{ '--d': demo.answers.length + 1.5 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 7v6M12 16.5v.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <div>
            <strong>{demo.verdict}</strong>
            <p>{demo.verdictNote}</p>
          </div>
        </div>
      </div>

      <figcaption>{demo.caption}</figcaption>
    </figure>
  );
}
