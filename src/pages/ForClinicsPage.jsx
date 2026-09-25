import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import { clinics } from '@/data/clinicData';
import { Page, Breadcrumb, PageHero, Section, SectionHeader, Button } from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Clinic } from '@/brand/Illustrations';
import '@/brand/pages/clinic.css';

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.locully.org' },
    { '@type': 'ListItem', position: 2, name: 'AI Optimization for Clinics', item: 'https://www.locully.org/ai-optimization/' },
  ],
};

// Curated guides surfaced on the hub — pushes hub authority into the blog cluster
// and gives clinic owners a reading path.
const guides = [
  { slug: 'ai-search-optimization-clinics-thailand', title: 'AI Search Optimization for Clinics: The 2026 Guide', blurb: 'The complete framework for getting your clinic recommended by ChatGPT, Perplexity, and Google AI.' },
  { slug: 'why-clinic-not-showing-chatgpt', title: "Why Your Clinic Doesn't Appear in ChatGPT", blurb: 'Six reasons clinics are invisible in AI search — and the exact fixes.' },
  { slug: 'how-chatgpt-chooses-clinic-recommendation', title: 'How ChatGPT Decides Which Clinic to Recommend', blurb: 'The three signals that determine which Bangkok clinics AI recommends.' },
  { slug: 'ai-search-audit-clinic-bangkok', title: 'The AI Search Audit Every Bangkok Clinic Should Run', blurb: 'A 10-point checklist to see exactly where you stand in AI search.' },
  { slug: 'geo-vs-seo-clinics-bangkok', title: 'GEO vs SEO for Clinics: What Bangkok Owners Need', blurb: 'What each does, how the signals differ, and which to prioritize.' },
];

const schemaService = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Optimization for Bangkok Clinics',
  serviceType: 'AI Search Optimization',
  provider: { '@id': 'https://www.locully.org/#organization' },
  areaServed: { '@type': 'City', name: 'Bangkok' },
  url: 'https://www.locully.org/ai-optimization/',
  description: 'Locully helps Bangkok clinics appear in ChatGPT, Perplexity, and Google AI Overviews — AI search optimization tailored by clinic type.',
};

export default function ForClinicsPage() {
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); };

  return (
    <>
      <Helmet>
        <title>AI Optimization Agency Thailand — GEO & AI Search | Locully</title>
        <meta name="description" content="Locully is a Thailand AI optimization agency — we get your business recommended by ChatGPT, Perplexity, and Google AI. Pick your clinic type to see how." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.locully.org/ai-optimization/" />
        <link rel="canonical" href="https://www.locully.org/ai-optimization/" />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
      </Helmet>

      <Page className="lbp-clinic">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'AI Optimization for Clinics' }]} />

        {/* Hero */}
        <PageHero
          as="section"
          eyebrow="AI Optimization · Bangkok Clinics"
          title="AI Optimization Agency Thailand"
          lede="Bangkok patients increasingly use AI to find and choose clinics. Locully helps your clinic appear in those recommendations — by clinic type, treatment, and location."
          visual={<Clinic />}
        >
          <div className="lb-hero-cta lb-btn-row">
            <Button cta />
            <Button variant="outline" onClick={openCalendly}>Book a free consultation</Button>
          </div>
        </PageHero>

        {/* Clinic grid */}
        <Section alt>
          <SectionHeader eyebrow="Choose your clinic type" style={{ marginBottom: 32 }} />
          <div className="lb-g3">
            {clinics.map((clinic) => (
              <Link key={clinic.slug} to={`/ai-optimization/${clinic.slug}/`} className="lb-card sm lb-card-link">
                <span className="lb-label lbp-clinic-card-eyebrow">Bangkok · AI Optimization</span>
                <h2 className="lb-h3">{clinic.namePlural}</h2>
                <p className="lbp-clinic-card-p">{clinic.intro}</p>
                <div className="lb-card-foot">
                  <span className="lbp-clinic-more">See how it works <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* Guides for clinic owners — hub → blog cluster */}
        <Section>
          <SectionHeader eyebrow="Guides for clinic owners" title="Learn how AI search picks clinics" />
          <div className="lb-g3">
            {guides.map((g) => (
              <Link key={g.slug} to={`/blog/${g.slug}/`} className="lb-card sm lb-card-link">
                <h3 className="lb-h3">{g.title}</h3>
                <p>{g.blurb}</p>
                <div className="lb-card-foot">
                  <span className="lbp-clinic-more">Read the guide <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        {/* Lead form */}
        <LeadForm
          eyebrow="Free AI visibility check"
          title="Find out if ChatGPT already recommends you."
          footer={(
            <div className="lb-ctarow" style={{ marginTop: 28 }}>
              <Button variant="outline" onClick={openCalendly}>Book a free consultation</Button>
            </div>
          )}
        />

        <Footer />
      </Page>
    </>
  );
}
