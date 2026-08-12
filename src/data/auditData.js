// All /audit page copy. Voice: second person, short sentences, a real number in
// every claim, honest about limits. Edit copy here — never in the JSX.

// The audit is free and used as the primary BD conversion tool. Because it is
// free, the page has to work harder on two fronts: explain WHY it is free, and
// filter hard enough that five days of work goes to people who can act on it.
export const AUDIT_OFFER = {
  price: 'Free',
  turnaround: '5 working days',
  capacity: 'We run four a month',
  exclusivity: 'One business per category, per area — we will not audit two competitors against each other.',
};

export const HERO = {
  eyebrow: 'AI Visibility Audit',
  h1: 'Find out why AI recommends your competitors instead of you.',
  sub: 'We ask ChatGPT, Perplexity and Google the questions your customers actually ask. Then we show you every site the AI trusted, every competitor it named, and exactly why your name never came up.',
  cta: 'Book my free audit',
  ctaSub: 'Free. Report in 5 working days. We run four a month, and we will not audit two competitors in the same category.',
};

export const SYMPTOMS = {
  h2: 'You already know something is off',
  lead: 'Most owners come to us with one of these. Any of them sound familiar?',
  items: [
    {
      title: 'You rank on Google but nobody calls',
      body: 'Your page sits at position 4. Traffic is flat anyway. That is what happens when the AI answer above your listing already gave the customer three names — and none of them were yours.',
    },
    {
      title: 'A competitor keeps getting named',
      body: 'You ask ChatGPT for the best clinic in your area and the same two names come back every time. Neither of them is better than you. They are just easier for a machine to read.',
    },
    {
      title: 'Your agency reports look great and nothing changes',
      body: 'Impressions up. Average position up. Bookings flat. Average position blends every URL you own — it hides the fact that your money page is on page 6 while a blog post takes the traffic.',
    },
    {
      title: 'You have no idea what AI says about you',
      body: 'Nobody has ever checked. Not once. This is the most common answer we get, from businesses spending six figures a year on marketing.',
    },
  ],
};

export const WHY_FREE = {
  h2: 'Why is it free?',
  body: [
    'Because it works better than a pitch.',
    'We could send you a deck about AI search. Instead we go and ask the AI about your business, in front of you, and show you what it says. Most owners have never seen it. It is uncomfortable and it is specific, and it makes the decision obvious in either direction.',
    'A good number of people who see their own citation gap ask us to close it. That is the whole business model. The rest take the report to their own team, and that is genuinely fine — it is written so somebody else can execute it.',
  ],
  catch: {
    label: 'The catch',
    text: 'It costs us about five days of real work, so we run four a month and we qualify hard. If you have no intention of ever fixing what we find, say so up front and take the eight-question self-check on our homepage instead. No hard feelings — it takes a minute and it will tell you whether you have a problem.',
  },
};

export const DELIVERABLES = {
  h2: 'What you actually get',
  lead: 'A 20–30 page report and a 45-minute call to walk you through it. Here is what is in it:',
  items: [
    {
      name: 'Citation gap analysis',
      what: '40 buying questions run live through ChatGPT, Perplexity and Google AI Overviews. We record every source each engine cited and whether you were among them.',
      why: 'This is the core of the audit. It tells you which websites the AI treats as authorities on your topic — and gives you the exact list of places you need to be mentioned.',
    },
    {
      name: 'Competitor citation map',
      what: 'Which competitors get named, on which questions, and which sites are doing the naming.',
      why: 'You stop guessing who your real competition is. It is usually not who you think — it is whoever the AI finds easiest to quote.',
    },
    {
      name: 'AI crawler access check',
      what: 'Whether GPTBot, PerplexityBot, ClaudeBot and Google-Extended can actually reach your site, plus your llms.txt and robots.txt.',
      why: 'We have found live sites blocking every AI crawler at the firewall without knowing it. If this is broken, nothing else on the list matters.',
    },
    {
      name: 'Structured data audit',
      what: 'Every schema type on every template, validated. Organization, LocalBusiness, Service, FAQ, Article, author attribution.',
      why: 'Schema is how a machine reads your business without guessing. One clinic we audited had a schema plugin installed and zero schema output across 500+ posts.',
    },
    {
      name: 'Content extractability review',
      what: 'Whether your pages answer questions in a form an AI can lift and quote — and where prices, outcomes and credentials are hidden.',
      why: 'Pricing sitting behind a LINE chat is invisible to every AI engine on earth. So is a service page with no named practitioner.',
    },
    {
      name: 'Cannibalisation check',
      what: 'Every keyword where more than one of your URLs competes, with the position of each.',
      why: 'We ran this for one Bangkok clinic and found 16 out of 16 keywords returning two to four of their own URLs. Their blog posts were beating their own service pages by 50 positions.',
    },
    {
      name: 'Prioritised fix list',
      what: 'Every finding ranked by impact against effort, with the first 30 days spelled out.',
      why: 'A list of 40 problems is not useful. A list of the four that move revenue is.',
    },
  ],
};

