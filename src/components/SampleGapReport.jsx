import React, { useState } from 'react';
import { X, Check, ArrowDown } from 'lucide-react';
import { SAMPLE } from '@/data/auditData';

/**
 * The citation gap analysis, explained as a four-step walkthrough.
 *
 * Each step is named and explained in plain language BEFORE its data appears,
 * so a reader who has never seen an audit learns the format while looking at a
 * real one. Step 1 drives step 2 — picking a question changes the sources
 * shown — which is the point: it makes the connection visible instead of
 * asserted.
 *
 * All data anonymised: no client name, no client domain.
 */

function Step({ step, children }) {
  return (
    <section className="samp-step">
      <header className="samp-step-head">
        <span className="samp-step-n">{step.n}</span>
        <div>
          <h3>{step.name}</h3>
          <p>{step.explain}</p>
        </div>
      </header>
      <div className="samp-step-body">{children}</div>
    </section>
  );
}

export default function SampleGapReport() {
  const [active, setActive] = useState(0);
  const prompt = SAMPLE.prompts[active];
  const [s1, s2, s3, s4] = SAMPLE.steps;

  return (
    <div className="samp">
      {/* 01 — the question */}
      <Step step={s1}>
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
              <span className="samp-tab-q">“{p.q}”</span>
              <span className="samp-tab-pick">{i === active ? 'Following this one' : 'Follow this one'}</span>
            </button>
          ))}
        </div>
      </Step>

      <div className="samp-arrow" aria-hidden="true"><ArrowDown size={18} /></div>

      {/* 02 — what AI quoted */}
      <Step step={s2}>
        <div className="samp-panel">
          <p className="samp-panel-head">
            Asked <em>“{prompt.q}”</em>, ChatGPT read these {prompt.sources.length} pages:
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
          <p className="samp-panel-foot">
            Not one of them is the clinic&rsquo;s own website.
          </p>
        </div>
      </Step>

      <div className="samp-arrow" aria-hidden="true"><ArrowDown size={18} /></div>

      {/* 03 — were you in it */}
      <Step step={s3}>
        <div className="samp-verdict">
          <div className="samp-verdict-main">
            <span className="samp-big">{SAMPLE.verdict.cited}<span className="samp-of">/{SAMPLE.verdict.total}</span></span>
            <span className="samp-verdict-label">questions where this clinic was quoted</span>
          </div>
          <dl className="samp-verdict-stats">
            <div><dt>{SAMPLE.verdict.sources}</dt><dd>other pages quoted instead</dd></div>
            <div><dt>{SAMPLE.verdict.competitorMentions}</dt><dd>of those named a competitor</dd></div>
          </dl>
        </div>
        <p className="samp-flagline">
          <span className="samp-flag"><X size={12} aria-hidden="true" />Not quoted</span>
          appears beside every question in your real report.
          <span className="samp-flag cited"><Check size={12} aria-hidden="true" />Quoted</span>
          is what we are working towards.
        </p>
      </Step>

      <div className="samp-arrow" aria-hidden="true"><ArrowDown size={18} /></div>

      {/* 04 — the gap list */}
      <Step step={s4}>
        <h4 className="samp-gaps-title">{SAMPLE.gapsTitle}</h4>
        <p className="samp-gaps-lead">{SAMPLE.gapsLead}</p>
        <div className="tbl-wrap">
          <table className="samp-table">
            <thead>
              <tr>
                <th>Website</th>
                <th>Questions it answered</th>
                <th>Times quoted</th>
                <th>Names a competitor</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {SAMPLE.gaps.map((g) => (
                <tr key={g.domain}>
                  <td className="samp-dom">{g.domain}</td>
                  <td className="num">{g.prompts} of 40</td>
                  <td className="num">{g.cites}</td>
                  <td>{g.competitor ? 'Yes' : 'No'}</td>
                  <td><span className={`samp-pill ${g.priority === 'High' ? 'hi' : 'md'}`}>{g.priority}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="samp-gaps-foot">
          The top three were quoted on 24, 19 and 17 of the 40 questions. Get mentioned on those
          three sites and AI starts finding you on most of the questions your customers ask.
        </p>
      </Step>

      <p className="samp-caption">{SAMPLE.caption}</p>
    </div>
  );
}
