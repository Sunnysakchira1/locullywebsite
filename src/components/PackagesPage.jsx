import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import {
  FileText,
  Link2,
  BookOpen,
  Layers,
  ArrowRight,
  Check,
  Sparkles,
  Bot,
  Search,
  Globe,
  TrendingUp,
  Shield,
} from 'lucide-react';

const packages = [
  {
    id: 'content-writing',
    name: 'Content Writing',
    price: '฿39,900',
    tagline: '20 SEO/GEO/AIO articles',
    icon: FileText,
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-100',
    iconBg: 'bg-orange-100',
    iconColor: 'text-[#CC6432]',
    items: [
      'Optimized for Google + AI engines',
      'Topical authority building',
      'Internal linking structure',
    ],
    description:
      'A full content sprint — 20 long-form articles written specifically to rank in both traditional search and AI-generated answers (ChatGPT, Gemini, Google AI Overviews). Each article targets a high-intent keyword cluster and is structured so AI engines cite it as a source.',
    details: [
      {
        icon: Bot,
        title: 'Written for AI Engines',
        body: 'Each article is structured with clear headings, factual statements, and citation-friendly formatting — the signals AI models like ChatGPT and Gemini use when deciding what to recommend.',
      },
      {
        icon: Search,
        title: 'Google SEO Optimised',
        body: 'On-page SEO best practices baked in: target keywords, meta descriptions, schema-ready structure, and natural keyword density. Every article is built to rank.',
      },
      {
        icon: TrendingUp,
        title: 'Topical Authority',
        body: 'The 20 articles are planned as a cluster — not random posts. They cover your niche from multiple angles so Google and AI engines recognise you as the authority on the topic.',
      },
      {
        icon: Layers,
        title: 'Internal Linking',
        body: 'All articles are interlinked strategically to pass authority between pages and guide visitors deeper into your site — increasing time on site and conversion probability.',
      },
    ],
  },
  {
    id: 'backlink-package',
    name: 'Backlink Package',
    price: '฿49,900',
    tagline: '3 × DR50+ editorial backlinks',
    icon: Link2,
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    items: [
      '3 × niche-relevant placements',
      'Permanent do-follow links',
      'Full report on all placements',
    ],
    description:
      '3 high-authority editorial backlinks from DR50+ websites in your niche. Backlinks remain one of the strongest ranking signals for Google — and trusted links from relevant publications tell both Google and AI models that your brand is credible.',
    details: [
      {
        icon: Shield,
        title: '3 × DR50+ Domain Rating',
        body: 'We only place links on websites with a Domain Rating of 50 or above — meaning they have real authority and pass real ranking power. No PBNs, no link farms.',
      },
      {
        icon: Globe,
        title: 'Niche Relevant',
        body: 'Links are placed on websites topically relevant to your industry. A clinic gets placed on a health publication. A restaurant on a food or lifestyle site. Relevance multiplies impact.',
      },
      {
        icon: Link2,
        title: 'Permanent Do-Follow',
        body: 'The link is permanent and do-follow — meaning it continuously passes authority to your site and is never removed after a set period, unlike sponsored placements.',
      },
      {
        icon: FileText,
        title: 'Full Placement Report',
        body: 'You receive a detailed report showing the exact page the link appears on, the anchor text used, the domain metrics, and a screenshot of the live placement.',
      },
    ],
  },
  {
    id: 'premium-content',
    name: 'Premium Content Bundle',
    price: '฿79,900',
    tagline: '60 AI + Google optimized articles',
    icon: BookOpen,
    color: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    items: [
      'Full topical authority cluster',
      'GEO & AIO ready',
      'Schema markup included',
    ],
    description:
      '60 articles that comprehensively cover your entire niche. This is a full topical authority build — the kind of content strategy that makes Google and AI engines treat your site as the definitive resource in your space. Best for businesses that want to dominate search long-term.',
    details: [
      {
        icon: Layers,
        title: 'Full Topical Coverage',
        body: '60 articles are mapped across every relevant subtopic in your niche — from broad category pages to long-tail question articles. When AI engines look for sources on your topic, your site is unavoidable.',
      },
      {
        icon: Bot,
        title: 'GEO & AIO Optimised',
        body: 'GEO (Generative Engine Optimisation) is the new frontier. Every article is formatted to be cited by ChatGPT, Gemini, Claude, and Google AI Overviews — not just ranked by traditional search.',
      },
      {
        icon: Globe,
        title: 'Schema Markup Included',
        body: 'Structured data (JSON-LD schema) is added to key pages — helping Google and AI engines understand your content\'s context, improving rich snippet eligibility and AI citation rates.',
      },
      {
        icon: TrendingUp,
        title: 'Compounding Returns',
        body: 'Unlike ads that stop when you stop paying, 60 articles continue to rank, get cited, and drive traffic for years. This is the highest-ROI investment in our catalogue.',
      },
    ],
  },
  {
    id: 'premium-backlinks',
    name: 'Premium Backlink Bundle',
    price: '฿89,900',
    tagline: '5 × DR50+ editorial backlinks',
    icon: Layers,
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-100',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    items: [
      '5 × niche-matched placements',
      'Permanent do-follow links',
      'Full placement report',
    ],
    description:
      '5 high-authority editorial backlinks from DR50+ websites in your niche. Five links across five different domains — the strongest authority signal in our catalogue. For businesses in competitive markets that want to dominate.',
    details: [
      {
        icon: Shield,
        title: '5 × DR50+ Links',
        body: 'Five independent placements on five different high-authority domains. This diversified profile looks completely natural to Google and delivers a substantial, lasting boost to your domain authority.',
      },
      {
        icon: Globe,
        title: 'Niche-Matched Placements',
        body: 'Each link is placed on a site contextually relevant to your business. We research the best-fit publications for your industry so every link carries both authority and topical relevance.',
      },
      {
        icon: TrendingUp,
        title: 'Compound Authority',
        body: 'Five DR50+ links can move a site from invisible to top 3 for competitive keywords. The combined authority signal accelerates rankings faster and further than any smaller package.',
      },
      {
        icon: FileText,
        title: 'Detailed Report for Each',
        body: 'You receive a full placement report for each of the five links — domain metrics, live URL, anchor text, and screenshot. Full transparency on every placement.',
      },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const PackagesPage = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/locully/30min', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>One-Off Packages | Locully</title>
        <meta
          name="description"
          content="No retainer. No commitment. One-off SEO, content, and backlink packages priced in Thai Baht."
        />
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col">
        {/* Nav */}
        <nav className="p-4 md:p-6 flex justify-between items-center max-w-7xl mx-auto w-full border-b border-gray-100">
          <Link to="/" className="block">
            <img
              src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png"
              alt="Locully Logo"
              className="h-8 md:h-12 w-auto object-contain"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-[#CC6432] hidden md:block transition-colors">
              ← Back to Home
            </Link>
            <Button
              onClick={openCalendly}
              className="bg-[#CC6432] hover:bg-[#b0552b] text-white px-4 py-2 md:px-6 text-sm md:text-base rounded-lg font-semibold shadow-lg shadow-[#CC6432]/20 border-none"
            >
              Talk to Us
            </Button>
          </div>
        </nav>

        <main className="flex-grow">
          {/* Hero */}
          <div className="max-w-7xl mx-auto px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#CC6432]" />
              <span className="text-xs font-semibold text-[#CC6432] tracking-wide uppercase">One-Time Investment</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl md:text-6xl font-bold text-black mb-4 tracking-tight leading-tight"
            >
              One-Off Packages
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
            >
              No retainer. No commitment. Pick a package, get results — then decide if you want more.
            </motion.p>
          </div>

          {/* Packages grid */}
          <div className="max-w-7xl mx-auto px-4 pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
              {packages.map((pkg, i) => {
                const Icon = pkg.icon;
                return (
                  <motion.a
                    key={pkg.id}
                    href={`#${pkg.id}`}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className={`group relative bg-gradient-to-br ${pkg.color} border ${pkg.border} rounded-2xl p-6 flex flex-col gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline`}
                  >
                    <div className={`w-11 h-11 rounded-xl ${pkg.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${pkg.iconColor}`} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{pkg.tagline}</div>
                      <div className="text-xl font-bold text-gray-900">{pkg.name}</div>
                      <div className="text-3xl font-extrabold text-[#CC6432] mt-2">{pkg.price}</div>
                    </div>
                    <ul className="flex flex-col gap-2 mt-auto">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-[#CC6432] mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className={`flex items-center gap-1 text-sm font-semibold ${pkg.iconColor} mt-2 group-hover:gap-2 transition-all`}>
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <p className="text-center text-sm text-gray-400 pb-4">
              All packages are one-time purchases. Combine for maximum impact or{' '}
              <button onClick={openCalendly} className="text-[#CC6432] hover:underline font-medium">
                ask us to build a custom bundle.
              </button>
            </p>
          </div>

          {/* Detailed sections */}
          <div className="max-w-7xl mx-auto px-4 pb-24 flex flex-col gap-24">
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <motion.section
                  key={pkg.id}
                  id={pkg.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55 }}
                  className="scroll-mt-24"
                >
                  {/* Section header */}
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${pkg.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${pkg.iconColor}`} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{pkg.tagline}</div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{pkg.name}</h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-extrabold text-[#CC6432]">{pkg.price}</div>
                      <Button
                        onClick={openCalendly}
                        className="bg-[#CC6432] hover:bg-[#b0552b] text-white px-5 py-2 rounded-lg font-semibold border-none shadow-md shadow-[#CC6432]/20"
                      >
                        Get Started
                      </Button>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mb-10 border-l-4 border-[#CC6432] pl-5">
                    {pkg.description}
                  </p>

                  {/* Detail boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {pkg.details.map((detail, j) => {
                      const DIcon = detail.icon;
                      return (
                        <motion.div
                          key={detail.title}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.07, duration: 0.4 }}
                          className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-orange-100 hover:bg-orange-50/30 transition-colors"
                        >
                          <div className={`w-9 h-9 rounded-lg ${pkg.iconBg} flex items-center justify-center mb-4`}>
                            <DIcon className={`w-4.5 h-4.5 ${pkg.iconColor}`} />
                          </div>
                          <h3 className="text-base font-bold text-gray-900 mb-2">{detail.title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{detail.body}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {i < packages.length - 1 && (
                    <div className="mt-20 border-b border-gray-100" />
                  )}
                </motion.section>
              );
            })}
          </div>

          {/* CTA banner */}
          <div className="bg-[#1a1a1a] py-16 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Not sure which package is right?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Book a free 30-minute call and we'll tell you exactly what will move the needle for your business.
              </p>
              <Button
                onClick={openCalendly}
                size="lg"
                className="bg-[#CC6432] hover:bg-[#b0552b] text-white px-10 py-6 text-lg rounded-full font-semibold border-none shadow-xl shadow-[#CC6432]/30"
              >
                Book a Free Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PackagesPage;
