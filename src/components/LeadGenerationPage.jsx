import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const LeadGenerationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openCalendly = () => {
    window.open('https://calendly.com/locully/30min', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Lead Generation & Performance Marketing | Locully</title>
        <meta name="description" content="High-performance lead generation and marketing strategies designed to scale your business." />
        <link rel="canonical" href="https://locully.org/lead-generation" />
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col">
        {/* Simple Header */}
        <nav className="p-4 md:p-6 flex justify-between items-center max-w-7xl mx-auto w-full border-b border-gray-100 md:border-none">
          <a href="/" className="block">
            <img 
              src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" 
              alt="Locully Logo" 
              className="h-8 md:h-12 w-auto object-contain"
            />
          </a>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm font-semibold text-gray-600 hover:text-[#CC6432] hidden md:block">
              Back to Home
            </a>
            <Button 
              onClick={openCalendly}
              className="bg-[#CC6432] hover:bg-[#b0552b] text-white px-4 py-2 md:px-6 md:py-2 text-sm md:text-base rounded-lg font-semibold shadow-lg shadow-[#CC6432]/20 border-none"
            >
              Contact Us
            </Button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-50 border border-orange-100 shadow-sm mb-6 md:mb-8">
                <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#CC6432]" />
                <span className="text-xs md:text-sm font-medium text-[#CC6432]">New Service Coming Soon</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 text-black tracking-tight leading-[1.1] md:leading-tight">
                Supercharge Your <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Growth Engine</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
                We are putting the finishing touches on our comprehensive Lead Generation & Performance Marketing solution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16 max-w-3xl mx-auto">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Target className="w-8 h-8 text-[#CC6432] mb-4 mx-auto" />
                  <h3 className="font-bold text-gray-900 mb-2">Precision Targeting</h3>
                  <p className="text-sm text-gray-500">Reaching the right audience.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <BarChart3 className="w-8 h-8 text-[#CC6432] mb-4 mx-auto" />
                  <h3 className="font-bold text-gray-900 mb-2">Data-Driven</h3>
                  <p className="text-sm text-gray-500">Backed by real-time analytics.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <Zap className="w-8 h-8 text-[#CC6432] mb-4 mx-auto" />
                  <h3 className="font-bold text-gray-900 mb-2">High Conversion</h3>
                  <p className="text-sm text-gray-500">Optimized funnels.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                 <Button onClick={openCalendly} size="lg" className="w-full sm:w-auto bg-[#CC6432] hover:bg-[#b0552b] text-white px-8 py-6 text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-[#CC6432]/20 font-semibold border-none">
                    Schedule Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LeadGenerationPage;