import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Icon, ProofPanel, FAQ, ResultsNote, Tick,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import AskAiInput from '@/brand/AskAiInput';
import { Hreflang } from '@/i18n';
import {
  URL, META, HERO, DEMO, FINDOUT, REPORT, CELL, STEPS, EXTERNAL, COMPARE, FAQS, CLOSING, RELATED,
} from '@/data/th/auditData';
import '@/brand/pages/audit.css';

const ORG_ID = 'https://www.locully.org/#organization';

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'ตรวจ GEO (GEO Audit)',
  alternateName: ['AI visibility audit', 'AI SEO audit', 'AI Audit'],
  serviceType: 'ตรวจการมองเห็นใน AI Search',
  url: URL,
  inLanguage: 'th',
  description:
    'ตรวจ GEO ของ Locully คือการตรวจฟรีว่า ChatGPT, Perplexity และ Google AI แนะนำธุรกิจหรือไม่ Locully ถามเครื่องมือ AI ด้วยคำถามของคนที่กำลังจะซื้อ 30 ข้อขึ้นไป บันทึกทุกธุรกิจที่ถูกเอ่ยชื่อและทุกเว็บไซต์ที่ถูกอ้างอิง ตรวจว่า crawler ของ AI อ่านเว็บไซต์ได้หรือไม่ แล้วส่งรายงาน 4 แท็บพร้อมรายการสิ่งที่ต้องแก้เรียงตามลำดับความสำคัญ ภายใน 5 วันทำการ',
  provider: { '@id': ORG_ID },
  areaServed: [
    { '@type': 'City', name: 'กรุงเทพฯ' },
    { '@type': 'Country', name: 'ประเทศไทย' },
    { '@type': 'Country', name: 'สิงคโปร์' },
  ],
  isRelatedTo: { '@type': 'Service', name: 'Generative Engine Optimization (GEO)', url: 'https://www.locully.org/th/geo/' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'THB',
    url: `${URL}#book`,
    description: 'ตรวจ GEO ฟรี ส่งรายงานภายใน 5 วันทำการ',
    seller: { '@id': ORG_ID },
  },
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${URL}#faq`,
  inLanguage: 'th',
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
    { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.locully.org/th/' },
    { '@type': 'ListItem', position: 2, name: 'GEO', item: 'https://www.locully.org/th/geo/' },
    { '@type': 'ListItem', position: 3, name: 'ตรวจ GEO ฟรี', item: URL },
  ],
};

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

/* Thai version of src/pages/AiVisibilityAuditPage.jsx (/th/audit/). Keep the two in step. */

