import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Cta, ServiceCard, Icon,
  FAQ, List, StatRow,
} from '@/brand/components';
import LeadForm, { LeadFormCard } from '@/brand/LeadForm';
import LogoStrip from '@/brand/LogoStrip';
import { Hreflang } from '@/i18n';
import '@/brand/pages/geo.css';

/*
 * /th/geo/ — Thai version of /geo/ (src/pages/GeoPage.jsx). Same sections, same claims.
 * Keep the two files in step: any change to a number, source or claim goes in both.
 */

const URL = 'https://www.locully.org/th/geo/';
const TITLE = 'รับทำ GEO กรุงเทพฯ | บริษัทรับทำ GEO และ AI Search | Locully';
const DESCRIPTION = 'Locully คือบริษัทรับทำ GEO ในกรุงเทพฯ เราช่วยให้ ChatGPT, Perplexity และ Google AI Overviews ค้นเจอ เชื่อถือ และอ้างอิงธุรกิจของคุณ ขอตรวจ GEO ฟรีได้เลย';

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const GOOGLE_AI_GUIDE = 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide';
const GOOGLE_AI_FEATURES = 'https://developers.google.com/search/docs/appearance/ai-features';

/* FAQ: `text` feeds FAQPage schema and must match what renders. `a` is the rendered answer. */
const faqs = [
  {
    q: 'เอเจนซี่ GEO คืออะไร',
    text: 'เอเจนซี่ GEO ช่วยให้ธุรกิจถูกค้นเจอและถูกแนะนำในคำตอบของ AI อย่าง ChatGPT, Perplexity, Gemini และ Google AI Overviews งานหลักคือการทำให้ AI เข้าถึงเว็บไซต์ได้ ข้อมูลธุรกิจตรงกันทุกที่ มีเว็บไซต์ภายนอกกล่าวถึง และมีหน้าเว็บที่ตอบคำถามได้ตรงประเด็น Locully เป็นเอเจนซี่ GEO ในกรุงเทพฯ ประเทศไทย',
  },
  {
    q: 'GEO กับ AI SEO, AEO หรือ AI Search Optimization เหมือนกันไหม',
    text: 'ในทางปฏิบัติถือว่าเหมือนกัน Generative Engine Optimization (GEO), AI SEO, AI Search Optimization, Answer Engine Optimization (AEO) และ LLM visibility ล้วนหมายถึงการทำให้ธุรกิจปรากฏในคำตอบที่ AI สร้างขึ้น Locully เรียกงานนี้ว่า GEO และถือว่าชื่ออื่นคือคำเดียวกัน เนื้องานเหมือนกันทุกอย่าง',
  },
  {
    q: 'ทำ GEO แล้วยังต้องทำ SEO อยู่ไหม',
    text: 'ยังต้องทำ GEO ต่อยอดจาก SEO Google ระบุว่าแนวทาง SEO ที่ดียังใช้ได้กับ AI Overviews และ AI Mode และสัญญาณชุดเดียวกันก็ช่วยให้ ChatGPT และ Perplexity ค้นเจอคุณ GEO เพิ่มเรื่องการถูกกล่าวถึงบนเว็บไซต์ภายนอก งาน entity และการวัดผลคำตอบของ AI Locully ทำทั้งสองอย่างควบคู่กัน',
  },
  {
    q: 'ทำ GEO ใช้เวลานานแค่ไหน',
    text: 'งานแก้ไขด้านเทคนิคและ entity เริ่มในเดือนแรก หน้าเว็บและการถูกกล่าวถึงบนเว็บไซต์ภายนอกจะค่อย ๆ สะสมในเดือนถัดไป Locully ทบทวนชุดคำถามทุกเดือนและดูแนวโน้มเป็นรายไตรมาส เราแนะนำให้ระวังใครก็ตามที่รับปากว่าจะเห็นผล GEO ภายในไม่กี่วัน',
  },
  {
    q: 'มีเอเจนซี่ไหนรับประกันได้ไหมว่า ChatGPT จะแนะนำธุรกิจของเรา',
    text: 'ไม่มี คำตอบของ AI ถูกสร้างขึ้นใหม่ทุกครั้งและเปลี่ยนไปเมื่อโมเดลอัปเดต ไม่มีเอเจนซี่ไหนรับปากได้ว่าโมเดลจะเอ่ยชื่อคุณ สิ่งที่ Locully รับปากคือเนื้องาน ขอบเขตงานชัดเจน ทำทุกเดือน และวัดผลด้วยชุดคำถามชุดเดิม คุณจึงเห็นได้ว่าผลขยับหรือไม่',
  },
  {
    q: 'วัดผลการมองเห็นบน AI Search อย่างไร',
    text: 'Locully วัดผลด้วยชุดคำถามของคนที่กำลังจะซื้อ 30 ข้อขึ้นไปต่อหนึ่งธุรกิจ และรันซ้ำตามรอบที่กำหนด แต่ละรอบจะบันทึกว่าคำตอบกล่าวถึงคุณไหม อ้างอิงเว็บไซต์ของคุณไหม และอธิบายธุรกิจของคุณถูกต้องไหม ส่วนฟีเจอร์ AI ของ Google เราติดตามในรายงานประสิทธิภาพ generative AI ของ Search Console เมื่อ property ของคุณแสดงข้อมูลนี้',
  },
  {
    q: 'ต้องมี llms.txt หรือ schema พิเศษไหม ถึงจะปรากฏในคำตอบของ AI',
    text: 'สำหรับ Google ไม่ต้องมี Google ระบุว่าไม่มีข้อกำหนดเพิ่มเติมหรือการปรับแต่งพิเศษสำหรับ AI Overviews และ AI Mode และแนวทางของ Google ระบุว่า Google Search ไม่ได้ใช้ไฟล์ llms.txt Locully ดูแล schema ตามมาตรฐาน SEO ปกติ งานที่ทำให้คำตอบของ AI ขยับคือการเข้าถึงเว็บไซต์ ข้อมูลที่ตรงกัน การถูกกล่าวถึงบนแหล่งที่น่าเชื่อถือ และหน้าเว็บที่มีประโยชน์',
    a: (
      <p>
        สำหรับ Google ไม่ต้องมี <Ext href={GOOGLE_AI_FEATURES}>Google ระบุว่า</Ext>ไม่มีข้อกำหนดเพิ่มเติมหรือการปรับแต่งพิเศษสำหรับ
        AI Overviews และ AI Mode และแนวทางของ Google ระบุว่า Google Search ไม่ได้ใช้ไฟล์ llms.txt Locully ดูแล schema
        ตามมาตรฐาน SEO ปกติ งานที่ทำให้คำตอบของ AI ขยับคือการเข้าถึงเว็บไซต์ ข้อมูลที่ตรงกัน
        การถูกกล่าวถึงบนแหล่งที่น่าเชื่อถือ และหน้าเว็บที่มีประโยชน์
      </p>
    ),
  },
  {
    q: 'รับงานธุรกิจนอกกรุงเทพฯ ไหม',
    text: 'รับ Locully อยู่ที่กรุงเทพฯ และทำงานกับธุรกิจทั่วประเทศไทยและในสิงคโปร์ ChatGPT, Perplexity และ Gemini ตอบคำถามจากทุกที่ เนื้องานหลักจึงเหมือนกัน ส่วนภาษา ไดเรกทอรีท้องถิ่น และฟีเจอร์ AI ของ Google แตกต่างกันในแต่ละประเทศ เราจึงวางแผนแยกตามตลาด',
  },
  {
    q: 'บริการรับทำ GEO ราคาเท่าไร',
    text: 'Locully ให้บริการ GEO แบบค่าบริการรายเดือน ขอบเขตงานขึ้นกับตลาดของคุณ จำนวนคำถามที่ติดตาม และภาษาที่ต้องการ เริ่มต้นด้วยการตรวจ GEO ฟรี ซึ่งจะบอกว่างานที่ต้องทำมีอะไรบ้าง ก่อนที่คุณจะตัดสินใจ',
  },
];

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'บริการรับทำ GEO (Generative Engine Optimization)',
  alternateName: ['รับทำ GEO', 'AI SEO', 'AI Search Optimization', 'Answer Engine Optimization (AEO)', 'Generative Engine Optimization'],
  serviceType: 'Generative Engine Optimization (GEO)',
  description: DESCRIPTION,
  url: URL,
  inLanguage: 'th',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: [
    { '@type': 'City', name: 'Bangkok' },
    { '@type': 'Country', name: 'Thailand' },
    { '@type': 'Country', name: 'Singapore' },
  ],
  availableLanguage: ['en', 'th'],
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${URL}#faq`,
  inLanguage: 'th',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.text },
  })),
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.locully.org/th/' },
    { '@type': 'ListItem', position: 2, name: 'GEO', item: URL },
  ],
};

