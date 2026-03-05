import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Users, 
  Target, 
  Database, 
  MessageCircle, 
  BarChart, 
  MapPin, 
  GraduationCap, 
  Building2, 
  Briefcase,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const LeadGenPartnerPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const openCalendly = () => {
      window.open('https://calendly.com/locully/30min', '_blank');
  };

  const services = [
    { icon: Users, title: "Local Representation", description: "Professional staff representing your brand at expos." },
    { icon: Target, title: "Lead Capture", description: "Systematic collection and qualification of leads." },
    { icon: Database, title: "CRM Integration", description: "Seamless data entry directly into your systems." },
    { icon: MessageCircle, title: "Post-Event Nurturing", description: "Immediate follow-up sequences." },
    { icon: BarChart, title: "Market Intelligence", description: "Detailed analytics on attendee demographics." }
  ];

  const expoTypes = [
    { title: "Study Abroad Fairs", icon: GraduationCap, desc: "Connecting universities with Thai students." },
    { title: "Property Expos", icon: Building2, desc: "Real estate investment opportunities." },
    { title: "Education Expos", icon: GraduationCap, desc: "International schools promotion." },
    { title: "Business Conferences", icon: Briefcase, desc: "B2B networking events." },
    { title: "Trade Shows", icon: MapPin, desc: "Industry-specific exhibitions." }
  ];

  const metrics = [
    { value: "500+", label: "Qualified Leads" },
    { value: "45%", label: "Avg. Conversion" },
    { value: "3x", label: "ROI Boost" },
    { value: "100%", label: "Data Accuracy" }
  ];

  return (
    <>
      <Helmet>
        <title>Local Marketing Partner in Thailand | Fairs & Expos | Locully</title>
        <meta name="description" content="Your Local Marketing Partner for international fairs in Thailand." />
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col font-sans">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 p-4 md:p-6 flex justify-between items-center max-w-7xl mx-auto w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <Link to="/" className="block">
            <img 
              src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" 
              alt="Locully Logo" 
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-[#CC6432]">
              Back to Home
            </Link>
            <Button 
              onClick={openCalendly}
              className="bg-[#CC6432] hover:bg-[#b0552b] text-white px-6 py-2 rounded-lg font-semibold shadow-lg shadow-[#CC6432]/20 border-none"
            >
              Partner With Us
            </Button>
          </div>
          
           <button 
            className="md:hidden p-2 text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

         {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-[70px] left-0 right-0 bg-white shadow-xl border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden z-40"
            >
               <Link to="/" className="text-gray-800 font-semibold py-2 border-b border-gray-50">Back to Home</Link>
               <Button onClick={openCalendly} className="bg-[#CC6432] text-white w-full">Partner With Us</Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
             <img 
               src="https://images.unsplash.com/photo-1695996972287-bb156e53e878" 
               alt="Busy expo hall in Bangkok" 
               className="w-full h-full object-cover object-center"
             />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-50 border border-orange-100 shadow-sm mb-4 md:mb-6">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#CC6432]" />
                <span className="text-xs md:text-sm font-bold text-[#CC6432] tracking-wide">THAILAND LOCAL PARTNER</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] md:leading-tight tracking-tight">
                Local Marketing Partner for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CC6432] to-orange-600">
                  Fairs & Expos
                </span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-700 mb-8 md:mb-10 max-w-2xl leading-relaxed">
                Expand your reach in Thailand without the overhead. We are your dedicated team of local marketing experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button onClick={openCalendly} size="lg" className="w-full sm:w-auto bg-[#CC6432] hover:bg-[#b0552b] text-white px-8 py-6 text-lg rounded-full shadow-xl shadow-[#CC6432]/20 font-bold">
                  Start Your Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section - UPDATED COLORS */}
        <section className="py-16 md:py-20 bg-[#1F1F1F]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Local Experts in a <br />
                <span className="text-[#CC6432]">Global Marketplace</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
                Navigating Thailand's exhibition sector demands local insight and cultural fluency.
              </p>
              <ul className="space-y-4">
                {["Cultural fluency support", "Instant lead qualification", "Cost-effective market entry"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#CC6432]/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-[#CC6432]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="font-medium text-gray-100 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] md:h-auto border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1695060704188-4a86d4be9721" 
                alt="Modern Bangkok cityscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-8">
                <div className="text-white">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-orange-400 mb-1 md:mb-2">Why Thailand?</p>
                  <h3 className="text-xl md:text-2xl font-bold">A Strategic Hub</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Services */}
        <section className="py-16 md:py-24 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">Comprehensive Support</h2>
              <p className="text-lg md:text-xl text-gray-600">We don't just hand out brochures. We build pipelines.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#CC6432] transition-colors duration-300">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-[#CC6432] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expo Types */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="lg:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Events We Cover</h2>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                  From massive international trade shows at BITEC to niche luxury expos.
                </p>
                <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                   <img 
                    src="https://images.unsplash.com/photo-1703757931698-6b905414d019" 
                    alt="Trade show booth setup" 
                    className="w-full h-48 md:h-64 object-cover"
                   />
                </div>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {expoTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 md:p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col gap-3 md:gap-4"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="p-2 md:p-3 bg-white rounded-lg shadow-sm">
                        <type.icon className="w-5 h-5 md:w-6 md:h-6 text-[#CC6432]" />
                      </div>
                      <h3 className="font-bold text-base md:text-lg text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600">{type.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics / CTA */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-[#1F1F1F] text-white">
          <div className="absolute inset-0 z-0 opacity-20">
             <img 
               src="https://images.unsplash.com/photo-1471823753859-b9e1e4583bc6" 
               alt="Data analytics dashboard" 
               className="w-full h-full object-cover"
             />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Proven Impact</h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Our partners see immediate results.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20 border-t border-b border-white/10 py-8 md:py-12">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-[#CC6432] mb-1 md:mb-2">{metric.value}</div>
                  <div className="text-xs md:text-base text-gray-400 font-medium uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#CC6432] to-orange-600 rounded-3xl p-6 md:p-12 text-center shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Ready to Dominate Your Next Expo?</h3>
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Let Locully represent your brand with excellence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={openCalendly}
                  className="bg-white text-[#CC6432] hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-bold shadow-lg w-full sm:w-auto"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LeadGenPartnerPage;