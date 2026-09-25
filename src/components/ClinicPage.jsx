import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { clinics, getClinic } from '@/data/clinicData';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, StatRow, FAQ,
} from '@/brand/components';
import { Clinic } from '@/brand/Illustrations';
import '@/brand/pages/clinic.css';

const selfTestItems = [
  "You've never searched for your own clinic on ChatGPT or Perplexity",
  'When you do search, your clinic doesn\'t appear in the recommendations',
  'Your website has no structured FAQ or Q&A section',
  'You rely entirely on Google Maps or paid ads to get new patients',
  'Patients rarely or never mention finding you through AI search',
  'You don\'t know which AI-generated queries your competitors appear in',
  'Your website content hasn\'t been updated in over a year',
  'You\'ve never heard of "AI share of voice" for clinics',
];

const serviceProcess = [
  {
    num: '01',
    title: ['AI Visibility ', 'Audit'],
    body: 'We benchmark your clinic across ChatGPT, Perplexity, and Google AI Overviews — showing exactly which queries you appear in, which you\'re missing, and who\'s taking your share of voice.',
  },
  {
    num: '02',
    title: ['Content & Citation ', 'Architecture'],
    body: 'We build or restructure your web content so AI engines can read, parse, and cite it. Treatment pages, condition-specific Q&A, practitioner profiles — all engineered for AI citation.',
  },
  {
    num: '03',
    title: ['Schema & Entity ', 'Signals'],
    body: 'Structured data (JSON-LD), entity disambiguation, and authority signals tell AI engines exactly what your clinic does, who it serves, and why it should be recommended.',
  },
  {
    num: '04',
    title: ['Monthly AI ', 'Reporting'],
    body: 'Every month you receive a report showing your AI citation count, which queries you\'re winning, how you rank against competitors, and where the next opportunities are.',
  },
];

const compounding = [
  { label: 'Citations build authority', desc: 'Each time AI cites your clinic, it reinforces your relevance signal — making future citations more likely across more queries.' },
  { label: 'Content compounds over time', desc: 'Unlike ads that stop when you stop paying, optimized content continues attracting AI citations and patient enquiries indefinitely.' },
  { label: 'Early movers hold the position', desc: 'AI recommendation slots are finite. Clinics that establish visibility now make it structurally harder for competitors to displace them.' },
];

const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); };

