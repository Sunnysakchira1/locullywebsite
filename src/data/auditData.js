// All copy for /audit/ (the free AI visibility audit).
//
// Source: the unmerged /audit page (branch feat/audit-and-resources), rewritten
// through locully-content-writer → sounds-human-cft → ai-claims-guard-cft →
// self-audit-qa-gate-cft. Working files: homepage-redesign-2026-09/build/audit/.
//
// Rules for this file:
//   1. Every line is a complete sentence. Plain words a business owner uses.
//   2. The only result allowed is "0 → 38 AI-sourced paid consultations in a
//      single month (May 2026)" for an anonymised Bangkok clinic. Never name or
//      hint at the client (no "wellness", no branch names, no monthly series).
//   3. Every business name and count in the demo and the report tabs is
//      invented, and the page says so next to them.

export const PATH = '/audit/';
export const URL = `https://www.locully.org${PATH}`;

// Offer terms in one place. ⚠️ Confirm with Sunny before launch.
export const AUDIT_OFFER = {
  turnaround: 'five working days',
  questionsBack: 'one working day',
  questions: '30 or more',
};

export const META = {
  title: 'Free AI Visibility Audit: Does ChatGPT Name You? | Locully',
  description:
    "Locully's free AI visibility audit asks ChatGPT, Perplexity and Google AI the questions your customers ask, then shows who gets named instead of you, and why.",
};

export const HERO = {
  meta: ['Updated September 2026', 'Free', 'Five working days'],
  eyebrow: 'Free AI visibility audit',
  h1: 'Free AI visibility audit: see who ChatGPT recommends instead of you',
  lede:
    "Locully's AI visibility audit is a free check of whether ChatGPT, Perplexity and Google AI recommend your business. We ask them the questions your customers ask before they buy, and show you every answer and every business named in your place.",
  body: [
    "When someone asks ChatGPT to recommend a business like yours, it gives them a short list of names. Most owners never look at that list. Many of the businesses we check aren't on it.",
    "It's free. It takes five working days.",
  ],
  note: 'No sales call needed to start. We only need your website.',
};

// The mocked AI answer in the hero. Clinic names are invented.
export const DEMO = {
  question: 'What is the best clinic for dental implants in Bangkok?',
  intro: 'Based on reviews and expat guides, three clinics come up most often:',
  answers: [
    { name: 'Harbour Dental Bangkok', note: 'Named in several expat guides and directories.' },
    { name: 'Clearview Dental Clinic', note: 'Reviewed on international clinic sites.' },
    { name: 'Maple Tree Dental', note: 'Listed in Bangkok dentistry roundups.' },
  ],
  verdict: "Your clinic wasn't mentioned.",
  verdictNote:
    'First audits often look like this. The three clinics above got named because ChatGPT could find them on sites it trusts. It says nothing about who does better work.',
  caption: 'An example answer. The clinic names are invented.',
};

export const FINDOUT = {
  eyebrow: 'What you find out',
  h2: 'What the AI visibility audit tells you',
  lede: "Locully's AI visibility audit answers three questions about your business, with evidence rather than opinion.",
  items: [
    {
      n: '01',
      icon: 'users',
      title: 'Who AI recommends instead of you',
      body: 'The audit lists every business named in your place, and every website the AI read to name them. That second list shows you the websites that decide who gets recommended in your market.',
    },
    {
      n: '02',
      icon: 'search',
      title: 'Why your business was left out',
      body: 'We check your site the way AI search tools reach it. Can their crawlers read it at all? Do your pages say plainly what you sell, where, and for whom? Are your own pages competing with each other?',
    },
    {
      n: '03',
      icon: 'target',
      title: 'What to fix first',
      body: 'The audit ranks every problem, with the biggest difference for the least work at the top. You get a short list for this month, not forty things to worry about.',
    },
  ],
};

