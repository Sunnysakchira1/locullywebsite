import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { logPageView } from '@/lib/analytics';
import Hero from '@/components/Hero';
import HowPeopleSearch from '@/components/HowPeopleSearch';
import AiRecommendationFlow from '@/components/AiRecommendationFlow';
import ConversionComparison from '@/components/ConversionComparison';
import SelfTest from '@/components/SelfTest';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import LeadGenPartnerPage from '@/components/LeadGenPartnerPage';
import AboutPage from '@/components/AboutPage';
import PackagesPage from '@/components/PackagesPage';
import ScrollToTop from '@/components/ScrollToTop';
import Nav from '@/components/Nav';
import homeHtml from '@/home-content.html?raw';
import CaseStudyGate from '@/components/CaseStudyGate';
import '@/home-scoped.css';
import ForClinicsPage from '@/pages/ForClinicsPage';
import ClinicPage from '@/components/ClinicPage';
import BlogIndexPage from '@/pages/BlogIndexPage';
import BlogPostPage from '@/pages/BlogPostPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import SeoAioPage from '@/pages/SeoAioPage';
import SiteSchema from '@/components/SiteSchema';
import WhatsAppPopup from '@/components/WhatsAppPopup';
import LeadMagnetPopup from '@/components/LeadMagnetPopup';

// Homepage — ported 1:1 from homepage-mockup.html (CSS scoped under .lcm).
const HomePage = () => {
  useEffect(() => {
    // AI Visibility Score self-test (was a <script> in the mockup)
    const grid = document.getElementById('selfTest');
    const card = document.getElementById('scoreCard');
    if (!grid || !card) return;
    const valEl = document.getElementById('scoreVal');
    const fill = document.getElementById('scoreFill');
    const labelEl = document.getElementById('scoreLabel');
    const msgEl = document.getElementById('scoreMsg');
    const numEl = card.querySelector('.score-num');
    let touched = false;
    const tier = (s) =>
      s >= 70 ? { c: '#2D7A4F', t: 'STRONG — BUT DEFEND IT', m: "You're ahead — but AI rankings decay and competitors are catching up. The audit shows exactly where you're exposed." }
      : s >= 40 ? { c: '#A87820', t: 'AT RISK', m: "Competitors are pulling ahead in AI answers. There's clear ground to win back — and fast." }
      : { c: '#C13030', t: 'CRITICAL — LARGELY INVISIBLE', m: "AI almost never recommends you. Ready-to-book patients are handed to competitors every week. This is fixable." };
    const update = () => {
      const checked = grid.querySelectorAll('.test-cb:checked').length;
      const score = Math.round((8 - checked) / 8 * 100);
      const t = tier(score);
      valEl.textContent = score;
      fill.style.width = score + '%';
      fill.style.background = t.c;
      numEl.style.color = t.c;
      labelEl.textContent = t.t;
      labelEl.style.color = t.c;
      if (touched) msgEl.textContent = t.m;
    };
    const onChange = () => { touched = true; update(); };
    grid.addEventListener('change', onChange);
    update();
    return () => grid.removeEventListener('change', onChange);
  }, []);

  return (
    <>
      <Helmet>
        <title>Locully | Get Your Business Recommended by ChatGPT</title>
        <meta name="description" content="Get recommended by ChatGPT when patients search for clinics like yours. Locully makes your brand the answer AI search engines give." />
        <link rel="canonical" href="https://locully.org/" />
      </Helmet>
      <div className="lcm" dangerouslySetInnerHTML={{ __html: homeHtml }} />
      <CaseStudyGate />
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    // Track initial page view
    logPageView();
  }, []);

  return (
    <Router>
      <SiteSchema />
      <ScrollToTop />
      <WhatsAppPopup />
      <LeadMagnetPopup />
      <div className="min-h-screen bg-white">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lead-gen-partner" element={<LeadGenPartnerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          {/* Trailing-slash redirects */}
          <Route path="/ai-optimization" element={<Navigate to="/ai-optimization/" replace />} />
          <Route path="/ai-optimization/physiotherapy-clinics" element={<Navigate to="/ai-optimization/physiotherapy-clinics/" replace />} />
          <Route path="/ai-optimization/dental-clinics" element={<Navigate to="/ai-optimization/dental-clinics/" replace />} />
          <Route path="/ai-optimization/wellness-clinics" element={<Navigate to="/ai-optimization/wellness-clinics/" replace />} />
          <Route path="/ai-optimization/fertility-clinics" element={<Navigate to="/ai-optimization/fertility-clinics/" replace />} />
          <Route path="/ai-optimization/beauty-clinics" element={<Navigate to="/ai-optimization/beauty-clinics/" replace />} />
          <Route path="/blog" element={<Navigate to="/blog/" replace />} />

          <Route path="/ai-optimization/" element={<ForClinicsPage />} />
          <Route path="/ai-optimization/physiotherapy-clinics/" element={<ClinicPage slug="physiotherapy-clinics" />} />
          <Route path="/ai-optimization/dental-clinics/" element={<ClinicPage slug="dental-clinics" />} />
          <Route path="/ai-optimization/wellness-clinics/" element={<ClinicPage slug="wellness-clinics" />} />
          <Route path="/ai-optimization/fertility-clinics/" element={<ClinicPage slug="fertility-clinics" />} />
          <Route path="/ai-optimization/beauty-clinics/" element={<ClinicPage slug="beauty-clinics" />} />
          <Route path="/blog/" element={<BlogIndexPage />} />
          <Route path="/blog/ai-search-optimization-clinics-thailand/" element={<BlogPostPage slug="ai-search-optimization-clinics-thailand" />} />
          <Route path="/blog/why-clinic-not-showing-chatgpt/" element={<BlogPostPage slug="why-clinic-not-showing-chatgpt" />} />
          <Route path="/blog/how-chatgpt-chooses-clinic-recommendation/" element={<BlogPostPage slug="how-chatgpt-chooses-clinic-recommendation" />} />
          <Route path="/blog/ai-optimization-dental-clinics-thailand/" element={<BlogPostPage slug="ai-optimization-dental-clinics-thailand" />} />
          <Route path="/blog/geo-vs-seo-clinics-bangkok/" element={<BlogPostPage slug="geo-vs-seo-clinics-bangkok" />} />
          <Route path="/blog/ai-search-audit-clinic-bangkok/" element={<BlogPostPage slug="ai-search-audit-clinic-bangkok" />} />
          <Route path="/blog/how-to-choose-ai-optimization-agency-clinic-thailand/" element={<BlogPostPage slug="how-to-choose-ai-optimization-agency-clinic-thailand" />} />
          <Route path="/blog/what-is-seo-complete-guide/" element={<BlogPostPage slug="what-is-seo-complete-guide" />} />
          <Route path="/blog/on-page-seo-optimization-guide/" element={<BlogPostPage slug="on-page-seo-optimization-guide" />} />
          <Route path="/blog/backlinks-guide-seo/" element={<BlogPostPage slug="backlinks-guide-seo" />} />
          <Route path="/blog/programmatic-seo-guide/" element={<BlogPostPage slug="programmatic-seo-guide" />} />
          <Route path="/blog/ai-search-statistics/" element={<BlogPostPage slug="ai-search-statistics" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/ai-search-visibility" element={<SeoAioPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;