export const PROCESS = {
  h2: 'How it runs',
  steps: [
    { n: '01', title: 'You send us three things', body: 'Your website, your city, and the services you actually want more of. That is the whole brief. No questionnaire.', when: 'Day 0' },
    { n: '02', title: 'We build your question set', body: 'We write 40 buying questions a real customer would ask before choosing you. You approve them before we run anything.', when: 'Day 1' },
    { n: '03', title: 'We run them live', body: 'Every question, through every major AI engine, recording the full citation list for each answer.', when: 'Days 2–3' },
    { n: '04', title: 'We audit the site against what we found', body: 'Crawler access, schema, extractability, cannibalisation — checked against the specific gaps the questions exposed.', when: 'Days 3–4' },
    { n: '05', title: 'You get the report and the call', body: '45 minutes, screen shared, every finding explained. You keep the report whether or not you work with us.', when: 'Day 5' },
  ],
};

export const NOT_INCLUDED = {
  h2: 'What this audit will not do',
  lead: 'Every agency page you have read so far has skipped this part. Here is where the audit is the wrong thing to book:',
  items: [
    'It will not fix anything. It is a diagnosis. Implementation is either your team or a separate engagement — we will tell you honestly which findings you can do in-house.',
    'It will not get you cited next week. AI engines re-crawl on their own schedule. The clients we track take 60–90 days before citation counts move.',
    'It will not help if your business genuinely is not the best option. We can make a machine find you and read you. We cannot make it recommend a clinic with 12 reviews over one with 400.',
    'It is overkill if you have under about 20 pages and no real competitors. Take the eight-question self-check on our homepage instead — it takes a minute.',
  ],
};

export const PROOF = {
  h2: 'What happens when the fixes get made',
  lead: 'One Bangkok wellness clinic, six months after their audit. These are confirmed paid consultations that came from an AI recommendation — not enquiries, not clicks. Bookings, with the source recorded at the time of booking.',
  series: [
    { month: 'Oct', value: 3 },
    { month: 'Nov', value: 13 },
    { month: 'Dec', value: 16 },
    { month: 'Jan', value: 17 },
    { month: 'Feb', value: 13 },
    { month: 'Mar', value: 27 },
  ],
  callout: '3 → 27 in six months. A 9× increase.',
  honest: 'February dipped. We have left it in — it is what actually happened. AI citation volume moves week to week, and any agency showing you a line that only goes up is showing you a line they drew.',
};

export const FAQS = [
  {
    q: 'How is this different from a normal SEO audit?',
    a: 'A normal SEO audit checks whether Google can crawl and rank you. This checks whether an AI can read, understand and quote you — and then it goes and asks the AI directly, 40 times, to see what it actually says. Most SEO audits never open ChatGPT once.',
  },
  {
    q: 'It is really free? What is the catch?',
    a: 'Really free, and you keep the report either way. The catch is capacity, not money: it takes us about five days of real work, so we only run four a month and we qualify before we start. We do it because a good number of owners who see their own citation gap ask us to close it. If that is definitely not you, tell us and use the free tool instead.',
  },
  {
    q: 'Is there a quicker version?',
    a: 'There is an eight-question self-check on our homepage that takes a minute. It tells you whether you are likely to have a problem. It does not look at your site, it does not ask any AI engine anything, and it will not tell you which competitors are being named instead of you. For that, you need the audit.',
  },
  {
    q: 'Do I have to sign up for anything afterwards?',
    a: 'No. There is no obligation and no auto-enrolment into anything. Plenty of people take the report to their own team or their existing agency. It is written so somebody else can execute it.',
  },
  {
    q: 'How long until I see results?',
    a: 'Findings on day 5. Fixes take as long as your team takes. Citation movement typically starts at 60–90 days after the fixes ship — technical items like crawler access and schema can move faster, sometimes inside 30 days.',
  },
  {
    q: 'Do you work outside Bangkok?',
    a: 'Yes. ChatGPT, Perplexity and Gemini work the same everywhere. Google AI Overviews vary by country, so we run those against your actual market. We have clients in Bangkok, Singapore and the UK.',
  },
  {
    q: 'Will you audit my competitor too?',
    a: 'Not in the same category and area. If we have audited a dental clinic in Thonglor, we will not take another one. You are getting a map of your category — it stops being worth anything if we hand the same map to the people you are competing against.',
  },
];
