import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Cta, Icon, Tick, FAQ, List, Stage,
} from '@/brand/components';
import LeadForm, { LeadFormCard } from '@/brand/LeadForm';
import LogoStrip from '@/brand/LogoStrip';
import { Hreflang } from '@/i18n';

/*
 * /th/seo/ — Thai version of Locully's SEO service page (English: src/pages/SeoPage.jsx).
 * Same sections, order and claims as the English page. Lead keyword: "รับทำ SEO" /
 * "บริษัทรับทำ SEO กรุงเทพฯ".
 */

const PAGE_URL = 'https://www.locully.org/th/seo/';
const TITLE = 'รับทำ SEO กรุงเทพฯ | บริษัทรับทำ SEO ในประเทศไทย | Locully';
const DESCRIPTION = 'Locully คือบริษัทรับทำ SEO ในกรุงเทพฯ ดูแล Technical SEO คอนเทนต์ และ Link Building ทั้งภาษาไทยและภาษาอังกฤษ รายงานทุกเดือนเป็นจำนวนสายโทร ฟอร์ม และการจอง';

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const services = [
  {
    icon: 'code',
    title: 'Technical SEO',
    body: (
      <p>
        Locully แก้ทุกอย่างที่ทำให้ Google เก็บข้อมูลและจัดทำดัชนีเว็บไซต์ของคุณไม่ได้ ทั้งหน้าที่เสีย การ redirect ความเร็ว{' '}
        <Ext href="https://web.dev/articles/vitals">Core Web Vitals</Ext> และ{' '}
        <Ext href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data">structured data</Ext>{' '}
        งานนี้ต้องมาก่อน เพราะคอนเทนต์ติดอันดับไม่ได้ถ้า Google อ่านเว็บไซต์ได้ลำบาก
      </p>
    ),
  },
  {
    icon: 'search',
    title: 'วิจัยคีย์เวิร์ด',
    body: <p>Locully เลือกคีย์เวิร์ดจากคำที่ลูกค้าของคุณพิมพ์จริง ในภาษาที่เขาใช้พิมพ์ คลินิกที่ดูแลชาวต่างชาติต้องใช้คีย์เวิร์ดภาษาอังกฤษ ส่วนคนไทยที่กำลังซื้ออสังหาริมทรัพย์ค้นหาเป็นภาษาไทย ปริมาณการค้นหาอย่างเดียวไม่ใช่ตัวตัดสิน</p>,
  },
  {
    icon: 'doc',
    title: 'ปรับแต่ง On-page',
    body: <p>ปรับ title หัวข้อ เนื้อหา และ internal link บนหน้าที่ทำเงินให้คุณอยู่แล้ว งานนี้อาจเห็นผลเร็วที่สุด เพราะหน้านั้นมีอยู่แล้ว</p>,
  },
  {
    icon: 'layers',
    title: 'คอนเทนต์ภาษาไทยและภาษาอังกฤษ',
    body: (
      <p>
        หน้าบริการและบทความที่ตอบคำถามที่ลูกค้าถามก่อนตัดสินใจซื้อ เขียนตาม{' '}
        <Ext href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">แนวทางคอนเทนต์ที่ยึดผู้อ่านเป็นหลัก</Ext>ของ Google
      </p>
    ),
  },
  {
    icon: 'link',
    title: 'Link Building',
    body: (
      <p>
        Locully หาลิงก์จากเว็บไซต์ที่เกี่ยวข้องกับตลาดของคุณ และรายงานทุกลิงก์เป็น URL ที่เปิดดูได้จริง เราไม่ยุ่งกับ link scheme เพราะผิด{' '}
        <Ext href="https://developers.google.com/search/docs/essentials/spam-policies">นโยบายสแปมของ Google</Ext> และทำให้เว็บไซต์พังได้
      </p>
    ),
  },
  {
    icon: 'chart',
    title: 'รายงาน SEO รายเดือน',
    body: <p>อันดับและทราฟฟิก และที่สำคัญที่สุดคือลูกค้าที่ติดต่อเข้ามา ทั้งสายโทร ฟอร์ม และการจอง พร้อมต้นทุนต่อราย เขียนด้วยภาษาที่อ่านเข้าใจง่าย ไม่มีสไลด์ที่เต็มไปด้วยรายการงาน</p>,
  },
];

