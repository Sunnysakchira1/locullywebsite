import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, AlertCircle, Settings, TrendingUp, ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { clinics } from '@/data/clinicData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ClinicPage({ slug }) {
  const clinic = clinics.find((c) => c.slug === slug);

  if (!clinic) return null;

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `AI Optimization for ${clinic.namePlural}`,
    provider: {
      '@type': 'Organization',
      name: 'Locully',
      url: 'https://locully.org',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangkok',
    },
    description: clinic.metaDescription,
    serviceType: 'AI Search Optimization',
  };

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: clinic.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://locully.org' },
      { '@type': 'ListItem', position: 2, name: 'For Clinics', item: 'https://locully.org/ai-optimization/' },
      { '@type': 'ListItem', position: 3, name: clinic.namePlural },
    ],
  };

  const otherClinics = clinics.filter((c) => c.slug !== slug);

  return (
    <>
      <Helmet>
        <title>{clinic.headline} | Locully</title>
        <meta name="description" content={clinic.metaDescription} />
        <meta property="og:title" content={`${clinic.headline} | Locully`} />
        <meta property="og:description" content={clinic.metaDescription} />
        <meta property="og:url" content={`https://locully.org/ai-optimization/${clinic.slug}/`} />
        <link rel="canonical" href={`https://locully.org/ai-optimization/${clinic.slug}/`} />
        <script type="application/ld+json">{JSON.stringify(schemaService)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="max-w-5xl mx-auto px-6 pt-6 pb-2 text-sm text-gray-400 flex items-center gap-1">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/ai-optimization/" className="hover:text-gray-600">For Clinics</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600">{clinic.namePlural}</span>
        </nav>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-12 pb-16">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              AI Optimization · Bangkok
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {clinic.headline}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">{clinic.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Get a free AI visibility audit
              </a>
            </div>
          </motion.div>
        </section>

        {/* H2: How patients find this clinic type */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  How Bangkok patients find {clinic.name.toLowerCase()} clinics through AI
                </h2>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl">{clinic.searchBehavior}</p>

              {/* AI query examples callout */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Real AI queries patients are asking right now
                </p>
                <ul className="space-y-3">
                  {clinic.aiQueries.map((query, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      </span>
                      <span className="text-gray-700 font-mono text-sm">{query}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-gray-600">
                When a patient submits these queries, AI engines like ChatGPT, Perplexity, and Google AI Overviews
                scan available web content and recommend a handful of clinics. Traditional SEO alone doesn&apos;t
                determine who gets recommended — AI optimization does.
              </p>
            </motion.div>
          </div>
        </section>

        {/* H2: Why underrepresented */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Why {clinic.name.toLowerCase()} clinics are underrepresented in AI search
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">{clinic.painPoint}</p>
            </motion.div>
          </div>
        </section>

        {/* H2: What AIO looks like */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  What AI optimization looks like for {clinic.name.toLowerCase()} clinics
                </h2>
              </div>
              <p className="text-gray-600 mb-8">
                Every clinic category has different AI ranking signals. Here&apos;s what we focus on for{' '}
                {clinic.name.toLowerCase()} clinics specifically:
              </p>
              <ul className="space-y-4">
                {clinic.serviceItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-white border border-gray-200 rounded-lg p-5">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* H2: Results */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-green-500" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Results clinics like yours have seen
                </h2>
              </div>
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-8">
                <p className="text-4xl font-bold text-indigo-600 mb-2">10×</p>
                <p className="text-gray-700 text-lg">
                  One of our Bangkok clinic clients saw a{' '}
                  <strong>10x increase in AI-driven recommendations</strong> within 90 days of starting AIO
                  — moving from zero AI citations to appearing consistently across ChatGPT, Perplexity, and
                  Google AI Overviews.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* H2: FAQ */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
                Frequently asked questions
              </h2>
              <div className="space-y-6">
                {clinic.faq.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{item.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related clinic pages */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              AI optimization for other clinic types
            </h2>
            <div className="flex flex-wrap gap-3">
              {otherClinics.map((c) => (
                <Link
                  key={c.slug}
                  to={`/ai-optimization/${c.slug}/`}
                  className="inline-flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  {c.namePlural}
                  <ChevronRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact Form */}
        <section id="contact">
          <div className="max-w-5xl mx-auto px-6 pb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Get your {clinic.name.toLowerCase()} clinic found on AI search
            </h2>
            <p className="text-gray-600 mb-8">
              Talk to us — we&apos;ll show you exactly how your clinic currently appears (or doesn&apos;t) in AI
              search results, and what it would take to change that.
            </p>
          </div>
          <ContactForm />
        </section>

        <Footer />
      </div>
    </>
  );
}
