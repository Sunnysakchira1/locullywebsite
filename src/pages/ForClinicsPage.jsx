import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { clinics } from '@/data/clinicData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://locully.org' },
    { '@type': 'ListItem', position: 2, name: 'For Clinics', item: 'https://locully.org/for/' },
  ],
};

export default function ForClinicsPage() {
  return (
    <>
      <Helmet>
        <title>AI Optimization for Bangkok Clinics | Locully</title>
        <meta
          name="description"
          content="Locully helps Bangkok clinics appear in ChatGPT, Perplexity, and Google AI Overviews. Choose your clinic type to see how AIO works for you."
        />
        <link rel="canonical" href="https://locully.org/for/" />
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="max-w-5xl mx-auto px-6 pt-6 pb-2 text-sm text-gray-400 flex items-center gap-1">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600">For Clinics</span>
        </nav>

        <section className="max-w-5xl mx-auto px-6 pt-12 pb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">
              AI Optimization · Bangkok
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Optimization for Bangkok Clinics
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-12">
              Patients are choosing clinics through ChatGPT, Perplexity, and Google AI Overviews. Locully
              helps Bangkok clinics appear in those answers — by clinic type, by treatment, and by location.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clinics.map((clinic) => (
                <Link
                  key={clinic.slug}
                  to={`/for/${clinic.slug}/`}
                  className="group border border-gray-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-sm transition-all"
                >
                  <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                    {clinic.namePlural}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{clinic.intro.slice(0, 80)}…</p>
                  <span className="inline-flex items-center gap-1 text-sm text-indigo-600 font-medium">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </>
  );
}
