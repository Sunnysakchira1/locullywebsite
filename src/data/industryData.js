/*
 * Industry pages — /industries/ hub + /industries/<slug>/ (IndustryPage template).
 *
 * Copy passed: locully-content-writer → sounds-human-cft → content-fact-verifier-cft
 * → ai-claims-guard-cft → self-audit-qa-gate-cft (SHIP), 2026-09-25.
 * Working files: Projects/locully/homepage-redesign-2026-09/build/industries/.
 *
 * Rules for editing:
 * - No medical claims, no outcome promises, no client names, no retired figures.
 * - Every third-party rule stays linked to its named, dated source (SOURCES below).
 * - `slug`, `name` and `metaDescription` must appear exactly once per industry:
 *   tools/generate-sitemap.js and tools/generate-llms.js read them with a regex.
 */

export const SOURCES = {
  thaiAds: {
    label: 'Tilleke & Gibbins, Sep 2026',
    url: 'https://www.mondaq.com/consumer-trading-unfair-trading/1840926/court-judgment-reaffirms-rules-on-advertising-of-medical-facilities-in-thailand',
  },
  googleYmyl: {
    label: 'Google Search Central',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
  },
  googleAds: {
    label: 'Google Ads healthcare policy',
    url: 'https://support.google.com/adspolicy/answer/176031',
  },
  metaHealth: {
    label: 'Meta health and wellness ad standard',
    url: 'https://transparency.meta.com/policies/ad-standards/restricted-goods-services/health-wellness/',
  },
};

/** The three services every industry page maps onto. */
export const SERVICE_LINKS = {
  seo: { title: 'SEO', to: '/seo/' },
  geo: { title: 'GEO (AI search)', to: '/geo/' },
  ads: { title: 'Performance marketing', to: '/performance-marketing/' },
};

/** Measure / Fix / Place / Report — {aud} is replaced with the audience word. */
export const PROCESS = [
  { n: '01', title: 'Measure', body: 'Locully checks where you appear today: your Google rankings, a fixed set of {aud} questions run through ChatGPT, and how your ads turn into enquiries.' },
  { n: '02', title: 'Fix', body: 'We fix what stops you being found: technical errors, thin pages, missing structured data and broken conversion tracking.' },
  { n: '03', title: 'Place', body: 'We work on getting you mentioned in the directories, guides and publications that {aud} and AI assistants read.' },
  { n: '04', title: 'Report', body: 'Every month you see what moved: rankings, AI mentions and citations on a fixed question set, enquiries and cost per enquiry. Measured the same way each time.' },
];

export const CLINIC_SELF_TEST = [
  "You've never asked ChatGPT or Perplexity to recommend a clinic like yours.",
  "When you do ask, your clinic isn't named.",
  "Your treatment pages don't answer the questions patients ask before they book.",
  'Most new patients come from one channel: Google Maps, ads or referrals.',
  "You can't say which channel brought in last month's new patients.",
  'Your ads run, but nobody checks the cost per booked consultation.',
  "Your website hasn't been updated in over a year.",
  "You don't know which clinics AI assistants name instead of you.",
];

export const PROPERTY_SELF_TEST = [
  "You've never asked ChatGPT about your projects or your company.",
  'When you ask, it names other developers or agencies.',
  'Listing portals outrank your own site for your project names.',
  "Your project pages don't answer buyers' questions on price, location and completion.",
  'Your marketing goes quiet between launches.',
  "Ad leads aren't tracked through to viewings or site visits.",
  "You don't know what AI assistants say about your track record.",
  'Your website is mostly in one language, but your buyers speak two.',
];

/** Rules every clinic page carries (the vertical adds one more line). */
export const CLINIC_RULES = [
  {
    title: 'Thai law',
    body: 'Section 38 of the Medical Facility Act says a clinic must get approval before it publishes an advertisement. For Bangkok clinics the approving body is the Department of Health Service Support. Law firm Tilleke & Gibbins notes this covers clinic websites and social media. Only the licensed name and location are exempt.',
    source: 'thaiAds',
  },
  {
    title: 'Google Search',
    body: 'Google calls health a "Your Money or Your Life" topic. It says its systems give even more weight there to experience, expertise, authoritativeness and trust.',
    source: 'googleYmyl',
  },
  {
    title: 'Ad platforms',
    body: 'Google restricts some healthcare ads, requires certification for others, and the rules vary by country. Meta requires health and cosmetic ads to target people aged 18 and over.',
    source: 'googleAds',
    source2: 'metaHealth',
  },
  {
    title: 'Our rule',
    body: 'No medical claims and no promised outcomes. Your team approves every page and ad before it goes live.',
  },
];

