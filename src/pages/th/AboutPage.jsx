import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FounderCard, { FOUNDER_DISPLAY, FOUNDER_PATH, FOUNDER_LINKEDIN } from '@/components/FounderCard';
import {
  Page, PageHero, Section, SectionHeader, Button, Cta, ServiceCard, Stage, FAQ,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Team } from '@/brand/Illustrations';
import { Hreflang } from '@/i18n';
import '@/brand/pages/about.css';

const SITE = 'https://www.locully.org';
const URL = `${SITE}/th/about`;
const ORG_ID = `${SITE}/#organization`;
const PERSON_ID = `${SITE}${FOUNDER_PATH}#person`;
const FOUNDER_PATH_TH = `/th${FOUNDER_PATH}`;

const TITLE = 'เกี่ยวกับ Locully | บริษัทรับทำ SEO และ GEO ในกรุงเทพฯ';
const DESCRIPTION = 'Locully คือเอเจนซี่ในกรุงเทพฯ ที่รับทำ SEO, GEO และโฆษณา Google กับ Meta ก่อตั้งปี 2020 นำทีมโดย Rachaphon Sakchiraphong (Sunny) ดูว่าเราเป็นใครและทำงานอย่างไร';

const facts = [
  ['ชื่อนิติบุคคล', 'Locully Co. Ltd.'],
  ['Locully คืออะไร', 'เอเจนซี่การตลาดดิจิทัลที่รับทำ SEO, GEO (AI Search) และ Performance Marketing'],
  ['ก่อตั้ง', 'ปี 2020 เปลี่ยนชื่อแบรนด์เป็น Locully ในปี 2025'],
  ['ผู้ก่อตั้งและ CEO', <Link key="f" to={FOUNDER_PATH_TH}>{FOUNDER_DISPLAY}</Link>],
  ['สำนักงานใหญ่', '92 Central Park Offices, Floor 35, Rama 4 Road, Silom, Bangrak, Bangkok 10500, Thailand'],
  ['ตลาดที่ให้บริการ', 'ประเทศไทยและสิงคโปร์'],
  ['ภาษา', 'อังกฤษและไทย'],
  ['ติดต่อ', <span key="c"><a href="mailto:admin@locully.org">admin@locully.org</a> · <a href="tel:+66626959444">+66 62 695 9444</a></span>],
];

const services = [
  {
    icon: 'search',
    title: 'SEO',
    to: '/th/seo/',
    link: 'บริการรับทำ SEO',
    body: 'Locully ทำให้ธุรกิจของคุณแสดงผลบน Google Search ได้ดีขึ้น งานครอบคลุม technical SEO การแก้ไข on-page การวิจัยคีย์เวิร์ด คอนเทนต์ internal link และ link building ทั้งภาษาอังกฤษและภาษาไทย',
  },
  {
    icon: 'bot',
    title: 'GEO (AI Search)',
    to: '/th/geo/',
    link: 'บริการรับทำ GEO',
    body: 'Locully ดูแลว่าผู้ช่วย AI ค้นเจอ เข้าใจ และพูดถึงธุรกิจของคุณอย่างไร ครอบคลุม ChatGPT, Claude, Google Gemini, Perplexity และ Google AI Overviews',
  },
  {
    icon: 'target',
    title: 'Performance Marketing',
    to: '/th/performance-marketing/',
    link: 'Performance Marketing',
    body: 'Locully วางแผนและดูแล Google Ads กับ Meta Ads ตั้งแต่กลยุทธ์ การตั้งค่า การติดตามผล ครีเอทีฟ ไปจนถึงงบประมาณ ค่าโฆษณาของคุณจ่ายตรงให้ Google และ Meta เราไม่บวกเพิ่ม',
  },
];

