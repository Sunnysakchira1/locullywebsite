import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, ServiceCard, ProofPanel, Figure,
  FAQ, Stage, ResultsNote,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Hreflang } from '@/i18n';
import '@/brand/pages/performance.css';

/* Thai version of src/pages/PerformanceMarketingPage.jsx. Same sections, order and claims. */

const URL = 'https://www.locully.org/th/performance-marketing/';
const TITLE = 'Performance Marketing: รับทำโฆษณา Google Ads และ Meta Ads | Locully';
const DESCRIPTION = 'Locully รับทำโฆษณา Google Ads และ Meta Ads ในกรุงเทพฯ ทั้ง Search, Performance Max และโฆษณา Facebook บริหารเพื่อต้นทุนต่อลูกค้า โดยติดตั้งระบบวัดผลก่อน';

const Ext = ({ href, children }) => (
  <a href={href} className="lbp-pm-link" target="_blank" rel="noopener noreferrer">{children}</a>
);

const services = [
  {
    icon: 'search',
    title: 'โฆษณา Google Search',
    body: <p>โฆษณาบนคำค้นหาที่บอกว่าคนคนนั้นพร้อมซื้อตอนนี้ รายการคีย์เวิร์ดที่คัดมาแน่น เพิ่ม negative keyword ทุกสัปดาห์ และข้อความโฆษณาที่ตรงกับคำค้นหา</p>,
  },
  {
    icon: 'layers',
    title: 'Performance Max',
    body: <p>แคมเปญเดียวของ Google ที่แสดงบน Search, Maps, YouTube, Display, Discover และ Gmail จากงบก้อนเดียว (<Ext href="https://support.google.com/google-ads/answer/10724817">คู่มือ Performance Max ของ Google</Ext>) สำหรับธุรกิจที่มีหน้าร้าน Maps ช่วยแบกงานได้มาก</p>,
  },
  {
    icon: 'users',
    title: 'Meta Ads สำหรับ Facebook และ Instagram',
    body: <p>โฆษณาโซเชียลที่ขับเคลื่อนด้วยการทดสอบครีเอทีฟ มีโฆษณาใหม่ทุกเดือน เปลี่ยนตัวแปรทีละอย่าง คุณจึงรู้ว่าอะไรขายได้</p>,
  },
  {
    icon: 'target',
    title: 'Retargeting',
    body: <p>โฆษณาถึงคนที่เคยเข้าเว็บไซต์ ดูวิดีโอ หรือส่งข้อความหาเพจของคุณ แต่ยังไม่ได้จอง กลุ่มนี้มักเป็นกลุ่มเป้าหมายที่ต้นทุนต่ำที่สุดที่คุณมี และมักเป็นกลุ่มที่ไม่มีใครตั้งค่าไว้</p>,
  },
  {
    icon: 'chart',
    title: 'Conversion tracking',
    body: <p>Google tag, Tag Manager, enhanced conversions และ Meta Pixel ตั้งค่าให้แพลตฟอร์มปรับโฆษณาเพื่อหาลูกค้า ไม่ใช่หาคลิก</p>,
  },
];