// The four tabs of the report, shown 2×2. They mirror the delivered Locully
// citation gap audit: raw responses → businesses named → websites used → target list.
// To use a real screenshot, save it in public/audit/ with every business name
// and web address removed, and set `image` to its path.
export const REPORT = {
  eyebrow: 'The report',
  h2: "What's in your AI visibility audit report",
  lede: "The AI visibility audit report is a spreadsheet with four tabs. Each tab answers one question, and they build from left to right. Here's each one, using a Bangkok dental clinic as the example.",
  caption: 'Business names and counts are invented. Your report uses your own questions and your market.',
  items: [
    {
      n: '01',
      tab: 'Raw responses',
      title: 'Every question, and what AI answered',
      body: 'We keep the full answer to every question, word for word. You read exactly what a customer saw when they asked about a business like yours.',
      image: null,
      table: {
        headers: ['Question', 'Named you?', 'Linked your site?'],
        rows: [
          ['best clinic for dental implants in Bangkok', 'No', 'No'],
          ['how much do dental implants cost in Bangkok', 'No', 'No'],
          ['which Bangkok dental clinic do expats use', 'No', 'No'],
        ],
      },
    },
    {
      n: '02',
      tab: 'Businesses named',
      title: 'Every business AI picked instead of you',
      body: "We pull out each business the AI recommended and note which question brought it up. This shows who AI thinks your competitors are. It's often not the list you'd write yourself.",
      image: null,
      table: {
        headers: ['Business named', 'Questions', 'You?'],
        rows: [
          ['Harbour Dental Bangkok', '14', 'No'],
          ['Clearview Dental Clinic', '11', 'No'],
          ['Maple Tree Dental', '9', 'No'],
        ],
      },
    },
    {
      n: '03',
      tab: 'Websites used',
      title: 'Every page AI read to build its answers',
      body: 'AI search tools repeat what they read. This tab lists every page the answers relied on, and marks whether your business appears on it.',
      image: null,
      table: {
        headers: ['Website', 'Times used', 'You on it?'],
        rows: [
          ['An expat living guide', '31', 'No'],
          ['A dental tourism directory', '26', 'No'],
          ['A clinic review site', '22', 'No'],
        ],
      },
    },
    {
      n: '04',
      tab: 'Your target list',
      title: 'The websites to get listed on',
      body: "This is the tab you act on. It lists every trusted website that doesn't mention you yet, most valuable first, with a note on how to approach each one.",
      image: null,
      table: {
        headers: ['Website', 'What to do', 'Priority'],
        rows: [
          ['An expat living guide', 'Ask to be added to the guide', 'High'],
          ['A dental tourism directory', 'Claim your clinic listing', 'High'],
          ['A clinic review site', 'Submit a clinic profile', 'Medium'],
        ],
      },
    },
  ],
};

export const STEPS = {
  eyebrow: 'The process',
  h2: 'How the free AI visibility audit works',
  lede: 'The free AI visibility audit takes five working days from the day you send your website.',
  items: [
    {
      n: '1',
      when: 'Day 0',
      title: 'You send your website',
      body: 'It takes two minutes. Add your city and the services you want more customers for, if you like. That helps us write better questions.',
    },
    {
      n: '2',
      when: 'Within 1 working day',
      title: 'We write your questions',
      body: "You get 30 or more real buying questions, the kind your customers type into ChatGPT. You can change any of them before we run anything.",
    },
    {
      n: '3',
      when: 'Days 2 to 4',
      title: 'We ask the AI tools and check your site',
      // Rendered with links in the page component (see STEP3_LINKS).
      body: null,
    },
    {
      n: '4',
      when: 'Day 5',
      title: 'You get the report',
      body: 'Four tabs, a short fix list and a plain-English summary, five working days after you sent your website.',
    },
  ],
  stripText: 'Want to see what ChatGPT says about your business?',
};

export const EXTERNAL = {
  openaiBots: 'https://developers.openai.com/api/docs/bots',
  perplexityBots: 'https://docs.perplexity.ai/docs/resources/perplexity-crawlers',
  robotsIntro: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro',
  googleAiGuide: 'https://developers.google.com/search/docs/fundamentals/ai-optimization-guide',
  pew: 'https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/',
};

export const COMPARE = {
  eyebrow: 'The difference',
  h2: 'AI visibility audit vs an SEO audit',
  lede: 'An SEO audit checks whether Google can find and rank your pages. An AI visibility audit checks whether AI assistants name you when a customer asks for a recommendation.',
  headers: ['', 'SEO audit', 'AI visibility audit'],
  rows: [
    ['The question it answers', 'Can Google crawl, index and rank my pages?', 'Do ChatGPT, Perplexity and Google AI name my business?'],
    ['Where it looks', "Your website and Google's results", 'Real AI answers, and every website those answers relied on'],
    ['What it measures', 'Rankings, errors, speed, links', 'Times you were named, times you were linked, who was named instead'],
    ['What you act on', 'Fixes to your own site', 'Fixes to your site, plus a list of outside websites to get listed on'],
  ],
};

