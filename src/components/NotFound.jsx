import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '@/components/Footer';

// 404 page. Rendered by the catch-all <Route path="*"> so unknown URLs show a
// real page with a way back, instead of a blank nav-only screen.
const NotFound = () => (
  <>
    <Helmet>
      <title>Page Not Found | Locully</title>
      <meta name="robots" content="noindex" />
    </Helmet>

    <section className="l-page-hero">
      <div className="l-container l-page-hero-inner" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
        <span className="l-label" style={{ justifyContent: 'center', marginBottom: 20, display: 'inline-flex' }}>Error 404</span>
        <h1 className="l-h1" style={{ marginBottom: 20 }}>
          This page <em className="l-serif-em">doesn't exist</em>
        </h1>
        <p className="l-body" style={{ maxWidth: 480, margin: '0 auto 32px' }}>
          The page you're looking for may have moved or never existed. Here are some good places to go instead.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="l-btn" style={{ border: 'none', textDecoration: 'none' }}>Back to home</Link>
          <Link to="/ai-optimization/" className="l-btn-ghost" style={{ textDecoration: 'none' }}>AI Optimization for Clinics</Link>
          <Link to="/blog/" className="l-btn-ghost" style={{ textDecoration: 'none' }}>Read the blog</Link>
        </div>
      </div>
    </section>

    <Footer />
  </>
);

export default NotFound;
