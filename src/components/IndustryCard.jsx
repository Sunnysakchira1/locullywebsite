import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const IndustryCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 bg-white rounded-2xl border border-gray-100 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowUpRight className="w-6 h-6 text-[#CC6432]" />
      </div>

      <div className="w-14 h-14 rounded-xl bg-gray-50 group-hover:bg-orange-50 flex items-center justify-center mb-6 transition-colors duration-300">
        <Icon className="w-7 h-7 text-gray-600 group-hover:text-[#CC6432] transition-colors duration-300" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#CC6432] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      <div className="absolute bottom-0 left-0 h-1 bg-[#CC6432] w-0 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
};

export default IndustryCard;