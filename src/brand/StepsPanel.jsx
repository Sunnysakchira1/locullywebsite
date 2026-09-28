import React, { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

/* Numbered steps (left) + sticky evidence panel (right). Adapted from 21st.dev "features-with-panel".
   Every step's copy and media stays in the DOM (inactive ones are collapsed / display:none), so the
   prerendered HTML carries all four steps for search and AI crawlers. Below 900px it becomes an
   accordion with the media under the open step.
   steps: [{ title, lead, bullets: [], media: node, preload?: [src] }] */
export default function StepsPanel({ steps, className }) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const ref = useRef(null);
  const anchor = useRef(null); // { i, top } of the tapped step, to keep it in place on mobile

  // Mobile accordion: the open step above collapses instantly (CSS), which would yank the tapped
  // step upward. Scroll by the shift so the tapped step stays exactly where the finger was.
  useLayoutEffect(() => {
    const a = anchor.current;
    anchor.current = null;
    if (!a || !ref.current) return;
    const el = ref.current.querySelectorAll('.lb-sp-item')[a.i];
    const shift = el ? el.getBoundingClientRect().top - a.top : 0;
    if (shift) window.scrollBy(0, shift);
  }, [active]);

  const open = (i, e) => {
    if (i === active) return;
    if (window.matchMedia('(max-width: 900px)').matches) {
      anchor.current = { i, top: e.currentTarget.closest('.lb-sp-item').getBoundingClientRect().top };
    }
    setActive(i);
  };

  // Inactive panels are display:none, so their lazy images would only start loading on click.
  // Warm them once the section is near the viewport.
  useEffect(() => {
    const el = ref.current;
    const srcs = steps.flatMap((s) => s.preload || []);
    if (!el || !srcs.length || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      srcs.forEach((src) => { const img = new Image(); img.src = src; });
      io.disconnect();
    }, { rootMargin: '400px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [steps]);

  return (
    <div ref={ref} className={['lb-sp', className].filter(Boolean).join(' ')}>
      <div className="lb-sp-list">
        {steps.map((step, i) => {
          const on = i === active;
          const btnId = `${uid}-b${i}`;
          const bodyId = `${uid}-p${i}`;
          return (
            <div key={step.title} className={`lb-sp-item${on ? ' on' : ''}`} style={{ order: i * 2 }}>
              <h3 className="lb-sp-h">
                <button
                  type="button"
                  id={btnId}
                  className="lb-sp-btn"
                  aria-expanded={on}
                  aria-controls={bodyId}
                  onClick={(e) => open(i, e)}
                >
                  <span className="lb-sp-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <span className="lb-sp-title">{step.title}</span>
                  <span className="lb-sp-caret" aria-hidden="true" />
                </button>
              </h3>
              <p className="lb-sp-lead">{step.lead}</p>
              <div id={bodyId} role="region" aria-labelledby={btnId} className="lb-sp-body">
                <div className="lb-sp-body-in">
                  <ul className="lbh-bl">
                    {step.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Desktop: sticky right column. Mobile: display:contents + order slots each panel under its step. */}
      <div className="lb-sp-panel">
        {steps.map((step, i) => (
          <div key={step.title} className={`lb-sp-media${i === active ? ' on' : ''}`} style={{ order: i * 2 + 1 }}>
            {step.media}
          </div>
        ))}
      </div>
    </div>
  );
}
