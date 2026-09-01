// All copy for /audit.
//
// Rules for this file:
//   1. Every line is a complete sentence. No fragments, no "Free. Five days."
//      style clipping. A reader should never have to infer the missing half.
//   2. No marketing or SEO vocabulary. Say what happens, in the words a clinic
//      owner would use.
//   3. Four sections only. The page sells the offer before it explains itself.

export const AUDIT_OFFER = {
  turnaround: 'five working days',
  capacity: 'four',
  questions: 40,
};

export const HERO = {
  eyebrow: 'Free AI visibility audit',
  h1: 'Find out whether ChatGPT recommends your business, or your competitor.',
  body: [
    'When someone asks ChatGPT to recommend a business like yours, it gives them a short list of names. Most owners have never seen that list, and most of them are not on it.',
    'We ask ChatGPT, Perplexity and Google the forty questions your customers ask before they choose. We write down every business and every website that comes back. Then we send you the answer, along with the reasons your name was missing.',
    'The audit costs nothing and it takes five working days.',
  ],
  formTitle: 'Start your audit',
  formSub: 'We need three things from you, and nothing else.',
  cta: 'Send me my audit',
  microtrust: 'We run four of these a month, and we only work with one business in each area.',
};

// The mocked AI answer in the hero. This is the block that explains the product
// without the reader having to read anything.
export const DEMO = {
  question: 'What is the best clinic for dental implants in Bangkok?',
  intro: 'Based on reviews and expat recommendations, three clinics come up most often:',
  answers: [
    { name: 'Bangkok Smile Dental', note: 'Mentioned in most expat guides and directories.' },
    { name: 'Thonglor Dental Care', note: 'Widely reviewed on international clinic sites.' },
    { name: 'Sukhumvit Dental Studio', note: 'Appears in several Bangkok dentistry roundups.' },
  ],
  verdict: 'Your business was not mentioned.',
  verdictNote: 'This is what almost every audit looks like on the first day. The three clinics above are not better than you. They are simply easier for ChatGPT to find and quote.',
};

export const FINDOUT = {
  h2: 'What you find out',
  lead: 'The report answers three questions about your business, and it answers them with evidence rather than opinion.',
  items: [
    {
      n: '01',
      title: 'Who ChatGPT recommends instead of you',
      body: 'We show you every business that got named in place of yours, and every website that ChatGPT read in order to name them. You end up with a list of the websites that decide who gets recommended in your market.',
    },
    {
      n: '02',
      title: 'Why your business was left out',
      body: 'We go through your website the way ChatGPT does. We check whether it is allowed to read your site at all, whether your pages explain what you sell and what you charge, and whether your own pages are competing against each other.',
    },
    {
      n: '03',
      title: 'What to change first',
      body: 'We put every problem in order, starting with the ones that will make the biggest difference for the least work. You get a list of four things to do this month, not a list of forty things to worry about.',
    },
  ],
};