/* A mocked ChatGPT answer: explains the offer before the reader reads a line. Names are invented. */
const AiAnswerDemo = () => (
  <figure className="lba-demo" aria-label="ตัวอย่าง: ChatGPT แนะนำคลินิก 3 แห่ง แต่ไม่มีคลินิกของคุณ">
    <div className="lba-demo-q">
      <span className="lba-demo-label lba-demo-label-row">มีคนถาม ChatGPT<span className="lb-pd-tag">ตัวอย่าง</span></span>
      <p>{DEMO.question}</p>
    </div>
    <div className="lba-demo-a">
      <span className="lba-demo-label">ChatGPT ตอบว่า</span>
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
        <img src={item.image} alt={`ตัวอย่างแท็บ “${item.tab}” จากรายงานตรวจ GEO`} loading="lazy" />
      ) : (
        <div className="lb-table-wrap">
          <table className="lb-table lba-mini">
            <thead><tr>{item.table.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {item.table.rows.map((row) => (
                <tr key={row.join('|')}>
                  {row.map((cell, i) => (
                    <td key={i} className={/^\d+$/.test(cell) ? 'num' : undefined}>
                      {cell === CELL.high || cell === CELL.medium
                        ? <span className={`lba-pill ${cell === CELL.high ? 'hi' : 'md'}`}>{cell}</span>
                        : cell === CELL.no ? <span className="lba-no">{cell}</span> : cell}
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
    เราถามทุกคำถามกับ ChatGPT, Perplexity และ Google AI แล้วบันทึกว่าใครถูกเอ่ยชื่อและถูกลิงก์ถึง เรายังตรวจด้วยว่า
    crawler ของ AI เหล่านี้อ่านเว็บไซต์ของคุณได้หรือไม่ <Ext href={EXTERNAL.openaiBots}>OpenAI ระบุว่า</Ext> เว็บไซต์ที่บล็อก
    crawler ชื่อ OAI-SearchBot &ldquo;will not be shown in ChatGPT search answers&rdquo; (จะไม่ถูกแสดงในคำตอบของ ChatGPT search){' '}
    <Ext href={EXTERNAL.perplexityBots}>Perplexity แนะนำ</Ext> ให้อนุญาต PerplexityBot ด้วยเหตุผลเดียวกัน ทั้งสองอย่างควบคุมได้จาก
    {' '}<Ext href={EXTERNAL.robotsIntro}>ไฟล์ robots.txt</Ext> ของเว็บไซต์คุณ
  </p>
);

export default function AiVisibilityAuditPageTh() {
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
      <Hreflang path="/audit/" />

      <Page className="lb-audit">
        <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'GEO', to: '/th/geo/' }, { label: 'ตรวจ GEO ฟรี' }]} />

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
          <AskAiInput className="lba-ask" label={HERO.askLabel} placeholder={HERO.askPlaceholder} note={HERO.note} />
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
          <p className="lba-caption"><strong>แถวตัวอย่าง</strong> {REPORT.caption}</p>
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

        {/* GEO audit vs SEO audit */}
        <Section>
          <SectionHeader eyebrow={COMPARE.eyebrow} title={COMPARE.h2} lede={COMPARE.lede} />
          <div className="lb-table-wrap lba-compare">
            <table className="lb-table">
              <thead>
                <tr>{COMPARE.headers.map((h, i) => <th key={i} scope="col">{h || <span className="lba-sr">หัวข้อ</span>}</th>)}</tr>
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
              คุณต้องมีทั้งสองอย่าง <Ext href={EXTERNAL.googleAiGuide}>คำแนะนำของ Google เรื่องฟีเจอร์ AI</Ext> ระบุว่า
              แนวปฏิบัติ SEO ตามปกติยังใช้ได้กับ AI Overviews และ AI Mode การติดอันดับอย่างเดียวก็ได้คลิกน้อยลงกว่าเดิม{' '}
              <Ext href={EXTERNAL.pew}>Pew Research Center พบในเดือนกรกฎาคม 2025</Ext> ว่าผู้ใช้ Google ในสหรัฐฯ
              คลิกผลการค้นหาปกติ 8% ของการเข้าชมเมื่อมีสรุปจาก AI ปรากฏ เทียบกับ 15% เมื่อไม่มี
            </p>
            <p className="lb-body-lg">
              ถ้าการตรวจพบช่องว่างด้าน SEO นั่นคือ <Link to="/th/seo/">บริการรับทำ SEO</Link> ของเรา ส่วนงานด้าน AI ที่ทำต่อเนื่องคือ{' '}
              <Link to="/th/geo/">GEO หรือการทำ AI Search</Link>
            </p>
          </div>
        </Section>


        {/* FAQ */}
        <Section narrow>
          <SectionHeader eyebrow="FAQ" title="คำถามเกี่ยวกับการตรวจ GEO" style={{ marginBottom: 40 }} />
          <FAQ items={FAQS} qAs="h3" />
          <p className="lba-faq-foot">
            อ่าน <Link to="/th/privacy-policy">นโยบายความเป็นส่วนตัว</Link> ของเรา เพื่อดูว่าเราจัดการข้อมูลที่คุณส่งมาอย่างไร
          </p>
          <nav aria-label="อ่านเพิ่มเติม" className="lba-related">
            <p className="lb-label">อ่านเพิ่มเติม</p>
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

