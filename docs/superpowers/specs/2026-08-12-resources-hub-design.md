# /resources — Free SEO & AI Visibility Resources Hub

**Date:** 2026-08-12
**Owner:** Sunny / Locully
**Repo:** `locullywebsite`
**Status:** Design approved, ready for implementation planning
**Mockup:** https://claude.ai/code/artifact/bae09c9e-fa8a-47ba-9df8-c1fef997a944

---

## 1. Purpose

Launch a free-resources hub on locully.org that does three jobs at once:

1. **Capture leads** — email list growth from both business owners and SEO peers.
2. **Prove the work** — show real Locully deliverables, anonymised, so prospects see quality before a sales call.
3. **Create a reason to reply** — the free Citation Gap Audit hands a prospect a concrete, uncomfortable finding ("ChatGPT cited 17 pages about your topic; none were yours") and a ranked list of what to do about it.

**Audience:** two tracks, one page. Bangkok business owners (primary — they buy retainers) and SEO/marketing peers (secondary — they share). Content is tagged by track; the page is not split.

---

## 2. Scope

**Route:** `/resources`
**Page title:** Free SEO & AI Visibility Resources
**Hero headline:** "Find out who ChatGPT recommends instead of you."

Three zones, in this order:

| Zone | Contents | Gated |
|---|---|---|
| A — The tool | Citation Gap Audit (interactive, self-serve) | Email before results |
| B — Proof gallery | 4 anonymised real deliverables, view-only | Open, indexable |
| C — Downloads | AI Search Statistics 2026 PDF | Email |

**Gating principle:** gate what costs money or leaves the site. The proof gallery stays open — it is the SEO and AI-citation asset, and gating it would hide the proof from Google and from the AI engines Locully wants citing this page.

### Out of scope for v1

- AI Listicle Playbook (PDF + skill file) — deferred to v2 by decision.
- Any skill-library zip. See §8.
- Brevo integration. Formspree only for v1.
- Any client-named data anywhere on the page.

---

## 3. Zone A — Citation Gap Audit tool

The centrepiece. A self-serve version of the existing `locully-citation-gap-audit` skill, cut from 40 prompts to 4.

### 3.1 User flow

Five states in one console panel:

1. **Input** — three fields: Website URL, City, Main services (free text).
2. **Prompts** — 4 generated BOFU questions displayed and editable before running. Showing the generated prompts is deliberate: watching the tool reason is half the perceived value, and it lets the user correct a bad inference before a paid API call is spent.
3. **Email gate** — email captured before results render.
4. **Running** — per-prompt progress, one row per question, resolving live. Expect 45–90s total.
5. **Results** — see §3.3.

### 3.2 Backend

**Endpoint:** `POST /api/citation-gap` — new `api/` directory in `locullywebsite`, Vercel Node function (Fluid Compute default, Node.js runtime — not edge).

**Method** (ported verbatim from `~/.claude/skills/locully-citation-gap-audit/SKILL.md`, validated 2026-04-23):

- OpenAI **Responses API**, `client.responses.create()`
- Model `gpt-4o`, tool `web_search_preview`
- **Do not** use `gpt-4o-search-preview` via chat completions — returns Google Maps links, not real web citations
- Prompts must be **wrapped** as research prompts, never sent raw:
  > Search the web and find me: blogs, guides, directories, listicle articles, and review sites that cover "{query}". For each source, give me the URL and the site name. Do NOT list {businesses} — list the WEBSITES AND ARTICLES that write about this topic.
- Industry noun in the wrapper derived from the "Main services" field
- Citations extracted from `url_citation` annotations on `response.output[].content[].annotations`
- Strip `?utm_source=openai` from every URL before storing or displaying

**Prompt generation:** a separate, cheap LLM call converts (URL, city, services) into 4 BOFU questions. Returned to the client for display and editing before any search runs.

**Streaming:** results stream per-prompt so the running state updates as each completes. Server-Sent Events on the Node runtime (no edge runtime needed).

**Response shape:** per prompt — the question, the ordered list of cited sources (domain, page title, URL), and whether the user's domain appeared. Plus an aggregated gap list.

### 3.3 Results view

- **Verdict block** — headline stat: "You were cited in 0 of 4." Count of pages cited, count mentioning a competitor.
- **Per-prompt blocks** — each question with its cited sources in the order ChatGPT returned them, and a present/absent flag for the user's domain.
- **Gap list table** — the payoff. Sites that ChatGPT trusts on this topic and that do not mention the user, ranked by citation frequency. Columns: site, cited for (n of 4 questions), times cited, mentions a competitor, priority. This ranked list is the outreach order and the reason a prospect replies.
- **CTA** — "Get the full 40-prompt audit" → contact.

### 3.4 Abuse and cost control

Each run costs roughly $0.10–0.20 (4–5 web-search calls on gpt-4o). Controls:

| Control | Rule |
|---|---|
| Email gate | Results not rendered until an email is submitted |
| Per email | 1 free run |
| Per IP | 3 runs per rolling 24 hours |
| Global | Monthly spend cap; on breach the tool shows a waitlist message instead of running |

**State store:** Upstash Redis, provisioned through the Vercel Marketplace. Free tier is sufficient. Atomic counters for per-email, per-IP and global caps. (Vercel KV no longer exists.)

**Email delivery:** POST to the existing Formspree endpoint (`https://formspree.io/f/mbdzjegj`), tagged with source and asset so signups are distinguishable from contact-form submissions.

---

## 4. Zone B — Proof gallery

