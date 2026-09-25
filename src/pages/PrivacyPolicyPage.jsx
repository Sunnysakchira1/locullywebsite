import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import { Page, Breadcrumb, PageHero } from '@/brand/components';
import { Privacy } from '@/brand/Illustrations';
import '@/brand/pages/misc.css';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Locully</title>
        <meta name="description" content="Locully's privacy policy — how we collect, use, and protect your personal data." />
        <link rel="canonical" href="https://www.locully.org/privacy-policy" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <Page className="lbp-legal-page">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]} />

        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          lede="Last updated: March 2026 · Locully Co. Ltd., Bangkok, Thailand"
          visual={<Privacy />}
        />

        <section className="lb-sec alt lbp-legal">
          <div className="lb-wn">
            <p>
              This Privacy Policy explains how Locully Co. Ltd. ("Locully", "we", "us", or "our") collects, uses, and protects information when you visit <a href="https://www.locully.org">locully.org</a> or contact us about our services.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We collect information in two ways:</p>
            <ul>
              <li><strong>Information you provide</strong> — name, email address, clinic name, phone number, and any other details you submit via our contact form or when booking a call.</li>
              <li><strong>Information collected automatically</strong> — pages visited, time on site, browser type, device type, and general geographic location (country/city), collected via Google Analytics and Meta Pixel.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to enquiries and provide our services</li>
              <li>Send follow-up communications related to your request</li>
              <li>Improve our website and understand how visitors use it</li>
              <li>Run targeted advertising campaigns on Meta (Facebook/Instagram)</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties.</p>

            <h2>3. Cookies & Tracking</h2>
            <p>Our website uses the following tracking tools:</p>
            <ul>
              <li><strong>Google Tag Manager / Google Analytics</strong> — measures site traffic and user behaviour anonymously.</li>
              <li><strong>Meta Pixel</strong> — tracks page views and conversions to measure ad performance on Facebook and Instagram.</li>
            </ul>
            <p>You can opt out of Google Analytics at <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>. You can manage Meta ad preferences at <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer">facebook.com/ads/preferences</a>.</p>

            <h2>4. Data Storage & Security</h2>
            <p>
              Contact form submissions are processed via Formspree and stored securely. We take reasonable technical measures to protect your data, but no method of transmission over the internet is 100% secure.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>We use the following third-party services that may process your data under their own privacy policies:</p>
            <ul>
              <li>Formspree (contact form processing)</li>
              <li>Google Analytics (website analytics)</li>
              <li>Meta Pixel (advertising measurement)</li>
              <li>Calendly (call booking)</li>
              <li>Vercel (website hosting)</li>
            </ul>

            <h2>6. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of any personal data we hold about you. To exercise these rights, contact us at <a href="mailto:sunny@locully.org">sunny@locully.org</a>.</p>

            <h2>7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. The date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the updated policy.</p>

            <h2>8. Contact</h2>
            <p>
              For any questions about this Privacy Policy:<br />
              <a href="mailto:sunny@locully.org">sunny@locully.org</a><br />
              Locully Co. Ltd., Bangkok, Thailand
            </p>
          </div>
        </section>

        <Footer />
      </Page>
    </>
  );
}
