import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { User, Cpu, ArrowRight } from 'lucide-react';

const AiRecommendationFlow = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            What Happens When AI Starts Recommending You?
          </h2>
          <p className="text-xl text-[#1F1F1F] max-w-3xl mx-auto">
            Instead of fighting for clicks, you become the{' '}
            <span className="relative inline-block px-3 py-1 mx-1 font-bold text-[#CC6432] text-2xl md:text-3xl bg-[#FFF4ED] rounded-lg shadow-[0_0_15px_rgba(204,100,50,0.3)]">
              trusted recommendation
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#CC6432] to-orange-400 animate-pulse rounded-full"></span>
            </span>{' '}
            provided by the smartest algorithms.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8">
          
          {/* Step 1: User */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="w-24 h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mb-6 relative">
              <User className="w-10 h-10 text-[#666666]" />
              <div className="absolute -top-2 -right-2 bg-[#CC6432] text-white text-xs font-bold px-2 py-1 rounded-full">Ask</div>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Ready-to-book patient</h3>
            <p className="text-[#1F1F1F]">"What are the best botox clinics in Bangkok?"</p>
          </motion.div>

          {/* Arrow 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="hidden md:block"
          >
            <ArrowRight className="w-8 h-8 text-gray-300" />
          </motion.div>

          {/* Step 2: AI Brain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center text-center max-w-xs relative"
          >
             {/* Pulse Effect */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-50 rounded-full animate-ping opacity-20" />
            
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center mb-6 shadow-xl z-10">
              <Cpu className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">AI Processing</h3>
            <p className="text-[#1F1F1F]">Analyzes millions of data points to find the "Best" authority.</p>
          </motion.div>

          {/* Arrow 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="hidden md:block"
          >
            <ArrowRight className="w-8 h-8 text-[#CC6432]" />
          </motion.div>

          {/* Step 3: Brand */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col items-center text-center max-w-xs"
          >
            <div className="w-24 h-24 rounded-full bg-white border-4 border-[#CC6432] flex items-center justify-center mb-6 shadow-lg shadow-orange-100">
              <span className="text-5xl">👉</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-2">Your Brand Is Chosen</h3>
            <p className="text-[#1F1F1F]">Your brand is presented as the verified solution.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AiRecommendationFlow;