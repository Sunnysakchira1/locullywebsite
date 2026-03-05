import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, Mail } from 'lucide-react';

const FounderCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-5xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-2/5 relative min-h-[400px]">
          <img 
            src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/3500a91a4c149ce4bd90f26531350113.jpg" 
            alt="Sunny Sakchiraphong - Founder of Locully" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative bg-white">
          <Quote className="absolute top-8 right-8 text-orange-100 w-20 h-20 -z-10 transform rotate-12" />
          
          <div className="inline-block px-4 py-1.5 bg-orange-50 text-[#CC6432] text-sm font-bold tracking-wider uppercase rounded-full w-fit mb-6">
            The Founder
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Sunny Sakchiraphong
          </h3>
          <p className="text-lg text-[#CC6432] font-medium mb-6">Founder & SEO Strategist</p>
          
          <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
            <p className="mb-4">
              "After 6+ years in the SEO trenches, I realized most agencies focus on vanity metrics—traffic that doesn't convert. I built Locully to change that."
            </p>
            <p>
              "My philosophy is simple: <span className="text-gray-900 font-semibold">No impact on revenue = no point in marketing.</span> We don't just chase rankings; we chase the growth that actually builds your business."
            </p>
          </div>

          <div className="flex items-center gap-4 mt-auto">
            <a 
              href="https://www.linkedin.com/in/sunnysak/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-[#CC6432] transition-colors font-medium group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Connect on LinkedIn</span>
            </a>
            <div className="w-px h-5 bg-gray-300" />
            <a 
              href="mailto:sunny@locully.org" 
              className="flex items-center gap-2 text-gray-600 hover:text-[#CC6432] transition-colors font-medium group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Email Sunny</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#CC6432]/10 rounded-full blur-xl -z-10" />
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200/20 rounded-full blur-xl -z-10" />
    </motion.div>
  );
};

export default FounderCard;