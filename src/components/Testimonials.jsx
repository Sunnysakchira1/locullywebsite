import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const testimonials = [
    {
      name: 'Clinic Owner',
      role: 'Physio & Wellness',
      content: 'We went from Page 3 to #1 for "best physio Bangkok" in 90 days. Patient calls increased 172%.',
      rating: 5
    },
    {
      name: 'Marketing Director',
      role: 'Aesthetic Clinic',
      content: 'Locully\'s AI visibility strategy was a game-changer. Organic enquiries doubled in 6 months.',
      rating: 5
    },
    {
      name: 'Founder',
      role: 'Wellness Brand',
      content: 'The quality of patients from AI search is remarkable. Conversion rate is 4x higher than Google Ads.',
      rating: 5
    }
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            Success Stories
          </h2>
          <p className="text-lg md:text-xl text-[#1F1F1F] max-w-3xl mx-auto px-2">
            Trusted by Bangkok's leading clinics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-[#CC6432] text-[#CC6432]" />
                ))}
              </div>

              <p className="text-[#1F1F1F] mb-6 md:mb-8 leading-relaxed flex-grow text-base md:text-lg italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3 md:gap-4 mt-auto pt-4 md:pt-6 border-t border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex-shrink-0" />
                <div>
                  <div className="font-bold text-black text-sm md:text-base">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-[#666666]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;