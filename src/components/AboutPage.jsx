import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import FounderCard, { FOUNDER_DISPLAY, FOUNDER_PATH, FOUNDER_LINKEDIN } from './FounderCard';
import {
  Page, PageHero, Section, SectionHeader, Button, Cta, ServiceCard, Stage, FAQ,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Team } from '@/brand/Illustrations';
import '@/brand/pages/about.css';

const SITE = 'https://www.locully.org';
const URL = `${SITE}/about`;
const ORG_ID = `${SITE}/#organization`;
const PERSON_ID = `${SITE}${FOUNDER_PATH}#person`;

const TITLE = 'About Locully | SEO & GEO Agency in Bangkok, Thailand';
const DESCRIPTION = 'Locully is a Bangkok agency for SEO, GEO and Google and Meta Ads. Founded 2020, led by Rachaphon Sakchiraphong (Sunny). See who we are and how we work.';

const facts = [
  ['Legal name', 'Locully Co. Ltd.'],
  ['What Locully is', 'A digital marketing agency for SEO, GEO (AI search) and performance marketing'],
  ['Founded', '2020, rebranded as Locully in 2025'],
  ['Founder and CEO', <Link key="f" to={FOUNDER_PATH}>{FOUNDER_DISPLAY}</Link>],
  ['Headquarters', '92 Central Park Offices, Floor 35, Rama 4 Road, Silom, Bangrak, Bangkok 10500, Thailand'],
  ['Markets', 'Thailand and Singapore'],
  ['Languages', 'English and Thai'],
  ['Contact', <span key="c"><a href="mailto:admin@locully.org">admin@locully.org</a> · <a href="tel:+66626959444">+66 62 695 9444</a></span>],
];

const services = [
  {
    icon: 'search',
    title: 'SEO',
    to: '/seo/',
    link: 'SEO services',
    body: 'Locully improves how your business shows up on Google Search. The work covers technical SEO, on-page fixes, keyword research, content, internal linking and link building, in English and Thai.',
  },
  {
    icon: 'bot',
    title: 'GEO (AI search)',
    to: '/geo/',
    link: 'GEO services',
    body: 'Locully works on how AI assistants find, understand and describe your business. That includes ChatGPT, Claude, Google Gemini, Perplexity and Google AI Overviews.',
  },
  {
    icon: 'target',
    title: 'Performance marketing',
    to: '/performance-marketing/',
    link: 'Performance marketing',
    body: 'Locully plans and runs Google Ads and Meta Ads: strategy, setup, tracking, creative and budget. Your media spend goes straight to Google and Meta, and we never mark it up.',
  },
];

const steps = [
  { title: 'Measure', body: 'Locully records where you stand: Google rankings, Google Maps, and what AI assistants say about you on a fixed set of buying questions.' },
  { title: 'Fix', body: 'Locully repairs the site, the content and the business details that search engines and AI assistants read.' },
  { title: 'Place', body: 'Locully earns mentions of your business on trusted third-party sites, the kind Google and AI assistants read.' },
  { title: 'Report', body: 'Every month you get a report tied to enquiries, bookings and cost per acquisition. Same questions, same method, so each month compares cleanly with the last.' },
];

const industries = [
  { icon: 'shield', title: 'Healthcare clinics', body: 'Physiotherapy, dental, wellness, fertility and beauty clinics. Patients use AI assistants to compare clinics. Locully helps clinics show up in those answers and on Google.' },
  { icon: 'pin', title: 'Property', body: 'Developers and agents selling to Thai and international buyers, who research online before they call.' },
  { icon: 'users', title: 'Other service businesses', body: 'If your customers search before they buy, the same work applies. Ask us.' },
];

const faqs = [
  { q: 'What is Locully?', a: 'Locully is a digital marketing agency in Bangkok, Thailand. It helps businesses get found on Google Search, Google Maps and AI assistants like ChatGPT, and runs their Google and Meta advertising.' },
  { q: 'Where is Locully based?', a: 'Locully is headquartered at 92 Central Park Offices, Rama 4 Road, Silom, Bangkok. The team works from Bangkok and serves clients in Thailand and Singapore.' },
  { q: 'When was Locully founded?', a: 'The business was founded in 2020 and rebranded as Locully in 2025. The legal entity is Locully Co. Ltd.' },
  {
    q: 'Who founded Locully?',
    a: <p>Rachaphon Sakchiraphong, known as Sunny, founded Locully and runs it as CEO. <Link to={FOUNDER_PATH}>Read Sunny’s profile</Link>.</p>,
    text: 'Rachaphon Sakchiraphong, known as Sunny, founded Locully and runs it as CEO.',
  },
  {
    q: 'What is GEO?',
    a: <p>GEO (generative engine optimisation) is the work of helping AI assistants recognise a business, understand it and mention it when someone asks for a recommendation. <Link to="/geo/">How Locully does GEO</Link>.</p>,
    text: 'GEO (generative engine optimisation) is the work of helping AI assistants recognise a business, understand it and mention it when someone asks for a recommendation.',
  },
  { q: 'Does Locully guarantee results?', a: 'No. No agency can guarantee a ranking or an AI citation. Locully commits to a defined scope of work and a measurement method, reported every month.' },
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
      inLanguage: 'en',
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
      description: 'Locully is a digital marketing agency in Bangkok, Thailand, providing SEO, GEO (AI search visibility) and performance marketing on Google and Meta.',
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
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.text || f.a },
      })),
    },
  ],
};

