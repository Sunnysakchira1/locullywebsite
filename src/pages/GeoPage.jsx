import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Cta, ServiceCard, ProofPanel,
  ResultsNote, FAQ, List, Stage,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { AskAi } from '@/brand/Illustrations';
import '@/brand/pages/geo.css';

/*
 * /geo/ — Locully's single commercial page for GEO / AI SEO / AI search optimisation.
 * Absorbs /ai-search-visibility and /ai-optimization/ (301'd here in vercel.json).
 * Copy source: homepage-redesign-2026-09/geo-page/final-copy.md (claims-guarded, QA: SHIP).
 */

const URL = 'https://www.locully.org/geo/';
const TITLE = 'AI SEO & GEO Agency in Bangkok, Thailand | Locully';
const DESCRIPTION = 'Locully is an AI SEO and GEO agency in Bangkok, Thailand. We helps ChatGPT, Perplexity and Google AI Overviews find, trust and cite your business.';

const Ext = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const GOOGLE_AI_GUIDE = 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide';
const GOOGLE_AI_FEATURES = 'https://developers.google.com/search/docs/appearance/ai-features';

/* FAQ: `text` feeds FAQPage schema and must match what renders. `a` is the rendered answer. */
const faqs = [
  {
    q: 'What is an AI SEO agency?',
    text: 'An AI SEO agency helps a business get found and recommended inside AI answers from ChatGPT, Perplexity, Gemini and Google AI Overviews. It works on crawl access, entity consistency, third-party mentions and answer-ready pages. Locully is an AI SEO agency based in Bangkok, Thailand.',
  },
  {
    q: 'Is GEO the same as AI SEO, AEO or AI search optimisation?',
    text: 'Yes, for practical purposes. Generative engine optimisation (GEO), AI SEO, AI search optimisation, answer engine optimisation (AEO) and LLM visibility all describe making a business visible in AI-generated answers. Locully uses "GEO" and treats the others as synonyms. The work is the same.',
  },
  {
    q: 'Does GEO replace SEO?',
    text: 'No. GEO builds on SEO. Google says SEO best practice still applies to its AI Overviews and AI Mode, and the same signals help ChatGPT and Perplexity find you. GEO adds third-party mentions, entity work and AI answer measurement. Locully runs both together.',
  },
  {
    q: 'How long does GEO take?',
    text: 'Technical and entity fixes start in the first month. Pages and third-party mentions build over the following months. Locully reviews the prompt set every month and judges the trend over a quarter. We’d be wary of anyone promising AI visibility in days.',
  },
  {
    q: 'Can any agency guarantee ChatGPT will recommend my business?',
    text: 'No. AI answers are generated fresh each time and change as models update. No agency can promise a model will name you. Locully promises the work: a defined scope, done every month, measured on a fixed prompt set, so you can see whether it’s moving.',
  },
  {
    q: 'How do you measure AI search visibility?',
    text: 'Locully measures it on a fixed set of 30 or more buying questions per business, re-run on a schedule. Each run records whether the answer mentioned you, cited your site and described you correctly. Where Search Console shows it, Google’s AI features are tracked in the generative AI performance report.',
  },
  {
    q: 'Do I need llms.txt or special schema to show up in AI answers?',
    text: 'Not for Google. Google says there are no additional requirements or special optimisations for AI Overviews and AI Mode, and its guidance says Google Search doesn’t use llms.txt files. Locully keeps schema as normal SEO hygiene. The work that moves AI answers is access, consistent facts, trusted mentions and useful pages.',
    a: (
      <p>
        Not for Google. <Ext href={GOOGLE_AI_FEATURES}>Google says</Ext> there are no additional requirements or
        special optimisations for AI Overviews and AI Mode, and its guidance says Google Search doesn’t use llms.txt
        files. Locully keeps schema as normal SEO hygiene. The work that moves AI answers is access, consistent facts,
        trusted mentions and useful pages.
      </p>
    ),
  },
  {
    q: 'Do you work with businesses outside Bangkok?',
    text: 'Yes. Locully is based in Bangkok and works with businesses across Thailand and in Singapore. ChatGPT, Perplexity and Gemini answer questions from anywhere, so the core work is the same. Language, local directories and Google’s AI features vary by country, and we plan for each market.',
  },
  {
    q: 'How much does GEO cost?',
    text: 'Locully runs GEO on a monthly retainer, scoped to your market, the number of questions tracked and the languages you need. The free AI visibility check comes first. It shows what the work would involve before you commit to anything.',
  },
];

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${URL}#service`,
  name: 'Generative engine optimisation (GEO)',
  alternateName: ['AI SEO', 'AI search optimisation', 'Answer engine optimisation (AEO)', 'Generative Engine Optimization'],
  serviceType: 'AI SEO / Generative Engine Optimization',
  description: DESCRIPTION,
  url: URL,
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org/' },
    { '@type': 'ListItem', position: 2, name: 'GEO', item: URL },
  ],
};

