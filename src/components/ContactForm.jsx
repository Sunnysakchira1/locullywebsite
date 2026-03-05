import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { logFormSubmission, logConversion, logEvent } from '@/lib/analytics';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1
  });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Request Sent! 🚀",
        description: "We've received your audit request.",
      });
      logFormSubmission('AI Visibility Audit Request', true);
      setTimeout(() => {
        setFormData({ name: '', email: '', website: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black px-2">
            Get Your Free AI Audit
          </h2>
          <p className="text-lg md:text-xl text-[#1F1F1F] max-w-2xl mx-auto px-4">
            See where you rank in ChatGPT, Google AI, and Claude.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="relative max-w-3xl mx-auto p-6 md:p-12 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/50 mb-12 md:mb-20"
        >
          <form onSubmit={handleSubmit} className="relative z-10 space-y-5 md:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-black text-base md:text-lg font-medium">
                Your Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="h-12 md:h-14 bg-[#F9F9F9] border-gray-200 text-black placeholder:text-gray-400 focus:border-[#CC6432] focus:ring-[#CC6432] rounded-xl text-base md:text-lg w-full"
                disabled={isSubmitting || isSubmitted}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-black text-base md:text-lg font-medium">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="h-12 md:h-14 bg-[#F9F9F9] border-gray-200 text-black placeholder:text-gray-400 focus:border-[#CC6432] focus:ring-[#CC6432] rounded-xl text-base md:text-lg w-full"
                disabled={isSubmitting || isSubmitted}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-black text-base md:text-lg font-medium">
                Website URL *
              </Label>
              <Input
                id="website"
                name="website"
                type="url"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                className="h-12 md:h-14 bg-[#F9F9F9] border-gray-200 text-black placeholder:text-gray-400 focus:border-[#CC6432] focus:ring-[#CC6432] rounded-xl text-base md:text-lg w-full"
                disabled={isSubmitting || isSubmitted}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || isSubmitted}
              className={`w-full h-12 md:h-14 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 ${
                isSubmitted 
                  ? 'bg-green-600 hover:bg-green-600' 
                  : 'bg-[#CC6432] hover:bg-[#b0552b]'
              } text-white shadow-xl shadow-[#CC6432]/20 hover:scale-[1.02] disabled:opacity-50 border-none`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Request Sent!
                </>
              ) : (
                <>
                  Get Free Audit
                  <Send className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
            
            <p className="text-center text-xs md:text-sm text-[#666666]">
              🔒 Secure submission. We respect your privacy.
            </p>
          </form>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={isInView ? { opacity: 1 } : {}} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="text-xs md:text-sm font-bold text-[#666666] uppercase tracking-wide mb-2">Growth</div>
            <div className="text-3xl md:text-4xl font-bold text-[#CC6432] mb-2">+280%</div>
            <div className="text-[#1F1F1F] font-medium text-sm md:text-base">more enquiries</div>
          </div>
          
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="text-xs md:text-sm font-bold text-[#666666] uppercase tracking-wide mb-2">Visibility</div>
            <div className="text-3xl md:text-4xl font-bold text-[#CC6432] mb-2">70%</div>
            <div className="text-[#1F1F1F] font-medium text-sm md:text-base">Top 3 Ranking</div>
          </div>
          
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <div className="text-xs md:text-sm font-bold text-[#666666] uppercase tracking-wide mb-2">Quality</div>
            <div className="text-3xl md:text-4xl font-bold text-[#CC6432] mb-2">4.4x</div>
            <div className="text-[#1F1F1F] font-medium text-sm md:text-base">conversion rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;