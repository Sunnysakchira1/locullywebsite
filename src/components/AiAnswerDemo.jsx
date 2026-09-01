import React from 'react';
import { AlertCircle } from 'lucide-react';
import { DEMO } from '@/data/auditData';

/**
 * A mocked ChatGPT answer, shown in the hero.
 *
 * This block exists because it explains the product faster than any paragraph
 * can. The reader sees three competitors named, does not see themselves, and
 * understands the offer before they have read a single sentence of copy.
 *
 * The clinic names are invented. No real client or competitor appears here.
 */
export default function AiAnswerDemo() {
  return (
    <figure className="demo">
      <div className="demo-q">
        <span className="demo-label">Someone asks ChatGPT</span>
        <p>{DEMO.question}</p>
      </div>

      <div className="demo-a">
        <span className="demo-label">ChatGPT answers</span>
        <p className="demo-intro">{DEMO.intro}</p>
        <ol className="demo-list">
          {DEMO.answers.map((a, i) => (
            <li key={a.name}>
              <span className="demo-rank">{i + 1}</span>
              <span>
                <strong>{a.name}</strong>
                <span className="demo-note">{a.note}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <figcaption className="demo-verdict">
        <AlertCircle size={18} aria-hidden="true" />
        <div>
          <strong>{DEMO.verdict}</strong>
          <p>{DEMO.verdictNote}</p>
        </div>
      </figcaption>
    </figure>
  );
}
