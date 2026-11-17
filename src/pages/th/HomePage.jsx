import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import {
  Page, Section, SectionHeader, Button, Cta, ServiceCard, Figure, FAQ, Tick,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import StepsPanel from '@/brand/StepsPanel';
import AiPromptDemo from '@/brand/AiPromptDemo';
import { CLIENT_LOGOS } from '@/data/clientLogos';
import { Hreflang } from '@/i18n';
import { DEMO } from '@/data/th/auditData';
import '@/brand/pages/home.css';

/* Thai version of src/pages/HomePage.jsx (/th/). Keep the two in step.
   Homepage — ported from the signed-off mockup (homepage-redesign-2026-09/artboards, v24).
   Copy is claims-checked and approved: change it only through ai-claims-guard-cft. */

const URL = 'https://www.locully.org/th/';
const TITLE = 'เอเจนซี่ SEO, GEO และ Performance Marketing ในกรุงเทพฯ | Locully';
const DESCRIPTION = 'Locully คือบริษัทรับทำ SEO และ GEO ในกรุงเทพฯ ประเทศไทย เราช่วยให้ธุรกิจของคุณถูกค้นเจอบน Google, ChatGPT และ AI Overviews แล้วเปลี่ยนการมองเห็นนั้นเป็นลูกค้า';
const ORG_ID = 'https://www.locully.org/#organization';


const logos = CLIENT_LOGOS;

const reviews = [
  {
    src: '/images/home/reviews/review-vincent-d.png',
    alt: 'รีวิว 5 ดาวจาก Vincent D กรรมการผู้จัดการคลินิกความงามในกรุงเทพฯ (รีวิวเป็นภาษาอังกฤษ): “We started working with Locully around five months ago for SEO services, and the results have been outstanding. Since then, we’ve seen a significant increase in inquiries — messages, emails, form submissions, and phone calls. Their team has done an excellent job, and we plan to continue partnering with them as we further strengthen our rankings.”',
  },
  {
    src: '/images/home/reviews/review-phakjira.png',
    alt: 'รีวิว 5 ดาวจาก Phakjira เจ้าของร้านอาหารอินเดียในกรุงเทพฯ และพัทยา (รีวิวเป็นภาษาอังกฤษ): “Working with Locully has been a game changer for our restaurant. Their strategies helped us increase our visibility, attract more customers, and build a strong online presence. We’ve seen a noticeable growth since partnering with them. Their team is professional, creative, and helpful. We highly recommend their services to anyone looking to grow their brand.”',
  },
  {
    src: '/images/home/reviews/review-ireen.png',
    alt: 'รีวิวจาก Ireen เจ้าของร้านอาหาร (รีวิวเป็นภาษาอังกฤษ): “Local SEO transformed our restaurant. We ranked for ‘Italian Restaurant Pattaya’. Footfall increased dramatically, people started talking about us more, we started filling out. Couldn’t recommend Sunny and his team any higher!”',
  },
];

const offer = [
  { t: 'แดชบอร์ด GEO แบบเรียลไทม์', d: 'มีล็อกอินของคุณเอง ดูได้ว่า prompt ไหนเอ่ยชื่อคุณ prompt ไหนเอ่ยชื่อคู่แข่ง และติดตามต่อเนื่องตลอดเวลา ไม่ใช่ภาพแคปหน้าจอในไฟล์ PDF' },
  { t: 'การถูกกล่าวถึงบนเว็บไซต์ภายนอกทุกเดือน', d: 'เราทำให้คุณถูกกล่าวถึงบนเว็บไซต์ภายนอกที่ AI อ้างอิงอยู่แล้วในหมวดธุรกิจของคุณ ส่งมอบเป็น URL จริงที่คุณคลิกดูได้' },
  { t: 'Technical SEO และ schema', d: 'การเข้าถึงของ crawler ความเร็วเว็บไซต์ โครงสร้าง ลิงก์ภายใน และ structured data ที่ช่วยให้ Google เข้าใจธุรกิจของคุณ' },
  { t: 'คอนเทนต์ที่เขียนมาเพื่อให้ถูกอ้างอิง', d: 'หน้าเว็บที่ตอบคำถามของคนที่กำลังจะซื้อแบบตรงประเด็น ในรูปแบบที่ AI หยิบไปใช้ได้ทันที เขียนทั้งภาษาอังกฤษและภาษาไทยในจุดที่จำเป็น' },
  { t: 'โครงสร้างเว็บไซต์และลิงก์ภายใน', d: 'โครงสร้างที่บอก Google และ AI ว่าคุณทำอะไร และหน้าไหนตอบคำถามข้อไหน' },
  { t: 'รายงานลูกค้าที่ติดต่อเข้ามารายเดือน', d: 'สายโทรเข้า ฟอร์ม และการจอง พร้อมต้นทุนของแต่ละรายการ ภาษาเข้าใจง่าย ไม่มีกราฟที่สวยแต่ไม่บอกอะไร' },
  {
    t: 'คุยกับ Sunny ได้โดยตรง',
    d: 'คนที่วางกลยุทธ์ให้คุณ คือคนเดียวกับที่ตอบข้อความของคุณ ไม่มี account manager คั่นกลาง',
    link: { to: '/th/about', label: 'เกี่ยวกับ Locully' },
  },
];

const faqs = [
  {
    q: 'งานด้าน AI Search ต้องทำอะไรบ้าง',
    a: 'งานเทคนิคและคอนเทนต์แบบเดียวกับที่บริษัทรับทำ SEO ที่ดีทำ บวกงานอีกชั้นหนึ่ง คือทำให้ผู้ช่วย AI อ่านเว็บไซต์ของคุณได้ เชื่อถือธุรกิจของคุณ และอ้างอิงคุณเมื่อมีคนขอให้แนะนำ ในทางปฏิบัติคือเรื่องการเข้าถึงของ crawler, structured data หน้าเว็บที่หยิบไปอ้างอิงได้ และการถูกกล่าวถึงบนแหล่งข้อมูลภายนอกที่ AI อ้างอิงอยู่แล้ว',
  },
  {
    q: 'Generative Engine Optimization (GEO) คืออะไร',
    a: 'GEO หรือที่บางคนเรียกว่า Answer Engine Optimization คือการปรับให้ธุรกิจถูกเอ่ยชื่อในคำตอบของ AI แทนที่จะแค่ติดอันดับในรายการลิงก์ Google ยังสำคัญ และเรายังทำ SEO แบบดั้งเดิมอยู่ GEO คืออีกชั้นที่ต่อยอดขึ้นไป และในกรุงเทพฯ เรื่องนี้ยังอยู่ในช่วงเริ่มต้น',
  },
  {
    q: 'นานแค่ไหนกว่าจะเริ่มมีลูกค้าติดต่อเข้ามา',
    a: 'เดือนแรกคือการวัดผล จึงยังไม่มีอะไรขยับ จากงาน AI Search ที่เราทำมาจนถึงตอนนี้ การอ้างอิงมักเริ่มขยับในเดือนที่ 2 ถึง 4 บางรายใช้เวลานานกว่านั้น อันดับบน Google มักใช้เวลา 3 ถึง 6 เดือนสำหรับคำค้นที่แข่งขันสูงในกรุงเทพฯ ส่วนโฆษณามักเริ่มมีลูกค้าติดต่อเข้ามาในเดือนแรก หลังจากระบบ tracking พร้อมใช้งาน',
  },
  {
    q: 'รับประกันได้ไหมว่า ChatGPT จะแนะนำธุรกิจของฉัน',
    a: 'ไม่ได้ และควรระวังใครก็ตามที่บอกว่าทำได้ AI เลือกแหล่งข้อมูลเอง และเปลี่ยนได้โดยไม่บอกล่วงหน้า สิ่งที่เราทำได้คือวัดว่าวันนี้คุณอยู่ตรงไหน แก้สิ่งที่ทำให้ AI หยิบคุณไปอ้างอิงไม่ได้ ทำให้คุณถูกกล่าวถึงในที่ที่ทำให้ AI อ้างอิงคุณได้ และให้คุณเห็นความเปลี่ยนแปลงทุกเดือน',
  },
  {
    q: 'ค่าบริการของ Locully เท่าไหร่',
    a: 'ขึ้นอยู่กับขอบเขตงาน เราเสนอราคาหลังจากคุยกันฟรีหนึ่งครั้ง ค่าบริการ SEO รายเดือนในกรุงเทพฯ แตกต่างกันมาก จึงควรเทียบจากงานที่ส่งมอบจริงในแต่ละเดือน ไม่ใช่ดูแค่ราคา',
  },
  {
    q: 'รับงานธุรกิจนอกประเทศไทยไหม',
    a: 'รับ ลูกค้าส่วนใหญ่ของเราอยู่ในกรุงเทพฯ และเรามีงานในสิงคโปร์ด้วย เราตั้งค่าการวัดผลแยกตามตลาด เพราะคำตอบของ AI และผลการค้นหาต่างกันในแต่ละประเทศ',
  },
  {
    q: 'ใครเป็นเจ้าของบัญชีและข้อมูล',
    a: 'คุณเป็นเจ้าของตั้งแต่วันแรก บัญชีโฆษณา analytics, Search Console และ Google Business Profile อยู่ในชื่อของคุณทั้งหมด และข้อมูลในแดชบอร์ดเป็นของคุณ ส่งออกได้ทุกเมื่อ ถ้าเราเลิกทำงานร่วมกัน คุณเก็บไว้ได้ทุกอย่าง',
  },
  {
    q: 'ตรวจ GEO ฟรีได้อะไรบ้าง',
    a: 'ส่งเว็บไซต์ของคุณมาให้เรา ภายใน 5 วันทำการคุณจะได้รับรายงาน เรานำคำถามจริงของลูกค้าคุณไปถาม ChatGPT, Perplexity และ Google AI แล้วแสดงให้เห็นว่าคุณปรากฏที่ไหน ใครถูกเอ่ยชื่อแทนคุณ และเราจะแก้อะไรก่อน รายงานเป็นของคุณ ไม่ว่าคุณจะจ้างเราหรือไม่',
  },
];

const schemaWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${URL}#website`,
  url: URL,
  name: 'Locully',
  description: DESCRIPTION,
  inLanguage: 'th',
  publisher: { '@id': ORG_ID },
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${URL}#faq`,
  url: URL,
  inLanguage: 'th',
  isPartOf: { '@id': `${URL}#website` },
  about: { '@id': ORG_ID },
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/** Vertical VSL: one click layer toggles play/pause; once started it stops 64px
    above the bottom so the native controls stay reachable. Orange progress bar on top. */
const Vsl = () => {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused || v.ended) {
      const p = v.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <div className="lbh-vwrap">
      <video
        ref={ref}
        className="lbh-video"
        controls
        playsInline
        preload="none"
        poster="https://jyzmhv9lp5ywshyh.public.blob.vercel-storage.com/media/locully-vsl-poster-1080-vXkZAWH3jcLea8c0YXXro1ZejIz2xs.jpg"
        src="https://jyzmhv9lp5ywshyh.public.blob.vercel-storage.com/media/locully-vsl-1080-JfHqvpdJjfI7fQEBvBAMN3gukroLqj.mp4"
        aria-label="วิดีโอ Locully: เราช่วยให้ธุรกิจในกรุงเทพฯ ถูกค้นเจอบน Google และถูก ChatGPT เอ่ยชื่อได้อย่างไร"
        onPlay={() => { setPlaying(true); setStarted(true); }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => {
          const v = e.currentTarget;
          if (v.duration) setProgress(v.currentTime / v.duration);
        }}
      />
      <div className="lbh-vprog" aria-hidden="true">
        <div className="lbh-vprog-f" style={{ width: `${(progress * 100).toFixed(2)}%` }} />
      </div>
      <button
        type="button"
        className={`lbh-vplay${started ? ' started' : ''}${playing ? ' playing' : ''}`}
        aria-label={playing ? 'หยุดวิดีโอ Locully ชั่วคราว' : 'เล่นวิดีโอ Locully ความยาว 2 นาที 23 วินาที'}
        onClick={toggle}
      >
        <span className="lbh-vplay-c" aria-hidden="true">
          <svg viewBox="0 0 26 30" fill="none"><path d="M25 15L1 29.3V0.7L25 15Z" fill="#ffffff" /></svg>
        </span>
        <span className="lbh-vplay-l" aria-hidden="true">ดูวิดีโอ · 2:23</span>
      </button>
    </div>
  );
};

