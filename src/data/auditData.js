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
  sub: 'We ask ChatGPT the questions your customers ask. Things like "best dentist in Bangkok". Then we show you the names it gave back — and why yours was not one of them.',
  formTitle: 'Start your audit',
  formSub: 'Three questions. That is the whole form.',
  cta: 'Send me my audit',
  microtrust: 'Free · four a month · we only work with one business per area',
};

export const TRUST_BAR = [
  { stat: '13×', label: 'more bookings from AI for one Bangkok clinic' },
  { stat: '40', label: 'questions we ask, one by one, in real AI tools' },
  { stat: '5 days', label: 'until you get the answers, and a call to explain them' },
];

export const FINDINGS = {
  h2: 'What we usually find',
  lead: 'Things we found on real websites. Every number here came from a report we sent a client.',
  items: [
    {
      stat: '0 of 3',
      title: 'AI answers mentioned the clinic',
      body: 'They were 4th on Google. But when we asked AI, it named five other clinics. Never theirs.',
    },
    {
      stat: '16 of 16',
      title: 'searches where they competed with themselves',
      body: 'Their blog posts were beating their own booking page. By up to 50 places.',
    },
    {
      stat: '500+',
      title: 'pages AI could not make sense of',
      body: 'They had paid for a tool to fix this. It was switched on. It was doing nothing.',
    },
    {
      stat: '100%',
      title: 'of their prices were hidden',
      body: 'You had to ask on LINE to get a price. So AI used a competitor who put theirs online.',
    },
  ],
};

export const SAMPLE = {
  h2: 'Here is what you get back',
  lead: 'This is the main part of the report. We ask AI a question. We write down which websites it used to answer. Then we check whether yours was one of them. Here it is, step by step.',
  caption: 'Real audit — Bangkok dental clinic. 4 of 40 questions shown. Names and web addresses removed.',

  // The walkthrough. Each step names one part of the format and explains it
  // before the reader sees the data, so the layout teaches as it demonstrates.
  steps: [
    {
      n: '01',
      name: 'The question',
      explain: 'We write 40 questions a real customer would ask before choosing you. Not "dentist Bangkok". Questions like "how much do implants cost". Pick one below and follow it through.',
    },
    {
      n: '02',
      name: 'The websites AI quoted',
      explain: 'AI does not make its answers up. It reads websites and repeats what they say. These are the websites it read to answer that question, in the order it used them.',
    },
    {
      n: '03',
      name: 'Were you in there?',
      explain: 'Now we look for you. We check every website AI used against your name and your address online. This clinic was never used. Not once in 40 questions.',
    },
    {
      n: '04',
      name: 'Where you need to be',
      explain: 'We now know which websites AI listens to. The ones it uses most, that never mention you, go at the top. That is your to-do list.',
    },
  ],
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
  gapsTitle: 'Your list, most important first',
  gapsLead: 'AI used every one of these to answer your customers. None of them mention you. Start at the top.',
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
  lead: 'About 25 pages. Then a 45-minute call where we go through it with you.',
  items: [
    {
      name: 'Who AI recommends instead of you',
      what: 'We ask 40 questions and write down every website AI used to answer them.',
      why: 'You end up with the exact list of places you need to be mentioned. Not a guess.',
    },
    {
      name: 'Which competitors keep winning',
      what: 'Which of your rivals get named, on which questions, and which websites are naming them.',
    },
    {
      name: 'Can AI open your website at all?',
      what: 'Some websites block AI without meaning to. We check yours.',
      why: 'We have found sites shutting out every AI tool by accident. If this is wrong, nothing else matters.',
    },
    {
      name: 'Does your website say what you do?',
      what: 'Your website has hidden notes that tell AI your services, your address and your prices. We check yours are there.',
    },
    {
      name: 'Can AI copy an answer off your page?',
      what: 'We read your pages the way AI does, and find the answers that are buried or missing.',
    },
    {
      name: 'Are your own pages competing?',
      what: 'Every search where two or more of your pages are going after the same customer.',
      why: 'When your blog beats your booking page, you split your own customers in half.',
    },
    {
      name: 'What to fix first',
      what: 'Every problem in order: what it is worth, and how hard it is to fix.',
    },
  ],
};

