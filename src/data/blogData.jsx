import React from 'react';
import { Link } from 'react-router-dom';

// ─── Shared inline styles for blog prose ────────────────────────────────────
const s = {
  h2: { fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.2, margin: '56px 0 20px', letterSpacing: '-0.01em' },
  h3: { fontFamily: 'var(--serif)', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 600, color: 'var(--cream)', lineHeight: 1.3, margin: '36px 0 14px' },
  p:  { fontSize: 16, color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, marginBottom: 20 },
  ul: { paddingLeft: 0, margin: '16px 0 24px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 },
  ol: { paddingLeft: 0, margin: '16px 0 24px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, counterReset: 'blog-ol' },
  li: { display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 },
  dot: { flexShrink: 0, width: 6, height: 6, borderRadius: '50%', background: 'var(--terra)', marginTop: 9 },
  num: { flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: 'rgba(204,100,50,0.15)', border: '1px solid rgba(204,100,50,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: 'var(--terra)', fontFamily: 'var(--mono)', marginTop: 2 },
  callout: { background: 'rgba(204,100,50,0.05)', border: '1px solid rgba(204,100,50,0.2)', borderLeft: '3px solid var(--terra)', borderRadius: '0 8px 8px 0', padding: '20px 24px', margin: '28px 0' },
  calloutText: { fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300, margin: 0 },
  infoBox: { background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: 10, padding: '24px 28px', margin: '28px 0' },
  infoTitle: { fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: 14 },
  table: { width: '100%', borderCollapse: 'collapse', margin: '24px 0', fontSize: 14 },
  th: { padding: '12px 16px', background: 'var(--surface)', color: 'var(--muted)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'left', borderBottom: '1px solid var(--bdr2)' },
  td: { padding: '12px 16px', color: 'var(--muted)', borderBottom: '1px solid var(--bdr)', lineHeight: 1.5, verticalAlign: 'top' },
  strong: { color: 'var(--cream)', fontWeight: 600 },
  ilink: { color: 'var(--terra)', textDecoration: 'none', fontWeight: 500 },
  divider: { height: 1, background: 'var(--bdr)', margin: '48px 0' },
};

const Ul = ({ children }) => <ul style={s.ul}>{children}</ul>;
const Ol = ({ children }) => <ol style={s.ol}>{children}</ol>;
const Li = ({ children }) => <li style={s.li}><span style={s.dot} /><span>{children}</span></li>;
const NumLi = ({ n, children }) => <li style={s.li}><span style={s.num}>{n}</span><span>{children}</span></li>;
const Callout = ({ children }) => <div style={s.callout}><p style={s.calloutText}>{children}</p></div>;
const InfoBox = ({ title, children }) => <div style={s.infoBox}><div style={s.infoTitle}>{title}</div>{children}</div>;
const Divider = () => <div style={s.divider} />;

// ─── POST DATA ───────────────────────────────────────────────────────────────

export const posts = [

  // ── POST 1: PILLAR ──────────────────────────────────────────────────────────
  {
    slug: 'ai-search-optimization-clinics-thailand',
    title: 'AI Search Optimization for Clinics in Thailand: The 2026 Guide',
    metaTitle: 'AI Search Optimization for Clinics in Thailand | 2026 Guide',
    metaDescription: 'Complete guide to AI search optimization for Thailand clinics. Get your clinic recommended in ChatGPT, Perplexity, and Google AI Overviews.',
    publishDate: '2026-03-19',
    updatedDate: '2026-03-19',
    category: 'Guide',
    readTime: '9 min read',
    excerpt: 'Everything Thailand clinic owners need to know about AI search optimization — why it\'s different from traditional SEO, how it works, and what to do first.',
    relatedPosts: ['why-clinic-not-showing-chatgpt', 'how-chatgpt-chooses-clinic-recommendation', 'geo-vs-seo-clinics-bangkok', 'ai-search-audit-clinic-bangkok'],
    relatedClinics: ['physiotherapy-clinics', 'dental-clinics', 'beauty-clinics', 'fertility-clinics'],
    faqs: [
      { q: 'What is AI search optimization for clinics?', a: 'AI search optimization (also called GEO — Generative Engine Optimisation) is the process of making your clinic visible in AI-generated answers on platforms like ChatGPT, Perplexity, and Google AI Overviews. Unlike traditional SEO, which ranks your site in a list of links, AI search means the AI mentions your clinic by name in its direct answer.' },
      { q: 'How is AI search different from traditional SEO for clinics?', a: 'Traditional SEO earns you a position in a list of ten links. AI search means the AI recommends your clinic directly in a single, confident answer — with no page two. The ranking signals are different too: AI models weight authority signals, third-party mentions, and structured content more heavily than keyword density.' },
      { q: 'Which AI platforms should Thailand clinics optimise for?', a: 'The three most important platforms are ChatGPT (OpenAI), Perplexity AI, and Google AI Overviews. Collectively, these handle the majority of AI-assisted clinic discovery among English-speaking patients, expats, and medical tourists searching in Thailand.' },
      { q: 'How long does it take to appear in ChatGPT results?', a: 'Most clinics see meaningful improvements within 60–90 days of consistent AI optimization work. The timeline depends on your current online footprint, the quality of your content, and how competitive your category is. Unlike paid ads, results compound over time rather than stopping when you stop spending.' },
      { q: 'Do I need to rebuild my website to appear in AI search?', a: "Not necessarily. Your existing website can be optimised — adding structured data (schema markup), improving the clarity of your services and location information, and ensuring AI crawlers can access your content. A rebuild is rarely required unless the site has fundamental technical barriers." },
      { q: 'Can small clinics compete with large hospitals in AI search?', a: 'Yes — AI search actually favours specificity and trust over sheer size. A specialist clinic with detailed, credible content and strong third-party mentions can consistently outrank a large hospital for niche queries like "sports physio for runners in Bangkok." Specialisation is a competitive advantage.' },
      { q: 'How much does AI search optimization cost in Thailand?', a: "Costs vary by scope and provider. For clinics in Thailand, a full AI visibility programme typically ranges from ฿15,000 to ฿50,000+ per month depending on the number of AI platforms targeted, content production requirements, and whether you need one-off or ongoing management. A free audit is the best starting point." },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          When a patient in Bangkok types "best physio clinic for back pain" into ChatGPT, they don't get a list of ten blue links. They get one answer. Two or three clinics, selected from everything ChatGPT knows — and everyone else is invisible.
        </p>
        <p style={s.p}>
          That's AI search. And it's how a growing share of patients — particularly expats, medical tourists, and English-speaking locals — are finding clinics across Thailand right now.
        </p>
        <p style={s.p}>
          This guide explains what AI search optimization is, why it's different from traditional SEO, and what Thailand clinic owners need to do to appear in those recommendations.
        </p>

        <h2 style={s.h2}>What Is AI Search Optimization — And Why Is It Different from SEO?</h2>
        <p style={s.p}>
          Traditional SEO gets your website ranked in Google's list of results. Someone searches, Google shows ten links, and users click through to your site. Visibility is a ranking position.
        </p>
        <p style={s.p}>
          AI search works differently. Platforms like ChatGPT, Perplexity, and Google AI Overviews generate a direct answer — synthesized from across the web — and cite a small number of sources. There's no page two. The AI either recommends your clinic or it doesn't.
        </p>
        <Callout>
          <strong style={s.strong}>AI search optimization (also called GEO — Generative Engine Optimization)</strong> is the practice of structuring your clinic's web presence so AI engines can find, parse, and cite your content when patients ask relevant questions.
        </Callout>
        <p style={s.p}>
          The ranking factors are different. The content format is different. The timeline is different. A clinic can rank well on Google and be completely invisible on ChatGPT — and increasingly, that's exactly what's happening.
        </p>
        <p style={s.p}>
          For a detailed comparison, see our guide on <Link to="/blog/geo-vs-seo-clinics-bangkok/" style={s.ilink}>GEO vs SEO for clinics in Bangkok</Link>.
        </p>

        <h2 style={s.h2}>Why Thailand Clinics Are Particularly Vulnerable</h2>
        <p style={s.p}>
          Thailand's clinic market — Bangkok especially — is one of the most competitive in Asia for medical tourism. Dental, physiotherapy, aesthetic, fertility, and wellness clinics compete heavily for the same pool of expat and international patients.
        </p>
        <p style={s.p}>
          These patients overwhelmingly use English-language AI tools to research and decide. When they ask ChatGPT "best dental clinic Bangkok for foreigners" or "English-speaking physio Sukhumvit," a small number of clinics get recommended. Most don't.
        </p>
        <InfoBox title="The visibility gap">
          <p style={{ ...s.p, marginBottom: 0 }}>
            68% of healthcare queries now trigger AI Overviews in Google. For ChatGPT and Perplexity, the gap is even more stark — AI gives one consolidated answer, not a ranked list. Clinics without AI-optimized content are invisible to this growing patient channel.
          </p>
        </InfoBox>
        <p style={s.p}>
          Most Thai clinic websites are built for one audience: human visitors who are browsing. They're not built for AI engines that parse content structure, extract factual claims, and decide whether a clinic is authoritative enough to recommend. That mismatch is the core problem.
        </p>

        <h2 style={s.h2}>The 5 Pillars of AI Search Optimization for Clinics</h2>

        <h3 style={s.h3}>1. Content Structure and Citation Architecture</h3>
        <p style={s.p}>
          AI engines prioritize content they can parse clearly. That means structured headings, direct answers in the first paragraph of each section, and factual claims that can be extracted and cited. Long, flowing paragraphs written for emotional persuasion don't work as well as direct, organized content that answers specific questions.
        </p>

        <h3 style={s.h3}>2. Treatment and Condition-Specific Pages</h3>
        <p style={s.p}>
          "Dental implants Bangkok" and "teeth whitening Bangkok" are different queries. If your clinic has one Services page listing everything you offer, you're invisible to both. AI needs dedicated pages for each treatment — with specific content, FAQs, and structured data for each service.
        </p>
        <p style={s.p}>
          This is one of the highest-leverage changes any Thailand clinic can make. See our breakdown for <Link to="/blog/ai-optimization-dental-clinics-thailand/" style={s.ilink}>AI optimization for dental clinics</Link> and <Link to="/ai-optimization/physiotherapy-clinics/" style={s.ilink}>physiotherapy clinics</Link>.
        </p>

        <h3 style={s.h3}>3. Schema Markup and Structured Data</h3>
        <p style={s.p}>
          Schema markup (JSON-LD) explicitly tells search engines and AI systems what your content means. For clinics, this includes MedicalClinic schema with your specialty, address, opening hours, ratings, and available languages. Without it, AI has to guess — and often guesses wrong, or skips your clinic entirely.
        </p>

        <h3 style={s.h3}>4. Practitioner Authority Signals</h3>
        <p style={s.p}>
          AI recommendation systems assess the authority of the people behind a clinic — not just the clinic itself. Structured practitioner profiles, credential information, medical specializations, and treatment experience all contribute to whether AI engines feel confident recommending your clinic for complex or high-stakes queries.
        </p>

        <h3 style={s.h3}>5. Entity Disambiguation</h3>
        <p style={s.p}>
          AI needs to be certain it knows which clinic you are. Consistent NAP (Name, Address, Phone) data across Google Business Profile, your website, and third-party directories helps AI systems build a confident entity model for your clinic. Inconsistencies — different name formats, old phone numbers — create ambiguity that reduces citation likelihood.
        </p>

        <h2 style={s.h2}>How AI Engines Choose Which Clinic to Recommend</h2>
        <p style={s.p}>
          The decision process varies by platform, but three signals are consistent across ChatGPT, Perplexity, and Google AI Overviews:
        </p>
        <Ol>
          <NumLi n="1"><strong style={s.strong}>Authority signals</strong> — Is your clinic mentioned, cited, or referenced on reputable third-party sites? Google Business Profile reviews, medical directories, news mentions, and healthcare aggregators all contribute.</NumLi>
          <NumLi n="2"><strong style={s.strong}>Content relevance</strong> — Does your website directly answer the query? A patient asking "best IVF clinic Bangkok success rates" needs a page that explicitly discusses IVF success rates — not just a generic fertility page.</NumLi>
          <NumLi n="3"><strong style={s.strong}>Structured data</strong> — Can the AI parse your content reliably? Schema markup, clear headings, and FAQ sections make it dramatically easier for AI to extract and cite your information.</NumLi>
        </Ol>
        <p style={s.p}>
          For a detailed breakdown, read <Link to="/blog/how-chatgpt-chooses-clinic-recommendation/" style={s.ilink}>how ChatGPT chooses which clinic to recommend</Link>.
        </p>

        <h2 style={s.h2}>How Long Does AI Optimization Take?</h2>
        <p style={s.p}>
          AI optimization is faster to show results than traditional SEO. Most clinics see measurable improvements in AI citations within 60–90 days of implementing structured content changes. This is because AI citation depends more on content quality and structure than on domain age or backlink volume.
        </p>
        <p style={s.p}>
          That said, competitive queries in high-density areas like Bangkok Sukhumvit take longer than niche or location-specific queries. A dental clinic optimizing for "implants Thonglor" will see results faster than one targeting "best dental clinic Bangkok" broadly.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>Is AI search optimization only relevant for Bangkok clinics?</h3>
        <p style={s.p}>
          No — it applies equally to clinics in Phuket, Chiang Mai, Pattaya, and anywhere else patients use AI to research healthcare. If anything, clinics in secondary cities have less competition and can establish AI visibility faster.
        </p>

        <h3 style={s.h3}>Does my clinic need a new website?</h3>
        <p style={s.p}>
          Rarely. Most AI optimization work involves restructuring existing content, adding FAQ sections, implementing schema markup, and building treatment-specific pages — not rebuilding from scratch. The changes are targeted, not wholesale.
        </p>

        <h3 style={s.h3}>How is Locully different from a general SEO agency?</h3>
        <p style={s.p}>
          Locully specializes exclusively in clinics. We don't optimize restaurants or e-commerce stores — we understand the specific AI search signals, YMYL (Your Money Your Life) content requirements, and patient search behaviors that determine which clinics get recommended. That specialization matters. Read more about <Link to="/blog/how-to-choose-ai-optimization-agency-clinic-thailand/" style={s.ilink}>what to look for in an AI optimization agency</Link>.
        </p>

        <h3 style={s.h3}>Can I check if my clinic is already appearing in AI results?</h3>
        <p style={s.p}>
          Yes — and you should. See our step-by-step <Link to="/blog/ai-search-audit-clinic-bangkok/" style={s.ilink}>AI search audit guide for Bangkok clinics</Link> to check your current visibility across ChatGPT, Perplexity, and Google AI Overviews.
        </p>

        <h3 style={s.h3}>Does AI optimization replace traditional SEO?</h3>
        <p style={s.p}>
          No — they work together. Good AI optimization also improves traditional SEO rankings because both favor well-structured, authoritative content. Many clients see Google ranking improvements as a side effect of AI optimization work.
        </p>
      </div>
    ),
  },

  // ── POST 2 ──────────────────────────────────────────────────────────────────
  {
    slug: 'why-clinic-not-showing-chatgpt',
    title: "Why Your Clinic Doesn't Appear in ChatGPT Results (And How to Fix It)",
    metaTitle: "Why Your Clinic Doesn't Show in ChatGPT Search | Locully",
    metaDescription: "Six specific reasons Thailand clinics are invisible in ChatGPT, Perplexity, and Google AI — and the exact fixes to start appearing in AI recommendations.",
    publishDate: '2026-03-19',
    updatedDate: '2026-03-19',
    category: 'Troubleshooting',
    readTime: '6 min read',
    excerpt: "Six specific reasons your clinic isn't appearing in AI recommendations — and what to fix first.",
    relatedPosts: ['ai-search-optimization-clinics-thailand', 'ai-search-audit-clinic-bangkok', 'how-chatgpt-chooses-clinic-recommendation', 'geo-vs-seo-clinics-bangkok'],
    relatedClinics: ['physiotherapy-clinics', 'dental-clinics', 'beauty-clinics', 'wellness-clinics'],
    faqs: [
      { q: "Why isn't my clinic showing up in ChatGPT results?", a: "The most common reasons are: no English-language content about your clinic exists online, your website blocks AI crawlers, you have no structured data (schema markup), your Google Business Profile is incomplete, or no third-party sources mention your clinic by name. ChatGPT can only recommend what it knows — and it only knows what has been published in a crawlable, readable format." },
      { q: 'How do I get my clinic to appear in ChatGPT recommendations?', a: 'Start by ensuring your clinic has a complete, verified Google Business Profile, a crawlable English-language website with clear service and location information, schema markup, and at least a handful of mentions in external sources (review sites, directories, news coverage). Then create content that directly answers the questions patients ask AI assistants.' },
      { q: 'Does having a Google Business Profile help with ChatGPT visibility?', a: "Yes — a complete, accurate Google Business Profile is one of the most important foundation signals. ChatGPT draws from Google's knowledge graph among other sources. Your name, address, phone number, and category need to be consistent and fully filled out across all platforms." },
      { q: 'Does my clinic need a website to appear in ChatGPT?', a: "A website isn't strictly required, but it dramatically increases your chances. A website gives AI models a primary source to verify your clinic's details, services, and location. Without one, you're entirely dependent on third-party mentions, which gives you no control over what the AI says about you." },
      { q: 'Will improving my Google ranking help with ChatGPT results?', a: 'There is significant overlap between the signals that help Google ranking and those that help AI search — authority, quality content, structured data, and trustworthy backlinks all contribute to both. However, AI search has its own additional signals (direct answer formatting, entity clarity, third-party corroboration) that require targeted work beyond standard SEO.' },
      { q: 'How often does ChatGPT update its clinic recommendations?', a: "ChatGPT's base training data is updated periodically (not in real time), but it also uses web browsing in some versions. In practice, significant changes to your online footprint — new content, new reviews, new mentions — can influence recommendations within weeks to a few months. Consistency is more important than speed." },
      { q: 'How long does it take to fix AI search visibility issues?', a: 'Simple technical fixes (enabling AI crawler access, adding schema markup, completing your Google Business Profile) can have an effect within weeks. Content and authority signals take longer — typically 60–90 days before you see meaningful change in AI recommendations.' },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          If you've searched for your clinic on ChatGPT and come up empty — or found your competitors recommended instead — you're not alone. The majority of Thailand's clinics are invisible in AI search results, not because their clinics aren't good, but because their websites weren't built for AI engines to read.
        </p>
        <p style={s.p}>
          Here are the six most common reasons clinics don't appear in ChatGPT, Perplexity, or Google AI Overviews — and what to do about each one.
        </p>

        <h2 style={s.h2}>The 6 Most Common Reasons Your Clinic Isn't in AI Results</h2>

        <h3 style={s.h3}>1. Your website has one "Services" page instead of treatment-specific pages</h3>
        <p style={s.p}>
          When a patient asks ChatGPT "best teeth whitening clinic Bangkok," the AI looks for pages that specifically address teeth whitening. If your clinic has one page listing all 15 treatments you offer, you're invisible for every specific treatment query.
        </p>
        <p style={s.p}>
          The fix: Build dedicated pages for each treatment or condition you treat. Each page should answer the specific query — what the treatment is, what to expect, how much it costs (if you publish pricing), and who performs it.
        </p>

        <h3 style={s.h3}>2. No FAQ or Q&A section on your site</h3>
        <p style={s.p}>
          AI engines love FAQs because they're pre-packaged answers to specific questions. A well-structured FAQ section — written in natural question format, with direct answers — dramatically increases the chance AI will cite your content when patients ask those exact questions.
        </p>
        <p style={s.p}>
          Clinics without FAQ sections are missing the easiest, highest-leverage AI optimization tactic available. Adding 5–8 real patient questions (with direct answers) to each of your service pages takes a day of work and pays dividends for years.
        </p>

        <h3 style={s.h3}>3. Your content isn't structured for AI parsing</h3>
        <p style={s.p}>
          AI engines parse your HTML structure — headings, paragraphs, lists — to extract factual claims. Content written as long flowing paragraphs, or buried inside image carousels and JavaScript popups, is difficult or impossible for AI to read reliably.
        </p>
        <Callout>
          The pattern that consistently gets cited: state the key fact in the first sentence of each section, then support it. Don't bury the answer. Don't save it for the conclusion. Lead with it.
        </Callout>

        <h3 style={s.h3}>4. No schema markup (structured data)</h3>
        <p style={s.p}>
          Schema markup is code you add to your website that explicitly tells AI engines: "This is a medical clinic. This is our specialty. These are our opening hours. This is our address." Without it, AI has to infer these facts from your content — and sometimes infers them wrong, or just ignores you.
        </p>
        <p style={s.p}>
          For clinics, the most important schema types are <code>MedicalClinic</code>, <code>Physician</code> (for practitioner profiles), <code>FAQPage</code>, and <code>LocalBusiness</code>. None of this is visible to users — it's machine-readable metadata added to your page's HTML.
        </p>

        <h3 style={s.h3}>5. You have no external citations or mentions</h3>
        <p style={s.p}>
          AI recommendation systems look for corroborating evidence outside your own website. If no third-party sources — healthcare directories, review platforms, local news, medical associations — mention your clinic, AI treats you as an unknown entity and is reluctant to recommend you.
        </p>
        <p style={s.p}>
          This is especially important for YMYL (Your Money Your Life) queries, where AI applies stricter trust standards. Healthcare queries fall squarely in this category.
        </p>

        <h3 style={s.h3}>6. Your content was last updated 18 months ago</h3>
        <p style={s.p}>
          Content freshness is a trust signal. AI engines pay attention to when pages were last updated, and prefer current, maintained content. A website that hasn't been touched since 2023 signals to AI that it may not reflect the clinic's current operations.
        </p>
        <p style={s.p}>
          Regular, meaningful updates — a new FAQ question added, a treatment page expanded, opening hours confirmed for the year — keep your content fresh and your clinic relevant.
        </p>

        <h2 style={s.h2}>How to Check If Your Clinic Is in AI Results</h2>
        <p style={s.p}>
          The fastest way to audit your visibility:
        </p>
        <Ol>
          <NumLi n="1">Open ChatGPT and ask: <em>"Best [your clinic type] in [your area] Bangkok"</em></NumLi>
          <NumLi n="2">Ask Perplexity the same query</NumLi>
          <NumLi n="3">Search Google for that same term and look for an AI Overview at the top</NumLi>
          <NumLi n="4">Note which clinics appear — and whether yours is among them</NumLi>
        </Ol>
        <p style={s.p}>
          For a full 10-point audit, see our <Link to="/blog/ai-search-audit-clinic-bangkok/" style={s.ilink}>AI search audit checklist for Bangkok clinics</Link>.
        </p>

        <h2 style={s.h2}>Which Problem to Fix First</h2>
        <p style={s.p}>
          If you're starting from scratch, prioritize in this order:
        </p>
        <Ul>
          <Li><strong style={s.strong}>Treatment-specific pages</strong> — the single biggest lever for most clinics</Li>
          <Li><strong style={s.strong}>FAQ sections</strong> — fast to add, immediate impact on AI citation</Li>
          <Li><strong style={s.strong}>Schema markup</strong> — technical but high-value once done</Li>
          <Li><strong style={s.strong}>Content freshness</strong> — ongoing maintenance, not a one-time fix</Li>
          <Li><strong style={s.strong}>External citations</strong> — takes time to build, but compounds over time</Li>
        </Ul>
        <p style={s.p}>
          Understanding the full picture starts with knowing what AI engines are actually looking for. Read <Link to="/blog/how-chatgpt-chooses-clinic-recommendation/" style={s.ilink}>how ChatGPT chooses which clinic to recommend</Link> for the complete signal breakdown.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>My clinic has good Google reviews — why doesn't that help with ChatGPT?</h3>
        <p style={s.p}>
          Google Maps reviews and ChatGPT citations are separate systems. Google Maps visibility depends on your Google Business Profile and review count. ChatGPT recommendations depend on your website's content structure, schema markup, and authority signals — almost entirely different factors. You can have 500 Google reviews and zero ChatGPT presence, or be highly cited in ChatGPT with 50 reviews.
        </p>

        <h3 style={s.h3}>How quickly can these fixes improve my AI visibility?</h3>
        <p style={s.p}>
          For structural fixes like adding FAQ sections and treatment pages, visible improvement typically comes within 60–90 days as AI engines re-index your content. Schema markup can show faster results — sometimes within weeks — because it provides explicit, machine-readable signals.
        </p>

        <h3 style={s.h3}>Is this something I can do myself?</h3>
        <p style={s.p}>
          Some of it, yes. Adding FAQ content and writing treatment-specific pages are tasks a clinic manager or content writer can handle. Schema markup and technical audit work typically requires expertise to implement correctly. If you'd rather not navigate it alone, <Link to="/#contact" style={s.ilink}>request a free AI audit</Link> — we'll show you exactly where you stand and what to prioritize.
        </p>
      </div>
    ),
  },

  // ── POST 3 ──────────────────────────────────────────────────────────────────
  {
    slug: 'how-chatgpt-chooses-clinic-recommendation',
    title: 'How ChatGPT Decides Which Clinic to Recommend in Bangkok',
    metaTitle: 'How ChatGPT Chooses Which Clinic to Recommend in Bangkok',
    metaDescription: 'The three signals that determine which Bangkok clinics appear in ChatGPT, Perplexity, and Google AI answers — and what clinic owners can do about each one.',
    publishDate: '2026-03-19',
    updatedDate: '2026-03-19',
    category: 'Explainer',
    readTime: '7 min read',
    excerpt: "The three signals that determine which Bangkok clinics appear in ChatGPT, Perplexity, and Google AI — and what clinic owners can do about each one.",
    relatedPosts: ['ai-search-optimization-clinics-thailand', 'why-clinic-not-showing-chatgpt', 'geo-vs-seo-clinics-bangkok', 'ai-search-audit-clinic-bangkok'],
    relatedClinics: ['dental-clinics', 'fertility-clinics', 'beauty-clinics', 'physiotherapy-clinics'],
    faqs: [
      { q: 'How does ChatGPT decide which clinic to recommend?', a: 'ChatGPT synthesises information from across the web — your website, Google Business Profile, review platforms, news articles, and directories — to determine which clinics are most credible and relevant. The three core signals are: trust (consistent, verified information across multiple sources), relevance (content that matches what the patient is asking), and authority (the strength and breadth of your online presence).' },
      { q: 'Do Google reviews affect ChatGPT clinic recommendations?', a: "Yes. Google reviews are one of the key trust signals ChatGPT and other AI platforms draw on. Volume, rating, recency, and the specific language patients use in reviews all influence how AI models describe and rank your clinic. A clinic with 200+ recent reviews that mention specific conditions treated will consistently outperform one with 20 generic reviews." },
      { q: 'Can I pay to appear in ChatGPT recommendations?', a: "No — ChatGPT does not offer paid placement in its organic recommendations. The only way to appear is to genuinely earn it through content, authority, and trust signals. This makes AI search a level playing field: a well-optimised specialist clinic can outrank a large hospital with a bigger ad budget." },
      { q: 'How does Perplexity choose clinics differently from ChatGPT?', a: 'Perplexity places heavier weight on real-time web results and tends to cite sources more explicitly. This means strong website content and active third-party coverage (review sites, directories, recent articles) matter even more on Perplexity. Google AI Overviews draw more heavily on Google\'s own data — Business Profiles, Maps, and structured data.' },
      { q: "What is the most important signal for ChatGPT clinic recommendations?", a: 'Consistency of information across multiple independent sources is the single most important signal. If ChatGPT sees your clinic name, address, specialty, and services mentioned consistently across your website, Google, review sites, health directories, and any news coverage — it builds confidence that the information is accurate and your clinic is established.' },
      { q: 'Does social media presence affect AI search recommendations?', a: "Indirectly, yes. Social media profiles are crawlable by AI systems and contribute to entity recognition — the AI's understanding that your clinic is a real, established business. However, social media is weaker than dedicated health directories, your website, and Google. Focus on high-authority sources first, then layer in social." },
      { q: 'What kind of content gets Bangkok clinics recommended by ChatGPT?', a: 'Content that directly answers patient questions performs best. Pages that explain specific conditions treated, procedures offered, what to expect, qualifications of practitioners, and price ranges give AI models factual, citable information. Thin, generic "welcome to our clinic" pages rarely get cited.' },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          Patients asking ChatGPT to recommend a clinic in Bangkok expect a direct answer — not a list of links. And ChatGPT delivers one, drawing on everything it knows about Bangkok's clinic landscape. But how does it decide who to recommend?
        </p>
        <p style={s.p}>
          Understanding that decision process is the first step to appearing in it. This explainer covers the three core signals, how each AI platform weights them differently, and what clinic owners can do to influence each one.
        </p>

        <h2 style={s.h2}>Signal 1: Authority — Who Else Mentions Your Clinic?</h2>
        <p style={s.p}>
          AI language models are trained on vast amounts of web content. Clinics that appear in that content — mentioned on healthcare directories, reviewed on reputable platforms, cited in articles, featured in local news — carry more "pre-trained authority" than clinics that exist only on their own website.
        </p>
        <p style={s.p}>
          Think of it as digital word-of-mouth at scale. If your clinic is cited by 20 external sources, it's a much stronger entity signal than a clinic with an identical website but zero external mentions.
        </p>
        <InfoBox title="What counts as an authority signal for clinics">
          <Ul>
            <Li>Google Business Profile (complete, with reviews)</Li>
            <Li>Healthcare directories (Healthtravel, Bookimed, WhatClinic)</Li>
            <Li>Expat forums and community mentions (Thaivisa, expat blogs)</Li>
            <Li>Local English-language news (Bangkok Post, Thaiger)</Li>
            <Li>Medical association memberships with online profiles</Li>
            <Li>Third-party reviews (Trustpilot, Doctorlib, clinic review sites)</Li>
          </Ul>
        </InfoBox>
        <p style={s.p}>
          This is the slowest signal to build — but it compounds. Every new external citation makes your clinic a more confident recommendation for AI systems.
        </p>

        <h2 style={s.h2}>Signal 2: Content Relevance — Can AI Match You to the Query?</h2>
        <p style={s.p}>
          When a patient asks "English-speaking physio for post-surgery rehab in Bangkok," ChatGPT looks for clinic content that explicitly addresses: physiotherapy, post-surgery rehabilitation, English language, and Bangkok. A generic homepage with a Services list matches none of these terms specifically enough to be confidently cited.
        </p>
        <p style={s.p}>
          Content relevance requires specificity. AI matches content to queries at a semantic level — it understands synonyms and related concepts — but it still needs explicit signals. A page that never mentions "post-surgery rehabilitation" is at a disadvantage for that query, no matter how good the clinic actually is at it.
        </p>
        <Callout>
          The most common missed opportunity: a clinic that's excellent at something never mentions it explicitly on their website. If you treat a lot of sports injuries, your website needs a sports injury page — not just physiotherapy listed under Services.
        </Callout>
        <p style={s.p}>
          For a guide on how to structure content for specific clinic types, see our posts on <Link to="/ai-optimization/physiotherapy-clinics/" style={s.ilink}>AI optimization for physiotherapy clinics</Link> and <Link to="/ai-optimization/dental-clinics/" style={s.ilink}>dental clinics</Link>.
        </p>

        <h2 style={s.h2}>Signal 3: Structured Data — Can AI Parse You Reliably?</h2>
        <p style={s.p}>
          Schema markup tells AI systems exactly what your content means. Without it, AI reads your page and infers. With it, you're providing a machine-readable fact sheet: clinic name, medical specialty, address, opening hours, languages spoken, and more.
        </p>
        <p style={s.p}>
          The difference matters most for precise queries. "English-speaking dentist Bangkok open Saturday" is three separate factual claims the AI needs to verify. If that information isn't structured in your schema, the AI either can't confirm it or presents it with lower confidence — reducing the likelihood of a recommendation.
        </p>

        <h2 style={s.h2}>How Perplexity Works Differently from ChatGPT</h2>
        <p style={s.p}>
          ChatGPT's recommendations are influenced by its training data — it "knows" things from before its training cutoff, weighted by how often they appear in reputable sources. Perplexity, by contrast, does live web searches and synthesizes results in real time.
        </p>
        <p style={s.p}>
          This means Perplexity is more sensitive to your current web presence — recent content updates, current schema markup, fresh reviews. ChatGPT is more sensitive to your long-term authority across many sources.
        </p>
        <p style={s.p}>
          To rank well in both, you need both: a strong historical presence across external sources (for ChatGPT) and well-structured, current content on your own website (for Perplexity).
        </p>
        <p style={s.p}>
          Google AI Overviews is a third model — it synthesizes from Google's live index and applies additional YMYL (Your Money Your Life) trust standards for healthcare queries. Google AI requires the strongest E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals of the three.
        </p>

        <h2 style={s.h2}>What "AI Share of Voice" Means for Your Clinic</h2>
        <p style={s.p}>
          In traditional SEO, you measure visibility by ranking position. In AI search, the equivalent metric is <em>share of voice</em> — how often your clinic is cited across relevant queries, across multiple platforms.
        </p>
        <p style={s.p}>
          A clinic with strong AI share of voice appears consistently: recommended for back pain queries, sports injury queries, and post-surgery rehab queries — across ChatGPT, Perplexity, and Google AI Overviews. The goal isn't to appear once — it's to be the default recommendation for your clinical category in your area.
        </p>
        <p style={s.p}>
          This is how Locully measures progress. Not just "you appeared in one query" — but a structured audit across 20–30 relevant queries, tracked monthly, showing your share of voice growing over time.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>Does ChatGPT ever recommend clinics it's never encountered before?</h3>
        <p style={s.p}>
          For queries where ChatGPT's training data is thin, it will defer to more current sources — or express uncertainty. Newer clinics can still gain AI visibility faster than established ones if they build strong, well-structured content quickly, because AI weights content quality, not just historical presence.
        </p>

        <h3 style={s.h3}>Can I contact ChatGPT or OpenAI to ask them to recommend my clinic?</h3>
        <p style={s.p}>
          No — AI recommendations are generated algorithmically from training data and real-time web content, not from direct submissions. The only way to influence them is to build the signals described above: external citations, quality content, and structured data.
        </p>

        <h3 style={s.h3}>My competitor appears in ChatGPT results. What do they have that I don't?</h3>
        <p style={s.p}>
          Typically one or more of: more external citations, better-structured treatment-specific pages, schema markup on their website, or more FAQ content addressing the specific query. Use our <Link to="/blog/ai-search-audit-clinic-bangkok/" style={s.ilink}>AI search audit checklist</Link> to systematically identify the gaps.
        </p>

        <h3 style={s.h3}>How often do AI recommendations change?</h3>
        <p style={s.p}>
          ChatGPT's training data updates periodically (major model updates every 6–12 months), but Perplexity and Google AI Overviews update in near-real time based on current web content. Maintaining fresh, current content matters for Perplexity and Google AI in particular.
        </p>
      </div>
    ),
  },

  // ── POST 4 ──────────────────────────────────────────────────────────────────
  {
    slug: 'ai-optimization-dental-clinics-thailand',
    title: 'AI Optimization for Dental Clinics in Thailand: A 2026 Guide',
    metaTitle: 'AI Optimization for Dental Clinics in Thailand | Locully',
    metaDescription: 'The specific AI search signals dental clinics in Thailand need to get recommended by ChatGPT, Perplexity, and Google AI Overviews in 2026.',
    publishDate: '2026-03-19',
    updatedDate: '2026-03-19',
    category: 'Vertical Guide',
    readTime: '6 min read',
    excerpt: "The specific AI search signals dental patients look for — and the content strategy Bangkok dental clinics should build to get recommended.",
    relatedPosts: ['ai-search-optimization-clinics-thailand', 'why-clinic-not-showing-chatgpt', 'how-chatgpt-chooses-clinic-recommendation', 'geo-vs-seo-clinics-bangkok'],
    relatedClinics: ['dental-clinics', 'physiotherapy-clinics', 'beauty-clinics', 'fertility-clinics'],
    faqs: [
      { q: 'How do dental clinics in Thailand rank in AI search?', a: "Dental clinics rank in AI search based on the same core signals as all clinics — trust, relevance, and authority — but dental has specific nuances. Patients search for procedure-specific terms (dental implants, Invisalign, teeth whitening, root canal Bangkok), so clinics with detailed treatment pages for each service dramatically outperform those with a single generic 'Our Services' page." },
      { q: 'What should a dental clinic website include to appear in ChatGPT?', a: 'Dedicated pages for each treatment offered, pricing transparency (or at least a price range), practitioner credentials and dental school qualifications, before/after cases where appropriate, and English-language content throughout. Schema markup for LocalBusiness and MedicalClinic types should be added to every page.' },
      { q: 'Does language on a dental website matter for AI search?', a: "Yes — for English-speaking patients (expats, medical tourists, digital nomads), the content needs to be in English to be discoverable. A site that's entirely in Thai will rarely be cited by AI platforms for English queries, even if the clinic is excellent. Bilingual content with a complete English version is the minimum." },
      { q: 'Should dental clinics target medical tourists differently in AI search?', a: "Medical tourist queries are different in intent — they typically involve procedure bundling ('dental implants + tourism Bangkok'), cost comparison ('dental crown price Thailand vs UK'), and credential verification ('JCI accredited dental Bangkok'). Clinics should create content that directly addresses these specific questions rather than using generic marketing copy." },
      { q: 'What reviews do AI platforms look for when recommending dental clinics?', a: 'Volume and specificity matter most. Reviews that mention specific procedures, practitioner names, pain management, English-speaking staff, and value for money give AI models rich, citable details. Clinics should actively encourage detailed post-treatment reviews on Google, as these are a primary AI input.' },
      { q: 'How is AI search optimization different for dental vs other clinic types?', a: "Dental has a broader range of elective procedures that attract medical tourists, which means the query landscape is much wider than, say, physiotherapy. Dental clinics also need to address price transparency more directly, as cost comparison is a major driver of dental medical tourism. International certification and accreditation signals carry more weight for dental than for general wellness." },
      { q: 'How long does it take for a dental clinic in Thailand to appear in AI results?', a: 'With focused optimization — complete Google Business Profile, structured data, English service pages, and a targeted review strategy — most dental clinics begin appearing in relevant AI recommendations within 60–90 days. Highly competitive terms (dental implants Bangkok) may take longer to dominate.' },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          Bangkok has hundreds of dental clinics competing for the same pool of expat, medical-tourist, and English-speaking patients. When those patients ask ChatGPT or Perplexity for a recommendation, a handful of clinics get mentioned — and the rest are invisible.
        </p>
        <p style={s.p}>
          This guide covers the specific AI search signals that matter for dental clinics in Thailand, what dental patients are actually asking AI, and the content strategy that changes who gets recommended.
        </p>

        <h2 style={s.h2}>What Dental Patients Are Asking AI</h2>
        <p style={s.p}>
          Understanding the queries is the foundation of the strategy. Dental patients don't ask AI "recommend a dental clinic." They ask specific, high-intent questions:
        </p>
        <InfoBox title="Real AI queries from dental patients in Bangkok">
          <Ul>
            <Li>"Best dental implant clinic Bangkok for foreigners"</Li>
            <Li>"Teeth whitening Bangkok price English speaking"</Li>
            <Li>"Emergency dentist Bangkok open Sunday"</Li>
            <Li>"Dental veneers Bangkok cost 2026"</Li>
            <Li>"Root canal Bangkok international patient"</Li>
            <Li>"Orthodontist Bangkok Sukhumvit area"</Li>
          </Ul>
        </InfoBox>
        <p style={s.p}>
          Each of these queries is a separate ranking opportunity. And each one requires specific content on your site to be answered. A clinic with one "Dental Services" page is invisible to every single one.
        </p>

        <h2 style={s.h2}>The Three Signals Dental Clinics Are Missing</h2>

        <h3 style={s.h3}>1. Treatment-level content (not just a services list)</h3>
        <p style={s.p}>
          "Dental implants Bangkok" and "teeth whitening Bangkok" are different queries, different patient intents, and different recommendation contexts. AI needs a dedicated page for each treatment — with the procedure explained, what patients can expect, recovery information, and ideally pricing transparency.
        </p>
        <p style={s.p}>
          Most Bangkok dental websites have a services page with a list. This is the single biggest fix available, and it's purely a content task — no technical expertise required.
        </p>

        <h3 style={s.h3}>2. Pricing signals</h3>
        <p style={s.p}>
          Medical tourism patients ask AI about cost. "How much do dental implants cost in Bangkok?" is one of the most common dental AI queries. Clinics that publish clear, structured pricing — even ranges — get cited in those answers. Clinics that don't are passed over.
        </p>
        <Callout>
          You don't need to publish exact prices. A transparent "starting from ฿X" or "typically ฿X–Y for a single implant" is enough to be cited for pricing queries and signals confidence to patients.
        </Callout>

        <h3 style={s.h3}>3. Language and accessibility signals</h3>
        <p style={s.p}>
          "English-speaking dentist Bangkok" and "dental clinic Bangkok for foreigners" are high-intent, high-conversion queries. If your website doesn't explicitly mention English-speaking staff, international patient experience, or expat-friendly services — in text that AI can read — you won't appear for these queries, even if your team speaks excellent English.
        </p>
        <p style={s.p}>
          This is a common gap: clinics that serve expats excellently but never say so on their website. AI can only work with what it can read.
        </p>

        <h2 style={s.h2}>The Dental-Specific Content Strategy</h2>
        <p style={s.p}>
          Based on the query landscape above, a Bangkok dental clinic's AI content strategy should include:
        </p>
        <Ol>
          <NumLi n="1"><strong style={s.strong}>Dedicated treatment pages</strong> for: implants, whitening, veneers, orthodontics, root canals, extractions, and any other top procedures. Each page answers the core questions: what, how, recovery, cost, and English availability.</NumLi>
          <NumLi n="2"><strong style={s.strong}>Pricing page or pricing sections</strong> with transparent ranges — not "contact us for a quote" on every line.</NumLi>
          <NumLi n="3"><strong style={s.strong}>International patient page</strong> explicitly addressing: English-speaking staff, insurance, payment options, location accessibility, and what to expect as a first-time visitor from abroad.</NumLi>
          <NumLi n="4"><strong style={s.strong}>FAQ sections</strong> on each treatment page — written in the natural question format patients use when asking AI.</NumLi>
          <NumLi n="5"><strong style={s.strong}>Dentist profile pages</strong> with credentials, specializations, and years of experience — structured for AI to parse.</NumLi>
        </Ol>
        <p style={s.p}>
          Locully manages exactly this content architecture for dental clinics. Visit our <Link to="/ai-optimization/dental-clinics/" style={s.ilink}>AI optimization for dental clinics page</Link> for the full service overview.
        </p>

        <h2 style={s.h2}>The Competitive Opportunity</h2>
        <p style={s.p}>
          AI search for Bangkok dental is competitive on Google — but it's less competitive in AI. Most dental clinics have invested in Google Ads and SEO, but very few have invested specifically in AI optimization. The clinics building treatment-specific content and schema markup today are establishing AI presence before their competitors catch on.
        </p>
        <p style={s.p}>
          For the broader picture on AI optimization strategy, read our <Link to="/blog/ai-search-optimization-clinics-thailand/" style={s.ilink}>complete guide to AI search optimization for Thailand clinics</Link>.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>How many treatment pages does a dental clinic need?</h3>
        <p style={s.p}>
          Start with your five most common procedures. Each page should be 400–600 words minimum, covering the procedure, what to expect, recovery, and an FAQ section. Once those are indexed and performing, expand to secondary procedures.
        </p>

        <h3 style={s.h3}>Should pricing be published in Thai Baht or USD?</h3>
        <p style={s.p}>
          Both, ideally. Expat and medical-tourist patients often search in USD or their home currency. Showing prices in both (or noting the exchange rate) serves more queries and makes AI citation more likely for currency-specific searches.
        </p>

        <h3 style={s.h3}>We have lots of Google reviews — why isn't that enough?</h3>
        <p style={s.p}>
          Google reviews help with Google Maps visibility and some Google AI Overview signals, but they don't influence ChatGPT or Perplexity recommendations, which rely on website content structure and external mentions in editorial sources. Reviews are one input, not the whole picture. See <Link to="/blog/why-clinic-not-showing-chatgpt/" style={s.ilink}>why clinics with good reviews still don't appear in ChatGPT</Link>.
        </p>
      </div>
    ),
  },

  // ── POST 5 ──────────────────────────────────────────────────────────────────
  {
    slug: 'geo-vs-seo-clinics-bangkok',
    title: 'GEO vs SEO for Clinics: What Bangkok Clinic Owners Actually Need',
    metaTitle: 'GEO vs SEO for Clinics: What Bangkok Owners Need | Locully',
    metaDescription: 'GEO vs SEO for Bangkok clinics: what each one does, how the ranking signals differ, and which to prioritize for maximum patient visibility in 2026.',
    publishDate: '2026-03-19',
    updatedDate: '2026-03-19',
    category: 'Explainer',
    readTime: '7 min read',
    excerpt: "GEO and SEO both matter — but they're different systems. Here's what each one does for clinics, and how to think about both in 2026.",
    relatedPosts: ['ai-search-optimization-clinics-thailand', 'how-chatgpt-chooses-clinic-recommendation', 'why-clinic-not-showing-chatgpt', 'how-to-choose-ai-optimization-agency-clinic-thailand'],
    relatedClinics: ['physiotherapy-clinics', 'dental-clinics', 'wellness-clinics', 'beauty-clinics'],
    faqs: [
      { q: 'What is the difference between GEO and SEO for clinics?', a: "SEO (Search Engine Optimisation) gets your clinic ranked in Google's list of links. GEO (Generative Engine Optimisation) gets your clinic recommended in AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews. SEO is about ranking positions; GEO is about being cited by name in direct answers. Both are important — but they require different strategies." },
      { q: 'Should Bangkok clinics focus on GEO or SEO first?', a: "For most clinics, the foundation work overlaps significantly — a complete website, clear service pages, structured data, and strong reviews help both. If you're starting from scratch, build the SEO foundation first (it takes longer), then layer GEO optimisation on top. If you already rank in Google, GEO should be your next priority, as AI search adoption among expats and medical tourists is accelerating fast." },
      { q: 'Does improving SEO automatically improve GEO?', a: "Partially. Technical quality, content depth, and authority signals that help Google also help AI platforms. But GEO has unique requirements SEO doesn't: direct-answer formatting, entity consistency across sources, and content that specifically addresses conversational queries. You cannot fully optimise for GEO by doing SEO alone." },
      { q: 'What is GEO (Generative Engine Optimisation)?', a: "GEO is the practice of optimising your online presence so that AI search tools — ChatGPT, Perplexity, Google AI Overviews, Claude — cite and recommend your clinic in their generated answers. It involves content strategy, structured data, entity building, and authority signals specifically tuned to how AI models select and cite sources." },
      { q: 'How long does GEO take to show results compared to SEO?', a: "GEO can show results faster than traditional SEO for specific queries, because AI platforms update their outputs more frequently than Google's ranking algorithm cycles. Clinics with strong existing authority can see changes in AI recommendations within 4–8 weeks of targeted GEO work. Full competitive dominance typically takes 3–6 months." },
      { q: 'Can a clinic do both GEO and SEO at the same time?', a: "Yes — and they should. The most effective clinic marketing strategy integrates both: a solid SEO foundation that drives Google visibility, combined with GEO optimisation that captures the growing share of patients who use AI to find clinics. Most of the infrastructure (website, content, schema) serves both goals." },
      { q: 'Which AI platforms does GEO target?', a: 'The three platforms that matter most for clinic discovery are ChatGPT (OpenAI), Perplexity AI, and Google AI Overviews. Each uses slightly different ranking signals and has different audiences. A comprehensive GEO strategy optimises for all three, rather than focusing on just one.' },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          Bangkok clinic owners are increasingly hearing about GEO — Generative Engine Optimization. It's being positioned as the new SEO, the thing that's replacing traditional search optimization. That framing is both useful and misleading.
        </p>
        <p style={s.p}>
          GEO and traditional SEO are different tools solving different problems. This guide explains what each one does, where they overlap, and how Bangkok clinic owners should think about both in 2026.
        </p>

        <h2 style={s.h2}>What Traditional SEO Gets Your Clinic</h2>
        <p style={s.p}>
          Traditional SEO gets your website ranked in Google's standard search results — the "ten blue links" list that appears for most searches. When someone searches "physiotherapy clinic Bangkok" on Google and scrolls past the ads, the organic results are what SEO influences.
        </p>
        <p style={s.p}>
          The goal of SEO is ranking position — specifically, being on page one, ideally in the top three. Traffic from organic Google search is significant, and for Thai clinic patients who are at the early research stage, it's still an important channel.
        </p>
        <p style={s.p}>
          SEO is well-established, with decades of best practice. It responds to content quality, backlinks, technical site performance, and domain authority built over time. Results typically take 3–12 months.
        </p>

        <h2 style={s.h2}>What GEO Does Differently</h2>
        <p style={s.p}>
          GEO optimizes for a different type of search result: the AI-generated answer. When someone asks ChatGPT "recommend a dental clinic in Bangkok for implants" or asks Google a healthcare question that triggers an AI Overview, GEO determines whether your clinic is in that answer.
        </p>
        <p style={s.p}>
          The key difference: SEO gives you a link in a list. GEO gets you cited in a synthesized recommendation. AI search is one answer, not ten.
        </p>

        <div className="l-blog-table-wrap">
          <table style={s.table}>
            <thead>
              <tr>
                <th style={s.th}>Dimension</th>
                <th style={s.th}>Traditional SEO</th>
                <th style={s.th}>GEO (AI Search)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={s.td}><strong style={s.strong}>Result format</strong></td>
                <td style={s.td}>Ranked list of links</td>
                <td style={s.td}>Single synthesized answer with citations</td>
              </tr>
              <tr>
                <td style={s.td}><strong style={s.strong}>Ranking signals</strong></td>
                <td style={s.td}>Backlinks, domain authority, technical SEO</td>
                <td style={s.td}>Content structure, schema, external entity signals</td>
              </tr>
              <tr>
                <td style={s.td}><strong style={s.strong}>Timeline</strong></td>
                <td style={s.td}>3–12 months typical</td>
                <td style={s.td}>60–90 days typical</td>
              </tr>
              <tr>
                <td style={s.td}><strong style={s.strong}>User intent served</strong></td>
                <td style={s.td}>Research browsing</td>
                <td style={s.td}>Direct recommendation</td>
              </tr>
              <tr>
                <td style={s.td}><strong style={s.strong}>Platforms</strong></td>
                <td style={s.td}>Google (mainly)</td>
                <td style={s.td}>ChatGPT, Perplexity, Google AI Overviews</td>
              </tr>
              <tr>
                <td style={s.td}><strong style={s.strong}>Conversion rate</strong></td>
                <td style={s.td}>Baseline</td>
                <td style={s.td}>4.4× higher than organic search</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style={s.h2}>The Three Key Differences That Matter for Clinics</h2>

        <h3 style={s.h3}>1. Ranking factors are fundamentally different</h3>
        <p style={s.p}>
          SEO rewards backlinks, domain age, technical speed, and long-form content with keyword density. GEO rewards content that can be extracted and cited — structured headings, FAQ sections, factual claims with clear attribution, schema markup.
        </p>
        <p style={s.p}>
          A clinic can have an old, well-linked website that ranks well on Google but has no schema markup and generic content — and be invisible to AI. Conversely, a new clinic website with excellent structured content and no backlinks can appear in ChatGPT within months.
        </p>

        <h3 style={s.h3}>2. The result format means winner-takes-more</h3>
        <p style={s.p}>
          On Google page one, ten clinics share visibility. In ChatGPT, two or three clinics are recommended — sometimes just one. This makes GEO a higher-stakes game: the difference between being in the answer and not being in the answer is total.
        </p>

        <h3 style={s.h3}>3. The user intent is different — and closer to booking</h3>
        <p style={s.p}>
          Patients who ask AI for a clinic recommendation are further along in their decision than patients browsing Google results. They've already decided they want a physiotherapist or a dentist — they're deciding where to go. This is why AI-referred visitors convert at a dramatically higher rate.
        </p>

        <h2 style={s.h2}>Does GEO Replace SEO? No — Here's Why</h2>
        <p style={s.p}>
          GEO and SEO are complementary. The content improvements that make you more citable by AI — clear structure, specific treatment pages, FAQ content, schema markup — also improve your Google rankings. Both reward the same underlying quality signals.
        </p>
        <Callout>
          Think of it this way: SEO gets patients to your website when they're browsing. GEO gets your clinic recommended when patients are deciding. You need both — but they're solved by the same quality content, implemented correctly.
        </Callout>

        <h2 style={s.h2}>Which to Prioritize for Your Bangkok Clinic in 2026</h2>
        <p style={s.p}>
          If you're starting fresh with limited resources, GEO typically shows a higher return in the short term for Bangkok clinics targeting expat and medical-tourist patients. These patients skew heavily toward AI search platforms. GEO is also faster — results in 60–90 days versus 6–12 months for SEO.
        </p>
        <p style={s.p}>
          If you already have a solid SEO foundation, adding GEO optimization is incremental work — schema markup, FAQ expansion, content restructuring — that pays dividends on both channels simultaneously.
        </p>
        <p style={s.p}>
          Read our <Link to="/blog/ai-search-optimization-clinics-thailand/" style={s.ilink}>complete guide to AI search optimization for Thailand clinics</Link> for the full framework, or <Link to="/blog/how-to-choose-ai-optimization-agency-clinic-thailand/" style={s.ilink}>learn what to look for in an AI optimization agency</Link> before you engage one.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>Should I stop investing in traditional SEO?</h3>
        <p style={s.p}>
          No. Traditional SEO still drives significant traffic and conversions for clinics. The right approach is to ensure your content investments work for both channels — which is achievable because the underlying quality signals overlap significantly.
        </p>

        <h3 style={s.h3}>Is GEO a permanent shift or a trend that will fade?</h3>
        <p style={s.p}>
          AI search is growing and is here to stay. Usage of ChatGPT, Perplexity, and Google AI Overviews for local service discovery is increasing quarter over quarter. The specific platforms may evolve, but the principle — that AI gives direct answers rather than link lists — is becoming the default for high-intent searches.
        </p>

        <h3 style={s.h3}>How do I measure GEO performance for my clinic?</h3>
        <p style={s.p}>
          Through structured query monitoring: running a defined set of relevant queries across ChatGPT, Perplexity, and Google AI Overviews monthly and tracking citation frequency. Locully provides monthly AI share-of-voice reports showing how your visibility changes over time.
        </p>
      </div>
    ),
  },

  // ── POST 6 ──────────────────────────────────────────────────────────────────
  {
    slug: 'ai-search-audit-clinic-bangkok',
    title: 'The AI Search Audit Every Bangkok Clinic Should Run in 2026',
    metaTitle: 'The AI Search Audit Every Bangkok Clinic Should Run in 2026',
    metaDescription: 'A 10-point AI search audit for Bangkok clinics. Check ChatGPT, Perplexity, and Google AI Overviews visibility — and find exactly what to fix first.',
    publishDate: '2026-03-19',
    updatedDate: '2026-03-19',
    category: 'Checklist',
    readTime: '6 min read',
    excerpt: "A 10-point checklist to audit your clinic's current AI search visibility — and identify exactly what to fix first.",
    relatedPosts: ['why-clinic-not-showing-chatgpt', 'ai-search-optimization-clinics-thailand', 'how-chatgpt-chooses-clinic-recommendation', 'geo-vs-seo-clinics-bangkok'],
    relatedClinics: ['physiotherapy-clinics', 'dental-clinics', 'beauty-clinics', 'wellness-clinics'],
    faqs: [
      { q: 'What is an AI search audit for clinics?', a: "An AI search audit tests how visible your clinic is across AI platforms — ChatGPT, Perplexity, Google AI Overviews — and identifies the specific gaps preventing you from being recommended. It typically covers: current AI visibility scores, crawler access, structured data quality, content gaps, Google Business Profile completeness, and third-party mention analysis." },
      { q: 'How do I check if my clinic appears in ChatGPT results?', a: "Open ChatGPT and ask: 'What are the best [your specialty] clinics in [your city]?' Try several variations — include your district, your target patient type (expats, medical tourists), and specific conditions you treat. If your clinic doesn't appear in the top 3 results across most relevant queries, you have a visibility gap." },
      { q: 'What does an AI search audit include?', a: 'A comprehensive AI search audit covers: AI visibility test (manual queries on ChatGPT, Perplexity, Google AI), robots.txt and crawler access check, schema markup audit, Google Business Profile completeness, NAP (name/address/phone) consistency across directories, content quality assessment, and a prioritised list of fixes.' },
      { q: 'What are the most common AI search problems found in clinic audits?', a: "The most frequent issues are: AI crawlers blocked by robots.txt, no schema markup, incomplete or unverified Google Business Profile, inconsistent clinic name/address across platforms, no English-language content, and zero third-party mentions. Most clinics have at least three of these issues — all of them fixable." },
      { q: 'How often should a Bangkok clinic run an AI search audit?', a: 'A full audit once every 6 months is a reasonable baseline. You should also run a quick spot-check (manual AI queries) every 4–6 weeks, and after any major changes to your website, Google Business Profile, or service offerings. AI platforms update their outputs frequently, so monitoring is ongoing.' },
      { q: 'How long does an AI search audit take?', a: 'A thorough AI search audit takes 2–5 business days to complete properly. A basic self-audit (checking manual queries, reviewing robots.txt, checking schema) can be done in a few hours. Locully delivers a full written audit report within 48 hours of receiving a clinic submission.' },
      { q: 'Do I need a specialist to run an AI search audit?', a: "You can run a basic version yourself using the 10-point checklist in this article. However, a specialist audit will identify technical issues (crawler access, schema errors, entity disambiguation problems) that aren't visible to a non-technical clinic owner — and will provide a prioritised action plan rather than a raw list of problems." },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          Before you invest in AI optimization, you need to know where you actually stand. Many Bangkok clinic owners assume their clinic appears in AI results — most are surprised to discover it doesn't.
        </p>
        <p style={s.p}>
          This audit takes 30 minutes and gives you a clear picture of your current AI visibility and the specific gaps to fix. No tools or technical knowledge required for most of it.
        </p>

        <h2 style={s.h2}>Step 1: Check Your Current AI Visibility (Before the Audit)</h2>
        <p style={s.p}>
          Start by understanding your baseline. Open each platform and run these tests:
        </p>

        <h3 style={s.h3}>ChatGPT test</h3>
        <p style={s.p}>Ask these queries (replace with your clinic type and area):</p>
        <InfoBox title="Test queries to run">
          <Ul>
            <Li>"Best [clinic type] in Bangkok for foreigners"</Li>
            <Li>"[clinic type] near Sukhumvit / Thonglor / [your area] Bangkok"</Li>
            <Li>"English-speaking [clinic type] Bangkok recommendation"</Li>
            <Li>"[Specific treatment] Bangkok — which clinic do you recommend?"</Li>
          </Ul>
        </InfoBox>
        <p style={s.p}>Note: does your clinic appear? If yes, in what context? If no, who does?</p>

        <h3 style={s.h3}>Perplexity test</h3>
        <p style={s.p}>Run the same queries on Perplexity. Note whether Perplexity cites your website as a source. Perplexity shows its sources visibly — this is a good indicator of whether your site is being indexed and trusted.</p>

        <h3 style={s.h3}>Google AI Overviews test</h3>
        <p style={s.p}>Search Google (in an incognito window) for your most important queries. If a blue AI-generated summary box appears at the top, check whether your clinic is mentioned in it. If there's no AI Overview, note whether you appear in the top three organic results.</p>

        <h2 style={s.h2}>The 10-Point AI Search Audit Checklist</h2>
        <p style={s.p}>Score each item: ✓ (done), △ (partial), ✗ (not done).</p>

        <Ol>
          <NumLi n="1">
            <div>
              <strong style={s.strong}>Schema markup is present</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Check your page source for <code>application/ld+json</code>. You should have MedicalClinic, LocalBusiness, and FAQPage schema. Missing schema = major AI signal gap.</p>
            </div>
          </NumLi>
          <NumLi n="2">
            <div>
              <strong style={s.strong}>FAQ sections exist on service pages</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Each main service or treatment page should have a FAQ section with 4–6 questions in natural language format, with direct answers. Not a contact form. Not "call us." Actual answers.</p>
            </div>
          </NumLi>
          <NumLi n="3">
            <div>
              <strong style={s.strong}>Treatment-specific pages exist</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Does each of your top 5 treatments have its own dedicated page? Or do they all live on one Services list? Separate pages dramatically increase AI citation likelihood.</p>
            </div>
          </NumLi>
          <NumLi n="4">
            <div>
              <strong style={s.strong}>Practitioner profiles are on the site</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Individual doctor/therapist profiles with credentials, specializations, and years of experience. AI uses these to assess clinical authority.</p>
            </div>
          </NumLi>
          <NumLi n="5">
            <div>
              <strong style={s.strong}>Your clinic appears on Google Knowledge Graph</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Search your clinic name on Google. Does a knowledge panel appear on the right? If not, your entity disambiguation is incomplete — a key signal for AI trust.</p>
            </div>
          </NumLi>
          <NumLi n="6">
            <div>
              <strong style={s.strong}>External citations exist on reputable sites</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Is your clinic listed on at least 3 healthcare directories, review platforms, or relevant editorial sites? External mentions are critical for AI authority.</p>
            </div>
          </NumLi>
          <NumLi n="7">
            <div>
              <strong style={s.strong}>Content was updated in the last 6 months</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>AI engines prefer fresh content. Check your most important pages — when was the content last meaningfully updated? A "last updated" date helps AI systems trust the information is current.</p>
            </div>
          </NumLi>
          <NumLi n="8">
            <div>
              <strong style={s.strong}>English-language content explicitly mentions expat / international service</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Does your site explicitly state English-speaking staff, international patient experience, or expat-friendly services? Not assumed — stated in clear, indexable text.</p>
            </div>
          </NumLi>
          <NumLi n="9">
            <div>
              <strong style={s.strong}>Page load speed is acceptable</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Test your main pages at PageSpeed Insights. Google AI Overviews factor in Core Web Vitals. A slow site has lower trust scores in AI systems that rely on Google's index.</p>
            </div>
          </NumLi>
          <NumLi n="10">
            <div>
              <strong style={s.strong}>Opening hours, phone, and address are consistent everywhere</strong>
              <p style={{ ...s.p, marginTop: 6, marginBottom: 0 }}>Check Google Business Profile, your website, and any directories you're listed on. NAP (Name, Address, Phone) consistency is an entity disambiguation signal — inconsistencies reduce AI confidence in recommending you.</p>
            </div>
          </NumLi>
        </Ol>

        <h2 style={s.h2}>What Your Score Means</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 12, margin: '20px 0 32px' }}>
          {[
            { score: '8–10 ✓', label: 'Strong foundation', desc: 'You have most AI signals in place. Focus on content freshness and expanding treatment pages.', color: '#2d7a4f' },
            { score: '5–7 ✓', label: 'Moderate gaps', desc: 'You have some foundations but critical gaps. Schema, FAQ, or treatment pages are likely missing.', color: 'var(--terra)' },
            { score: '0–4 ✓', label: 'Significant gaps', desc: "Your clinic is likely invisible in AI results. You're losing patients to competitors who've done this work.", color: 'rgba(239,68,68,0.8)' },
          ].map(({ score, label, desc, color }) => (
            <div key={score} style={{ background: 'var(--surface)', border: '1px solid var(--bdr)', borderTop: `3px solid ${color}`, borderRadius: 8, padding: '20px' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color, fontWeight: 600, marginBottom: 6 }}>{score}</div>
              <div style={{ color: 'var(--cream)', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>{label}</div>
              <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        <p style={s.p}>
          If you'd prefer a professional audit rather than running this yourself, <Link to="/#contact" style={s.ilink}>request a free AI visibility audit</Link> — we'll run it across 20+ queries and give you a detailed report within 48 hours.
        </p>
        <p style={s.p}>
          For guidance on what to do with the results, read our <Link to="/blog/why-clinic-not-showing-chatgpt/" style={s.ilink}>guide to fixing AI visibility gaps</Link> and the <Link to="/blog/ai-search-optimization-clinics-thailand/" style={s.ilink}>full AI search optimization guide for Thailand clinics</Link>.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>How often should I run this audit?</h3>
        <p style={s.p}>
          Quarterly is a good cadence. AI recommendation patterns shift as new content is indexed and competitors make changes. A quarterly check ensures you catch visibility changes early — before competitors establish a gap that's hard to close.
        </p>

        <h3 style={s.h3}>What if my clinic appears in Perplexity but not ChatGPT?</h3>
        <p style={s.p}>
          This typically means your current web content is well-structured (good for Perplexity's real-time search) but you lack the historical authority signals that ChatGPT relies on from its training data. The fix: build more external citations and ensure your clinic appears on major healthcare directories.
        </p>

        <h3 style={s.h3}>Should I be concerned if competitors appear more than I do?</h3>
        <p style={s.p}>
          Yes — but it's actionable. Competitors appearing consistently in AI results have better content structure, more external citations, or both. Identifying the specific gaps (using this audit) tells you exactly what to fix to compete directly.
        </p>
      </div>
    ),
  },

  // ── POST 7 ──────────────────────────────────────────────────────────────────
  {
    slug: 'how-to-choose-ai-optimization-agency-clinic-thailand',
    title: 'What to Look for in an AI Optimization Agency for Your Clinic in Thailand',
    metaTitle: 'How to Choose an AI Optimization Agency for Your Clinic',
    metaDescription: 'Five questions to ask any AI optimization agency before engaging — and red flags that reveal whether they actually understand healthcare and AI search.',
    publishDate: '2026-03-19',
    updatedDate: '2026-03-19',
    category: 'Buyer\'s Guide',
    readTime: '6 min read',
    excerpt: "Five questions to ask any AI optimization agency before engaging — and the red flags that reveal whether they actually understand healthcare and AI search.",
    relatedPosts: ['geo-vs-seo-clinics-bangkok', 'ai-search-optimization-clinics-thailand', 'ai-search-audit-clinic-bangkok', 'why-clinic-not-showing-chatgpt'],
    relatedClinics: ['physiotherapy-clinics', 'dental-clinics', 'fertility-clinics', 'beauty-clinics'],
    faqs: [
      { q: 'What should I look for in an AI search optimization agency?', a: "Look for three things: demonstrated results (specific clinics they've moved into AI recommendations, not vague testimonials), methodology transparency (they should be able to explain exactly what they will do and why), and healthcare experience (AI search for medical businesses has compliance and trust requirements that generic digital marketing agencies don't understand)." },
      { q: 'How much should AI search optimization cost for a clinic in Thailand?', a: "Expect to pay ฿15,000–฿50,000+ per month for a serious ongoing AI optimization programme from a specialist agency. One-off audit and setup packages typically range from ฿8,000–฿25,000. Be cautious of agencies charging under ฿5,000/month — at that price point, you're getting template deliverables, not bespoke work." },
      { q: 'What red flags should I watch for when hiring an AI optimization agency?', a: "Key red flags: they promise guaranteed rankings in ChatGPT (no one can guarantee this), they can't explain their methodology in plain terms, they have no healthcare or clinic experience, they use the same deliverables for every client, they don't ask about your target patient profile, or they focus entirely on social media with no mention of technical SEO or structured data." },
      { q: 'How long does an AI optimization engagement typically last?', a: "AI search is not a one-off project — it requires ongoing content, monitoring, and authority building. Most effective engagements run for a minimum of 3–6 months before meaningful results solidify, and ongoing management is recommended to maintain and grow visibility as AI platforms evolve. Be cautious of agencies who push 1-month contracts." },
      { q: 'Can I do AI optimization in-house or do I need an agency?', a: "Some tasks — completing your Google Business Profile, adding schema markup, writing service pages — can be done in-house with the right guidance. However, the technical components (structured data implementation, crawler access configuration, entity building across directories) typically require specialist knowledge. A hybrid approach works well: agency for strategy and technical setup, in-house for content production." },
      { q: "How do I know if an agency actually understands healthcare AI search?", a: "Ask them: 'What are the specific compliance considerations for healthcare AI search?' and 'How do you handle AI recommendations for medical services given YMYL (Your Money, Your Life) constraints?' If they can't answer those questions specifically, they're a general digital marketing agency applying generic tactics to a specialist domain." },
      { q: 'What results should I expect from an AI optimization engagement?', a: "Realistic expectations: within 60–90 days, your clinic should start appearing in some relevant AI queries. Within 3–6 months, you should be consistently appearing for your core speciality and city. Within 6–12 months, you should dominate your niche. Results compound over time — the longer you invest, the stronger your AI search position becomes." },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          Bangkok now has dozens of agencies claiming to offer AI search optimization. Most are general digital marketing agencies that have added "GEO" or "AIO" to their service menu. Very few specialize in healthcare — and in a YMYL (Your Money Your Life) category like medical services, the difference matters.
        </p>
        <p style={s.p}>
          This guide gives Thailand clinic owners a practical framework for evaluating any AI optimization agency — what to ask, what answers to expect, and what to walk away from.
        </p>

        <h2 style={s.h2}>The Difference Between a Generic Agency and a Specialist</h2>
        <p style={s.p}>
          A generic AI optimization agency can improve your content structure and add schema markup. That's table stakes. A specialist understands:
        </p>
        <Ul>
          <Li><strong style={s.strong}>YMYL content standards</strong> — Google and AI systems apply stricter trust requirements to healthcare content. A specialist knows how to build E-E-A-T signals (Experience, Expertise, Authoritativeness, Trustworthiness) specifically for medical queries.</Li>
          <Li><strong style={s.strong}>Patient search behavior</strong> — The queries patients ask AI for dental, physio, fertility, and aesthetic clinics are all different. A specialist understands each patient journey and what content each requires.</Li>
          <Li><strong style={s.strong}>Competitive landscape</strong> — Bangkok's clinic market has specific dynamics. Who ranks now, why they rank, and what it takes to displace them is domain knowledge a generalist doesn't have.</Li>
          <Li><strong style={s.strong}>Content accuracy requirements</strong> — Medical content cannot be fabricated or exaggerated. A specialist works with your clinical team to ensure content is accurate and approved — not mass-generated.</Li>
        </Ul>

        <h2 style={s.h2}>Five Questions to Ask Any AI Optimization Agency</h2>

        <h3 style={s.h3}>1. Can you show me AI citation evidence for a current client?</h3>
        <p style={s.p}>
          Any agency making claims about AI visibility should be able to demonstrate it. Ask for a screenshot or screen recording of a client's clinic being cited in ChatGPT, Perplexity, or Google AI Overviews — for a real patient query, not a search of the clinic's name.
        </p>
        <p style={s.p}>
          An agency that can't show this either doesn't do the work or doesn't track results. Neither is acceptable.
        </p>

        <h3 style={s.h3}>2. How do you handle healthcare YMYL requirements?</h3>
        <p style={s.p}>
          Healthcare is a "Your Money Your Life" category — Google and AI systems hold it to a higher trust standard. Ask the agency how they approach E-E-A-T signals: practitioner credentials, content accuracy verification, source attribution, and maintaining medical accuracy.
        </p>
        <p style={s.p}>
          A generic agency will give you a blank look or a vague answer. A specialist will have a clear process.
        </p>

        <h3 style={s.h3}>3. How do you measure AI visibility — and what does a monthly report look like?</h3>
        <p style={s.p}>
          AI search isn't measured by keyword rankings. It's measured by citation frequency across a defined query set. Ask to see an example monthly report — it should show: which queries were tested, which platforms were tested, whether the clinic appeared, and how that changes month over month.
        </p>
        <Callout>
          If an agency talks about AI optimization but measures success in Google rankings, they're conflating two different systems and probably not doing true GEO work.
        </Callout>

        <h3 style={s.h3}>4. What's your content process — and who approves it?</h3>
        <p style={s.p}>
          Ask how content is created, who writes it, and how clinical accuracy is verified. Good process: content drafted by the agency, reviewed by a senior specialist, submitted to your clinic for clinical accuracy sign-off before publication. Bad process: AI-generated bulk content published without your review.
        </p>

        <h3 style={s.h3}>5. Do you have clinic-specific case studies?</h3>
        <p style={s.p}>
          Optimizing a dental clinic for AI search requires different knowledge than optimizing a hotel or an e-commerce store. Ask for case studies from clinics specifically — physiotherapy, dental, aesthetic, fertility, or wellness. If the agency's case studies are all from retail or hospitality, they're learning on your budget.
        </p>

        <h2 style={s.h2}>Red Flags to Walk Away From</h2>
        <Ul>
          <Li><strong style={s.strong}>Guarantees of specific AI rankings</strong> — No one can guarantee a specific citation frequency. AI recommendation is probabilistic. Agencies that promise "#1 in ChatGPT" are misleading you.</Li>
          <Li><strong style={s.strong}>AI-generated content in bulk, no clinical review</strong> — Mass-producing content without medical accuracy checks is a liability. It also produces generic content that doesn't differentiate your clinic.</Li>
          <Li><strong style={s.strong}>No mention of schema markup</strong> — Schema is foundational for AI optimization. An agency that doesn't mention it either doesn't understand GEO or isn't implementing it.</Li>
          <Li><strong style={s.strong}>Lock-in contracts without deliverable milestones</strong> — AI optimization should produce demonstrable results within 90 days. If an agency can't define what success looks like in the first quarter, be cautious.</Li>
          <Li><strong style={s.strong}>Conflating social media presence with AI visibility</strong> — Instagram followers and Reels have almost no bearing on ChatGPT or Perplexity citations. Agencies that conflate these don't understand AI search.</Li>
        </Ul>

        <h2 style={s.h2}>Why Specialization Matters</h2>
        <p style={s.p}>
          The Bangkok agency market for AI search is growing fast. In 2026, nearly every digital marketing agency in Thailand offers some version of GEO services. Most are general-purpose.
        </p>
        <p style={s.p}>
          Locully works exclusively with clinics. We don't split our focus between clinics, restaurants, and e-commerce. Every case study, every query set, every piece of content knowledge we've built is from the clinic sector — Bangkok, Phuket, Chiang Mai, and beyond.
        </p>
        <p style={s.p}>
          If you'd like to see how that makes a difference, start with a <Link to="/#contact" style={s.ilink}>free AI visibility audit</Link> — we'll benchmark your current AI presence and give you a clear picture of where you stand versus competitors.
        </p>
        <p style={s.p}>
          Or read our <Link to="/blog/ai-search-optimization-clinics-thailand/" style={s.ilink}>complete guide to AI search optimization for Thailand clinics</Link> to understand the full landscape before you engage anyone.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>How much should AI optimization cost for a Bangkok clinic?</h3>
        <p style={s.p}>
          Reputable AI optimization retainers for clinics in Thailand typically range from ฿25,000–80,000/month depending on scope — number of treatment pages, content volume, reporting depth, and competitive intensity. Anything significantly below that range is likely cutting corners on content quality or clinical review. See our <Link to="/packages" style={s.ilink}>packages page</Link> for Locully's pricing.
        </p>

        <h3 style={s.h3}>Should I hire a local Bangkok agency or an international one?</h3>
        <p style={s.p}>
          Local knowledge matters for Thailand. Understanding the Bangkok clinic competitive landscape, the expat patient audience, and Thai/English bilingual search patterns is easier for an agency based here. That said, verify the agency's actual AI search expertise — not just their local presence.
        </p>

        <h3 style={s.h3}>Can I do AI optimization in-house?</h3>
        <p style={s.p}>
          Yes, partially. Treatment page content, FAQ sections, and content freshness updates can be done by a capable clinic manager or content writer with the right guidance. Schema markup and technical audit work typically needs expertise. Our <Link to="/blog/ai-search-audit-clinic-bangkok/" style={s.ilink}>AI audit checklist</Link> is a good starting point for what to tackle yourself.
        </p>
      </div>
    ),
  },

  // ── POST 8: WHAT IS SEO ─────────────────────────────────────────────────────
  {
    slug: 'what-is-seo-complete-guide',
    title: 'What Is SEO? A Complete Guide to Search Engine Optimisation',
    metaTitle: 'What Is SEO? Complete Guide to Search Engine Optimisation',
    metaDescription: 'SEO explained from the ground up — how search engines work, what the three pillars are, how ranking actually happens, and what SEO looks like in 2026 alongside AI search.',
    publishDate: '2026-03-24',
    updatedDate: '2026-03-24',
    category: 'Guide',
    readTime: '10 min read',
    excerpt: 'SEO explained from scratch — how search engines decide what to rank, what actually moves the needle, and why SEO in 2026 means optimising for both Google and AI.',
    relatedPosts: ['on-page-seo-optimization-guide', 'backlinks-guide-seo', 'programmatic-seo-guide', 'geo-vs-seo-clinics-bangkok'],
    relatedClinics: [],
    faqs: [
      { q: 'What is SEO and how does it work?', a: "SEO (Search Engine Optimisation) is the practice of improving your website so that search engines like Google rank it higher for relevant searches. Search engines crawl the web, index the content they find, and then rank pages based on hundreds of signals — including the quality and relevance of your content, the authority of your website, and technical factors like page speed. The goal is to appear at the top of organic (non-paid) search results for queries your target audience is making." },
      { q: 'How long does SEO take to show results?', a: "SEO is a long-term strategy. Most websites see initial movement within 3–6 months, with meaningful traffic gains in 6–12 months. Competitive industries and new websites take longer. The timeline depends on your domain authority, the competition for your target keywords, and the quality and volume of work being done. Unlike paid ads, SEO results compound over time and don't stop when you stop paying." },
      { q: 'What are the three pillars of SEO?', a: "The three pillars of SEO are: Technical SEO (ensuring search engines can crawl, index, and understand your site), On-Page SEO (optimising the content and structure of each page for target keywords and user intent), and Off-Page SEO (building authority through backlinks and external mentions). All three must work together — neglecting any one pillar limits your overall results." },
      { q: 'Is SEO still relevant in 2026 with the rise of AI search?', a: "Yes — SEO is more important than ever, but its role has evolved. Google still drives the majority of web search traffic, and ranking well in organic results remains critical. Additionally, strong SEO signals (authoritative content, structured data, quality backlinks) also feed into AI search performance. The two strategies are complementary, not competing." },
      { q: 'What is the difference between on-page and off-page SEO?', a: "On-page SEO covers everything within your control on your own website: title tags, meta descriptions, headings, content quality, internal links, images, and page speed. Off-page SEO covers signals from outside your website — primarily backlinks from other sites, brand mentions, and social signals. Both matter, but on-page is the foundation you need to get right before off-page work pays off." },
      { q: 'How much does SEO cost?', a: "SEO costs vary widely. Freelancers might charge $500–$2,000/month; specialist agencies typically charge $2,000–$10,000+/month depending on the scope, industry, and competitiveness. One-off audits and technical fixes can range from a few hundred to several thousand dollars. The key is matching investment to your goals — an e-commerce site competing nationally needs a different budget than a local service business." },
      { q: 'What is E-E-A-T and why does it matter for SEO?', a: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness — Google's quality framework for evaluating content creators and websites. It matters most for YMYL (Your Money, Your Life) topics like health, finance, and legal advice. Demonstrating E-E-A-T means having author credentials, citing sources, maintaining accurate information, and building a trustworthy online presence that Google and users can verify." },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          SEO — Search Engine Optimisation — is the practice of improving a website so it appears higher in search results and attracts more organic (unpaid) traffic. That's the textbook definition. But in 2026, it's incomplete.
        </p>
        <p style={s.p}>
          Search is no longer just Google. It's ChatGPT, Perplexity, Google AI Overviews, and Gemini. People search by asking questions and expect direct answers — not ten blue links. SEO still matters enormously, but the landscape it operates in has fundamentally changed.
        </p>
        <p style={s.p}>
          This guide explains how SEO works, what the three pillars are, how Google actually decides what to rank, and what effective SEO strategy looks like now.
        </p>

        <h2 style={s.h2}>How Search Engines Work</h2>
        <p style={s.p}>
          Before you can optimise for search engines, you need to understand what they do. Every major search engine — Google, Bing, DuckDuckGo — operates a three-stage process:
        </p>

        <h3 style={s.h3}>1. Crawling</h3>
        <p style={s.p}>
          Search engines send automated bots (called crawlers or spiders) across the web. These bots follow links from page to page, discovering new content. If a page has no links pointing to it, crawlers may never find it — and if they can't find it, they can't rank it.
        </p>
        <p style={s.p}>
          Crawlers follow rules. A file called <code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>robots.txt</code> on your website tells crawlers which pages to access and which to skip. Getting this wrong — accidentally blocking important pages — is one of the most common technical SEO mistakes.
        </p>

        <h3 style={s.h3}>2. Indexing</h3>
        <p style={s.p}>
          Once a crawler reads a page, it processes the content and stores it in an index — a massive database of everything the search engine has read. When someone searches, Google doesn't scan the web live. It queries its index.
        </p>
        <p style={s.p}>
          Not everything crawled gets indexed. Google applies quality filters — thin content, duplicate pages, and content flagged as low-value may be excluded. Getting into the index is step one. Getting ranked well is step two.
        </p>

        <h3 style={s.h3}>3. Ranking</h3>
        <p style={s.p}>
          When someone enters a query, Google's algorithm determines which indexed pages are most relevant and authoritative — and in what order to show them. The algorithm evaluates hundreds of signals simultaneously. The most important ones fall into three categories: relevance, authority, and experience.
        </p>

        <h2 style={s.h2}>The Three Pillars of SEO</h2>
        <p style={s.p}>
          SEO work divides into three interconnected areas. Ignoring any one of them creates a ceiling on what the other two can achieve.
        </p>

        <h3 style={s.h3}>Technical SEO</h3>
        <p style={s.p}>
          Technical SEO ensures search engines can crawl, index, and render your site correctly. It has nothing to do with content — it's about infrastructure.
        </p>
        <Ul>
          <Li><strong style={s.strong}>Site speed</strong> — Google uses Core Web Vitals (LCP, INP, CLS) as direct ranking signals. Slow sites rank lower.</Li>
          <Li><strong style={s.strong}>Mobile usability</strong> — Google indexes the mobile version of your site first. If your mobile experience is broken, your rankings suffer on desktop too.</Li>
          <Li><strong style={s.strong}>Crawlability</strong> — Clean robots.txt, a valid XML sitemap, no broken internal links, no redirect chains.</Li>
          <Li><strong style={s.strong}>HTTPS</strong> — Google uses secure connection (SSL/TLS) as a ranking signal. Non-HTTPS sites are flagged in browsers and penalised.</Li>
          <Li><strong style={s.strong}>Structured data</strong> — Schema markup (JSON-LD) helps search engines understand what your content means — not just what it says.</Li>
        </Ul>
        <Callout>
          Technical SEO doesn't directly improve rankings on its own — but it removes the ceiling. You can have the best content in the world and rank nowhere if Google can't crawl and index it properly.
        </Callout>

        <h3 style={s.h3}>On-Page SEO</h3>
        <p style={s.p}>
          On-page SEO is the process of optimising individual pages to rank for specific queries. It covers everything visible on the page — headings, copy, images, internal links — as well as the invisible elements like title tags and meta descriptions.
        </p>
        <p style={s.p}>
          The goal is to make each page a clear, direct, authoritative answer to the query it targets. We cover on-page SEO in depth in our <Link to="/blog/on-page-seo-optimization-guide/" style={s.ilink}>complete on-page SEO guide</Link>.
        </p>

        <h3 style={s.h3}>Off-Page SEO (Authority Building)</h3>
        <p style={s.p}>
          Off-page SEO is about building your site's authority through external signals — primarily backlinks. A backlink is a link from another website to yours. Google interprets links as votes of trust: if authoritative sites link to you, you're probably trustworthy too.
        </p>
        <p style={s.p}>
          Not all links are equal. A single editorial link from a high-authority publication outweighs hundreds of low-quality directory links. Quality, relevance, and context all matter. Read our full <Link to="/blog/backlinks-guide-seo/" style={s.ilink}>guide to backlinks</Link> for the mechanics and strategy.
        </p>

        <h2 style={s.h2}>How Google Actually Decides What Ranks</h2>
        <p style={s.p}>
          Google has never published its full ranking algorithm — and it changes hundreds of times per year. But from a decade of analysis, leaked documents, and empirical testing, the core factors are well understood.
        </p>

        <h3 style={s.h3}>Search intent match</h3>
        <p style={s.p}>
          The single most important ranking factor is whether your page matches the searcher's intent. Google classifies every query by intent — informational ("what is"), navigational ("company name"), commercial ("best X"), transactional ("buy X"). A page that doesn't match intent won't rank regardless of how well optimised it is.
        </p>

        <h3 style={s.h3}>Content quality and depth</h3>
        <p style={s.p}>
          Google's Helpful Content system rewards pages that are genuinely useful to the person reading them — not pages written primarily to game rankings. Depth, accuracy, originality, and demonstration of real expertise (E-E-A-T) are all evaluated.
        </p>

        <h3 style={s.h3}>Page authority and domain authority</h3>
        <p style={s.p}>
          Authority flows through links. A page with many high-quality links pointing to it has more authority and ranks higher — all else being equal. Domain-level authority matters too: new domains take longer to rank because they have no established trust signal history.
        </p>

        <h3 style={s.h3}>User experience signals</h3>
        <p style={s.p}>
          Google uses Core Web Vitals and behavioral signals (though it denies the latter publicly) to assess whether users are satisfied with a page. A page that loads fast, is easy to use, and keeps visitors engaged is treated more favorably than one that's slow and bouncy.
        </p>

        <InfoBox title="E-E-A-T: What Google Looks for in 2026">
          <p style={{ ...s.p, marginBottom: 8 }}><strong style={s.strong}>Experience</strong> — Has the author actually done the thing they're writing about?</p>
          <p style={{ ...s.p, marginBottom: 8 }}><strong style={s.strong}>Expertise</strong> — Do they have relevant knowledge or credentials?</p>
          <p style={{ ...s.p, marginBottom: 8 }}><strong style={s.strong}>Authoritativeness</strong> — Is the site/author recognised as authoritative in their field?</p>
          <p style={{ ...s.p, marginBottom: 0 }}><strong style={s.strong}>Trustworthiness</strong> — Is the content accurate, transparent, and honest?</p>
        </InfoBox>

        <h2 style={s.h2}>How Long Does SEO Take?</h2>
        <p style={s.p}>
          This is the most common question in SEO — and the honest answer is: it depends, and anyone who gives you a specific number without knowing your site is guessing.
        </p>
        <p style={s.p}>
          As a general framework:
        </p>
        <Ul>
          <Li><strong style={s.strong}>New domain, competitive niche:</strong> 9–18 months to rank meaningfully for valuable terms.</Li>
          <Li><strong style={s.strong}>Established domain, competitive niche:</strong> 3–6 months to see movement on target terms.</Li>
          <Li><strong style={s.strong}>Established domain, low-competition niche:</strong> 4–12 weeks with strong content and basic optimisation.</Li>
          <Li><strong style={s.strong}>Technical fixes:</strong> Can impact rankings within days to weeks.</Li>
        </Ul>
        <p style={s.p}>
          SEO compounds over time. A page that ranks #5 today can move to #1 in 6 months as it accumulates links and engagement. This is the fundamental difference from paid advertising: SEO builds an asset that appreciates. Ads disappear the moment you stop paying.
        </p>

        <h2 style={s.h2}>SEO in 2026: Google and AI Search Together</h2>
        <p style={s.p}>
          The biggest shift in search since mobile happened between 2023 and 2026: AI-generated answers became the dominant format for high-intent queries.
        </p>
        <p style={s.p}>
          Google AI Overviews appear at the top of results for nearly half of all searches. ChatGPT handles over 100 million queries per day. Perplexity crossed 100 million monthly users.
        </p>
        <p style={s.p}>
          The signals that drive AI citations overlap significantly with traditional SEO — authoritative content, clean technical infrastructure, strong external links — but the output is different. In AI search, the goal isn't to rank #1 in a list. It's to be named within a generated answer.
        </p>
        <p style={s.p}>
          Effective search strategy in 2026 optimises for both simultaneously. Good SEO practice feeds AI visibility. AI-optimised content tends to perform better in traditional search. They aren't competing strategies — they're two faces of the same discipline.
        </p>
        <p style={s.p}>
          For a deeper look at how the two interact, see our guide on <Link to="/blog/geo-vs-seo-clinics-bangkok/" style={s.ilink}>GEO vs SEO</Link> and the <Link to="/ai-search-visibility" style={s.ilink}>Locully AI Search Visibility service</Link>.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>Is SEO still worth investing in?</h3>
        <p style={s.p}>
          Yes — categorically. Organic search remains the largest source of website traffic globally. The channels have expanded (AI search, voice search), but Google still processes 8.5 billion searches per day. The question isn't whether to do SEO. It's whether your SEO strategy also accounts for AI search.
        </p>

        <h3 style={s.h3}>What's the difference between SEO and SEM?</h3>
        <p style={s.p}>
          SEM (Search Engine Marketing) covers both paid and organic search. SEO is specifically the organic component — improving rankings without paying for ad placement. Google Ads (PPC) is paid search. Many organisations run both in parallel: ads for immediate traffic, SEO for long-term organic growth.
        </p>

        <h3 style={s.h3}>Can I do SEO myself?</h3>
        <p style={s.p}>
          Partially. Content optimisation, internal linking, and basic technical checks (fixing broken links, writing title tags) can be managed by a capable non-specialist. Technical SEO audits, schema implementation, and authority building campaigns typically require specialist knowledge or tools. The return on hiring a specialist for those areas tends to outweigh the cost.
        </p>

        <h3 style={s.h3}>How does Google know if I'm trying to manipulate rankings?</h3>
        <p style={s.p}>
          Google's spam detection has become significantly more sophisticated since the introduction of machine learning-based ranking systems. Tactics that worked in 2015 — keyword stuffing, low-quality link schemes, thin content — are actively penalised today. The safest and most durable approach is also the correct one: produce genuinely useful content, earn real links, and build authority through expertise.
        </p>

        <h3 style={s.h3}>What's a realistic budget for SEO?</h3>
        <p style={s.p}>
          For small to medium businesses in competitive markets, effective SEO typically requires ฿20,000–80,000/month in agency or specialist costs, depending on content volume, link building, and technical scope. One-off packages for specific deliverables — content sprints or backlink campaigns — are available at lower entry points. See our <Link to="/packages" style={s.ilink}>packages page</Link> for fixed-price options.
        </p>
      </div>
    ),
  },

  // ── POST 9: ON-PAGE SEO ──────────────────────────────────────────────────────
  {
    slug: 'on-page-seo-optimization-guide',
    title: 'On-Page SEO Optimization: The Complete 2026 Guide',
    metaTitle: 'On-Page SEO Optimization: Complete 2026 Guide',
    metaDescription: 'Everything you need to know about on-page SEO — title tags, headers, content depth, internal linking, featured snippets, and E-E-A-T signals that move rankings.',
    publishDate: '2026-03-24',
    updatedDate: '2026-03-24',
    category: 'Guide',
    readTime: '11 min read',
    excerpt: 'The complete on-page SEO playbook — every element that affects how Google ranks individual pages, from title tags to content structure to E-E-A-T signals.',
    relatedPosts: ['what-is-seo-complete-guide', 'backlinks-guide-seo', 'programmatic-seo-guide', 'ai-search-optimization-clinics-thailand'],
    relatedClinics: [],
    faqs: [
      { q: 'What is on-page SEO optimisation?', a: "On-page SEO is the practice of optimising individual web pages to rank higher in search results. It covers every element you control on the page itself: the title tag, meta description, headings, body content, images, internal links, URL structure, and technical signals like page speed and structured data. Good on-page SEO ensures search engines and users both understand exactly what your page is about." },
      { q: 'How do I write an SEO-optimised title tag?', a: "A strong title tag includes your primary keyword near the front, clearly describes the page content, stays within 55–60 characters (to avoid truncation in search results), and gives users a reason to click. Avoid keyword stuffing — one primary keyword and natural variation is sufficient. Each page on your site should have a unique title tag." },
      { q: 'What is the ideal meta description length?', a: "Google typically displays 140–160 characters of a meta description. Write your most important content within the first 120 characters to be safe. A good meta description answers the search intent, includes your primary keyword naturally, and has a clear value proposition or call to action. Meta descriptions don't directly affect rankings but significantly impact click-through rate." },
      { q: 'How many H1 tags should a page have?', a: "One H1 per page — this is the main heading that tells search engines and users the primary topic of the page. You can have multiple H2 and H3 subheadings to organise content. The H1 should include your primary keyword naturally and match (or closely match) the intent of the page's title tag." },
      { q: 'What is keyword density and does it matter?', a: "Keyword density (how often a keyword appears as a percentage of total words) is largely an outdated concept. Modern SEO focuses on relevance and topical coverage rather than hitting a specific percentage. Write naturally and cover the topic thoroughly. Keyword stuffing — forcing a word in unnaturally many times — actively harms rankings." },
      { q: 'What is schema markup and do I need it?', a: "Schema markup is structured data you add to your page's HTML to help search engines understand what your content means, not just what it says. It enables rich results (star ratings, FAQs, recipes, events in search results) and improves how AI platforms interpret your content. For most websites, implementing at minimum LocalBusiness, Article, and FAQPage schema is worth the effort." },
      { q: 'How does internal linking affect on-page SEO?', a: "Internal links help search engines discover and index pages, distribute PageRank across your site, and signal which pages are most important. They also help users navigate related content. Use descriptive anchor text (not 'click here'), link to relevant related pages, and ensure every important page has at least a few internal links pointing to it from other pages on your site." },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          On-page SEO is the process of optimising individual pages so they rank higher for the queries they target. It's the most direct lever in search engine optimisation — you control every element on your own pages. And unlike link building, you can execute it without anyone else's cooperation.
        </p>
        <p style={s.p}>
          Done right, on-page SEO simultaneously improves Google rankings, increases AI citation rates, and improves conversion. This guide covers every major element, in priority order.
        </p>

        <h2 style={s.h2}>1. Title Tags</h2>
        <p style={s.p}>
          The title tag is the single most influential on-page ranking factor. It appears as the clickable headline in search results and tells Google (and users) exactly what the page is about.
        </p>
        <Ul>
          <Li><strong style={s.strong}>Length:</strong> 55–62 characters. Google truncates beyond that. Shorter wastes visible space; longer gets cut.</Li>
          <Li><strong style={s.strong}>Primary keyword:</strong> Include the target keyword, ideally near the front.</Li>
          <Li><strong style={s.strong}>Uniqueness:</strong> Every page must have a different title tag. Duplicate titles confuse Google about which page to rank.</Li>
          <Li><strong style={s.strong}>No keyword stuffing:</strong> "Bangkok Dental Clinic | Best Dental Bangkok | Cheap Dental Bangkok" is a spam signal, not a ranking tactic.</Li>
        </Ul>
        <Callout>
          Write title tags for humans first, search engines second. A title that accurately describes the page and invites a click is always better than one engineered purely around keywords.
        </Callout>

        <h2 style={s.h2}>2. Meta Descriptions</h2>
        <p style={s.p}>
          Meta descriptions don't directly affect rankings — Google confirmed this years ago. But they have a large indirect effect: a well-written meta description increases click-through rate, which brings more traffic to your page.
        </p>
        <Ul>
          <Li><strong style={s.strong}>Length:</strong> 140–155 characters. Google shows approximately 150–160 characters on desktop.</Li>
          <Li><strong style={s.strong}>Answer the query immediately:</strong> Tell the reader what they'll find on the page in the first clause.</Li>
          <Li><strong style={s.strong}>Include a differentiator:</strong> Why click your result over the others on the page? Make it clear.</Li>
          <Li><strong style={s.strong}>Don't repeat the title:</strong> The description should add new information, not rephrase what's already in the title.</Li>
        </Ul>

        <h2 style={s.h2}>3. Header Hierarchy (H1, H2, H3)</h2>
        <p style={s.p}>
          Headers organise your content and communicate structure to both users and search engines. Google uses header text as signals for what a page covers and at what depth.
        </p>
        <Ul>
          <Li><strong style={s.strong}>H1:</strong> One per page, always. Should match or closely paraphrase the title tag. Tells Google the primary topic of the page.</Li>
          <Li><strong style={s.strong}>H2s:</strong> Major section headings. Should collectively cover the key sub-topics of the query. Google reads these as an outline of the page's scope.</Li>
          <Li><strong style={s.strong}>H3s:</strong> Sub-sections within an H2. Use for detailed breakdowns, step-by-step lists, or specific sub-questions.</Li>
        </Ul>
        <p style={s.p}>
          Strong header architecture also dramatically improves AI citability. AI models extract information by section — a page with clear, descriptive headers gives AI engines a map of what each section covers and when to cite it.
        </p>

        <h2 style={s.h2}>4. Content Depth and Search Intent</h2>
        <p style={s.p}>
          Content depth is not about word count. It's about covering a topic thoroughly enough that the searcher gets their question fully answered — and doesn't need to go back to Google.
        </p>
        <p style={s.p}>
          Google calls this "search intent match." Every query has an underlying intent — informational, navigational, commercial, or transactional. A page that matches the intent ranks; one that doesn't, doesn't.
        </p>

        <h3 style={s.h3}>Informational queries</h3>
        <p style={s.p}>
          The searcher wants to learn. Content should lead with a direct answer, then provide depth. FAQs, how-to sections, and supporting examples all increase relevance.
        </p>

        <h3 style={s.h3}>Commercial queries</h3>
        <p style={s.p}>
          The searcher is comparing options. Content should present options, criteria, and comparisons. Pure sales copy ranks poorly for "best X" queries.
        </p>

        <h3 style={s.h3}>Transactional queries</h3>
        <p style={s.p}>
          The searcher wants to take action. Content should focus on conversion signals: price, availability, trust indicators, clear call-to-action. Long educational introductions slow down users who are ready to buy.
        </p>

        <InfoBox title="Practical content depth test">
          <p style={{ ...s.p, marginBottom: 0 }}>Open the top 3 results for your target query. What sections do they cover? What questions do they answer? Your page should cover all of those — plus something they miss. If you can't identify a gap, your differentiation becomes quality of execution: clearer writing, better structure, more current information.</p>
        </InfoBox>

        <h2 style={s.h2}>5. Keyword Usage and Semantic Coverage</h2>
        <p style={s.p}>
          Modern Google doesn't need you to repeat your target keyword 20 times. Its language models understand synonyms, related concepts, and topical context. What it's looking for is semantic coverage — does your page demonstrate that you've genuinely addressed the topic?
        </p>
        <Ul>
          <Li>Use the primary keyword naturally in the title, H1, first paragraph, and at least one H2.</Li>
          <Li>Include related terms and synonyms throughout. If you're writing about "dental implants Bangkok," terms like "osseointegration," "implant crown," "titanium post," and "missing teeth" signal genuine expertise.</Li>
          <Li>Avoid keyword stuffing — any instance where keyword repetition reads as unnatural to a human reader is a negative signal.</Li>
          <Li>Use question-format subheadings that mirror how people actually phrase queries. These improve featured snippet eligibility and AI citation rates simultaneously.</Li>
        </Ul>

        <h2 style={s.h2}>6. URL Structure</h2>
        <p style={s.p}>
          URLs should be short, descriptive, and keyword-bearing. Google uses URL structure as a weak ranking signal and as a way to communicate page context to crawlers.
        </p>
        <Ul>
          <Li><strong style={s.strong}>Good:</strong> <code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>/dental-implants-bangkok/</code></Li>
          <Li><strong style={s.strong}>Bad:</strong> <code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>/page?id=4382&cat=services&sub=dental</code></Li>
          <Li>Use hyphens, not underscores, to separate words.</Li>
          <Li>Keep URLs as shallow as possible — avoid deeply nested structures like <code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>/services/dental/implants/bangkok/</code>.</Li>
          <Li>Never change URLs that are already indexed without implementing a 301 redirect — each change resets the authority that URL has accumulated.</Li>
        </Ul>

        <h2 style={s.h2}>7. Internal Linking</h2>
        <p style={s.p}>
          Internal links do two things: they help Google understand the relationship between pages on your site, and they distribute PageRank (authority) from strong pages to weaker ones. Both matter.
        </p>
        <p style={s.p}>
          A page with no internal links pointing to it — an "orphan page" — is harder for Google to discover and receives none of your site's accumulated authority. Every important page should receive at least 2–3 internal links from other relevant pages.
        </p>
        <Ul>
          <Li>Use descriptive anchor text — "physiotherapy clinics in Bangkok" is a better anchor than "click here" or "read more."</Li>
          <Li>Link from high-authority pages (homepage, pillar posts) to pages you want to rank.</Li>
          <Li>Avoid linking to the same page repeatedly from the same article with different anchor texts — this can dilute the signal.</Li>
          <Li>Internal linking also improves session depth: users who follow internal links to related content stay longer, which is a positive engagement signal.</Li>
        </Ul>

        <h2 style={s.h2}>8. Image Optimisation</h2>
        <p style={s.p}>
          Images are a consistent on-page SEO opportunity that many sites neglect. Poor image optimisation slows page load (a ranking signal) and misses the opportunity to reinforce topical relevance.
        </p>
        <Ul>
          <Li><strong style={s.strong}>Alt text:</strong> Every image should have descriptive alt text — both for accessibility and for Google's image search index. Describe what the image shows, including relevant keywords where natural.</Li>
          <Li><strong style={s.strong}>File format:</strong> Use WebP or AVIF for web images. These formats are significantly smaller than JPEG/PNG without visible quality loss — directly improving load speed.</Li>
          <Li><strong style={s.strong}>File size:</strong> Compress images before upload. A hero image should be under 200KB. Page images under 100KB. Use tools like Squoosh or TinyPNG.</Li>
          <Li><strong style={s.strong}>File names:</strong> <code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>dental-implant-consultation-bangkok.webp</code> is better than <code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>IMG_4821.jpg</code>.</Li>
        </Ul>

        <h2 style={s.h2}>9. Schema Markup</h2>
        <p style={s.p}>
          Schema markup (JSON-LD structured data) is code added to a page that explicitly tells search engines and AI engines what the content means — not just what it says.
        </p>
        <p style={s.p}>
          For a blog post, Article schema tells Google who wrote it and when. For a service business, LocalBusiness schema provides your name, address, phone, hours, and category in a machine-readable format. For a product, Product schema enables price and availability to appear in rich results.
        </p>
        <p style={s.p}>
          Schema doesn't directly boost rankings, but it improves rich result eligibility (star ratings, FAQs, breadcrumbs appearing in search results) and significantly increases AI citability — AI models rely heavily on structured data to identify and recommend entities.
        </p>

        <h2 style={s.h2}>10. E-E-A-T Signals</h2>
        <p style={s.p}>
          E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is Google's quality framework for evaluating content. It's especially important for YMYL (Your Money Your Life) topics — health, finance, legal advice — where low-quality information can cause real harm.
        </p>
        <Ul>
          <Li><strong style={s.strong}>Author information:</strong> Who wrote the page? A named author with verifiable credentials is more trustworthy than anonymous content.</Li>
          <Li><strong style={s.strong}>Last updated date:</strong> Visible "last updated" timestamps tell users and Google that information is current.</Li>
          <Li><strong style={s.strong}>Source attribution:</strong> Cite statistics and claims with links to original sources. This signals research depth, not copying.</Li>
          <Li><strong style={s.strong}>About page and contact information:</strong> Transparent company information is a basic trust signal. Pages with no "About" or contact information score lower on trustworthiness.</Li>
        </Ul>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>How many keywords should one page target?</h3>
        <p style={s.p}>
          One primary keyword and 3–5 closely related secondary terms. A page trying to rank for too many unrelated terms sends a confused signal. Each distinct topic should have its own page. This is the foundation of topic clustering — a structure where each page owns a specific query and links to related pages.
        </p>

        <h3 style={s.h3}>Does content length matter for rankings?</h3>
        <p style={s.p}>
          Word count alone doesn't matter. Depth does. A 600-word page that fully answers a simple question outranks a 3,000-word page that pads out the same answer with filler. That said, competitive head terms typically require more depth — analysis of top-ranking pages tends to show that thorough content wins. The key question is: does the page fully satisfy the query? If yes, it's the right length.
        </p>

        <h3 style={s.h3}>How often should I update existing pages?</h3>
        <p style={s.p}>
          High-value pages should be reviewed quarterly. Update statistics, add new FAQs that reflect current search behaviour, improve sections where Google Search Console shows impressions but low click-through. Content freshness is a positive signal — but only for meaningful updates. Changing a sentence doesn't count.
        </p>

        <h3 style={s.h3}>What's the difference between on-page SEO and content marketing?</h3>
        <p style={s.p}>
          On-page SEO is the technical and structural optimisation of pages for search performance. Content marketing is the strategy of creating valuable content to attract and engage an audience. In practice, the best results come from doing both: content strategically planned around search demand, then technically optimised to rank for it.
        </p>
      </div>
    ),
  },

  // ── POST 10: BACKLINKS ───────────────────────────────────────────────────────
  {
    slug: 'backlinks-guide-seo',
    title: 'Backlinks: What They Are, Why They Matter, and How to Build Them',
    metaTitle: 'Backlinks Guide: What They Are & How to Build Them',
    metaDescription: 'The complete guide to backlinks — how Google uses them to measure authority, what makes a link valuable, and which link building strategies actually work in 2026.',
    publishDate: '2026-03-24',
    updatedDate: '2026-03-24',
    category: 'Guide',
    readTime: '10 min read',
    excerpt: "How Google uses backlinks to measure authority, what separates a valuable link from a worthless one, and the link building strategies that still work in 2026.",
    relatedPosts: ['what-is-seo-complete-guide', 'on-page-seo-optimization-guide', 'programmatic-seo-guide', 'how-to-choose-ai-optimization-agency-clinic-thailand'],
    relatedClinics: [],
    faqs: [
      { q: 'What are backlinks and why do they matter for SEO?', a: "Backlinks are links from other websites to yours. Search engines like Google treat them as votes of confidence — if authoritative, relevant websites link to you, Google interprets that as a signal your content is valuable and trustworthy. Backlinks remain one of the strongest ranking signals in Google's algorithm, particularly for competitive keywords." },
      { q: 'How many backlinks do I need to rank on Google?', a: "There's no universal number — it depends on your competitors. What matters more is the quality and relevance of backlinks relative to the pages you're competing against. A page with 20 high-authority, relevant backlinks will typically outrank a page with 200 low-quality links from unrelated sites. The goal is to earn more link authority than competitors for your target queries." },
      { q: 'What makes a backlink high-quality?', a: "High-quality backlinks come from authoritative, relevant websites with real traffic. The link should be contextually placed within relevant content (not buried in a footer), use descriptive anchor text, and be a do-follow link (though no-follow links still provide brand value). A single link from a trusted industry publication is worth more than dozens of links from unrelated low-authority sites." },
      { q: 'Does buying backlinks still work in 2026?', a: "Buying links is against Google's guidelines and carries significant risk of a manual penalty or algorithmic demotion. While some paid link schemes still produce short-term results, they're increasingly detected — and the penalty can take months or years of work to recover from. The risk/reward ratio is poor. Earning links through quality content and genuine outreach is more sustainable." },
      { q: 'Are no-follow links worth getting?', a: "Yes, for several reasons. No-follow links still drive referral traffic, build brand awareness, and contribute to a natural-looking link profile (a site with only do-follow links looks unnatural to Google). Many high-authority platforms (Wikipedia, major news sites, social media) use no-follow by default — getting mentioned on these is still valuable despite the no-follow attribute." },
      { q: 'What is link building and how do I get started?', a: "Link building is the process of earning or acquiring backlinks from other websites. The best starting points are: creating genuinely useful content others want to cite (data, tools, original research), submitting your site to relevant industry directories, guest posting on authoritative publications in your industry, and reaching out to sites that mention your brand without linking to you. Start with the lowest-hanging fruit: directories and brand mentions." },
      { q: 'How do I check how many backlinks my site has?', a: "Tools like Ahrefs, Semrush, or Moz's Link Explorer show your backlink profile — total links, referring domains, domain authority, and anchor text distribution. Google Search Console also shows which external sites link to you, though it doesn't show everything. Referring domains (unique websites linking to you) is a more meaningful metric than raw backlink count." },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          Backlinks are links from one website to another. When Site A publishes an article and includes a link pointing to Site B, that's a backlink for Site B.
        </p>
        <p style={s.p}>
          Google treats links as votes of trust. If hundreds of credible websites link to your content, Google interprets that as a signal that your content is valuable enough to reference. This remains one of the three most important ranking signals in Google's algorithm — and it has been for over 25 years.
        </p>
        <p style={s.p}>
          This guide explains how Google uses backlinks, what makes a link genuinely valuable, and which link building strategies are worth your time and budget.
        </p>

        <h2 style={s.h2}>Why Google Still Relies on Backlinks</h2>
        <p style={s.p}>
          Google was built on backlinks. The original PageRank algorithm — the mathematical model Larry Page and Sergey Brin published in 1998 — treated links as citations. In academic publishing, a paper cited hundreds of times is more influential than one nobody references. They applied the same logic to the web.
        </p>
        <p style={s.p}>
          That logic still holds in 2026. Links are hard to fake at scale. Anyone can write content. Earning links from credible third parties requires that your content is useful, accurate, and worth referencing. It's a quality signal that's expensive to manufacture — which is exactly why Google trusts it.
        </p>
        <Callout>
          Google's own documentation and leaked internal communications confirm that PageRank — link-based authority — remains one of the top three ranking signals alongside relevance and user experience.
        </Callout>

        <h2 style={s.h2}>What Makes a Backlink Valuable?</h2>
        <p style={s.p}>
          Not all links are equal. A single editorial link from a major publication can outweigh 500 low-quality directory links. Four factors determine link value:
        </p>

        <h3 style={s.h3}>1. Domain authority</h3>
        <p style={s.p}>
          A link from the New York Times, Forbes, or a respected industry publication passes far more authority than a link from a newly registered blog with no traffic. Domain authority (commonly measured by tools like Ahrefs as DR — Domain Rating, or Moz as DA — Domain Authority) is a proxy for how much trust Google has in the linking site.
        </p>
        <p style={s.p}>
          As a practical benchmark: links from DR50+ sites are meaningful. Links from DR30+ are decent for building diversity. Links from DR0–20 sites with no traffic have negligible value — and in bulk, can signal to Google that you're involved in link schemes.
        </p>

        <h3 style={s.h3}>2. Relevance</h3>
        <p style={s.p}>
          A link from a healthcare publication to a clinic's website is more valuable than the same DR link from a fishing website. Google evaluates topical relevance when determining how much trust a link should pass. Links from contextually related sites reinforce your authority in a specific domain — not just in general.
        </p>

        <h3 style={s.h3}>3. Anchor text</h3>
        <p style={s.p}>
          Anchor text is the visible, clickable text of a link. It tells Google what the linked page is about. A link with anchor text "best physiotherapy clinic Bangkok" passes more relevant signal for that query than one that says "click here."
        </p>
        <p style={s.p}>
          However, over-optimised anchor text — where every link to your page uses the exact same keyword phrase — is a spam signal. A natural link profile contains a mix of branded anchors ("Locully"), partial-match anchors, and generic anchors ("read more"), with keyword-rich anchors as a minority.
        </p>

        <h3 style={s.h3}>4. Do-follow vs no-follow</h3>
        <p style={s.p}>
          By default, links pass authority — these are "do-follow" links. A "no-follow" attribute (<code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>rel="nofollow"</code>) tells Google not to pass PageRank through that link.
        </p>
        <p style={s.p}>
          No-follow links — common on social media, Wikipedia, and most comment sections — don't directly pass ranking authority. They're not worthless (brand visibility, referral traffic, and trust signals still apply), but they're less valuable than do-follow editorial links for rankings.
        </p>

        <h2 style={s.h2}>Link Building Strategies That Work in 2026</h2>

        <h3 style={s.h3}>1. Digital PR and editorial outreach</h3>
        <p style={s.p}>
          The highest-value links come from journalists and editors who choose to reference your content or expertise. Digital PR involves creating genuinely newsworthy assets — original research, data studies, expert commentary, or strong opinion pieces — and proactively pitching them to relevant publications.
        </p>
        <p style={s.p}>
          Done well, a single digital PR campaign can earn 10–50 links from high-authority publications. Done poorly (spammy mass outreach), it damages your brand and relationship with journalists.
        </p>

        <h3 style={s.h3}>2. Guest posting on industry publications</h3>
        <p style={s.p}>
          Writing articles for other publications in your industry — with a link back to your site — is one of the most consistent link building tactics. The key is publishing on genuinely relevant, high-quality sites, not content farms that accept anything.
        </p>
        <p style={s.p}>
          Google has explicitly stated that guest posting "purely for links" is against its guidelines. The practical line: guest posts should be genuinely useful articles on reputable sites, not 500-word filler published purely to drop a link.
        </p>

        <h3 style={s.h3}>3. Resource page link building</h3>
        <p style={s.p}>
          Many websites maintain "resource" pages — curated lists of useful tools, guides, or services in a specific area. If your content or service belongs on such a list, reaching out to the site owner with a relevant suggestion is a low-friction way to earn links.
        </p>

        <h3 style={s.h3}>4. Broken link building</h3>
        <p style={s.p}>
          Find pages on relevant websites that link to content that no longer exists (broken links). Reach out to the site owner, flag the broken link, and suggest your content as a replacement. This provides genuine value to the site owner — which makes the pitch non-spammy and more likely to succeed.
        </p>

        <h3 style={s.h3}>5. Building linkable assets</h3>
        <p style={s.p}>
          The most scalable link acquisition strategy is creating content so useful that people link to it naturally. Original research, comprehensive guides, free tools, data visualizations, and authoritative statistics attract links without active outreach.
        </p>
        <p style={s.p}>
          This is higher investment upfront but lower ongoing effort. A well-researched study can attract links for years without any active link building activity.
        </p>

        <h2 style={s.h2}>Backlinks and AI Search</h2>
        <p style={s.p}>
          The relationship between backlinks and AI citation is indirect but real. AI models like ChatGPT and Perplexity are trained on data from the web — and high-authority sites with many quality inbound links are more likely to be included in that training data and to appear in AI search results.
        </p>
        <p style={s.p}>
          More directly: when Perplexity pulls sources to answer a query, it tends to cite sites with established domain authority. A strong backlink profile isn't just a Google signal — it's a trust signal that AI systems inherit from their training data.
        </p>

        <h2 style={s.h2}>Links to Avoid</h2>
        <p style={s.p}>
          Google's Penguin algorithm update (and its successors) actively penalises manipulative link schemes. The following can hurt your rankings rather than help them:
        </p>
        <Ul>
          <Li><strong style={s.strong}>Private blog networks (PBNs):</strong> Networks of fake sites created purely to link to target sites. Google detects these at scale and issues manual penalties.</Li>
          <Li><strong style={s.strong}>Paid links without disclosure:</strong> Buying links and presenting them as editorial is against Google's guidelines. Paid placements that disclose their nature (sponsored/no-follow) are permissible.</Li>
          <Li><strong style={s.strong}>Link farms:</strong> Low-quality sites that exist purely to sell links with no real content or audience.</Li>
          <Li><strong style={s.strong}>Irrelevant directory links in bulk:</strong> Hundreds of links from generic directories in unrelated industries signal link scheme activity.</Li>
          <Li><strong style={s.strong}>Comment spam:</strong> Leaving links in blog comments or forum posts at scale is a spam signal — particularly on sites using no-follow.</Li>
        </Ul>

        <InfoBox title="How to check your backlink profile">
          <p style={{ ...s.p, marginBottom: 0 }}>Use Ahrefs Site Explorer, Moz Link Explorer, or Google Search Console (which shows a sample of your links for free). Look at the DR distribution of your referring domains, the relevance of linking sites, and the anchor text spread. A healthy profile looks varied — a single anchor text on 80% of your links is a red flag.</p>
        </InfoBox>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>How many backlinks do I need to rank?</h3>
        <p style={s.p}>
          There's no universal number — it depends entirely on the competitiveness of your target keyword. Check the top 3 results for your target query in Ahrefs or Moz. Look at the referring domain count for each. That's your benchmark. For low-competition local queries, 10–20 quality links can be enough. National competitive terms might need hundreds from high-DR domains.
        </p>

        <h3 style={s.h3}>Can I buy backlinks?</h3>
        <p style={s.p}>
          Paying for editorial placements is common practice — many agencies do it. The distinction Google draws is between transparent paid placements (which should be disclosed or no-followed) and undisclosed paid links designed to manipulate rankings. High-quality editorial placements from relevant, reputable sites that happen to involve payment are widely used and generally safe. Low-quality bulk link packages are not.
        </p>

        <h3 style={s.h3}>Do social media links count as backlinks?</h3>
        <p style={s.p}>
          Most social media platforms apply no-follow to outbound links, meaning they don't pass PageRank directly. They're not worthless — brand visibility, traffic, and indirect authority signals matter — but they're not a substitute for editorial do-follow links from relevant sites.
        </p>

        <h3 style={s.h3}>How long does it take for a new backlink to affect rankings?</h3>
        <p style={s.p}>
          Typically 2–8 weeks after Google crawls and processes the linking page. The impact depends on the authority of the linking site, how many other new links you've acquired recently, and the competitiveness of the query. Sudden spikes in new links — particularly from low-quality sources — can temporarily suppress rankings before recovering.
        </p>
      </div>
    ),
  },

  // ── POST 11: PROGRAMMATIC SEO ────────────────────────────────────────────────
  {
    slug: 'programmatic-seo-guide',
    title: 'Programmatic SEO: How to Build Pages at Scale That Actually Rank',
    metaTitle: 'Programmatic SEO Guide: Build Pages at Scale That Rank',
    metaDescription: 'How programmatic SEO works, the 12 proven playbooks, when to use it, what separates pages that rank from thin content that gets penalised — and how to build it right.',
    publishDate: '2026-03-24',
    updatedDate: '2026-03-24',
    category: 'Guide',
    readTime: '12 min read',
    excerpt: 'Programmatic SEO explained — how to build hundreds of search-optimised pages from data at scale, the 12 proven playbooks, and the quality line between ranking and penalty.',
    relatedPosts: ['what-is-seo-complete-guide', 'on-page-seo-optimization-guide', 'backlinks-guide-seo', 'ai-search-optimization-clinics-thailand'],
    relatedClinics: [],
    faqs: [
      { q: 'What is programmatic SEO?', a: "Programmatic SEO is the practice of creating large numbers of SEO-optimised pages at scale, using templates and data rather than writing each page manually. Instead of writing one page about 'physiotherapy clinics in Bangkok', you build a template and data pipeline that generates 'physiotherapy clinics in Bangkok', 'physiotherapy clinics in Sukhumvit', 'physiotherapy clinics in Thonglor', and hundreds more — each with unique, useful content." },
      { q: 'How many pages do you need for programmatic SEO to work?', a: "There's no minimum page count — what matters is whether your target keyword pattern has sufficient search volume across the variable combinations. Programmatic SEO is most effective when there are at least several hundred unique combinations worth targeting, each with genuine search demand. Ten pages built programmatically is rarely worth the infrastructure. Start manual, go programmatic when you've validated demand." },
      { q: 'What is the risk of thin content in programmatic SEO?', a: "Thin content — pages that only swap out a variable (city name, product type) without providing genuinely unique information — can trigger Google's spam filters and result in pages being deindexed or the site receiving a manual penalty. Every programmatic page needs to provide real value specific to that page, not just fill a template with swapped terms." },
      { q: 'Which industries benefit most from programmatic SEO?', a: "Industries with high-volume, repetitive search patterns are the best fit: travel and accommodation, real estate listings, job boards, SaaS tool comparison pages, local services directories, e-commerce product variants, and healthcare directories. Any business where users search for the same service across many locations or categories is a strong programmatic SEO candidate." },
      { q: 'Do programmatic pages rank as well as manually written pages?', a: "Well-built programmatic pages can rank just as well as manually written ones — sometimes better, because they match search intent precisely and at scale. The key differentiator is data quality and unique value per page. Pages backed by proprietary data (user-generated content, aggregated insights, real inventory) consistently outperform pages that just swap template variables." },
      { q: 'What data do you need to run a programmatic SEO campaign?', a: "You need: a keyword pattern with validated search demand (e.g., '[service] in [city]'), a data source that provides unique content for each page variant (local business data, product specs, pricing, user reviews), a template that structures the content correctly for SEO, and a technical pipeline to generate and publish pages. The data source is the most critical — without quality data, you get thin content." },
      { q: 'How long does programmatic SEO take to generate traffic?', a: "Indexation alone can take 4–8 weeks for large batches of new pages. Initial traffic typically starts appearing within 2–3 months of indexation for long-tail queries. Competitive head terms take longer. The real power of programmatic SEO is cumulative — a directory of 500 well-optimised location pages generates significantly more combined traffic than any single manually written page could." },
    ],
    Content: () => (
      <div>
        <p style={s.p}>
          Programmatic SEO is the practice of creating large numbers of search-optimised pages automatically — using templates populated with data, rather than writing each page individually.
        </p>
        <p style={s.p}>
          Instead of writing one article about "best physiotherapy clinics in Bangkok," you build a system that generates "best physiotherapy clinics in Bangkok," "best physiotherapy clinics in Phuket," "best physiotherapy clinics in Chiang Mai" — and a hundred more variations — each populated with location-specific data and genuinely differentiated content.
        </p>
        <p style={s.p}>
          Done correctly, programmatic SEO is one of the highest-leverage growth tactics in organic search. Done incorrectly, it produces the thin, repetitive content Google penalises. This guide explains how to build it right.
        </p>

        <h2 style={s.h2}>How Programmatic SEO Works</h2>
        <p style={s.p}>
          The core idea is to identify keyword patterns — repeating structures where the intent is consistent but a variable changes — and build a template that generates a unique, useful page for each variation.
        </p>

        <h3 style={s.h3}>The three components</h3>
        <Ol>
          <NumLi n="1"><strong style={s.strong}>Keyword pattern</strong> — A repeating search query structure with identifiable variables. "[Service] in [City]" is a pattern. "Best [tool] for [use case]" is a pattern. "[Competitor] alternative" is a pattern.</NumLi>
          <NumLi n="2"><strong style={s.strong}>Data source</strong> — Information that makes each page unique and useful. Location data, product specs, pricing, reviews, statistics, provider lists. Without proprietary or differentiated data, you produce thin content.</NumLi>
          <NumLi n="3"><strong style={s.strong}>Page template</strong> — A consistent structure that ensures each generated page is well-optimised (correct title tag, H1, schema markup, internal links) while incorporating the unique data that differentiates each page.</NumLi>
        </Ol>

        <InfoBox title="The thin content problem">
          <p style={{ ...s.p, marginBottom: 0 }}>The most common programmatic SEO failure is building pages that are structurally identical with only a city name or variable swapped. Google's Helpful Content system specifically targets these — pages that are "doorway pages" providing no real value to the visitor. Every page must provide genuine, unique utility. The variable changes are not sufficient differentiation on their own.</p>
        </InfoBox>

        <h2 style={s.h2}>The 12 Programmatic SEO Playbooks</h2>
        <p style={s.p}>
          There are 12 proven patterns that produce scalable, rankable programmatic pages. Each works because it matches a real search pattern with genuine user intent.
        </p>

        <h3 style={s.h3}>1. Locations</h3>
        <p style={s.p}>
          "[Service] in [City]" pages are the most common programmatic SEO use case. Effective only when the page includes actual local data — real providers, local pricing, local regulations — not just a city name inserted into boilerplate text.
        </p>

        <h3 style={s.h3}>2. Comparisons</h3>
        <p style={s.p}>
          "[Product A] vs [Product B]" pages capture high-commercial-intent traffic from users comparing options. The best comparison pages include honest assessments of both options, a clear recommendation by use case, and regularly updated feature data.
        </p>

        <h3 style={s.h3}>3. Templates</h3>
        <p style={s.p}>
          "[Type] template" pages attract users who need a starting point for a deliverable — invoice templates, proposal templates, contract templates. These work best when the template is actually downloadable or usable directly on the page.
        </p>

        <h3 style={s.h3}>4. Alternatives</h3>
        <p style={s.p}>
          "Best [competitor] alternatives" pages capture users who are dissatisfied with an existing solution. These have high commercial intent and convert well, particularly in SaaS and tools categories.
        </p>

        <h3 style={s.h3}>5. Integrations</h3>
        <p style={s.p}>
          "[Your product] + [other product] integration" pages are highly effective for SaaS companies with integration ecosystems. Users searching for specific integrations have high purchase intent and are often evaluating whether to switch tools.
        </p>

        <h3 style={s.h3}>6. Conversions</h3>
        <p style={s.p}>
          "[Unit] to [unit] converter" or "[Currency] to [currency]" pages generate massive traffic with minimal content — but require accurate, real-time data. This is a winner-take-all category dominated by utility.
        </p>

        <h3 style={s.h3}>7. Glossary</h3>
        <p style={s.p}>
          "What is [term]" and "[term] definition" pages build topical authority and capture top-of-funnel awareness. Each term needs genuine depth — not a dictionary definition, but an explanation with context and examples.
        </p>

        <h3 style={s.h3}>8. Directory</h3>
        <p style={s.p}>
          Comprehensive directories — "[Category] tools," "[Industry] companies" — work when they provide genuine aggregation value: filtering, comparison, reviews, detailed profiles. A list of company names with no other information is thin content.
        </p>

        <h3 style={s.h3}>9. Personas</h3>
        <p style={s.p}>
          "[Product] for [audience]" pages — "project management for freelancers," "CRM for real estate agents" — let you address specific segments at scale. They work best when each persona page genuinely addresses the specific needs of that audience, not just mentions them in the intro.
        </p>

        <h3 style={s.h3}>10. Examples</h3>
        <p style={s.p}>
          "[Type] examples" and "[Category] inspiration" pages attract research-phase traffic. Galleries of real examples with analysis of why they work outperform pages that are just a list of screenshots.
        </p>

        <h3 style={s.h3}>11. Profiles</h3>
        <p style={s.p}>
          Pages about specific entities — companies, people, products — scale well in B2B, research, and news-adjacent contexts. Profile pages must be factually accurate, regularly updated, and provide information not easily found elsewhere.
        </p>

        <h3 style={s.h3}>12. Translations</h3>
        <p style={s.p}>
          Publishing your core content in multiple languages opens entirely new markets, often with less competition than English. Requires genuine localisation — not machine translation — and correct hreflang implementation to avoid duplicate content penalties.
        </p>

        <h2 style={s.h2}>What Separates Rankings from Penalties</h2>
        <p style={s.p}>
          Google's Helpful Content system and spam policies specifically target programmatic content. The distinction it makes is clear: pages that exist to rank, versus pages that exist to help users.
        </p>

        <h3 style={s.h3}>Pages that rank</h3>
        <Ul>
          <Li>Provide unique value specific to each page — not just a swapped variable</Li>
          <Li>Are built around proprietary or differentiated data</Li>
          <Li>Answer the query fully without requiring users to go elsewhere</Li>
          <Li>Have a logical place in the site's information architecture</Li>
          <Li>Connect through internal links to related content</Li>
        </Ul>

        <h3 style={s.h3}>Pages that get penalised</h3>
        <Ul>
          <Li>Swap a single variable (city name, product name) in otherwise identical content</Li>
          <Li>Have no real data differentiating each page</Li>
          <Li>Exist solely to funnel users to another page (doorway pages)</Li>
          <Li>Are not accessible from the main site navigation or sitemaps</Li>
          <Li>Generate in volumes that dilute the overall quality of the domain</Li>
        </Ul>

        <h2 style={s.h2}>Technical Requirements</h2>
        <p style={s.p}>
          Programmatic SEO has specific technical requirements beyond standard on-page SEO:
        </p>
        <Ul>
          <Li><strong style={s.strong}>URL structure:</strong> Always use subfolders (<code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>/locations/bangkok/</code>), not subdomains (<code style={{ fontFamily: 'var(--mono)', fontSize: 13, background: 'var(--surface)', padding: '1px 6px', borderRadius: 3 }}>bangkok.yoursite.com</code>). Subdomains don't inherit domain authority.</Li>
          <Li><strong style={s.strong}>Canonical tags:</strong> Set canonical URLs on each programmatic page to prevent cross-page duplicate content issues.</Li>
          <Li><strong style={s.strong}>Indexing control:</strong> Not every programmatic page should be indexed. Very thin or low-traffic variations can be excluded (noindex) to prevent them from diluting your domain's quality signal.</Li>
          <Li><strong style={s.strong}>Sitemaps:</strong> Submit programmatic page sitemaps separately so Google can process them at scale. Monitor indexation rate — if Google is de-indexing your pages, it's a quality signal problem.</Li>
          <Li><strong style={s.strong}>Crawl budget:</strong> Large programmatic sites need to manage crawl budget carefully. Avoid infinite pagination, parameter-based URLs, and unnecessary URL variations.</Li>
        </Ul>

        <h2 style={s.h2}>Programmatic SEO and AI Search</h2>
        <p style={s.p}>
          Programmatic pages can contribute to AI search visibility, but the bar is higher. AI models don't cite thin content. If a programmatic page provides genuine, specific information — real clinic data, real location-specific facts, specific product comparisons — it can be cited.
        </p>
        <p style={s.p}>
          The advantage of programmatic pages in AI search is coverage: a well-built location directory gives AI engines a rich data source for location-specific queries. The risk is the same as with Google: low-quality pages at scale can damage the domain's overall trustworthiness.
        </p>
        <p style={s.p}>
          For businesses combining programmatic SEO with AI search strategy, we recommend building programmatic pages on solid data first, then layering AI-optimisation signals (schema, FAQs, citation-friendly formatting) onto the template.
        </p>

        <Divider />

        <h2 style={s.h2}>FAQ</h2>

        <h3 style={s.h3}>How many pages should a programmatic SEO project generate?</h3>
        <p style={s.p}>
          Start smaller than you think. A focused first phase of 50–200 high-quality pages is better than 10,000 thin ones. Validate that your pages are being indexed, getting traffic, and ranking before scaling. The most common mistake is scaling before proving the template works.
        </p>

        <h3 style={s.h3}>What technology stack do I need?</h3>
        <p style={s.p}>
          The right stack depends on your scale and existing infrastructure. Common approaches: Next.js or Gatsby with a headless CMS or database for content-heavy sites; WordPress with custom post types for mid-scale; static site generators (Astro, Eleventy) for very high page counts where server-side rendering is too slow. The database or CMS that stores your differentiated data is more important than the framework.
        </p>

        <h3 style={s.h3}>Can programmatic SEO work for small businesses?</h3>
        <p style={s.p}>
          Yes — the pattern doesn't require technical resources. A clinic with multiple treatment pages structured consistently, a service provider generating location-specific landing pages, or a consultant building use-case pages can all benefit. The scale doesn't need to be thousands of pages. Even 20–50 well-structured pages built from a consistent template is programmatic SEO in principle.
        </p>

        <h3 style={s.h3}>Does programmatic SEO replace editorial content?</h3>
        <p style={s.p}>
          No. Programmatic and editorial content serve different purposes. Programmatic pages capture specific, high-volume search patterns at scale. Editorial content — long-form guides, opinion pieces, original research — builds topical authority and earns links. The strongest content strategies use both. Programmatic pages without editorial authority tend to plateau; editorial content without programmatic coverage misses long-tail opportunities.
        </p>

        <h3 style={s.h3}>How do I know if my programmatic pages are thin?</h3>
        <p style={s.p}>
          Apply this test: if you swap the variable (city, product, audience) and the page remains 90% the same, it's too thin. Each page should have a meaningful, substantive section that could only exist for that specific variable — local data, specific comparisons, audience-specific use cases. If you can't generate that, reconsider whether programmatic is the right approach for that keyword pattern.
        </p>
      </div>
    ),
  },

];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
export const getRelatedPosts = (slugs) => slugs.map(slug => posts.find(p => p.slug === slug)).filter(Boolean);
