import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, ServiceCard, ProofPanel, Figure,
  FAQ, Stage, ResultsNote,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import '@/brand/pages/performance.css';

const URL = 'https://www.locully.org/performance-marketing/';
const TITLE = 'Google Ads Agency in Bangkok: Google & Meta Ads | Locully';
const DESCRIPTION = 'Locully is a Google Ads and Meta Ads agency in Bangkok. Search, Performance Max and Facebook ads run for cost per customer, with tracking set up first.';

const Ext = ({ href, children }) => (
  <a href={href} className="lbp-pm-link" target="_blank" rel="noopener noreferrer">{children}</a>
);

const services = [
  {
    icon: 'search',
    title: 'Google Search ads',
    body: <p>Ads on the searches that mean someone wants to buy now. Tight keyword lists, negative keywords added every week, and ad copy that matches the search.</p>,
  },
  {
    icon: 'layers',
    title: 'Performance Max',
    body: <p>One Google campaign that runs across Search, Maps, YouTube, Display, Discover and Gmail from a single budget (<Ext href="https://support.google.com/google-ads/answer/10724817">Google’s guide to Performance Max</Ext>). For a business with a location, Maps can carry much of the work.</p>,
  },
  {
    icon: 'users',
    title: 'Meta Ads for Facebook and Instagram',
    body: <p>Paid social built on creative testing. New ads every month, one variable changed at a time, so you learn what sells.</p>,
  },
  {
    icon: 'target',
    title: 'Retargeting',
    body: <p>Ads to people who visited your site, watched your video or messaged your page and didn’t book. It’s often the cheapest audience you have, and often the one nobody set up.</p>,
  },
  {
    icon: 'chart',
    title: 'Conversion tracking',
    body: <p>Google tag, Tag Manager, enhanced conversions and the Meta Pixel, set up so the platforms optimise toward customers, not clicks.</p>,
  },
];

const faqs = [
  {
    q: 'How fast do Google Ads bring enquiries?',
    a: 'Ads usually start bringing enquiries in the first month, once tracking is live and the campaigns have had time to learn. The first weeks show which searches and audiences bring customers. Cost per enquiry tends to settle after that, not on day one.',
  },
  {
    q: 'Do you mark up ad spend?',
    a: 'No. You pay media spend directly to Google and Meta, on your own card or invoice. Our fee is a monthly retainer for managing the account. You see every baht the platforms charge.',
  },
  {
    q: 'Can you guarantee results or a set ROAS?',
    a: 'No. Ad costs move with your market, your competitors and the platforms themselves. What we promise is the work: clean tracking, weekly optimisation, new creative every month and an honest monthly report on what each enquiry cost.',
  },
  {
    q: 'Can you run Google Ads for a clinic in Bangkok?',
    a: 'Yes. Google and Meta restrict many healthcare ads, so we check each treatment against the platform rules before we build, and we write ads that stay inside them. Some treatments can’t be advertised at all, and we’ll tell you which before you spend.',
  },
  {
    q: 'Do I need Google Ads if I’m already doing SEO?',
    a: 'Often, yes. SEO takes months to rank for a competitive Bangkok term. Ads bring enquiries while it builds and cover searches you don’t rank for yet. Once SEO is strong, many businesses keep ads running on their best-converting searches.',
  },
  {
    q: 'What do you report each month?',
    a: 'Enquiries, cost per enquiry, spend by channel, and what we changed and why. We report calls, forms and bookings, not clicks and impressions.',
  },
  {
    q: 'Do you also run Facebook and Instagram ads in Thailand?',
    a: 'Yes. Locully manages Meta Ads for Facebook and Instagram, built on monthly creative testing and retargeting. Many businesses run Google and Meta together, so one plan covers people searching and people scrolling.',
  },
];

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Performance marketing: Google Ads and Meta Ads management',
  serviceType: 'Pay-per-click advertising management (Google Ads, Performance Max, Meta Ads, retargeting, conversion tracking)',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: [{ '@type': 'City', name: 'Bangkok' }, { '@type': 'Country', name: 'Thailand' }],
  url: URL,
  description: 'Locully plans and manages Google Ads (Search and Performance Max) and Meta Ads (Facebook and Instagram) for businesses in Bangkok and Thailand, with conversion tracking set up first and campaigns run for cost per customer. Media spend is paid directly to the platforms and never marked up.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Performance marketing services',
    itemListElement: [
      'Google Search ads', 'Performance Max', 'Meta Ads for Facebook and Instagram', 'Retargeting', 'Conversion tracking',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org/' },
    { '@type': 'ListItem', position: 2, name: 'Performance marketing', item: URL },
  ],
};