const stages = [
  { n: '01', title: 'วัดผล', body: 'Locully เริ่มงาน SEO ทุกครั้งด้วยการตรวจเว็บไซต์ เราดูว่า Google เก็บข้อมูลเว็บไซต์ของคุณอย่างไร คุณติดอันดับคำไหนอยู่ ใครติดอันดับแทนคุณ และผู้ช่วย AI พูดถึงธุรกิจของคุณว่าอย่างไร ทุกเดือนหลังจากนั้นวัดเทียบกับจุดเริ่มต้นนี้' },
  { n: '02', title: 'แก้ไข', body: 'เราแก้ปัญหาทางเทคนิคก่อนเขียนอะไรใหม่ ทั้ง crawl error หน้าที่โหลดช้า schema ที่ขาด หน้าที่ซ้ำกัน และโครงสร้างที่ไม่เป็นระเบียบ ถ้าลูกค้าหน้าร้านสำคัญกับคุณ เราจัดระเบียบ Google Business Profile ให้ด้วย งานส่วนนี้ไม่หวือหวา แต่ความเปลี่ยนแปลงแรกมักมาจากตรงนี้' },
  { n: '03', title: 'สร้าง', body: 'Locully เขียนหน้าที่ลูกค้าของคุณค้นหา และหาลิงก์จากเว็บไซต์ที่เขาอ่านอยู่แล้ว แต่ละหน้ามีหน้าที่เดียว หน้าในเว็บไซต์ของคุณจึงไม่แย่งคีย์เวิร์ดเดียวกันเอง' },
  { n: '04', title: 'รายงาน', body: 'คุณได้รายงานรายเดือนที่อ่านเข้าใจง่าย อะไรขยับ เราทำอะไรไป ขั้นต่อไปคืออะไร และมีลูกค้าติดต่อเข้ามากี่ราย คุณคุยกับคนที่วางกลยุทธ์โดยตรง ไม่ใช่ account manager' },
];

const retainer = [
  { t: 'ตรวจ Technical SEO พร้อมรายการแก้ไข', d: 'การเก็บข้อมูล การจัดทำดัชนี ความเร็ว โครงสร้าง และ schema แก้ตามลำดับความสำคัญ' },
  { t: 'แผนคีย์เวิร์ดและแผนหน้าเว็บ', d: 'หน้าไหนรับคีย์เวิร์ดไหน เป็นภาษาอังกฤษ ภาษาไทย หรือทั้งสองภาษา' },
  { t: 'คอนเทนต์ที่เขียนเพื่อลูกค้าของคุณ', d: 'หน้าใหม่และหน้าที่เขียนปรับปรุง ตอบคำถามของคนที่กำลังจะซื้อแบบตรงประเด็น' },
  { t: 'ลิงก์จากเว็บไซต์ที่เกี่ยวข้อง', d: 'ทุกลิงก์รายงานให้คุณเป็น URL ที่เปิดดูได้จริง' },
  { t: 'ดูแล Google Business Profile', d: 'หมวดหมู่ ข้อมูล และรูปภาพถูกต้องอยู่เสมอ สำหรับธุรกิจที่ลูกค้าหน้าร้านสำคัญ' },
  { t: 'พื้นฐาน AI Search', d: 'เราตรวจว่า crawler ของ AI เข้าถึงเว็บไซต์ของคุณได้ ผู้ช่วย AI จะได้ไม่ถูกบล็อกจากการอ่านเว็บไซต์' },
  { t: 'รายงานลูกค้าที่ติดต่อเข้ามารายเดือน', d: 'สายโทร ฟอร์ม และการจอง พร้อมต้นทุนต่อราย' },
  { t: 'คุยกับ Sunny ได้โดยตรง', d: 'ผู้ก่อตั้ง Locully วางกลยุทธ์ให้คุณและตอบข้อความของคุณเอง' },
];

