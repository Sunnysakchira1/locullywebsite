import React from 'react';
import { REPORT_TABS } from '@/data/auditData';

/**
 * The four tabs of the report, laid out two by two.
 *
 * Each box shows either a screenshot from a real audit (when `image` is set on
 * the item) or a small built-in table that stands in for one. The built-in
 * table carries invented clinic names so that nothing here can leak a client.
 */
export default function ReportTabs() {
  return (
    <div className="rtabs">
      {REPORT_TABS.items.map((item) => (
        <article className="rtab" key={item.n}>
          <header className="rtab-head">
            <span className="rtab-n">{item.n}</span>
            <span className="rtab-tab">{item.tab}</span>
          </header>

          <h3>{item.title}</h3>
          <p>{item.body}</p>

          <div className="rtab-shot">
            {item.image ? (
              <img src={item.image} alt={`Example of the ${item.tab} tab from a real audit`} loading="lazy" />
            ) : (
              <table>
                <thead>
                  <tr>{item.table.headers.map((h) => <th key={h}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {item.table.rows.map((row) => (
                    <tr key={row.join('|')}>
                      {row.map((cell, i) => (
                        <td key={i} className={/^\d+$/.test(cell) ? 'num' : undefined}>
                          {cell === 'High' || cell === 'Medium'
                            ? <span className={`rtab-pill ${cell === 'High' ? 'hi' : 'md'}`}>{cell}</span>
                            : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
