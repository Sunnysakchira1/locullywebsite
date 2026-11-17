import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';
import { Page, PageHero, Button } from '@/brand/components';
import { Lost } from '@/brand/Illustrations';
import { useT, useLp } from '@/i18n';
import '@/brand/pages/misc.css';

// 404 page. Rendered by the catch-all <Route path="*"> so unknown URLs show a
// real page with a way back, instead of a blank nav-only screen.
const NotFound = () => {
  const t = useT().notFound;
  const l = useLp();
  return (
  <>
    <Helmet>
      <title>{t.title}</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <Page className="lbp-404">
      <PageHero
        as="section"
        eyebrow={t.eyebrow}
        title={t.h1}
        lede={t.lede}
        visual={<Lost />}
      >
        <div className="lbp-404-links">
          <Button to={l('/')}>{t.home}</Button>
          <Button variant="outline" to={l('/geo/')}>{t.geo}</Button>
          <Button variant="outline" to={l('/blog/')}>{t.blog}</Button>
        </div>
      </PageHero>

      <Footer />
    </Page>
  </>
  );
};

export default NotFound;
