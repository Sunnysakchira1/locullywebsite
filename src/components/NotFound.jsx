import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import { Page, PageHero, Button } from '@/brand/components';
import { Lost } from '@/brand/Illustrations';
import '@/brand/pages/misc.css';

// 404 page. Rendered by the catch-all <Route path="*"> so unknown URLs show a
// real page with a way back, instead of a blank nav-only screen.
const NotFound = () => (
  <>
    <Helmet>
      <title>Page Not Found | Locully</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <Page className="lbp-404">
      <PageHero
        as="section"
        eyebrow="Error 404"
        title="This page doesn't exist"
        lede="The page you're looking for may have moved or never existed. Here are some good places to go instead."
        visual={<Lost />}
      >
        <div className="lbp-404-links">
          <Button to="/">Back to home</Button>
          <Button variant="outline" to="/geo/">GEO &amp; AI search optimisation</Button>
          <Button variant="outline" to="/blog/">Read the blog</Button>
        </div>
      </PageHero>

      <Footer />
    </Page>
  </>
);

export default NotFound;