const faqs = [
  {
    q: 'Google Ads ทำให้มีลูกค้าติดต่อเข้ามาเร็วแค่ไหน',
    a: 'โฆษณามักเริ่มมีลูกค้าติดต่อเข้ามาในเดือนแรก เมื่อระบบวัดผลทำงานแล้วและแคมเปญมีเวลาเรียนรู้ สัปดาห์แรก ๆ จะบอกว่าคำค้นหาและกลุ่มเป้าหมายไหนพาลูกค้ามา ต้นทุนต่อลูกค้าที่ติดต่อเข้ามามักเริ่มนิ่งหลังจากนั้น ไม่ใช่ตั้งแต่วันแรก',
  },
  {
    q: 'คุณบวกเพิ่มค่าโฆษณาไหม',
    a: 'ไม่ คุณจ่ายค่าโฆษณาตรงให้ Google และ Meta ด้วยบัตรหรือใบแจ้งหนี้ของคุณเอง ค่าบริการของเราคือค่าบริการรายเดือนสำหรับการบริหารบัญชี คุณเห็นทุกบาทที่แพลตฟอร์มเรียกเก็บ',
  },
  {
    q: 'รับประกันผลลัพธ์หรือ ROAS ที่กำหนดได้ไหม',
    a: 'ไม่ได้ ต้นทุนโฆษณาเปลี่ยนตามตลาด คู่แข่ง และตัวแพลตฟอร์มเอง สิ่งที่เราสัญญาคืองานที่ทำ ระบบวัดผลที่ถูกต้อง การปรับแต่งทุกสัปดาห์ ครีเอทีฟใหม่ทุกเดือน และรายงานรายเดือนที่บอกตามจริงว่าลูกค้าที่ติดต่อเข้ามาแต่ละรายมีต้นทุนเท่าไร',
  },
  {
    q: 'ทำ Google Ads ให้คลินิกในกรุงเทพฯ ได้ไหม',
    a: 'ได้ Google และ Meta จำกัดโฆษณาด้านสุขภาพหลายประเภท เราจึงตรวจแต่ละการรักษากับกฎของแพลตฟอร์มก่อนสร้างแคมเปญ และเขียนโฆษณาให้อยู่ในกฎ การรักษาบางอย่างโฆษณาไม่ได้เลย และเราจะบอกคุณว่ามีอะไรบ้างก่อนที่คุณจะใช้เงิน',
  },
  {
    q: 'ถ้าทำ SEO อยู่แล้ว ยังต้องทำ Google Ads ไหม',
    a: 'ส่วนใหญ่ควรทำ SEO ใช้เวลาหลายเดือนกว่าจะติดอันดับคีย์เวิร์ดที่แข่งขันสูงในกรุงเทพฯ โฆษณาพาลูกค้าติดต่อเข้ามาระหว่างที่ SEO กำลังสร้างผล และครอบคลุมคำค้นหาที่คุณยังไม่ติดอันดับ เมื่อ SEO แข็งแรงแล้ว หลายธุรกิจยังเปิดโฆษณาต่อบนคำค้นหาที่เปลี่ยนเป็นลูกค้าได้ดีที่สุด',
  },
  {
    q: 'แต่ละเดือนคุณรายงานอะไรบ้าง',
    a: 'ลูกค้าที่ติดต่อเข้ามา ต้นทุนต่อราย ค่าโฆษณาแยกตามช่องทาง และสิ่งที่เราเปลี่ยนพร้อมเหตุผล เรารายงานสายโทร ฟอร์ม และการจอง ไม่ใช่คลิกและ impression',
  },
  {
    q: 'รับทำโฆษณา Facebook และ Instagram ในประเทศไทยด้วยไหม',
    a: 'รับ Locully บริหาร Meta Ads สำหรับ Facebook และ Instagram โดยใช้การทดสอบครีเอทีฟรายเดือนและ retargeting เป็นหลัก หลายธุรกิจทำ Google และ Meta คู่กัน แผนเดียวจึงครอบคลุมทั้งคนที่กำลังค้นหาและคนที่กำลังเลื่อนฟีด',
  },
];

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Performance Marketing: รับทำโฆษณา Google Ads และ Meta Ads',
  serviceType: 'Pay-per-click advertising management (Google Ads, Performance Max, Meta Ads, retargeting, conversion tracking)',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: [{ '@type': 'City', name: 'Bangkok' }, { '@type': 'Country', name: 'Thailand' }],
  url: URL,
  inLanguage: 'th',
  description: 'Locully วางแผนและบริหาร Google Ads (Search และ Performance Max) และ Meta Ads (Facebook และ Instagram) ให้ธุรกิจในกรุงเทพฯ และประเทศไทย โดยติดตั้ง conversion tracking ก่อน และบริหารแคมเปญเพื่อต้นทุนต่อลูกค้า ค่าโฆษณาจ่ายตรงให้แพลตฟอร์มและไม่มีการบวกเพิ่ม',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'บริการ Performance Marketing',
    itemListElement: services.map((s) => s.title)
      .map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'th',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const schemaCrumbs = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.locully.org/th/' },
    { '@type': 'ListItem', position: 2, name: 'Performance Marketing', item: URL },
  ],
};