const steps = [
  { title: 'วัดผล', body: 'Locully บันทึกว่าตอนนี้คุณอยู่ตรงไหน ทั้งอันดับบน Google, Google Maps และสิ่งที่ผู้ช่วย AI พูดถึงคุณ โดยใช้ชุดคำถามของคนที่กำลังจะซื้อชุดเดิมทุกครั้ง' },
  { title: 'แก้ไข', body: 'Locully ปรับปรุงเว็บไซต์ คอนเทนต์ และข้อมูลธุรกิจที่ Search Engine กับผู้ช่วย AI อ่าน' },
  { title: 'สร้างการกล่าวถึง', body: 'Locully ทำให้ธุรกิจของคุณถูกกล่าวถึงบนเว็บไซต์ภายนอกที่น่าเชื่อถือ ซึ่งเป็นแหล่งที่ Google และผู้ช่วย AI อ่าน' },
  { title: 'รายงาน', body: 'ทุกเดือนคุณจะได้รายงานที่ผูกกับลูกค้าที่ติดต่อเข้ามา การจอง และต้นทุนต่อลูกค้าหนึ่งราย ใช้คำถามชุดเดิม วิธีเดิม จึงเทียบผลแต่ละเดือนกันได้ตรง ๆ' },
];

const industries = [
  { icon: 'shield', title: 'คลินิกสุขภาพ', body: 'คลินิกกายภาพบำบัด ทันตกรรม เวลเนส ผู้มีบุตรยาก และความงาม คนไข้ใช้ผู้ช่วย AI เปรียบเทียบคลินิก Locully ช่วยให้คลินิกปรากฏในคำตอบเหล่านั้นและบน Google' },
  { icon: 'pin', title: 'อสังหาริมทรัพย์', body: 'ผู้พัฒนาโครงการและเอเจนต์ที่ขายให้ผู้ซื้อชาวไทยและต่างชาติ ซึ่งหาข้อมูลออนไลน์ก่อนโทรหา' },
  { icon: 'users', title: 'ธุรกิจบริการอื่น ๆ', body: 'ถ้าลูกค้าของคุณค้นหาก่อนซื้อ งานแบบเดียวกันก็ใช้ได้ สอบถามเราได้เลย' },
];

const faqs = [
  { q: 'Locully คืออะไร', a: 'Locully คือเอเจนซี่การตลาดดิจิทัลในกรุงเทพฯ ประเทศไทย ช่วยให้ธุรกิจถูกค้นเจอบน Google Search, Google Maps และผู้ช่วย AI อย่าง ChatGPT และดูแลโฆษณา Google กับ Meta ให้ด้วย' },
  { q: 'Locully ตั้งอยู่ที่ไหน', a: 'สำนักงานใหญ่ของ Locully อยู่ที่ 92 Central Park Offices, Rama 4 Road, Silom, Bangkok ทีมงานทำงานจากกรุงเทพฯ และให้บริการลูกค้าในประเทศไทยและสิงคโปร์' },
  { q: 'Locully ก่อตั้งเมื่อไร', a: 'ธุรกิจก่อตั้งในปี 2020 และเปลี่ยนชื่อแบรนด์เป็น Locully ในปี 2025 ชื่อนิติบุคคลคือ Locully Co. Ltd.' },
  {
    q: 'ใครเป็นผู้ก่อตั้ง Locully',
    a: <p>Rachaphon Sakchiraphong หรือ Sunny เป็นผู้ก่อตั้ง Locully และบริหารในตำแหน่ง CEO <Link to={FOUNDER_PATH_TH}>อ่านประวัติของ Sunny</Link></p>,
    text: 'Rachaphon Sakchiraphong หรือ Sunny เป็นผู้ก่อตั้ง Locully และบริหารในตำแหน่ง CEO',
  },
  {
    q: 'GEO คืออะไร',
    a: <p>GEO (Generative Engine Optimization) คืองานที่ช่วยให้ผู้ช่วย AI รู้จักธุรกิจ เข้าใจธุรกิจ และกล่าวถึงธุรกิจนั้นเมื่อมีคนขอคำแนะนำ <Link to="/th/geo/">ดูวิธีทำ GEO ของ Locully</Link></p>,
    text: 'GEO (Generative Engine Optimization) คืองานที่ช่วยให้ผู้ช่วย AI รู้จักธุรกิจ เข้าใจธุรกิจ และกล่าวถึงธุรกิจนั้นเมื่อมีคนขอคำแนะนำ',
  },
  { q: 'Locully รับประกันผลลัพธ์ไหม', a: 'ไม่ ไม่มีเอเจนซี่ไหนรับประกันอันดับหรือการถูกอ้างอิงโดย AI ได้ สิ่งที่ Locully รับปากคือขอบเขตงานที่ชัดเจนและวิธีวัดผลที่รายงานทุกเดือน' },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'th',
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'Locully' },
      about: { '@id': ORG_ID },
      mainEntity: { '@id': ORG_ID },
    },
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Locully Co. Ltd.',
      alternateName: 'Locully',
      url: SITE,
      description: 'Locully คือเอเจนซี่การตลาดดิจิทัลในกรุงเทพฯ ประเทศไทย ให้บริการ SEO, GEO (การมองเห็นบน AI Search) และ Performance Marketing บน Google และ Meta',
      foundingDate: '2020',
      founder: { '@id': PERSON_ID },
      telephone: '+66626959444',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '92 Central Park Offices, Floor 35, Rama 4 Road',
        addressLocality: 'Silom, Bangrak',
        addressRegion: 'Bangkok',
        postalCode: '10500',
        addressCountry: 'TH',
      },
      areaServed: [{ '@type': 'Country', name: 'Thailand' }, { '@type': 'Country', name: 'Singapore' }],
      knowsLanguage: ['en', 'th'],
      knowsAbout: ['Search engine optimisation', 'Generative engine optimisation', 'Google Ads', 'Meta Ads'],
      sameAs: ['https://www.linkedin.com/company/74875853/'],
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Rachaphon Sakchiraphong',
      url: `${SITE}${FOUNDER_PATH}`,
      jobTitle: 'Founder and CEO',
      worksFor: { '@id': ORG_ID },
      sameAs: [FOUNDER_LINKEDIN],
    },
    {
      '@type': 'FAQPage',
      '@id': `${URL}#faq`,
      inLanguage: 'th',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.text || f.a },
      })),
    },
  ],
};

