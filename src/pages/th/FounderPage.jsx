import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import { FOUNDER_PATH, FOUNDER_LINKEDIN } from '@/components/FounderCard';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Figure, List,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Hreflang } from '@/i18n';
import '@/brand/pages/about.css';

const SITE = 'https://www.locully.org';
const URL = `${SITE}/th${FOUNDER_PATH}`;
const ORG_ID = `${SITE}/#organization`;
// The Person entity keeps its English-page id so both language versions describe one entity.
const PERSON_ID = `${SITE}${FOUNDER_PATH}#person`;

const TITLE = 'Rachaphon Sakchiraphong (Sunny) | ผู้ก่อตั้ง Locully';
const DESCRIPTION = 'Rachaphon Sakchiraphong (Sunny) คือผู้ก่อตั้งและ CEO ของ Locully เอเจนซี่การตลาดดิจิทัลในกรุงเทพฯ ประเทศไทย เขาเริ่มธุรกิจนี้ในปี 2020';

// Verified live on LinkedIn, 2026-09-25. Articles are in English, so titles stay as published.
const articles = [
  {
    title: 'Brand Visibility in the AI Era: How To Ensure You’re Not Invisible',
    url: 'https://www.linkedin.com/pulse/brand-visibility-ai-era-how-ensure-youre-invisible-sakchiraphong-e9bkc',
    date: '2026-04-27',
    label: 'LinkedIn · 27 เมษายน 2026',
  },
  {
    title: 'LLMs Are Changing Search: Is Your Brand Even in the Conversation?',
    url: 'https://www.linkedin.com/pulse/llms-changing-searchis-your-brand-even-conversation-sakchiraphong-5gfdc',
    date: '2025-05-19',
    label: 'LinkedIn · 19 พฤษภาคม 2025',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'th',
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'Locully' },
      about: { '@id': PERSON_ID },
      mainEntity: { '@id': PERSON_ID },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: `${SITE}/th/` },
          { '@type': 'ListItem', position: 2, name: 'เกี่ยวกับเรา', item: `${SITE}/th/about` },
          { '@type': 'ListItem', position: 3, name: 'Rachaphon Sakchiraphong', item: URL },
        ],
      },
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Rachaphon Sakchiraphong',
      alternateName: ['Sunny', 'Sunny Sakchiraphong'],
      givenName: 'Rachaphon',
      familyName: 'Sakchiraphong',
      url: `${SITE}${FOUNDER_PATH}`,
      image: `${SITE}/sunny.jpeg`,
      jobTitle: 'Founder and CEO',
      description: 'ผู้ก่อตั้งและ CEO ของ Locully เอเจนซี่การตลาดดิจิทัลในกรุงเทพฯ ประเทศไทย',
      worksFor: { '@id': ORG_ID },
      workLocation: { '@type': 'Place', name: 'Bangkok, Thailand' },
      knowsLanguage: ['en', 'th'],
      sameAs: [FOUNDER_LINKEDIN],
    },
    ...articles.map((a) => ({
      '@type': 'Article',
      headline: a.title,
      url: a.url,
      datePublished: a.date,
      inLanguage: 'en',
      author: { '@id': PERSON_ID },
    })),
  ],
};

