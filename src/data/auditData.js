// All /audit page copy.
//
// Written for a busy clinic or restaurant owner, not a marketer. Rules:
//   1. Short sentences. Active voice. No SEO jargon — say "can AI read your
//      site" instead of "crawlability", "your own pages compete" instead of
//      "cannibalisation".
//   2. No presumptuous headings. Show evidence, don't tell the reader how
//      they feel.
//   3. "Free" earns its place once.

export const AUDIT_OFFER = {
  turnaround: '5 working days',
  capacity: 'Four a month',
  exclusivity: 'One business per area. We never audit two competitors.',
  questions: 40,
};

export const HERO = {
  eyebrow: 'AI Visibility Audit',
  h1: 'Does ChatGPT recommend you, or your competitor?',
  sub: 'We ask ChatGPT, Perplexity and Google 40 questions your customers ask before they buy. Then we show you who got named, and why it wasn\'t you. Free. Five days.',
  formTitle: 'Start your audit',
  formSub: 'Three things. That\'s the whole form.',
  cta: 'Send me my audit',
  microtrust: 'Four a month · one business per area · the report is yours to keep',
};

export const TRUST_BAR = [
  { stat: '9×', label: 'more AI bookings for Form Recovery in six months' },
  { stat: '40', label: 'questions, asked live to three AI tools' },
  { stat: '5 days', label: 'from start to report and a call' },
];

export const FINDINGS = {
  h2: 'What we usually find',
  lead: 'Real results from real audits. Every number came out of a report we sent a client.',
  items: [
    {
      stat: '0 of 3',
      title: 'AI answers mentioned the clinic',
      body: 'A Bangkok clinic sat 4th on Google. AI named five competitors and a directory. Never them.',
    },
    {
      stat: '16 of 16',
      title: 'searches where their pages fought each other',
      body: 'Their blog posts were beating their own booking pages. By up to 50 places.',
    },
    {
      stat: '500+',
      title: 'pages AI could not understand',
      body: 'The plugin that tells AI what the business does was installed, switched on, and doing nothing.',
    },
    {
      stat: '100%',
      title: 'of prices hidden from AI',
      body: 'Prices were only given over LINE. So AI quoted a competitor who published theirs.',
    },
  ],
};

export const SAMPLE = {
  h2: 'Here is what you get back',
  lead: 'The main page of the report. Every question we asked, every website AI trusted, and whether you were on the list. This is a real one, with names removed.',
  caption: 'Real audit — Bangkok dental clinic. 4 of 40 questions shown. Names and web addresses removed.',
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
  gapsTitle: 'Where you need to be',
  gapsLead: 'The websites AI trusts on your topic, that never mention you. Most-quoted first. Work down the list.',
  gaps: [
    { domain: 'expatden.com', prompts: 24, cites: 31, competitor: true, priority: 'High' },
    { domain: 'dentaldepartures.com', prompts: 19, cites: 26, competitor: true, priority: 'High' },
    { domain: 'whatclinic.com', prompts: 17, cites: 22, competitor: true, priority: 'High' },
    { domain: 'reddit.com/r/Bangkok', prompts: 11, cites: 14, competitor: true, priority: 'Medium' },
    { domain: 'thethaiger.com', prompts: 8, cites: 9, competitor: false, priority: 'Medium' },
  ],
};

export const DELIVERABLES = {
  h2: 'What is in the report',
  lead: 'About 25 pages, plus a 45-minute call where we walk you through it.',
  items: [
    {
      name: 'Who AI recommends instead of you',
      what: 'We ask 40 buying questions and write down every website AI quoted.',
      why: 'You get the exact list of places you need to be mentioned. Not a guess.',
    },
    {
      name: 'Which competitors keep winning',
      what: 'Which rivals get named, on which questions, and who is naming them.',
      why: 'Your real competition is whoever AI finds easiest to quote. Usually not who you think.',
    },
    {
      name: 'Whether AI can reach your site',
      what: 'We test if the AI tools are allowed in, or blocked.',
      why: 'We have found sites blocking every AI tool by accident. If this is broken, nothing else works.',
    },
    {
      name: 'Whether your site explains itself',
      what: 'We check the hidden code that tells AI what you do, where you are, and what you charge.',
      why: 'Without it, AI has to guess. It usually guesses wrong, or picks someone clearer.',
    },
    {
      name: 'Whether AI can quote your pages',
      what: 'We look at how your pages answer questions, and where prices and results are hidden.',
      why: 'An answer AI cannot lift is an answer it takes from someone else.',
    },
    {
      name: 'Whether your pages fight each other',
      what: 'Every search where two or more of your own pages compete.',
      why: 'Blog posts beating your booking pages split your traffic and hide the problem.',
    },
    {
      name: 'What to fix first',
      what: 'Every problem ranked by what it is worth against what it costs to fix.',
      why: 'Forty problems is overwhelming. Four is a plan.',
    },
  ],
};

