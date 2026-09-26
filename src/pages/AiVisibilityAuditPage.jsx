import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Cta, Icon, ProofPanel, FAQ, ResultsNote, Tick,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import {
  URL, META, HERO, DEMO, FINDOUT, REPORT, STEPS, EXTERNAL, COMPARE, FAQS, CLOSING, RELATED,
} from '@/data/auditData';
import '@/brand/pages/audit.css';

const ORG_ID = 'https://www.locully.org/#organization';

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'GEO Audit',
  alternateName: ['AI visibility audit', 'AI SEO audit'],
  serviceType: 'AI search visibility audit',
  url: URL,
  description:
    "Locully's AI visibility audit is a free check of whether ChatGPT, Perplexity and Google AI recommend a business. Locully asks the AI tools 30 or more real buying questions, records every business named and every website cited, checks whether AI crawlers can read the site, and delivers a four-tab report with a ranked fix list in five working days.",
  provider: { '@id': ORG_ID },
  areaServed: [
    { '@type': 'City', name: 'Bangkok' },
    { '@type': 'Country', name: 'Thailand' },
    { '@type': 'Country', name: 'Singapore' },
  ],
  isRelatedTo: { '@type': 'Service', name: 'Generative engine optimisation (GEO)', url: 'https://www.locully.org/geo/' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'THB',
    url: `${URL}#book`,
    description: 'Free AI visibility audit, delivered in five working days.',
    seller: { '@id': ORG_ID },
  },
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${URL}#faq`,
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
    { '@type': 'ListItem', position: 2, name: 'GEO', item: 'https://www.locully.org/geo/' },
    { '@type': 'ListItem', position: 3, name: 'AI visibility audit', item: URL },
  ],
};

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

/* A mocked ChatGPT answer: explains the offer before the reader reads a line. Names are invented. */
const AiAnswerDemo = () => (
  <figure className="lba-demo" aria-label="Example: ChatGPT recommends three clinics and not yours">
    <div className="lba-demo-q">
      <span className="lba-demo-label">Someone asks ChatGPT</span>
      <p>{DEMO.question}</p>
    </div>
    <div className="lba-demo-a">
      <span className="lba-demo-label">ChatGPT answers</span>
      <p className="lba-demo-intro">{DEMO.intro}</p>
      <ol>
        {DEMO.answers.map((a, i) => (
          <li key={a.name}>
            <span className="lba-demo-rank" aria-hidden="true">{i + 1}</span>
            <span><strong>{a.name}</strong><span className="lba-demo-note">{a.note}</span></span>
          </li>
        ))}
      </ol>
    </div>
    <div className="lba-demo-verdict">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7v6M12 16.5v.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <div>
        <strong>{DEMO.verdict}</strong>
        <p>{DEMO.verdictNote}</p>
      </div>
    </div>
    <figcaption>{DEMO.caption}</figcaption>
  </figure>
);