const signals = [
  { icon: 'code', title: 'AI เข้าถึงเว็บไซต์ได้', body: 'AI อ้างอิงได้เฉพาะหน้าที่เข้าถึงและอ่านได้ ถ้าบล็อก crawler หรือเนื้อหาโหลดผ่านสคริปต์เท่านั้น คุณอาจหลุดออกไปตั้งแต่ก่อนที่คำตอบจะถูกเขียน' },
  { icon: 'globe', title: 'Entity ชัดเจน', body: 'Entity คือสิ่งที่ระบบเข้าใจว่าธุรกิจของคุณคืออะไร ชื่อ ประเภทธุรกิจ ที่ตั้ง และบริการต้องตรงกันทุกที่ ทั้งบนเว็บไซต์ Google Business Profile ไดเรกทอรี และโซเชียล ข้อมูลที่ไม่ตรงกันทำให้โมเดลไม่แน่ใจว่าคุณคือใคร' },
  { icon: 'users', title: 'เว็บไซต์ภายนอกยืนยันให้', body: 'AI ให้น้ำหนักกับสิ่งที่เว็บไซต์อื่นพูดถึงคุณอย่างมาก ไม่ใช่แค่สิ่งที่คุณพูดถึงตัวเอง ในคำตอบของ AI ที่เราติดตาม รีวิว ลิสต์ “best of” ไดเรกทอรี สื่อท้องถิ่น และกระทู้ในฟอรัม ถูกใช้เป็นแหล่งอ้างอิงซ้ำแล้วซ้ำอีก ถ้าคู่แข่งอยู่ในนั้นแต่คุณไม่อยู่ โมเดลก็จะเอ่ยชื่อคู่แข่ง', extra: <>Locully อยู่ในรายชื่อเอเจนซี่ GEO ในกรุงเทพฯ บน<Ext href="https://www.getaiso.com/best-geo-agencies/bangkok">ไดเรกทอรีเอเจนซี่ AI Search ของ Aiso</Ext></> },
  { icon: 'doc', title: 'หน้าเว็บที่พร้อมเป็นคำตอบ', body: 'AI หยิบข้อความที่ตอบคำถามได้ตรง ๆ ไปใช้ หน้าที่บอกชัดว่าคุณทำอะไร ให้ใคร ที่ไหน และมาตรฐานระดับไหน ถูกหยิบไปอ้างอิงได้ง่ายกว่าหน้าที่มีแต่สโลแกน' },
];

