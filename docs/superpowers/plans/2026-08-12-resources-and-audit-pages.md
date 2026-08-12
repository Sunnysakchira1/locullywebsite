# /audit + /resources Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship two new pages on locully.org — `/audit` (a conversion page selling the paid GEO audit + citation gap analysis) and `/resources` (a free hub built around a self-serve Citation Gap Audit tool, per the approved spec).

**Architecture:** `/audit` is a static React page with no new infrastructure — it ships first and independently. `/resources` adds the site's first serverless function (`api/citation-gap.js`), Upstash Redis for run limits, and a set of anonymised sample artefacts in `public/samples/`. Both routes register in `tools/generate-sitemap.js`, which `tools/prerender.cjs` reads — so the build itself fails if a route doesn't render.

**Tech Stack:** React 18, Vite 4, React Router v7, react-helmet, framer-motion, lucide-react, Tailwind + `locully-design.css`, Vercel Node functions (Fluid Compute), OpenAI Responses API, Upstash Redis, `node:test` for unit tests.

**Spec:** `docs/superpowers/specs/2026-08-12-resources-hub-design.md`
**Mockup:** https://claude.ai/code/artifact/bae09c9e-fa8a-47ba-9df8-c1fef997a944

---

## Global Constraints

- **Brand tokens only.** `--terra: #CC6432`, `--terra2: #E8753D`, `--ink: #1A1108`, `--bg: #FFFFFF`, `--bg2: #F8F6F3`, `--surface: #F0EDE8`, `--bdr: #E2DDD6`, `--red: #C13030`, `--amber: #A87820`, `--green: #2D7A4F`. Fonts: Fraunces (display), DM Sans (body), DM Mono (labels). No new palette.
- **Chart series colours** (fixed order ChatGPT → Perplexity → Gemini, never cycled): light `#CC6432`, `#2B6CB0`, `#2D7A4F`; dark `#DE6E37`, `#4A8FCC`, `#3E9A6B`. Series must also be direct-labelled — identity never depends on colour alone.
- **Zero client names.** No client or prospect name, domain, logo or screenshot may appear in any shipped file. Enforced by an automated build gate (Task 5), not by review.
- **Keyword volumes always as ranges**, never single numbers (existing repo rule).
- **AIO is bundled under SEO** — never separately priced (existing repo rule).
- **Contact details:** locully.org · sunny@locully.org · +66 62 695 9444 · Bangkok, Thailand.
- **Voice for `/audit`** (Keval tone, per `~/.claude/skills/locully-aio-listicle-keval/SKILL.md` §"Voice & tone"): second person, direct, confident, conversational, short sentences. "We" = the team that did the work, never anonymous. Specificity everywhere — a real number in every claim. Honest about tradeoffs. Hormozi-adjacent: benefit-led, zero fluff, no jargon. **The Keval listicle *format* is explicitly NOT used** — that skill forbids it for service pages. Only the voice carries over.
- **Do not use** `gpt-4o-search-preview` via chat completions — it returns Google Maps links, not real web citations. Use the Responses API with `web_search_preview`.
- **Commits:** the repo is on `main`, which auto-deploys to production. Create a branch `feat/audit-and-resources` before Task 1 and work there. Do not push to `main` without Sunny's explicit go-ahead.

### ⚠️ Assumption requiring confirmation before Phase 1 ships

The audit price is **not recorded anywhere** in the repo or the wiki. This plan uses **฿25,000 one-off, credited in full against the first month if they go on to a retainer** — a standard entry-offer structure that de-risks the purchase. It lives in exactly one constant (`AUDIT_PRICE` in `src/data/auditData.js`) so it can be changed in one edit. **Sunny must confirm or replace this before `/audit` goes live.**

---

## File Structure

**Phase 1 — `/audit`**

| File | Responsibility |
|---|---|
| `src/data/auditData.js` (create) | All `/audit` copy, pricing, FAQ, deliverables, process steps. Content lives apart from layout so copy edits never touch JSX. |
| `src/pages/AuditPage.jsx` (create) | Page layout and sections. Reads everything from `auditData.js`. |
| `src/App.jsx` (modify) | Route registration. |
| `src/components/Nav.jsx` (modify) | CTA repoint + "Audit" link. |
| `tools/generate-sitemap.js` (modify) | `/audit` in `STATIC_PAGES`. |

**Phase 2 — `/resources`**

| File | Responsibility |
|---|---|
| `tools/check-anonymised.js` (create) | Build gate. Greps shipped assets for client names/domains. |
| `tests/check-anonymised.test.js` (create) | Unit tests for the gate. |
| `public/samples/*.html` (create) | Redacted deliverables, view-only. |
| `src/data/trackingSample.json` (create) | Anonymised chart data. |
| `src/data/resourcesData.js` (create) | Exhibit captions, download copy. |
| `src/pages/ResourcesPage.jsx` (create) | Page layout, three zones. |
| `src/components/CitationGapTool.jsx` (create) | The tool's five-state machine. |
| `src/components/ProofGallery.jsx` (create) | Exhibit grid + modal. |
| `src/components/CitationChart.jsx` (create) | Interactive multi-series chart. |
| `api/lib/prompts.js` (create) | BOFU prompt generation + research-prompt wrapping. Pure. |
| `api/lib/citations.js` (create) | `url_citation` extraction, URL cleaning, gap ranking. Pure. |
| `api/lib/limits.js` (create) | Upstash-backed email/IP/global limits. |
| `api/citation-gap.js` (create) | The HTTP handler. Thin — orchestrates the three libs above. |
| `tests/prompts.test.js`, `tests/citations.test.js` (create) | Unit tests for the pure logic. |
| `src/components/LeadMagnetPopup.jsx` (modify) | Repoint to `/resources`. |
| `package.json` (modify) | `test` script, `@upstash/redis`, `openai`. |

The API is split into three pure-ish libs plus a thin handler specifically so the logic that matters — prompt wrapping, citation extraction, gap ranking — is unit-testable without network calls.

---

# PHASE 1 — `/audit`

Ships independently. No new infrastructure. Can go live before Phase 2 exists.

---

### Task 1: Route `/audit` with a minimal page, wired into the build

**Files:**
- Create: `src/pages/AuditPage.jsx`
- Modify: `src/App.jsx`
- Modify: `tools/generate-sitemap.js:25-33`

**Interfaces:**
- Consumes: nothing.
- Produces: default export `AuditPage` (React component, no props); route `/audit`.

- [ ] **Step 1: Create the branch**

```bash
git checkout -b feat/audit-and-resources
```

- [ ] **Step 2: Create the minimal page**

Create `src/pages/AuditPage.jsx`:

```jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const AuditPage = () => (
  <div className="audit-page">
    <Helmet>
      <title>AI Visibility Audit — Locully</title>
      <meta name="description" content="Find out exactly why AI assistants recommend your competitors instead of you — and what to fix first." />
      <link rel="canonical" href="https://www.locully.org/audit" />
    </Helmet>
    <Nav />
    <main>
      <h1>AI Visibility Audit</h1>
    </main>
    <Footer />
  </div>
);

export default AuditPage;
```

- [ ] **Step 3: Register the route**

In `src/App.jsx`, add to the import block (after the `SeoAioPage` import):

```jsx
import AuditPage from '@/pages/AuditPage';
```

Add the route immediately after the `/ai-search-visibility` route:

```jsx
<Route path="/audit" element={<AuditPage />} />
```

- [ ] **Step 4: Add to the sitemap**

In `tools/generate-sitemap.js`, add to `STATIC_PAGES` after the `/ai-search-visibility` entry:

```js
  { path: '/audit',                priority: '0.9', changefreq: 'monthly' },
```

- [ ] **Step 5: Verify the build renders the route**