Four exhibits, all view-only, no download button, no PDF.

| Exhibit | Source material | Render method |
|---|---|---|
| GEO audit | One of the 10 real audits in `audits/` | Redacted HTML, full-screen modal |
| Citation gap report | `outputs/citation-gap-happily-2026-06-24/` xlsx | Filterable table, native component |
| Monthly client report | `templates/report-deck.html` + a real monthly report | Redacted HTML, full-screen modal |
| Citation tracking | `~/.claude/skills/geo-tracking/history.csv` + Amplitude | Native interactive chart, static baked JSON |

Each exhibit carries a caption stating what it is and what it found.

### 4.1 Anonymisation — mandatory, verified

- Every client and prospect name removed. Replaced with a descriptor: "Bangkok fertility clinic", "restaurant group, 3 venues".
- Every client domain removed, including in screenshots, URLs, chart labels and file names.
- **All numbers and findings stay real.** Anonymised does not mean fictionalised.
- **Verification gate:** before anything ships, grep every redacted artefact for all client and prospect names and domains from `wiki/locully/agency.md` (form, cosmo, achyut, jdc, iron, opera, valuation, ic, askai, gfc, icj, egn) plus their domains. Zero hits required. This is a build step, not a review step.

### 4.2 Charts

Static anonymised snapshot — real numbers pulled once, client identifiers stripped, baked as JSON in the repo. No API keys client-side, no ongoing cost, no dependency on a live service for the marketing site to render.

**Validated categorical palette** (3 series: ChatGPT, Perplexity, Gemini — fixed order, never cycled):

- Light (surface `#F8F6F3`): `#CC6432`, `#2B6CB0`, `#2D7A4F`
- Dark (surface `#211710`): `#DE6E37`, `#4A8FCC`, `#3E9A6B`

Both sets pass lightness band, chroma floor, CVD adjacent separation, normal-vision floor and contrast-vs-surface. Series are also direct-labelled at the endpoint, so identity never depends on colour alone. Charts ship with a hover crosshair and tooltip.

**Known data gap:** `history.csv` currently holds 13 rows — 2 brands, 5 queries, March 2026 only. A fuller export is required before the chart is worth showing, or the exhibit is cut from v1.

---

## 5. Zone C — Downloads

- **AI Search Statistics 2026** — existing PDF at `public/locully-ai-search-statistics-2026.pdf`. Email-gated via the existing Formspree endpoint.
- **AI Listicle Playbook** — shown as a "next up" placeholder card. Not built in v1.

---

## 6. Site integration

| Change | Detail |
|---|---|
| Route | `/resources` added to `src/App.jsx` |
| Page component | `src/pages/ResourcesPage.jsx` |
| Sitemap | `/resources` added to `STATIC_PAGES` in `tools/generate-sitemap.js` |
| Prerender | Automatic — `tools/prerender.cjs` reads routes from the sitemap, and the build fails if a route doesn't render |
| Nav | "Resources" added to `src/components/Nav.jsx` |
| Popup | `src/components/LeadMagnetPopup.jsx` repointed from the single PDF to `/resources` |
| API | New `api/` directory (first in this repo) |
| llms.txt | Regenerated by the existing build step |

**Design system:** existing Locully tokens only — terra `#CC6432`, ink `#1A1108`, bg2 `#F8F6F3`, surface `#F0EDE8`, bdr `#E2DDD6`; Fraunces / DM Sans / DM Mono. No new palette. The chart series colours in §4.2 extend the system for data encoding only.

---

## 7. Analytics

Existing GTM (`GTM-K5DX47SL`), Meta Pixel and Clarity already load site-wide. Events to fire: tool started, prompts generated, email submitted, audit completed, gap-list CTA clicked, PDF requested.

---

## 8. Decision record — skills library not shipped

The original plan was to bundle the `*-cft` skills into a zip, rebranded as Locully, as the flagship peer-track download. **Dropped.**

`~/.claude/skills/*-cft/` is Charles Floate's library. `self-audit-qa-gate-cft/SKILL.md` checks whether output "sounds like Charles", references his rejected tools, his known positions and PressWhizz. Rebranding and publishing those files is redistributing third-party work with the byline changed.

**Replacement:** ship only skills Sunny authored, and only when their owner-facing wrapper exists. v2 candidates: `locully-aio-listicle-keval` (credit Keval for the listicle format) and `locully-citation-gap-audit` (which v1 already productises as the free tool).

---

## 9. Risks

| Risk | Mitigation |
|---|---|
| A client name survives anonymisation | Automated grep gate over all client names and domains, run as a build step; zero hits required to ship |
| Tool cost runs away | Email gate + per-email limit + IP throttle + global monthly cap with waitlist fallback |
| 45–90s runtime feels broken | Per-prompt streaming progress, not a spinner; expected duration stated up front |
| Tracking chart looks empty (13 rows) | Pull a fuller export before launch, or cut the exhibit from v1 |
| OpenAI method drifts | Method is pinned to the validated 2026-04-23 recipe; the `gpt-4o-search-preview` trap is documented in §3.2 |
| Two competing lead captures | Popup repointed to `/resources` rather than left running against the hub |

---

## 10. Success criteria

- `/resources` live, in the sitemap, prerendered, and passing the build.
- A stranger can complete a citation gap audit end to end without help and see a ranked gap list.
- Zero client names or domains anywhere in the shipped page or its assets.
- Emails land in Formspree, tagged by which asset triggered them.
- Page renders correctly at 390px, 768px and 1440px.