const signals = [
  { icon: 'code', title: 'Crawl access', body: 'AI engines can only cite pages they can reach and read. Blocked crawlers and content that only loads through scripts can drop you out before the answer is written.' },
  { icon: 'globe', title: 'Entity clarity', body: 'An entity is what a machine understands your business to be. Your name, category, location and services need to match everywhere: your site, Google Business Profile, directories and social profiles. Mixed signals make a model less sure who you are.' },
  { icon: 'users', title: 'Third-party corroboration', body: 'AI engines lean heavily on what other sites say about you, not only on what you say about yourself. In the AI answers we track, reviews, “best of” lists, directories, local press and forum threads come up as sources again and again. If competitors appear there and you don’t, the model names them.' },
  { icon: 'doc', title: 'Answer-ready pages', body: 'AI engines quote passages that answer a question directly. A page that says what you do, for whom, where and to what standard is easier to quote than a page of slogans.' },
];

const compareRows = [
  ['Goal', 'Rank a page in Google’s results', 'Get your business named and cited inside AI answers'],
  ['Where it shows', 'Google Search and Google Maps', 'ChatGPT, Perplexity, Gemini, Claude, Microsoft Copilot, Google AI Overviews and AI Mode'],
  ['What decides it', 'Relevance, links, page quality', 'The same, plus third-party mentions and a clear entity'],
  ['What wins', 'The page', 'The brand, backed by quotable passages'],
  ['How it’s measured', 'Rankings, clicks, Search Console', 'A fixed prompt set: mentioned, cited, and how you’re described'],
  ['Timeframe', 'Months', 'Months. It builds on the SEO foundation.'],
];

const workstreams = [
  { icon: 'target', title: 'AI visibility baseline', body: 'We build a fixed set of buying-intent questions from the way your customers search, in English and Thai where both matter. Then we record who AI names today and which sources it trusts.' },
  { icon: 'code', title: 'Crawl and technical fixes', body: 'We check that AI crawlers can reach and read your key pages. Robots rules, rendering, speed and indexing come first. Structured data gets cleaned up as normal SEO hygiene.' },
  { icon: 'pin', title: 'Entity and profile consistency', body: 'We align your name, category, address and services across your site, Google Business Profile and the directories AI engines read. One business, one set of facts.' },
  { icon: 'doc', title: 'Answer-ready pages', body: 'We rewrite and build the pages that answer your customers’ buying questions. Each one leads with a direct answer and names your business, service and location.' },
  { icon: 'link', title: 'Third-party mentions', body: 'We go after the sites AI engines already cite in your category: the lists, directories, reviews and articles. Every placement gets logged with its live URL.' },
  { icon: 'chart', title: 'Monthly report and call', body: 'Each month you get what AI said about you, what we changed and what’s next. You talk to the people doing the work.' },
];

const stages = [
  { n: '01', title: 'Week 1–2 · Baseline', body: 'We build your prompt set, run it and map who AI names and which sources it cites. You see where you stand against your direct competitors.' },
  { n: '02', title: 'Week 3–4 · Plan and first fixes', body: 'We agree priorities with you and start the technical and entity fixes straight away. These are the fastest changes to make.' },
  { n: '03', title: 'Month 2–3 · Pages and mentions', body: 'New and rewritten pages go live on a schedule. Third-party placements begin. We re-run the prompt set and adjust.' },
  { n: '04', title: 'Month 3 onward · Compound', body: 'We expand into new questions and new sources, and keep what’s working. AI visibility builds on itself, so we judge it quarter by quarter.' },
];

