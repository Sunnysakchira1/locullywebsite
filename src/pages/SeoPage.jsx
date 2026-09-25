import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Cta, Icon, Tick, ProofPanel, FAQ, List, Stage,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Article } from '@/brand/Illustrations';

/*
 * /seo/ — Locully's SEO service page. Owns the broad commercial SEO cluster
 * ("seo agency bangkok", "seo company bangkok", "seo services bangkok",
 * "seo thailand", "seo agency/company thailand"). Copy source + claims record:
 * Projects/locully/homepage-redesign-2026-09/build/seo/final-copy.md
 */

const PAGE_URL = 'https://www.locully.org/seo/';
const TITLE = 'SEO Agency Bangkok | SEO Services in Thailand | Locully';
const DESCRIPTION = 'Locully is an SEO agency in Bangkok. Technical SEO, content and link building in English and Thai, reported every month as calls, forms and bookings.';

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const services = [
  {
    icon: 'code',
    title: 'Technical SEO',
    body: (
      <p>
        Locully fixes what stops Google crawling and indexing your site: broken pages, redirects, speed,{' '}
        <Ext href="https://web.dev/articles/vitals">Core Web Vitals</Ext> and{' '}
        <Ext href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data">structured data</Ext>.
        This comes first. Content can't rank on a site Google struggles to read.
      </p>
    ),
  },
  {
    icon: 'search',
    title: 'Keyword research',
    body: <p>Locully picks terms by what your buyers type, in the language they type it in. A clinic serving expats needs English terms. A Thai property buyer searches in Thai. Volume alone doesn't decide it.</p>,
  },
  {
    icon: 'doc',
    title: 'On-page optimisation',
    body: <p>Titles, headings, copy and internal links on the pages that already bring in money. It can be the quickest win, because the page already exists.</p>,
  },
  {
    icon: 'layers',
    title: 'Content in English and Thai',
    body: (
      <p>
        Service pages and guides that answer what your customers ask before they buy, written to Google's{' '}
        <Ext href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">people-first content guidance</Ext>.
      </p>
    ),
  },
  {
    icon: 'link',
    title: 'Link building',
    body: (
      <p>
        Locully earns links from relevant sites in your market and reports each one as a live PAGE_URL. We stay clear of link schemes, which break{' '}
        <Ext href="https://developers.google.com/search/docs/essentials/spam-policies">Google's spam policies</Ext> and can sink a site.
      </p>
    ),
  },
  {
    icon: 'chart',
    title: 'Monthly SEO reporting',
    body: <p>Rankings and traffic, and above all enquiries: calls, forms and bookings, and what each one cost. Plain English. No slide deck of activity.</p>,
  },
];

const stages = [
  { n: '01', title: 'Measure', body: 'Locully starts every SEO engagement with an audit. We check how Google crawls your site, which terms you rank for, who ranks instead of you, and how AI assistants describe your business. Every later month is measured against that baseline.' },
  { n: '02', title: 'Fix', body: "Technical problems get fixed before anything new gets written: crawl errors, slow pages, missing schema, duplicate pages, messy structure. If walk-in customers matter to you, we tidy your Google Business Profile too. It's the unglamorous part, and the first movement often comes from here." },
  { n: '03', title: 'Build', body: "Locully writes the pages your customers search for and earns links from sites they already read. Each page gets one job, so two of your pages aren't competing for the same term." },
  { n: '04', title: 'Report', body: 'You get a monthly report in plain English: what moved, what we did, what comes next and how many enquiries came in. And you talk to the person who builds the strategy, not an account manager.' },
];

const retainer = [
  { t: 'A technical SEO audit and fix list', d: 'Crawl, indexing, speed, structure and schema, fixed in priority order.' },
  { t: 'A keyword and page plan', d: 'Which page targets which term, in English, Thai or both.' },
  { t: 'Content written for your buyers', d: 'New pages and rewrites that answer buying questions directly.' },
  { t: 'Links from relevant sites', d: 'Each placement reported to you as a live PAGE_URL.' },
  { t: 'Google Business Profile upkeep', d: 'Categories, details and photos kept accurate, where walk-in customers matter.' },
  { t: 'AI search basics', d: "We check that AI crawlers can reach your site, so AI assistants aren't blocked from reading it." },
  { t: 'A monthly enquiry report', d: 'Calls, forms and bookings, and what each one cost.' },
  { t: 'Direct access to Sunny', d: "Locully's founder builds your strategy and answers your messages." },
];

