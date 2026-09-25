import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import LeadForm from '@/brand/LeadForm';
import {
  industries, getIndustry, SOURCES, SERVICE_LINKS, RESULT, PROCESS,
  CLINIC_SELF_TEST, PROPERTY_SELF_TEST, CLINIC_RULES,
} from '@/data/industryData';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, FAQ, Icon,
  ProofPanel, ResultsNote,
} from '@/brand/components';
import { Clinic, AskAi } from '@/brand/Illustrations';
import '@/brand/pages/clinic.css';

const SITE = 'https://www.locully.org';
const ORG = { '@id': `${SITE}/#organization` };
const SERVICE_ICONS = { seo: 'search', geo: 'bot', ads: 'target' };

const TickMark = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M4 10.5L8 14.5L16 5.5" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SourceLink = ({ id }) => {
  const s = SOURCES[id];
  if (!s) return null;
  return (
    <a href={s.url} target="_blank" rel="noopener noreferrer" className="lbp-ind-src">
      {s.label}
    </a>
  );
};

/** Industry landing page: /industries/<slug>/ (5 clinic types + property). */
export default function IndustryPage({ slug }) {
  const [checked, setChecked] = useState([]);
  const ind = getIndustry(slug);
  if (!ind) return null;

  const isClinic = ind.group === 'clinic';
  const aud = isClinic ? 'patient' : 'buyer';
  const url = `${SITE}/industries/${ind.slug}/`;
  const selfTest = isClinic ? CLINIC_SELF_TEST : PROPERTY_SELF_TEST;
  const others = industries.filter((i) => i.slug !== slug);
  const toggle = (i) => setChecked((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  const n = checked.length;

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: ind.h1,
    serviceType: ['Search engine optimisation (SEO)', 'Generative engine optimisation (GEO)', 'Performance marketing (Google Ads and Meta Ads)'],
    description: ind.metaDescription,
    url,
    provider: ORG,
    areaServed: [{ '@type': 'City', name: 'Bangkok' }, { '@type': 'Country', name: 'Thailand' }],
    audience: { '@type': 'BusinessAudience', audienceType: ind.name },
    category: isClinic ? `Healthcare marketing: ${ind.name}` : 'Real estate marketing',
  };
  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: ind.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const schemaCrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${SITE}/industries/` },
      { '@type': 'ListItem', position: 3, name: ind.name, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{ind.title}</title>
        <meta name="description" content={ind.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={ind.title} />
        <meta property="og:description" content={ind.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaCrumbs)}</script>
      </Helmet>

      <Page className="lbp-clinic lbp-ind">
        <Breadcrumb items={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/industries/' },
          { label: ind.name },
        ]} />

        {/* Hero */}
        <PageHero
          as="section"
          eyebrow={`Industries · ${ind.name}`}
          title={ind.h1}
          lede={ind.lede}
          visual={isClinic ? <Clinic type={ind.emblem} /> : <AskAi query="new condo near BTS Bangkok?" />}
        >
          <div className="lb-hero-cta lb-btn-row">
            <Button cta />
            <Button variant="outline" href="#how">How we work</Button>
          </div>
          <div className="lb-chips lbp-ind-chips" aria-label="Services">
            {Object.entries(SERVICE_LINKS).map(([k, s]) => (
              <Link key={k} to={s.to} className="lb-chip">{s.title}</Link>
            ))}
          </div>
        </PageHero>

        {/* Self-test */}
        <Section alt>
          <SectionHeader
            eyebrow="Self-test"
            title={`Is your ${ind.short} easy to find on Google and in AI answers?`}
            lede="Tick every statement that is true for you right now."
          />
          <div className="lbp-clinic-test">
            {selfTest.map((item, i) => {
              const on = checked.includes(i);
              return (
                <button key={i} type="button" aria-pressed={on} onClick={() => toggle(i)} className={`lbp-clinic-toggle${on ? ' on' : ''}`}>
                  <span className="lbp-clinic-box" aria-hidden="true">{on && <TickMark />}</span>
                  <span>{item}</span>
                </button>
              );
            })}
          </div>
          {n >= 3 && (
            <div className="lbp-clinic-result lb-callout" role="status">
              <p className="lb-em">{n} of 8 ticked.</p>
              <p>
                {isClinic
                  ? "Patients are choosing the clinics they can find and trust online, and right now that isn't always you."
                  : 'Buyers are researching your projects without you in the conversation.'}
                {' '}A free AI visibility check shows where you stand and what to fix first.
              </p>
              <div style={{ marginTop: 18 }}><Button cta /></div>
            </div>
          )}
          {n > 0 && n < 3 && (
            <p className="lbp-clinic-count" role="status">{n} ticked. Keep going: tick every one that applies.</p>
          )}
        </Section>

        {/* How the audience searches */}
        <Section>
          <SectionHeader eyebrow={isClinic ? 'Patient behaviour' : 'Buyer behaviour'} title={ind.searchTitle} lede={ind.searchLede} />
          <div className="lbp-clinic-queries lb-panel">
            <span className="lb-label">Example questions {isClinic ? 'patients' : 'buyers'} ask</span>
            <div className="lbp-clinic-qlist">
              {ind.queries.map((q) => <span key={q} className="lb-prompt">“{q}”</span>)}
            </div>
          </div>
          <p className="lb-body-lg lbp-clinic-note">
            Further reading: <Link to={ind.reading.to}>{ind.reading.label}</Link>.
          </p>
        </Section>

        {/* Problems */}
        <Section alt>
          <SectionHeader eyebrow="The problem" title={ind.problemsTitle} />
          <div className="lb-g3">
            {ind.problems.map((p, i) => (
              <div key={p.h} className="lb-card sm">
                <div className="lb-num sm" style={{ marginBottom: 18 }}>{String(i + 1).padStart(2, '0')}</div>
                <h3 className="lb-h3">{p.h}</h3>
                <p>{p.p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section>
          <SectionHeader
            eyebrow="What we do"
            title={ind.servicesTitle}
            lede={`Locully runs three services. Here is what each one means for a ${ind.short}.`}
          />
          <div className="lb-g3">
            {Object.entries(SERVICE_LINKS).map(([k, s]) => (
              <div key={k} className="lb-card lbp-ind-svc">
                <Icon name={SERVICE_ICONS[k]} />
                <h3 className="lb-h3-card">{s.title}</h3>
                <p>{ind.services[k]}</p>
                <Link to={s.to} className="lb-tlink">More on {s.title === 'GEO (AI search)' ? 'GEO' : s.title} <span aria-hidden="true">→</span></Link>
              </div>
            ))}
          </div>
          {ind.experience && (
            <p className="lb-body-lg lbp-clinic-note" style={{ textAlign: 'center' }}>
              {ind.experience} Running a sale event or property fair? See <Link to="/lead-gen-partner">event and expo lead generation</Link>.
            </p>
          )}
        </Section>

        {/* Process */}
        <Section alt id="how">
          <SectionHeader eyebrow="How we work" title={ind.processTitle} />
          <div className="lb-stages">
            {PROCESS.map((s) => (
              <div key={s.n} className="lb-stage text-only">
                <div><div className="lb-num">{s.n}</div></div>
                <div>
                  <h3 className="lb-h3-stage">{s.title}</h3>
                  <p>{s.body.replace(/\{aud\}/g, aud)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lbp-clinic-focus">
            <span className="lb-label lbp-clinic-focus-t">For a {ind.short}, we focus on</span>
            <div className="lb-stack">
              {ind.focus.map((f, i) => (
                <div key={f} className="lb-si" style={{ gridTemplateColumns: '34px minmax(0, 1fr)', alignItems: 'center' }}>
                  <span className="lb-num sm">{i + 1}</span>
                  <span className="lb-si-t" style={{ margin: 0, fontWeight: 500 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="lb-body-lg lbp-clinic-note" style={{ textAlign: 'center' }}>
            See how the <Link to="/geo/ai-visibility-audit/">AI visibility audit</Link> measures where you stand.
          </p>
        </Section>

        {/* Rules */}
        <Section>
          <SectionHeader
            eyebrow={isClinic ? 'Rules we work within' : 'Our standards'}
            title={ind.rulesTitle}
            lede={isClinic ? 'Clinic marketing in Thailand runs under stricter rules than most industries. Locully writes within them.' : ind.rulesLede}
          />
          {!isClinic && (
            <p className="lbp-ind-srcline">Source: <SourceLink id="googleYmyl" /></p>
          )}
          <div className="lbp-ind-rules">
            {(isClinic ? [...CLINIC_RULES, ind.verticalRule] : ind.propertyRules).map((r) => (
              <div key={r.title} className="lbp-ind-rule">
                <h3 className="lb-h3">{r.title}</h3>
                <p>{r.body}</p>
                {(r.source || r.source2) && (
                  <p className="lbp-ind-srcline">
                    Source: <SourceLink id={r.source} />
                    {r.source2 && <>{' · '}<SourceLink id={r.source2} /></>}
                  </p>
                )}
              </div>
            ))}
          </div>
          {isClinic && (
            <p className="lb-note lbp-ind-disclaimer">
              This section describes the rules; it isn’t legal advice. Check your own campaigns with your legal adviser.
            </p>
          )}
        </Section>

        {/* Result (approved headline result only) */}
        {ind.showResult && (
          <Section alt>
            <SectionHeader eyebrow="Results" title="AI search results for a Bangkok clinic" />
            <ProofPanel label={RESULT.label} big={RESULT.big} sub={RESULT.sub} />
            <ResultsNote />
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Button variant="text" to="/case-studies/">Read the case studies</Button>
            </div>
          </Section>
        )}

        {/* FAQ */}
        <Section className="lbp-clinic-faq">
          <SectionHeader eyebrow="FAQ" title={ind.faqTitle} style={{ marginBottom: 40 }} />
          <FAQ items={ind.faq} qAs="h3" />
        </Section>

        {/* Other industries */}
        <Section tight className="lbp-clinic-others">
          <div style={{ borderTop: '1px solid var(--lb-rule)', paddingTop: 40, textAlign: 'center' }}>
            <span className="lb-label" style={{ display: 'block', marginBottom: 18, color: 'var(--lb-muted)' }}>Other industries we market</span>
            <div className="lb-chips" style={{ justifyContent: 'center' }}>
              {others.map((o) => (
                <Link key={o.slug} to={`/industries/${o.slug}/`} className="lb-chip">
                  {o.name} <span aria-hidden="true">→</span>
                </Link>
              ))}
              <Link to="/industries/" className="lb-chip">All industries <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </Section>

        <LeadForm
          eyebrow="Free AI visibility check"
          title={ind.formTitle}
          lede={ind.formLede}
          subject={`Free AI visibility check — ${ind.name} (industries page)`}
        />

        <Footer />
      </Page>
    </>
  );
}