const compareRows = [
  ['เป้าหมาย', 'ทำให้หน้าเว็บติดอันดับในผลการค้นหาของ Google', 'ทำให้ธุรกิจถูกกล่าวถึงและถูกอ้างอิงในคำตอบของ AI'],
  ['แสดงผลที่ไหน', 'Google Search และ Google Maps', 'ChatGPT, Perplexity, Gemini, Claude, Microsoft Copilot, Google AI Overviews และ AI Mode'],
  ['อะไรเป็นตัวตัดสิน', 'ความเกี่ยวข้อง ลิงก์ คุณภาพของหน้า', 'เหมือนกัน และเพิ่มการถูกกล่าวถึงบนเว็บไซต์ภายนอกกับ entity ที่ชัดเจน'],
  ['อะไรคือผู้ชนะ', 'หน้าเว็บ', 'แบรนด์ ที่มีข้อความให้หยิบไปอ้างอิงได้'],
  ['วัดผลอย่างไร', 'อันดับ คลิก Search Console', 'ชุดคำถามชุดเดิม: ถูกกล่าวถึง ถูกอ้างอิง และถูกอธิบายว่าอย่างไร'],
  ['ระยะเวลา', 'หลักเดือน', 'หลักเดือน โดยต่อยอดจากพื้นฐาน SEO'],
];

const workstreams = [
  { icon: 'target', title: 'GEO baseline', body: 'เราสร้างชุดคำถามของคนที่กำลังจะซื้อจากวิธีที่ลูกค้าของคุณค้นหาจริง ทั้งภาษาอังกฤษและภาษาไทยเมื่อจำเป็นทั้งสองภาษา แล้วบันทึกว่าวันนี้ AI เอ่ยชื่อใคร และเชื่อถือแหล่งข้อมูลไหน' },
  { icon: 'code', title: 'แก้ไขการเข้าถึงและเทคนิค', body: 'เราตรวจว่า AI crawler เข้าถึงและอ่านหน้าสำคัญของคุณได้ เริ่มจาก robots การเรนเดอร์ ความเร็ว และการ index ส่วน structured data เราจัดให้เรียบร้อยตามมาตรฐาน SEO ปกติ' },
  { icon: 'pin', title: 'Entity และโปรไฟล์ที่ตรงกัน', body: 'เราปรับชื่อ ประเภทธุรกิจ ที่อยู่ และบริการให้ตรงกัน ทั้งบนเว็บไซต์ Google Business Profile และไดเรกทอรีที่ AI อ่าน ธุรกิจเดียว ข้อมูลชุดเดียว' },
  { icon: 'doc', title: 'หน้าเว็บที่พร้อมเป็นคำตอบ', body: 'เราเขียนใหม่และสร้างหน้าที่ตอบคำถามก่อนซื้อของลูกค้าคุณ ทุกหน้าเปิดด้วยคำตอบตรง ๆ และระบุชื่อธุรกิจ บริการ และที่ตั้งของคุณ' },
  { icon: 'link', title: 'การถูกกล่าวถึงบนเว็บไซต์ภายนอก', body: 'เราไล่ตามเว็บไซต์ที่ AI อ้างอิงอยู่แล้วในหมวดธุรกิจของคุณ ทั้งลิสต์ ไดเรกทอรี รีวิว และบทความ ทุกตำแหน่งที่ได้มาถูกบันทึกพร้อม URL ที่เปิดดูได้จริง' },
  { icon: 'chart', title: 'รายงานและคอลรายเดือน', body: 'ทุกเดือนคุณจะได้รู้ว่า AI พูดถึงคุณว่าอย่างไร เราเปลี่ยนอะไรไปบ้าง และขั้นต่อไปคืออะไร คุณได้คุยกับคนที่ลงมือทำงานจริง' },
];

