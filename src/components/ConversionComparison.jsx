import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, Search, CheckCircle, ArrowDown } from 'lucide-react';

const ConversionComparison = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            AI Search Traffic Converts at 4.4X
          </h2>
          <p className="text-lg md:text-xl text-[#1F1F1F]">Quality over quantity. Why AI traffic is worth more.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-center mb-12 md:mb-16">
          
          {/* Traditional Search Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="flex-1 w-full lg:w-auto bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm relative z-0 h-full"
          >
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gray-100">
                    <Search className="w-6 h-6 text-[#666666]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-700">Traditional Search</h3>
             </div>
             
             <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-[#666666] font-medium text-sm md:text-base">Visitors</span>
                    <span className="text-xl md:text-2xl font-bold text-black">100</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                    <span className="text-[#666666] font-medium text-sm md:text-base">Conversion Rate</span>
                    <span className="text-xl md:text-2xl font-bold text-[#666666]">2-3%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 border border-gray-100 rounded-xl">
                    <span className="text-black font-medium text-sm md:text-base">New Leads</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#666666]">2-3</span>
                </div>
                <div className="text-center pt-2">
                    <span className="text-sm text-[#666666] italic">Higher volume, lower intent</span>
                </div>
             </div>
          </motion.div>

          {/* Arrow Connection */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.4, delay: 0.4 }} 
            className="z-10 -my-4 lg:my-0 lg:-mx-4 flex flex-col items-center gap-2"
          >
            <div className="hidden lg:flex w-16 h-16 rounded-full bg-[#CC6432] items-center justify-center shadow-lg border-4 border-[#F9F9F9]">
                <ArrowRight className="w-8 h-8 text-white" />
            </div>
            {/* Mobile Arrow (Down) */}
            <div className="lg:hidden w-12 h-12 rounded-full bg-[#CC6432] flex items-center justify-center shadow-lg border-4 border-[#F9F9F9]">
                <ArrowDown className="w-6 h-6 text-white" />
            </div>
            <span className="text-[#CC6432] font-bold text-xs md:text-sm tracking-wide bg-[#F9F9F9] px-2">THE SHIFT</span>
          </motion.div>

          {/* AI Recommendation Card - WINNER */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.6, delay: 0.4 }} 
            className="flex-1 w-full lg:w-auto bg-[#FFF4ED] p-6 md:p-8 rounded-3xl border-2 border-[#CC6432]/30 shadow-xl shadow-[#CC6432]/10 relative z-0 h-full"
          >
             <div className="absolute -top-3 right-4 md:-top-4 md:-right-4 bg-[#CC6432] text-white px-3 py-1 md:px-4 rounded-full text-xs md:text-sm font-bold shadow-md">
                WINNER
             </div>
             <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[#CC6432]/20">
                    <CheckCircle className="w-6 h-6 text-[#CC6432]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-black">AI Recommendation</h3>
             </div>
             
             <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/60 rounded-xl">
                    <span className="text-[#666666] font-medium text-sm md:text-base">Visitors</span>
                    <span className="text-xl md:text-2xl font-bold text-black">100</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white border border-[#CC6432]/20 rounded-xl">
                    <span className="text-[#CC6432] font-medium text-sm md:text-base">Conversion Rate</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl md:text-2xl font-bold text-[#CC6432]">10%+</span>
                      <span className="text-[10px] md:text-xs bg-[#CC6432] text-white px-2 py-0.5 rounded-full font-bold">4.4X</span>
                    </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#CC6432]/10 border border-[#CC6432]/20 rounded-xl">
                    <span className="text-black font-medium text-sm md:text-base">New Leads</span>
                    <span className="text-2xl md:text-3xl font-bold text-[#CC6432]">10-15</span>
                </div>
                <div className="text-center pt-2">
                    <span className="text-sm text-[#CC6432] font-medium italic">Lower volume, higher intent</span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Callout Box */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.6, delay: 0.6 }} 
              className="bg-[#FFF4ED] border border-[#CC6432]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-4 md:gap-6 shadow-sm"
          >
              <div className="p-2 bg-[#CC6432] rounded-full flex-shrink-0 mt-1 hidden md:block">
                  <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                  <h4 className="text-black text-lg md:text-xl font-bold mb-2 md:mb-3 flex items-center gap-2">
                    <span className="md:hidden p-1.5 bg-[#CC6432] rounded-full"><CheckCircle className="w-4 h-4 text-white" /></span>
                    Pre-Qualified Leads
                  </h4>
                  <p className="text-[#1F1F1F] text-base md:text-lg leading-relaxed">
                      AI search delivers pre-qualified leads who've already researched options. The user has already been 'sold' by the AI. They arrive ready to book.
                  </p>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConversionComparison;