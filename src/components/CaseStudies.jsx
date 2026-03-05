import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1
  });

  const studies = [
    {
      company: 'Physio & Wellness Clinic, Bangkok',
      industry: 'HEALTHCARE',
      stats: [
        { value: '+350%', label: 'AI Mentions' },
        { value: '90%', label: 'Top 3 Rankings' },
        { value: '20-25', label: 'AI Enquiries/Mo' }
      ],
      prompts: [
        "Best physiotherapist in Thonglor",
        "Physio for runners Bangkok",
        "Best chinese medicine clinic"
      ],
      achievement: "Increased AI mentions from 30 to 112. Now appears in Top 3 for 90% of all physio-related AI prompts.",
    },
    {
      company: 'Beauty Clinic, Bangkok',
      industry: 'AESTHETICS',
      stats: [
        { value: '+289%', label: 'AI Mentions' },
        { value: '70%', label: 'Top 3 Rankings' },
        { value: '10-12', label: 'AI Enquiries/Mo' }
      ],
      prompts: [
        "Best Botox clinic Bangkok",
        "Where to get fillers in Bangkok",
        "Top aesthetic clinic Bangkok"
      ],
      achievement: "Featured in ChatGPT's top recommendations. 75% conversion rate from AI-referred leads.",
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50/50 relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            Real Results, Real Growth
          </h2>
          <p className="text-lg md:text-xl text-[#1F1F1F] max-w-3xl mx-auto px-2">
            See how Bangkok Clinics have transformed their AI Visibility with Locully
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {studies.map((study, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              className="flex flex-col h-auto lg:min-h-[600px] bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100"
            >
              {/* Header */}
              <div className="mb-6 md:mb-8">
                 <span className="inline-block px-3 py-1 rounded-full bg-[#FFF4ED] text-[#CC6432] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3">
                  {study.industry}
                </span>
                <h3 className="text-xl md:text-3xl font-bold text-black leading-tight min-h-[auto] md:min-h-[64px] flex items-center">
                  {study.company}
                </h3>
              </div>

              {/* Stats - Horizontal Row Layout */}
              <div className="grid grid-cols-3 gap-2 md:gap-6 lg:gap-8 mb-8 md:mb-10 border-b border-gray-100 pb-6 md:pb-8">
                {study.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col text-center md:text-left">
                     <span className="text-[#CC6432] font-extrabold text-xl md:text-[26px] leading-none mb-2 tracking-tight">
                       {stat.value}
                     </span>
                     <span className="text-[#666666] font-normal text-[10px] md:text-[13px] uppercase tracking-wide leading-tight">
                       {stat.label}
                     </span>
                  </div>
                ))}
              </div>

              {/* Prompts */}
              <div className="mb-6 md:mb-8 p-4 md:p-5 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Dominating Prompts
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.prompts.map((kw, idx) => (
                    <span key={idx} className="inline-block px-2 py-1 md:px-2.5 md:py-1.5 bg-white border border-gray-100 rounded-md text-[10px] md:text-[11px] font-medium text-gray-600 shadow-sm">
                      "{kw}"
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievement Text */}
              <div className="mb-6 flex-grow">
                <p className="text-[#1F1F1F] text-sm md:text-base leading-relaxed">
                  {study.achievement}
                </p>
              </div>
              
              {/* Link */}
              <div className="mt-auto pt-4 border-t border-transparent">
                <a
                  href="https://locully-client-success-m8a58k2.gamma.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#CC6432] hover:text-[#b0552b] font-bold text-sm md:text-base transition-colors group"
                >
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;