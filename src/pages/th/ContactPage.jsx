import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Icon,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Hreflang } from '@/i18n';
import '@/brand/pages/contact.css';

const URL = 'https://www.locully.org/th/contact/';
const ORG_ID = 'https://www.locully.org/#organization';

// Contact channels. WhatsApp number from WhatsAppPopup.jsx; Calendly URL as used across the site.
const PHONE_DISPLAY = '+66 62 695 9444';
const PHONE_TEL = 'tel:+66626959444';
const EMAIL = 'admin@locully.org';
const WHATSAPP_URL = 'https://wa.me/66626959444';
const CALENDLY_URL = 'https://calendly.com/locully/30min';
const REPLY_TIME = 'ปกติเราตอบกลับภายในหนึ่งวันทำการ';

const TITLE = 'ติดต่อ Locully | กรุงเทพฯ ประเทศไทย';

// Facts: /Users/sunny/Locully/wiki/locully/brand.md (§1, §2). Company registration number is
// not recorded there, so it is deliberately omitted.
const ADDRESS = '92 Central Park Offices, Floor 35, Rama 4 Road, Silom, Bangrak, Bangkok 10500, Thailand';

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `${URL}#webpage`,
      url: URL,
      name: 'ติดต่อ Locully',
      description: 'ช่องทางติดต่อและข้อมูลบริษัทของ Locully เอเจนซี่การตลาดดิจิทัลในกรุงเทพฯ ประเทศไทย',
      inLanguage: 'th',
      about: { '@id': ORG_ID },
      mainEntity: { '@id': ORG_ID },
      breadcrumb: { '@id': `${URL}#breadcrumb` },
    },
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Locully Co. Ltd.',
      url: 'https://www.locully.org',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+66626959444',
          email: EMAIL,
          areaServed: 'TH',
          availableLanguage: ['en', 'th'],
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.locully.org/th/' },
        { '@type': 'ListItem', position: 2, name: 'ติดต่อเรา', item: URL },
      ],
    },
  ],
};

const channels = [
  { icon: 'chat', label: 'โทรศัพท์', value: PHONE_DISPLAY, href: PHONE_TEL },
  { icon: 'mail', label: 'อีเมล', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'chat', label: 'WhatsApp', value: 'แชตกับเราทาง WhatsApp', href: WHATSAPP_URL, external: true },
  { icon: 'calendar', label: 'นัดคุย', value: 'เลือกเวลา 30 นาที', href: CALENDLY_URL, external: true },
  { icon: 'pin', label: 'สำนักงาน', value: 'กรุงเทพฯ ประเทศไทย' },
];

const services = [
  {
    icon: 'search', title: 'SEO', to: '/th/seo/', link: 'ดูบริการรับทำ SEO',
    body: 'งาน technical, on-page และคอนเทนต์ ที่ช่วยให้คุณถูกค้นเจอบน Google ในคำค้นที่ลูกค้าของคุณใช้',
  },
  {
    icon: 'bot', title: 'GEO และ AI Search', to: '/th/geo/', link: 'ดูบริการรับทำ GEO',
    body: 'งานที่ทำให้ ChatGPT, Perplexity และ Google AI Overviews เอ่ยชื่อธุรกิจของคุณได้ง่ายขึ้น',
  },
  {
    icon: 'target', title: 'Performance Marketing', to: '/th/performance-marketing/', link: 'ดู Performance Marketing',
    body: 'Google Ads และ Meta Ads วางแผนและดูแลโดยทีมของเราในกรุงเทพฯ',
  },
];

