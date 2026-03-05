import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Search, MessageSquare, X, CheckCircle2 } from 'lucide-react';

const HowPeopleSearch = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 relative bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#CC6432]/10 border border-[#CC6432]/20 mb-4">
            <span className="text-[#CC6432] text-xs md:text-sm font-bold tracking-wide">THE SHIFT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-black">
            How People Search Now
          </h2>
          <p className="text-lg md:text-xl text-[#1F1F1F] max-w-3xl mx-auto leading-relaxed px-2">
            AI search visibility tools are the new Google. Your brand needs to show up when people ask AI for help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Old Search */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 md:p-8 rounded-3xl bg-white border border-gray-200 shadow-sm"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 md:w-8 md:h-8 text-[#666666]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">Old search is dying</h3>
                <p className="text-[#666666] text-sm md:text-base">Traditional Blue Links</p>
              </div>
            </div>

            <div className="aspect-video rounded-2xl bg-[#F9F9F9] mb-6 flex items-center justify-center p-4 md:p-8 border border-gray-100">
              <div className="w-full max-w-md">
                <div className="bg-white rounded-full px-4 py-3 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 shadow-sm border border-gray-200">
                  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="2"/>
                    <path d="M12 7v5l3 3" stroke="#EA4335" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[#666666] text-xs md:text-sm truncate">Best botox clinics in Bangkok...</span>
                  <Search className="w-4 h-4 md:w-5 md:h-5 text-[#666666] ml-auto" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 md:h-4 bg-blue-100 rounded w-3/4"></div>
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 md:h-4 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-red-50 p-4 rounded-xl border border-red-100">
              <X className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-red-500" />
              <p className="text-[#1F1F1F] text-sm md:text-base">
                People don't run through Google search results anymore. They're looking for immediate answers.
              </p>
            </div>
          </motion.div>

          {/* New Search */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative p-6 md:p-8 rounded-3xl bg-white border-2 border-[#CC6432]/20 shadow-xl shadow-[#CC6432]/5"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#CC6432]/10 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-[#CC6432]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black">People ask AI</h3>
                <p className="text-[#CC6432] font-medium text-sm md:text-base">AI Picks the Winner</p>
              </div>
            </div>

            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#CC6432]/5 to-orange-50 mb-6 flex items-center justify-center p-4 md:p-8 border border-[#CC6432]/10">
              <div className="w-full max-w-md space-y-4">
                <div className="bg-white rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#CC6432]" />
                    <span className="text-[10px] md:text-xs text-[#666666] font-mono uppercase tracking-wider">User Query</span>
                  </div>
                  <p className="text-black font-medium text-sm md:text-base">"What are the best botox clinics in Bangkok?"</p>
                </div>
                <div className="bg-black rounded-xl p-3 md:p-4 text-white text-xs md:text-sm relative">
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-black rotate-45"></div>
                  Based on patient reviews, <span className="font-bold text-[#CC6432]">Elite Aesthetic Clinic</span> is highly recommended...
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-xl border border-green-100">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-green-600" />
              <p className="text-[#1F1F1F] text-sm md:text-base">
                Tools like ChatGPT provide authoritative answers. We make sure your brand is that answer.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowPeopleSearch;