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
import LeadGenPartnerPage from '@/components/LeadGenPartnerPage';
import AboutPage from '@/components/AboutPage';
import PackagesPage from '@/components/PackagesPage';
import ScrollToTop from '@/components/ScrollToTop';
import ForClinicsPage from '@/pages/ForClinicsPage';
import ClinicPage from '@/components/ClinicPage';
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
          <Route path="/ai-optimization/" element={<ForClinicsPage />} />
          <Route path="/ai-optimization/physiotherapy-clinics/" element={<ClinicPage slug="physiotherapy-clinics" />} />
          <Route path="/ai-optimization/dental-clinics/" element={<ClinicPage slug="dental-clinics" />} />
          <Route path="/ai-optimization/wellness-clinics/" element={<ClinicPage slug="wellness-clinics" />} />
          <Route path="/ai-optimization/fertility-clinics/" element={<ClinicPage slug="fertility-clinics" />} />
          <Route path="/ai-optimization/beauty-clinics/" element={<ClinicPage slug="beauty-clinics" />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;