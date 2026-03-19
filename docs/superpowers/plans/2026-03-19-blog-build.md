# Blog Build Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a 7-post blog at `/blog/` with full SEO, internal linking, and ContactForm CTA on every post.

**Architecture:** Data-driven JSX posts in `blogData.jsx`, rendered by shared `BlogPostPage.jsx` template, listed on `BlogIndexPage.jsx`. Routes added to App.jsx. Footer updated with Blog link.

**Tech Stack:** Vite + React SPA, react-router-dom, react-helmet, framer-motion, locully-design.css classes.

---

### Files

| Action | Path |
|--------|------|
| Create | `src/data/blogData.jsx` |
| Create | `src/pages/BlogIndexPage.jsx` |
| Create | `src/pages/BlogPostPage.jsx` |
| Modify | `src/App.jsx` — add `/blog/` and `/blog/:slug/` routes |
| Modify | `src/components/Footer.jsx` — add Blog column link |

### Posts (7 total)

| Slug | Title |
|------|-------|
| `ai-search-optimization-clinics-thailand` | AI Search Optimization for Clinics in Thailand: The 2026 Guide |
| `why-clinic-not-showing-chatgpt` | Why Your Clinic Doesn't Appear in ChatGPT Results |
| `how-chatgpt-chooses-clinic-recommendation` | How ChatGPT Decides Which Clinic to Recommend |
| `ai-optimization-dental-clinics-thailand` | AI Optimization for Dental Clinics in Thailand |
| `geo-vs-seo-clinics-bangkok` | GEO vs SEO for Clinics: What Bangkok Clinic Owners Actually Need |
| `ai-search-audit-clinic-bangkok` | The AI Search Audit Every Bangkok Clinic Should Run |
| `how-to-choose-ai-optimization-agency-clinic-thailand` | What to Look for in an AI Optimization Agency for Your Clinic |

### Tasks

- [ ] Task 1: Create `src/data/blogData.jsx` with all 7 posts
- [ ] Task 2: Create `src/pages/BlogPostPage.jsx` template
- [ ] Task 3: Create `src/pages/BlogIndexPage.jsx` listing page
- [ ] Task 4: Update `src/App.jsx` with blog routes
- [ ] Task 5: Update `src/components/Footer.jsx` with blog link
