import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';
import AuditForm from '@/components/AuditForm';
import AiAnswerDemo from '@/components/AiAnswerDemo';
import ReportTabs from '@/components/ReportTabs';
import { HERO, FINDOUT, REPORT_TABS, PROOF, FAQS, CLOSING } from '@/data/auditData';

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
  serviceType: 'AI search visibility audit',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: [{ '@type': 'City', name: 'Bangkok' }, { '@type': 'Country', name: 'Thailand' }],
  url: 'https://www.locully.org/audit',
  description:
    'We ask ChatGPT, Perplexity and Google the forty questions your customers ask before they choose a business like yours, then send you the answers and the reasons your business was not mentioned. The audit is free and takes five working days.',
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

  return (
    <div className="audit-page">
      <Helmet>
        <title>Free AI Visibility Audit — Does ChatGPT Recommend You? | Locully</title>
        <meta
          name="description"
          content="We ask ChatGPT, Perplexity and Google the questions your customers ask before they choose a business like yours, then send you the answers and the reasons your business was not mentioned. Free, in five working days."
        />
        <link rel="canonical" href="https://www.locully.org/audit" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <main>
        {/* 1 — THE OFFER, AND THE PICTURE THAT EXPLAINS IT */}
        <section className="aud-hero">
          <p className="aud-eyebrow">{HERO.eyebrow}</p>
          <h1>{HERO.h1}</h1>
          <div className="aud-hero-grid">
            <div className="aud-hero-copy">
              {HERO.body.map((p) => <p key={p}>{p}</p>)}
              <AiAnswerDemo />
            </div>
            <div className="aud-hero-form">
              <AuditForm id="audit-form-top" />
            </div>
          </div>
        </section>

        {/* 2 — WHAT YOU FIND OUT */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{FINDOUT.h2}</h2>
            <p className="aud-lead">{FINDOUT.lead}</p>
            <ol className="aud-findout">
              {FINDOUT.items.map((it) => (
                <li key={it.n}>
                  <span className="aud-findout-n">{it.n}</span>
                  <div>
                    <h3>{it.title}</h3>
                    <p>{it.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </section>

        {/* 3 — WHAT THE REPORT LOOKS LIKE */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>{REPORT_TABS.h2}</h2>
            <p className="aud-lead">{REPORT_TABS.lead}</p>
            <ReportTabs />
          </motion.div>
        </section>

        {/* 4 — PROOF */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{PROOF.h2}</h2>
            <p className="aud-lead">{PROOF.lead}</p>
            <div
              className="aud-bars"
              role="img"
              aria-label="Bookings from AI by month: October 3, November 13, December 16, January 17, February 13, March 27, April 38."
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
          </motion.div>
        </section>

        {/* 5 — START, WITH THE QUESTIONS PEOPLE ASK FIRST */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <div className="aud-final-grid">
              <div>
                <h2>{CLOSING.h2}</h2>
                <p className="aud-lead">{CLOSING.body}</p>
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
              </div>
              <AuditForm id="audit-form-bottom" />
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditPage;
