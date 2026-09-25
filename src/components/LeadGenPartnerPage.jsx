import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Users, Target, Database, MessageCircle, BarChart,
  MapPin, GraduationCap, Building2, Briefcase
} from 'lucide-react';
import Footer from '@/components/Footer';
import {
  Page, PageHero, Section, SectionHeader, Button, Figure, StatRow,
} from '@/brand/components';
import { Expo } from '@/brand/Illustrations';
import '@/brand/pages/about.css';

const LeadGenPartnerPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); };

  const services = [
    { icon: Users, title: "Local Representation", description: "Professional staff representing your brand at expos with cultural fluency and English-language support." },
    { icon: Target, title: "Lead Capture", description: "Systematic collection and qualification of leads — every contact graded by intent and readiness." },
    { icon: Database, title: "CRM Integration", description: "Seamless data entry directly into your systems the same day. No spreadsheet chaos." },
    { icon: MessageCircle, title: "Post-Event Nurturing", description: "Immediate follow-up sequences sent within 24 hours to keep your leads warm." },
    { icon: BarChart, title: "Market Intelligence", description: "Detailed analytics on attendee demographics, competitor presence, and market signals." }
  ];

  const expoTypes = [
    { title: "Study Abroad Fairs", icon: GraduationCap, desc: "Connecting universities with Thai students planning international education." },
    { title: "Property Expos", icon: Building2, desc: "Real estate investment opportunities across Southeast Asia." },
    { title: "Education Expos", icon: GraduationCap, desc: "International schools and language programmes." },
    { title: "Business Conferences", icon: Briefcase, desc: "B2B networking events at BITEC, IMPACT, and beyond." },
    { title: "Trade Shows", icon: MapPin, desc: "Industry-specific exhibitions across all major Thai venues." }
  ];

  const metrics = [
    { value: "500+", label: "Qualified Leads" },
    { value: "45%", label: "Avg. Conversion" },
    { value: "3×", label: "ROI Boost" },
    { value: "100%", label: "Data Accuracy" }
  ];

  return (
    <>
      <Helmet>
        <title>Your Local Partner for Fairs & Expos in Thailand | Locully</title>
        <meta name="description" content="Exhibiting at a fair or expo in Thailand? Locully is your on-the-ground marketing team — lead capture, local ads, and follow-up that fills your pipeline." />
        <link rel="canonical" href="https://www.locully.org/lead-gen-partner" />
      </Helmet>

      <Page className="lbp-lgp">
        {/* Hero */}
        <PageHero
          as="section"
          eyebrow="Thailand Local Partner"
          visual={<Expo />}
          title="Local Marketing Partner for Fairs & Expos"
          lede="Expand your reach in Thailand without the overhead. We are your dedicated team of local marketing experts."
        >
          <div className="lb-hero-cta">
            <Button onClick={openCalendly}>Start Your Campaign</Button>
          </div>
        </PageHero>

        {/* Overview */}
        <Section alt>
          <div className="lb-split">
            <div>
              <span className="lb-eyebrow">Your Local Team</span>
              <h2 className="lb-h2">Local Experts in a Global Marketplace</h2>
              <p className="lb-body-lg" style={{ margin: 0 }}>Navigating Thailand's exhibition sector demands local insight and cultural fluency.</p>
              <div className="lb-stack lbp-lgp-checks">
                {["Cultural fluency support", "Instant lead qualification", "Cost-effective market entry"].map((item) => (
                  <div key={item} className="lb-si">
                    <svg className="lb-tick" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10.5L8 14.5L16 5.5" stroke="#e26a2c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div className="lb-si-t" style={{ margin: 0 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>

            <Figure
              className="lbp-lgp-fig"
              src="https://images.unsplash.com/photo-1695060704188-4a86d4be9721"
              alt="Bangkok cityscape"
              caption={(
                <>
                  <span className="lbp-lgp-figcap-label">Why Thailand?</span>
                  <h3 className="lbp-lgp-figcap-h">A Strategic Hub</h3>
                </>
              )}
            />
          </div>
        </Section>

        {/* Services */}
        <Section>
          <SectionHeader
            eyebrow="Services"
            title="Comprehensive Support"
            lede="We don't just hand out brochures. We build pipelines."
          />
          <div className="lb-g3">
            {services.map(({ icon: IconC, title, description }) => (
              <div key={title} className="lb-card sm">
                <span className="lbp-about-disc"><IconC aria-hidden="true" /></span>
                <div className="lb-h3">{title}</div>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Expo Types */}
        <Section alt>
          <div className="lbp-lgp-expo">
            <div>
              <span className="lb-eyebrow">Event Types</span>
              <h2 className="lb-h2">Events We Cover</h2>
              <p className="lb-body-lg" style={{ margin: '0 0 28px' }}>From massive international trade shows at BITEC to niche luxury expos.</p>
              <Figure
                className="lbp-lgp-fig-sm"
                src="https://images.unsplash.com/photo-1703757931698-6b905414d019"
                alt="Trade show"
              />
            </div>
            <div className="lbp-lgp-expo-cards">
              {expoTypes.map(({ icon: IconC, title, desc }) => (
                <div key={title} className="lbp-lgp-expo-card">
                  <span className="lbp-about-disc"><IconC aria-hidden="true" /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Metrics */}
        <Section>
          <SectionHeader eyebrow="Proven Impact" title="Results Our Partners See" />
          <StatRow stats={metrics.map((m) => ({ n: m.value, l: m.label }))} />
        </Section>

        {/* Final CTA — partner consultation (not the AI audit) */}
        <Section alt>
          <div className="lbp-lgp-cta">
            <h3 className="lb-h2">Ready to Dominate Your Next Expo?</h3>
            <p className="lb-lede">Let Locully represent your brand with excellence.</p>
            <Button onClick={openCalendly}>Schedule a Consultation</Button>
          </div>
        </Section>

        <Footer />
      </Page>
    </>
  );
};

export default LeadGenPartnerPage;