const fitYes = [
  'คุณทำธุรกิจคลินิก โรงแรม ร้านอาหาร บริษัทอสังหาริมทรัพย์ หรือสำนักงานวิชาชีพ ในกรุงเทพฯ จังหวัดอื่นในไทย หรือสิงคโปร์',
  'คุณบอกได้ว่าลูกค้าใหม่หนึ่งรายมีมูลค่ากับคุณเท่าไร',
  'คุณต้องการลูกค้าที่ติดต่อเข้ามา และยินดีให้วัดผลงานจากตัวเลขนี้',
  'ฝั่งคุณมีคนอนุมัติคอนเทนต์และให้สิทธิ์เข้าถึงบัญชีต่าง ๆ ได้',
  'คุณทำต่อเนื่องได้หกเดือน ซึ่งเป็นเวลาขั้นต่ำที่จะตัดสินผล SEO ได้อย่างเป็นธรรม',
];

const fitNo = [
  'คุณต้องการการรับประกันอันดับหนึ่งบน Google ไม่มีใครขายสิ่งนี้ให้คุณได้อย่างซื่อสัตย์',
  <>คุณต้องการลูกค้าติดต่อเข้ามาภายในสัปดาห์นี้ งานแบบนั้นเป็นหน้าที่ของ <Link to="/th/performance-marketing/">Google Ads และ Meta Ads</Link></>,
  'คุณต้องการเว็บไซต์ใหม่ การรีแบรนด์ หรือคนดูแลโซเชียลมีเดียแบบวันต่อวัน',
  'คุณต้องการกำหนดกลยุทธ์เอง แล้วให้เราทำตามรายการงานที่สั่ง',
];

const timeline = [
  { m: '1', work: 'ตรวจเว็บไซต์ วัดจุดเริ่มต้น วางแผนคีย์เวิร์ดและแผนหน้าเว็บ', see: 'แผนงานเป็นลายลักษณ์อักษรและรายการแก้ไข ยังไม่มีอะไรขยับ' },
  { m: '1–2', work: 'แก้ปัญหาทางเทคนิค ปรับ On-page บนหน้าที่คุณมีอยู่แล้ว', see: 'งานแก้ไขขึ้นใช้งานจริง พร้อมรายการในรายงานของคุณ' },
  { m: '2–6', work: 'หน้าใหม่ ลิงก์ และงานแก้ไขต่อเนื่อง', see: 'อันดับของคีย์เวิร์ดที่แข่งขันสูงในกรุงเทพฯ มักใช้เวลา 3–6 เดือน' },
  { m: '6+', work: 'ทำสิ่งที่ได้ผลให้มากขึ้น ลดสิ่งที่ไม่ได้ผล', see: 'ลูกค้าที่ติดต่อเข้ามา ติดตามเดือนต่อเดือนเทียบกับจุดเริ่มต้นของเดือนแรก' },
];

// Guide titles stay in English: the posts they link to are English-only.
const guides = [
  { to: '/blog/what-is-seo-complete-guide/', title: 'What is SEO? A complete guide', d: 'Search engine เก็บข้อมูล จัดอันดับ และเลือกผลลัพธ์อย่างไร อธิบายแบบเข้าใจง่าย' },
  { to: '/blog/on-page-seo-optimization-guide/', title: 'On-page SEO optimisation guide', d: 'Title หัวข้อ เนื้อหา และ internal link ไล่ทีละหน้า' },
  { to: '/blog/backlinks-guide-seo/', title: 'Backlinks: how they work in SEO', d: 'ลิงก์ที่ดีหน้าตาเป็นอย่างไร และลิงก์แบบไหนควรเลี่ยง' },
  { to: '/blog/programmatic-seo-guide/', title: 'Programmatic SEO guide', d: 'การสร้างหน้าจำนวนมากได้ผลเมื่อไร และให้ผลเสียเมื่อไร' },
];

