import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Briefcase, ShoppingCart, ShieldCheck, HeartPulse,
  Flower2, Utensils, LineChart, Users
} from 'lucide-react';
import Footer from '@/components/Footer';
import FounderCard from './FounderCard';
import {
  Page, PageHero, Section, SectionHeader, Button, Icon, Figure,
} from '@/brand/components';
import LeadForm from '@/brand/LeadForm';
import { Team } from '@/brand/Illustrations';
import '@/brand/pages/about.css';

const AboutPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const openCalendly = () => { window.open('https://calendly.com/locully/30min', '_blank'); };

  const industries = [
    { icon: ShoppingCart, title: "E-Commerce", description: "Driving high-intent traffic that converts into sales." },
    { icon: Briefcase, title: "SaaS", description: "Scaling user acquisition and reducing churn." },
    { icon: ShieldCheck, title: "Insurance", description: "Navigating complex regulations to capture leads." },
    { icon: HeartPulse, title: "Healthcare", description: "Building trust for clinics and medical providers." },
    { icon: Flower2, title: "Wellness", description: "Connecting holistic brands with consumers." },
    { icon: Utensils, title: "Hospitality", description: "Boosting bookings for hotels and travel." },
    { icon: LineChart, title: "Finance", description: "Generating qualified leads for financial services." }
  ];

  return (
    <>
      <Helmet>
        <title>About Locully — Bangkok's AI Search Visibility Agency</title>
        <meta name="description" content="Locully gets you recommended by ChatGPT, Perplexity, and Google AI — backed by the SEO that makes it stick. Meet the Bangkok team and how we work." />
        <link rel="canonical" href="https://www.locully.org/about" />
      </Helmet>

      <Page className="lbp-about">
        {/* Hero */}
        <PageHero
          as="section"
          eyebrow="About Locully"
          visual={<Team />}
          title={<>We Don't Just Do Marketing.<br />We Drive Revenue.</>}
          lede="Locully is an agency built on the belief that traffic is vanity, and conversion is sanity."
        />

        {/* Team */}
        <Section style={{ borderTop: '1px solid var(--lb-rule-soft)' }}>
          <SectionHeader eyebrow="The Team" title="Meet the People Behind Locully" />
          <div className="lbp-about-people">
            <FounderCard />
            <div className="lbp-about-person">
              <Figure src="/rachanon.jpeg" alt="Rachanon Sakchiraphong - Head of Partnerships at Locully" />
              <div className="lbp-about-body">
                <span className="lb-eyebrow">Head of Partnerships</span>
                <div className="lbp-about-name">Rachanon Sakchiraphong</div>
                <p className="lbp-about-role">Head of Partnerships</p>
                <blockquote className="lbp-about-quote">
                  Rachanon brings years of hands-on experience spanning large-scale events management, government projects, and professional events organisation across Thailand and Southeast Asia. His background coordinating high-profile initiatives — from public sector programmes to major corporate events — gives Locully a unique edge in building the strategic partnerships and relationships that drive real-world authority for our clients.
                </blockquote>
              </div>
            </div>
          </div>
        </Section>

        {/* Adaptability */}
        <Section alt>
          <div className="lb-split" style={{ alignItems: 'start' }}>
            <div className="lbp-about-split-copy">
              <span className="lb-eyebrow">Our Approach</span>
              <h2 className="lb-h2">Adaptability is Our Superpower</h2>
              <p className="lb-body-lg">The digital landscape changes daily. Rigid strategies die fast.</p>
              <p className="lb-body-lg">At Locully, we build agile, data-driven strategies that evolve with search — including AI-powered search.</p>

              <div className="lbp-about-feats">
                {[
                  { icon: 'trend', title: 'Revenue-First Mindset', desc: 'We optimize for your bottom line, not vanity metrics.' },
                  { icon: 'users', title: 'Dedicated Strategists', desc: 'Direct access to senior team members.' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="lbp-about-feat">
                    <Icon name={icon} />
                    <div>
                      <div className="lbp-about-feat-t">{title}</div>
                      <p className="lbp-about-feat-d">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lb-fit yes">
              <h3 className="lb-h3">Why Clients Choose Us</h3>
              <ul className="lb-list lg">
                {[
                  "We treat your business like our own.",
                  "Transparent reporting — no vanity metrics.",
                  "Deep expertise in technical SEO & AI search.",
                  "Direct access to senior strategists.",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        {/* Industries */}
        <Section>
          <SectionHeader
            eyebrow="Industries"
            title="Industries We've Mastered"
            lede="Diverse experience means cross-industry insights."
          />
          <div className="lbp-about-ind">
            {industries.map(({ icon: IconC, title, description }) => (
              <div key={title} className="lb-card">
                <span className="lbp-about-disc"><IconC aria-hidden="true" /></span>
                <div className="lb-h3">{title}</div>
                <p>{description}</p>
              </div>
            ))}

            <button type="button" className="lbp-about-ind-cta" onClick={openCalendly}>
              <span className="lbp-about-disc"><Users aria-hidden="true" /></span>
              <span className="lb-h3">Your Industry</span>
              <span className="lbp-about-ind-d">Don't see your sector?</span>
              <span className="lb-tlink">Contact Us <span aria-hidden="true">→</span></span>
            </button>
          </div>
        </Section>

        {/* CTA + lead form */}
        <LeadForm
          eyebrow="Free AI visibility check"
          title="Ready to Stop Guessing?"
          lede="Your competition isn't waiting. Let's build a strategy that turns your website into your best salesperson."
          footer={(
            <div className="lb-ctarow" style={{ marginTop: 28 }}>
              <Button variant="outline" onClick={openCalendly}>Speak to Us</Button>
            </div>
          )}
        />

        <Footer />
      </Page>
    </>
  );
};

export default AboutPage;
