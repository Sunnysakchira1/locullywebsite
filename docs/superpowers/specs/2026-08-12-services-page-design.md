# Design — `/services` hub + three service detail pages

**Date:** 2026-08-12
**Repo:** `locullywebsite` (React 18 + Vite + React Router v7 + Tailwind + Framer Motion)
**Status:** Approved for planning

---

## Problem

Locully sells four things. The website surfaces one and a half of them.

- `/ai-search-visibility` sells SEO & AI Optimization.
- `/lead-gen-partner` sells **fairs & expo marketing** — despite the URL, it is not a growth-partner page.
- Performance Marketing (Meta + Google Ads) has no page, despite being the service five active clients buy.
- Podcast Editing has no page at all.

Nav's "Services" link points at `/ai-search-visibility`, so a visitor who clicks "Services" sees one service and assumes that is the whole agency.

## Goal

A `/services` hub that presents all four services with equal weight, each routing to a real detail page, with one shared CTA path to a call. No pricing on any page.

---

## Information architecture

| Card | Route | Build state |
|---|---|---|
| SEO & AI Optimization | `/ai-search-visibility` | Exists — link only, no changes |
| Growth Partner for Brands | `/growth-partner` | New page |
| Performance Marketing | `/performance-marketing` | New page |
| Podcast Editing | `/podcast-editing` | New page |

**Nav change:** `Nav.jsx` "Services" link moves from `/ai-search-visibility` to `/services`, desktop and mobile.

**Event marketing:** the existing expo page is renamed to `/event-marketing-thailand` (see below). It is a real offer (Investors Clinic) but a different buyer from the four above, so it is linked from the footer only, not from the `/services` grid.

**Ship together.** The hub links to three pages that do not exist yet, so all four pages land in one release. No cards pointing at 404s.

---

## Page: `/services`

Component: `src/pages/ServicesPage.jsx`. Built on the existing `l-` class system in `locully-design.css` — no new CSS framework, no new design tokens. Icons from `lucide-react`, motion from `framer-motion`, meta via `react-helmet`, matching `PackagesPage.jsx`.

### Sections, in order

1. **Hero** — eyebrow "What We Do", H1, one-sentence subhead, primary CTA to Calendly.
2. **Service grid** — 2×2, four equal cards. Every card carries the same six elements: icon, service name, one-line promise, three outcome bullets, a "Best for:" line, and an arrow link to its detail page. Equal size, equal styling, no visual ranking between them.
3. **Proof band** — Form Recovery & Wellness: 3 AI-sourced paid consultations in Oct 2025 → 27 in Mar 2026. Labelled as confirmed paid consultations, not leads. This is the only hard performance number used anywhere in this release.
4. **How we work** — four steps shared across all services: Audit → Plan → Build → Report.
5. **Who we work with** — clinics, restaurants & hospitality, property, founder brands.
6. **FAQ** — six Q&As with `FAQPage` JSON-LD. The agency that sells AI citability ships citable markup on its own services page.
7. **CTA band** — Calendly, `sunny@locully.org`, `+66 62 695 9444`.

### Card copy

Copy follows the house style: short sentences, active voice, benefit-led, no jargon.

**SEO & AI Optimization** → `/ai-search-visibility`
Promise: Get found on Google and get cited by ChatGPT.
Best for: Businesses whose customers research before they buy.

**Growth Partner for Brands** → `/growth-partner`
Promise: Your entire marketing function, run by us.
Best for: Brands with no in-house marketing team.

**Performance Marketing** → `/performance-marketing`
Promise: Paid campaigns that pay for themselves.
Best for: Businesses that need bookings this month.

**Podcast Editing** → `/podcast-editing`
Promise: Raw footage in. Finished episode and clips out.
Best for: Founders and brands publishing a show.

---

## Page: `/growth-partner`

Component: `src/pages/GrowthPartnerPage.jsx`.

A **distinct retainer product**, not a bundle discount. Locully becomes the brand's whole marketing function: owns the strategy, executes across SEO, AIO, paid and content, reports monthly, and gives the client direct access to Sunny. Sold on outcomes, not on a deliverables checklist.

Sections: hero → the problem (fragmented freelancers, no owner of the number) → what you get (strategy ownership, cross-channel execution, monthly reporting, direct access) → how a month runs → who it suits and who it does not → proof band → FAQ + schema → CTA.

The "who it does not suit" section is deliberate. It disqualifies price-shoppers before the call, which is the same job the pricing would have done if we were showing pricing.

---

## Page: `/performance-marketing`

Component: `src/pages/PerformanceMarketingPage.jsx`.

Scope: Meta Ads (Facebook/Instagram) and Google Ads (Search, Maps, Performance Max). Campaign build, audience and keyword strategy, creative testing, conversion tracking setup, monthly reporting.

Sections: hero → channels (Meta, Google) → what we set up (tracking first, then campaigns) → the testing loop → industries we run ads for → proof band → FAQ + schema → CTA.

**Conversion tracking is the lead differentiator**, positioned ahead of campaign management. Most Bangkok accounts we inherit have no working conversion tracking, which is why their reported numbers are fiction. Say that plainly.

---

## Page: `/podcast-editing`