export const PROOF = {
  eyebrow: 'Results',
  h2: 'An AI visibility result from one Bangkok clinic',
  label: 'Result · Bangkok clinic',
  big: '0 → 38',
  sub: 'AI-sourced paid consultations in a single month (May 2026). The clinic had none from AI search when the work began.',
  body: "These are paid bookings the clinic recorded as coming from an AI assistant, counted in the clinic's own booking records. Clicks and impressions aren't counted.",
  note: "Results are shown without client names. Figures come from each client's booking records, GA4 or ads account. Results depend on your market, budget and starting position. No agency can promise a model will name you.",
};

export const FAQS = [
  {
    q: 'Why is the AI visibility audit free?',
    a: "The AI visibility audit is free because showing you the problem works better than describing it. Slides about AI search convince nobody. The real answers ChatGPT gives about your business usually do. Some owners ask us to fix what they see. If you take the report to your own team instead, that's fine.",
  },
  {
    q: 'How is an AI visibility audit different from an SEO audit?',
    a: 'An SEO audit checks whether Google can find and rank your website. An AI visibility audit checks whether AI assistants name your business, then asks them your customers\' questions to see what they say. A standard SEO audit checks Google, not AI answers. The table above shows the full difference.',
  },
  {
    q: 'Which AI tools does the audit cover?',
    a: "The audit covers ChatGPT, Perplexity and Google's AI answers (AI Overviews and AI Mode). Tell us if your customers mostly search in Thai, and we'll write Thai questions too.",
  },
  {
    q: 'What do you need from me?',
    a: "We need your website and an email address to send the report to. Your city and the services you want more customers for help us write sharper questions. We don't need logins, Google Analytics access or a call.",
  },
  {
    q: 'How soon will anything change after I fix the problems?',
    a: "We can't give you a date. AI answers change when the websites behind them change, and each tool updates on its own schedule. Some technical fixes, like unblocking a crawler, remove a block the day you make them. When the answers change after that is up to each AI tool. Getting listed on outside websites takes longer. No agency can promise a model will name you.",
  },
  {
    q: 'What if ChatGPT already recommends my business?',
    a: "Then the audit shows where you're winning, where you're missing, and whether AI describes you correctly. Being named with the wrong price, location or service is a problem too. It's common for a business to be named for one service and missing for the rest.",
  },
  {
    q: 'What happens to the information you find?',
    a: "The AI visibility audit report belongs to you. We sometimes use findings as examples, like the ones on this page, but we remove every business name and web address first. We never put a business's name next to its weaknesses.",
  },
];

export const CLOSING = {
  eyebrow: 'Free AI visibility check',
  h2: 'Get your free AI visibility audit',
  lede: "Send us your website. We'll write your questions, ask ChatGPT, Perplexity and Google AI, and send you the answers within five working days.",
  asideTitle: 'What happens next',
  aside: [
    'Within one working day, you get your list of questions to check.',
    'Within five working days, you get the four-tab report and a short fix list.',
    'No obligation. The report is yours whether or not you work with us.',
  ],
  subject: 'Free AI visibility audit request (/audit/)',
  extraFields: [
    { name: 'city', label: 'City', placeholder: 'Bangkok', autoComplete: 'address-level2' },
    { name: 'services', label: 'Services you want more customers for', placeholder: 'dental implants, veneers' },
  ],
};

export const RELATED = [
  { to: '/geo/', label: 'GEO: how Locully helps businesses get named in AI search' },
  { to: '/blog/ai-search-audit-clinic-bangkok/', label: 'The AI search audit a Bangkok clinic can run itself' },
  { to: '/blog/why-clinic-not-showing-chatgpt/', label: "Why your clinic isn't showing up in ChatGPT" },
  { to: '/blog/how-ai-chooses-sources-to-cite/', label: 'How AI chooses which sources to cite' },
  { to: '/case-studies/', label: 'Case studies' },
];