Run: `npm run build`
Expected: PASS. The prerender step reads routes from the sitemap and **exits 1 if any route fails to render**, so a passing build proves `/audit` renders. Confirm the log line `[prerender] N routes →` has incremented by one and that `dist/audit/index.html` exists.

- [ ] **Step 6: Verify the rendered HTML contains real content, not an empty shell**

Run: `grep -c "AI Visibility Audit" dist/audit/index.html`
Expected: a count ≥ 1. If it is 0 the page rendered blank and prerender silently produced a shell — stop and fix before continuing.

- [ ] **Step 7: Commit**

```bash
git add src/pages/AuditPage.jsx src/App.jsx tools/generate-sitemap.js
git commit -m "feat: add /audit route with minimal page"
```

---

### Task 2: The copy deck

All `/audit` copy in one data module, written in the voice defined in Global Constraints. Nothing here is placeholder — this is shipping copy.

**Files:**
- Create: `src/data/auditData.js`

**Interfaces:**
- Consumes: nothing.
- Produces: named exports `AUDIT_PRICE`, `HERO`, `SYMPTOMS`, `DELIVERABLES`, `PROCESS`, `NOT_INCLUDED`, `PROOF`, `FAQS`. `AuditPage.jsx` (Task 3) imports all eight.

- [ ] **Step 1: Write the copy module**

Create `src/data/auditData.js`:

```js
// All /audit page copy. Voice: second person, short sentences, a real number in
// every claim, honest about limits. Edit copy here — never in the JSX.

// ⚠️ CONFIRM WITH SUNNY BEFORE LAUNCH. Single source of truth for the price.
export const AUDIT_PRICE = {
  amount: '฿25,000',
  qualifier: 'one-off',
  credit: 'Credited in full against your first month if you go on to a retainer.',
};

export const HERO = {
  eyebrow: 'AI Visibility Audit',
  h1: 'Find out why AI recommends your competitors instead of you.',
  sub: 'We ask ChatGPT, Perplexity and Google the questions your customers actually ask. Then we show you every site the AI trusted, every competitor it named, and exactly why your name never came up.',
  cta: 'Book my audit',
  ctaSub: 'Delivered in 5 working days. One clinic per suburb — we do not audit two competitors in the same category.',
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
      why: 'We have found live sites blocking every AI crawler at the firewall without knowing it. If this is broken, nothing else matters.',
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
      why: 'We ran this for one Bangkok clinic and found 16 out of 16 keywords returning 2–4 of their own URLs. Their blog posts were beating their own service pages by 50 positions.',
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
  lead: 'Every agency page you have read so far has skipped this part. Here is where an audit is the wrong purchase:',
  items: [
    'It will not fix anything. It is a diagnosis. Implementation is either your team or a separate engagement — we will tell you honestly which findings you can do in-house.',
    'It will not get you cited next week. AI engines re-crawl on their own schedule. The clients we track take 60–90 days before citation counts move.',
    'It will not help if your business genuinely is not the best option. We can make a machine find you and read you. We cannot make it recommend a clinic with 12 reviews over one with 400.',
    'It is not worth ฿25,000 if you have fewer than about 20 pages and no competitors. At that size the free tool on our resources page will tell you most of what you need.',
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
    q: 'What does it cost?',
    a: '฿25,000, one-off. If you go on to a monthly retainer with us, the full amount is credited against your first month. So if you were always going to hire us, the audit is free — and if you were not, you still keep the report.',
  },
  {
    q: 'Can I just run the free tool instead?',
    a: 'Yes, and you should — it is on our resources page and it costs nothing. It runs 4 questions instead of 40, on one AI engine instead of three, and it does not audit your site. It will tell you whether you have a problem. The paid audit tells you what is causing it.',
  },
  {
    q: 'Do I have to sign up for a retainer?',
    a: 'No. Most people who buy the audit do go on to work with us, but plenty take the report to their own team or their existing agency. The report is written so somebody else can execute it.',
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
    a: 'Not in the same category and area. If we have audited a dental clinic in Thonglor, we will not take another one. You are buying a map of your category — it stops being worth anything if we sell the same map to the people you are competing against.',
  },
];
```

- [ ] **Step 2: Verify the module parses and exports everything**

Run:

```bash
node --input-type=module -e "
import('./src/data/auditData.js').then(m => {
  const need = ['AUDIT_PRICE','HERO','SYMPTOMS','DELIVERABLES','PROCESS','NOT_INCLUDED','PROOF','FAQS'];
  const missing = need.filter(k => !(k in m));
  if (missing.length) { console.error('MISSING:', missing); process.exit(1); }
  console.log('OK — all 8 exports present, ' + m.FAQS.length + ' FAQs, ' + m.DELIVERABLES.items.length + ' deliverables');
});"
```

Expected: `OK — all 8 exports present, 7 FAQs, 7 deliverables`

- [ ] **Step 3: Commit**

```bash
git add src/data/auditData.js
git commit -m "feat: add /audit copy deck"
```

---

### Task 3: Build the page sections

**Files:**
- Modify: `src/pages/AuditPage.jsx`

**Interfaces:**
- Consumes: all eight exports from `src/data/auditData.js`.
- Produces: the finished `/audit` page.

- [ ] **Step 1: Replace `AuditPage.jsx` with the full page**

Sections in order, each reading from `auditData.js`: Hero → Symptoms → Deliverables → Process → Proof → What it will not do → FAQ → final CTA. Follow the section and styling conventions already used in `src/pages/SeoAioPage.jsx` (Helmet block at top, `motion.div` reveals, `lucide-react` icons, `Footer` at the bottom).

```jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, XCircle } from 'lucide-react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import {
  AUDIT_PRICE, HERO, SYMPTOMS, DELIVERABLES,
  PROCESS, NOT_INCLUDED, PROOF, FAQS,
} from '@/data/auditData';

const reveal = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.45 },
};

const AuditPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const maxProof = Math.max(...PROOF.series.map((p) => p.value));

  return (
    <div className="audit-page">
      <Helmet>
        <title>AI Visibility Audit — Find Out Why AI Recommends Your Competitors | Locully</title>
        <meta name="description" content="We ask ChatGPT, Perplexity and Google the questions your customers ask, then show you every competitor they named and why you were not one of them. Delivered in 5 working days." />
        <link rel="canonical" href="https://www.locully.org/audit" />
      </Helmet>

      <Nav />

      <main>
        {/* HERO */}
        <section className="aud-hero">
          <p className="aud-eyebrow">{HERO.eyebrow}</p>
          <h1>{HERO.h1}</h1>
          <p className="aud-lede">{HERO.sub}</p>
          <div className="aud-cta-row">
            <a href="/#contact" className="aud-btn">{HERO.cta} <ArrowRight size={16} /></a>
            <span className="aud-price">
              <strong>{AUDIT_PRICE.amount}</strong> {AUDIT_PRICE.qualifier}
            </span>
          </div>
          <p className="aud-fine">{HERO.ctaSub}</p>
          <p className="aud-fine">{AUDIT_PRICE.credit}</p>
        </section>

        {/* SYMPTOMS */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>{SYMPTOMS.h2}</h2>
            <p className="aud-lead">{SYMPTOMS.lead}</p>
            <div className="aud-grid-2">
              {SYMPTOMS.items.map((s) => (
                <div className="aud-card" key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* DELIVERABLES */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{DELIVERABLES.h2}</h2>
            <p className="aud-lead">{DELIVERABLES.lead}</p>
            <div className="aud-deliverables">
              {DELIVERABLES.items.map((d) => (
                <div className="aud-deliverable" key={d.name}>
                  <CheckCircle2 size={18} className="aud-tick" aria-hidden="true" />
                  <div>
                    <h3>{d.name}</h3>
                    <p>{d.what}</p>
                    <p className="aud-why"><strong>Why it matters:</strong> {d.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROCESS */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>{PROCESS.h2}</h2>
            <ol className="aud-process">
              {PROCESS.steps.map((s) => (
                <li key={s.n}>
                  <span className="aud-step-n">{s.n}</span>
                  <div>
                    <h3>{s.title} <span className="aud-when">{s.when}</span></h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>
        </section>

        {/* PROOF */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>{PROOF.h2}</h2>
            <p className="aud-lead">{PROOF.lead}</p>
            <div className="aud-bars" role="img" aria-label="AI-sourced consultations by month: October 3, November 13, December 16, January 17, February 13, March 27.">
              {PROOF.series.map((p) => (
                <div className="aud-bar-col" key={p.month}>
                  <span className="aud-bar-val">{p.value}</span>
                  <div className="aud-bar" style={{ height: `${(p.value / maxProof) * 100}%` }} />
                  <span className="aud-bar-lbl">{p.month}</span>
                </div>
              ))}
            </div>
            <p className="aud-callout">{PROOF.callout}</p>
            <p className="aud-honest">{PROOF.honest}</p>
          </motion.div>
        </section>

        {/* NOT INCLUDED */}
        <section className="aud-sec">
          <motion.div {...reveal}>
            <h2>{NOT_INCLUDED.h2}</h2>
            <p className="aud-lead">{NOT_INCLUDED.lead}</p>
            <ul className="aud-nots">
              {NOT_INCLUDED.items.map((n) => (
                <li key={n}><XCircle size={17} aria-hidden="true" /><span>{n}</span></li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="aud-sec aud-sec-alt">
          <motion.div {...reveal}>
            <h2>Questions people ask before booking</h2>
            <div className="aud-faqs">
              {FAQS.map((f, i) => (
                <div className={`aud-faq${openFaq === i ? ' open' : ''}`} key={f.q}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                    <span>{f.q}</span><ChevronDown size={18} aria-hidden="true" />
                  </button>
                  {openFaq === i && <p>{f.a}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FINAL CTA */}
        <section className="aud-final">
          <h2>Find out what AI says about you</h2>
          <p>{AUDIT_PRICE.amount} {AUDIT_PRICE.qualifier}. Report in 5 working days. {AUDIT_PRICE.credit}</p>
          <div className="aud-cta-row">
            <a href="/#contact" className="aud-btn">{HERO.cta} <ArrowRight size={16} /></a>
            <Link to="/resources" className="aud-btn-ghost">Try the free version first</Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AuditPage;
```

- [ ] **Step 2: Add the page styles**

Append to `src/locully-design.css`, using brand tokens only. Scope every rule under `.audit-page` so nothing leaks into other pages:

```css
/* ---------- /audit ---------- */
.audit-page main { max-width: 1080px; margin: 0 auto; padding: 0 24px; }
.audit-page .aud-hero { padding: 76px 0 56px; }
.audit-page .aud-eyebrow { font-family: var(--mono); font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--terra); margin: 0 0 14px; }
.audit-page h1 { font-family: var(--serif); font-size: clamp(34px, 5.4vw, 56px); line-height: 1.04; letter-spacing: -.02em; text-wrap: balance; margin: 0; }
.audit-page h2 { font-family: var(--serif); font-size: clamp(26px, 3.4vw, 36px); line-height: 1.12; letter-spacing: -.02em; text-wrap: balance; margin: 0 0 12px; }
.audit-page h3 { font-family: var(--serif); font-size: 19px; line-height: 1.25; margin: 0 0 6px; }
.audit-page .aud-lede { font-size: clamp(16px, 1.7vw, 18.5px); color: var(--ink-2, #574A3C); max-width: 62ch; margin: 18px 0 0; }
.audit-page .aud-lead { color: var(--ink-2, #574A3C); max-width: 60ch; margin: 0 0 30px; }
.audit-page .aud-sec { padding: 64px 0; border-top: 1px solid var(--bdr); }
.audit-page .aud-sec-alt { background: var(--bg2); margin: 0 -24px; padding: 64px 24px; }
.audit-page .aud-cta-row { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; margin-top: 28px; }
.audit-page .aud-btn { display: inline-flex; align-items: center; gap: 8px; background: var(--terra); color: #fff; font-family: var(--mono); font-size: 14px; padding: 14px 24px; border-radius: 9px; text-decoration: none; }
.audit-page .aud-btn:hover { background: var(--terra2); }
.audit-page .aud-btn-ghost { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--bdr); color: var(--ink); font-family: var(--mono); font-size: 14px; padding: 14px 24px; border-radius: 9px; text-decoration: none; }
.audit-page .aud-price { font-family: var(--mono); font-size: 15px; color: var(--ink-2, #574A3C); }
.audit-page .aud-fine { font-size: 13px; color: var(--ink-3, #857767); margin: 10px 0 0; max-width: 60ch; }
.audit-page .aud-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.audit-page .aud-card { border: 1px solid var(--bdr); border-radius: 13px; padding: 22px; background: var(--bg); }
.audit-page .aud-card p { margin: 0; color: var(--ink-2, #574A3C); font-size: 14.5px; }
.audit-page .aud-deliverables { display: flex; flex-direction: column; gap: 22px; }
.audit-page .aud-deliverable { display: grid; grid-template-columns: 22px 1fr; gap: 14px; }
.audit-page .aud-tick { color: var(--green); margin-top: 3px; }
.audit-page .aud-deliverable p { margin: 0 0 6px; color: var(--ink-2, #574A3C); font-size: 14.5px; }
.audit-page .aud-why { color: var(--ink-3, #857767); font-size: 13.5px; }
.audit-page .aud-process { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0; }
.audit-page .aud-process li { display: grid; grid-template-columns: 56px 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid var(--bdr); }
.audit-page .aud-step-n { font-family: var(--mono); font-size: 22px; color: var(--terra); font-variant-numeric: tabular-nums; }
.audit-page .aud-when { font-family: var(--mono); font-size: 11px; color: var(--ink-3, #857767); letter-spacing: .1em; text-transform: uppercase; margin-left: 8px; }
.audit-page .aud-process p { margin: 0; color: var(--ink-2, #574A3C); font-size: 14.5px; }
.audit-page .aud-bars { display: flex; gap: 18px; align-items: flex-end; height: 210px; margin: 8px 0 20px; }
.audit-page .aud-bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%; gap: 8px; }
.audit-page .aud-bar { width: 100%; max-width: 74px; background: var(--terra); border-radius: 5px 5px 0 0; }
.audit-page .aud-bar-val { font-family: var(--mono); font-size: 15px; font-variant-numeric: tabular-nums; }
.audit-page .aud-bar-lbl { font-family: var(--mono); font-size: 12px; color: var(--ink-3, #857767); }
.audit-page .aud-callout { font-family: var(--serif); font-size: 24px; color: var(--terra); margin: 0 0 8px; }
.audit-page .aud-honest { font-size: 14px; color: var(--ink-2, #574A3C); max-width: 62ch; margin: 0; }
.audit-page .aud-nots { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.audit-page .aud-nots li { display: grid; grid-template-columns: 20px 1fr; gap: 12px; color: var(--ink-2, #574A3C); font-size: 14.5px; }
.audit-page .aud-nots svg { color: var(--amber); margin-top: 3px; }
.audit-page .aud-faqs { display: flex; flex-direction: column; }
.audit-page .aud-faq { border-bottom: 1px solid var(--bdr); }
.audit-page .aud-faq button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; background: none; border: 0; padding: 18px 0; font-family: var(--serif); font-size: 17px; color: var(--ink); text-align: left; cursor: pointer; }
.audit-page .aud-faq p { margin: 0 0 18px; color: var(--ink-2, #574A3C); font-size: 14.5px; max-width: 66ch; }
.audit-page .aud-final { padding: 72px 0; text-align: center; border-top: 1px solid var(--bdr); }
.audit-page .aud-final .aud-cta-row { justify-content: center; }
.audit-page .aud-final p { color: var(--ink-2, #574A3C); max-width: 56ch; margin: 12px auto 0; }
@media (max-width: 860px) {
  .audit-page .aud-grid-2 { grid-template-columns: 1fr; }
  .audit-page .aud-bars { height: 170px; gap: 10px; }
  .audit-page .aud-sec { padding: 48px 0; }
}
```

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 4: Build and confirm the content prerendered**

