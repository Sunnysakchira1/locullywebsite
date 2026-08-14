// All /audit page copy. Voice: second person, short sentences, a real number in
// every claim, honest about limits. Edit copy here — never in the JSX.
//
// Two rules this file exists to enforce:
//   1. No presumptuous headings. We don't tell the reader what they already
//      know or how they feel — we show them evidence and let them conclude.
//   2. "Free" earns its place once. Repeating it makes the offer look cheap
//      rather than generous.

export const AUDIT_OFFER = {
  turnaround: '5 working days',
  capacity: 'Four a month',
  exclusivity: 'One business per category, per area — we will not audit two competitors against each other.',
  questions: 40,
};

export const HERO = {
  eyebrow: 'AI Visibility Audit',
  h1: 'See every AI answer your competitors appear in. And you don\'t.',
  sub: 'We run 40 buying questions through ChatGPT, Perplexity and Google AI Overviews, record every website each one cites, and send you the list of places your name should be but isn\'t. Five working days, no charge.',
  formTitle: 'Start your audit',
  formSub: 'Three fields. We\'ll come back with your question set before we run anything.',
  cta: 'Send me my audit',
  microtrust: 'Four a month · one business per category · you keep the report either way',
};

// Shown under the hero — proof before the reader has to scroll.
export const TRUST_BAR = [
  { stat: '9×', label: 'growth in AI-sourced bookings for Form Recovery in six months' },
  { stat: '40', label: 'buying questions run live, across three AI engines' },
  { stat: '5 days', label: 'from brief to report and a walkthrough call' },
];

// Replaces the old "You already know something is off" section. Same job —
// get the reader nodding — but from evidence rather than assumption.
export const FINDINGS = {
  h2: 'What we keep finding',
  lead: 'Recurring results from audits we\'ve run for Bangkok clinics, restaurants and property firms. Every number here came out of a real report.',
  items: [
    {
      stat: '0 of 3',
      title: 'AI Overviews cited the client',
      body: 'A Bangkok aesthetics clinic ranking 4th on Google appeared in none of the three AI Overviews for its own head terms. The cited sources were five competitors and a directory.',
    },
    {
      stat: '16 of 16',
      title: 'keywords where the client competed with itself',
      body: 'Every tracked keyword returned two to four of the same client\'s URLs. Their blog posts outranked their own service pages by up to 50 positions.',
    },
    {
      stat: '0',
      title: 'schema output across 500+ posts',
      body: 'A fertility clinic had a schema plugin installed and configured. It was emitting nothing. No AI engine could identify what the business did.',
    },
    {
      stat: '100%',
      title: 'of prices invisible to AI',
      body: 'Pricing available only through a LINE conversation. Every engine that tried to answer "how much does it cost" cited a competitor who published theirs.',
    },
  ],
};