const Funnel = () => (
  <div className="lbp-pm-funnel" role="img" aria-label="ค่าโฆษณานำไปสู่คลิก ลูกค้าที่ติดต่อเข้ามา และลูกค้า Locully ปรับโฆษณาเพื่อลูกค้า ไม่ใช่คลิก">
    <p className="lbp-pm-funnel-t">จุดที่เราเล็งค่าโฆษณาของคุณ</p>
    <div className="lbp-pm-step">ค่าโฆษณา <small>คุณจ่ายให้ Google และ Meta</small></div>
    <div className="lbp-pm-step">คลิก <small>นับง่าย แต่ไม่ใช่เป้าหมาย</small></div>
    <div className="lbp-pm-step">ลูกค้าที่ติดต่อเข้ามา <small>สายโทร ฟอร์ม การจอง</small></div>
    <div className="lbp-pm-step win">ลูกค้า <small>เราปรับโฆษณาที่จุดนี้</small></div>
  </div>
);

export default function PerformanceMarketingPageTh() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaCrumbs)}</script>
      </Helmet>
      <Hreflang path="/performance-marketing/" />

      <Page className="lbp-pm">
        <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'Performance Marketing' }]} />

        <PageHero
          eyebrow="Performance Marketing · Google Ads และ Meta Ads"
          visual={<Funnel />}
          title="Performance Marketing: รับทำโฆษณา Google Ads และ Meta Ads ในกรุงเทพฯ บริหารเพื่อต้นทุนต่อลูกค้า"
          lede="Locully คือเอเจนซี่ Google Ads ในกรุงเทพฯ ที่รับทำ Meta Ads ด้วย เราบริหารแคมเปญ Search, Performance Max, Facebook และ Instagram เพื่อต้นทุนต่อลูกค้า ไม่ใช่ต้นทุนต่อคลิก เราติดตั้งระบบวัดผลก่อน ค่าโฆษณาจึงโยงกลับไปถึงสายโทร ฟอร์ม การจอง และการมาที่ร้านได้"
        >
          <div className="lb-hero-cta">
            <Button cta>ขอตรวจบัญชีโฆษณา</Button>
            <p className="lb-cta-note">ค่าโฆษณาจ่ายตรงให้ Google และ Meta เราไม่บวกเพิ่ม</p>
          </div>
          <p className="lbp-pm-byline">
            โดย <Link to="/th/rachaphon-sakchiraphong/">Rachaphon Sakchiraphong (Sunny)</Link> ผู้ก่อตั้ง · อัปเดตเดือนกันยายน 2026
          </p>
        </PageHero>

        <Section alt tight>
          <div className="lbp-pm-tldr">
            <p>
              <strong>สรุปสั้น ๆ:</strong> Locully รับทำโฆษณา Google Ads และ Meta Ads ให้ธุรกิจในกรุงเทพฯ และทั่วประเทศไทย ทั้งคลินิก ร้านอาหาร โรงแรม และบริษัทอสังหาริมทรัพย์ เราติดตั้ง conversion tracking ก่อนเริ่มใช้งบ สร้างแคมเปญ Search, Performance Max และโฆษณาโซเชียล ทำ retargeting ถึงคนที่รู้จักคุณอยู่แล้ว และทดสอบครีเอทีฟใหม่ทุกเดือน คุณจ่ายค่าโฆษณาตรงให้ Google และ Meta และเราไม่บวกเพิ่ม ทุกเดือนคุณได้รายงานลูกค้าที่ติดต่อเข้ามาและต้นทุนต่อราย
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="สิ่งที่เราดูแล"
            title="เอเจนซี่ Performance Marketing ในกรุงเทพฯ ของเราดูแลอะไรบ้าง"
            lede="ทีมเดียวในกรุงเทพฯ ดูแลครบทั้งห้าอย่าง และคุณได้รายงานฉบับเดียวว่าทั้งหมดมีต้นทุนเท่าไร"
          />
          <div className="lb-g3">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} small>{s.body}</ServiceCard>
            ))}
          </div>
        </Section>

        <Section alt>
          <SectionHeader
            eyebrow="วัดผลก่อน"
            title="Conversion tracking สำหรับ Google Ads และ Meta Ads ต้องมาก่อน"
            lede="Google Ads และ Meta ปรับโฆษณาตามสิ่งที่คุณบอกว่านับเป็นผลลัพธ์ ถ้านับคลิก คุณได้คลิกราคาถูก ถ้านับการนัดหมายที่จองแล้ว อัลกอริทึมจะไปหาคนที่จอง"
          />
          <div className="lb-narrow-copy lbp-pm-copy" style={{ maxWidth: 860, margin: '0 auto' }}>
            <p className="lb-body-lg">
              Locully จึงสร้างระบบวัดผลก่อน ก่อนเริ่มใช้งบโฆษณา (<Ext href="https://support.google.com/google-ads/answer/1722022">Google วัด conversion อย่างไร</Ext>) สิ่งที่เราตั้งค่า ขึ้นอยู่กับเว็บไซต์ของคุณ
            </p>
            <ol className="lbp-pm-ol">
              <li><strong>Google tag และ Tag Manager</strong> บนทุกหน้า พร้อม <Ext href="https://support.google.com/tagmanager/answer/7549390">conversion linker</Ext> คลิกจึงยังถูกนับให้โฆษณาแม้ผู้เข้าชมจะเปลี่ยนหน้าไปแล้ว</li>
              <li><strong>หนึ่ง conversion ต่อการติดต่อจริงหนึ่งครั้ง:</strong> ฟอร์ม สายโทรจากโฆษณา หรือการจอง เราตัดรายการซ้ำออก lead หนึ่งรายจึงนับครั้งเดียว</li>
              <li><strong><Ext href="https://support.google.com/google-ads/answer/9888656">Enhanced conversions</Ext></strong> ซึ่งส่งอีเมลที่เข้ารหัสแบบ hash ไปกับ lead แต่ละราย Google จึงจับคู่ lead กับโฆษณาที่พามาได้มากขึ้น</li>
              <li><strong><Ext href="https://support.google.com/google-ads/answer/6100636">Store visits</Ext> และการขอเส้นทาง</strong> สำหรับธุรกิจที่มีหน้าร้าน ในกรณีที่ Google เปิดให้ใช้</li>
              <li><strong>Meta Pixel และ <Ext href="https://developers.facebook.com/docs/marketing-api/conversions-api">Conversions API</Ext> ในกรณีที่เว็บไซต์ของคุณรองรับ</strong> ซึ่งช่วยให้ Meta เห็น conversion ที่การวัดผลผ่านเบราว์เซอร์มองไม่เห็น</li>
            </ol>
            <p className="lb-body-lg" style={{ marginTop: 22 }}>
              มีระบบวัดผลอยู่แล้วใช่ไหม เราตรวจก่อน conversion ที่เสียหรือนับซ้ำทำให้บัญชีดูดีทั้งที่ไม่ได้ดีจริง
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Google Ads"
            title="Google Ads ในกรุงเทพฯ: Search และ Performance Max"
            lede="Search จับคนที่รู้อยู่แล้วว่าต้องการอะไร Performance Max เข้าถึงพวกเขาทั่ว Google รวมถึงการค้นหาบน Maps ที่พาคนมาถึงหน้าร้านคุณ ในแคมเปญด้านล่าง Maps ใช้งบไป 60%"
          />
          <div className="lbp-pm-proof-grid">
            <ProofPanel
              label="แคมเปญ Performance Max ของกลุ่มร้านอาหารแห่งหนึ่ง"
              big="฿239,000"
              sub="Conversion value ที่ Google รายงาน จากค่าโฆษณา ฿9,150 Conversion value เป็นตัวเลขของ Google เอง คำนวณจากมูลค่าที่กำหนดให้แต่ละ action ไม่ใช่รายได้"
              stats={[
                { n: '฿9,150', l: 'ค่าโฆษณา' },
                { n: '477', l: 'store visits ที่ Google บันทึก' },
                { n: '3,263', l: 'ครั้งที่มีคนขอเส้นทาง' },
                { n: '60%', l: 'ของงบไปที่ Google Maps' },
              ]}
            />
            <Figure
              src="/images/performance-marketing/performance-max-channel-report.jpg"
              alt="รายงานช่องทางของแคมเปญ Performance Max ใน Google Ads ของกลุ่มร้านอาหารที่ไม่เปิดเผยชื่อ: conversion value 239K จากต้นทุน ฿9.15K, Maps มีสัดส่วนต้นทุน 60.44%, store visits 477 ครั้ง และการขอเส้นทาง 3,263 ครั้ง"
              imgProps={{ width: 998, height: 1416 }}
              caption={<><strong>รายงานช่องทางของ Google Ads</strong> สำหรับแคมเปญเดียวกัน: Maps ใช้ต้นทุนไป 60.44% Google นับ store visits ได้ 477 ครั้ง และการขอเส้นทาง 3,263 ครั้ง</>}
            />
          </div>
          <ResultsNote>
            เราแสดงผลลัพธ์โดยไม่เปิดเผยชื่อลูกค้า ตัวเลขมาจากบัญชี Google Ads ของลูกค้า ผลลัพธ์ขึ้นอยู่กับตลาด งบประมาณ และจุดเริ่มต้นของคุณ ไม่มีเอเจนซี่ใดสัญญาผลตอบแทนที่แน่นอนจากโฆษณาได้ หรือสัญญาได้ว่าโมเดล AI จะกล่าวถึงคุณ
          </ResultsNote>
        </Section>

        <Section alt>
          <div className="lb-split" style={{ alignItems: 'start' }}>
            <div className="lbp-pm-copy">
              <span className="lb-eyebrow">Meta Ads</span>
              <h2 className="lb-h2">รับทำโฆษณา Facebook ในประเทศไทย: Meta Ads ที่ขับเคลื่อนด้วยการทดสอบครีเอทีฟ</h2>
              <p className="lb-body-lg">บน Meta วันนี้ ตัวโฆษณาเองทำหน้าที่เลือกกลุ่มเป้าหมายเป็นส่วนใหญ่ คนที่เลื่อนผ่านโฆษณาชิ้นหนึ่งอาจจองจากชิ้นถัดไป</p>
              <p className="lb-body-lg">หัวใจของงาน Meta Ads ที่ Locully จึงเป็นครีเอทีฟใหม่ที่ออกมาสม่ำเสมอ ทดสอบทีละตัวแปร ทั้ง hook ข้อเสนอ รูปภาพ และรูปแบบ</p>
            </div>
            <div className="lb-fit yes">
              <h3 className="lb-h3">แต่ละเดือนหน้าตาเป็นอย่างไร</h3>
              <ul className="lb-list lg">
                <li>ครีเอทีฟใหม่ทุกเดือน บรีฟจากสิ่งที่รอบก่อนสอนเรา</li>
                <li>ตัวที่ชนะเปิดต่อ ตัวที่แพ้ปิดเร็ว งบจึงไม่ไหลไปกับโฆษณาที่ควรปิดไปแล้ว</li>
                <li>Retargeting ถึงคนที่มีส่วนร่วมแต่ยังไม่ได้จอง</li>
                <li>Lead form ข้อความ หรือการจองผ่านเว็บไซต์ เลือกช่องทางที่ทีมของคุณตอบได้เร็วที่สุด</li>
              </ul>
              <p className="lb-body" style={{ margin: '18px 0 0' }}>และถ้า Meta ไม่เหมาะกับธุรกิจของคุณ เราจะบอกตรง ๆ แล้วย้ายงบไปที่ Google</p>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeader eyebrow="ขั้นตอนการทำงาน" title="เอเจนซี่ PPC ในกรุงเทพฯ ของเราบริหารบัญชีของคุณอย่างไร" />
          <div className="lb-stages">
            <Stage n="01" title="ตรวจบัญชี">เราอ่านบัญชี Google และ Meta ระบบวัดผล และ landing page ของคุณ คุณเห็นว่าอะไรได้ผลและอะไรที่เราปรับปรุงได้ ก่อนเซ็นสัญญา</Stage>
            <Stage n="02" title="วัดผลและสร้างแคมเปญ">Conversion มาก่อน จากนั้นจึงเป็นแคมเปญ คีย์เวิร์ด negative keyword กลุ่มเป้าหมาย และครีเอทีฟรอบแรก</Stage>
            <Stage n="03" title="เปิดตัวและเรียนรู้">โฆษณามักเริ่มมีลูกค้าติดต่อเข้ามาในเดือนแรก เมื่อระบบวัดผลทำงานแล้ว สัปดาห์แรก ๆ จะบอกว่าคำค้นหา กลุ่มเป้าหมาย และโฆษณาไหนพาลูกค้ามา</Stage>
            <Stage n="04" title="ปรับทุกสัปดาห์ รายงานทุกเดือน">เราทบทวน search term การประมูล งบ และครีเอทีฟทุกสัปดาห์ รายงานเดือนละฉบับ ลูกค้าที่ติดต่อเข้ามา ต้นทุนต่อราย และสิ่งที่จะเปลี่ยนต่อไป</Stage>
          </div>
        </Section>

        <Section alt>
          <SectionHeader eyebrow="สิ่งที่รวมอยู่" title="บริการบริหาร Google Ads และ Meta Ads รวมอะไรบ้าง" />
          <div className="lb-table-wrap" style={{ maxWidth: 860, margin: '0 auto' }}>
            <table className="lb-table">
              <thead><tr><th scope="col">รวมอยู่ทุกเดือน</th><th scope="col">ความหมายสำหรับคุณ</th></tr></thead>
              <tbody>
                <tr><td>บริหารบัญชี</td><td>แคมเปญ Search, Performance Max และ Meta สร้างและดูแลโดยทีมของเราในกรุงเทพฯ</td></tr>
                <tr><td>Conversion tracking</td><td>ติดตั้ง ตรวจสอบ และดูแลให้ตัวเลขตรงความจริง</td></tr>
                <tr><td>ครีเอทีฟโฆษณาใหม่</td><td>โฆษณาใหม่ทุกเดือน ทดสอบทีละตัวแปร</td></tr>
                <tr><td>Search term และ negative keyword</td><td>บล็อกคำค้นหาที่เปลืองงบทุกสัปดาห์</td></tr>
                <tr><td>Retargeting</td><td>กลุ่มคนที่รู้จักคุณแล้วบน Google และ Meta</td></tr>
                <tr><td>รายงานรายเดือน</td><td>ลูกค้าที่ติดต่อเข้ามา ต้นทุนต่อราย และขั้นต่อไป</td></tr>
              </tbody>
            </table>
          </div>
          <p className="lb-note" style={{ textAlign: 'center', marginTop: 16 }}>ค่าโฆษณาแยกต่างหาก คุณจ่ายตรงให้ Google และ Meta และเราไม่บวกเพิ่ม</p>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="โฆษณา SEO หรือ GEO"
            title="โฆษณา SEO และ GEO: ธุรกิจของคุณต้องการแบบไหน"
            lede="โฆษณามีประโยชน์ระหว่างที่ SEO กำลังสร้างผล และคุ้มที่จะเปิดต่อเมื่อ SEO เห็นผลแล้ว หลายธุรกิจทำมากกว่าหนึ่งอย่าง"
          />
          <div className="lb-table-wrap">
            <table className="lb-table">
              <thead>
                <tr><th scope="col"><span className="sr-only">คำถาม</span></th><th scope="col">Google Ads และ Meta Ads</th><th scope="col">SEO</th><th scope="col">GEO (AI Search)</th></tr>
              </thead>
              <tbody>
                <tr><td>ลูกค้าติดต่อเข้ามาครั้งแรก</td><td>มักเป็นเดือนแรก</td><td>มักใช้เวลาสามถึงหกเดือนสำหรับคีย์เวิร์ดที่แข่งขันสูงในกรุงเทพฯ</td><td>การอ้างอิงมักเริ่มขยับในเดือนที่สองถึงสี่ บางรายการใช้เวลานานกว่านั้น</td></tr>
                <tr><td>เมื่อคุณหยุดจ่าย</td><td>ลูกค้าหยุดติดต่อเข้ามา</td><td>อันดับยังทำงานต่อไปอีกระยะหนึ่ง</td><td>การถูกกล่าวถึงยังทำงานต่อไปอีกระยะหนึ่ง</td></tr>
                <tr><td>เหมาะที่สุดสำหรับ</td><td>ความต้องการตอนนี้ การเปิดตัว ข้อเสนอใหม่</td><td>ต้นทุนต่อลูกค้าที่ติดต่อเข้ามาที่ลดลงตามเวลา</td><td>การถูกกล่าวถึงเมื่อลูกค้าถาม ChatGPT, Perplexity หรือ Google AI</td></tr>
              </tbody>
            </table>
          </div>
          <div className="lb-ctarow lb-btn-row" style={{ justifyContent: 'center' }}>
            <Button variant="outline" to="/th/seo/">รับทำ SEO ในกรุงเทพฯ</Button>
            <Button variant="outline" to="/th/geo/">Generative Engine Optimization (GEO)</Button>
          </div>
        </Section>

        <Section alt>
          <SectionHeader eyebrow="เหมาะกับใคร" title="เอเจนซี่ Google Ads ในกรุงเทพฯ ของเราทำงานกับใคร" />
          <div className="lb-g2">
            <div className="lb-fit yes">
              <h3 className="lb-h3">เหมาะกับคุณ ถ้า</h3>
              <ul className="lb-list lg">
                <li>คุณทำธุรกิจคลินิก ร้านอาหาร โรงแรม หรืออสังหาริมทรัพย์ และตอบลูกค้าที่ติดต่อเข้ามาได้ภายในวันเดียวกัน</li>
                <li>คุณอยากรู้ว่าลูกค้าแต่ละรายมีต้นทุนเท่าไร ไม่ใช่ได้กี่คลิก</li>
                <li>คุณให้สิทธิ์เราเข้าถึงบัญชีโฆษณาและเว็บไซต์ของคุณได้</li>
              </ul>
            </div>
            <div className="lb-fit no">
              <h3 className="lb-h3">ไม่เหมาะ ถ้า</h3>
              <ul className="lb-list lg dash">
                <li>คุณต้องการการรับประกันผลตอบแทนจากค่าโฆษณา ไม่มีใครขายสิ่งนี้ให้คุณได้อย่างซื่อสัตย์</li>
                <li>งบการตลาดต่ำกว่า ฿30,000 ต่อเดือน</li>
                <li>คุณต้องการโฆษณานอก Google และ Meta เราไม่ซื้อสื่อ TikTok, LINE หรือ programmatic</li>
              </ul>
            </div>
          </div>
          <div className="lb-narrow-copy lbp-pm-copy" style={{ maxWidth: 860, margin: '36px auto 0' }}>
            <p className="lb-body-lg">
              โฆษณาด้านสุขภาพมีกฎเพิ่มเติม Google จำกัดโฆษณาทางการแพทย์และการรักษาหลายประเภท (<Ext href="https://support.google.com/adspolicy/answer/176031">นโยบายด้านสุขภาพและยาของ Google</Ext>) และ Meta ก็มีข้อจำกัดของตัวเอง เราวางแผนแคมเปญคลินิกให้อยู่ในกฎเหล่านี้ตั้งแต่วันแรก ดู<Link to="/th/industries/">อุตสาหกรรมที่เราทำงานด้วย</Link>
            </p>
            <p className="lb-body-lg">
              ออกบูธในงานแฟร์หรืองานเอ็กซ์โปในประเทศไทยใช่ไหม งานนั้นเป็นข้อเสนอแยก: <Link to="/th/lead-gen-partner">หาลูกค้าสำหรับงานแฟร์และงานเอ็กซ์โป</Link> อยากเห็นภาพรวมก่อนไหม <Link to="/th/about">ทำความรู้จักทีมงาน</Link>
            </p>
          </div>
        </Section>

        <Section narrow>
          <SectionHeader eyebrow="FAQ" title="คำถามที่พบบ่อยเรื่องรับทำโฆษณา Google Ads" />
          <FAQ items={faqs} qAs="h3" />
        </Section>

        <LeadForm
          eyebrow="ตรวจบัญชีโฆษณา"
          title="รับการตรวจบัญชี Google Ads และ Meta Ads ฟรี"
          lede="ส่งเว็บไซต์ของคุณมา และบอกเราว่าคุณใช้บัญชีโฆษณาอะไรอยู่ เราตรวจแคมเปญและ conversion tracking ของคุณ แล้วส่งรายการที่เราจะแก้เป็นอย่างแรกให้ ฟรี และผลการตรวจเป็นของคุณ"
          subject="New Ads Audit Request (Performance Marketing page) — Locully [TH]"
          ctaLabel="ขอตรวจบัญชีโฆษณา"
          extraFields={[
            { name: 'platforms', label: 'คุณใช้บัญชีโฆษณาอะไรอยู่', placeholder: 'Google Ads, Meta Ads หรือทั้งสองอย่าง' },
            { name: 'monthly_spend', label: 'ค่าโฆษณาต่อเดือนโดยประมาณ', placeholder: 'เช่น ฿50,000' },
          ]}
          idPrefix="pm"
          footer={(
            <p className="lb-note" style={{ textAlign: 'center', marginTop: 24 }}>
              อยากรู้ด้วยไหมว่าคุณปรากฏใน ChatGPT อย่างไร อ่านเรื่อง<Link to="/th/audit/">การตรวจ GEO</Link> หรือ<Link to="/th/contact/">ติดต่อเรา</Link>
            </p>
          )}
        />

        <Footer />
      </Page>
    </>
  );
}