Run: `npm run build && grep -c "why AI recommends" dist/audit/index.html`
Expected: build PASSES and the grep returns ≥ 1.

- [ ] **Step 5: Check it visually at three widths**

Run: `npm run preview` then open `http://localhost:3000/audit` at 390px, 768px and 1440px. Confirm: no horizontal scroll on `body` at 390px, the proof bars are readable, and the FAQ opens and closes.

- [ ] **Step 6: Commit**

```bash
git add src/pages/AuditPage.jsx src/locully-design.css
git commit -m "feat: build /audit page sections"
```

---

### Task 4: Schema, internal links and nav

**Files:**
- Modify: `src/pages/AuditPage.jsx`
- Modify: `src/components/Nav.jsx:32,50`

**Interfaces:**
- Consumes: `FAQS`, `AUDIT_PRICE` from `auditData.js`.
- Produces: nothing consumed downstream.

- [ ] **Step 1: Add JSON-LD to `AuditPage.jsx`**

Add above the component, following the pattern in `src/pages/SeoAioPage.jsx:38-60`:

```jsx
const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Visibility Audit',
  serviceType: 'Generative Engine Optimization audit',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: [{ '@type': 'City', name: 'Bangkok' }, { '@type': 'Country', name: 'Thailand' }],
  url: 'https://www.locully.org/audit',
  description: 'A 40-question citation gap analysis across ChatGPT, Perplexity and Google AI Overviews, plus a full technical and structured-data audit. Delivered in 5 working days.',
};

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org/' },
    { '@type': 'ListItem', position: 2, name: 'AI Visibility Audit', item: 'https://www.locully.org/audit' },
  ],
};
```

Render them inside the existing `<Helmet>`:

```jsx
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
```

**Constraint:** `schemaFaq` is generated from the same `FAQS` array the page renders, so the schema can never drift from the visible Q&A.

- [ ] **Step 2: Repoint the nav CTA**

The nav CTA already reads "Get My Free AI Visibility Audit" but points at `/#contact`. The word "Free" now belongs to the `/resources` tool, and the paid audit needs its own destination.

In `src/components/Nav.jsx` line 32, replace:

```jsx
      <a href="/#contact" className="gnav-cta">Get My Free AI Visibility Audit</a>
```

with:

```jsx
      <Link to="/audit" className="gnav-cta">Get My AI Visibility Audit</Link>
```

In the mobile panel, line 50, replace:

```jsx
          <a href="/#contact" className="gnav-mobile-cta">Get My Free AI Visibility Audit</a>
```

with:

```jsx
          <Link to="/audit" className="gnav-mobile-cta">Get My AI Visibility Audit</Link>
```

Also add an "Audit" link to both the desktop list (after the Services `<li>`) and the mobile panel (after Services):

```jsx
        <li><Link to="/audit">Audit</Link></li>
```

```jsx
          <Link to="/audit">Audit</Link>
```

- [ ] **Step 3: Add the internal link from the retainer page**

In `src/pages/SeoAioPage.jsx`, inside the FAQ answer for "How long does it take to see results?", append this sentence to the existing answer string:

```
 If you want the specifics for your own site before committing to a retainer, start with our <a href="/audit">AI visibility audit</a>.
```

This creates the funnel link `/ai-search-visibility` → `/audit` and keeps the two pages in distinct roles rather than competing.

- [ ] **Step 4: Validate the JSON-LD**

Run:

```bash
npm run build && node -e "
const fs=require('fs');
const html=fs.readFileSync('dist/audit/index.html','utf8');
const blocks=[...html.matchAll(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/g)];
if(blocks.length<3){console.error('expected 3 JSON-LD blocks, got '+blocks.length);process.exit(1);}
blocks.forEach((b,i)=>{try{JSON.parse(b[1])}catch(e){console.error('block '+i+' invalid: '+e.message);process.exit(1)}});
console.log('OK — '+blocks.length+' valid JSON-LD blocks');"
```

Expected: `OK — 3 valid JSON-LD blocks`

- [ ] **Step 5: Confirm every FAQ in the schema is on the page**

Run:

```bash
node -e "
const fs=require('fs');
const html=fs.readFileSync('dist/audit/index.html','utf8');
const m=html.match(/\"@type\":\"FAQPage\",\"mainEntity\":(\[[\s\S]*?\])<\/script>/);
const faqs=JSON.parse(m[1]);
const missing=faqs.filter(f=>!html.includes(f.name.replace(/&/g,'&amp;')));
if(missing.length){console.error('schema FAQ not visible on page:',missing.map(f=>f.name));process.exit(1);}
console.log('OK — all '+faqs.length+' schema FAQs are visible on the page');"
```

Expected: `OK — all 7 schema FAQs are visible on the page`

- [ ] **Step 6: Commit**

```bash
git add src/pages/AuditPage.jsx src/components/Nav.jsx
git commit -m "feat: add /audit schema, nav CTA and funnel links"
```

**🚦 Phase 1 gate — `/audit` is now shippable on its own.** Get Sunny's confirmation on `AUDIT_PRICE` before merging to `main`.

---

# PHASE 2 — `/resources`

---

### Task 5: The anonymisation build gate

This comes first deliberately. Nothing anonymised gets created until the thing that checks it exists.

**Files:**
- Create: `tools/check-anonymised.js`
- Create: `tests/check-anonymised.test.js`
- Modify: `package.json`

**Interfaces:**
- Produces: `checkPaths(paths, terms) -> {file, term, line}[]` (named export) and a CLI entry that exits 1 on any hit. Task 6 and Task 14 both run it.

- [ ] **Step 1: Add the test script and dependencies**

In `package.json`, add to `scripts`:

```json
    "test": "node --test tests/",
    "check:anon": "node tools/check-anonymised.js",
```

Install runtime deps needed later in this phase:

```bash
npm install openai @upstash/redis
```

- [ ] **Step 2: Write the failing test**

Create `tests/check-anonymised.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { checkPaths } from '../tools/check-anonymised.js';

const TMP = 'tests/.tmp-anon';

test('flags a forbidden term in a file', () => {
  mkdirSync(TMP, { recursive: true });
  writeFileSync(`${TMP}/a.html`, '<p>Report for Cosmo Clinic, Bangkok</p>');
  const hits = checkPaths([`${TMP}/a.html`], ['Cosmo Clinic']);
  assert.equal(hits.length, 1);
  assert.equal(hits[0].term, 'Cosmo Clinic');
  rmSync(TMP, { recursive: true, force: true });
});

test('is case-insensitive', () => {
  mkdirSync(TMP, { recursive: true });
  writeFileSync(`${TMP}/b.html`, 'visit FORMRECOVERY.COM today');
  const hits = checkPaths([`${TMP}/b.html`], ['formrecovery.com']);
  assert.equal(hits.length, 1);
  rmSync(TMP, { recursive: true, force: true });
});

test('returns nothing for a clean file', () => {
  mkdirSync(TMP, { recursive: true });
  writeFileSync(`${TMP}/c.html`, '<p>Bangkok wellness clinic, 3 locations</p>');
  const hits = checkPaths([`${TMP}/c.html`], ['Cosmo Clinic', 'formrecovery.com']);
  assert.equal(hits.length, 0);
  rmSync(TMP, { recursive: true, force: true });
});

test('reports the line number of the hit', () => {
  mkdirSync(TMP, { recursive: true });
  writeFileSync(`${TMP}/d.html`, 'line one\nline two\nGenesis Fertility\n');
  const hits = checkPaths([`${TMP}/d.html`], ['Genesis Fertility']);
  assert.equal(hits[0].line, 3);
  rmSync(TMP, { recursive: true, force: true });
});
```

