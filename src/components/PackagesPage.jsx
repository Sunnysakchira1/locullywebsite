import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import { Page, PageHero, Section, Button, Icon } from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Packages as PackagesIllo } from '@/brand/Illustrations';
import '@/brand/pages/misc.css';

const packages = [
  {
    id: 'content-writing',
    name: 'Content Writing',
    price: '฿39,900',
    tagline: '20 SEO/GEO/AIO articles',
    icon: 'doc',
    items: ['Optimized for Google + AI engines', 'Topical authority building', 'Internal linking structure'],
    description: 'A full content sprint — 20 long-form articles written specifically to rank in both traditional search and AI-generated answers (ChatGPT, Gemini, Google AI Overviews). Each article targets a high-intent keyword cluster and is structured so AI engines cite it as a source.',
    details: [
      { icon: 'bot', title: 'Written for AI Engines', body: 'Each article is structured with clear headings, factual statements, and citation-friendly formatting — the signals AI models like ChatGPT and Gemini use when deciding what to recommend.' },
      { icon: 'search', title: 'Google SEO Optimised', body: 'On-page SEO best practices baked in: target keywords, meta descriptions, schema-ready structure, and natural keyword density. Every article is built to rank.' },
      { icon: 'trend', title: 'Topical Authority', body: 'The 20 articles are planned as a cluster — not random posts. They cover your niche from multiple angles so Google and AI engines recognise you as the authority on the topic.' },
      { icon: 'layers', title: 'Internal Linking', body: 'All articles are interlinked strategically to pass authority between pages and guide visitors deeper into your site.' },
    ],
  },
  {
    id: 'backlink-package',
    name: 'Backlink Package',
    price: '฿49,900',
    tagline: '3 × DR50+ editorial backlinks',
    icon: 'link',
    items: ['3 × niche-relevant placements', 'Permanent do-follow links', 'Full report on all placements'],
    description: '3 high-authority editorial backlinks from DR50+ websites in your niche. Backlinks remain one of the strongest ranking signals for Google — and trusted links from relevant publications tell both Google and AI models that your brand is credible.',
    details: [
      { icon: 'shield', title: '3 × DR50+ Domain Rating', body: 'We only place links on websites with a Domain Rating of 50 or above — meaning they have real authority and pass real ranking power. No PBNs, no link farms.' },
      { icon: 'globe', title: 'Niche Relevant', body: 'Links are placed on websites topically relevant to your industry. A clinic gets placed on a health publication. Relevance multiplies impact.' },
      { icon: 'link', title: 'Permanent Do-Follow', body: 'The link is permanent and do-follow — meaning it continuously passes authority to your site and is never removed after a set period.' },
      { icon: 'doc', title: 'Full Placement Report', body: 'You receive a detailed report showing the exact page, anchor text used, domain metrics, and a screenshot of the live placement.' },
    ],
  },
  {
    id: 'premium-content',
    name: 'Premium Content Bundle',
    price: '฿79,900',
    tagline: '60 AI + Google optimized articles',
    icon: 'layers',
    items: ['Full topical authority cluster', 'GEO & AIO ready', 'Schema markup included'],
    description: '60 articles that comprehensively cover your entire niche. This is a full topical authority build — the kind of content strategy that makes Google and AI engines treat your site as the definitive resource in your space.',
    details: [
      { icon: 'layers', title: 'Full Topical Coverage', body: '60 articles are mapped across every relevant subtopic in your niche. When AI engines look for sources on your topic, your site is unavoidable.' },
      { icon: 'bot', title: 'GEO & AIO Optimised', body: 'Every article is formatted to be cited by ChatGPT, Gemini, Claude, and Google AI Overviews — not just ranked by traditional search.' },
      { icon: 'globe', title: 'Schema Markup Included', body: "Structured data (JSON-LD schema) is added to key pages — improving rich snippet eligibility and AI citation rates." },
      { icon: 'trend', title: 'Compounding Returns', body: 'Unlike ads that stop when you stop paying, 60 articles continue to rank, get cited, and drive traffic for years.' },
    ],
  },
  {
    id: 'premium-backlinks',
    name: 'Premium Backlink Bundle',
    price: '฿89,900',
    tagline: '5 × DR50+ editorial backlinks',
    icon: 'shield',
    items: ['5 × niche-matched placements', 'Permanent do-follow links', 'Full placement report'],
    description: '5 high-authority editorial backlinks from DR50+ websites in your niche. Five links across five different domains — the strongest authority signal in our catalogue.',
    details: [
      { icon: 'shield', title: '5 × DR50+ Links', body: 'Five independent placements on five different high-authority domains. This diversified profile looks completely natural to Google.' },
      { icon: 'globe', title: 'Niche-Matched Placements', body: 'Each link is placed on a site contextually relevant to your business. We research the best-fit publications for your industry.' },
      { icon: 'trend', title: 'Compound Authority', body: 'Five DR50+ links can move a site from invisible to top 3 for competitive keywords.' },
      { icon: 'doc', title: 'Detailed Report for Each', body: 'You receive a full placement report for each of the five links — domain metrics, live URL, anchor text, and screenshot.' },
    ],
  },
];