const FounderPageTh = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:image" content={`${SITE}/sunny.jpeg`} />
        <meta property="profile:first_name" content="Rachaphon" />
        <meta property="profile:last_name" content="Sakchiraphong" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Hreflang path={FOUNDER_PATH} />

      <Page className="lbp-founder">
        <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'เกี่ยวกับเรา', to: '/th/about' }, { label: 'Rachaphon Sakchiraphong' }]} />

        <PageHero
          eyebrow="ผู้ก่อตั้งและ CEO ของ Locully"
          title="Rachaphon Sakchiraphong (Sunny)"
          lede="Rachaphon Sakchiraphong หรือ Sunny คือผู้ก่อตั้งและ CEO ของ Locully เอเจนซี่การตลาดดิจิทัลในกรุงเทพฯ ประเทศไทย เขาเริ่มธุรกิจนี้ในปี 2020 และเปลี่ยนชื่อแบรนด์เป็น Locully ในปี 2025"
          visual={(
            <Figure
              className="lbp-founder-photo"
              src="/sunny.jpeg"
              alt="Rachaphon Sakchiraphong (Sunny) ผู้ก่อตั้งและ CEO ของ Locully"
              imgProps={{ loading: 'eager', width: 380, height: 475 }}
            />
          )}
        >
          <div className="lbp-founder-links">
            <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="lb-btn-o">
              <Linkedin style={{ width: '16px', height: '16px' }} aria-hidden="true" />
              LinkedIn
            </a>
            <Link to="/th/about" className="lb-btn-o">เกี่ยวกับ Locully</Link>
          </div>
        </PageHero>

        <Section alt narrow>
          <SectionHeader eyebrow="ประวัติ" title="เกี่ยวกับ Rachaphon Sakchiraphong" />
          <p className="lb-body-lg">
            Rachaphon Sakchiraphong ก่อตั้ง Locully ในกรุงเทพฯ เมื่อปี 2020 ชื่อนิติบุคคลคือ Locully Co. Ltd.
            และธุรกิจใช้ชื่อ Locully มาตั้งแต่ปี 2025 <Link to="/th/about">อ่านเพิ่มเติมเกี่ยวกับ Locully</Link>
          </p>
          <p className="lb-body-lg">
            Sunny เป็นคนวางกลยุทธ์ให้ลูกค้าทุกรายของ Locully งานของเขาครอบคลุมด้าน Search ซึ่งหมายถึง Google
            และผู้ช่วย AI รวมถึงโฆษณาบน Google Ads และ Meta Ads
          </p>
          <p className="lb-body-lg">
            Sunny วัดการตลาดจากสิ่งที่มันสร้างได้ คือลูกค้าที่ติดต่อเข้ามา ลูกค้าจริง และรายได้
            ยอด traffic อย่างเดียวไม่นับ
          </p>
        </Section>

        <Section narrow>
          <SectionHeader eyebrow="บทบาท" title="Rachaphon Sakchiraphong ทำอะไรที่ Locully" />
          <List large items={[
            'วางกลยุทธ์ให้ลูกค้าแต่ละรายของ Locully ทั้งด้าน Search และโฆษณา',
            'กำกับวิธีที่ Locully วัดผล GEO คือใช้ชุดคำถามของคนที่กำลังจะซื้อชุดเดิม ถามซ้ำตามรอบที่กำหนด และเปิดตรวจทุกหน้าที่ถูกอ้างอิง',
            'นำงานของ Locully ด้าน Google Search, Google Maps และผู้ช่วย AI',
          ]} />
        </Section>

        <Section alt narrow>
          <SectionHeader eyebrow="แนวคิด" title="Sunny มองการตลาดอย่างไร" />
          <blockquote className="lbp-founder-quote">“No impact on revenue = no point in marketing.”</blockquote>
          <p className="lb-body-lg" style={{ textAlign: 'center' }}>
            Sunny สร้าง Locully ขึ้นจากประโยคนี้ ถ้าการตลาดไม่ส่งผลต่อรายได้ ก็ไม่มีเหตุผลที่จะทำ
            อันดับและ traffic เป็นแค่ปัจจัยตั้งต้น ผลลัพธ์คือลูกค้าที่ติดต่อเข้ามา การจอง และรายได้
            และนั่นคือสิ่งที่ Locully รายงาน
          </p>
        </Section>

        <Section narrow>
          <SectionHeader eyebrow="งานเขียน" title="งานเขียนของ Rachaphon Sakchiraphong" />
          <ul className="lbp-founder-writing">
            {articles.map((a) => (
              <li key={a.url}>
                <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a>
                <span>{a.label}</span>
              </li>
            ))}
          </ul>
          <div className="lb-ctarow" style={{ marginTop: 28 }}>
            <Button variant="text" to="/th/blog/">อ่านเพิ่มเติมในบล็อกของ Locully</Button>
          </div>
        </Section>

        <Section narrow style={{ borderTop: '1px solid var(--lb-rule-soft)' }}>
          <SectionHeader eyebrow="โปรไฟล์" title="ชื่อและโปรไฟล์ของ Rachaphon Sakchiraphong" />
          <p className="lb-body-lg">
            Rachaphon Sakchiraphong ใช้ชื่อเล่นว่า Sunny บน LinkedIn และในเอกสารบางส่วนของ Locully
            เขาใช้ชื่อ Sunny Sakchiraphong ทั้งสองชื่อคือคนเดียวกัน ผู้ก่อตั้ง Locully
          </p>
          <div className="lbp-founder-links">
            <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="lb-btn-o">
              <Linkedin style={{ width: '16px', height: '16px' }} aria-hidden="true" />
              LinkedIn
            </a>
            <Link to="/th/about" className="lb-btn-o">หน้าบริษัท Locully</Link>
            <a href="mailto:admin@locully.org" className="lb-btn-o">
              <Mail style={{ width: '16px', height: '16px' }} aria-hidden="true" />
              admin@locully.org
            </a>
          </div>
        </Section>

        <LeadForm
          eyebrow="AI Audit"
          title="ทำงานกับทีมของ Sunny ที่ Locully"
          lede="รับ AI Audit ของคุณ ทีมของ Sunny จะดูว่า Google และผู้ช่วย AI มองธุรกิจของคุณอย่างไร"
          subject="New AI Visibility Check Request (founder page) - Locully [TH]"
        />

        <Footer />
      </Page>
    </>
  );
};

export default FounderPageTh;
