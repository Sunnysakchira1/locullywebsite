import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, XCircle } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import {
  AUDIT_OFFER, HERO, SYMPTOMS, WHY_FREE, DELIVERABLES,
  PROCESS, NOT_INCLUDED, PROOF, FAQS,
} from '@/data/auditData';

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
    'A 40-question citation gap analysis across ChatGPT, Perplexity and Google AI Overviews, plus a full technical and structured-data audit. Free, delivered in 5 working days.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'THB',
    availability: 'https://schema.org/LimitedAvailability',
  },
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
        <title>Free AI Visibility Audit — Find Out Why AI Recommends Your Competitors | Locully</title>
        <meta
          name="description"
          content="We ask ChatGPT, Perplexity and Google the questions your customers ask, then show you every competitor they named and why you were not one of them. Free, delivered in 5 working days."
        />
        <link rel="canonical" href="https://www.locully.org/audit" />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <Nav />

      <main>
        {/* HERO */}
        <section className="aud-hero">
          <p className="aud-eyebrow">{HERO.eyebrow}</p>
          <h1>{HERO.h1}</h1>
          <p className="aud-lede">{HERO.sub}</p>
          <div className="aud-cta-row">
            <a href="/#contact" className="aud-btn">
              {HERO.cta} <ArrowRight size={16} aria-hidden="true" />
            </a>
            <span className="aud-price">
              <strong>{AUDIT_OFFER.price}</strong> · report in {AUDIT_OFFER.turnaround}
            </span>
          </div>
          <p className="aud-fine">{HERO.ctaSub}</p>
        </section>

        {/* SYMPTOMS */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>{SYMPTOMS.h2}</h2>
            <p className="aud-lead">{SYMPTOMS.lead}</p>
            <div className="aud-grid-2">
              {SYMPTOMS.items.map((s) => (
                <div className="aud-card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* WHY FREE */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{WHY_FREE.h2}</h2>
            <div className="aud-why-free">
              {WHY_FREE.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="aud-catch">
              <span className="aud-catch-label">{WHY_FREE.catch.label}</span>
              <p>{WHY_FREE.catch.text}</p>
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
                    <p className="aud-why">
                      <strong>Why it matters:</strong> {d.why}
                    </p>
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
                    <h3>
                      {s.title} <span className="aud-when">{s.when}</span>
                    </h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </section>

        {/* PROOF */}
        <section className="aud-sec">
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
          </motion.div>
        </section>

        {/* NOT INCLUDED */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{NOT_INCLUDED.h2}</h2>
            <p className="aud-lead">{NOT_INCLUDED.lead}</p>
            <ul className="aud-nots">
              {NOT_INCLUDED.items.map((n) => (
                <li key={n}>
                  <XCircle size={17} aria-hidden="true" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>Questions people ask before booking</h2>
            <div className="aud-faqs">
              {FAQS.map((f, i) => (
                <div className={`aud-faq${openFaq === i ? ' open' : ''}`} key={f.q}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                    <span>{f.q}</span>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  {openFaq === i && <p>{f.a}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="aud-final">
          <h2>Find out what AI says about you</h2>
          <p>
            Free. Report in {AUDIT_OFFER.turnaround}. {AUDIT_OFFER.capacity}, and {AUDIT_OFFER.exclusivity.toLowerCase()}
          </p>
          <div className="aud-cta-row">
            <a href="/#contact" className="aud-btn">
              {HERO.cta} <ArrowRight size={16} aria-hidden="true" />
            </a>
            <Link to="/#selfTest" className="aud-btn-ghost">
              Or take the one-minute self-check
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditPage;