const TickMark = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10.5L8 14.5L16 5.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ClinicPage({ slug }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const clinic = getClinic(slug);

  if (!clinic) return null;

  const toggleCheck = (i) => {
    setCheckedItems(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const checkedCount = checkedItems.length;

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `AI Optimization for ${clinic.namePlural}`,
    provider: { '@id': 'https://www.locully.org/#organization' },
    areaServed: { '@type': 'City', name: 'Bangkok' },
    description: clinic.metaDescription,
    serviceType: 'AI Search Optimization',
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: clinic.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org' },
      { '@type': 'ListItem', position: 2, name: 'AI Optimization for Clinics', item: 'https://www.locully.org/ai-optimization/' },
      { '@type': 'ListItem', position: 3, name: clinic.namePlural, item: `https://www.locully.org/ai-optimization/${clinic.slug}/` },
    ],
  };

  const otherClinics = clinics.filter((c) => c.slug !== slug);
  const lower = clinic.name.toLowerCase();

  return (
    <>
      <Helmet>
        <title>{clinic.headline} | Locully</title>
        <meta name="description" content={clinic.metaDescription} />
        <meta property="og:title" content={`${clinic.headline} | Locully`} />
        <meta property="og:description" content={clinic.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.locully.org/ai-optimization/${clinic.slug}/`} />
        <link rel="canonical" href={`https://www.locully.org/ai-optimization/${clinic.slug}/`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <Page className="lbp-clinic">
        <Breadcrumb items={[
          { label: 'Home', to: '/' },
          { label: 'For Clinics', to: '/ai-optimization/' },
          { label: clinic.namePlural },
        ]} />

        {/* Hero */}
        <PageHero
          as="section"
          eyebrow="AI Optimization · Bangkok"
          title={<>{clinic.name} Clinics<br />in AI Search</>}
          lede={clinic.intro}
          visual={<Clinic type={clinic.slug.replace('-clinics', '')} />}
        >
          <div className="lb-hero-cta lb-btn-row">
            <Button cta />
            <Button variant="outline" onClick={openCalendly}>Book a Call</Button>
          </div>
          <StatRow
            style={{ marginTop: 40, maxWidth: 520 }}
            stats={[
              { n: '10×', l: 'AI Citations' },
              { n: '+350%', l: 'AI Mentions' },
              { n: '3+', l: 'AI Platforms' },
            ]}
          />
        </PageHero>

        {/* Self-test checklist */}
        <Section alt>
          <SectionHeader
            eyebrow="Self-Test"
            title={`Is your ${lower} clinic invisible to AI?`}
            lede="Tick every statement that applies to your clinic right now."
          />
          <div className="lbp-clinic-test">
            {selfTestItems.map((item, i) => {
              const checked = checkedItems.includes(i);
              return (
                <button
                  key={i}
                  type="button"
                  aria-pressed={checked}
                  onClick={() => toggleCheck(i)}
                  className={`lbp-clinic-toggle${checked ? ' on' : ''}`}
                >
                  <span className="lbp-clinic-box" aria-hidden="true">{checked && <TickMark />}</span>
                  <span>{item}</span>
                </button>
              );
            })}
          </div>

          {checkedCount >= 3 && (
            <div className="lbp-clinic-result lb-callout" role="status">
              <p className="lb-em">
                {checkedCount} of 8 — your clinic is underrepresented in AI search.
              </p>
              <p>
                This is fixable. Locully specialises in exactly this situation — we've taken Bangkok clinics from zero AI citations to appearing consistently across ChatGPT, Perplexity, and Google AI Overviews.
              </p>
              <div style={{ marginTop: 18 }}>
                <Button cta />
              </div>
            </div>
          )}

          {checkedCount > 0 && checkedCount < 3 && (
            <p className="lbp-clinic-count" role="status">
              {checkedCount} ticked. Check more that apply — most clinic owners tick 4 or more.
            </p>
          )}
        </Section>

        {/* How patients search */}
        <Section>
          <SectionHeader
            eyebrow="Patient Behaviour"
            title={`How Bangkok patients find ${lower} clinics through AI`}
            lede={clinic.searchBehavior}
          />
          <div className="lbp-clinic-queries lb-panel">
            <span className="lb-label">Real queries patients are asking AI right now</span>
            <div className="lbp-clinic-qlist">
              {clinic.aiQueries.map((query, i) => (
                <span key={i} className="lb-prompt">{query}</span>
              ))}
            </div>
          </div>
          <p className="lb-body-lg lbp-clinic-note">
            When patients submit these queries, AI engines scan available web content and recommend a handful of clinics. Traditional SEO alone doesn't determine who gets recommended — <Link to="/blog/ai-search-optimization-clinics-thailand/">AI search optimization</Link> does.
          </p>
        </Section>

        {/* Problem section */}
        <Section alt>
          <SectionHeader
            eyebrow="The Problem"
            title="While you wait, AI is recommending your competitors."
            lede={clinic.painPoint}
          />
          <div className="lb-g3">
            {clinic.problemPoints.map((point, i) => (
              <div key={i} className="lb-card sm">
                <div className="lb-num sm" style={{ marginBottom: 18 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="lb-h3">{point.heading}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* What AIO looks like */}
        <Section>
          <SectionHeader
            eyebrow="Our Approach"
            title={`What AI optimization looks like for ${lower} clinics`}
            lede={`Every clinic category has different AI ranking signals. Here's our four-step process, tailored to ${lower} clinics specifically.`}
          />
          <div className="lb-stages">
            {serviceProcess.map((step) => (
              <div key={step.num} className="lb-stage text-only">
                <div><div className="lb-num">{step.num}</div></div>
                <div>
                  <div className="lb-h3-stage">{step.title[0]}{step.title[1]}</div>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Clinic-specific focus areas */}
          <div className="lbp-clinic-focus">
            <span className="lb-label lbp-clinic-focus-t">
              Specifically for {lower} clinics, we focus on:
            </span>
            <div className="lb-stack">
              {clinic.serviceItems.map((item, i) => (
                <div key={i} className="lb-si" style={{ gridTemplateColumns: '34px minmax(0, 1fr)', alignItems: 'center' }}>
                  <span className="lb-num sm">{i + 1}</span>
                  <span className="lb-si-t" style={{ margin: 0, fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Results — the one dark surface */}
        <Section alt>
          <SectionHeader eyebrow="Results" title="What clinics like yours actually see" />
          <div className="lb-proof">
            <div className="lb-proof-row" style={{ marginTop: 0, paddingTop: 0, borderTop: 0 }}>
              {[
                { n: '+350%', l: 'AI Mentions' },
                { n: '90%', l: 'Top 3 AI Rankings' },
                { n: '20–25', l: 'AI Enquiries/Mo' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="lb-proof-n">{s.n}</div>
                  <div className="lb-proof-l">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="lbp-clinic-proof-grid">
              <div className="lbp-clinic-proof-col">
                <div className="lb-proof-lab" style={{ marginBottom: 0 }}>Bangkok Clinic · Case Result</div>
                <div className="lbp-clinic-proof-big">10×</div>
                <p className="lbp-clinic-proof-p">
                  Increase in AI-driven recommendations — from zero citations to appearing consistently across ChatGPT, Perplexity, and Google AI Overviews.
                </p>
                <div className="lbp-clinic-tags">
                  {clinic.aiQueries.slice(0, 2).map((q, i) => (
                    <span key={i}>{q}</span>
                  ))}
                </div>
              </div>
              <div className="lbp-clinic-proof-col">
                <div className="lb-proof-lab">Why AI visibility compounds</div>
                <div className="lbp-clinic-rows">
                  {compounding.map((row, i) => (
                    <div key={i}>
                      <span className="lbp-clinic-row-t">{row.label}</span>
                      <span className="lbp-clinic-row-d">{row.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <Button variant="text" href="https://locully-client-success-m8a58k2.gamma.site/" target="_blank" rel="noopener noreferrer">
              View full case studies
            </Button>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="lbp-clinic-faq">
          <SectionHeader
            eyebrow="FAQ"
            title={`Questions about AI optimization for ${lower} clinics`}
            style={{ marginBottom: 40 }}
          />
          <FAQ items={clinic.faq} qAs="h3" />
        </Section>

        {/* Other clinic types */}
        <Section tight className="lbp-clinic-others">
          <div style={{ borderTop: '1px solid var(--lb-rule)', paddingTop: 40, textAlign: 'center' }}>
            <span className="lb-label" style={{ display: 'block', marginBottom: 18, color: 'var(--lb-muted)' }}>AI optimization for other clinic types</span>
            <div className="lb-chips" style={{ justifyContent: 'center' }}>
              {otherClinics.map((c) => (
                <Link key={c.slug} to={`/ai-optimization/${c.slug}/`} className="lb-chip">
                  {c.namePlural} <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA + Contact */}
        <Section alt className="lbp-clinic-gs">
          <SectionHeader
            eyebrow="Get Started"
            title={`Get your ${lower} clinic found on AI search`}
            lede="We'll show you exactly how your clinic currently appears (or doesn't) in AI search results — and what it would take to change that."
            style={{ marginBottom: 0 }}
          />
        </Section>
        <ContactForm />

        <Footer />
      </Page>
    </>
  );
}