const AboutPageTh = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Hreflang path="/about" />

      <Page className="lbp-about">
        <PageHero
          eyebrow="เกี่ยวกับ Locully"
          visual={<Team />}
          title="เกี่ยวกับ Locully เอเจนซี่ในกรุงเทพฯ ที่รับทำ SEO, AI Search และ Performance Marketing"
          lede="Locully คือเอเจนซี่การตลาดดิจิทัลในกรุงเทพฯ ประเทศไทย เราช่วยให้ธุรกิจถูกค้นเจอในที่ที่ลูกค้าค้นหา เปรียบเทียบ และตัดสินใจ ทั้ง Google Search, Google Maps และผู้ช่วย AI อย่าง ChatGPT"
        >
          <Cta note="ก่อตั้งปี 2020 · เปลี่ยนชื่อแบรนด์เป็น Locully ปี 2025 · กรุงเทพฯ · ประเทศไทยและสิงคโปร์" />
        </PageHero>

        {/* Facts */}
        <Section alt narrow>
          <SectionHeader eyebrow="ข้อมูลบริษัท" title="ข้อมูลบริษัท Locully" lede="เราเป็นใคร สรุปในตารางเดียว" />
          <div className="lb-table-wrap">
            <table className="lb-table lbp-about-facts">
              <tbody>
                {facts.map(([k, v]) => (
                  <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Services */}
        <Section>
          <SectionHeader
            eyebrow="บริการ"
            title="Locully ทำอะไร: SEO, GEO และ Performance Marketing"
            lede="Locully มีสามบริการ ทุกบริการมีเป้าหมายเดียวกัน คือเพิ่มลูกค้าที่ติดต่อเข้ามาจากคนที่กำลังมองหาคุณอยู่แล้ว"
          />
          <div className="lb-g3">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title}>
                <p>{s.body}</p>
                <Button variant="text" to={s.to}>{s.link}</Button>
              </ServiceCard>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section alt>
          <SectionHeader
            eyebrow="วิธีทำงานของเรา"
            title="Locully ทำงานอย่างไร: pull marketing ใน 4 ขั้นตอน"
            lede="ลูกค้าของคุณกำลังค้นหาอยู่แล้ว Locully ช่วยให้เขาเจอคุณ"
          />
          <p className="lb-body-lg lbp-about-intro">
            แนวทางของ Locully คือ pull marketing แทนที่จะยิงข้อความใส่ผู้คนแล้วหวังว่าเขาจะสนใจ
            เราช่วยให้คนที่กำลังค้นหาสิ่งที่คุณขายอยู่แล้วเจอคุณ
          </p>
          <div className="lb-stages lbp-about-stages">
            {steps.map((s, i) => (
              <Stage key={s.title} n={i + 1} title={s.title}>{s.body}</Stage>
            ))}
          </div>
          <p className="lb-body-lg lbp-about-intro">
            ลูกค้าส่วนใหญ่ทำงานกับ Locully แบบค่าบริการรายเดือน ทีมเดียวดูแล SEO, GEO และโฆษณาไปพร้อมกัน
            ทุกช่องทางจึงส่งเสริมกัน
          </p>
        </Section>

        {/* Team */}
        <Section>
          <SectionHeader eyebrow="ทีมงาน" title="ใครบริหาร Locully" lede="ทีมในกรุงเทพฯ ที่ผู้ก่อตั้งนำเอง" />
          <p className="lb-body-lg lbp-about-intro">
            Locully นำโดยผู้ก่อตั้งและ CEO <Link to={FOUNDER_PATH_TH}>{FOUNDER_DISPLAY}</Link> Sunny
            เป็นคนวางกลยุทธ์ให้ลูกค้าทุกราย ทีมในกรุงเทพฯ ดูแล SEO คอนเทนต์ โฆษณา และการรายงานผล
            ทุกอย่างทำโดยทีมของเราเอง
          </p>
          <div className="lbp-about-people">
            <FounderCard />
            <div className="lbp-about-person lbp-about-person--noimg">
              <div className="lbp-about-body">
                <span className="lb-eyebrow">พาร์ตเนอร์</span>
                <h3 className="lbp-about-name">Rachanon Sakchiraphong</h3>
                <p className="lbp-about-role">Head of Partnerships ของ Locully</p>
                <p className="lbp-about-text">Rachanon ดูแลงานด้านพาร์ตเนอร์ของ Locully</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Industries */}
        <Section alt>
          <SectionHeader
            eyebrow="อุตสาหกรรม"
            title="อุตสาหกรรมที่ Locully ทำงานด้วย"
            lede="คลินิกและบริษัทอสังหาริมทรัพย์ รวมถึงธุรกิจบริการอื่น ๆ ที่ต้องพึ่งการถูกค้นเจอ"
          />
          <div className="lb-g3">
            {industries.map((it) => (
              <ServiceCard key={it.title} icon={it.icon} title={it.title} small>{it.body}</ServiceCard>
            ))}
          </div>
          <div className="lb-ctarow" style={{ marginTop: 32 }}>
            <Button variant="text" to="/th/industries/">ดูอุตสาหกรรมทั้งหมด</Button>
          </div>
        </Section>

        {/* Reporting */}
        <Section narrow>
          <SectionHeader eyebrow="การรายงานผล" title="Locully รายงานผลอย่างไร" />
          <p className="lb-body-lg">
            การมองเห็นมีความหมายก็ต่อเมื่อสร้างผลทางธุรกิจได้จริง รายงานของ Locully เชื่อมงานที่ทำเข้ากับอันดับการค้นหา
            การมองเห็นบน Google Maps การถูกกล่าวถึงและการอ้างอิงโดย AI ลูกค้าที่ติดต่อเข้ามา conversion
            และต้นทุนต่อลูกค้าหนึ่งราย
          </p>
          <p className="lb-body-lg">
            Locully รับปากเรื่องงานที่ทำและวิธีวัดผล เราไม่สัญญาเรื่องอันดับ
            เพราะไม่มีเอเจนซี่ไหนสัญญาได้ว่าโมเดล AI จะเอ่ยชื่อคุณ
          </p>
        </Section>

        {/* FAQ */}
        <Section narrow style={{ borderTop: '1px solid var(--lb-rule-soft)' }}>
          <SectionHeader eyebrow="FAQ" title="คำถามเกี่ยวกับ Locully" />
          <FAQ items={faqs} />
        </Section>

        <LeadForm
          eyebrow="AI Audit"
          title="รับ AI Audit จาก Locully"
          lede="ส่งเว็บไซต์ของคุณมา เราจะตรวจว่า Google และผู้ช่วย AI มองธุรกิจของคุณอย่างไร แล้วบอกสิ่งที่เราพบ"
          subject="New AI Visibility Audit Request — Locully [TH]"
          footer={(
            <p className="lb-cta-note" style={{ textAlign: 'center', margin: '24px auto 0' }}>
              อยากคุยกันก่อน? <Link to="/th/contact/">ติดต่อ Locully</Link>
            </p>
          )}
        />

        <Footer />
      </Page>
    </>
  );
};

export default AboutPageTh;