export const PROOF = {
  h2: 'A Bangkok wellness clinic, seven months on',
  lead: 'People who found this clinic through AI, then booked and paid. Not clicks. Not enquiries. We asked each one how they found the clinic when they booked.',
  series: [
    { month: 'Oct', value: 3 },
    { month: 'Nov', value: 13 },
    { month: 'Dec', value: 16 },
    { month: 'Jan', value: 17 },
    { month: 'Feb', value: 13 },
    { month: 'Mar', value: 27 },
    { month: 'Apr', value: 38 },
  ],
  callout: '3 → 38 a month. Almost thirteen times more.',
  honest: 'February went down. We left it in, because that is what happened. If an agency shows you a line that only goes up, they drew it themselves.',
};

export const WHY_FREE = {
  h2: 'Why it is free',
  body: [
    'Because showing beats telling.',
    'We could send you slides about AI search. Instead we ask AI about your business and show you what it said. Enough owners ask us to fix what they see. That pays for the rest.',
  ],
  catch: {
    label: 'The catch',
    text: 'It takes us five days, so we only do four a month. If you are not going to do anything with it, try the one-minute check on our homepage instead.',
  },
};

export const PROCESS = {
  h2: 'How it works',
  steps: [
    { n: '01', title: 'You send three things', body: 'Your website, your city, and what you want more customers for. That is it.', when: 'Day 0' },
    { n: '02', title: 'We write the questions', body: '40 questions a real customer would ask before picking you. You see them first and can change any of them.', when: 'Day 1' },
    { n: '03', title: 'We ask them', body: 'Every question, in every big AI tool. We write down which businesses get named.', when: 'Days 2–3' },
    { n: '04', title: 'We look at your website', body: 'We go through it to find the reasons AI skipped you.', when: 'Days 3–4' },
    { n: '05', title: 'You get the report', body: 'We spend 45 minutes going through it with you. The report is yours to keep, whatever you decide.', when: 'Day 5' },
  ],
};

export const NOT_INCLUDED = {
  h2: 'When to skip this',
  lead: 'Four times you should not bother:',
  items: [
    'You want it fixed, not explained. This tells you what is wrong. Fixing it is a separate job, or your own team — we will tell you which bits you can do yourself.',
    'You need customers this month. AI takes two to three months to notice changes. Some things move faster. Nothing moves in a week.',
    'Your business is genuinely the weaker choice. We can get AI to find you and read you. We cannot make it pick 12 reviews over 400.',
    'You have a small website and nobody really competing with you. The one-minute check on our homepage will tell you enough.',
  ],
};

export const FAQS = [
  {
    q: 'How is this different from a normal SEO audit?',
    a: 'A normal audit checks whether Google can find you. This one checks whether AI can understand you and copy from you. Then it asks AI 40 times and writes down the answers. Most SEO audits never open ChatGPT once.',
  },
  {
    q: 'Who does the work?',
    a: 'Sunny, who runs Locully. The same way we do it for paying clients. Not an intern, and not a robot that emails you a PDF. The questions are written for your business by hand.',
  },
  {
    q: 'How long until it works?',
    a: 'You get the report in five days. After you make the changes, AI usually takes two to three months to catch up. A few things move faster.',
  },
  {
    q: 'Do you work outside Bangkok?',
    a: 'Yes. ChatGPT works the same everywhere. Google changes from country to country, so we test yours. We have clients in Bangkok, Singapore and the UK.',
  },
  {
    q: 'Will you audit my competitor too?',
    a: 'No. One business per area. You are getting a map of your market. It is worth nothing to you if we hand the same map to the people you are up against.',
  },
  {
    q: 'What happens to my information?',
    a: 'The report is yours. We sometimes show what we found as an example, like the one on this page, with every name and web address taken out. We never put a client\'s name next to their weak spots.',
  },
];
