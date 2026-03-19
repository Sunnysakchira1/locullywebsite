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

];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
export const getRelatedPosts = (slugs) => slugs.map(slug => posts.find(p => p.slug === slug)).filter(Boolean);
