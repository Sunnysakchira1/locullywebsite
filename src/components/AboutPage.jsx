import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  ShoppingCart, 
  ShieldCheck, 
  HeartPulse, 
  Flower2, 
  Utensils, 
  LineChart, 
  ArrowRight,
  TrendingUp,
  Target,
  Users,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import FounderCard from './FounderCard';
import IndustryCard from './IndustryCard';

const AboutPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openCalendly = () => {
    window.open('https://calendly.com/locully/30min', '_blank');
  };

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
        <title>About Locully | SEO & Revenue-Focused Marketing</title>
        <meta name="description" content="Locully is a revenue-focused SEO agency. We drive growth." />
      </Helmet>

      <div className="min-h-screen bg-white font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center max-w-7xl mx-auto w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <Link to="/" className="block">
            <img 
              src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" 
              alt="Locully Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-[#CC6432]">
              Back to Home
            </Link>
            <Button 
              onClick={openCalendly}
              className="bg-[#CC6432] hover:bg-[#b0552b] text-white px-6 py-2 rounded-lg font-semibold shadow-lg shadow-[#CC6432]/20 border-none"
            >
              Speak to Us
            </Button>
          </div>

          <button 
            className="md:hidden p-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[70px] left-0 right-0 bg-white shadow-xl border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden z-40"
            >
               <Link to="/" className="text-gray-800 font-semibold py-2 border-b border-gray-50">Back to Home</Link>
               <Button onClick={openCalendly} className="bg-[#CC6432] text-white w-full">Speak to Us</Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="pt-28 pb-12 md:pt-48 md:pb-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 md:mb-8 leading-[1.1] md:leading-tight tracking-tight">
                We Don't Just Do Marketing. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC6432] to-orange-600">
                  We Drive Revenue.
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
                Locully is an agency built on the belief that traffic is vanity, and conversion is sanity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Meet The Mind Behind Locully</h2>
              <div className="w-16 md:w-20 h-1 bg-[#CC6432] mx-auto rounded-full" />
            </div>
            <FounderCard />
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Adaptability is Our <br />
                  <span className="text-[#CC6432]">Superpower</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                  The digital landscape changes daily. Rigid strategies die fast.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                  At Locully, we don't believe in cookie-cutter solutions. We build <strong>agile, data-driven strategies</strong>.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-orange-50 rounded-lg mt-1">
                      <TrendingUp className="w-5 h-5 text-[#CC6432]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Revenue-First Mindset</h4>
                      <p className="text-gray-600 text-sm">We optimize for your bottom line.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="absolute inset-0 bg-[#CC6432] rounded-3xl transform rotate-3 opacity-10" />
                <div className="bg-gray-50 p-6 md:p-12 rounded-3xl border border-gray-100 relative shadow-xl">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Why Clients Choose Us</h3>
                  <ul className="space-y-4">
                    {[
                      "We treat your business like our own.",
                      "Transparent reporting.",
                      "Deep expertise in technical SEO.",
                      "Direct access to senior strategists."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#CC6432] flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries We've Mastered */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Industries We've Mastered</h2>
              <p className="text-lg md:text-xl text-gray-600">
                Diverse experience means cross-industry insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {industries.map((industry, index) => (
                <IndustryCard key={index} {...industry} index={index} />
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: industries.length * 0.1 }}
                onClick={openCalendly}
                className="group relative p-6 md:p-8 bg-[#CC6432] rounded-2xl shadow-lg cursor-pointer flex flex-col justify-center items-center text-center text-white min-h-[250px]"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Your Industry</h3>
                <p className="text-white/90 text-sm mb-4">Don't see your sector? Let's talk.</p>
                <div className="font-bold border-b border-white pb-0.5 inline-flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-8">
              Ready to Stop Guessing?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-2xl mx-auto">
              Your competition isn't waiting. Let's build a strategy that turns your website into your best salesperson.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={openCalendly}
                className="bg-[#CC6432] hover:bg-[#b0552b] text-white px-8 md:px-10 py-6 md:py-7 text-lg rounded-full shadow-xl shadow-[#CC6432]/30 font-bold w-full sm:w-auto"
              >
                Speak to Us
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-orange-100/40 rounded-full blur-3xl -z-10" />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;