const ContactAside = () => (
  <div className="lbp-contact-aside">
    <h3 className="lb-h3">ช่องทางอื่นในการติดต่อเรา</h3>
    <ul className="lbp-contact-list">
      {channels.map(({ icon, label, value, href, external }) => (
        <li key={label}>
          <Icon name={icon} className="lb-ic lbp-contact-ic" />
          <div>
            <span className="lbp-contact-label">{label}</span>
            {href ? (
              <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{value}</a>
            ) : (
              <span className="lbp-contact-value">{value}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
    <p className="lbp-contact-note">{REPLY_TIME} เป็นภาษาอังกฤษหรือภาษาไทย</p>
  </div>
);

const details = [
  ['ชื่อนิติบุคคล', 'Locully Co. Ltd.'],
  ['ชื่อทางการค้า', 'Locully'],
  ['ก่อตั้ง', 'ปี 2020 เปลี่ยนชื่อแบรนด์เป็น Locully ในปี 2025'],
  ['ผู้ก่อตั้งและ CEO', <Link key="f" to="/th/rachaphon-sakchiraphong/">Rachaphon Sakchiraphong (Sunny)</Link>],
  ['ที่อยู่', ADDRESS],
  ['โทรศัพท์', <a key="p" href={PHONE_TEL}>{PHONE_DISPLAY}</a>],
  ['อีเมล', <a key="e" href={`mailto:${EMAIL}`}>{EMAIL}</a>],
  ['เว็บไซต์', <a key="w" href="https://www.locully.org/th/">www.locully.org</a>],
  ['ภาษา', 'อังกฤษและไทย'],
];

const ContactPageTh = () => (
  <>
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content="ติดต่อทีม Locully ในกรุงเทพฯ ประเทศไทย โทร +66 62 695 9444 แชตทาง WhatsApp หรือส่งแบบฟอร์ม ปกติเราตอบกลับภายในหนึ่งวันทำการ" />
      <link rel="canonical" href={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content="ติดต่อทีม Locully ในกรุงเทพฯ ประเทศไทย โทร แชตทาง WhatsApp หรือส่งแบบฟอร์ม ปกติเราตอบกลับภายในหนึ่งวันทำการ" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
    <Hreflang path="/contact/" />

    <Page className="lbp-contact">
      <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'ติดต่อเรา' }]} />

      <PageHero
        eyebrow="ติดต่อเรา"
        title="ติดต่อ Locully ในกรุงเทพฯ"
        lede={`Locully คือเอเจนซี่การตลาดดิจิทัลในกรุงเทพฯ ประเทศไทย ส่งแบบฟอร์ม โทร อีเมล หรือทักเราทาง WhatsApp ได้เลย ${REPLY_TIME}`}
      >
        <div className="lb-hero-cta lbp-contact-hero-cta">
          <Button cta />
          <Button variant="outline" href={PHONE_TEL}>โทร {PHONE_DISPLAY}</Button>
        </div>
      </PageHero>

      <LeadForm
        id="book"
        idPrefix="contact"
        title="รับ AI Audit จากทีมของเราในกรุงเทพฯ"
        lede="ส่งชื่อ อีเมล และเว็บไซต์ของคุณมา เราจะดูว่าธุรกิจของคุณแสดงผลบน Google และในผู้ช่วย AI อย่างไร แล้วติดต่อกลับ"
        subject="New contact-page request — Locully [TH]"
        aside={<ContactAside />}
      />

      <Section>
        <SectionHeader left title="ข้อมูลบริษัท Locully" />
        <dl className="lbp-contact-dl">
          {details.map(([k, v]) => (
            <div key={k} className="lbp-contact-row">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section alt>
        <SectionHeader
          title="ติดต่อ Locully เรื่องอะไรได้บ้าง"
          lede="บอกเราว่าคุณอยากคุยเรื่องบริการไหน ยังไม่แน่ใจ? ส่งแบบฟอร์มมา แล้วเราจะแนะนำบริการที่เหมาะให้"
        />
        <div className="lb-g3">
          {services.map(({ icon, title, to, link, body }) => (
            <Link key={to} to={to} className="lb-card sm lb-card-link">
              <Icon name={icon} />
              <h3 className="lb-h3">{title}</h3>
              <p>{body}</p>
              <span className="lb-card-foot lb-tlink sm">{link} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
        <p className="lbp-contact-about">
          อยากรู้ว่าคุณจะได้ทำงานกับใคร? <Link to="/th/about">อ่านเกี่ยวกับ Locully</Link>
        </p>
      </Section>

      <Footer />
    </Page>
  </>
);

export default ContactPageTh;