// FAQ answers: plain strings feed the FAQPage schema; `node` (optional) is the on-page version with links.
const faqs = [
  {
    q: 'บริษัทรับทำ SEO ในกรุงเทพฯ คิดค่าบริการเท่าไร',
    a: 'ขึ้นอยู่กับขอบเขตงาน และ Locully เสนอราคาหลังการตรวจฟรี ค่าบริการ SEO รายเดือนในกรุงเทพฯ ต่างกันมาก จึงควรเทียบสิ่งที่ได้รับในแต่ละเดือน ไม่ใช่เทียบแค่ราคา',
    node: <p>ขึ้นอยู่กับขอบเขตงาน และ Locully เสนอราคาหลังการตรวจฟรี ค่าบริการ SEO รายเดือนในกรุงเทพฯ ต่างกันมาก จึงควรเทียบสิ่งที่ได้รับในแต่ละเดือน ไม่ใช่เทียบแค่ราคา</p>,
  },
  {
    q: 'ทำ SEO นานแค่ไหนถึงเห็นผล',
    a: 'เดือนแรกคือการวัดผล จึงยังไม่มีอะไรขยับ งานแก้ไขทางเทคนิคและ On-page ขึ้นใช้งานจริงในเดือนที่หนึ่งและสอง อันดับของคีย์เวิร์ดที่แข่งขันสูงในกรุงเทพฯ มักใช้เวลาสามถึงหกเดือน เราจึงขอเวลาหกเดือนเพื่อตัดสินผลงานอย่างเป็นธรรม',
  },
  {
    q: 'รับประกันอันดับหนึ่งบน Google ได้ไหม',
    a: 'ไม่ได้ ไม่มีบริษัทรับทำ SEO รายไหนทำได้ และคำแนะนำของ Google เองเรื่องการจ้าง SEO ก็เตือนให้ระวังคนที่บอกว่าทำได้ Locully ผูกพันกับขอบเขตงานที่กำหนดชัดเจนและวิธีวัดผล พร้อมรายงานทุกเดือน',
    node: <p>ไม่ได้ ไม่มีบริษัทรับทำ SEO รายไหนทำได้ และ<Ext href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo">คำแนะนำของ Google เองเรื่องการจ้าง SEO</Ext> ก็เตือนให้ระวังคนที่บอกว่าทำได้ Locully ผูกพันกับขอบเขตงานที่กำหนดชัดเจนและวิธีวัดผล พร้อมรายงานทุกเดือน</p>,
  },
  {
    q: 'รับทำ SEO ภาษาไทยด้วยไหม นอกจากภาษาอังกฤษ',
    a: 'รับ Locully เขียนและปรับแต่งทั้งภาษาอังกฤษและภาษาไทย เราเลือกภาษาจากกลุ่มลูกค้าของคุณ ชาวต่างชาติและลูกค้าต่างประเทศส่วนใหญ่ค้นหาเป็นภาษาอังกฤษ ลูกค้าคนไทยส่วนใหญ่ค้นหาเป็นภาษาไทย และหลายธุรกิจต้องใช้ทั้งสองภาษา',
  },
  {
    q: 'รับงานเฉพาะธุรกิจในกรุงเทพฯ หรือเปล่า',
    a: 'ไม่ใช่ ลูกค้าส่วนใหญ่ของ Locully อยู่ในกรุงเทพฯ และเราทำงานกับธุรกิจในจังหวัดอื่นของไทยและในสิงคโปร์ด้วย ผลการค้นหาต่างกันในแต่ละประเทศ เราจึงตั้งค่าการวัดผลแยกตามตลาด',
  },
  {
    q: 'SEO กับ GEO ต่างกันอย่างไร',
    a: 'SEO ช่วยให้คนเจอคุณบน Google ส่วน GEO หรือ Generative Engine Optimization ช่วยให้คุณถูกกล่าวถึงได้ง่ายขึ้นในคำตอบของ AI จาก ChatGPT, Perplexity และ Google AI Overviews ค่าบริการ SEO รายเดือนของ Locully ทุกแพ็กเกจครอบคลุมพื้นฐาน AI Search และบริการรับทำ GEO ของเราลงลึกกว่านั้น',
    node: <p>SEO ช่วยให้คนเจอคุณบน Google ส่วน GEO หรือ Generative Engine Optimization ช่วยให้คุณถูกกล่าวถึงได้ง่ายขึ้นในคำตอบของ AI จาก ChatGPT, Perplexity และ Google AI Overviews ค่าบริการ SEO รายเดือนของ Locully ทุกแพ็กเกจครอบคลุมพื้นฐาน AI Search และ<Link to="/th/geo/">บริการรับทำ GEO</Link> ของเราลงลึกกว่านั้น</p>,
  },
  {
    q: 'ใครเป็นเจ้าของบัญชีและข้อมูล',
    a: 'คุณเป็นเจ้าของตั้งแต่วันแรก Search Console, analytics และ Google Business Profile อยู่ในชื่อของคุณ และคุณส่งออกข้อมูลของคุณได้เสมอ ถ้าเราเลิกทำงานร่วมกัน ทุกอย่างยังเป็นของคุณ',
  },
];

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'รับทำ SEO ในกรุงเทพฯ และประเทศไทย',
  serviceType: 'Search engine optimisation (SEO)',
  description: 'Technical SEO วิจัยคีย์เวิร์ด ปรับแต่ง On-page คอนเทนต์ภาษาไทยและภาษาอังกฤษ internal link และ Link Building ให้บริการแบบค่าบริการรายเดือน และรายงานผลเป็นจำนวนลูกค้าที่ติดต่อเข้ามา',
  url: PAGE_URL,
  inLanguage: 'th',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: [
    { '@type': 'City', name: 'Bangkok' },
    { '@type': 'Country', name: 'Thailand' },
    { '@type': 'Country', name: 'Singapore' },
  ],
  availableLanguage: ['en', 'th'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'บริการรับทำ SEO',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title },
    })),
  },
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  inLanguage: 'th',
  mainEntity: faqs.map((f) => ({
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
    { '@type': 'ListItem', position: 2, name: 'SEO', item: PAGE_URL },
  ],
};

export default function SeoPageTh() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>
      <Hreflang path="/seo/" />

      <Page className="lbp-seo">
        <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'SEO' }]} />

        {/* Hero */}
        <PageHero
          eyebrow="รับทำ SEO · กรุงเทพฯ และประเทศไทย"
          title="บริษัทรับทำ SEO ในกรุงเทพฯ ที่วัดผลจากลูกค้าที่ติดต่อเข้ามา"
          lede="Locully คือบริษัทรับทำ SEO ในกรุงเทพฯ ประเทศไทย เราแก้เว็บไซต์ของคุณ เขียนหน้าที่ลูกค้าของคุณค้นหา และหาลิงก์ที่ช่วยให้ Google เชื่อถือคุณ ทุกเดือนเรารายงานจำนวนสายโทร ฟอร์ม และการจองที่มาจากการค้นหา พร้อมต้นทุนต่อราย"
          visual={(
            <div className="lb-hero-form">
              <LeadFormCard subject="New free check request (SEO page hero) — Locully [TH]" idPrefix="seo-hero">
                <p className="lb-hero-form-t">ขอรับ AI Audit ฟรี</p>
                <p className="lb-hero-form-d">เรานำคำถามจริงของลูกค้าคุณไปถาม ChatGPT, Perplexity และ Google AI แล้วแสดงให้เห็นว่าใครถูกกล่าวถึงแทนคุณ</p>
              </LeadFormCard>
            </div>
          )}
        >
          <Cta note="ฟรี เราแสดงให้คุณเห็นว่าใครถูกกล่าวถึงแทนคุณใน ChatGPT, Perplexity และ Google AI และผลการตรวจเป็นของคุณ" />
          <div className="lb-callout" style={{ marginTop: 32 }}>
            <p>
              <strong className="lb-em">สรุปสั้น ๆ:</strong> Locully คือบริษัทรับทำ SEO ในกรุงเทพฯ ก่อตั้งในปี 2020 และรีแบรนด์เป็น Locully ในปี 2025
              ทีมงานภายในของเราดูแล Technical SEO วิจัยคีย์เวิร์ด งาน On-page คอนเทนต์ภาษาไทยและภาษาอังกฤษ internal link และ Link Building
              เราทำงานกับคลินิก โรงแรม ร้านอาหาร บริษัทอสังหาริมทรัพย์ และสำนักงานวิชาชีพในไทยและสิงคโปร์ แบบค่าบริการรายเดือน
              รายงานแสดงลูกค้าที่ติดต่อเข้ามาและต้นทุนต่อราย เราสัญญาเรื่องงานที่ทำ ไม่สัญญาเรื่องอันดับ
            </p>
          </div>
        </PageHero>

        <LogoStrip />

        {/* Services */}
        <Section alt>
          <SectionHeader
            eyebrow="สิ่งที่เราทำ"
            title="บริการรับทำ SEO ในกรุงเทพฯ ของเราครอบคลุมอะไรบ้าง"
            lede="งานหกอย่าง ทำโดยทีมเดียวในกรุงเทพฯ ไม่มีงานไหนส่งต่อให้ฟรีแลนซ์"
          />
          <div className="lb-g3">
            {services.map((s) => (
              <div key={s.title} className="lb-card">
                <Icon name={s.icon} />
                <h3 className="lb-h3-card">{s.title}</h3>
                {s.body}
              </div>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section>
          <SectionHeader
            eyebrow="ขั้นตอนการทำงาน"
            title="บริษัทรับทำ SEO ในกรุงเทพฯ ของเราทำงานอย่างไร"
            lede="สี่ขั้นตอน วัดผล แก้ไข สร้าง รายงาน"
          />
          <div className="lb-stages">
            {stages.map((s) => (
              <Stage key={s.n} n={s.n} title={s.title}>{s.body}</Stage>
            ))}
          </div>
          <div className="lb-ctarow lb-ctastrip">
            <p className="lb-body-lg lb-em" style={{ margin: '0 0 22px' }}>
              อยากรู้ว่าตอนนี้คุณอยู่ตรงไหน ก่อนจ่ายเงินสักบาทไหม
            </p>
            <Button cta />
          </div>
        </Section>

        {/* SEO + AI search, with the approved result */}
        <Section alt>
          <SectionHeader
            eyebrow="Google และ AI Search"
            title="SEO ในประเทศไทยวันนี้รวม AI Search ด้วย"
            lede="ลูกค้าบางคนค้นหาบน Google บางคนถาม ChatGPT, Gemini หรือ Perplexity Locully ดูแลทั้งสองทาง"
          />
          <div className="lb-narrow-copy" style={{ marginBottom: 44 }}>
            <p className="lb-body-lg">
              Locully มอง SEO และ AI Search เป็นงานเดียวกัน สิ่งที่ช่วยให้คุณติดอันดับบน Google (เว็บไซต์ที่ชัดเจน หน้าที่ตอบคำถามจริง
              การถูกกล่าวถึงบนเว็บไซต์ที่น่าเชื่อถือ) ก็ช่วยให้ ChatGPT, Perplexity และ Google AI Overviews กล่าวถึงคุณได้ง่ายขึ้นด้วย
              ค่าบริการ SEO รายเดือนทุกแพ็กเกจจึงรวมงานพื้นฐานที่ทำให้ผู้ช่วย AI อ่านเว็บไซต์ของคุณได้
            </p>
            <p className="lb-body-lg">
              ถ้า AI Search คือเป้าหมายหลักของคุณ <Link to="/th/geo/">บริการรับทำ GEO และการมองเห็นบน AI Search</Link> ของเราลงลึกกว่า
              ด้วยการติดตาม prompt การวางการอ้างอิง และงานด้าน entity
            </p>
          </div>
          <p className="lb-proof-note">
            ผลลัพธ์ขึ้นอยู่กับตลาด งบประมาณ และจุดเริ่มต้นของคุณ ไม่มีเอเจนซี่ใดสัญญาได้ว่าโมเดล AI
            จะกล่าวถึงคุณ หรือ Google จะจัดให้คุณอยู่อันดับหนึ่ง
          </p>
        </Section>

        {/* Retainer offer stack */}
        <Section narrow>
          <SectionHeader
            eyebrow="สิ่งที่คุณได้รับ"
            title="ค่าบริการ SEO รายเดือนของ Locully มีอะไรบ้าง"
            lede="ขอบเขตงานเดียว ตกลงกันก่อนเริ่ม ไม่มีอะไรเพิ่มเข้ามาในเดือนที่สาม"
          />
          <div className="lb-stack">
            {retainer.map((r) => (
              <div key={r.t} className="lb-si">
                <Tick />
                <div>
                  <div className="lb-si-t">{r.t}</div>
                  <div className="lb-si-d">{r.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="lb-ctarow" style={{ marginTop: 32 }}>
            <Button cta />
          </div>
        </Section>

        {/* Fit */}
        <Section alt>
          <SectionHeader
            eyebrow="เหมาะกับใคร"
            title="บริษัทรับทำ SEO ในประเทศไทยของเราทำงานกับใคร"
            lede="เราบอกตามตรง"
          />
          <div className="lb-g2" style={{ alignItems: 'start' }}>
            <div className="lb-fit yes">
              <h3 className="lb-h3">เหมาะกับคุณ ถ้า</h3>
              <List items={fitYes} large />
            </div>
            <div className="lb-fit no">
              <h3 className="lb-h3">ไม่เหมาะ ถ้า</h3>
              <List items={fitNo} dash large />
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section narrow>
          <SectionHeader
            eyebrow="ระยะเวลา"
            title="ทำ SEO ในกรุงเทพฯ ใช้เวลานานแค่ไหน"
            lede="ระยะเวลาตามจริง ตลาดของคุณอาจเร็วหรือช้ากว่านี้"
          />
          <div className="lb-table-wrap">
            <table className="lb-table">
              <thead>
                <tr><th scope="col">เดือนที่</th><th scope="col">สิ่งที่เราทำ</th><th scope="col">สิ่งที่คุณเห็น</th></tr>
              </thead>
              <tbody>
                {timeline.map((r) => (
                  <tr key={r.m}>
                    <td style={{ fontWeight: 600, color: 'var(--lb-ink)', whiteSpace: 'nowrap' }}>{r.m}</td>
                    <td>{r.work}</td>
                    <td>{r.see}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="lb-body-lg" style={{ margin: '32px 0 0' }}>
            Google เขียนไว้ชัดเจนในคำแนะนำของตัวเองเรื่องการจ้าง SEO ว่า{' '}
            <Ext href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo">"No one can guarantee a #1 ranking on Google."</Ext>{' '}
            หรือไม่มีใครรับประกันอันดับ 1 บน Google ได้ (Google Search Central อัปเดตเดือนมิถุนายน 2026) Locully ผูกพันกับขอบเขตงานที่กำหนดชัดเจนและวิธีวัดผล
          </p>
        </Section>

        {/* Guides */}
        <Section alt>
          <SectionHeader
            eyebrow="บทความ"
            title="คู่มือ SEO จากทีมของเราในกรุงเทพฯ"
            lede="ดูวิธีคิดของเราก่อนตัดสินใจจ้าง"
          />
          <div className="lb-g2">
            {guides.map((g) => (
              <Link key={g.to} to={g.to} className="lb-card sm lb-card-link">
                <h3 className="lb-h3">{g.title}</h3>
                <p>{g.d}</p>
                <div className="lb-card-foot"><span className="lb-tlink">อ่านคู่มือ <span aria-hidden="true">→</span></span></div>
              </Link>
            ))}
          </div>
          <p className="lb-body-lg" style={{ textAlign: 'center', margin: '36px auto 0', maxWidth: 720 }}>
            <Ext href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">SEO Starter Guide</Ext> ของ Google เองก็เป็นคู่มือเริ่มต้นฟรีที่ดีเช่นกัน
            อยากรู้ว่าใครอยู่เบื้องหลังงานนี้ อ่าน<Link to="/th/about">เกี่ยวกับ Locully</Link>
          </p>
        </Section>

        {/* FAQ */}
        <Section narrow>
          <SectionHeader eyebrow="FAQ" title="รับทำ SEO กรุงเทพฯ: คำถามที่เราถูกถามบ่อย" />
          <FAQ items={faqs.map((f) => ({ q: f.q, a: f.node || f.a }))} qAs="h3" />
        </Section>

        {/* Lead form */}
        <LeadForm
          eyebrow="AI Audit"
          title="รับ AI Audit จากทีม SEO ของเราในกรุงเทพฯ"
          lede="ส่งเว็บไซต์ของคุณมาให้เรา เรานำคำถามจริงของลูกค้าคุณไปถาม ChatGPT, Perplexity และ Google AI ภายในห้าวันทำการ เราส่งรายงานให้คุณว่าใครถูกกล่าวถึงแทนคุณ และเราจะแก้อะไรเป็นอย่างแรก ฟรี และรายงานเป็นของคุณ"
          subject="New free check request (SEO page) — Locully [TH]"
          idPrefix="seo"
        />

        <Footer />
      </Page>
    </>
  );
}
