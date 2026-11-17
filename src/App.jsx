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
import { HtmlLang } from '@/i18n';
// Thai (/th/) pages. Every path here must also be in src/i18n/th-paths.js.
import HomePageTh from '@/pages/th/HomePage';
import GeoPageTh from '@/pages/th/GeoPage';
import SeoPageTh from '@/pages/th/SeoPage';
import PerformanceMarketingPageTh from '@/pages/th/PerformanceMarketingPage';
import AiVisibilityAuditPageTh from '@/pages/th/AiVisibilityAuditPage';
import IndustriesPageTh from '@/pages/th/IndustriesPage';
import IndustryPageTh from '@/pages/th/IndustryPage';
import AboutPageTh from '@/pages/th/AboutPage';
import FounderPageTh from '@/pages/th/FounderPage';
import ContactPageTh from '@/pages/th/ContactPage';
import LeadGenPartnerPageTh from '@/pages/th/LeadGenPartnerPage';
import PrivacyPolicyPageTh from '@/pages/th/PrivacyPolicyPage';
import BlogIndexPageTh from '@/pages/th/BlogIndexPage';

function App() {
  useEffect(() => {
    // Track initial page view
    logPageView();
  }, []);

  return (
    <Router>
      <SiteSchema />
      <HtmlLang />
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
          {/* Thai site (/th/). Blog posts are English-only for now. */}
          <Route path="/th" element={<Navigate to="/th/" replace />} />
          <Route path="/th/" element={<HomePageTh />} />
          <Route path="/th/geo" element={<Navigate to="/th/geo/" replace />} />
          <Route path="/th/geo/" element={<GeoPageTh />} />
          <Route path="/th/seo" element={<Navigate to="/th/seo/" replace />} />
          <Route path="/th/seo/" element={<SeoPageTh />} />
          <Route path="/th/performance-marketing" element={<Navigate to="/th/performance-marketing/" replace />} />
          <Route path="/th/performance-marketing/" element={<PerformanceMarketingPageTh />} />
          <Route path="/th/audit" element={<Navigate to="/th/audit/" replace />} />
          <Route path="/th/audit/" element={<AiVisibilityAuditPageTh />} />
          <Route path="/th/industries" element={<Navigate to="/th/industries/" replace />} />
          <Route path="/th/industries/" element={<IndustriesPageTh />} />
          {industries.map((i) => (
            <Route key={`th-${i.slug}`} path={`/th/industries/${i.slug}/`} element={<IndustryPageTh slug={i.slug} />} />
          ))}
          {industries.map((i) => (
            <Route key={`th-${i.slug}-noslash`} path={`/th/industries/${i.slug}`} element={<Navigate to={`/th/industries/${i.slug}/`} replace />} />
          ))}
          <Route path="/th/about" element={<AboutPageTh />} />
          <Route path="/th/rachaphon-sakchiraphong" element={<Navigate to="/th/rachaphon-sakchiraphong/" replace />} />
          <Route path="/th/rachaphon-sakchiraphong/" element={<FounderPageTh />} />
          <Route path="/th/contact" element={<Navigate to="/th/contact/" replace />} />
          <Route path="/th/contact/" element={<ContactPageTh />} />
          <Route path="/th/lead-gen-partner" element={<LeadGenPartnerPageTh />} />
          <Route path="/th/privacy-policy" element={<PrivacyPolicyPageTh />} />
          <Route path="/th/blog" element={<Navigate to="/th/blog/" replace />} />
          <Route path="/th/blog/" element={<BlogIndexPageTh />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <StickyCta />
      </div>
    </Router>
  );
}

export default App;