/* One tab of the report: real screenshot if `image` is set, else the mini table. */
const ReportTab = ({ item }) => (
  <article className="lb-card sm lba-tab">
    <div className="lba-tab-head">
      <span className="lb-num sm">{item.n}</span>
      <span className="lb-tag neutral">{item.tab}</span>
    </div>
    <h3 className="lb-h3">{item.title}</h3>
    <p>{item.body}</p>
    <div className="lba-tab-shot">
      {item.image ? (
        <img src={item.image} alt={`Example of the ${item.tab} tab from an AI visibility audit`} loading="lazy" />
      ) : (
        <div className="lb-table-wrap">
          <table className="lb-table lba-mini">
            <thead><tr>{item.table.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {item.table.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, i) => (
                    <td key={i} className={/^\d+$/.test(cell) ? 'num' : undefined}>
                      {cell === 'High' || cell === 'Medium'
                        ? <span className={`lba-pill ${cell === 'High' ? 'hi' : 'md'}`}>{cell}</span>
                        : cell === 'No' ? <span className="lba-no">No</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </article>
);

const Step3Body = () => (
  <p>
    We put every question to ChatGPT, Perplexity and Google AI, and record who gets named and linked. We also
    check whether their crawlers can read your site. <Ext href={EXTERNAL.openaiBots}>OpenAI says</Ext> sites that
    block its OAI-SearchBot crawler &ldquo;will not be shown in ChatGPT search answers&rdquo;.{' '}
    <Ext href={EXTERNAL.perplexityBots}>Perplexity recommends</Ext> allowing PerplexityBot for the same reason. Both
    are controlled by your site&rsquo;s <Ext href={EXTERNAL.robotsIntro}>robots.txt file</Ext>.
  </p>
);

export default function AiVisibilityAuditPage() {
  return (
    <>
      <Helmet>
        <title>{META.title}</title>
        <meta name="description" content={META.description} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <Page className="lb-audit">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'GEO', to: '/geo/' }, { label: 'AI visibility audit' }]} />

        {/* Hero */}
        <PageHero
          as="section"
          meta={<p className="lb-hero-meta">{HERO.meta.map((m) => <span key={m}>{m}</span>)}</p>}
          eyebrow={HERO.eyebrow}
          title={HERO.h1}
          lede={HERO.lede}
          visual={<AiAnswerDemo />}
        >
          {HERO.body.map((p) => <p key={p} className="lb-body-lg lba-hero-p">{p}</p>)}
          <Cta note={HERO.note} />
        </PageHero>

        {/* What you find out */}
        <Section alt>
          <SectionHeader eyebrow={FINDOUT.eyebrow} title={FINDOUT.h2} lede={FINDOUT.lede} />
          <div className="lb-g3">
            {FINDOUT.items.map((it) => (
              <div key={it.n} className="lb-card">
                <Icon name={it.icon} />
                <h3 className="lb-h3-card">{it.title}</h3>
                <p>{it.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* The report, 2×2 */}
        <Section>
          <SectionHeader eyebrow={REPORT.eyebrow} title={REPORT.h2} lede={REPORT.lede} />
          <div className="lb-g2 lba-tabs">
            {REPORT.items.map((item) => <ReportTab key={item.n} item={item} />)}
          </div>
          <p className="lba-caption"><strong>Example rows.</strong> {REPORT.caption}</p>
        </Section>

        {/* How it works */}
        <Section alt>
          <SectionHeader eyebrow={STEPS.eyebrow} title={STEPS.h2} lede={STEPS.lede} />
          <ol className="lba-steps">
            {STEPS.items.map((s) => (
              <li key={s.n} className="lb-card sm">
                <div className="lba-step-head">
                  <span className="lb-num">{s.n}</span>
                  <span className="lb-tag">{s.when}</span>
                </div>
                <h3 className="lb-h3">{s.title}</h3>
                {s.body ? <p>{s.body}</p> : <Step3Body />}
              </li>
            ))}
          </ol>
          <div className="lb-ctarow lb-ctastrip">
            <p className="lb-body-lg lb-em" style={{ margin: '0 0 22px' }}>{STEPS.stripText}</p>
            <Button cta />
          </div>
        </Section>

        {/* AI visibility audit vs SEO audit */}
        <Section>
          <SectionHeader eyebrow={COMPARE.eyebrow} title={COMPARE.h2} lede={COMPARE.lede} />
          <div className="lb-table-wrap lba-compare">
            <table className="lb-table">
              <thead>
                <tr>{COMPARE.headers.map((h, i) => <th key={i} scope="col">{h || <span className="lba-sr">Question</span>}</th>)}</tr>
              </thead>
              <tbody>
                {COMPARE.rows.map((r) => (
                  <tr key={r[0]}>
                    <th scope="row">{r[0]}</th>
                    <td data-label={COMPARE.headers[1]}>{r[1]}</td>
                    <td className="lba-us" data-label={COMPARE.headers[2]}>{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lb-narrow-copy lba-after-table">
            <p className="lb-body-lg">
              You need both. <Ext href={EXTERNAL.googleAiGuide}>Google&rsquo;s guidance on its AI features</Ext> says
              normal SEO best practice still applies to AI Overviews and AI Mode. Ranking alone also brings fewer clicks
              than it did: <Ext href={EXTERNAL.pew}>Pew Research Center found in July 2025</Ext> that US Google users
              clicked a regular result on 8% of visits when an AI summary appeared, against 15% without one.
            </p>
            <p className="lb-body-lg">
              If the audit shows SEO gaps, that&rsquo;s our <Link to="/seo/">SEO service</Link>. The ongoing AI work
              is <Link to="/geo/">GEO, or AI search optimisation</Link>.
            </p>
          </div>
        </Section>


        {/* FAQ */}
        <Section narrow>
          <SectionHeader eyebrow="FAQ" title="AI visibility audit questions" style={{ marginBottom: 40 }} />
          <FAQ items={FAQS} qAs="h3" />
          <p className="lba-faq-foot">
            Read our <Link to="/privacy-policy">privacy policy</Link> for how we handle what you send us.
          </p>
          <nav aria-label="Related reading" className="lba-related">
            <p className="lb-label">Related reading</p>
            <ul>
              {RELATED.map((r) => <li key={r.to}><Link to={r.to}>{r.label}</Link></li>)}
            </ul>
          </nav>
        </Section>

        {/* Lead form */}
        <LeadForm
          eyebrow={CLOSING.eyebrow}
          title={CLOSING.h2}
          lede={CLOSING.lede}
          subject={CLOSING.subject}
          idPrefix="audit"
          extraFields={CLOSING.extraFields}
          aside={(
            <div className="lb-panel lba-next">
              <h3 className="lb-h3">{CLOSING.asideTitle}</h3>
              <ul className="lba-next-list">
                {CLOSING.aside.map((t) => <li key={t}><Tick /><span>{t}</span></li>)}
              </ul>
            </div>
          )}
        />

        <Footer />
      </Page>
    </>
  );
}

