import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Icon,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import '@/brand/pages/contact.css';

const URL = 'https://www.locully.org/contact/';
const ORG_ID = 'https://www.locully.org/#organization';

// Contact channels. WhatsApp number from WhatsAppPopup.jsx; Calendly URL as used across the site.
const PHONE_DISPLAY = '+66 62 695 9444';
const PHONE_TEL = 'tel:+66626959444';
const EMAIL = 'admin@locully.org';
const WHATSAPP_URL = 'https://wa.me/66626959444';
const CALENDLY_URL = 'https://calendly.com/locully/30min';
const REPLY_TIME = 'We usually reply within one working day';

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
      name: 'Contact Locully',
      description: 'Contact details and company information for Locully, a digital marketing agency in Bangkok, Thailand.',
      inLanguage: 'en',
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org/' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: URL },
      ],
    },
  ],
};

const channels = [
  { icon: 'chat', label: 'Phone', value: PHONE_DISPLAY, href: PHONE_TEL },
  { icon: 'mail', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'chat', label: 'WhatsApp', value: 'Chat with us on WhatsApp', href: WHATSAPP_URL, external: true },
  { icon: 'calendar', label: 'Book a call', value: 'Pick a 30-minute slot', href: CALENDLY_URL, external: true },
  { icon: 'pin', label: 'Office', value: 'Bangkok, Thailand' },
];

const services = [
  {
    icon: 'search', title: 'SEO', to: '/seo/', link: 'See our SEO services',
    body: 'Technical, on-page and content work that helps you get found on Google for the searches your customers run.',
  },
  {
    icon: 'bot', title: 'GEO and AI visibility', to: '/geo/', link: 'See our GEO services',
    body: 'Work that makes your business easier for ChatGPT, Perplexity and Google AI Overviews to name.',
  },
  {
    icon: 'target', title: 'Performance marketing', to: '/performance-marketing/', link: 'See performance marketing',
    body: 'Google Ads and Meta Ads, planned and managed by our Bangkok team.',
  },
];

const ContactAside = () => (
  <div className="lbp-contact-aside">
    <h3 className="lb-h3">Other ways to reach us</h3>
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
    <p className="lbp-contact-note">{REPLY_TIME}, in English or Thai.</p>
  </div>
);

const details = [
  ['Legal name', 'Locully Co. Ltd.'],
  ['Trading as', 'Locully'],
  ['Founded', '2020, rebranded as Locully in 2025'],
  ['Founder and CEO', <Link key="f" to="/rachaphon-sakchiraphong/">Rachaphon Sakchiraphong (Sunny)</Link>],
  ['Address', ADDRESS],
  ['Phone', <a key="p" href={PHONE_TEL}>{PHONE_DISPLAY}</a>],
  ['Email', <a key="e" href={`mailto:${EMAIL}`}>{EMAIL}</a>],
  ['Website', <a key="w" href="https://www.locully.org/">www.locully.org</a>],
  ['Languages', 'English and Thai'],
];

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Locully | SEO & GEO Agency in Bangkok</title>
      <meta name="description" content="Contact Locully, an SEO and GEO agency in Bangkok, Thailand. Call +66 62 695 9444, WhatsApp or send the form. We usually reply within one working day." />
      <link rel="canonical" href={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:title" content="Contact Locully | SEO & GEO Agency in Bangkok" />
      <meta property="og:description" content="Contact Locully, an SEO and GEO agency in Bangkok, Thailand. Call, WhatsApp or send the form. We usually reply within one working day." />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>

    <Page className="lbp-contact">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />

      <PageHero
        eyebrow="Contact"
        title="Contact Locully in Bangkok"
        lede={`Locully is a digital marketing agency in Bangkok, Thailand. Send the form, call, email or message us on WhatsApp. ${REPLY_TIME}.`}
      >
        <div className="lb-hero-cta lbp-contact-hero-cta">
          <Button cta />
          <Button variant="outline" href={PHONE_TEL}>Call {PHONE_DISPLAY}</Button>
        </div>
      </PageHero>

      <LeadForm
        id="book"
        idPrefix="contact"
        title="Get your AI audit from our Bangkok team"
        lede="Send your name, email and website. We'll look at how your business shows up in Google and in AI assistants, then get back to you."
        subject="New contact-page request — Locully"
        aside={<ContactAside />}
      />

      <Section>
        <SectionHeader left title="Locully company details" />
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
          title="What to contact Locully about"
          lede="Tell us which service you want to talk about. Not sure? Send the form and we'll point you to the right one."
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
          Want to know who you'll work with? <Link to="/about">Read about Locully</Link>.
        </p>
      </Section>

      <Footer />
    </Page>
  </>
);

export default ContactPage;