export default function HomePageTh() {
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
        <script type="application/ld+json">{JSON.stringify(schemaWebsite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
      </Helmet>
      <Hreflang path="/" />

      <Page className="lbh-page">
        {/* 1 · Above the fold: text + CTA left, vertical VSL right */}
        <header id="top" className="lbh-hero">
          <div className="lb-w lbh-hero-grid">
            <div className="lbh-hero-text">
              <h1 className="lb-h1">Bangkok GEO Agency<br />ทำให้ AI แนะนำบริษัทคุณ</h1>
              <p className="lb-lede">
                Locully คือบริษัทรับทำ SEO และ AI Search ในกรุงเทพฯ เราช่วยธุรกิจเปลี่ยนการมองเห็นบน Google และแพลตฟอร์ม AI ให้เป็นลูกค้าและรายได้
              </p>
              <Cta
                className="lbh-hero-cta"
                note="เรานำคำถามจริงของลูกค้าคุณไปถาม ChatGPT, Perplexity และ Google AI แล้วแสดงให้เห็นว่าใครถูกเอ่ยชื่อแทนคุณ ฟรี และรายงานเป็นของคุณ"
              />
            </div>
            <div className="lbh-hero-media">
              <Vsl />
            </div>
          </div>
        </header>

        {/* Social proof: client logo marquee */}
        <section className="lbh-logos" aria-labelledby="lbh-logos-label">
          <div className="lb-w lbh-logos-head">
            <p id="lbh-logos-label" className="lbh-logos-label">ส่วนหนึ่งของธุรกิจที่เราเคยทำงานด้วย</p>
          </div>
          {/* Focusable so keyboard users can pause the scroll (focus-within pauses it). */}
          <div className="lbh-marq" tabIndex={0} role="region" aria-label="โลโก้ลูกค้า (เลื่อนอัตโนมัติ โฟกัสหรือวางเมาส์เพื่อหยุด)">
            <ul className="lbh-marq-track">
              {logos.map((l) => (
                <li className="lbh-logo" key={l.src}><img src={l.src} alt={l.alt} width="178" height="89" /></li>
              ))}
              {logos.map((l) => (
                <li className="lbh-logo" key={`${l.src}-dup`} aria-hidden="true"><img src={l.src} alt="" width="178" height="89" /></li>
              ))}
            </ul>
          </div>
          <div className="lb-w">
            <div className="lbh-trust">
              <span><b>ก่อตั้ง</b> 2020 · <b>รีแบรนด์</b> 2025</span>
              <span><b>กรุงเทพฯ</b> · ประเทศไทยและสิงคโปร์</span>
            </div>
          </div>
        </section>

        {/* 2 · What we do */}
        <Section alt id="services">
          <SectionHeader
            eyebrow="สิ่งที่เราทำ"
            title="SEO, GEO และโฆษณา ทั้งสามอย่างจบที่ลูกค้าติดต่อเข้ามา"
            lede="ตัวเลข traffic รายงานง่าย แต่เรารายงานสายโทรเข้า ฟอร์ม และการจอง พร้อมต้นทุนของแต่ละรายการ"
          />
          <div className="lb-g3">
            <ServiceCard icon="search" title="รับทำ SEO">
              <p>แก้ปัญหาเทคนิค คอนเทนต์ ความน่าเชื่อถือของเว็บไซต์ และกลยุทธ์ เพื่อให้คุณติดอันดับในคำค้นที่พาลูกค้าเข้ามา</p>
              <p className="lbh-card-link"><Button variant="text" to="/th/seo/">ดูบริการ SEO</Button></p>
            </ServiceCard>
            <ServiceCard icon="chart" title="AI Search (GEO)">
              <p>Generative Engine Optimization (GEO) คืองานที่ทำให้ AI เอ่ยชื่อคุณได้ง่ายขึ้น เมื่อมีคนถาม ChatGPT, Perplexity, Gemini หรือ Google AI Overviews ว่าใครดีที่สุดในหมวดธุรกิจของคุณ วัดผลทุกเดือน ไม่ใช่เดาเอา</p>
              <p className="lbh-card-link"><Button variant="text" to="/th/geo/">ดูบริการ AI Search</Button></p>
            </ServiceCard>
            <ServiceCard icon="target" title="Google Ads & Meta Ads">
              <p>Search, Performance Max และโฆษณาบนโซเชียล บริหารโดยดูต้นทุนต่อลูกค้า ไม่ใช่ต้นทุนต่อคลิก มีประโยชน์ระหว่างที่ SEO กำลังสร้างผล และคุ้มที่จะทำต่อเมื่อ SEO ออกผลแล้ว</p>
              <p className="lbh-card-link"><Button variant="text" to="/th/performance-marketing/">ดูบริการ Performance Marketing</Button></p>
            </ServiceCard>
          </div>
        </Section>

        {/* 2b · Pull marketing */}
        <Section>
          <SectionHeader className="lbh-sh-30" eyebrow="Pull marketing" title="เลิกไล่ตามคนที่ไม่ได้กำลังมองหา" />
          <div className="lbh-pull-copy">
            <p>การตลาดส่วนใหญ่เริ่มจากกลุ่มเป้าหมาย แล้วยิงข้อความใส่ เราเลือกเริ่มจากความต้องการ</p>
            <p>มีคนต้องการหมอฟัน โรงแรม อสังหาริมทรัพย์ หรือซัพพลายเออร์ เขาค้นหาบน Google ถาม AI หรือตอบสนองต่อโฆษณา ในจังหวะที่ความต้องการเกิดขึ้น</p>
            <p className="lbh-em">เราทำให้ลูกค้าของเราอยู่ตรงนั้นเมื่อจังหวะนั้นมาถึง</p>
          </div>
          <div className="lbh-pull-flow" role="img" aria-label="ต้องการ แล้วค้นหาหรือถาม แล้วค้นพบ แล้วเชื่อถือ แล้วติดต่อ">
            {['ต้องการ', 'ค้นหา / ถาม', 'ค้นพบ', 'เชื่อถือ', 'ติดต่อ'].map((step, i, all) => (
              <React.Fragment key={step}>
                <span className={`lbh-pf${i === all.length - 1 ? ' last' : ''}`}>{step}</span>
                {i < all.length - 1 && (
                  <span className="lbh-pf-arrow" aria-hidden="true">
                    <span className="lbh-pf-arrow-d">→</span><span className="lbh-pf-arrow-m">↓</span>
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
          <p className="lbh-pull-close">นี่คือเหตุผลที่ SEO, AI Search และโฆษณาอยู่ในทีมเดียวกัน ทั้งสามคือสามวิธีที่ทำให้คุณอยู่ตรงนั้นเมื่อความต้องการเกิดขึ้น</p>
        </Section>

        {/* 3 · Why this matters now */}
        <Section alt>
          <SectionHeader
            eyebrow="ทำไมเรื่องนี้สำคัญตอนนี้"
            title="ลูกค้าของคุณไม่ได้ค้นหาที่เดียวอีกแล้ว"
          />
          <div className="lbh-problem">
            <div>
              <p>บางคนค้นใน Google บางคนดูใน Maps บางคนถาม ChatGPT, Gemini หรือ Perplexity</p>
              <p>ช่องทางเปลี่ยน แต่ความตั้งใจไม่เปลี่ยน เขาต้องการบางอย่าง กำลังมองหาธุรกิจที่ใช่ และจะมีใครสักคนถูกเลือก</p>
              <p className="lbh-em">หน้าที่ของ Locully คือทำให้คุณถูกมองเห็นในจังหวะที่ความต้องการเกิดขึ้น</p>
              <p className="lbh-problem-link">
                <Button variant="text" cta>ดูว่า ChatGPT เอ่ยชื่อใครแทนคุณ</Button>
              </p>
            </div>
            <div>
              <AiPromptDemo demo={DEMO} className="lbh-pd" />
            </div>
          </div>
        </Section>

        {/* 4 · Who it's for */}
        <Section tight>
          <SectionHeader className="lbh-sh-44" eyebrow="เหมาะกับใคร" title="Locully ทำงานกับใคร" lede="เราขอบอกตรงๆ" />
          <div className="lb-g2">
            <div className="lb-fit yes">
              <h3 className="lb-h3">เหมาะกับคุณ ถ้า</h3>
              <ul className="lb-list">
                <li>ลูกค้าของคุณค้นหาสิ่งที่คุณขายอยู่แล้ว เช่น คลินิก ธุรกิจโรงแรมและบริการ อสังหาริมทรัพย์ บริการวิชาชีพ และอื่นๆ</li>
                <li>คุณบอกได้ว่าลูกค้าใหม่หนึ่งรายมีมูลค่าเท่าไหร่สำหรับคุณ</li>
                <li>คุณต้องการลูกค้าที่ติดต่อเข้ามา และยินดีให้วัดผลจากตัวเลขนั้น</li>
                <li>ฝั่งคุณมีคนอนุมัติคอนเทนต์และให้สิทธิ์เข้าถึงบัญชีกับเราได้</li>
                <li>คุณพร้อมให้เวลา SEO และ AI Search สะสมผลมากพอ โดยทั่วไปคือ 6 เดือนขึ้นไป</li>
              </ul>
            </div>
            <div className="lb-fit no">
              <h3 className="lb-h3">ไม่เหมาะ ถ้า</h3>
              <ul className="lb-list dash">
                <li>คุณต้องการการรับประกันอันดับ หรือรับประกันว่า ChatGPT จะเอ่ยชื่อคุณ ไม่มีใครขายสิ่งนี้ให้คุณได้อย่างซื่อสัตย์</li>
                <li>คุณต้องการลูกค้าติดต่อเข้ามาภายในสัปดาห์นี้ นั่นคือโจทย์ของโฆษณา และเราจะบอกคุณตรงๆ</li>
                <li>คุณต้องการรีแบรนด์ทั้งหมด สร้างเว็บไซต์ใหม่ หรือให้ดูแลโซเชียลมีเดียแบบวันต่อวัน</li>
                <li>คุณต้องการกำหนดกลยุทธ์เอง แล้วให้เราทำตามรายการงานที่สั่ง</li>
                <li>งบการตลาดต่ำกว่า ฿30,000 ต่อเดือน</li>
              </ul>
            </div>
          </div>
          <p className="lbh-more"><Button variant="text" to="/th/industries/">ดูอุตสาหกรรมที่เราทำงานด้วย</Button></p>
        </Section>

        {/* 5 · How it works */}
        <Section alt id="how">
          <SectionHeader
            className="lbh-sh-24"
            eyebrow="ขั้นตอนการทำงาน"
            title="Locully เปลี่ยนการมองเห็นบน Search ให้เป็นลูกค้าอย่างไร"
            lede="4 ขั้นตอน ไม่ว่างานนั้นจะเป็น SEO, AI Search หรือโฆษณา คุณได้เห็นขั้นตอนแรกฟรี ก่อนจ่ายแม้แต่บาทเดียว"
          />

          <StepsPanel
            steps={[
              {
                title: 'วัดผล',
                lead: 'เราดูก่อนว่าคุณอยู่ตรงไหน ก่อนจะลงมือสร้างอะไร',
                bullets: [
                  'เราตกลงร่วมกันว่าคำถามจริงที่ลูกค้าของคุณถามก่อนซื้อมีอะไรบ้าง',
                  'เราตรวจว่าคุณติดอันดับไหนบน Google และ ChatGPT, Perplexity กับ Google AI เอ่ยชื่อคุณหรือไม่',
                  'เราตรวจระบบ tracking ของคุณ เพื่อให้นับลูกค้าที่ติดต่อเข้ามาได้ทุกราย',
                  'คุณเห็นว่าคุณปรากฏที่ไหน ไม่ปรากฏที่ไหน และใครได้ไปแทน',
                ],
                preload: ['/images/home/evidence/prompt-tracker.jpg'],
                media: (
                  <Figure
                    dark
                    crop
                    src="/images/home/evidence/prompt-tracker.jpg"
                    alt="ตัวติดตาม prompt แสดง prompt ของคนที่กำลังจะซื้อ 11 ข้อ พร้อมประวัติการรันและเปอร์เซ็นต์การมองเห็น"
                    imgProps={{ width: 1362, height: 1464 }}
                    caption={<>ตัวติดตามจริงของคลินิกแห่งหนึ่งในกรุงเทพฯ prompt ของคนที่กำลังจะซื้อ 11 ข้อ รันข้อละ 14 ครั้ง <b>มี 3 ข้อที่ติดป้าย LOST</b> เราแสดงข้อเหล่านั้นด้วย เพราะตัวเลขที่ไม่มีวันแพ้ไม่ใช่การวัดผล</>}
                  />
                ),
              },
              {
                title: 'แก้ไข',
                lead: 'ส่วนที่ไม่หวือหวา แต่การขยับครั้งแรกมักมาจากตรงนี้',
                bullets: [
                  'ปัญหาด้านเทคนิคและการ index',
                  'โครงสร้างเว็บไซต์และลิงก์ภายใน',
                  'คอนเทนต์ที่ยังขาดในคำค้นของคนที่กำลังจะซื้อ',
                ],
                media: (
                  <div className="lbh-fixcard">
                    <div className="lbh-fixcard-t">สิ่งที่เราแก้ก่อน</div>
                    <ul className="lbh-bl">
                      <li>หน้าเว็บที่ Search และ AI ดึงข้อมูลไม่ได้หรืออ่านไม่เข้าใจ</li>
                      <li>structured data ที่ขาดหายหรือไม่ถูกต้อง</li>
                      <li>สัญญาณ entity ที่อ่อน ทำให้ Google และ AI ไม่แน่ใจว่าคุณคือใคร</li>
                      <li>crawler ที่ถูกบล็อก และข้อผิดพลาดในการ index</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'วางตำแหน่ง',
                lead: 'AI อ้างอิงแหล่งข้อมูลที่มันเชื่อถืออยู่แล้ว',
                bullets: [
                  'เราหาไดเรกทอรี บทความรวมรายชื่อ เว็บไซต์รีวิว และสื่อ ที่ลูกค้าของคุณและ AI เชื่อถือ',
                  'เราทำให้คุณได้มีชื่ออยู่ในนั้น ได้ลิงก์สำหรับ Google และได้การถูกกล่าวถึงสำหรับ AI',
                  'ทุกตำแหน่งที่ได้ เราส่งกลับให้คุณเป็น URL จริง',
                ],
                preload: ['/images/home/evidence/ai-cited-domains.jpg'],
                media: (
                  <Figure
                    src="/images/home/evidence/ai-cited-domains.jpg"
                    alt="ตารางทุกโดเมนที่ AI อ้างอิงในหมวดธุรกิจหนึ่ง โดยติดป้ายกำกับลูกค้าและคู่แข่งหนึ่งราย"
                    imgProps={{ width: 1708, height: 976 }}
                    caption={<>ทุกเว็บไซต์ที่ AI อ้างอิงในหมวดธุรกิจหนึ่ง เรียงตามลำดับ <b>นี่คือรายชื่อที่เราทำให้คุณได้เข้าไปอยู่</b> เป็นโดเมนที่ระบุชื่อได้ ไม่ใช่แค่คำสัญญา</>}
                  />
                ),
              },
              {
                title: 'รายงาน',
                lead: 'ตัวเลขเดียวที่เรารายงาน คือลูกค้าที่ติดต่อเข้ามา',
                bullets: [
                  'แดชบอร์ดแบบเรียลไทม์ที่คุณล็อกอินดูได้ทุกเมื่อ',
                  'รายงานรายเดือนที่อ่านเข้าใจง่าย',
                  'ลูกค้าที่ติดต่อเข้ามา และต้นทุนต่อราย',
                  'สิ่งที่เราทำไปแล้ว และสิ่งที่จะทำต่อ',
                ],
                preload: ['/images/home/evidence/ai-visibility-dashboard.jpg'],
                media: (
                  <Figure
                    src="/images/home/evidence/ai-visibility-dashboard.jpg"
                    alt="แดชบอร์ด GEO แสดงอัตราการถูกกล่าวถึง อันดับเฉลี่ย การอ้างอิง และ share of voice ของคู่แข่ง"
                    imgProps={{ width: 2472, height: 1160 }}
                    caption={<>มุมมองของลูกค้าจากตัวติดตาม GEO เดือนพฤศจิกายน 2025 <b>คลินิกนี้ได้ 25% ของการถูกกล่าวถึงในกลุ่มคู่แข่ง</b> สูงที่สุดในบรรดาโรงพยาบาลและคลินิกทั้งหมดที่ติดตาม</>}
                  />
                ),
              },
            ]}
          />
          <div className="lbh-how-links">
            <Button variant="text" to="/th/seo/">ดูว่า SEO ทำงานอย่างไร</Button>
            <Button variant="text" to="/th/geo/">ดูว่า GEO ทำงานอย่างไร</Button>
          </div>
        </Section>

        {/* 6b · Testimonials */}
        <Section>
          <SectionHeader className="lbh-sh-44" eyebrow="เสียงจากลูกค้า" title="ลูกค้าของเราพูดถึงเราว่าอย่างไร" lede="ลูกค้า 3 ราย เล่าด้วยคำพูดของเขาเอง" />
          <div className="lbh-reviews">
            {reviews.map((r) => (
              <figure className="lbh-rv" key={r.src}>
                <img src={r.src} alt={r.alt} width="1200" height="840" loading="lazy" />
              </figure>
            ))}
          </div>
        </Section>

        {/* 7 · Offer stack */}
        <Section alt>
          <SectionHeader
            className="lbh-sh-46"
            eyebrow="สิ่งที่คุณได้รับ"
            title="สิ่งที่อยู่ในค่าบริการรายเดือน SEO และ AI Search ทุกแพ็กเกจ"
            lede="ไม่มีการแบ่งระดับการเข้าถึง ไม่มีค่าบริการเสริมที่โผล่มาในเดือนที่ 3"
          />
          <div className="lbh-stack-wrap">
            <div className="lb-stack">
              {offer.map((o) => (
                <div className="lb-si" key={o.t}>
                  <Tick />
                  <div>
                    <div className="lb-si-t">{o.t}</div>
                    <div className="lb-si-d">
                      {o.d}
                      {o.link && <> <Button variant="text" to={o.link.to} className="lbh-si-link sm">{o.link.label}</Button></>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Cta center />
          </div>
        </Section>

        {/* 10 · FAQ */}
        <Section id="faq">
          <SectionHeader className="lbh-sh-40" eyebrow="FAQ" title="คำถามที่ธุรกิจถามเราบ่อย" />
          <FAQ qAs="h3" items={faqs} />
        </Section>

        {/* 11 · Lead form */}
        <LeadForm
          alt={false}
          eyebrow="AI Audit"
          title="ดูว่า ChatGPT แนะนำคุณอยู่แล้วหรือยัง"
          lede="ส่งเว็บไซต์ของคุณมาให้เรา ภายใน 5 วันทำการ เราจะส่งรายงานว่าคุณปรากฏที่ไหนบน Google และในคำตอบของ AI ใครถูกเอ่ยชื่อแทนคุณ และเราจะแก้อะไรก่อน ฟรี และรายงานเป็นของคุณ"
          subject="New AI Visibility Check Request — Locully homepage [TH]"
          idPrefix="home"
          footer={<p className="lbh-more"><Button variant="text" to="/th/audit/">ดูว่า AI Audit ครอบคลุมอะไรบ้าง</Button></p>}
        />

        <Footer />
      </Page>
    </>
  );
}