Component: `src/pages/PodcastEditingPage.jsx`.

Scope confirmed: **edit + clips, no graphics package, no filming.**

Included: multi-part footage merge, filler and dead-air removal, B-roll, SFX, lower thirds, 4K render, audio master, captions, and short-form clip extraction for Reels/TikTok/Shorts.
Excluded and stated on the page: filming, thumbnail design, quote cards and carousels, and channel management.

Sections: hero → what you send / what you get back → what's included (edit + clips) → what's not included → turnaround → who it's for → CTA.

Credibility comes from TSN Talks — Sunny's own Thai-Indian business podcast, 27+ episodes across two seasons on YouTube, Spotify, Instagram and TikTok. The page states that this is the pipeline we built and run for our own show. No client testimonials are claimed for this service until real ones exist.

---

## Fix: `/lead-gen-partner` → `/event-marketing-thailand`

The URL says lead generation. The page sells fairs and expo marketing. Anyone landing from search or a shared link reads the URL before the H1 and forms the wrong expectation.

**This is the cheapest it will ever be to fix.** GSC, 90 days to 2026-08-11: the page has 63 impressions and 1 click, and 36 of those impressions are the branded query `locully` at position 1.0 — Google surfacing it as a brand result. The only non-branded query is `qualified leads marketing thailand`, 1 impression at position 39. There is no organic equity to lose.

**Slug rationale.** No variant — expo, exhibition, event, or trade show marketing Thailand — returns measurable Thai search volume. Only `trade show marketing agency` registers at all, and only globally (350/mo), which is consistent with the real buyer being a foreign brand researching from their home market before exhibiting here. Since no option wins on traffic, the slug is chosen for clarity: `event-marketing-thailand` matches the internal service name already used for Investors Clinic and covers fairs, expos, trade shows and property events without narrowing the page to exhibitors only.

**Changes:**

- `vercel.json` — add a permanent redirect from `/lead-gen-partner` to `/event-marketing-thailand`. This must be a server-side redirect, not a React Router `<Navigate>`; a client-side redirect returns HTTP 200 and passes no signal to Google. Vercel's `permanent: true` emits 308, which Google treats the same as 301.
- `src/App.jsx` — route becomes `/event-marketing-thailand`.
- `src/components/LeadGenPartnerPage.jsx` → `src/pages/EventMarketingPage.jsx`, moved to `pages/` to match the convention the other page components follow. Content unchanged apart from its canonical tag.
- Canonical tag in the page's `Helmet` updated to the new URL.
- Internal links in `Footer.jsx` and anywhere else `/lead-gen-partner` appears.
- Sitemap and `llms.txt` regenerate with the new URL; the old one is removed.

The existing host redirect stays first in the `redirects` array. A non-www hit on the old path costs two hops, which is acceptable.

## Constraints

- **No pricing anywhere.** Every CTA routes to the Calendly booking at `https://calendly.com/locully/30min`.
- **No fabricated metrics.** Form Recovery's 3 → 27 is the only performance figure in this release. Performance Marketing and Podcast Editing pages carry no invented percentages, ROAS figures, or client results.
- **No client names used as proof without permission.** Client work is described by category ("Bangkok restaurants", "wellness clinics"), not by named logo, until Sunny confirms each name individually.
- Contact details are `sunny@locully.org`, `+66 62 695 9444`, Bangkok, Thailand.

## Supporting changes

- `src/App.jsx` — four new routes, plus the renamed event marketing route.
- `src/components/Nav.jsx` — "Services" repointed to `/services` in both desktop list and mobile panel.
- `src/components/Footer.jsx` — services links added; event marketing kept here under its new URL.
- `vercel.json` — the `/lead-gen-partner` permanent redirect.
- `public/sitemap.xml` — four new URLs and the renamed one, generated by the existing tool.
- `tools/generate-llms.js` — new pages included in `llms.txt`.

## Out of scope

- Pricing, packages, or rate cards on any of these pages.
- Any change to `/ai-search-visibility`, `/packages`, or the homepage beyond navigation links.
- Rewriting the event marketing page's copy. This release renames its URL and moves the file; the content is untouched.
- A second, separate detail page for event marketing.
- Thai-language versions.

## Known issues found while speccing, not fixed here

- **Trailing-slash duplicates are indexed.** `/ai-optimization/beauty-clinics` and `/ai-optimization/beauty-clinics/` both appear in GSC as separate pages, at positions 4.2 and 37.3. The same split affects other clinic URLs. `App.jsx` handles this with client-side `<Navigate>`, which returns HTTP 200 and does not consolidate the duplicates for Google. The fix is server-side redirects in `vercel.json`, and it is a separate job.
- **`/packages` ranks at position 1.7 on 49 impressions with zero clicks.** A title and meta description problem, not a ranking problem.
- **www consolidation is already correct.** `locully.org` returns a 308 to `www.locully.org`. The non-www rows still in GSC are legacy and will resolve on their own. No action.

## Done when

All four new routes render, every hub card reaches a live page, nav and footer point at `/services`, `/lead-gen-partner` returns a 308 to `/event-marketing-thailand` in production, FAQ schema validates, the pages hold up at 390px / 768px / 1440px, and `npm run build` and `npm run lint` both pass.