const stages = [
  {
    n: '01', when: 'สัปดาห์ที่ 1–2', title: 'Baseline',
    points: ['เราสร้างชุดคำถามของคุณและรันครั้งแรก', 'เราทำแผนที่ว่า AI เอ่ยชื่อใคร และอ้างอิงแหล่งข้อมูลไหน'],
    out: 'คุณเห็นว่าตัวเองอยู่ตรงไหนเมื่อเทียบกับคู่แข่งโดยตรง',
  },
  {
    n: '02', when: 'สัปดาห์ที่ 3–4', title: 'วางแผนและแก้ไขชุดแรก',
    points: ['เราตกลงลำดับความสำคัญร่วมกับคุณ', 'งานแก้ไขด้านเทคนิคและ entity เริ่มทันที'],
    out: 'สิ่งที่เปลี่ยนได้เร็วที่สุดจะถูกทำก่อน',
  },
  {
    n: '03', when: 'เดือนที่ 2–3', title: 'หน้าเว็บและการถูกกล่าวถึง',
    points: ['หน้าใหม่และหน้าที่เขียนใหม่ขึ้นออนไลน์ตามกำหนด', 'เริ่มงานบนเว็บไซต์ภายนอก'],
    out: 'เรารันชุดคำถามซ้ำและปรับแผน',
  },
  {
    n: '04', when: 'เดือนที่ 3 เป็นต้นไป', title: 'สะสมผล',
    points: ['เราขยายไปสู่คำถามใหม่และแหล่งข้อมูลใหม่', 'เราเก็บสิ่งที่ได้ผลไว้'],
    out: 'GEO สะสมผลต่อเนื่อง เราจึงประเมินกันเป็นรายไตรมาส',
  },
];

const measures = [
  { icon: 'chat', t: 'ชุดคำถาม (prompt set)', d: 'คำถามจริงของคนที่กำลังจะซื้อ 30 ข้อขึ้นไปต่อหนึ่งธุรกิจ แบ่งตามช่วง: กำลังสำรวจ กำลังเปรียบเทียบ พร้อมจอง' },
  { icon: 'link', t: 'ถูกกล่าวถึง vs ถูกอ้างอิง', d: 'คำตอบเอ่ยชื่อคุณไหม ใส่ลิงก์ของคุณไหม เรานับแยกกัน' },
  { icon: 'chart', t: 'Share of voice', d: 'คุณถูกเอ่ยชื่อบ่อยแค่ไหนเมื่อเทียบกับคู่แข่งโดยตรงในคำถามชุดเดียวกัน' },
  { icon: 'tick', t: 'ถูกอธิบายว่าอย่างไร', d: 'การถูกเอ่ยชื่อพร้อมราคา ที่ตั้ง หรือบริการที่ผิดคือปัญหา เราจึงตรวจเรื่องนี้ด้วย' },
  { icon: 'calendar', t: 'รันตามรอบและระบุวันที่', d: 'เราเก็บคำตอบของ ChatGPT ตามรอบที่กำหนด เดือนนี้จึงเทียบกับเดือนก่อนได้อย่างยุติธรรม และเมื่อ Search Console ของคุณแสดงข้อมูล เราติดตามฟีเจอร์ AI ของ Google ด้วย' },
  { icon: 'trend', t: 'ผลลัพธ์ทางธุรกิจ', d: 'เราเชื่อมการมองเห็นเข้ากับลูกค้าที่ติดต่อเข้ามา การจอง และการนัดปรึกษา จากบันทึกการจองของคุณเองหรือ GA4' },
];

/* Illustration only: shows the four things one dated run records. Not client data. */
const runChecks = [
  { k: 'ถูกกล่าวถึง', q: 'ชื่อของคุณอยู่ในคำตอบไหม', v: 'ใช่', tone: 'yes' },
  { k: 'ถูกอ้างอิง', q: 'คำตอบใส่ลิงก์เว็บไซต์ของคุณไหม', v: 'ไม่', tone: 'no' },
  { k: 'อธิบายถูกต้อง', q: 'บริการ ราคา และที่ตั้งถูกไหม', v: 'ใช่', tone: 'yes' },
  { k: 'คู่แข่งที่ถูกเอ่ยชื่อ', q: 'มีใครอีกบ้างในคำตอบ', v: '3', tone: 'num' },
];

const testItems = [
  'คุณไม่เคยลองถาม ChatGPT หรือ Perplexity ให้แนะนำธุรกิจแบบของคุณ',
  'เมื่อลองถาม ธุรกิจของคุณไม่ปรากฏ',
  'เว็บไซต์ของคุณไม่มีคำตอบที่ชัดเจนสำหรับคำถามที่ลูกค้าถามก่อนซื้อ',
  'ชื่อ ที่อยู่ หรือบริการของคุณไม่ตรงกันระหว่างเว็บไซต์ Google Business Profile และไดเรกทอรี',
  'คุณไม่อยู่ในลิสต์ “best of” และเว็บรีวิวในหมวดธุรกิจของคุณ',
  'แทบไม่มีลูกค้าบอกว่าเจอคุณผ่าน AI',
  'คุณไม่รู้ว่าคู่แข่งปรากฏในคำตอบ AI ข้อไหนบ้าง',
  'หน้าสำคัญของคุณไม่ได้อัปเดตมาเกินหนึ่งปี',
];

const band = (n) => {
  if (n <= 2) return { tone: 'good', title: 'พื้นฐานแข็งแรง', msg: 'คำตอบของ AI เปลี่ยนได้ตลอด จึงควรวัดผลต่อเนื่อง การตรวจฟรีจะบอกว่าคุณยังมีช่องโหว่ตรงไหน' };
  if (n <= 5) return { tone: 'mid', title: 'มีช่องว่างที่ต้องปิด', msg: 'คู่แข่งอาจถูกเอ่ยชื่อในคำตอบที่คุณไม่อยู่ การตรวจฟรีจะบอกว่าคำตอบไหนและเพราะอะไร' };
  return { tone: 'risk', title: 'AI แทบมองไม่เห็นคุณ', msg: 'เรื่องนี้แก้ได้ การตรวจฟรีจะบอกว่าควรเริ่มจากตรงไหน' };
};

