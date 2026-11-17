import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import LeadForm from '@/brand/LeadForm';
import {
  industries, getIndustry, SOURCES, SERVICE_LINKS, PROCESS,
  CLINIC_SELF_TEST, PROPERTY_SELF_TEST, CLINIC_RULES,
} from '@/data/th/industryData';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, FAQ, Icon,
  ProofPanel, ResultsNote,
} from '@/brand/components';
import { Clinic, AskAi } from '@/brand/Illustrations';
import { Hreflang } from '@/i18n';
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

/** Industry landing page, Thai: /th/industries/<slug>/ (5 clinic types + property). */
export default function IndustryPageTh({ slug }) {
  const [checked, setChecked] = useState([]);
  const ind = getIndustry(slug);
  if (!ind) return null;

  const isClinic = ind.group === 'clinic';
  const aud = isClinic ? 'คนไข้' : 'ผู้ซื้อ';
  const url = `${SITE}/th/industries/${ind.slug}/`;
  const selfTest = isClinic ? CLINIC_SELF_TEST : PROPERTY_SELF_TEST;
  const others = industries.filter((i) => i.slug !== slug);
  const toggle = (i) => setChecked((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));
  const n = checked.length;

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: ind.h1,
    serviceType: ['Search Engine Optimization (SEO)', 'Generative Engine Optimization (GEO)', 'Performance Marketing (Google Ads และ Meta Ads)'],
    description: ind.metaDescription,
    url,
    inLanguage: 'th',
    provider: ORG,
    areaServed: [{ '@type': 'City', name: 'Bangkok' }, { '@type': 'Country', name: 'Thailand' }],
    audience: { '@type': 'BusinessAudience', audienceType: ind.name },
    category: isClinic ? `การตลาดด้านสุขภาพ: ${ind.name}` : 'การตลาดอสังหาริมทรัพย์',
  };
  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: 'th',
    mainEntity: ind.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  const schemaCrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: `${SITE}/th/` },
      { '@type': 'ListItem', position: 2, name: 'อุตสาหกรรม', item: `${SITE}/th/industries/` },
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
      <Hreflang path={`/industries/${slug}/`} />

      <Page className="lbp-clinic lbp-ind">
        <Breadcrumb items={[
          { label: 'หน้าแรก', to: '/th/' },
          { label: 'อุตสาหกรรม', to: '/th/industries/' },
          { label: ind.name },
        ]} />

        {/* Hero */}
        <PageHero
          as="section"
          eyebrow={`อุตสาหกรรม · ${ind.name}`}
          title={ind.h1}
          lede={ind.lede}
          visual={isClinic ? <Clinic type={ind.emblem} /> : <AskAi query="คอนโดใหม่ใกล้ BTS กรุงเทพ?" />}
        >
          <div className="lb-hero-cta lb-btn-row">
            <Button cta />
            <Button variant="outline" href="#how">วิธีทำงานของเรา</Button>
          </div>
          <div className="lb-chips lbp-ind-chips" aria-label="บริการ">
            {Object.entries(SERVICE_LINKS).map(([k, s]) => (
              <Link key={k} to={s.to} className="lb-chip">{s.title}</Link>
            ))}
          </div>
        </PageHero>

        {/* Self-test */}
        <Section alt>
          <SectionHeader
            eyebrow="ทดสอบตัวเอง"
            title={`${ind.short}ของคุณหาเจอง่ายไหม บน Google และในคำตอบของ AI`}
            lede="ติ๊กทุกข้อที่ตรงกับคุณในตอนนี้"
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
              <p className="lb-em">ติ๊กแล้ว {n} จาก 8 ข้อ</p>
              <p>
                {isClinic
                  ? 'คนไข้กำลังเลือกคลินิกที่เขาหาเจอและไว้ใจได้บนออนไลน์ และตอนนี้คลินิกนั้นไม่ใช่คุณเสมอไป'
                  : 'ผู้ซื้อกำลังหาข้อมูลโครงการของคุณ โดยที่คุณไม่ได้อยู่ในบทสนทนานั้น'}
                {' '}การตรวจ GEO ฟรีแสดงให้เห็นว่าคุณอยู่ตรงไหน และควรแก้อะไรก่อน
              </p>
              <div style={{ marginTop: 18 }}><Button cta /></div>
            </div>
          )}
          {n > 0 && n < 3 && (
            <p className="lbp-clinic-count" role="status">ติ๊กแล้ว {n} ข้อ ทำต่อให้ครบ ติ๊กทุกข้อที่ตรงกับคุณ</p>
          )}
        </Section>

        {/* How the audience searches */}
        <Section>
          <SectionHeader eyebrow={isClinic ? 'พฤติกรรมของคนไข้' : 'พฤติกรรมของผู้ซื้อ'} title={ind.searchTitle} lede={ind.searchLede} />
          <div className="lbp-clinic-queries lb-panel">
            <span className="lb-label">ตัวอย่างคำถามที่{isClinic ? 'คนไข้' : 'ผู้ซื้อ'}ถาม</span>
            <div className="lbp-clinic-qlist">
              {ind.queries.map((q) => <span key={q} className="lb-prompt">“{q}”</span>)}
            </div>
          </div>
          <p className="lb-body-lg lbp-clinic-note">
            อ่านเพิ่มเติม (บทความภาษาอังกฤษ): <Link to={ind.reading.to}>{ind.reading.label}</Link>
          </p>
        </Section>

        {/* Problems */}
        <Section alt>
          <SectionHeader eyebrow="ปัญหา" title={ind.problemsTitle} />
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
            eyebrow="สิ่งที่เราทำ"
            title={ind.servicesTitle}
            lede={`Locully มีสามบริการ นี่คือความหมายของแต่ละบริการสำหรับ${ind.short}`}
          />
          <div className="lb-g3">
            {Object.entries(SERVICE_LINKS).map(([k, s]) => (
              <div key={k} className="lb-card lbp-ind-svc">
                <Icon name={SERVICE_ICONS[k]} />
                <h3 className="lb-h3-card">{s.title}</h3>
                <p>{ind.services[k]}</p>
                <Link to={s.to} className="lb-tlink">ดูเพิ่มเติมเรื่อง {k === 'geo' ? 'GEO' : s.title} <span aria-hidden="true">→</span></Link>
              </div>
            ))}
          </div>
          {ind.experience && (
            <p className="lb-body-lg lbp-clinic-note" style={{ textAlign: 'center' }}>
              {ind.experience} กำลังจะจัดงานขายหรืองานแสดงสินค้าอสังหาริมทรัพย์อยู่หรือเปล่า ดู <Link to="/th/lead-gen-partner">lead generation สำหรับอีเวนต์และงานเอ็กซ์โป</Link>
            </p>
          )}
        </Section>

        {/* Process */}
        <Section alt id="how">
          <SectionHeader eyebrow="วิธีทำงานของเรา" title={ind.processTitle} />
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
            <span className="lb-label lbp-clinic-focus-t">สำหรับ{ind.short} เราเน้นที่</span>
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
            ดูว่า <Link to="/th/audit/">การตรวจ GEO</Link> วัดอย่างไรว่าคุณอยู่ตรงไหน
          </p>
        </Section>

        {/* Rules */}
        <Section>
          <SectionHeader
            eyebrow={isClinic ? 'กฎที่เราทำงานภายใต้' : 'มาตรฐานของเรา'}
            title={ind.rulesTitle}
            lede={isClinic ? 'การตลาดคลินิกในไทยอยู่ภายใต้กฎที่เข้มงวดกว่าอุตสาหกรรมส่วนใหญ่ Locully เขียนภายใต้กฎเหล่านั้น' : ind.rulesLede}
          />
          {!isClinic && (
            <p className="lbp-ind-srcline">ที่มา: <SourceLink id="googleYmyl" /></p>
          )}
          <div className="lbp-ind-rules">
            {(isClinic ? [...CLINIC_RULES, ind.verticalRule] : ind.propertyRules).map((r) => (
              <div key={r.title} className="lbp-ind-rule">
                <h3 className="lb-h3">{r.title}</h3>
                <p>{r.body}</p>
                {(r.source || r.source2) && (
                  <p className="lbp-ind-srcline">
                    ที่มา: <SourceLink id={r.source} />
                    {r.source2 && <>{' · '}<SourceLink id={r.source2} /></>}
                  </p>
                )}
              </div>
            ))}
          </div>
          {isClinic && (
            <p className="lb-note lbp-ind-disclaimer">
              ส่วนนี้อธิบายกฎเท่านั้น ไม่ใช่คำแนะนำทางกฎหมาย โปรดตรวจสอบแคมเปญของคุณเองกับที่ปรึกษากฎหมายของคุณ
            </p>
          )}
        </Section>

        {/* FAQ */}
        <Section className="lbp-clinic-faq">
          <SectionHeader eyebrow="คำถามที่พบบ่อย" title={ind.faqTitle} style={{ marginBottom: 40 }} />
          <FAQ items={ind.faq} qAs="h3" />
        </Section>

        {/* Other industries */}
        <Section tight className="lbp-clinic-others">
          <div style={{ borderTop: '1px solid var(--lb-rule)', paddingTop: 40, textAlign: 'center' }}>
            <span className="lb-label" style={{ display: 'block', marginBottom: 18, color: 'var(--lb-muted)' }}>อุตสาหกรรมอื่นที่เราทำการตลาดให้</span>
            <div className="lb-chips" style={{ justifyContent: 'center' }}>
              {others.map((o) => (
                <Link key={o.slug} to={`/th/industries/${o.slug}/`} className="lb-chip">
                  {o.name} <span aria-hidden="true">→</span>
                </Link>
              ))}
              <Link to="/th/industries/" className="lb-chip">ทุกอุตสาหกรรม <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </Section>

        <LeadForm
          eyebrow="AI Audit"
          title={ind.formTitle}
          lede={ind.formLede}
          subject={`Free AI visibility check — ${ind.slug} (industries page) [TH]`}
        />

        <Footer />
      </Page>
    </>
  );
}
