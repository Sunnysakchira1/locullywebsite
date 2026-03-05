import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Target, TrendingUp, Users, Zap } from 'lucide-react';

const ValueProp = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Target,
      title: 'AI-First Optimization',
      description: 'Get your brand recommended by ChatGPT, Google AI, and Claude when people ask for solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Track your visibility across all major AI platforms with real-time analytics and reporting.'
    },
    {
      icon: Users,
      title: 'Reach New Audiences',
      description: 'Tap into millions of users who rely on AI for product research and recommendations.'
    },
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Our proven strategy gets you ranked in AI search results within weeks, not months.'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#cc6333]/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            The New Search Era
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            AI search visibility tools are the new Google. Your brand needs to show up when people ask AI for help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-[#cc6333]/50 transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#cc6333]/0 to-[#cc6333]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#cc6333] to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;