const SelfTest = () => {
  const [checked, setChecked] = useState(() => testItems.map(() => false));
  const count = checked.filter(Boolean).length;
  const touched = checked.some(Boolean);
  const b = band(count);
  const toggle = (i) => setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)));

  return (
    <div className="lbp-geo-test">
      <ul className="lbp-geo-test-list">
        {testItems.map((item, i) => (
          <li key={i}>
            <label className={checked[i] ? 'on' : undefined}>
              <input type="checkbox" checked={checked[i]} onChange={() => toggle(i)} />
              <span className="lbp-geo-box" aria-hidden="true" />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className={`lbp-geo-score ${touched ? b.tone : 'idle'}`} aria-live="polite">
        <div className="lbp-geo-score-n">{count}<span>จาก 8 ข้อ</span></div>
        {touched ? (
          <p><strong>{b.title}</strong> {b.msg}</p>
        ) : (
          <p>ติ๊กข้อที่ตรงกับธุรกิจของคุณ ผลลัพธ์จะแสดงตรงนี้</p>
        )}
      </div>
    </div>
  );
};

export default function GeoPageTh() {
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
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>
      <Hreflang path="/geo/" />

      <Page className="lbp-geo">
        <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'GEO' }]} />

        {/* Hero */}
        <PageHero
          eyebrow="GEO · Generative Engine Optimization · กรุงเทพฯ"
          title="รับทำ GEO กรุงเทพฯ ให้ ChatGPT และ Google AI แนะนำธุรกิจของคุณ"
          lede="Locully คือเอเจนซี่ GEO ในกรุงเทพฯ ประเทศไทย Generative Engine Optimization (GEO) หรือที่บางคนเรียกว่า AI SEO คืองานที่ทำให้ ChatGPT, Perplexity และ Google AI Overviews ค้นเจอ เชื่อถือ และอ้างอิงธุรกิจของคุณได้ง่ายขึ้น"
          visual={(
            <div className="lb-hero-form">
              <LeadFormCard subject="New AI Visibility Check Request (GEO page hero) — Locully [TH]" idPrefix="geo-hero">
                <p className="lb-hero-form-t">ขอรับผลตรวจ GEO ฟรี</p>
                <p className="lb-hero-form-d">เราตรวจว่าผู้ช่วย AI ตอบอย่างไรเมื่อลูกค้าของคุณถามหาธุรกิจแบบของคุณ แล้วส่งสิ่งที่พบให้คุณ</p>
              </LeadFormCard>
            </div>
          )}
        >
          <p className="lb-body-lg lbp-geo-hero-line">เราทำ SEO มาตั้งแต่ปี 2020 วันนี้เราทำงานเดียวกันในคำตอบของ AI</p>
          <Cta note="ฟรี เราตรวจว่า AI ตอบคำถามเกี่ยวกับธุรกิจของคุณอย่างไร แล้วส่งสิ่งที่พบให้คุณ" />
          <p className="lb-note lbp-geo-updated">อัปเดตเดือนพฤศจิกายน 2026</p>
        </PageHero>

        <LogoStrip />

        {/* In short */}
        <Section tight narrow>
          <div className="lb-callout lbp-geo-tldr">
            <span className="lb-label">สรุปสั้น ๆ</span>
            <p>
              Locully คือเอเจนซี่ GEO ในกรุงเทพฯ เรารับทำ Generative Engine Optimization (GEO)
              ให้ธุรกิจบริการในประเทศไทยและสิงคโปร์ งานมี 4 ส่วน:
            </p>
            <List items={[
              'AI crawler อ่านเว็บไซต์ของคุณได้',
              'ข้อมูลธุรกิจของคุณตรงกันทุกที่',
              'เว็บไซต์ภายนอกที่ AI เชื่อถือกล่าวถึงคุณ',
              'หน้าเว็บของคุณตอบคำถามของคนที่กำลังจะซื้อได้ตรงประเด็น',
            ]} />
            <p>
              เราวัดผลด้วยชุดคำถามจริงของลูกค้าชุดเดิม รันซ้ำตามรอบ และรายงานว่า AI พูดถึงคุณว่าอย่างไรจริง ๆ
              ไม่มีเอเจนซี่ไหนรับปากได้ว่าโมเดลจะเอ่ยชื่อคุณ
            </p>
          </div>
        </Section>

        {/* Definition */}
        <Section>
          <SectionHeader eyebrow="ความหมาย" title="เอเจนซี่ GEO ทำอะไร" />
          <div className="lb-narrow-copy lbp-geo-copy">
            <p className="lb-body-lg">
              เอเจนซี่ GEO ทำให้ผู้ช่วย AI แนะนำธุรกิจได้ง่ายขึ้น เมื่อมีคนถาม ChatGPT ว่า
              “โรงเรียนนานาชาติที่ดีที่สุดในกรุงเทพฯ” หรือ “เอเจนต์อสังหาฯ เจ้าไหนดีสำหรับชาวต่างชาติย่านสุขุมวิท”
              ผู้ช่วย AI จะเขียนคำตอบเดียว และเอ่ยชื่อธุรกิจเพียงสองสามราย
              เอเจนซี่ GEO ทำงานกับสัญญาณที่ตัดสินว่าชื่อเหล่านั้นคือใคร
            </p>
            <h3 className="lb-h3">งานเดียว หลายชื่อเรียก</h3>
            <List large items={[
              <><strong>GEO (Generative Engine Optimization)</strong> ชื่อนี้มาจากงานวิจัยปี 2023 ของ Pranjal Aggarwal และคณะ เรื่อง <Ext href="https://arxiv.org/abs/2311.09735">“GEO: Generative Engine Optimization”</Ext> ซึ่งตีพิมพ์ในงาน KDD 2024</>,
              <><strong>AI SEO</strong> และ <strong>AI Search Optimization</strong></>,
              <><strong>AEO</strong> (Answer Engine Optimization)</>,
              <><strong>LLM visibility</strong></>,
            ]} />
            <p className="lb-body-lg">ทั้งหมดคืองานเดียวกัน Locully เรียกว่า GEO และให้บริการเป็นบริการเดียว</p>
            <h3 className="lb-h3">GEO เพิ่มอะไรจาก SEO</h3>
            <p className="lb-body-lg">
              GEO อยู่บนพื้นฐานของ SEO และต่อยอดจากมัน หน้าเว็บและสัญญาณที่ทำให้ติดอันดับ Google
              ก็เป็นข้อมูลให้คำตอบของ AI ด้วย GEO เพิ่มส่วนที่ SEO มักข้ามไป:
            </p>
            <List large items={[
              'การถูกกล่าวถึงบนเว็บไซต์ภายนอก',
              'ความสอดคล้องของ entity',
              'การวัดว่าโมเดลพูดถึงคุณว่าอย่างไร',
            ]} />
          </div>
        </Section>

        {/* Why */}
        <Section alt>
          <SectionHeader
            eyebrow="สิ่งที่เปลี่ยนไป"
            title="ทำไม AI Search จึงเปลี่ยนว่าใครได้ลูกค้า"
            lede="วันนี้คำตอบมาถึงก่อนการคลิก คนถามคำถามแล้วอ่านคำตอบเดียว ธุรกิจที่อยู่ในคำตอบนั้นมีโอกาสได้ลูกค้าติดต่อเข้ามามากที่สุด"
          />
          <StatRow className="lbp-geo-stats" stats={[
            { n: '900M', l: 'ผู้ใช้ ChatGPT ต่อสัปดาห์ ณ กุมภาพันธ์ 2026' },
            { n: '8% vs 15%', l: 'ของการเข้าใช้ Google ในสหรัฐฯ จบด้วยการคลิกผลการค้นหาแบบเดิม เมื่อมีสรุปจาก AI เทียบกับเมื่อไม่มี' },
            { n: '1%', l: 'ของการเข้าใช้เหล่านั้นคลิกลิงก์ในสรุปจาก AI' },
          ]} />
          <div className="lb-narrow-copy lbp-geo-copy lbp-geo-after">
            <p className="lb-note">
              แหล่งข้อมูล:{' '}
              <Ext href="https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users">ประกาศของ OpenAI รายงานโดย TechCrunch</Ext>;{' '}
              <Ext href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/">Pew Research Center, กรกฎาคม 2025</Ext>
            </p>
            <p className="lb-body-lg">
              การติดอันดับอย่างเดียวจึงได้ผลน้อยกว่าเดิม และการถูกเอ่ยชื่อในคำตอบสำคัญมากขึ้น
              ตัวเลขฉบับเต็ม (บทความภาษาอังกฤษ):
            </p>
            <List large items={[
              <Link key="a" to="/blog/how-many-people-use-chatgpt/">มีคนใช้ ChatGPT กี่คน</Link>,
              <Link key="b" to="/blog/ai-search-statistics/">รวมสถิติ AI Search</Link>,
              <Link key="c" to="/blog/zero-click-search-statistics/">สถิติ zero-click search</Link>,
            ]} />
          </div>
          <Cta center note="ฟรี ดูว่าคำตอบของ AI ข้อไหนพูดถึงคุณ และข้อไหนพูดถึงคู่แข่ง" />
        </Section>

        {/* Mechanics */}
        <Section>
          <SectionHeader
            eyebrow="กลไก"
            title="AI Search เลือกเอ่ยชื่อธุรกิจไหนอย่างไร"
            lede="AI Search เอ่ยชื่อธุรกิจที่มันค้นเจอ เข้าใจ และตรวจสอบได้ ChatGPT, Perplexity และ Google AI Overviews ค้นเว็บระหว่างตอบ ดึงแหล่งข้อมูลมาจำนวนหนึ่ง แล้วเขียนคำตอบจากแหล่งเหล่านั้น มี 4 สัญญาณที่ตัดสินว่าธุรกิจของคุณอยู่ในกลุ่มนั้นหรือไม่"
          />
          <div className="lb-g2">
            {signals.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title}>
                <p>{s.body}</p>
                {s.extra && <p>{s.extra}</p>}
              </ServiceCard>
            ))}
          </div>
          <div className="lb-narrow-copy lbp-geo-after">
            <p className="lb-body-lg">
              อ่านรายละเอียดเพิ่มได้ใน <Link to="/blog/how-ai-chooses-sources-to-cite/">AI เลือกแหล่งข้อมูลมาอ้างอิงอย่างไร</Link>{' '}
              (ภาษาอังกฤษ) มีความต่างหนึ่งที่สำคัญ: <strong>การอ้างอิง (citation)</strong> คือคำตอบของ AI ใส่ลิงก์เว็บไซต์ของคุณ
              ส่วน<strong>การถูกกล่าวถึง (mention)</strong> คือชื่อของคุณปรากฏในข้อความ Locully ติดตามทั้งสองอย่างแยกกัน
            </p>
          </div>
        </Section>

        {/* GEO vs SEO */}
        <Section alt>
          <SectionHeader eyebrow="GEO vs SEO" title="GEO vs SEO: อะไรเปลี่ยน อะไรไม่เปลี่ยน" />
          <div className="lb-narrow-copy lbp-geo-copy">
            <p className="lb-body-lg">GEO และ SEO ใช้พื้นฐานเดียวกัน และ GEO เพิ่มงานต่อยอดขึ้นไป</p>
            <List large items={[
              <><Ext href={GOOGLE_AI_GUIDE}>แนวทางของ Google เรื่องฟีเจอร์ generative AI</Ext> ระบุว่าแนวทาง SEO ที่ดียังใช้ได้กับ AI Overviews และ AI Mode</>,
              'Google ยังระบุว่าไม่ต้องสนใจ “ทางลัด” อย่างไฟล์ข้อความพิเศษสำหรับ AI เทคนิคการหั่นเนื้อหา และการสร้างการกล่าวถึงปลอม',
              'เราเห็นด้วย Locully ไม่ขายทางลัด',
            ]} />
          </div>
          <div className="lb-table-wrap lbp-geo-table">
            <table className="lb-table">
              <thead>
                <tr><th scope="col"><span className="lbp-geo-sr">หัวข้อ</span></th><th scope="col">SEO</th><th scope="col">GEO</th></tr>
              </thead>
              <tbody>
                {compareRows.map(([k, seo, geo]) => (
                  <tr key={k}><th scope="row">{k}</th><td>{seo}</td><td>{geo}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lb-narrow-copy lbp-geo-after">
            <p className="lb-body-lg">
              สำหรับเจ้าของคลินิก อ่านการเปรียบเทียบนี้ได้ที่{' '}
              <Link to="/blog/geo-vs-seo-clinics-bangkok/">GEO vs SEO สำหรับคลินิกในกรุงเทพฯ</Link> (ภาษาอังกฤษ)
            </p>
          </div>
          <div className="lb-ctarow lb-ctastrip">
            <p className="lb-body-lg lb-em lbp-geo-strip">อยากรู้ไหมว่าวันนี้ ChatGPT พูดถึงธุรกิจของคุณว่าอย่างไร</p>
            <Button cta />
          </div>
        </Section>

        {/* What's included */}
        <Section>
          <SectionHeader
            eyebrow="บริการ"
            title="บริการรับทำ GEO ของเรามีอะไรบ้าง"
            lede="บริการ GEO ของ Locully เป็นค่าบริการรายเดือนที่มีขอบเขตงานชัดเจน ทุกงานครอบคลุม 6 ส่วน"
          />
          <div className="lb-g3">
            {workstreams.map((w) => (
              <ServiceCard key={w.title} icon={w.icon} title={w.title}>{w.body}</ServiceCard>
            ))}
          </div>
          <Cta center note="ฟรี ผลตรวจจะบอกว่าธุรกิจของคุณควรเริ่มจากข้อไหนก่อน" />
        </Section>

        {/* Process */}
        <Section alt>
          <SectionHeader
            eyebrow="ขั้นตอน"
            title="ขั้นตอนการทำ GEO กับ Locully"
            lede="มี 4 ช่วง สิ่งแรกที่คุณได้คือภาพที่ชัดเจนว่าวันนี้คุณอยู่ตรงไหน การมองเห็นจะตามมาหลังจากลงมือทำงาน"
          />
          <ol className="lbp-geo-steps">
            {stages.map((s) => (
              <li key={s.n} className="lbp-geo-step">
                <span className="lbp-geo-step-dot" aria-hidden="true">{s.n}</span>
                <div className="lbp-geo-step-card">
                  <span className="lbp-geo-step-when">{s.when}</span>
                  <h3 className="lb-h3">{s.title}</h3>
                  <List items={s.points} />
                  <p className="lbp-geo-step-out">{s.out}</p>
                </div>
              </li>
            ))}
          </ol>
          <Cta center note="ขั้นแรกฟรี ไม่มีข้อผูกมัด" />
        </Section>

        {/* Measurement */}
        <Section>
          <SectionHeader
            eyebrow="การวัดผล"
            title="เราวัดผลการมองเห็นบน AI Search อย่างไร"
            lede="ชุดคำถามชุดเดิม รันซ้ำตามรอบ ทุกตัวเลขที่เรารายงานมาพร้อมคำถามที่ใช้วัดและวันที่ที่วัด"
          />
          <div className="lbp-geo-m">
            <figure className="lbp-geo-run">
              <span className="lbp-geo-run-lab">หนึ่งคำถาม · หนึ่งรอบที่ระบุวันที่</span>
              <blockquote className="lbp-geo-run-q">“เอเจนต์อสังหาฯ เจ้าไหนดีที่สุดสำหรับชาวต่างชาติย่านสุขุมวิท”</blockquote>
              <ul className="lbp-geo-run-list">
                {runChecks.map((c) => (
                  <li key={c.k}>
                    <div>
                      <strong>{c.k}</strong>
                      <span>{c.q}</span>
                    </div>
                    <em className={c.tone}>{c.v}</em>
                  </li>
                ))}
              </ul>
              <figcaption>ภาพตัวอย่างแสดงสิ่งที่แต่ละรอบบันทึก ไม่ใช่ข้อมูลลูกค้า</figcaption>
            </figure>
            <ul className="lbp-geo-m-grid">
              {measures.map((m) => (
                <li key={m.t}>
                  <Icon name={m.icon} className="lbp-geo-m-ic" />
                  <div>
                    <h3 className="lb-h3">{m.t}</h3>
                    <p>{m.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Cta center note="ฟรี รอบแรกของคุณ ใช้คำถามจริงของลูกค้าคุณ" />
        </Section>

        {/* Self-test */}
        <Section>
          <SectionHeader
            eyebrow="แบบทดสอบ"
            title="AI Search มองเห็นธุรกิจของคุณไหม ลองทำแบบทดสอบ"
            lede="ติ๊กทุกข้อที่ตรงกับธุรกิจของคุณวันนี้ ยิ่งติ๊กมาก ยิ่งมีโอกาสให้เก็บเกี่ยวมาก"
          />
          <SelfTest />
          <div className="lb-ctarow lbp-geo-after">
            <p className="lb-body-lg lbp-geo-strip">
              อยากลงลึกเอง ลองใช้{' '}
              <Link to="/blog/ai-search-audit-clinic-bangkok/">เช็กลิสต์ตรวจ AI Search 10 ข้อ</Link> (ภาษาอังกฤษ)
              ที่อธิบายทีละข้อ
            </p>
            <Button cta />
          </div>
        </Section>

        {/* Fit */}
        <Section alt>
          <SectionHeader
            eyebrow="เหมาะกับใคร"
            title="GEO เหมาะกับธุรกิจแบบไหน"
            lede="GEO ได้ผลดีที่สุดกับธุรกิจที่ลูกค้าถามหาคำแนะนำก่อนซื้อ และความไว้วางใจเป็นตัวตัดสินการขาย"
          />
          <div className="lb-g2 lbp-geo-fit">
            <div className="lb-fit yes">
              <h3 className="lb-h3">เหมาะ</h3>
              <List large items={[
                'คลินิกและผู้ให้บริการด้านสุขภาพ ที่คนไข้หาข้อมูลก่อนจอง',
                'ร้านอาหาร โรงแรม และแบรนด์ฮอสพิทาลิตี้ในพื้นที่แข่งขันสูง',
                'บริษัทและเอเจนต์อสังหาริมทรัพย์ที่ดูแลผู้ซื้อทั้งไทยและต่างชาติ',
                'ธุรกิจบริการมืออาชีพ: ที่ปรึกษา โรงเรียน ผู้เชี่ยวชาญเฉพาะทาง',
                'ธุรกิจที่ทำ SEO อยู่แล้ว แต่ยังไม่ได้ปรับตัวรับ AI Search',
                'ธุรกิจที่ดูแลลูกค้าที่ใช้ภาษาอังกฤษและลูกค้าต่างชาติในไทยหรือสิงคโปร์',
              ]} />
            </div>
            <div className="lb-fit no">
              <h3 className="lb-h3">ไม่เหมาะ</h3>
              <List large dash items={[
                'สินค้าที่ราคาเป็นตัวตัดสินการขายเพียงอย่างเดียว',
                'ใครก็ตามที่ต้องการผลลัพธ์ภายใน 30 วัน ผลของ GEO ต้องใช้เวลาสะสมหลายเดือน',
              ]} />
            </div>
          </div>
          <Cta center note="ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด" />
        </Section>

        {/* FAQ */}
        <Section>
          <SectionHeader eyebrow="FAQ" title="คำถามที่พบบ่อยเกี่ยวกับ GEO" />
          <FAQ qAs="h3" items={faqs.map((f) => ({ q: f.q, a: f.a || f.text }))} />
        </Section>

        {/* Lead form */}
        <LeadForm
          alt
          eyebrow="ตรวจ GEO ฟรี"
          title="ขอรับผลตรวจ GEO ฟรี"
          lede="บอกเว็บไซต์ของคุณให้เราทราบ เราจะตรวจว่าผู้ช่วย AI ตอบอย่างไรเมื่อลูกค้าของคุณถามหาธุรกิจแบบของคุณ แล้วส่งสิ่งที่พบให้คุณ ไม่มีค่าใช้จ่าย ไม่มีข้อผูกมัด"
          subject="New AI Visibility Check Request (GEO page) — Locully [TH]"
          idPrefix="geo"
        />

        <Footer />
      </Page>
    </>
  );
}