const fitYes = [
  'You run a clinic, hotel, restaurant, property company or professional firm, in Bangkok, elsewhere in Thailand or in Singapore',
  'You can name what one new customer is worth to you',
  "You want enquiries, and you're happy to be measured on them",
  'Someone on your side can approve content and give us account access',
  'You can commit for six months, the minimum to judge SEO fairly',
];

const fitNo = [
  'You want a guaranteed first place on Google. Nobody can sell you that honestly',
  <>You need enquiries this week. That's a job for <Link to="/performance-marketing/">Google and Meta Ads</Link></>,
  'You want a new website, a rebrand or social media managed day to day',
  'You want to direct the strategy yourself and have us execute tickets',
];

const timeline = [
  { m: '1', work: 'Audit, baseline, keyword and page plan', see: 'A written plan and a fix list. Nothing moves yet.' },
  { m: '1–2', work: 'Technical fixes, on-page work on pages you already have', see: 'The fixes go live, listed in your report.' },
  { m: '2–6', work: 'New pages, links, ongoing fixes', see: 'Rankings for a competitive Bangkok term usually take 3–6 months.' },
  { m: '6+', work: "More of what works, less of what doesn't", see: 'Enquiries tracked month on month against the month-one baseline.' },
];

const guides = [
  { to: '/blog/what-is-seo-complete-guide/', title: 'What is SEO? A complete guide', d: 'How search engines crawl, rank and choose, in plain English.' },
  { to: '/blog/on-page-seo-optimization-guide/', title: 'On-page SEO optimisation guide', d: 'Titles, headings, copy and internal links, page by page.' },
  { to: '/blog/backlinks-guide-seo/', title: 'Backlinks: how they work in SEO', d: 'What a good link looks like, and which ones to avoid.' },
  { to: '/blog/programmatic-seo-guide/', title: 'Programmatic SEO guide', d: 'When pages at scale work, and when they backfire.' },
];

// FAQ answers: plain strings feed the FAQPage schema; `node` (optional) is the on-page version with links.
const faqs = [
  {
    q: 'How much does an SEO agency in Bangkok cost?',
    a: 'It depends on scope, and Locully quotes after the free check. Bangkok SEO retainers vary widely, so compare what gets delivered each month, not just the fee. If you want a single piece of work, our one-off SEO packages list fixed prices.',
    node: <p>It depends on scope, and Locully quotes after the free check. Bangkok SEO retainers vary widely, so compare what gets delivered each month, not just the fee. If you want a single piece of work, our <Link to="/packages">one-off SEO packages</Link> list fixed prices.</p>,
  },
  {
    q: 'How long does SEO take to work?',
    a: 'Month one is measurement, so nothing moves in it. Technical and on-page fixes go live in months one and two. Rankings for a competitive Bangkok term usually take three to six months, which is why we ask for six months to judge the work fairly.',
  },
  {
    q: 'Can you guarantee first place on Google?',
    a: "No. No SEO agency can, and Google's own advice on hiring an SEO warns against anyone who says they can. Locully commits to a defined scope of work and a way of measuring it, reported every month.",
    node: <p>No. No SEO agency can, and <Ext href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo">Google's own advice on hiring an SEO</Ext> warns against anyone who says they can. Locully commits to a defined scope of work and a way of measuring it, reported every month.</p>,
  },
  {
    q: 'Do you do SEO in Thai as well as English?',
    a: 'Yes. Locully writes and optimises in English and Thai. We pick the language by who your buyers are: expat and international customers mostly search in English, most Thai buyers search in Thai, and many businesses need both.',
  },
  {
    q: 'Do you only work with businesses in Bangkok?',
    a: 'No. Most Locully clients are in Bangkok, and we also work elsewhere in Thailand and in Singapore. Search results differ by country, so measurement is set up per market.',
  },
  {
    q: "What's the difference between SEO and GEO?",
    a: 'SEO helps you rank on Google. GEO, generative engine optimisation, helps you get named inside AI answers from ChatGPT, Perplexity and Google AI Overviews. Every Locully SEO retainer covers the AI search basics, and our GEO service goes further.',
    node: <p>SEO helps you rank on Google. GEO, generative engine optimisation, helps you get named inside AI answers from ChatGPT, Perplexity and Google AI Overviews. Every Locully SEO retainer covers the AI search basics, and our <Link to="/geo/">GEO service</Link> goes further.</p>,
  },
  {
    q: 'Who owns the accounts and the data?',
    a: 'You do, from day one. Search Console, analytics and Google Business Profile stay in your name, and your data is yours to export. If we stop working together, you keep all of it.',
  },
];

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'SEO services in Bangkok and Thailand',
  serviceType: 'Search engine optimisation (SEO)',
  description: 'Technical SEO, keyword research, on-page optimisation, content in English and Thai, internal linking and link building, delivered on a monthly retainer and reported as enquiries.',
  url: PAGE_URL,
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: [
    { '@type': 'City', name: 'Bangkok' },
    { '@type': 'Country', name: 'Thailand' },
    { '@type': 'Country', name: 'Singapore' },
  ],
  availableLanguage: ['en', 'th'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO services',
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org/' },
    { '@type': 'ListItem', position: 2, name: 'SEO', item: PAGE_URL },
  ],
};

