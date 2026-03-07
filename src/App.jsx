import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import LeadGenerationPage from '@/components/LeadGenerationPage';
import LeadGenPartnerPage from '@/components/LeadGenPartnerPage';
import AboutPage from '@/components/AboutPage';
import PackagesPage from '@/components/PackagesPage';
import ScrollToTop from '@/components/ScrollToTop';

// Shared Layout/Home Component
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Locully | AI Search Visibility Experts</title>
        <meta name="description" content="Rank #1 in AI Search Results. We help clinics and brands dominate ChatGPT, Google AI, and Claude recommendations." />
      </Helmet>
      <Hero />
      <HowPeopleSearch />
      <HowItWorks />
      <AiRecommendationFlow />
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
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lead-generation" element={<LeadGenerationPage />} />
          <Route path="/lead-gen-partner" element={<LeadGenPartnerPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;