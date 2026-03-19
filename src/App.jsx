import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { logPageView } from '@/lib/analytics';
import Hero from '@/components/Hero';
import HowPeopleSearch from '@/components/HowPeopleSearch';
import AiRecommendationFlow from '@/components/AiRecommendationFlow';
import ConversionComparison from '@/components/ConversionComparison';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import LeadGenPartnerPage from '@/components/LeadGenPartnerPage';
import AboutPage from '@/components/AboutPage';
import PackagesPage from '@/components/PackagesPage';
import ScrollToTop from '@/components/ScrollToTop';
import ForClinicsPage from '@/pages/ForClinicsPage';
import ClinicPage from '@/components/ClinicPage';
import BlogIndexPage from '@/pages/BlogIndexPage';
import BlogPostPage from '@/pages/BlogPostPage';
import SiteSchema from '@/components/SiteSchema';

// Shared Layout/Home Component
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Locully | AI Search Visibility Experts</title>
        <meta name="description" content="Rank #1 in AI Search Results. We help clinics and brands dominate ChatGPT, Google AI, and Claude recommendations." />
        <link rel="canonical" href="https://locully.org/" />
      </Helmet>
      <Hero />
      <HowPeopleSearch />
      <AiRecommendationFlow />
      <HowItWorks />
      <ConversionComparison />
      <CaseStudies />
      <Testimonials />
      <ContactForm />
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
      <div className="min-h-screen bg-white">
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
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;