- [ ] **Step 3: Run it to confirm it fails**

Run: `npm test`
Expected: FAIL — `Cannot find module '../tools/check-anonymised.js'`

- [ ] **Step 4: Write the implementation**

Create `tools/check-anonymised.js`:

```js
#!/usr/bin/env node
/**
 * Build gate: no client or prospect identifier may appear in a shipped asset.
 * Exits 1 on any hit. Run by `npm run check:anon` and before every deploy.
 */
import { readFileSync, existsSync } from 'node:fs';
import { globSync } from 'node:fs';

// Every client + prospect name and domain from wiki/locully/agency.md.
export const FORBIDDEN = [
  'Form Recovery', 'formrecovery.com',
  'Cosmo Clinic', 'The Cosmo Clinic', 'cosmobeautyclinic.com',
  'Achyut Bhavan', 'achyutbhavan.com',
  'JaiDeeClear', 'Jaidee', 'jaideeclear.com',
  'Iron Fairies', 'theironfairies.com',
  'Opera Italian', 'operaitalian.com',
  'Valuation Masterclass', 'valuationmasterclass.com',
  'Investors Clinic', 'investorsclinic.in',
  'AskAiNurse', 'askainurse.com',
  'Genesis Fertility', 'gfcclinic.com',
  'InterContinental Jakarta', 'Sugar & Spice', 'Shio',
  'EGN Thailand', 'egn.co.th',
  'Happily', 'gethappily.com',
  'Singh Production', 'Itchguard', 'Macrophar', 'Vitaxcell',
  'Renew Dental Lounge', 'Sterling', 'Astra Healthcare',
  'Biotherapy Asia', 'Hanrahan Health', 'Imagine Health',
];

// Files that ship to the public and must be clean.
export const SCANNED_GLOBS = [
  'public/samples/**/*.html',
  'src/data/trackingSample.json',
  'src/data/resourcesData.js',
  'src/pages/ResourcesPage.jsx',
  'src/components/ProofGallery.jsx',
  'src/components/CitationChart.jsx',
];

export function checkPaths(paths, terms) {
  const hits = [];
  for (const p of paths) {
    if (!existsSync(p)) continue;
    const lines = readFileSync(p, 'utf8').split('\n');
    lines.forEach((text, i) => {
      for (const term of terms) {
        if (text.toLowerCase().includes(term.toLowerCase())) {
          hits.push({ file: p, term, line: i + 1 });
        }
      }
    });
  }
  return hits;
}

function main() {
  const paths = SCANNED_GLOBS.flatMap((g) => globSync(g));
  const hits = checkPaths(paths, FORBIDDEN);
  if (hits.length) {
    console.error(`\n✗ ANONYMISATION FAILED — ${hits.length} client identifier(s) found:\n`);
    hits.forEach((h) => console.error(`  ${h.file}:${h.line} → "${h.term}"`));
    console.error('\nRemove every one before shipping.\n');
    process.exit(1);
  }
  console.log(`✓ anonymisation clean — ${paths.length} file(s) scanned, 0 hits`);
}

if (process.argv[1]?.endsWith('check-anonymised.js')) main();
```

- [ ] **Step 5: Run the tests to confirm they pass**

Run: `npm test`
Expected: PASS — 4 tests.

- [ ] **Step 6: Wire the gate into the build**

In `package.json`, change the `build` script so the gate runs before Vite:

```json
    "build": "node tools/check-anonymised.js && node tools/generate-llms.js || true && node tools/generate-sitemap.js || true && vite build && node tools/prerender.cjs",
```

Run: `npm run build`
Expected: PASS, with `✓ anonymisation clean` in the log. (Zero files match the globs yet — that is correct, they arrive in Task 6.)

- [ ] **Step 7: Commit**

```bash
git add tools/check-anonymised.js tests/check-anonymised.test.js package.json package-lock.json
git commit -m "feat: add anonymisation build gate"
```

---

### Task 6: Produce the redacted sample assets

**Files:**
- Create: `public/samples/geo-audit-sample.html`
- Create: `public/samples/monthly-report-sample.html`
- Create: `src/data/trackingSample.json`

**Interfaces:**
- Produces: three static assets. Task 8 links to the two HTML files; Task 9 imports the JSON.

- [ ] **Step 1: Copy the source audit**

```bash
mkdir -p public/samples
cp /Users/sunny/Projects/locully/audits/audit-genesis-fertility.html public/samples/geo-audit-sample.html
```

- [ ] **Step 2: Redact it**

Open `public/samples/geo-audit-sample.html` and replace, throughout:
- the clinic name → `a Bangkok fertility clinic`
- the domain → `[client domain removed]`
- any logo `<img>` → remove the tag entirely
- any screenshot `<img>` → remove the tag entirely
- the page `<title>` → `GEO Audit — Sample (Anonymised) | Locully`

Add immediately after the opening `<body>` tag:

```html
<div style="background:#F0EDE8;border-bottom:1px solid #E2DDD6;padding:12px 20px;font:13px/1.5 system-ui;color:#574A3C;text-align:center">
  <strong>Sample.</strong> This is a real Locully GEO audit with the client's name, domain and screenshots removed. Every finding and score is unchanged.
</div>
```

Add to `<head>`:

```html
<meta name="robots" content="noindex" />
```

(The samples are proof for humans arriving from `/resources`; the `/resources` page itself is what gets indexed.)

- [ ] **Step 3: Build the monthly report sample**

```bash
cp /Users/sunny/Projects/locully/templates/report-deck.html public/samples/monthly-report-sample.html
```

Apply the same four redactions, the same banner (wording: `This is a real Locully monthly report with the client's name and domain removed.`), and the same `noindex` meta.

- [ ] **Step 4: Create the anonymised tracking data**

Create `src/data/trackingSample.json`. Source: `~/.claude/skills/geo-tracking/history.csv`, brand labels stripped.

**⚠️ Blocker check first.** Run:

```bash
wc -l ~/.claude/skills/geo-tracking/history.csv
```

If it still returns 13, the dataset is two brands over three days and cannot fill a 12-week chart. **Either** pull a fuller export from the `locully-ai-visibility` repo first, **or** skip to Task 14 and drop the tracking exhibit from v1 (the spec sanctions this). Do not fabricate rows to fill the gap.

With a fuller export in hand, write it in this shape — 12 points per series, no brand names:

```json
{
  "label": "Bangkok wellness clinic",
  "period": "12 weeks",
  "weeks": ["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10","W11","W12"],
  "series": [
    { "name": "ChatGPT",    "data": [2,3,3,5,4,6,7,6,8,9,11,12] },
    { "name": "Perplexity", "data": [1,1,2,2,3,3,4,5,5,6,6,8] },
    { "name": "Gemini",     "data": [0,0,0,1,1,1,2,2,3,3,4,5] }
  ]
}
```

Replace the arrays above with the real exported values. The `name` order is fixed and must match the colour order in Global Constraints.

- [ ] **Step 5: Run the gate**

Run: `npm run check:anon`
Expected: `✓ anonymisation clean — 3 file(s) scanned, 0 hits`

If it fails, it prints the file, line and term. Fix and re-run until clean. **Do not proceed while it fails.**

- [ ] **Step 6: Eyeball both samples**