// The four parts of the report, shown as a 2x2 grid. These mirror the four tabs
// of the real Locully citation gap audit exactly: Raw Responses, Competitors
// Cited, All URLs Cited, Prospect List.
//
// To use a real screenshot instead of the built-in mini table, save the image
// into public/audit/ and set `image` to its path, for example
// image: '/audit/tab-1-raw-responses.png'. The mini table is used whenever
// `image` is null. Every screenshot must have client names and web addresses
// removed before it goes in.
export const REPORT_TABS = {
  h2: 'What the report actually looks like',
  lead: 'The report arrives as a spreadsheet with four tabs. Each tab answers a different question, and they build on each other from left to right. Below is what each one contains, using a dental clinic in Bangkok as the example.',
  items: [
    {
      n: '01',
      tab: 'Raw responses',
      title: 'Every question, and exactly what AI answered',
      body: 'We keep the full answer to all forty questions, word for word. You can read exactly what a customer would have seen when they asked about a business like yours.',
      image: null,
      table: {
        headers: ['Question', 'You in the answer?', 'Your page used?'],
        rows: [
          ['best clinic for dental implants in Bangkok', 'No', 'No'],
          ['how much do dental implants cost in Bangkok', 'No', 'No'],
          ['which Bangkok dental clinic do expats use', 'No', 'No'],
        ],
      },
    },
    {
      n: '02',
      tab: 'Competitors cited',
      title: 'Every business AI named instead of you',
      body: 'We pull out each business AI recommended, and note which question caused it to come up. This tells you who AI thinks your competitors are, which is often not the list you would have written yourself.',
      image: null,
      table: {
        headers: ['Business named', 'Questions', 'Is it you?'],
        rows: [
          ['Bangkok Smile Dental', '14', 'No'],
          ['Thonglor Dental Care', '11', 'No'],
          ['Sukhumvit Dental Studio', '9', 'No'],
        ],
      },
    },
    {
      n: '03',
      tab: 'All websites used',
      title: 'Every website AI read to build its answer',
      body: 'AI does not invent its answers, it repeats what it reads. This tab lists every single page it used across all forty questions, and marks whether your business appears anywhere on that page.',
      image: null,
      table: {
        headers: ['Website', 'Times used', 'You on it?'],
        rows: [
          ['expatden.com', '31', 'No'],
          ['dentaldepartures.com', '26', 'No'],
          ['whatclinic.com', '22', 'No'],
        ],
      },
    },
    {
      n: '04',
      tab: 'Your prospect list',
      title: 'The websites to go and get listed on',
      body: 'This is the tab you act on. It is every website AI trusts that does not mention you, sorted so the most valuable one is at the top, with a note on how to approach each one.',
      image: null,
      table: {
        headers: ['Website', 'Times used', 'What to do', 'Priority'],
        rows: [
          ['expatden.com', '31', 'Ask to be added to the guide', 'High'],
          ['dentaldepartures.com', '26', 'Claim your clinic listing', 'High'],
          ['whatclinic.com', '22', 'Submit clinic profile', 'Medium'],
        ],
      },
    },
  ],
};

export const PROOF = {
  h2: 'What happens after the problems get fixed',
  lead: 'These are the bookings one Bangkok wellness clinic received from people who found them through AI. Every one of these people booked an appointment and paid for it, and we asked each of them how they found the clinic at the time they booked.',
  series: [
    { month: 'Oct', value: 3 },
    { month: 'Nov', value: 13 },
    { month: 'Dec', value: 16 },
    { month: 'Jan', value: 17 },
    { month: 'Feb', value: 13 },
    { month: 'Mar', value: 27 },
    { month: 'Apr', value: 38 },
  ],
  callout: 'They went from three bookings a month to thirty-eight in seven months.',
  honest: 'February was worse than January, and we have left that month in the chart because that is what actually happened. If an agency shows you a line that only ever goes up, they drew that line themselves.',
};

export const FAQS = [
  {
    q: 'Why is the audit free?',
    a: 'Because showing you the problem works better than telling you about it. We could send you slides explaining AI search, but it is far more convincing to ask ChatGPT about your business and show you what it said. Enough owners ask us to fix what they see that the audit pays for itself, and if you take the report to your own team instead, that is completely fine.',
  },
  {
    q: 'What is different about this compared to a normal SEO audit?',
    a: 'A normal SEO audit checks whether Google can find your website. This audit checks whether AI tools can understand your business well enough to recommend it, and then it goes and asks them forty times to see what they actually say. Most SEO audits never open ChatGPT at all.',
  },
  {
    q: 'How long does it take before anything changes?',
    a: 'You receive the report five working days after you send us your details. Once you make the changes, AI tools usually take two to three months to notice them, although a few technical fixes can take effect sooner than that.',
  },
  {
    q: 'Who actually does the work?',
    a: 'Sunny, who runs Locully, does it personally, using the same process we use for clients who pay us. The forty questions are written by hand for your particular business, so this is not a tool that generates a PDF automatically.',
  },
  {
    q: 'Will you do this for my competitor as well?',
    a: 'No, we will not. We only work with one business in each area and category, because the report is a map of your market and it would be worth nothing to you if we handed the same map to the people you are competing against.',
  },
  {
    q: 'What happens to the information you find?',
    a: 'The report belongs to you. We sometimes use findings as examples, in the way we have on this page, but we remove every name and every web address before we do. We will never put a client\'s name next to their weaknesses.',
  },
];

export const CLOSING = {
  h2: 'Find out what ChatGPT says about your business',
  body: 'Send us your website, your city and the services you want more customers for. We will write your forty questions, ask them, and send you the answers within five working days.',
};