const AboutPage = () => {
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

      <Page className="lbp-about">
        <PageHero
          eyebrow="About Locully"
          visual={<Team />}
          title="About Locully, a Bangkok agency for SEO, AI search and performance marketing"
          lede="Locully is a digital marketing agency in Bangkok, Thailand. We help businesses get found where their customers search, compare and make decisions: Google Search, Google Maps and AI assistants like ChatGPT."
        >
          <Cta note="Founded 2020 · Rebranded as Locully 2025 · Bangkok · Thailand and Singapore" />
        </PageHero>

        {/* Facts */}
        <Section alt narrow>
          <SectionHeader eyebrow="Company facts" title="Locully company facts" lede="Who we are, in one table." />
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
            eyebrow="Services"
            title="What Locully does: SEO, GEO and performance marketing"
            lede="Locully runs three services, all aimed at more enquiries from people who are already looking for you."
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
            eyebrow="How we work"
            title="How Locully works: pull marketing in four steps"
            lede="Your buyers are already searching. Locully helps them find you."
          />
          <p className="lb-body-lg lbp-about-intro">
            Locully’s approach is pull marketing. Instead of pushing messages at people and hoping they care,
            we help you get found by people who are already searching for what you sell.
          </p>
          <div className="lb-stages lbp-about-stages">
            {steps.map((s, i) => (
              <Stage key={s.title} n={i + 1} title={s.title}>{s.body}</Stage>
            ))}
          </div>
          <p className="lb-body-lg lbp-about-intro">
            Most clients work with Locully on a monthly retainer. One team runs SEO, AI visibility and paid ads
            together, so the channels feed each other.
          </p>
        </Section>

        {/* Team */}
        <Section>
          <SectionHeader eyebrow="The team" title="Who runs Locully" lede="A founder-led team in Bangkok." />
          <p className="lb-body-lg lbp-about-intro">
            Locully is led by its founder and CEO, <Link to={FOUNDER_PATH}>{FOUNDER_DISPLAY}</Link>. Sunny sets the
            strategy on every client account. A Bangkok team handles SEO, content, paid media and reporting, and all
            of it is done in-house.
          </p>
          <div className="lbp-about-people">
            <FounderCard />
            <div className="lbp-about-person lbp-about-person--noimg">
              <div className="lbp-about-body">
                <span className="lb-eyebrow">Partnerships</span>
                <h3 className="lbp-about-name">Rachanon Sakchiraphong</h3>
                <p className="lbp-about-role">Head of Partnerships, Locully</p>
                <p className="lbp-about-text">Rachanon looks after Locully’s partnerships.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Industries */}
        <Section alt>
          <SectionHeader
            eyebrow="Industries"
            title="Industries Locully works with"
            lede="Clinics and property companies, plus other service businesses that depend on being found."
          />
          <div className="lb-g3">
            {industries.map((it) => (
              <ServiceCard key={it.title} icon={it.icon} title={it.title} small>{it.body}</ServiceCard>
            ))}
          </div>
          <div className="lb-ctarow" style={{ marginTop: 32 }}>
            <Button variant="text" to="/industries/">See all industries</Button>
          </div>
        </Section>

        {/* Reporting */}
        <Section narrow>
          <SectionHeader eyebrow="Reporting" title="How Locully reports results" />
          <p className="lb-body-lg">
            Visibility only matters when it produces something commercially useful. Locully’s reports connect the
            work to search rankings, Google Maps visibility, AI mentions and citations, enquiries, conversions and
            cost per acquisition.
          </p>
          <p className="lb-body-lg">
            Locully commits to the work and to the way it is measured. We don’t promise positions, because no agency
            can promise a model will name you.
          </p>
        </Section>

        {/* FAQ */}
        <Section narrow style={{ borderTop: '1px solid var(--lb-rule-soft)' }}>
          <SectionHeader eyebrow="FAQ" title="Questions about Locully" />
          <FAQ items={faqs} />
        </Section>

        <LeadForm
          eyebrow="AI audit"
          title="Get your AI audit from Locully"
          lede="Send us your website. We’ll check how Google and AI assistants see your business and tell you what we find."
          footer={(
            <p className="lb-cta-note" style={{ textAlign: 'center', margin: '24px auto 0' }}>
              Prefer to talk first? <Link to="/contact/">Contact Locully</Link>
            </p>
          )}
        />

        <Footer />
      </Page>
    </>
  );
};

export default AboutPage;