Run: `npm run preview`, then open `http://localhost:3000/samples/geo-audit-sample.html` and `/samples/monthly-report-sample.html`. Read them start to finish. The gate catches known strings; it cannot catch a client name inside an image or a phrasing nobody listed.

- [ ] **Step 7: Commit**

```bash
git add public/samples src/data/trackingSample.json
git commit -m "feat: add redacted sample deliverables"
```

---

### Task 7: Prompt generation and citation logic (pure, tested)

**Files:**
- Create: `api/lib/prompts.js`
- Create: `api/lib/citations.js`
- Create: `tests/prompts.test.js`
- Create: `tests/citations.test.js`

**Interfaces:**
- Produces:
  - `buildQuestions({city, services}) -> string[]` (4 items)
  - `wrapResearchPrompt(query, industryNoun) -> string`
  - `extractCitations(response) -> {url, domain, title}[]`
  - `cleanUrl(url) -> string`
  - `domainOf(url) -> string`
  - `rankGaps(perPrompt, ownDomain) -> {domain, promptCount, citeCount}[]`

  Task 8 (the handler) imports all six.

- [ ] **Step 1: Write the failing tests**

Create `tests/prompts.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildQuestions, wrapResearchPrompt } from '../api/lib/prompts.js';

test('builds exactly four questions', () => {
  const qs = buildQuestions({ city: 'Bangkok', services: 'dental implants, veneers' });
  assert.equal(qs.length, 4);
});

test('questions include the city and the first service', () => {
  const qs = buildQuestions({ city: 'Bangkok', services: 'dental implants, veneers' });
  assert.ok(qs.every((q) => q.includes('Bangkok')));
  assert.ok(qs[0].includes('dental implants'));
});

test('falls back to the first service when only one is given', () => {
  const qs = buildQuestions({ city: 'Phuket', services: 'physiotherapy' });
  assert.equal(qs.length, 4);
  assert.ok(qs[3].includes('physiotherapy'));
});

test('wrapped prompt asks for websites, not businesses', () => {
  const w = wrapResearchPrompt('best clinic in Bangkok', 'clinics');
  assert.ok(w.includes('Do NOT list clinics'));
  assert.ok(w.includes('best clinic in Bangkok'));
});
```

Create `tests/citations.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractCitations, cleanUrl, domainOf, rankGaps } from '../api/lib/citations.js';

test('strips the openai utm parameter', () => {
  assert.equal(cleanUrl('https://a.com/x?utm_source=openai'), 'https://a.com/x');
});

test('keeps other query parameters', () => {
  assert.equal(cleanUrl('https://a.com/x?page=2'), 'https://a.com/x?page=2');
});

test('extracts the domain without www', () => {
  assert.equal(domainOf('https://www.expatden.com/thailand/guide'), 'expatden.com');
});

test('pulls url_citation annotations out of a response', () => {
  const response = {
    output: [{
      type: 'message',
      content: [{
        type: 'output_text',
        annotations: [
          { type: 'url_citation', url: 'https://a.com/1?utm_source=openai', title: 'A' },
          { type: 'other', url: 'https://ignore.me' },
          { type: 'url_citation', url: 'https://b.com/2', title: 'B' },
        ],
      }],
    }],
  };
  const cites = extractCitations(response);
  assert.equal(cites.length, 2);
  assert.equal(cites[0].url, 'https://a.com/1');
  assert.equal(cites[0].domain, 'a.com');
  assert.equal(cites[1].title, 'B');
});

test('returns an empty array when there are no annotations', () => {
  assert.deepEqual(extractCitations({ output: [] }), []);
});

test('ranks gaps by prompt count then citation count, excluding the own domain', () => {
  const perPrompt = [
    { citations: [{ domain: 'a.com' }, { domain: 'b.com' }, { domain: 'mine.com' }] },
    { citations: [{ domain: 'a.com' }, { domain: 'c.com' }] },
    { citations: [{ domain: 'a.com' }, { domain: 'b.com' }] },
  ];
  const gaps = rankGaps(perPrompt, 'mine.com');
  assert.equal(gaps[0].domain, 'a.com');
  assert.equal(gaps[0].promptCount, 3);
  assert.equal(gaps[1].domain, 'b.com');
  assert.ok(!gaps.some((g) => g.domain === 'mine.com'));
});
```

- [ ] **Step 2: Run to confirm failure**

Run: `npm test`
Expected: FAIL — cannot find `../api/lib/prompts.js`.

- [ ] **Step 3: Implement `api/lib/prompts.js`**

```js
/**
 * BOFU question generation and research-prompt wrapping.
 * The wrapper is load-bearing: sending a raw query returns Google Maps links
 * instead of real web citations. Validated 2026-04-23.
 */

export function buildQuestions({ city, services }) {
  const list = String(services || '').split(',').map((s) => s.trim()).filter(Boolean);
  const primary = list[0] || 'your service';
  const secondary = list[1] || primary;
  return [
    `best clinic for ${primary} in ${city}`,
    `how much does ${primary} cost in ${city}`,
    `${primary} in ${city} — which provider do expats use`,
    `most trusted ${secondary} provider in ${city}`,
  ];
}

export function wrapResearchPrompt(query, industryNoun) {
  return (
    `Search the web and find me: blogs, guides, directories, listicle articles, ` +
    `and review sites that cover "${query}". ` +
    `For each source you find, give me the URL and the site name. ` +
    `Do NOT list ${industryNoun} — list the WEBSITES AND ARTICLES that write about this topic.`
  );
}
```

- [ ] **Step 4: Implement `api/lib/citations.js`**

```js
/** Citation extraction from the OpenAI Responses API, and gap ranking. */

export function cleanUrl(url) {
  try {
    const u = new URL(url);
    u.searchParams.delete('utm_source');
    const qs = u.searchParams.toString();
    return `${u.origin}${u.pathname}${qs ? `?${qs}` : ''}`;
  } catch {
    return url;
  }
}

export function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

export function extractCitations(response) {
  const out = [];
  for (const item of response?.output || []) {
    if (item.type !== 'message') continue;
    for (const c of item.content || []) {
      if (c.type !== 'output_text') continue;
      for (const ann of c.annotations || []) {
        if (ann.type !== 'url_citation') continue;
        const url = cleanUrl(ann.url);
        out.push({ url, domain: domainOf(url), title: ann.title || '' });
      }
    }
  }
  return out;
}

export function rankGaps(perPrompt, ownDomain) {
  const own = String(ownDomain || '').replace(/^www\./, '').toLowerCase();
  const acc = new Map();
  perPrompt.forEach((p) => {
    const seenThisPrompt = new Set();
    (p.citations || []).forEach(({ domain }) => {
      if (!domain || domain.toLowerCase() === own) return;
      const row = acc.get(domain) || { domain, promptCount: 0, citeCount: 0 };
      row.citeCount += 1;
      if (!seenThisPrompt.has(domain)) { row.promptCount += 1; seenThisPrompt.add(domain); }
      acc.set(domain, row);
    });
  });
  return [...acc.values()].sort(
    (a, b) => b.promptCount - a.promptCount || b.citeCount - a.citeCount
  );
}
```

- [ ] **Step 5: Run the tests**

Run: `npm test`
Expected: PASS — 14 tests total (4 anonymisation + 4 prompts + 6 citations).

- [ ] **Step 6: Commit**

```bash
git add api/lib tests/prompts.test.js tests/citations.test.js
git commit -m "feat: add citation gap prompt and extraction logic"
```

---

### Task 8: Rate limiting and the API handler

**Files:**
- Create: `api/lib/limits.js`
- Create: `api/citation-gap.js`

**Interfaces:**
- Consumes: everything from `api/lib/prompts.js` and `api/lib/citations.js`.
- Produces: `POST /api/citation-gap`, streaming Server-Sent Events. Task 9's UI consumes it.

- [ ] **Step 1: Provision Upstash**