export default function SeoPage() {
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

      <Page className="lbp-seo">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'SEO' }]} />

        {/* Hero */}
        <PageHero
          eyebrow="SEO services · Bangkok and Thailand"
          title="An SEO agency in Bangkok, measured on enquiries."
          lede="Locully is an SEO agency in Bangkok, Thailand. We fix your website, write the pages your customers search for, and earn the links that help Google trust you. Every month we report the calls, forms and bookings your search traffic brought in, and what each one cost."
          visual={<Article />}
        >
          <Cta note="Free. We show you who gets named instead of you in ChatGPT, Perplexity and Google AI, and you keep the findings." />
          <div className="lb-callout" style={{ marginTop: 32 }}>
            <p>
              <strong className="lb-em">In short:</strong> Locully is a Bangkok SEO company, founded in 2020 and rebranded as Locully in 2025.
              Our in-house team handles technical SEO, keyword research, on-page work, content in English and Thai, internal linking and link building.
              We work with clinics, hotels, restaurants, property companies and professional firms in Thailand and Singapore, on a monthly retainer.
              Reports show enquiries and what each one cost. We promise the work, never a ranking.
            </p>
          </div>
        </PageHero>

        {/* Services */}
        <Section alt>
          <SectionHeader
            eyebrow="What we do"
            title="What our SEO services in Bangkok cover."
            lede="Six jobs, done by one Bangkok team. None of it goes to freelancers."
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
            eyebrow="How it works"
            title="How our SEO company in Bangkok works."
            lede="Four steps: measure, fix, build, report."
          />
          <div className="lb-stages">
            {stages.map((s) => (
              <Stage key={s.n} n={s.n} title={s.title}>{s.body}</Stage>
            ))}
          </div>
          <div className="lb-ctarow lb-ctastrip">
            <p className="lb-body-lg lb-em" style={{ margin: '0 0 22px' }}>
              Want to see where you stand before you pay anything?
            </p>
            <Button cta />
          </div>
        </Section>

        {/* SEO + AI search, with the approved result */}
        <Section alt>
          <SectionHeader
            eyebrow="Google and AI search"
            title="SEO in Thailand now includes AI search."
            lede="Your customers still search Google. More of them now ask ChatGPT first."
          />
          <div className="lb-narrow-copy" style={{ marginBottom: 44 }}>
            <p className="lb-body-lg">
              Locully treats SEO and AI search as one job. The things that help you rank on Google (a clear site, pages that answer real questions,
              mentions on trusted sites) also make you easier for ChatGPT, Perplexity and Google AI Overviews to name. So every SEO retainer includes
              the basics that let AI assistants read your site.
            </p>
            <p className="lb-body-lg">
              If AI search is your main goal, our <Link to="/geo/">GEO and AI search visibility service</Link> goes deeper, with prompt tracking,
              citation placements and entity work.
            </p>
          </div>
          <ProofPanel
            label="Result · Bangkok clinic · AI search"
            big="0 → 38"
            sub="AI-sourced paid consultations in a single month (May 2026). Up from zero in September 2025, counted from the clinic's own booking records."
          />
          <p className="lb-proof-note">
            Results are shown without client names. Results depend on your market, budget and starting position. No agency can promise a model
            will name you, or that Google will rank you first.
          </p>
          <div style={{ textAlign: 'center', marginTop: 22 }}>
            <Button variant="text" to="/case-studies/">See our case studies</Button>
          </div>
        </Section>

        {/* Retainer offer stack */}
        <Section narrow>
          <SectionHeader
            eyebrow="What you get"
            title="What's in every SEO retainer at Locully."
            lede="One scope, agreed before we start. Nothing added on in month three."
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
          <p className="lb-body-lg" style={{ textAlign: 'center', margin: '32px auto 0', maxWidth: 680 }}>
            Need one piece of work instead of a retainer? Our <Link to="/packages">one-off SEO packages</Link> cover content and link building at a fixed price.
          </p>
          <div className="lb-ctarow" style={{ marginTop: 32 }}>
            <Button cta />
          </div>
        </Section>

        {/* Fit */}
        <Section alt>
          <SectionHeader
            eyebrow="Who it's for"
            title="Who our SEO agency in Thailand works with."
            lede="Here is the honest line."
          />
          <div className="lb-g2" style={{ alignItems: 'start' }}>
            <div className="lb-fit yes">
              <h3 className="lb-h3">A good fit if</h3>
              <List items={fitYes} large />
            </div>
            <div className="lb-fit no">
              <h3 className="lb-h3">Not a fit if</h3>
              <List items={fitNo} dash large />
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section narrow>
          <SectionHeader
            eyebrow="Timeline"
            title="How long SEO takes in Bangkok."
            lede="Honest timings. Your market may be faster or slower."
          />
          <div className="lb-table-wrap">
            <table className="lb-table">
              <thead>
                <tr><th scope="col">Month</th><th scope="col">What we do</th><th scope="col">What you see</th></tr>
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
            Google puts it plainly in its own advice on hiring an SEO:{' '}
            <Ext href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo">"No one can guarantee a #1 ranking on Google."</Ext>{' '}
            (Google Search Central, updated June 2026). Locully commits to a defined scope and a way of measuring it.
          </p>
        </Section>

        {/* Guides */}
        <Section alt>
          <SectionHeader
            eyebrow="Guides"
            title="SEO guides from our Bangkok team."
            lede="See how we think before you hire us."
          />
          <div className="lb-g2">
            {guides.map((g) => (
              <Link key={g.to} to={g.to} className="lb-card sm lb-card-link">
                <h3 className="lb-h3">{g.title}</h3>
                <p>{g.d}</p>
                <div className="lb-card-foot"><span className="lb-tlink">Read the guide <span aria-hidden="true">→</span></span></div>
              </Link>
            ))}
          </div>
          <p className="lb-body-lg" style={{ textAlign: 'center', margin: '36px auto 0', maxWidth: 720 }}>
            Google's own <Ext href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">SEO Starter Guide</Ext> is a good free primer too.
            Want to know who's behind the work? Read <Link to="/about">about Locully</Link>.
          </p>
        </Section>

        {/* FAQ */}
        <Section narrow>
          <SectionHeader eyebrow="FAQ" title="SEO agency Bangkok: questions we get asked." />
          <FAQ items={faqs.map((f) => ({ q: f.q, a: f.node || f.a }))} qAs="h3" />
        </Section>

        {/* Lead form */}
        <LeadForm
          eyebrow="Free AI visibility check"
          title="Get a free check from our SEO team in Bangkok."
          lede="Send us your website. We run your customers' real questions through ChatGPT, Perplexity and Google AI, then walk you through who gets named instead of you. Twenty minutes. Free. Yours to keep."
          subject="New free check request (SEO page) — Locully"
          idPrefix="seo"
        />

        <Footer />
      </Page>
    </>
  );
}