const measures = [
  <><strong>Prompt set.</strong> 30 or more real buying questions per business, tagged by stage: exploring, comparing, ready to book.</>,
  <><strong>Mentioned vs cited.</strong> Did the answer name you? Did it link you? We count them separately.</>,
  <><strong>Share of voice.</strong> How often you’re named against your direct competitors on the same questions.</>,
  <><strong>How you’re described.</strong> Being named with the wrong price, location or service is a problem, so we check that too.</>,
  <><strong>Dated runs.</strong> ChatGPT answers are collected on a schedule, so this month compares fairly with last month. Where your Search Console property shows it, we also track Google’s AI features in the generative AI performance report.</>,
  <><strong>Business outcome.</strong> We tie visibility to what you care about: enquiries, bookings and consultations, from your own booking records or GA4.</>,
];

const testItems = [
  'You’ve never asked ChatGPT or Perplexity to recommend a business like yours.',
  'When you do ask, your business doesn’t appear.',
  'Your website has no clear answers to the questions customers ask before buying.',
  'Your name, address or services differ between your website, Google Business Profile and directories.',
  'You’re missing from the “best of” lists and review sites in your category.',
  'Customers rarely say they found you through AI.',
  'You don’t know which AI answers your competitors appear in.',
  'Your key pages haven’t been updated in over a year.',
];

const band = (n) => {
  if (n <= 2) return { tone: 'good', title: 'Strong foundation.', msg: 'AI answers shift, so keep measuring. A free check shows where you’re exposed.' };
  if (n <= 5) return { tone: 'mid', title: 'Gaps to close.', msg: 'Competitors may be named in answers where you’re missing. The free check shows which answers and why.' };
  return { tone: 'risk', title: 'Largely invisible to AI.', msg: 'It’s fixable. The free check shows where to start.' };
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
        <div className="lbp-geo-score-n">{count}<span>/8 ticked</span></div>
        {touched ? (
          <p><strong>{b.title}</strong> {b.msg}</p>
        ) : (
          <p>Tick the statements that are true for you. Your result appears here.</p>
        )}
      </div>
    </div>
  );
};

