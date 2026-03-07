import React from 'react';
import { Helmet } from 'react-helmet';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://locully.org/#organization',
  name: 'Locully Co. Ltd',
  url: 'https://locully.org',
  logo: 'https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png',
  foundingDate: '2025',
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
