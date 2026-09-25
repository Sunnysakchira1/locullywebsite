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
import '@/brand/pages/about.css';

const SITE = 'https://www.locully.org';
const URL = `${SITE}${FOUNDER_PATH}`;
const ORG_ID = `${SITE}/#organization`;
const PERSON_ID = `${URL}#person`;

const TITLE = 'Rachaphon Sakchiraphong (Sunny) | Founder of Locully';
const DESCRIPTION = 'Rachaphon Sakchiraphong (Sunny) is the founder and CEO of Locully, a digital marketing agency in Bangkok, Thailand. He started the business in 2020.';

// Verified live on LinkedIn, 2026-09-25.
const articles = [
  {
    title: 'Brand Visibility in the AI Era: How To Ensure You’re Not Invisible',
    url: 'https://www.linkedin.com/pulse/brand-visibility-ai-era-how-ensure-youre-invisible-sakchiraphong-e9bkc',
    date: '2026-04-27',
    label: 'LinkedIn · 27 April 2026',
  },
  {
    title: 'LLMs Are Changing Search: Is Your Brand Even in the Conversation?',
    url: 'https://www.linkedin.com/pulse/llms-changing-searchis-your-brand-even-conversation-sakchiraphong-5gfdc',
    date: '2025-05-19',
    label: 'LinkedIn · 19 May 2025',
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
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: 'Locully' },
      about: { '@id': PERSON_ID },
      mainEntity: { '@id': PERSON_ID },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}/about` },
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
      url: URL,
      image: `${SITE}/sunny.jpeg`,
      jobTitle: 'Founder and CEO',
      description: 'Founder and CEO of Locully, a digital marketing agency in Bangkok, Thailand.',
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
      author: { '@id': PERSON_ID },
    })),
  ],
};

const FounderPage = () => {
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

      <Page className="lbp-founder">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About', to: '/about' }, { label: 'Rachaphon Sakchiraphong' }]} />

        <PageHero
          eyebrow="Founder and CEO, Locully"
          title="Rachaphon Sakchiraphong (Sunny)"
          lede="Rachaphon Sakchiraphong, known as Sunny, is the founder and CEO of Locully, a digital marketing agency in Bangkok, Thailand. He started the business in 2020 and rebranded it as Locully in 2025."
          visual={(
            <Figure
              className="lbp-founder-photo"
              src="/sunny.jpeg"
              alt="Rachaphon Sakchiraphong (Sunny), founder and CEO of Locully"
              imgProps={{ loading: 'eager', width: 380, height: 475 }}
            />
          )}
        >
          <div className="lbp-founder-links">
            <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="lb-btn-o">
              <Linkedin style={{ width: '16px', height: '16px' }} aria-hidden="true" />
              LinkedIn
            </a>
            <Link to="/about" className="lb-btn-o">About Locully</Link>
          </div>
        </PageHero>

        <Section alt narrow>
          <SectionHeader eyebrow="Biography" title="About Rachaphon Sakchiraphong" />
          <p className="lb-body-lg">
            Rachaphon Sakchiraphong founded Locully in Bangkok in 2020. The company trades as Locully Co. Ltd and has
            used the Locully name since 2025. <Link to="/about">Read more about Locully</Link>.
          </p>
          <p className="lb-body-lg">
            Sunny runs the strategy on every Locully client account. His work covers search, meaning Google and AI
            assistants, and paid advertising on Google Ads and Meta Ads.
          </p>
          <p className="lb-body-lg">
            Sunny judges marketing by what it produces: enquiries, customers and revenue. Traffic on its own
            doesn’t count.
          </p>
        </Section>

        <Section narrow>
          <SectionHeader eyebrow="Role" title="What Rachaphon Sakchiraphong does at Locully" />
          <List large items={[
            'Sets the strategy for each Locully client account, across search and paid ads.',
            'Oversees how Locully measures AI visibility: a fixed set of buying questions, re-run on a schedule, with every cited page opened and checked.',
            'Leads Locully’s work on Google Search, Google Maps and AI assistants.',
          ]} />
        </Section>

        <Section alt narrow>
          <SectionHeader eyebrow="Approach" title="How Sunny thinks about marketing" />
          <blockquote className="lbp-founder-quote">“No impact on revenue = no point in marketing.”</blockquote>
          <p className="lb-body-lg" style={{ textAlign: 'center' }}>
            Sunny built Locully around that line. Rankings and traffic are inputs. Enquiries, bookings and revenue
            are the result, and they are what Locully reports on.
          </p>
        </Section>

        <Section narrow>
          <SectionHeader eyebrow="Writing" title="Writing by Rachaphon Sakchiraphong" />
          <ul className="lbp-founder-writing">
            {articles.map((a) => (
              <li key={a.url}>
                <a href={a.url} target="_blank" rel="noopener noreferrer">{a.title}</a>
                <span>{a.label}</span>
              </li>
            ))}
          </ul>
          <div className="lb-ctarow" style={{ marginTop: 28 }}>
            <Button variant="text" to="/blog/">More on the Locully blog</Button>
          </div>
        </Section>

        <Section narrow style={{ borderTop: '1px solid var(--lb-rule-soft)' }}>
          <SectionHeader eyebrow="Profiles" title="Rachaphon Sakchiraphong’s name and profiles" />
          <p className="lb-body-lg">
            Rachaphon Sakchiraphong goes by Sunny. On LinkedIn and in some Locully materials he appears as Sunny
            Sakchiraphong. Both names refer to the same person, the founder of Locully.
          </p>
          <div className="lbp-founder-links">
            <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="lb-btn-o">
              <Linkedin style={{ width: '16px', height: '16px' }} aria-hidden="true" />
              LinkedIn
            </a>
            <Link to="/about" className="lb-btn-o">Locully company page</Link>
            <a href="mailto:sunny@locully.org" className="lb-btn-o">
              <Mail style={{ width: '16px', height: '16px' }} aria-hidden="true" />
              sunny@locully.org
            </a>
          </div>
        </Section>

        <LeadForm
          eyebrow="Free AI visibility check"
          title="Work with Sunny’s team at Locully"
          lede="Get a free AI visibility check. Sunny’s team will look at how Google and AI assistants see your business."
          subject="New AI Visibility Check Request (founder page) - Locully"
        />

        <Footer />
      </Page>
    </>
  );
};

export default FounderPage;
