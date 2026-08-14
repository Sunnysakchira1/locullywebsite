import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { SAMPLE } from '@/data/auditData';

/**
 * The sample citation gap report — the "show, don't tell" block.
 *
 * A real audit output with the client, competitors and domains anonymised.
 * Interactive only where interaction earns its place: the reader picks a
 * question and sees what the AI cited for it.
 */
export default function SampleGapReport() {
  const [active, setActive] = useState(0);
  const prompt = SAMPLE.prompts[active];

  return (
    <div className="samp">
      {/* headline verdict */}
      <div className="samp-verdict">
        <div className="samp-verdict-main">
          <span className="samp-big">{SAMPLE.verdict.cited}<span className="samp-of">/{SAMPLE.verdict.total}</span></span>
          <span className="samp-verdict-label">questions where the client was cited</span>
        </div>
        <dl className="samp-verdict-stats">
          <div><dt>{SAMPLE.verdict.sources}</dt><dd>sources cited instead</dd></div>
          <div><dt>{SAMPLE.verdict.competitorMentions}</dt><dd>named a direct competitor</dd></div>
        </dl>
      </div>

      {/* question picker */}
      <div className="samp-tabs" role="tablist" aria-label="Sample questions">
        {SAMPLE.prompts.map((p, i) => (
          <button
            key={p.q}
            role="tab"
            aria-selected={i === active}
            className={`samp-tab${i === active ? ' on' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="samp-tab-n">{String(i + 1).padStart(2, '0')}</span>
            <span className="samp-tab-q">{p.q}</span>
            <span className={`samp-flag${p.cited ? ' cited' : ''}`}>
              {p.cited ? <Check size={12} aria-hidden="true" /> : <X size={12} aria-hidden="true" />}
              {p.cited ? 'Cited' : 'Not cited'}
            </span>
          </button>
        ))}
      </div>

      {/* cited sources for the selected question */}
      <div className="samp-panel" role="tabpanel">
        <p className="samp-panel-head">
          What ChatGPT cited when asked <em>“{prompt.q}”</em>
        </p>
        <ol className="samp-sources">
          {prompt.sources.map((s, i) => (
            <li key={s.domain + i}>
              <span className="samp-rank">{i + 1}</span>
              <span className="samp-src">
                <span className="samp-dom">{s.domain}</span>
                <span className="samp-title">{s.title}</span>
              </span>
              {s.competitor && <span className="samp-comp">names a competitor</span>}
            </li>
          ))}
        </ol>
      </div>

      {/* the gap list — the actual payoff */}
      <div className="samp-gaps">
        <h3>{SAMPLE.gapsTitle}</h3>
        <p className="samp-gaps-lead">{SAMPLE.gapsLead}</p>
        <div className="tbl-wrap">
          <table className="samp-table">
            <thead>
              <tr>
                <th>Website</th>
                <th>Questions</th>
                <th>Times cited</th>
                <th>Names a competitor</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE.gaps.map((g) => (
                <tr key={g.domain}>
                  <td className="samp-dom">{g.domain}</td>
                  <td className="num">{g.prompts}</td>
                  <td className="num">{g.cites}</td>
                  <td>{g.competitor ? 'Yes' : 'No'}</td>
                  <td>
                    <span className={`samp-pill ${g.priority === 'High' ? 'hi' : 'md'}`}>{g.priority}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="samp-caption">{SAMPLE.caption}</p>
    </div>
  );
}