export const PROOF = {
  h2: 'Form Recovery & Wellness, six months later',
  lead: 'Paid consultations that came from an AI recommendation. Not clicks or enquiries — real bookings, with the source recorded when they booked.',
  series: [
    { month: 'Oct', value: 3 },
    { month: 'Nov', value: 13 },
    { month: 'Dec', value: 16 },
    { month: 'Jan', value: 17 },
    { month: 'Feb', value: 13 },
    { month: 'Mar', value: 27 },
  ],
  callout: '3 → 27 a month. Nine times more.',
  honest: 'February dropped. We left it in, because that is what happened. Any agency showing you a line that only goes up drew that line themselves.',
};

export const WHY_FREE = {
  h2: 'Why it is free',
  body: [
    'Because showing beats telling.',
    'We could send you a slide deck about AI search. Instead we ask AI about your business and show you the answer. Most owners have never seen it.',
    'Enough of them ask us to fix it that the maths works. The rest take the report to their own team. That is fine — we write it so anyone can follow it.',
  ],
  catch: {
    label: 'The catch',
    text: 'It takes us about five days of work, so we only do four a month. If you are not going to act on it, take the one-minute check on our homepage instead.',
  },
};

export const PROCESS = {
  h2: 'How it works',
  steps: [
    { n: '01', title: 'You send three things', body: 'Your website, your city, and what you want more customers for.', when: 'Day 0' },
    { n: '02', title: 'We write the questions', body: '40 questions a real customer would ask before choosing you. You approve them first.', when: 'Day 1' },
    { n: '03', title: 'We ask them', body: 'Every question, to every major AI tool. We record who gets named.', when: 'Days 2–3' },
    { n: '04', title: 'We check your site', body: 'We look for the reasons AI skipped you.', when: 'Days 3–4' },
    { n: '05', title: 'You get the report', body: '45 minutes on a call, going through it together. The report is yours either way.', when: 'Day 5' },
  ],
};

export const NOT_INCLUDED = {
  h2: 'When to skip this',
  lead: 'Four times you should not book:',
  items: [
    'You want it fixed, not explained. This tells you what is wrong. Fixing it is your team or a separate job — we will say which parts you can do yourself.',
    'You need customers this month. AI takes 60–90 days to notice changes. Some things move in 30. Nothing moves in a week.',
    'Your offer is genuinely weaker. We can get AI to find you and read you. We cannot get it to pick 12 reviews over 400.',
    'You have a small site and no real competitors. The one-minute check on our homepage will tell you enough.',
  ],
};

export const FAQS = [
  {
    q: 'How is this different from a normal SEO audit?',
    a: 'A normal audit checks if Google can find you. This checks if AI can understand and quote you — then asks AI 40 times and writes down what it said. Most SEO audits never open ChatGPT once.',
  },
  {
    q: 'What is the catch?',
    a: 'Time, not money. It takes five days of work, so we do four a month and check you are a fit first. We do it because enough owners ask us to fix what we find. You keep the report either way.',
  },
  {
    q: 'Who does the work?',
    a: 'Sunny, who runs Locully. Same process we use for paying clients. Not an intern, and not a tool that emails you a PDF — the questions are written for your business by hand.',
  },
  {
    q: 'How long until it works?',
    a: 'You get the report on day 5. After you make the changes, AI usually takes 60–90 days to catch up. A few things move inside 30.',
  },
  {
    q: 'Do you work outside Bangkok?',
    a: 'Yes. ChatGPT and Perplexity work the same everywhere. Google is different country to country, so we test yours. We have clients in Bangkok, Singapore and the UK.',
  },
  {
    q: 'Will you audit my competitor too?',
    a: 'No. One business per area. You are getting a map of your market — it is worth nothing if we hand the same map to the people you compete with.',
  },
  {
    q: 'What happens to my information?',
    a: 'The report is yours. We sometimes use findings as examples, like the sample on this page, with all names and web addresses removed. We never show a client\'s name next to their weak spots.',
  },
];
