import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RotatingText from '@/components/RotatingText';
import ServicesDropdown from '@/components/ServicesDropdown';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/locully/30min', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-12 md:pt-10 md:pb-20 bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center max-w-7xl mx-auto w-full z-50">
        <Link to="/" className="block z-50">
          <img 
            src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" 
            alt="Locully Logo" 
            className="h-8 md:h-12 w-auto object-contain"
          />
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ServicesDropdown />
          <Button 
            onClick={scrollToContact}
            className="bg-[#CC6432] hover:bg-[#b0552b] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-[#CC6432]/20 border-none"
          >
            Get Your AI Audit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 p-2 text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-xl border-b border-gray-100 p-4 pt-20 flex flex-col gap-4 md:hidden z-40"
            >
              <div className="flex flex-col gap-4">
                <ServicesDropdown isMobile={true} closeMenu={() => setIsMobileMenuOpen(false)} />
                <Button 
                  onClick={scrollToContact}
                  className="bg-[#CC6432] text-white w-full py-3 rounded-lg font-semibold"
                >
                  Get Your AI Audit
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/50 via-transparent to-transparent opacity-40 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto text-center z-10 mt-8 md:mt-16 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6 md:mb-8 mx-auto max-w-[90%]"
        >
          <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#CC6432] flex-shrink-0" />
          <span className="text-xs md:text-sm font-medium text-[#666666] truncate">Locully: SEO & AI Search Visibility Experts</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.1 }} 
          className="text-4xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 text-black leading-[1.1] md:leading-tight tracking-tight px-2"
        >
          Rank #1
          <br />
          In <RotatingText />
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="text-lg md:text-2xl text-[#1F1F1F] mb-8 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Reach millions of people using ChatGPT, Google AI, Gemini and more to find products and services.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-6 mb-8 md:mb-12 px-4"
        >
          <div className="flex items-center gap-2 text-[#1F1F1F] font-medium text-sm md:text-base">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-[#CC6432]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Audit Your Brand</span>
          </div>
          <div className="flex items-center gap-2 text-[#1F1F1F] font-medium text-sm md:text-base">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-[#CC6432]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>See Your AI Visibility</span>
          </div>
          <div className="flex items-center gap-2 text-[#1F1F1F] font-medium text-sm md:text-base">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-[#CC6432]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Get Action Plan</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          className="flex flex-col w-full sm:w-auto px-4 sm:px-0 sm:flex-row items-center justify-center gap-3 md:gap-4"
        >
          <Button 
            onClick={scrollToContact} 
            size="lg" 
            className="w-full sm:w-auto bg-[#CC6432] hover:bg-[#b0552b] text-white px-8 py-6 text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-[#CC6432]/20 font-semibold border-none whitespace-nowrap"
          >
            See How We Do It
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={openCalendly} 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-2 border-black bg-white hover:bg-gray-50 text-black px-8 py-6 text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 font-medium whitespace-nowrap"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Get AI Visibility Audit
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;