In the Vercel dashboard for project `locullywebsite`: Storage → Marketplace → Upstash Redis → create a free database and connect it. This injects `KV_REST_API_URL` and `KV_REST_API_TOKEN` into the project's environment. Then pull them locally:

```bash
vercel env pull .env.local
```

Also add `OPENAI_API_KEY` in the Vercel dashboard (value is in `~/.claude/locully_env`). **Never commit any of these.** Confirm `.env.local` is git-ignored before continuing:

```bash
git check-ignore .env.local && echo "ignored — safe"
```

- [ ] **Step 2: Implement `api/lib/limits.js`**

```js
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

const MONTHLY_CAP = 400;          // ≈ $40–80 at $0.10–0.20 per run
const IP_LIMIT = 3;               // per rolling 24h
const DAY = 60 * 60 * 24;

function monthKey() {
  const d = new Date();
  return `cg:month:${d.getUTCFullYear()}-${d.getUTCMonth() + 1}`;
}

/**
 * Returns { ok: true } or { ok: false, reason: 'email' | 'ip' | 'capacity' }.
 * Counters increment only when the run is allowed.
 */
export async function checkAndConsume({ email, ip }) {
  const emailKey = `cg:email:${String(email).toLowerCase().trim()}`;
  if (await redis.get(emailKey)) return { ok: false, reason: 'email' };

  const ipKey = `cg:ip:${ip}`;
  const ipCount = Number(await redis.get(ipKey)) || 0;
  if (ipCount >= IP_LIMIT) return { ok: false, reason: 'ip' };

  const used = Number(await redis.get(monthKey())) || 0;
  if (used >= MONTHLY_CAP) return { ok: false, reason: 'capacity' };

  await redis.set(emailKey, 1, { ex: DAY * 365 });
  await redis.incr(ipKey);
  await redis.expire(ipKey, DAY);
  await redis.incr(monthKey());
  return { ok: true };
}
```

- [ ] **Step 3: Implement `api/citation-gap.js`**

```js
import OpenAI from 'openai';
import { buildQuestions, wrapResearchPrompt } from './lib/prompts.js';
import { extractCitations, rankGaps, domainOf } from './lib/citations.js';
import { checkAndConsume } from './lib/limits.js';

const FORMSPREE = 'https://formspree.io/f/mbdzjegj';

const DENIED = {
  email: 'You have already used your free audit. Reply to the report email and we will run a full one.',
  ip: 'That is three audits from this connection today. Try again tomorrow.',
  capacity: "We have hit this month's free-audit budget. Leave your email and we will run yours when it resets.",
};

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const { url, city, services, email, questions } = req.body || {};
  if (!url || !city || !services || !email) {
    return res.status(400).json({ error: 'url, city, services and email are all required' });
  }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  const gate = await checkAndConsume({ email, ip });
  if (!gate.ok) return res.status(429).json({ error: DENIED[gate.reason], reason: gate.reason });

  // Notify Sunny + capture the lead. Never block the run on this.
  fetch(FORMSPREE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ email, url, city, services, source: 'citation-gap-tool', _subject: 'Citation Gap Audit — free run' }),
  }).catch(() => {});

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
  });
  const send = (event, data) => res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const qs = Array.isArray(questions) && questions.length ? questions.slice(0, 4) : buildQuestions({ city, services });
  const industryNoun = String(services).split(',')[0].trim() + ' providers';
  const ownDomain = domainOf(url.startsWith('http') ? url : `https://${url}`);

  const perPrompt = [];
  try {
    for (let i = 0; i < qs.length; i++) {
      send('progress', { index: i, status: 'running', question: qs[i] });
      const response = await client.responses.create({
        model: 'gpt-4o',
        tools: [{ type: 'web_search_preview' }],
        input: wrapResearchPrompt(qs[i], industryNoun),
      });
      const citations = extractCitations(response);
      const cited = citations.some((c) => c.domain === ownDomain);
      perPrompt.push({ question: qs[i], citations, cited });
      send('progress', { index: i, status: 'done', count: citations.length, cited });
    }
    send('result', {
      ownDomain,
      citedCount: perPrompt.filter((p) => p.cited).length,
      total: perPrompt.length,
      perPrompt,
      gaps: rankGaps(perPrompt, ownDomain),
    });
  } catch (err) {
    send('failed', { error: 'The search stalled partway through. Your free run has not been used — try again in a minute.' });
  }
  res.end();
}
```

- [ ] **Step 4: Test the endpoint locally**

Run `vercel dev` (not `npm run dev` — Vite alone does not serve `api/`), then:

```bash
curl -N -X POST http://localhost:3000/api/citation-gap \
  -H 'Content-Type: application/json' \
  -d '{"url":"https://example.com","city":"Bangkok","services":"dental implants","email":"test+1@locully.org"}'