export const industries = [
  {
    slug: 'physiotherapy-clinics',
    group: 'clinic',
    name: 'Physiotherapy clinics',
    short: 'physiotherapy clinic',
    emblem: 'physiotherapy',
    title: 'Physiotherapy Clinic Marketing Agency in Bangkok | Locully',
    metaDescription: 'Locully helps Bangkok physiotherapy clinics get found on Google and in ChatGPT, with SEO, GEO and Google and Meta ads. Start with a GEO audit.',
    h1: 'Marketing for physiotherapy clinics in Bangkok',
    lede: 'Locully is a Bangkok marketing agency for physiotherapy clinics. We help patients find you when they search Google or ask ChatGPT for a physio, and we run Google and Meta ads built around booked assessments.',
    card: 'Condition pages, therapist profiles and ads tracked to booked assessments.',
    searchTitle: 'How patients choose a physiotherapy clinic in Bangkok',
    searchLede: 'Physio patients describe the problem, not the clinic type. They search "lower back pain physio Bangkok" or ask ChatGPT who treats a sports injury. Google and AI assistants match that wording to pages that name the condition, the treatment and the therapist.',
    queries: [
      'best physio clinic for back pain Bangkok',
      'sports injury physiotherapy near me',
      'post-surgery rehab clinic Bangkok recommendation',
      'English-speaking physiotherapist Sukhumvit',
    ],
    reading: { to: '/blog/why-clinic-not-showing-chatgpt/', label: 'Why your clinic doesn’t appear in ChatGPT' },
    problemsTitle: 'Why physiotherapy clinics lose patients online',
    problems: [
      { h: "One services page can't answer every condition", p: 'Patients search by condition: back pain, frozen shoulder, knee rehab after surgery. A single "our services" page gives Google and AI assistants nothing specific to match.' },
      { h: 'Therapist expertise stays hidden', p: "Patients want to know who will treat them. A name and a photo don't help them choose. Qualifications, specialities and languages spoken do, and search systems can read them." },
      { h: 'Ads run without tracking', p: "If your Google or Meta ads aren't linked to bookings, you pay for clicks and guess at the rest." },
    ],
    servicesTitle: 'SEO, GEO and ads for physiotherapy clinics',
    services: {
      seo: 'Locully builds condition and treatment pages that match what patients search, fixes the technical issues that keep pages out of Google, and writes in English and Thai.',
      geo: 'Locully runs a fixed set of patient questions through ChatGPT to see which physio clinics it names and which sources it cites. Then we work on your pages and the outside sources behind those answers.',
      ads: 'Locully runs Google Search ads for high-intent searches like "physio near me" and Meta ads for reach, with tracking set up so you can see the cost per booked assessment.',
    },
    processTitle: 'How Locully markets a physiotherapy clinic',
    focus: [
      'Condition pages for back pain, sports injuries and post-surgery rehab',
      'Therapist profiles with qualifications, specialities and languages',
      'A "what to expect at your first assessment" page',
      'Tracking from search and ads through to the booked assessment',
    ],
    rulesTitle: 'Healthcare marketing rules for physiotherapy clinics in Bangkok',
    verticalRule: { title: 'Recovery claims', body: 'We don’t write lines like "pain-free in three sessions". We describe the treatment and what a session involves instead.' },
    faqTitle: 'Physiotherapy clinic marketing questions',
    faq: [
      { q: 'What does a physiotherapy clinic marketing agency do?', a: 'A physiotherapy clinic marketing agency helps patients find and book your clinic. Locully does that through three channels: SEO for Google, GEO for AI assistants like ChatGPT, and Google and Meta ads. We report on enquiries and bookings wherever tracking allows.' },
      { q: 'Should a physio clinic focus on Google or on AI search?', a: 'Both. Google and AI assistants largely draw on the same thing: clear pages about conditions, treatments and therapists. A condition page written well for Google usually serves ChatGPT too, so Locully works on both at once.' },
      { q: 'How long does physiotherapy SEO take?', a: 'Ads produce data in the first month. Search and AI visibility are measured over 60 to 90 days, because structural changes take roughly 70 days to show. We agree what to measure before we start.' },
      { q: 'Can you market my clinic in English and Thai?', a: 'Yes. Locully writes and optimises pages in both, so you can reach Thai patients as well as English-speaking expats and visitors.' },
      { q: 'Can Locully guarantee my clinic appears in ChatGPT?', a: 'No. No agency can promise a model will name you. Locully commits to a defined scope of work and a fixed measurement method, reported monthly.' },
    ],
    formTitle: 'Get your physiotherapy clinic found',
    formLede: "Send us your website. We'll show you how your clinic appears on Google and in AI answers today, and what to fix first.",
  },
  {
    slug: 'dental-clinics',
    group: 'clinic',
    name: 'Dental clinics',
    short: 'dental clinic',
    emblem: 'dental',
    title: 'Dental Clinic Marketing Agency in Bangkok | Locully',
    metaDescription: 'SEO, GEO and Google and Meta ads for Bangkok dental clinics. Locully builds treatment pages patients find and tracks booked consultations.',
    h1: 'Marketing for dental clinics in Bangkok',
    lede: "Locully is a Bangkok marketing agency for dental clinics. Bangkok's dental market is crowded, and a patient asking Google or ChatGPT sees only a few names. We work to get your clinic onto that shortlist for the treatments you want more of.",
    card: 'A page for every treatment, clear prices, and ads for urgent searches like emergency dentist.',
    searchTitle: 'How patients choose a dental clinic in Bangkok',
    searchLede: 'Dental patients search by treatment and by need. An expat asks for an English-speaking emergency dentist. A visitor compares implant prices before flying in. By the time they search, most are ready to book, and they pick from the clinics that answered their question.',
    queries: [
      'best dental clinic in Bangkok for foreigners',
      'teeth whitening clinic Thonglor price',
      'emergency dentist Bangkok English speaking',
      'dental implant clinic Bangkok recommendation',
    ],
    reading: { to: '/blog/ai-optimization-dental-clinics-thailand/', label: 'AI search for dental clinics in Thailand' },
    problemsTitle: 'Why dental clinics lose patients to competitors online',
    problems: [
      { h: 'One services page, many treatments', p: 'Implants, whitening, veneers and braces are separate searches. A clinic with one services page competes weakly for all of them. A page per treatment competes for each one.' },
      { h: 'No price information', p: "Patients ask what treatments cost. Clinics that publish clear price ranges answer that question. Clinics that don't leave the answer to a competitor or a directory." },
      { h: 'Expats and dental visitors are missed', p: '"English-speaking dentist Bangkok" is a high-intent search. If your site doesn’t say which languages your dentists speak, or says it only inside an image, you miss it.' },
    ],
    servicesTitle: 'SEO, GEO and ads for dental clinics',
    services: {
      seo: 'Locully builds a page for each treatment, covering what it involves, who performs it and what it costs, in English and Thai. We fix the technical issues that hold those pages back.',
      geo: 'Locully runs a fixed set of dental questions through ChatGPT to see which clinics it names and which sources it cites, including directories and review sites. Then we work on your pages and your listings on those sources.',
      ads: 'Locully runs Google Search ads for urgent, high-value searches like emergency dentist and implant consultations, and Meta ads for treatments people plan ahead, such as whitening and aligners.',
    },
    processTitle: 'How Locully markets a dental clinic',
    focus: [
      'Treatment pages for implants, whitening, veneers and orthodontics',
      'Clear, current price ranges for each treatment',
      'Dentist profiles with qualifications and languages spoken',
      'English pages for expats and dental visitors',
    ],
    rulesTitle: 'Healthcare marketing rules for dental clinics in Bangkok',
    verticalRule: { title: 'Prices and promotions', body: 'Patients ask AI assistants what implants and whitening cost, and clear price ranges answer that. A discount campaign is advertising, so it goes through the same approval as any other ad.' },
    faqTitle: 'Dental clinic marketing questions',
    faq: [
      { q: 'What does a dental marketing agency in Bangkok do?', a: 'A dental marketing agency brings patients to your chairs. Locully plans the work around the treatments you want to grow, then uses SEO for Google, GEO for AI assistants like ChatGPT, and Google and Meta ads to reach the patients looking for them.' },
      { q: 'Should each dental treatment have its own page?', a: 'Yes. "Dental implants Bangkok" and "teeth whitening Bangkok" are different searches from different patients. A page per treatment gives Google and AI assistants a specific answer to show for each one.' },
      { q: 'Do Google Ads work for dental clinics?', a: 'They can, for urgent and high-value searches such as emergency dentist or implant consultations. Locully sets up conversion tracking first, so you can see the cost per booked consultation rather than the cost per click.' },
      { q: 'How do dental clinics reach expats and dental visitors?', a: 'Answer their questions in English: which dentists speak which languages, what a treatment costs and how many visits it takes. Locully builds those pages and checks how ChatGPT describes your clinic to English-speaking patients.' },
      { q: 'Will you guarantee top rankings?', a: 'No. No agency can guarantee a ranking or promise a model will name you. Locully commits to a scope of work and reports the same measures every month.' },
    ],
    formTitle: 'Get your dental clinic found',
    formLede: "Send us your website. We'll show you which treatments you're visible for on Google and in AI answers, and where competitors are named instead.",
  },
  {
    slug: 'wellness-clinics',
    group: 'clinic',
    name: 'Wellness clinics',
    short: 'wellness clinic',
    emblem: 'wellness',
    title: 'Wellness Clinic Marketing Agency in Bangkok | Locully',
    metaDescription: 'Locully markets Bangkok wellness clinics with SEO, GEO and paid ads: clear service pages, GEO for AI search and ads that stay within health ad rules.',
    h1: 'Marketing for wellness clinics in Bangkok',
    lede: 'Locully is a Bangkok marketing agency for wellness clinics. "Wellness" covers everything from IV drips to burnout recovery, and that breadth is the problem. We make it clear what you offer, so Google, AI assistants and patients can match you to what they need.',
    card: 'Specific service pages, so "wellness" stops being too vague for Google or AI to recommend.',
    searchTitle: 'How people choose a wellness clinic in Bangkok',
    searchLede: 'People rarely search for "wellness". They search for a specific service: an IV drip, a detox programme, sleep or stress support. Google and AI assistants recommend the clinics whose pages describe that exact service clearly.',
    queries: [
      'best wellness clinic Bangkok detox program',
      'IV therapy clinic Bangkok recommendation',
      'holistic health clinic near Sukhumvit',
      'stress recovery clinic Bangkok expat',
    ],
    reading: { to: '/blog/how-chatgpt-chooses-clinic-recommendation/', label: 'How ChatGPT decides which clinic to recommend' },
    problemsTitle: 'Why wellness clinics are hard to find online',
    problems: [
      { h: '"Wellness" is too vague to recommend', p: "An AI assistant can't recommend you for something it can't pin down. A clinic that only says it does wellness competes for everything and gets named for little." },
      { h: 'Every service is its own search', p: 'IV therapy, detox and longevity programmes are searched separately. One page covering all three is weaker than a clear page for each.' },
      { h: 'Trust is hard to show', p: 'People want to know who delivers the service and what their qualifications are. A site that shows the treatment room but not the practitioners gives them little to go on.' },
    ],
    servicesTitle: 'SEO, GEO and ads for wellness clinics',
    services: {
      seo: 'Locully turns a broad wellness offer into clear service pages, each covering what the service is, who delivers it and what a session involves. We start with the services that have the most search demand.',
      geo: 'Locully checks how ChatGPT describes your clinic and whether it knows what you offer. Then we fix the pages and outside sources that shape that description.',
      ads: 'Locully runs Meta ads for services people discover and Google Search ads for services people already look for, with copy written to health ad rules.',
    },
    processTitle: 'How Locully markets a wellness clinic',
    focus: [
      'Service pages for IV therapy, detox, recovery and longevity programmes',
      'Clear positioning, so AI assistants know which category you belong in',
      'Practitioner profiles with qualifications',
      'English content for expats and health travellers',
    ],
    rulesTitle: 'Healthcare marketing rules for wellness clinics in Bangkok',
    verticalRule: { title: 'Health claims', body: 'Wellness services invite claims about detoxing, boosting or curing. We describe what the service is, who delivers it and what a session involves, not what it cures.' },
    faqTitle: 'Wellness clinic marketing questions',
    faq: [
      { q: 'How do you market a wellness clinic in Bangkok?', a: 'Be specific. Locully builds a clear page for each service, makes sure AI assistants understand what the clinic offers, and runs Google and Meta ads for the services with the most demand.' },
      { q: 'Why is "wellness" hard to rank for?', a: 'The word covers yoga studios, spas and medical clinics at once. Google and AI assistants need clear signals about what you do. Clinics that describe each service on its own page give them those signals.' },
      { q: 'We offer many services. Where do we start?', a: 'With the services that have the most search demand and the best margin for you. Locully checks demand first, then builds those pages before the rest.' },
      { q: 'Can wellness clinics advertise on Meta?', a: 'Yes, within the rules. Meta requires health ads to target people aged 18 and over, and Thai law requires approval before a clinic publishes an ad. Locully writes copy that describes the service without health claims.' },
      { q: 'How do you measure AI visibility for a wellness clinic?', a: 'Against a fixed set of questions patients ask, re-run on a schedule so each run is comparable. We check whether your clinic was named and whether your website was cited, and we open every cited page.' },
    ],
    formTitle: 'Get your wellness clinic found',
    formLede: "Send us your website. We'll show you what ChatGPT says your clinic offers today, and what to fix first.",
  },
  {
    slug: 'fertility-clinics',
    group: 'clinic',
    name: 'Fertility and IVF clinics',
    short: 'fertility clinic',
    emblem: 'fertility',
    title: 'Fertility & IVF Clinic Marketing in Bangkok | Locully',
    metaDescription: 'SEO, GEO and compliant ads for Bangkok fertility and IVF clinics. Locully helps patients researching treatment find clear, approved answers from you.',
    h1: 'Marketing for fertility and IVF clinics in Bangkok',
    lede: 'Locully is a Bangkok marketing agency for fertility and IVF clinics. Fertility patients do a lot of research before they call. We help them find clear, accurate answers from your clinic on Google and in AI assistants, written with your medical team.',
    card: 'Careful, approved answers for patients who research hard before they call.',
    searchTitle: 'How patients choose a fertility clinic in Bangkok',
    searchLede: 'Fertility patients ask long, careful questions about doctors, languages, costs, timelines and success rates. International patients ask them in English. They shortlist the clinics that answer those questions openly.',
    queries: [
      'best IVF clinic in Bangkok success rate',
      'fertility specialist Bangkok English speaking',
      'egg freezing clinic Bangkok recommendation',
      'IVF cost Bangkok international patient',
    ],
    reading: { to: '/blog/ai-search-optimization-clinics-thailand/', label: 'AI search optimisation for clinics in Thailand' },
    problemsTitle: 'Why fertility clinics get passed over online',
    problems: [
      { h: 'Hard questions go unanswered', p: "Patients ask about cost, success rates and timelines. If your site doesn't address them, patients find an answer somewhere else, often on a forum or a competitor's page." },
      { h: "Doctors aren't connected to the clinic", p: 'Patients choose a doctor as much as a clinic. A doctor listed without training, experience or languages gives them nothing to choose on.' },
      { h: 'International patients are an afterthought', p: 'If you treat patients from abroad, they need English pages that cover travel, timelines and what happens at each stage.' },
    ],
    servicesTitle: 'SEO, GEO and ads for fertility clinics',
    services: {
      seo: 'Locully builds pages for each treatment, such as IVF, egg freezing and IUI, and for the questions patients ask at each decision stage. Your medical team reviews every page before it goes live.',
      geo: 'Locully checks how ChatGPT describes your clinic and which sources it cites for fertility questions in Bangkok. Then we work on your pages and the outside sources that shape those answers.',
      ads: 'Locully runs Google and Meta ads within each platform’s healthcare rules. Meta allows IVF ads aimed at adults 18 and over. We track enquiries through to booked consultations.',
    },
    processTitle: 'How Locully markets a fertility clinic',
    focus: [
      'Treatment pages for IVF, egg freezing and IUI',
      'Doctor profiles with training, experience and languages',
      'Stage-by-stage Q&A for patients deciding on treatment',
      'English pages for international patients',
    ],
    rulesTitle: 'Healthcare marketing rules for fertility clinics in Bangkok',
    verticalRule: { title: 'Success rates and sensitive topics', body: "If you publish success rates, state the period, the patient group and how they were counted, so the figure can't be misread. Fertility treatment in Thailand also has its own law, so we check any fertility-specific wording with your team before it goes live." },
    faqTitle: 'Fertility clinic marketing questions',
    faq: [
      { q: 'What does fertility clinic marketing involve?', a: 'Fertility clinic marketing helps patients researching treatment find your clinic and trust it. Locully uses SEO, GEO and Google and Meta ads, and writes every page for your medical team to approve.' },
      { q: 'Can fertility clinics advertise on Meta and Google?', a: "Yes, within limits. Meta allows IVF and family planning ads aimed at adults 18 and over. Google's healthcare rules vary by country. Thai law also requires approval before a clinic publishes an ad." },
      { q: 'Should we publish our success rates?', a: "That's your medical team's decision. Patients ask about them. If you publish rates, state the period, the patient group and how they were counted, so the figure can't be misread." },
      { q: 'How do you reach international fertility patients?', a: 'With English pages that answer the questions they ask from abroad: doctors, languages, timelines, costs and travel. Locully also checks how ChatGPT describes your clinic to English-speaking patients.' },
      { q: 'How do you handle sensitive medical content?', a: 'We never invent clinical claims. Locully drafts, your medical team corrects and approves, and nothing goes live without that sign-off.' },
    ],
    formTitle: 'Get your fertility clinic found',
    formLede: "Send us your website. We'll show you how your clinic appears when patients ask Google and ChatGPT about fertility treatment in Bangkok.",
  },
  {
    slug: 'beauty-clinics',
    group: 'clinic',
    name: 'Aesthetic and beauty clinics',
    short: 'aesthetic clinic',
    emblem: 'beauty',
    title: 'Aesthetic & Beauty Clinic Marketing in Bangkok | Locully',
    metaDescription: 'Locully helps Bangkok aesthetic and beauty clinics get found for every treatment on Google, ChatGPT and Meta, with SEO, GEO and paid ads.',
    h1: 'Marketing for aesthetic and beauty clinics in Bangkok',
    lede: 'Locully is a Bangkok marketing agency for aesthetic and beauty clinics. Patients pick the treatment first and the clinic second. We help you get found for each treatment on Google, in AI assistants and in Meta ads.',
    card: 'Treatment-level pages and Meta ads that work within cosmetic ad rules.',
    searchTitle: 'How patients choose an aesthetic clinic in Bangkok',
    searchLede: 'Beauty patients search by treatment and by area: "Botox Bangkok", "filler clinic near Asoke", "laser clinic Thonglor". Clinics with a clear page for each treatment can be found for each of those searches.',
    queries: [
      'best aesthetic clinic Bangkok for filler',
      'laser skin clinic Thonglor recommendation',
      'anti-aging clinic Bangkok expat recommended',
      'Botox clinic Bangkok English speaking',
    ],
    reading: { to: '/blog/geo-vs-seo-clinics-bangkok/', label: 'GEO vs SEO for clinics in Bangkok' },
    problemsTitle: 'Why aesthetic clinics lose patients online',
    problems: [
      { h: 'Treatment pages beat service lists', p: 'Botox, filler and laser are three different searches. A page for each gives Google and AI assistants something specific to show. A single services list gives them little.' },
      { h: "The area isn't clear", p: "Patients search by neighbourhood. If your pages and Google listing don't name the area you serve, you're easy to miss for \"near me\" searches." },
      { h: "Instagram doesn't carry over", p: "A big following helps people discover you on Instagram. It doesn't tell Google or ChatGPT what treatments you offer or who performs them." },
    ],
    servicesTitle: 'SEO, GEO and ads for aesthetic clinics',
    services: {
      seo: 'Locully builds a page for each treatment, covering what it involves, who performs it, recovery time and price range, in English and Thai.',
      geo: 'Locully runs a fixed set of treatment questions through ChatGPT to see which clinics it names and which sources it relies on. Then we work on your pages and the outside sources behind those answers.',
      ads: 'Locully runs Meta ads for treatments people discover by scrolling and Google Search ads for patients already comparing clinics, within Meta’s cosmetic ad rules.',
    },
    processTitle: 'How Locully markets an aesthetic clinic',
    focus: [
      'Treatment pages for Botox, fillers, laser and skin boosters',
      'Area pages and Google listing details for the neighbourhood you serve',
      'Doctor profiles with qualifications',
      'English pages for expats and visitors',
    ],
    rulesTitle: 'Healthcare marketing rules for aesthetic clinics in Bangkok',
    verticalRule: { title: 'Before-and-after images', body: "Meta allows before-and-after images for general cosmetic procedures when the ad targets people 18 and over, and it doesn't allow ads that make negative statements about a person's appearance. Thai approval rules apply on top." },
    faqTitle: 'Aesthetic clinic marketing questions',
    faq: [
      { q: 'What does an aesthetic clinic marketing agency do?', a: 'An aesthetic clinic marketing agency brings patients in for the treatments you want to grow. Locully does it with SEO for Google, GEO for AI assistants like ChatGPT, and Google and Meta ads.' },
      { q: 'Should we have a page for each treatment?', a: 'Yes. "Botox Bangkok", "filler Bangkok" and "laser skin Bangkok" are separate searches. A page for each gives your clinic a real chance at each one. One generic services page rarely does.' },
      { q: 'Our clinic is big on Instagram. Do we still need SEO?', a: 'Probably. Instagram reaches people who are browsing. Google and AI assistants reach people who already want a treatment and are choosing where to go.' },
      { q: 'Can we use before-and-after photos in ads?', a: "On Meta, yes for general cosmetic procedures, if the ad targets adults 18 and over and doesn't make negative statements about anyone's appearance. Thai approval rules for clinic advertising apply too." },
      { q: 'Do neighbourhood searches matter?', a: 'Yes. Patients search "filler clinic Thonglor" or "laser clinic near Asoke". Make sure your pages and your Google listing name the area you serve, so you can show up for those searches.' },
    ],
    formTitle: 'Get your aesthetic clinic found',
    formLede: "Send us your website. We'll show you which treatments you're found for on Google and in AI answers, and which you're missing.",
  },
  {
    slug: 'property',
    group: 'property',
    name: 'Property developers and agencies',
    short: 'property business',
    title: 'Real Estate Marketing Agency in Bangkok | Locully',
    metaDescription: 'Locully helps Bangkok property developers and real estate agencies get found on Google and in AI assistants, and runs Google and Meta ads for launches.',
    h1: 'Real estate marketing for Bangkok developers and agencies',
    lede: 'Locully is a Bangkok marketing agency for property developers and real estate agencies. We help your projects and listings get found on Google and in AI assistants like ChatGPT, and we run Google and Meta ads for launches and sales events.',
    card: 'Project and area pages, what AI says about your track record, and launch campaigns.',
    searchTitle: 'How buyers research property in Bangkok',
    searchLede: 'Property buyers take their time. They compare projects and areas, check the developer’s track record, and ask AI assistants questions they would never ask a sales agent. The sites that answer those questions directly get shortlisted.',
    queries: [
      'new condo projects near BTS Bangkok',
      'best area in Bangkok to buy a condo for rental',
      'can foreigners own a condo in Thailand',
      'reliable property developer Bangkok reviews',
    ],
    reading: { to: '/blog/how-ai-chooses-sources-to-cite/', label: 'How AI chooses which sources to cite' },
    problemsTitle: 'Why property marketing stalls between launches',
    problems: [
      { h: 'Portals compete for your searches', p: "Listing portals compete for the same project and area searches. Your own site needs what portals don't have: full project detail, construction updates, floor plans and your track record." },
      { h: 'Marketing stops when the launch ends', p: 'Campaigns peak at launch and then go quiet. Pages that rank on Google can keep working between launches.' },
      { h: 'Leads with no follow-through', p: "Ads produce form fills. Without tracking through to viewings and site visits, you can't tell which campaign sold units." },
    ],
    servicesTitle: 'SEO, GEO and ads for property developers and agencies',
    services: {
      seo: 'Locully builds project, area and buyer-guide pages in English and Thai, and fixes the technical issues that keep them off Google.',
      geo: 'Locully checks what ChatGPT says about your company and projects, and which sources it uses. Then we work on your pages and those sources.',
      ads: 'Locully runs Meta lead campaigns for launches and sales events, and Google Search ads for project-name and area searches, with tracking through to viewings.',
    },
    experience: 'Locully has run Meta Ads lead generation and event marketing for property investment fairs in Bangkok.',
    processTitle: 'How Locully markets a property business',
    focus: [
      'Project pages with prices, floor plans and completion dates',
      'Area guides for the neighbourhoods you build or sell in',
      'A track-record page: completed projects and handover dates',
      'Tracking from ad lead to viewing',
    ],
    rulesTitle: "What we won't write for property",
    rulesLede: 'Buying property is a financial decision. Google treats pages that could affect someone’s financial stability as "Your Money or Your Life" topics and gives even more weight to trust there.',
    propertyRules: [
      { title: 'No guaranteed yields or returns', body: "We don't promise rental yields, capital growth or resale values." },
      { title: 'No invented urgency', body: '"Only 3 units left" goes on the page only if it’s true on the day.' },
      { title: 'Facts from you', body: 'Prices, completion dates and ownership details come from your team and are checked before they go live.' },
    ],
    faqTitle: 'Real estate marketing questions',
    faq: [
      { q: 'What does a real estate marketing agency do?', a: 'A real estate marketing agency brings buyer and renter enquiries to your projects or listings. Locully does it with SEO for Google, GEO for AI assistants like ChatGPT, and Google and Meta ads for launches and events.' },
      { q: 'Do you work with agencies as well as developers?', a: 'Yes. Developers usually need project and launch marketing. Agencies usually need area and listing pages that compete with the portals. The three services are the same; the plan differs.' },
      { q: 'Can you reach foreign buyers?', a: 'Locully writes in English and Thai, so your pages can answer foreign buyers in their language. We also check how ChatGPT answers the questions foreign buyers ask about buying in Bangkok.' },
      { q: 'Can Locully run ads for a project launch?', a: 'Yes. We plan Meta and Google campaigns for launches and sales events, with lead forms and tracking through to viewings. Media spend is paid directly to Google and Meta.' },
      { q: 'Do you guarantee leads or sales?', a: 'No. No agency can guarantee leads, rankings or a mention in an AI answer. Locully commits to a defined scope of work and reports every month on what it produced.' },
    ],
    formTitle: 'Get your projects found',
    formLede: "Send us your website. We'll show you what Google and ChatGPT tell buyers about your company today.",
  },
];

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);