export const SAMPLE = {
  h2: 'The centre of the report',
  lead: 'Your citation gap analysis. Every question, every website the AI actually cited, and whether you were among them. This is a real one with the client and competitors anonymised.',
  caption: 'Sample — Bangkok dental clinic, 4 of 40 questions shown. Client name and domain removed; findings unchanged.',
  verdict: { cited: 0, total: 40, sources: 173, competitorMentions: 61 },
  prompts: [
    {
      q: 'best clinic for dental implants in Bangkok',
      cited: false,
      sources: [
        { domain: 'expatden.com', title: 'Dental Care in Bangkok: A Complete Guide for Expats', competitor: true },
        { domain: 'dentaldepartures.com', title: 'Top 10 Dental Clinics in Bangkok — Verified Reviews', competitor: true },
        { domain: 'whatclinic.com', title: 'Dental Implant Clinics in Bangkok, Thailand', competitor: true },
        { domain: 'reddit.com/r/Bangkok', title: 'Anyone had implants done here? Recommendations?', competitor: false },
      ],
    },
    {
      q: 'how much do dental implants cost in Bangkok',
      cited: false,
      sources: [
        { domain: 'dentaldepartures.com', title: 'Dental Implant Cost in Thailand vs Australia 2026', competitor: true },
        { domain: 'expatden.com', title: 'What Dental Work Actually Costs in Bangkok', competitor: true },
        { domain: 'thethaiger.com', title: 'Medical Tourism Pricing Guide: Thailand 2026', competitor: false },
      ],
    },
    {
      q: 'which Bangkok dental clinic do expats use',
      cited: false,
      sources: [
        { domain: 'expatden.com', title: 'The Clinics Bangkok Expats Actually Use', competitor: true },
        { domain: 'reddit.com/r/Bangkok', title: 'Best dentist for a long-term expat?', competitor: true },
        { domain: 'thethaiger.com', title: 'Healthcare for Foreigners in Bangkok', competitor: false },
      ],
    },
    {
      q: 'most trusted veneers clinic in Bangkok',
      cited: false,
      sources: [
        { domain: 'whatclinic.com', title: 'Veneers in Bangkok — Clinic Directory', competitor: true },
        { domain: 'bangkokpost.com', title: 'The Rise of Cosmetic Dentistry in Thailand', competitor: false },
        { domain: 'expatden.com', title: 'Cosmetic Dentistry in Bangkok: What to Know First', competitor: true },
      ],
    },
  ],
  gapsTitle: 'Your gap list',
  gapsLead: 'The websites AI trusts on your topic that never mention you. Ranked by how often they were cited — that\'s your outreach order.',
  gaps: [
    { domain: 'expatden.com', prompts: 24, cites: 31, competitor: true, priority: 'High' },
    { domain: 'dentaldepartures.com', prompts: 19, cites: 26, competitor: true, priority: 'High' },
    { domain: 'whatclinic.com', prompts: 17, cites: 22, competitor: true, priority: 'High' },
    { domain: 'reddit.com/r/Bangkok', prompts: 11, cites: 14, competitor: true, priority: 'Medium' },
    { domain: 'thethaiger.com', prompts: 8, cites: 9, competitor: false, priority: 'Medium' },
  ],
};

export const DELIVERABLES = {
  h2: 'Everything in the report',
  lead: 'Twenty to thirty pages, plus a 45-minute call where we go through it with you.',
  items: [
    {
      name: 'Citation gap analysis',
      what: '40 buying questions run live through ChatGPT, Perplexity and Google AI Overviews. Every source recorded, your presence or absence flagged on each.',
      why: 'It gives you the exact list of websites you need to be mentioned on. Not a theory about authority — the actual pages the AI reads before it answers.',
    },
    {
      name: 'Competitor citation map',
      what: 'Which competitors get named, on which questions, and which sites are doing the naming.',
      why: 'Your real competition is whoever the AI finds easiest to quote. It is often not the business you benchmark against.',
    },
    {
      name: 'AI crawler access check',
      what: 'GPTBot, PerplexityBot, ClaudeBot and Google-Extended tested against your live site, plus robots.txt and llms.txt.',
      why: 'We have found sites blocking every AI crawler at the firewall without knowing. If this is broken, nothing else on this list can work.',
    },
    {
      name: 'Structured data audit',
      what: 'Every schema type on every template, validated. Organization, LocalBusiness, Service, FAQ, Article, author attribution.',
      why: 'Schema is how a machine reads your business without guessing. Plugins that appear configured frequently emit nothing.',
    },
    {
      name: 'Content extractability review',
      what: 'Whether your pages answer questions in a form an AI can lift and quote, and where prices, outcomes and credentials are hidden.',
      why: 'An answer an AI cannot extract is an answer it will take from someone else.',
    },
    {
      name: 'Cannibalisation check',
      what: 'Every keyword where more than one of your URLs competes, with the live position of each.',
      why: 'Blog posts outranking your own service pages split your authority and hide the problem inside a healthy-looking average position.',
    },
    {
      name: 'Prioritised fix list',
      what: 'Every finding ranked by impact against effort, with the first 30 days written out.',
      why: 'Forty problems is a paralysis list. Four is a plan.',
    },
  ],
};

export const PROOF = {
  h2: 'Form Recovery & Wellness, six months after their audit',
  lead: 'Confirmed paid consultations that came from an AI recommendation. Not enquiries, not sessions — bookings, with the source recorded at the time of booking.',
  series: [
    { month: 'Oct', value: 3 },
    { month: 'Nov', value: 13 },
    { month: 'Dec', value: 16 },
    { month: 'Jan', value: 17 },
    { month: 'Feb', value: 13 },
    { month: 'Mar', value: 27 },
  ],
  callout: '3 → 27 a month. A 9× increase.',
  honest: 'February dropped. We have left it in, because it is what happened. AI citation volume moves week to week, and a line that only goes up is a line somebody drew.',
};

