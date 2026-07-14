import React, { useState, useEffect, useRef, useCallback } from 'react';
import '@/components/IntroLoader.css';

/**
 * IntroLoader — full-screen typewriter splash shown ONCE per browser session
 * (any first entry, any route), then fades to reveal the site.
 *
 * Ported from locully-typewriter.html: same embedded fonts, animation, timings,
 * tagline and platform logos. The standalone "Replay" button is dropped; instead
 * the splash auto-reveals after ~5s and can be skipped by click or Esc.
 */

const SEEN_KEY = 'locully_intro_seen';
const WORD = 'Locully';

// Typewriter timing (ms).
const CHAR_START = 500;  // first letter appears
const CHAR_GAP = 130;    // gap between letters
const LAST_CHAR = CHAR_START + (WORD.length - 1) * CHAR_GAP; // last letter appears
const T_DOT = LAST_CHAR + 470;   // cursor → pulsing dot
const T_TAG = T_DOT + 350;       // tagline fades in
const T_RULE = T_TAG + 500;      // rule line draws
const T_PLATFORMS = T_RULE + 350;// platform logos fade in
const T_DISMISS = T_PLATFORMS + 1650; // begin reveal (holds on the full lockup)
const FADE_MS = 650;             // overlay fade-out duration

export default function IntroLoader() {
  const prefersReduced =
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Read the session flag synchronously so the homepage never flashes before the
  // overlay paints (and so we render nothing at all on later navigations).
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      return !sessionStorage.getItem(SEEN_KEY);
    } catch {
      return false;
    }
  });
  const [typed, setTyped] = useState(0); // letters revealed so far (cursor rides after them)
  const [phase, setPhase] = useState({ dot: false, tag: false, rule: false, platforms: false });
  const [out, setOut] = useState(false);
  const dismissedRef = useRef(false);

  const dismiss = useCallback(() => {
    if (dismissedRef.current) return;
    dismissedRef.current = true;
    setOut(true);
    setTimeout(() => {
      document.body.classList.remove('il-lock');
      setVisible(false);
    }, FADE_MS);
  }, []);

  useEffect(() => {
    if (!visible) return undefined;
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      /* private mode / storage disabled — still play once this load */
    }
    document.body.classList.add('il-lock');

    const timers = [];
    const after = (ms, fn) => timers.push(setTimeout(fn, ms));

    if (prefersReduced) {
      setTyped(WORD.length);
      setPhase({ dot: true, tag: true, rule: true, platforms: true });
      after(1400, dismiss);
    } else {
      for (let i = 0; i < WORD.length; i += 1) {
        after(CHAR_START + i * CHAR_GAP, () => setTyped(i + 1));
      }
      after(T_DOT, () => setPhase((p) => ({ ...p, dot: true })));
      after(T_TAG, () => setPhase((p) => ({ ...p, tag: true })));
      after(T_RULE, () => setPhase((p) => ({ ...p, rule: true })));
      after(T_PLATFORMS, () => setPhase((p) => ({ ...p, platforms: true })));
      after(T_DISMISS, dismiss);
    }

    const onKey = (e) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('keydown', onKey);
      document.body.classList.remove('il-lock');
    };
  }, [visible, prefersReduced, dismiss]);

  if (!visible) return null;

  return (
    <div
      className={`il-overlay${out ? ' il-out' : ''}`}
      onClick={dismiss}
      role="button"
      tabIndex={-1}
      aria-label="Skip intro"
    >
      <div className="il-hero">
        <div className="il-word" aria-label={WORD}>
          {[...WORD].slice(0, typed).map((c, i) => (
            <span key={i} className="il-ch">
              {c}
            </span>
          ))}
          {phase.dot ? (
            <span className="il-dot on" />
          ) : (
            <span className="il-cursor" />
          )}
        </div>

        <div className={`il-tag${phase.tag ? ' on' : ''}`}>
          <em>&ldquo;Be&rdquo;</em> the answer AI <em>gives.</em>
        </div>

        <div className={`il-rule${phase.rule ? ' on' : ''}`} />

        <div className={`il-platforms${phase.platforms ? ' on' : ''}`}>
          <svg className="il-mark" fill="currentColor" fillRule="evenodd" style={{ flex: 'none', lineHeight: 1 }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Anthropic</title>
            <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z" />
          </svg>
          <svg className="il-mark" fill="currentColor" fillRule="evenodd" style={{ flex: 'none', lineHeight: 1 }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>OpenAI</title>
            <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" />
          </svg>
          <svg className="il-mark" fill="currentColor" fillRule="evenodd" style={{ flex: 'none', lineHeight: 1 }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Google</title>
            <path d="M23 12.245c0-.905-.075-1.565-.236-2.25h-10.54v4.083h6.186c-.124 1.014-.797 2.542-2.294 3.569l-.021.136 3.332 2.53.23.022C21.779 18.417 23 15.593 23 12.245z" />
            <path d="M12.225 23c3.03 0 5.574-.978 7.433-2.665l-3.542-2.688c-.948.648-2.22 1.1-3.891 1.1a6.745 6.745 0 01-6.386-4.572l-.132.011-3.465 2.628-.045.124C4.043 20.531 7.835 23 12.225 23z" />
            <path d="M5.84 14.175A6.65 6.65 0 015.463 12c0-.758.138-1.491.361-2.175l-.006-.147-3.508-2.67-.115.054A10.831 10.831 0 001 12c0 1.772.436 3.447 1.197 4.938l3.642-2.763z" />
            <path d="M12.225 5.253c2.108 0 3.529.892 4.34 1.638l3.167-3.031C17.787 2.088 15.255 1 12.225 1 7.834 1 4.043 3.469 2.197 7.062l3.63 2.763a6.77 6.77 0 016.398-4.572z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
