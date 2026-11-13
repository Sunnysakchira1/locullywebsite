import React from 'react';
import { Helmet } from 'react-helmet';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.locully.org/#organization',
  name: 'Locully Co. Ltd.',
  url: 'https://www.locully.org',
  logo: 'https://www.locully.org/locully-logo-square.png',
  foundingDate: '2020',
  email: 'admin@locully.org',
  telephone: '+66626959444',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '92 Central Park Offices, Floor 35, Rama 4 Road',
    addressLocality: 'Silom, Bangrak',
    addressRegion: 'Bangkok',
    postalCode: '10500',
    addressCountry: 'TH',
  },
  areaServed: {
    '@type': 'City',
    name: 'Bangkok',
  },
  sameAs: [
    'https://www.linkedin.com/company/74875853/',
  ],
};

export default function SiteSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
}