const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); };

const PackagesPage = () => (
  <>
    <Helmet>
      <title>SEO & Content Packages, No Retainer — Fixed Price | Locully</title>
      <meta name="description" content="One-off SEO, content, and backlink packages — no retainer, no lock-in, fixed price in Thai Baht. See what's included and what each costs." />
      <link rel="canonical" href="https://www.locully.org/packages" />
    </Helmet>

    <Page className="lbp-pkg">
      {/* Hero */}
      <PageHero
        as="section"
        eyebrow="One-Time Investment"
        title="One-Off Packages"
        lede="No retainer. No commitment. Pick a package, get results — then decide if you want more."
        visual={<PackagesIllo />}
      />

      {/* Package summary cards */}
      <Section alt>
        <div className="lbp-pkg-grid">
          {packages.map((pkg) => (
            <a key={pkg.id} href={`#${pkg.id}`} className="lb-card lbp-pkg-card">
              <Icon name={pkg.icon} />
              <div className="lbp-pkg-tagline">{pkg.tagline}</div>
              <div className="lbp-pkg-name">{pkg.name}</div>
              <div className="lbp-pkg-price">{pkg.price}</div>
              <ul className="lb-list">
                {pkg.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="lbp-pkg-more">Learn more <span aria-hidden="true">→</span></div>
            </a>
          ))}
        </div>
        <p className="lbp-pkg-note">
          All packages are one-time purchases. Combine for maximum impact or{' '}
          <button type="button" className="lb-tlink" onClick={openCalendly}>
            ask us to build a custom bundle.
          </button>
        </p>
      </Section>

      {/* Detailed sections */}
      <Section>
        {packages.map((pkg) => (
          <div key={pkg.id} id={pkg.id} className="lbp-pkg-detail">
            <div className="lbp-pkg-head">
              <div className="lbp-pkg-id">
                <Icon name={pkg.icon} />
                <div>
                  <div className="lbp-pkg-tagline">{pkg.tagline}</div>
                  <h2 className="lb-h3-stage">{pkg.name}</h2>
                </div>
              </div>
              <div className="lbp-pkg-buy">
                <div className="lbp-pkg-price">{pkg.price}</div>
                <Button size="sm" onClick={openCalendly}>Get Started</Button>
              </div>
            </div>

            <p className="lb-body-lg lbp-pkg-desc">{pkg.description}</p>

            <div className="lb-g2 lbp-pkg-details">
              {pkg.details.map((detail) => (
                <div key={detail.title} className="lb-card">
                  <Icon name={detail.icon} />
                  <div className="lb-h3">{detail.title}</div>
                  <p>{detail.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>

      {/* CTA + lead form */}
      <LeadForm
        eyebrow="Free AI visibility check"
        title="Not sure which package is right?"
        lede="Book a free 30-minute call and we'll tell you exactly what will move the needle for your business."
        footer={(
          <div className="lb-ctarow" style={{ marginTop: 28 }}>
            <Button variant="outline" onClick={openCalendly}>Book a Free Call</Button>
          </div>
        )}
      />

      <Footer />
    </Page>
  </>
);

export default PackagesPage;
