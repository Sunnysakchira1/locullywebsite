import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-[60px] px-10 bg-[#F9F9F9] border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Logo */}
          <div className="flex justify-center lg:justify-start">
            <Link to="/">
              <img 
                src="https://horizons-cdn.hostinger.com/ca6fff5d-5563-48f9-b39f-3faa84296ff9/68e793544c569f64d62f0f8841197574.png" 
                alt="Locully Logo" 
                className="w-[180px] md:w-[220px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Middle Column: Links */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <Link to="/" className="text-[#666666] hover:text-[#CC6432] transition-colors cursor-pointer text-base font-medium">Home</Link>
            <Link to="/lead-gen-partner" className="text-[#666666] hover:text-[#CC6432] transition-colors cursor-pointer text-base font-medium">Lead Gen Partner</Link>
            <span className="text-[#666666] hover:text-[#CC6432] transition-colors cursor-pointer text-base font-medium">Privacy Policy</span>
            <span className="text-[#666666] hover:text-[#CC6432] transition-colors cursor-pointer text-base font-medium">Terms of Service</span>
            <span className="text-[#666666] hover:text-[#CC6432] transition-colors cursor-pointer text-base font-medium">Contact</span>
          </div>

          {/* Right Column: Company Info */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-2">
            <h3 className="text-black text-2xl font-bold">Locully</h3>
            <p className="text-[#666666] text-base">SEO & AI Visibility Experts</p>
            <p className="text-[#666666] text-base">Rank #1 in AI Search</p>
            <div className="pt-2">
              <p className="text-[#666666] text-sm">Contact: <a href="mailto:sunny@locully.org" className="hover:text-[#CC6432]">sunny@locully.org</a></p>
              <p className="text-[#666666] text-sm">+66 62 695 9444</p>
            </div>
          </div>

        </div>

        {/* Bottom Row: Social & Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col items-center gap-6">
           <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/locully" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#CC6432] hover:border-[#CC6432] hover:text-white transition-all text-[#1F1F1F]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/locully.th" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#CC6432] hover:border-[#CC6432] hover:text-white transition-all text-[#1F1F1F]">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-[#666666] text-sm text-center">© 2026 Locully Co. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;