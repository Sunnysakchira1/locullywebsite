import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import LeadForm from '@/brand/LeadForm';
import { industries, SERVICE_LINKS, HUB } from '@/data/th/industryData';
import {
  Page, Breadcrumb, PageHero, Section, SectionHeader, Button, Icon, ProofPanel, ResultsNote,
} from '@/brand/components';
import { AskAi } from '@/brand/Illustrations';
import { Hreflang } from '@/i18n';
import '@/brand/pages/clinic.css';

const SITE = 'https://www.locully.org';
const URL = `${SITE}/th/industries/`;
const SERVICE_ICONS = { seo: 'search', geo: 'bot', ads: 'target' };

/** /th/industries/ — the industry hub, Thai (CollectionPage). */
export default function IndustriesPageTh() {
  const schemaCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${URL}#collection`,
    url: URL,
    name: HUB.h1,
    description: HUB.description,
    inLanguage: 'th',
    publisher: { '@id': `${SITE}/#organization` },
    about: { '@id': `${SITE}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: industries.map((ind, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: ind.h1,
        url: `${SITE}/th/industries/${ind.slug}/`,
      })),
    },
  };
  const schemaCrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: `${SITE}/th/` },
      { '@type': 'ListItem', position: 2, name: 'อุตสาหกรรม', item: URL },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{HUB.title}</title>
        <meta name="description" content={HUB.description} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={HUB.title} />
        <meta property="og:description" content={HUB.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <script type="application/ld+json">{JSON.stringify(schemaCollection)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaCrumbs)}</script>
      </Helmet>
      <Hreflang path="/industries/" />

      <Page className="lbp-clinic lbp-ind">
        <Breadcrumb items={[{ label: 'หน้าแรก', to: '/th/' }, { label: 'อุตสาหกรรม' }]} />

        <PageHero as="section" eyebrow="อุตสาหกรรม" title={HUB.h1} lede={HUB.lede} visual={<AskAi />}>
          <div className="lb-hero-cta lb-btn-row">
            <Button cta />
            <Button variant="outline" href="#industries">ดูอุตสาหกรรม</Button>
          </div>
        </PageHero>

        <Section alt id="industries">
          <SectionHeader eyebrow="เลือกอุตสาหกรรมของคุณ" title={HUB.cardsTitle} />
          <div className="lb-g3">
            {industries.map((ind) => (
              <Link key={ind.slug} to={`/th/industries/${ind.slug}/`} className="lb-card sm lb-card-link">
                <span className="lb-label lbp-clinic-card-eyebrow">{ind.group === 'clinic' ? 'สุขภาพ' : 'อสังหาริมทรัพย์'} · กรุงเทพฯ</span>
                <h3 className="lb-h3">{ind.name}</h3>
                <p>{ind.card}</p>
                <span className="lbp-clinic-more" style={{ marginTop: 'auto', paddingTop: 12 }}>ดูแผนงาน <span aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader eyebrow="บริการ" title={HUB.servicesTitle} lede={HUB.servicesLede} />
          <div className="lb-g3">
            {Object.entries(SERVICE_LINKS).map(([k, s]) => (
              <Link key={k} to={s.to} className="lb-card lb-card-link lbp-ind-svc">
                <Icon name={SERVICE_ICONS[k]} />
                <h3 className="lb-h3-card">{s.title}</h3>
                <p>{HUB.services[k]}</p>
              </Link>
            ))}
          </div>
        </Section>

        <Section alt narrow>
          <SectionHeader eyebrow="ทำไมอุตสาหกรรมจึงสำคัญ" title={HUB.whyTitle} />
          <div className="lb-narrow-copy">
            {HUB.why.map((p) => <p key={p.slice(0, 20)} className="lb-body-lg">{p}</p>)}
          </div>
        </Section>

        <LeadForm
          eyebrow="AI Audit"
          title={HUB.formTitle}
          lede={HUB.formLede}
          subject="Free AI visibility check — industries hub [TH]"
        />

        <Footer />
      </Page>
    </>
  );
}