export const WHY_FREE = {
  h2: 'Why there\'s no charge',
  body: [
    'Because it beats a pitch.',
    'We could send you a deck about AI search. Instead we ask the AI about your business and show you the answer. Most owners have never seen it, and it makes the decision obvious in either direction.',
    'Enough of them ask us to close the gap that the maths works. The rest take the report to their own team, which is genuinely fine — it is written so somebody else can execute it.',
  ],
  catch: {
    label: 'The constraint',
    text: 'It costs us about five days of work, so we run four a month and we qualify first. If you have no intention of acting on what we find, the eight-question self-check on our homepage takes a minute and will tell you most of it.',
  },
};

export const PROCESS = {
  h2: 'How it runs',
  steps: [
    { n: '01', title: 'You send three things', body: 'Your website, your city, and the services you want more of. That is the entire brief.', when: 'Day 0' },
    { n: '02', title: 'We write your question set', body: '40 buying questions a real customer would ask before choosing you. You approve them before anything runs.', when: 'Day 1' },
    { n: '03', title: 'We run them live', body: 'Every question, through every major AI engine, recording the full citation list behind each answer.', when: 'Days 2–3' },
    { n: '04', title: 'We audit the site against the gaps', body: 'Crawler access, schema, extractability, cannibalisation — checked against the specific failures the questions exposed.', when: 'Days 3–4' },
    { n: '05', title: 'Report and walkthrough', body: '45 minutes, screen shared, every finding explained. The report is yours regardless of what you do next.', when: 'Day 5' },
  ],
};

export const NOT_INCLUDED = {
  h2: 'When not to book this',
  lead: 'Four situations where the audit is the wrong thing to ask us for:',
  items: [
    'You want the problem fixed, not diagnosed. This is a diagnosis. Implementation is your team or a separate engagement, and we will tell you which findings you can handle in-house.',
    'You need results this month. AI engines re-crawl on their own schedule. The clients we track take 60–90 days after the fixes ship before citation counts move.',
    'Your offer is genuinely weaker than the competition. We can make a machine find you and read you. We cannot make it prefer a clinic with 12 reviews to one with 400.',
    'You have under 20 pages and no real competitors. The eight-question self-check on our homepage will tell you most of what you need, in a minute.',
  ],
};

export const FAQS = [
  {
    q: 'How is this different from a normal SEO audit?',
    a: 'A normal SEO audit checks whether Google can crawl and rank you. This checks whether an AI can read, understand and quote you — then asks the AI directly, 40 times, and records what it says. Most SEO audits never open ChatGPT once.',
  },
  {
    q: 'What\'s the catch?',
    a: 'Capacity, not money. It takes about five days of work, so we run four a month and qualify before starting. We do it because enough owners who see their citation gap ask us to close it. You keep the report either way, and there is nothing to cancel.',
  },
  {
    q: 'Who actually runs it?',
    a: 'Sunny, who runs Locully, with the same process we use for paying clients. Not an intern, and not a tool that emails you a PDF — the 40 questions are written for your business and reviewed by hand.',
  },
  {
    q: 'How long until I see results?',
    a: 'Findings on day 5. Results depend on how fast the fixes ship. Citation movement typically starts 60–90 days after that; technical items like crawler access and schema can move inside 30.',
  },
  {
    q: 'Do you work outside Bangkok?',
    a: 'Yes. ChatGPT, Perplexity and Gemini behave the same everywhere. Google AI Overviews vary by country, so we run those against your actual market. We have clients in Bangkok, Singapore and the UK.',
  },
  {
    q: 'Will you audit my competitor too?',
    a: 'Not in the same category and area. If we have audited a dental clinic in Thonglor, we will not take another. You are getting a map of your category — it is worth nothing if we hand the same map to the people you compete with.',
  },
  {
    q: 'What happens to my data?',
    a: 'The report is yours. We use anonymised findings as examples — like the sample on this page — with names, domains and screenshots removed. We never publish a client\'s identity alongside their weaknesses.',
  },
];