```

Expected: a stream of `event: progress` lines, one pair per question, then one `event: result` carrying `perPrompt` and `gaps`. Takes 45–90 seconds.

- [ ] **Step 5: Test that the limits bite**

Re-run the exact same curl with the same email.
Expected: HTTP 429 and `"reason":"email"`.

- [ ] **Step 6: Commit**

```bash
git add api/lib/limits.js api/citation-gap.js
git commit -m "feat: add citation gap API with rate limiting"
```

---

### Task 9: The tool UI

**Files:**
- Create: `src/components/CitationGapTool.jsx`

**Interfaces:**
- Consumes: `POST /api/citation-gap`.
- Produces: default export `CitationGapTool` (no props). Task 11 mounts it.

- [ ] **Step 1: Build the component**

Five states — `input`, `prompts`, `email`, `running`, `results` — matching the approved mockup. Port the markup and the state machine from the mockup (https://claude.ai/code/artifact/bae09c9e-fa8a-47ba-9df8-c1fef997a944), swapping the fabricated data for the live SSE stream.

Key requirements:
- Prompt generation happens **client-side** using the same four templates as `buildQuestions` — no API call is spent before the user confirms.
- Questions are editable inputs; the edited array posts back as `questions`.
- The `running` state renders one row per question, updating on each `progress` event.
- On a 429, show the server's `error` string verbatim — the copy is already written for the user.
- On `failed`, show the server's message and return to the `input` state.

Parse the SSE stream with:

```jsx
const res = await fetch('/api/citation-gap', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url, city, services, email, questions }),
});
if (res.status === 429) {
  const { error } = await res.json();
  setBlocked(error);
  return;
}
const reader = res.body.getReader();
const decoder = new TextDecoder();
let buf = '';
for (;;) {
  const { value, done } = await reader.read();
  if (done) break;
  buf += decoder.decode(value, { stream: true });
  const chunks = buf.split('\n\n');
  buf = chunks.pop();
  for (const chunk of chunks) {
    const ev = chunk.match(/^event: (.+)$/m)?.[1];
    const data = JSON.parse(chunk.match(/^data: (.+)$/m)?.[1] || '{}');
    if (ev === 'progress') updateRow(data);
    if (ev === 'result') { setResult(data); setState('results'); }
    if (ev === 'failed') { setError(data.error); setState('input'); }
  }
}
```

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Run it end to end**

With `vercel dev` running, complete a full audit in the browser: enter a real site, edit one question, submit an unused email, watch the four rows resolve, and confirm the gap table renders sorted by prompt count.

- [ ] **Step 4: Commit**

```bash
git add src/components/CitationGapTool.jsx
git commit -m "feat: add citation gap tool UI"
```

---

### Task 10: Proof gallery and chart

**Files:**
- Create: `src/components/CitationChart.jsx`
- Create: `src/components/ProofGallery.jsx`
- Create: `src/data/resourcesData.js`

**Interfaces:**
- Consumes: `src/data/trackingSample.json`, `public/samples/*.html`.
- Produces: default exports `CitationChart` (props: `{ data }`) and `ProofGallery` (no props).

- [ ] **Step 1: Write `src/data/resourcesData.js`**

Exhibit captions and download copy. Four exhibits: `geo-audit`, `citation-gap`, `monthly-report`, `tracking`. Each with `kind`, `title`, `blurb`, and either `href` (the two HTML samples, opened in a modal iframe) or `component` (the citation-gap table and the chart, rendered natively). Copy is in the mockup — reuse it verbatim. **No client names.**

- [ ] **Step 2: Build `CitationChart.jsx`**

Multi-series line chart from `trackingSample.json`. Requirements from Global Constraints and the dataviz rules:
- One y-axis. Never two.
- Series colours in fixed order; light/dark token pairs as specified.
- Endpoint direct-labels for all three series, plus a legend.
- Hover crosshair + tooltip showing all three values at that week.
- `font-variant-numeric: tabular-nums` on every number.
- Recessive grid, 2px lines, ≥8px endpoint markers with a 2px surface ring.
- `role="img"` with an `aria-label` describing the trend in words.

- [ ] **Step 3: Build `ProofGallery.jsx`**

Four cards in a 2×2 grid; click opens a modal. HTML samples load in an `<iframe src="/samples/...">` sized to the modal; native exhibits render their component. Modal closes on Escape, on backdrop click, and via a close button. No download buttons anywhere.

- [ ] **Step 4: Run the gate — these files are in the scanned globs**

Run: `npm run check:anon`
Expected: `✓ anonymisation clean`

- [ ] **Step 5: Commit**

```bash
git add src/components/CitationChart.jsx src/components/ProofGallery.jsx src/data/resourcesData.js
git commit -m "feat: add proof gallery and citation chart"
```

---

### Task 11: Assemble `/resources` and wire it into the site

**Files:**
- Create: `src/pages/ResourcesPage.jsx`
- Modify: `src/App.jsx`
- Modify: `tools/generate-sitemap.js`
- Modify: `src/components/LeadMagnetPopup.jsx:11-13,35-38`
- Modify: `src/components/Nav.jsx`

**Interfaces:**
- Consumes: `CitationGapTool`, `ProofGallery`, `resourcesData`.

- [ ] **Step 1: Build the page**

Three zones in order — hero + `CitationGapTool`, then `ProofGallery`, then the downloads zone (the existing stats PDF behind an email field posting to Formspree, plus the "next up" placeholder card for the listicle playbook). Copy comes from the mockup. Add `Helmet` with title, description, canonical `https://www.locully.org/resources`, and a `Service` + `BreadcrumbList` JSON-LD pair following the Task 4 pattern.

- [ ] **Step 2: Register the route**

In `src/App.jsx`:

```jsx
import ResourcesPage from '@/pages/ResourcesPage';
```

```jsx
<Route path="/resources" element={<ResourcesPage />} />
```

- [ ] **Step 3: Add to the sitemap**

In `tools/generate-sitemap.js`, add after the `/audit` entry:

```js
  { path: '/resources',            priority: '0.8', changefreq: 'monthly' },
```

- [ ] **Step 4: Repoint the popup**

In `src/components/LeadMagnetPopup.jsx`, replace the direct-PDF delivery with a link to the hub. Change the `PDF_URL` constant and the `downloadPdf` call so that on successful submit the user is sent to `/resources` instead of triggering a file download, and update the modal copy from "AI Search Statistics 2026 — PDF download" to point at the full resource hub. This removes the second competing lead capture identified in the spec.

- [ ] **Step 5: Add "Resources" to the nav**

In `src/components/Nav.jsx`, add to the desktop list and the mobile panel:

```jsx
        <li><Link to="/resources">Free Tools</Link></li>
```

```jsx
          <Link to="/resources">Free Tools</Link>
```

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: PASS — the anonymisation gate reports clean, the sitemap gains `/resources`, and prerender renders it.

- [ ] **Step 7: Confirm the page prerendered with content**

Run: `grep -c "Citation Gap" dist/resources/index.html`
Expected: ≥ 1.

- [ ] **Step 8: Commit**

```bash
git add src/pages/ResourcesPage.jsx src/App.jsx tools/generate-sitemap.js src/components/LeadMagnetPopup.jsx src/components/Nav.jsx
git commit -m "feat: assemble /resources hub and wire into site"
```

---

### Task 12: Pre-launch verification

**Files:** none created — this task is the gate.

- [ ] **Step 1: Full test suite**

Run: `npm test`
Expected: PASS — 14 tests.

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 3: Anonymisation gate, one more time**

Run: `npm run check:anon`
Expected: `✓ anonymisation clean`

- [ ] **Step 4: Responsive check at three widths**

With `npm run preview` running, check `/audit`, `/resources`, `/samples/geo-audit-sample.html` and `/samples/monthly-report-sample.html` at 390px, 768px and 1440px. Required: no horizontal scroll on `body` at 390px on any of the four; tables scroll inside their own container; the chart is legible or scrolls sideways within its wrapper.

The repo already has a layout checker for exactly this — reuse it rather than eyeballing:

```bash
node /Users/sunny/Projects/locully/templates/qa/visual-qa.js dist/audit/index.html --widths 390,768,1440
node /Users/sunny/Projects/locully/templates/qa/visual-qa.js dist/resources/index.html --widths 390,768,1440
```

Expected: exit 0 for both.

- [ ] **Step 5: Verify no secrets are staged**

Run:

```bash
git diff origin/main --stat && git log origin/main..HEAD --oneline
grep -rn "sk-\|KV_REST_API_TOKEN\|OPENAI_API_KEY=" src/ api/ public/ && echo "SECRET FOUND — STOP" || echo "no secrets in tracked source"
```

Expected: `no secrets in tracked source`.

- [ ] **Step 6: Confirm the price with Sunny**

`AUDIT_PRICE` in `src/data/auditData.js` is currently the assumed ฿25,000. **Do not merge until Sunny confirms or replaces it.**

- [ ] **Step 7: Merge and deploy**

Only after Sunny's explicit go-ahead:

```bash
git checkout main && git merge --no-ff feat/audit-and-resources
git push origin main
```

Vercel auto-builds and deploys. Watch the build log; the anonymisation gate runs there too and will fail the deploy rather than ship a client name.

- [ ] **Step 8: Post-deploy smoke check**

Confirm live: `https://www.locully.org/audit` renders, `https://www.locully.org/resources` renders, one real run of the tool completes end to end, and `https://www.locully.org/sitemap.xml` lists both new URLs.

---

## Self-Review

**Spec coverage:** Zone A → Tasks 7, 8, 9. Zone B → Tasks 6, 10. Zone C → Task 11. Anonymisation gate → Task 5, re-run in 6, 10, 12. Site integration (route, sitemap, prerender, nav, popup) → Task 11. Rate limiting + Upstash → Task 8. Analytics — GTM/Pixel/Clarity already load site-wide from `index.html`; no per-page work needed, and the spec's named events are left for a follow-up since they need GTM container edits outside this repo. Success criteria → Task 12.

**Placeholders:** none. Every code step carries real code. Task 6's chart data is the one genuine unknown, and it is handled with an explicit blocker check and a sanctioned fallback (drop the exhibit) rather than a "TBD".

**Type consistency:** `buildQuestions`, `wrapResearchPrompt`, `extractCitations`, `cleanUrl`, `domainOf`, `rankGaps`, `checkAndConsume`, `checkPaths` are used in Tasks 8, 9 and 12 exactly as defined in Tasks 5 and 7. The SSE event names `progress` / `result` / `failed` match between Task 8's handler and Task 9's reader.

**Known gap, stated rather than hidden:** the spec lists six GTM analytics events. They require changes in the GTM container, not this repo, so no task claims them. Raise separately.
