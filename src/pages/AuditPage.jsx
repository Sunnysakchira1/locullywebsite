import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, XCircle } from 'lucide-react';
import Footer from '@/components/Footer';
import AuditForm from '@/components/AuditForm';
import SampleGapReport from '@/components/SampleGapReport';
import {
  AUDIT_OFFER, HERO, TRUST_BAR, FINDINGS, SAMPLE, DELIVERABLES,
  PROOF, WHY_FREE, PROCESS, NOT_INCLUDED, FAQS,
} from '@/data/auditData';

const SENJA_WIDGET_ID = 'e78045b1-0c17-4032-ae66-d945b9ace7b2';

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.45 },
};

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Visibility Audit',
  serviceType: 'Generative Engine Optimization audit',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: [{ '@type': 'City', name: 'Bangkok' }, { '@type': 'Country', name: 'Thailand' }],
  url: 'https://www.locully.org/audit',
  description:
    'We ask ChatGPT, Perplexity and Google 40 questions your customers ask, show you which businesses got recommended instead of you, and check why AI skipped your site. Free, delivered in 5 working days.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'THB', availability: 'https://schema.org/LimitedAvailability' },
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org/' },
    { '@type': 'ListItem', position: 2, name: 'AI Visibility Audit', item: 'https://www.locully.org/audit' },
  ],
};

const AuditPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const maxProof = Math.max(...PROOF.series.map((p) => p.value));

  // Senja testimonial widget — loaded here rather than in index.html so the
  // script only costs the pages that actually show it.
  useEffect(() => {
    const id = 'senja-widget-script';
    if (document.getElementById(id)) return;
    const s = document.createElement('script');
    s.id = id;
    s.src = `https://widget.senja.io/widget/${SENJA_WIDGET_ID}/platform.js`;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="audit-page">
      <Helmet>
        <title>Free AI Visibility Audit — Does ChatGPT Recommend You? | Locully</title>
        <meta
          name="description"
          content="We ask ChatGPT, Perplexity and Google 40 questions your customers ask before they buy. Then we show you who got named, and why it wasn't you. Free, in five days."
        />
        <link rel="canonical" href="https://www.locully.org/audit" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <main>
        {/* HERO — form above the fold, no scrolling to convert */}
        <section className="aud-hero">
          <div className="aud-hero-grid">
            <div>
              <p className="aud-eyebrow">{HERO.eyebrow}</p>
              <h1>{HERO.h1}</h1>
              <p className="aud-lede">{HERO.sub}</p>
              <dl className="aud-trustbar">
                {TRUST_BAR.map((t) => (
                  <div key={t.stat}>
                    <dt>{t.stat}</dt>
                    <dd>{t.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <AuditForm id="audit-form-top" />
          </div>
        </section>

        {/* SAMPLE REPORT — show the deliverable before asking for anything else */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{SAMPLE.h2}</h2>
            <p className="aud-lead">{SAMPLE.lead}</p>
            <SampleGapReport />
          </motion.div>
        </section>

        {/* FINDINGS — evidence, not assumptions about the reader */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>{FINDINGS.h2}</h2>
            <p className="aud-lead">{FINDINGS.lead}</p>
            <div className="aud-grid-2">
              {FINDINGS.items.map((f) => (
                <div className="aud-finding" key={f.title}>
                  <span className="aud-finding-stat">{f.stat}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROOF — named client, real numbers, video + written testimonials */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{PROOF.h2}</h2>
            <p className="aud-lead">{PROOF.lead}</p>
            <div
              className="aud-bars"
              role="img"
              aria-label="AI-sourced consultations by month: October 3, November 13, December 16, January 17, February 13, March 27."
            >
              {PROOF.series.map((p) => (
                <div className="aud-bar-col" key={p.month}>
                  <span className="aud-bar-val">{p.value}</span>
                  <div className="aud-bar" style={{ height: `${(p.value / maxProof) * 100}%` }} />
                  <span className="aud-bar-lbl">{p.month}</span>
                </div>
              ))}
            </div>
            <p className="aud-callout">{PROOF.callout}</p>
            <p className="aud-honest">{PROOF.honest}</p>

            <div className="aud-senja">
              <div
                className="senja-embed"
                data-id={SENJA_WIDGET_ID}
                data-mode="shadow"
                data-lazyload="false"
                style={{ display: 'block', width: '100%' }}
              />
            </div>
          </motion.div>
        </section>

        {/* DELIVERABLES */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>{DELIVERABLES.h2}</h2>
            <p className="aud-lead">{DELIVERABLES.lead}</p>
            <div className="aud-deliverables">
              {DELIVERABLES.items.map((d) => (
                <div className="aud-deliverable" key={d.name}>
                  <CheckCircle2 size={18} className="aud-tick" aria-hidden="true" />
                  <div>
                    <h3>{d.name}</h3>
                    <p>{d.what}</p>
                    <p className="aud-why"><strong>Why it matters:</strong> {d.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROCESS */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{PROCESS.h2}</h2>
            <ol className="aud-process">
              {PROCESS.steps.map((s) => (
                <li key={s.n}>
                  <span className="aud-step-n">{s.n}</span>
                  <div>
                    <h3>{s.title} <span className="aud-when">{s.when}</span></h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </section>

        {/* WHY NO CHARGE */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>{WHY_FREE.h2}</h2>
            <div className="aud-why-free">
              {WHY_FREE.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            <div className="aud-catch">
              <span className="aud-catch-label">{WHY_FREE.catch.label}</span>
              <p>{WHY_FREE.catch.text}</p>
            </div>
          </motion.div>
        </section>

        {/* WHEN NOT TO BOOK */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{NOT_INCLUDED.h2}</h2>
            <p className="aud-lead">{NOT_INCLUDED.lead}</p>
            <ul className="aud-nots">
              {NOT_INCLUDED.items.map((n) => (
                <li key={n}><XCircle size={17} aria-hidden="true" /><span>{n}</span></li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>Questions we get asked</h2>
            <div className="aud-faqs">
              {FAQS.map((f, i) => (
                <div className={`aud-faq${openFaq === i ? ' open' : ''}`} key={f.q}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                    <span>{f.q}</span><ChevronDown size={18} aria-hidden="true" />
                  </button>
                  {openFaq === i && <p>{f.a}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CLOSING FORM */}
        <section className="aud-final">
          <div className="aud-final-grid">
            <div>
              <h2>Find out what AI says about you</h2>
              <p>
                {AUDIT_OFFER.questions} questions, three engines, {AUDIT_OFFER.turnaround}.
                {' '}{AUDIT_OFFER.capacity} a month. {AUDIT_OFFER.exclusivity}
              </p>
            </div>
            <AuditForm id="audit-form-bottom" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditPage;