/** Hub copy. */
export const HUB = {
  title: 'Clinic & Property Marketing in Bangkok by Industry | Locully',
  description: 'Locully markets healthcare clinics and property businesses in Bangkok with SEO, GEO and Google and Meta ads. Pick your industry to see the plan.',
  h1: 'Marketing for clinics and property businesses in Bangkok',
  lede: 'Locully is a Bangkok digital marketing agency. We help clinics and property businesses get found on Google, in AI assistants like ChatGPT, and through Google and Meta ads. Pick your industry to see how the work changes for it.',
  cardsTitle: 'Clinic and property marketing, by industry',
  servicesTitle: 'Three services, one plan for your industry',
  servicesLede: 'Locully runs three services. Use one, or combine them in a single plan built around how your customers search.',
  services: {
    seo: 'Pages that rank on Google for the searches your customers make, in English and Thai.',
    geo: 'Work that makes your business easier for ChatGPT, Perplexity and Google AI Overviews to find, trust and name.',
    ads: 'Google and Meta ads with tracking, so you see what each enquiry costs.',
  },
  whyTitle: 'Why clinic and property marketing needs an industry plan',
  why: [
    'A patient choosing a fertility clinic and a buyer choosing a condo both do a lot of research before they call. They ask detailed questions, compare options and check who they can trust. The searches, the rules and the proof they need are different in every industry.',
    'That is why Locully plans by industry. A dental clinic needs a page per treatment. A fertility clinic needs answers written with its medical team. A developer needs project pages that listing portals can’t match.',
    'We also work with hospitality, food and beverage and professional services businesses. If yours isn’t listed here, the free check still applies.',
  ],
  formTitle: 'Get your business found in your industry',
  formLede: "Send us your website. We'll show you where you appear on Google and in AI answers today, and what to fix first.",
};