const Funnel = () => (
  <div className="lbp-pm-funnel" role="img" aria-label="Ad spend leads to clicks, enquiries and customers. Locully optimises for customers, not clicks.">
    <p className="lbp-pm-funnel-t">Where we aim your ad spend</p>
    <div className="lbp-pm-step">Ad spend <small>You pay Google and Meta</small></div>
    <div className="lbp-pm-step">Clicks <small>Easy to count, not the goal</small></div>
    <div className="lbp-pm-step">Enquiries <small>Calls, forms, bookings</small></div>
    <div className="lbp-pm-step win">Customers <small>We optimise here</small></div>
  </div>
);

export default function PerformanceMarketingPage() {
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

      <Page className="lbp-pm">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Performance marketing' }]} />

        <PageHero
          eyebrow="Performance marketing · Google Ads and Meta Ads"
          visual={<Funnel />}
          title="Google Ads agency in Bangkok, run for cost per customer"
          lede="Locully is a Google Ads agency in Bangkok that also runs Meta Ads. We manage Search, Performance Max, Facebook and Instagram campaigns for cost per customer, not cost per click. Tracking goes in first, so ad spend ties back to calls, forms, bookings and visits."
        >
          <div className="lb-hero-cta">
            <Button cta>Get my free ads audit</Button>
            <p className="lb-cta-note">Media spend is paid straight to Google and Meta. We never mark it up.</p>
          </div>
          <p className="lbp-pm-byline">
            By <Link to="/rachaphon-sakchiraphong/">Rachaphon Sakchiraphong (Sunny)</Link>, founder · Updated September 2026
          </p>
        </PageHero>

        <Section alt tight>
          <div className="lbp-pm-tldr">
            <p>
              <strong>In short:</strong> Locully runs Google Ads and Meta Ads for businesses in Bangkok and across Thailand: clinics, restaurants, hotels and property companies. We set up conversion tracking before spend goes live, build Search, Performance Max and paid social campaigns, retarget people who already know you, and test new creative every month. You pay media spend straight to Google and Meta, and we never mark it up. Each month you get a report on enquiries and what each one cost.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="What we manage"
            title="What our performance marketing agency in Bangkok manages"
            lede="One Bangkok team runs all five, and you get one report on what they cost you."
          />
          <div className="lb-g3">
            {services.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} small>{s.body}</ServiceCard>
            ))}
          </div>
        </Section>

        <Section alt>
          <SectionHeader
            eyebrow="Tracking first"
            title="Conversion tracking for Google Ads and Meta Ads comes first"
            lede="Google Ads and Meta optimise toward whatever you tell them counts. Count clicks, and you get cheap clicks. Count booked appointments, and the algorithm goes looking for people who book."
          />
          <div className="lb-narrow-copy lbp-pm-copy" style={{ maxWidth: 860, margin: '0 auto' }}>
            <p className="lb-body-lg">
              That is why Locully builds tracking first, before any spend goes live (<Ext href="https://support.google.com/google-ads/answer/1722022">how Google measures conversions</Ext>). What we set up, depending on your site:
            </p>
            <ol className="lbp-pm-ol">
              <li><strong>Google tag and Tag Manager</strong> on every page, with the <Ext href="https://support.google.com/tagmanager/answer/7549390">conversion linker</Ext> so a click is still credited after the visitor moves between pages.</li>
              <li><strong>One conversion per real enquiry:</strong> a form, a call from the ad, a booking. Duplicates come out, so one lead counts once.</li>
              <li><strong><Ext href="https://support.google.com/google-ads/answer/9888656">Enhanced conversions</Ext></strong>, which send a hashed email with each lead so Google can match more leads to the ad that brought them.</li>
              <li><strong><Ext href="https://support.google.com/google-ads/answer/6100636">Store visits</Ext> and direction requests</strong> for businesses with a location, where Google makes them available.</li>
              <li><strong>Meta Pixel and, where your site supports it, the <Ext href="https://developers.facebook.com/docs/marketing-api/conversions-api">Conversions API</Ext></strong>, which helps Meta see conversions that browser tracking misses.</li>
            </ol>
            <p className="lb-body-lg" style={{ marginTop: 22 }}>
              Already have tracking? We audit it first. Broken or double-counted conversions can make an account look healthy when it isn’t.
            </p>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Google Ads"
            title="Google Ads in Bangkok: Search and Performance Max"
            lede="Search catches people who already know what they want. Performance Max reaches them across Google, including the Maps searches that send people to your door. In the campaign below, Maps took 60% of the spend."
          />
          <div className="lbp-pm-proof-grid">
            <ProofPanel
              label="A restaurant group’s Performance Max campaign"
              big="฿239,000"
              sub="Google-reported conversion value, on ฿9,150 of ad spend. Conversion value is Google’s own figure, built from the values assigned to each action. It is not revenue."
              stats={[
                { n: '฿9,150', l: 'ad spend' },
                { n: '477', l: 'store visits Google recorded' },
                { n: '3,263', l: 'direction requests' },
                { n: '60%', l: 'of spend went to Google Maps' },
              ]}
            />
            <Figure
              src="/images/performance-marketing/performance-max-channel-report.jpg"
              alt="Google Ads Performance Max channel report for an anonymised restaurant group: conversion value 239K on ฿9.15K cost; Maps 60.44% share of cost; 477 store visits and 3,263 get-directions results."
              imgProps={{ width: 998, height: 1416 }}
              caption={<><strong>Google Ads channel report</strong> for the same campaign: Maps took 60.44% of the cost; Google counted 477 store visits and 3,263 direction requests.</>}
            />
          </div>
          <ResultsNote>
            Results are shown without client names. Figures come from the client’s Google Ads account. Results depend on your market, budget and starting position. No agency can promise a set return from ads, or that an AI model will name you.
          </ResultsNote>
        </Section>

        <Section alt>
          <div className="lb-split" style={{ alignItems: 'start' }}>
            <div className="lbp-pm-copy">
              <span className="lb-eyebrow">Meta Ads</span>
              <h2 className="lb-h2">Facebook ads agency in Thailand: Meta Ads built on creative testing</h2>
              <p className="lb-body-lg">On Meta, the ad itself does most of the targeting now. The audience that scrolls past one ad will book from the next.</p>
              <p className="lb-body-lg">So the core of Locully’s Meta Ads work is a steady flow of new creatives, tested one variable at a time: the hook, the offer, the image, the format.</p>
            </div>
            <div className="lb-fit yes">
              <h3 className="lb-h3">What that looks like each month</h3>
              <ul className="lb-list lg">
                <li>New creatives every month, briefed from what the last round taught us</li>
                <li>Winners keep running. Losers get switched off early, so budget stops going into ads that should have been turned off</li>
                <li>Retargeting for people who engaged but didn’t book</li>
                <li>Lead forms, messages or website bookings, whichever your team answers fastest</li>
              </ul>
              <p className="lb-body" style={{ margin: '18px 0 0' }}>And if Meta isn’t right for your business, we’ll say so and put the budget into Google.</p>
            </div>
          </div>
        </Section>

        <Section>
          <SectionHeader eyebrow="How it works" title="How our PPC agency in Bangkok runs your account" />
          <div className="lb-stages">
            <Stage n="01" title="Audit">We read your Google and Meta accounts, your tracking and your landing pages. You see what’s working and what we can improve before you sign.</Stage>
            <Stage n="02" title="Tracking and build">Conversions first. Then campaigns, keywords, negative keywords, audiences and the first round of creatives.</Stage>
            <Stage n="03" title="Launch and learn">Ads usually start bringing enquiries in the first month, once tracking is live. The first weeks show which searches, audiences and ads bring customers.</Stage>
            <Stage n="04" title="Optimise weekly, report monthly">Search terms, bids, budgets and creatives get reviewed every week. One report a month: enquiries, cost per enquiry, and what changes next.</Stage>
          </div>
        </Section>

        <Section alt>
          <SectionHeader eyebrow="What’s included" title="What Google Ads and Meta Ads management includes" />
          <div className="lb-table-wrap" style={{ maxWidth: 860, margin: '0 auto' }}>
            <table className="lb-table">
              <thead><tr><th scope="col">Included every month</th><th scope="col">What it means for you</th></tr></thead>
              <tbody>
                <tr><td>Account management</td><td>Search, Performance Max and Meta campaigns built and run by our Bangkok team</td></tr>
                <tr><td>Conversion tracking</td><td>Set up, checked and kept honest</td></tr>
                <tr><td>New ad creative</td><td>Fresh ads every month, tested one variable at a time</td></tr>
                <tr><td>Search terms and negatives</td><td>Wasted searches blocked every week</td></tr>
                <tr><td>Retargeting</td><td>Warm audiences on Google and Meta</td></tr>
                <tr><td>Monthly report</td><td>Enquiries, cost per enquiry and next steps</td></tr>
              </tbody>
            </table>
          </div>
          <p className="lb-note" style={{ textAlign: 'center', marginTop: 16 }}>Media spend is separate. You pay it straight to Google and Meta, and we never mark it up.</p>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Ads, SEO or GEO"
            title="Paid ads, SEO and GEO: which one your business needs"
            lede="Ads are useful while SEO builds, and worth keeping once it has. Many businesses run more than one."
          />
          <div className="lb-table-wrap">
            <table className="lb-table">
              <thead>
                <tr><th scope="col"><span className="sr-only">Question</span></th><th scope="col">Google Ads and Meta Ads</th><th scope="col">SEO</th><th scope="col">GEO (AI search)</th></tr>
              </thead>
              <tbody>
                <tr><td>First enquiries</td><td>Usually in month one</td><td>Usually three to six months for a competitive Bangkok term</td><td>Citations usually start moving in months two to four; some take longer</td></tr>
                <tr><td>When you stop paying</td><td>Enquiries stop</td><td>Rankings keep working for a while</td><td>Mentions keep working for a while</td></tr>
                <tr><td>Best for</td><td>Demand now, launches, new offers</td><td>Lower cost per enquiry over time</td><td>Being named when customers ask ChatGPT, Perplexity or Google AI</td></tr>
              </tbody>
            </table>
          </div>
          <div className="lb-ctarow lb-btn-row" style={{ justifyContent: 'center' }}>
            <Button variant="outline" to="/seo/">SEO services in Bangkok</Button>
            <Button variant="outline" to="/geo/">Generative engine optimisation (GEO)</Button>
          </div>
        </Section>

        <Section alt>
          <SectionHeader eyebrow="Fit" title="Who our Google Ads agency in Bangkok works with" />
          <div className="lb-g2">
            <div className="lb-fit yes">
              <h3 className="lb-h3">A good fit if</h3>
              <ul className="lb-list lg">
                <li>You run a clinic, restaurant, hotel or property business and can answer enquiries the same day</li>
                <li>You want to know what each customer costs, not how many clicks you got</li>
                <li>You can give us access to your ad accounts and your website</li>
              </ul>
            </div>
            <div className="lb-fit no">
              <h3 className="lb-h3">Not a fit if</h3>
              <ul className="lb-list lg dash">
                <li>You want a guaranteed return on ad spend. Nobody can sell you that honestly.</li>
                <li>Marketing spend is under ฿30,000 a month</li>
                <li>You want ads outside Google and Meta. We don’t buy TikTok, LINE or programmatic media.</li>
              </ul>
            </div>
          </div>
          <div className="lb-narrow-copy lbp-pm-copy" style={{ maxWidth: 860, margin: '36px auto 0' }}>
            <p className="lb-body-lg">
              Healthcare ads follow extra rules. Google restricts many medical and treatment ads (<Ext href="https://support.google.com/adspolicy/answer/176031">Google’s healthcare and medicines policy</Ext>), and Meta has its own limits. We plan clinic campaigns inside those rules from day one. See <Link to="/industries/">the industries we work with</Link>.
            </p>
            <p className="lb-body-lg">
              Exhibiting at a fair or expo in Thailand? That runs as its own offer: <Link to="/lead-gen-partner">lead generation for fairs and expos</Link>. Want the bigger picture first? <Link to="/case-studies/">See our case studies</Link> or <Link to="/about">meet the team</Link>.
            </p>
          </div>
        </Section>

        <Section narrow>
          <SectionHeader eyebrow="FAQ" title="Google Ads agency FAQ" />
          <FAQ items={faqs} qAs="h3" />
        </Section>

        <LeadForm
          eyebrow="Free ads audit"
          title="Get a free Google Ads and Meta Ads audit"
          lede="Send us your website and tell us which ad accounts you run. We review your campaigns and conversion tracking, then send you the fixes we would make first. Free, and yours to keep."
          subject="New Ads Audit Request (Performance Marketing page) — Locully"
          ctaLabel="Get my free ads audit"
          extraFields={[
            { name: 'platforms', label: 'Which ad accounts do you run?', placeholder: 'Google Ads, Meta Ads, or both' },
            { name: 'monthly_spend', label: 'Rough monthly ad spend', placeholder: 'e.g. ฿50,000' },
          ]}
          idPrefix="pm"
          footer={(
            <p className="lb-note" style={{ textAlign: 'center', marginTop: 24 }}>
              Want to know how you show up in ChatGPT too? Read about the <Link to="/audit/">free AI visibility audit</Link>, or <Link to="/contact/">contact us</Link>.
            </p>
          )}
        />

        <Footer />
      </Page>
    </>
  );
}
