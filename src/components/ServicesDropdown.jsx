import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesDropdown = ({ isMobile = false, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutId = null;

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutId) clearTimeout(timeoutId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const toggleDropdown = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (closeMenu) closeMenu();
    setIsOpen(false);
  };

  return (
    <div className={`flex ${isMobile ? 'flex-col items-start w-full' : 'flex-row items-center gap-6'}`}>
      <Link 
        to="/about" 
        className={`text-[#1F1F1F] font-semibold hover:text-[#CC6432] transition-colors ${isMobile ? 'py-3 w-full border-b border-gray-50' : 'py-2'}`}
        onClick={handleLinkClick}
      >
        About
      </Link>

      <div 
        className={`${isMobile ? 'w-full' : 'relative z-50'}`}
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          className={`flex items-center gap-1.5 text-[#1F1F1F] font-semibold hover:text-[#CC6432] transition-colors ${isMobile ? 'py-3 w-full justify-between' : 'py-2'}`}
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          Services
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
              animate={isMobile ? { height: 'auto', opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={isMobile 
                ? 'overflow-hidden bg-gray-50 rounded-lg w-full mt-2' 
                : 'absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden'
              }
            >
              <div className={isMobile ? 'py-2' : 'py-2'}>
                <Link 
                  to="/" 
                  className="block px-5 py-3.5 hover:bg-orange-50 transition-colors group"
                  onClick={handleLinkClick}
                >
                  <div className="text-sm font-bold text-gray-900 group-hover:text-[#CC6432] mb-0.5">
                    SEO & AIO
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    Rank #1 in AI Search Results
                  </div>
                </Link>
                
                <div className="h-px bg-gray-100 mx-5 my-1" />
                
                <Link 
                  to="/lead-gen-partner" 
                  className="block px-5 py-3.5 hover:bg-orange-50 transition-colors group"
                  onClick={handleLinkClick}
                >
                  <div className="text-sm font-bold text-gray-900 group-hover:text-[#CC6432] mb-0.5">
                    Lead Gen Partner
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    Local Marketing Partner for Expos
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesDropdown;