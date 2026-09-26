import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { logPageView } from '@/lib/analytics';
import LeadGenPartnerPage from '@/components/LeadGenPartnerPage';
import AboutPage from '@/components/AboutPage';
import ScrollToTop from '@/components/ScrollToTop';
import Nav from '@/components/Nav';
import IndustriesPage from '@/pages/IndustriesPage';
import IndustryPage from '@/pages/IndustryPage';
import { industries } from '@/data/industryData';
import BlogIndexPage from '@/pages/BlogIndexPage';
import BlogPostPage from '@/pages/BlogPostPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import GeoPage from '@/pages/GeoPage';
import ContactPage from '@/pages/ContactPage';
import SeoPage from '@/pages/SeoPage';
import PerformanceMarketingPage from '@/pages/PerformanceMarketingPage';
import AiVisibilityAuditPage from '@/pages/AiVisibilityAuditPage';
import FounderPage from '@/pages/FounderPage';
import HomePage from '@/pages/HomePage';
import NotFound from '@/components/NotFound';
import SiteSchema from '@/components/SiteSchema';
import WhatsAppPopup from '@/components/WhatsAppPopup';
import LeadMagnetPopup from '@/components/LeadMagnetPopup';
import { StickyCta } from '@/brand/components';

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
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/rachaphon-sakchiraphong" element={<Navigate to="/rachaphon-sakchiraphong/" replace />} />
          <Route path="/rachaphon-sakchiraphong/" element={<FounderPage />} />
          <Route path="/seo/" element={<SeoPage />} />
          {/* Trailing-slash redirects */}
          <Route path="/blog" element={<Navigate to="/blog/" replace />} />
          <Route path="/industries" element={<Navigate to="/industries/" replace />} />
          {industries.map((i) => (
            <Route key={`${i.slug}-noslash`} path={`/industries/${i.slug}`} element={<Navigate to={`/industries/${i.slug}/`} replace />} />
          ))}
          {/* Legacy clinic URLs moved to /industries/ (server 301s live in vercel.json; this is the SPA fallback) */}
          {industries.filter((i) => i.group === 'clinic').map((i) => (
            <Route key={`${i.slug}-legacy`} path={`/ai-optimization/${i.slug}/*`} element={<Navigate to={`/industries/${i.slug}/`} replace />} />
          ))}
          <Route path="/industries/" element={<IndustriesPage />} />
          {industries.map((i) => (
            <Route key={i.slug} path={`/industries/${i.slug}/`} element={<IndustryPage slug={i.slug} />} />
          ))}

          <Route path="/geo/" element={<GeoPage />} />
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
          <Route path="/blog/how-ai-chooses-sources-to-cite/" element={<BlogPostPage slug="how-ai-chooses-sources-to-cite" />} />
          <Route path="/blog/zero-click-search-statistics/" element={<BlogPostPage slug="zero-click-search-statistics" />} />
          <Route path="/blog/how-many-people-use-chatgpt/" element={<BlogPostPage slug="how-many-people-use-chatgpt" />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/performance-marketing" element={<Navigate to="/performance-marketing/" replace />} />
          <Route path="/performance-marketing/" element={<PerformanceMarketingPage />} />
          <Route path="/audit" element={<Navigate to="/audit/" replace />} />
          <Route path="/audit/" element={<AiVisibilityAuditPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <StickyCta />
      </div>
    </Router>
  );
}

export default App;