export default function GeoPage() {
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

      <Page className="lbp-geo">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'GEO' }]} />

        {/* Hero */}
        <PageHero
          eyebrow="GEO · Generative engine optimisation · Bangkok"
          title="AI SEO agency that helps you get found in ChatGPT and Google AI"
          lede="Locully is an AI SEO agency in Bangkok, Thailand. We do generative engine optimisation (GEO): the work that makes your business easier for ChatGPT, Perplexity and Google AI Overviews to find, trust and cite."
          visual={<AskAi />}
        >
          <p className="lb-body-lg lbp-geo-hero-line">We’ve done SEO since 2020. Now we do the same job inside AI answers.</p>
          <Cta note="Free. We check how AI answers questions about your business and send you what we find." />
          <p className="lb-note lbp-geo-updated">Updated September 2026</p>
        </PageHero>

        {/* In short */}
        <Section tight narrow>
          <div className="lb-callout lbp-geo-tldr">
            <span className="lb-label">In short</span>
            <p>
              Locully is a Bangkok AI SEO agency that does generative engine optimisation (GEO) for service businesses in
              Thailand and Singapore. The work has four parts: AI crawlers can read your site, the facts about your
              business match everywhere, the third-party sites AI engines trust mention you, and your pages answer buying
              questions directly. Locully measures progress on a fixed set of real customer questions, re-run on a
              schedule, and reports what AI actually says about you. No agency can promise a model will name you.
            </p>
          </div>
        </Section>

        {/* Definition */}
        <Section>
          <SectionHeader eyebrow="Definition" title="What an AI SEO agency does" />
          <div className="lb-narrow-copy">
            <p className="lb-body-lg">
              An AI SEO agency makes a business easier for AI assistants to recommend. When someone asks ChatGPT “best
              international school in Bangkok” or “which property agent for expats in Sukhumvit”, the assistant writes one
              answer. It names two or three businesses. An AI SEO agency works on the signals that decide which names
              those are.
            </p>
            <p className="lb-body-lg">
              The industry has several names for this work. Generative engine optimisation (GEO) comes from a 2023
              research paper by Pranjal Aggarwal and colleagues,{' '}
              <Ext href="https://arxiv.org/abs/2311.09735">“GEO: Generative Engine Optimization”</Ext>, later published at
              KDD 2024. You’ll also see AI SEO, AI search optimisation, answer engine optimisation (AEO) and LLM
              visibility. It’s the same job. Locully calls it GEO and runs it as one service.
            </p>
            <p className="lb-body-lg">
              GEO sits on top of SEO and builds on it. The pages and signals that earn a Google ranking also feed the AI
              answers. GEO adds the parts SEO often skips: third-party mentions, entity consistency, and measuring what
              the models say about you.
            </p>
          </div>
        </Section>

        {/* Why */}
        <Section alt>
          <SectionHeader eyebrow="The shift" title="Why AI search changes who gets the customer" />
          <div className="lb-narrow-copy">
            <p className="lb-body-lg">
              AI search changes the buying journey because the answer arrives before the click. People ask a question
              and read one reply. The businesses inside that reply are the ones most likely to get the enquiry. The rest
              may never make the shortlist.
            </p>
            <p className="lb-body-lg">
              The scale is no longer small. ChatGPT reached{' '}
              <Ext href="https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users">900 million weekly active users in February 2026</Ext>,
              per OpenAI’s announcement reported by TechCrunch. See{' '}
              <Link to="/blog/how-many-people-use-chatgpt/">how many people use ChatGPT</Link> for the full trend. On
              Google,{' '}
              <Ext href="https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/">Pew Research Center found in July 2025</Ext>{' '}
              that US Google users clicked a traditional result on 8% of visits when an AI summary appeared, against 15%
              without one. They clicked a link inside the summary on only 1% of visits.
            </p>
            <p className="lb-body-lg">
              So ranking alone gets you less than it did, and being named inside the answer matters more. For the full
              numbers, read our <Link to="/blog/ai-search-statistics/">AI search statistics roundup</Link> and our
              breakdown of <Link to="/blog/zero-click-search-statistics/">zero-click search statistics</Link>.
            </p>
          </div>
        </Section>

        {/* Mechanics */}
        <Section>
          <SectionHeader
            eyebrow="The mechanics"
            title="How AI search engines choose which businesses to name"
            lede="AI search engines name the businesses they can find, understand and verify. ChatGPT, Perplexity and Google AI Overviews can search the web as they answer, pull a handful of sources and write a reply from them. Four signals decide whether your business is in that handful."
          />
          <div className="lb-g2">
            {signals.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title}>{s.body}</ServiceCard>
            ))}
          </div>
          <div className="lb-narrow-copy lbp-geo-after">
            <p className="lb-body-lg">
              We go deeper in <Link to="/blog/how-ai-chooses-sources-to-cite/">how AI chooses sources to cite</Link>. One
              distinction matters: a <strong>citation</strong> means an AI answer linked your website, and
              a <strong>mention</strong> means your name appeared in the words. Locully tracks both, separately.
            </p>
          </div>
        </Section>

        {/* GEO vs SEO */}
        <Section alt>
          <SectionHeader eyebrow="GEO vs SEO" title="GEO vs SEO: what changes and what doesn’t" />
          <div className="lb-narrow-copy">
            <p className="lb-body-lg">
              GEO and SEO share one foundation, and GEO adds work on top.{' '}
              <Ext href={GOOGLE_AI_GUIDE}>Google’s guidance on generative AI features</Ext> says SEO best practice still
              applies to AI Overviews and AI Mode. It also says you can ignore “hacks” like special AI text files,
              chunking tricks and fake mentions. We agree. Locully doesn’t sell hacks.
            </p>
          </div>
          <div className="lb-table-wrap lbp-geo-table">
            <table className="lb-table">
              <thead>
                <tr><th scope="col"><span className="lbp-geo-sr">Aspect</span></th><th scope="col">SEO</th><th scope="col">GEO</th></tr>
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
              For the clinic-owner version of this comparison, read{' '}
              <Link to="/blog/geo-vs-seo-clinics-bangkok/">GEO vs SEO for clinics in Bangkok</Link>.
            </p>
          </div>
          <div className="lb-ctarow lb-ctastrip">
            <p className="lb-body-lg lb-em lbp-geo-strip">Want to know what ChatGPT says about your business today?</p>
            <Button cta />
          </div>
        </Section>

        {/* What's included */}
        <Section>
          <SectionHeader
            eyebrow="The service"
            title="What our GEO service includes"
            lede="Locully’s GEO service is a monthly retainer with a defined scope. Every engagement covers six workstreams."
          />
          <div className="lb-g3">
            {workstreams.map((w) => (
              <ServiceCard key={w.title} icon={w.icon} title={w.title}>{w.body}</ServiceCard>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section alt>
          <SectionHeader
            eyebrow="The process"
            title="How a GEO engagement runs"
            lede="A Locully GEO engagement runs in four stages. The first thing you get is a clear picture of where you stand. Visibility follows the work."
          />
          <div className="lb-stages">
            {stages.map((s) => (
              <Stage key={s.n} n={s.n} title={s.title}>{s.body}</Stage>
            ))}
          </div>
        </Section>

        {/* Measurement */}
        <Section>
          <SectionHeader
            eyebrow="Measurement"
            title="How we measure AI search visibility"
            lede="Locully measures AI search visibility on a fixed prompt set, re-run on a schedule. A figure means nothing without the questions behind it and the date it was measured, so every number we report comes with both."
          />
          <div className="lb-panel lbp-geo-measure">
            <List large items={measures} />
          </div>
        </Section>

        {/* Self-test */}
        <Section>
          <SectionHeader
            eyebrow="Self-test"
            title="Is your business visible to AI search? Take the self-test"
            lede="Tick every statement that’s true for your business today. The more you tick, the more room there is to win."
          />
          <SelfTest />
          <div className="lb-ctarow lbp-geo-after">
            <p className="lb-body-lg lbp-geo-strip">
              Want to go deeper yourself? Our{' '}
              <Link to="/blog/ai-search-audit-clinic-bangkok/">10-point AI search audit checklist</Link> walks through each
              check.
            </p>
            <Button cta />
          </div>
        </Section>

        {/* Fit */}
        <Section alt>
          <SectionHeader
            eyebrow="Fit"
            title="Who GEO is for"
            lede="GEO works best for businesses where people ask for a recommendation before they buy, and where trust decides the sale."
          />
          <div className="lb-g2 lbp-geo-fit">
            <div className="lb-fit yes">
              <h3 className="lb-h3">Good fit</h3>
              <List large items={[
                'Clinics and healthcare providers where patients research before booking',
                'Restaurants, hotels and hospitality brands in competitive areas',
                'Property companies and agents serving local and international buyers',
                'Professional services: advisers, consultants, schools, specialists',
                'Businesses already doing SEO that haven’t adapted to AI search',
                'Businesses serving English-speaking and international customers in Thailand or Singapore',
              ]} />
            </div>
            <div className="lb-fit no">
              <h3 className="lb-h3">Not a fit</h3>
              <List large dash items={[
                'Products where only price decides the sale',
                'Anyone who needs results in 30 days. AI visibility is earned over months.',
              ]} />
            </div>
          </div>
        </Section>

        {/* Who does the work */}
        <Section>
          <SectionHeader eyebrow="The team" title="Who does the GEO work at Locully" />
          <div className="lb-narrow-copy">
            <p className="lb-body-lg">
              Locully’s founder, Rachaphon “Sunny” Sakchiraphong, runs strategy on every GEO account. A Bangkok team
              handles SEO, content and reporting. Locully was founded in 2020 and rebranded as Locully in 2025. It works
              with businesses in Bangkok, across Thailand and in Singapore, in English and Thai.
            </p>
            <p className="lb-body-lg">
              <Button variant="text" to="/about">More about Locully and the team</Button>
            </p>
          </div>
        </Section>

        {/* FAQ */}
        <Section alt>
          <SectionHeader eyebrow="FAQ" title="GEO and AI SEO questions, answered" />
          <FAQ qAs="h3" items={faqs.map((f) => ({ q: f.q, a: f.a || f.text }))} />
        </Section>

        {/* Lead form */}
        <LeadForm
          alt={false}
          eyebrow="AI audit"
          title="Get your AI audit"
          lede="Tell us your website. We’ll check what AI assistants say when your customers ask for a business like yours, and send you what we find. No cost, no commitment."
          subject="New AI Visibility Check Request (GEO page) — Locully"
          idPrefix="geo"
        />

        <Footer />
      </Page>
    </>
  );
}
