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
    timeoutId = setTimeout(() => setIsOpen(false), 150);
  };

  const toggleDropdown = () => {
    if (isMobile) setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (closeMenu) closeMenu();
    setIsOpen(false);
  };

  const linkStyle = {
    display: 'block', padding: '14px 20px', textDecoration: 'none',
    transition: 'background 0.15s',
    borderRadius: '0'
  };

  return (
    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? 0 : '28px' }}>
      <Link
        to="/about"
        style={{
          color: 'var(--muted)', fontWeight: 500, fontSize: '14px', textDecoration: 'none',
          padding: isMobile ? '12px 0' : '8px 0',
          borderBottom: isMobile ? '1px solid var(--bdr)' : 'none',
          width: isMobile ? '100%' : 'auto', transition: 'color 0.2s'
        }}
        onClick={handleLinkClick}
        onMouseEnter={e => e.target.style.color = 'var(--terra)'}
        onMouseLeave={e => e.target.style.color = 'var(--muted)'}
      >
        About
      </Link>

      <div
        style={{ position: isMobile ? 'static' : 'relative', zIndex: 50, width: isMobile ? '100%' : 'auto' }}
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: 'var(--muted)', fontWeight: 500, fontSize: '14px',
            background: 'none', border: 'none', cursor: 'pointer',
            padding: isMobile ? '12px 0' : '8px 0',
            width: isMobile ? '100%' : 'auto',
            justifyContent: isMobile ? 'space-between' : 'flex-start',
            transition: 'color 0.2s'
          }}
          aria-expanded={isOpen}
          onClick={toggleDropdown}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--terra)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
        >
          Services
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown style={{ width: '15px', height: '15px' }} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 }}
              animate={isMobile ? { height: 'auto', opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              exit={isMobile ? { height: 0, opacity: 0 } : { opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              style={isMobile ? {
                overflow: 'hidden', background: 'var(--surface)',
                borderRadius: '8px', marginTop: '8px', width: '100%'
              } : {
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                width: '260px', background: 'var(--bg3)',
                border: '1px solid var(--bdr2)', borderRadius: '10px',
                overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.5)'
              }}
            >
              <div style={{ padding: '8px 0' }}>
                <Link to="/ai-search-visibility" style={linkStyle} onClick={handleLinkClick}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(204,100,50,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600, color: 'var(--cream)', marginBottom: '3px' }}>
                    AI Search Visibility
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)' }}>
                    Rank #1 in ChatGPT, Perplexity & Google AI
                  </div>
                </Link>

                <div style={{ height: '1px', background: 'var(--bdr)', margin: '0 16px' }} />

                <Link to="/ai-optimization/" style={linkStyle} onClick={handleLinkClick}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(204,100,50,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600, color: 'var(--cream)', marginBottom: '3px' }}>
                    AI Optimization for Clinics
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)' }}>
                    Get recommended by ChatGPT & Perplexity
                  </div>
                </Link>

                <div style={{ height: '1px', background: 'var(--bdr)', margin: '0 16px' }} />

                <Link to="/lead-gen-partner" style={linkStyle} onClick={handleLinkClick}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(204,100,50,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600, color: 'var(--cream)', marginBottom: '3px' }}>
                    Lead Gen Partner
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)' }}>
                    Local Marketing Partner for Expos
                  </div>
                </Link>

                <div style={{ height: '1px', background: 'var(--bdr)', margin: '0 16px' }} />

                <Link to="/packages" style={linkStyle} onClick={handleLinkClick}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(204,100,50,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600, color: 'var(--cream)', marginBottom: '3px' }}>
                    One-Off Packages
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)' }}>
                    Content, backlinks & SEO — no retainer
                  </div>
                </Link>

                <div style={{ height: '1px', background: 'var(--bdr)', margin: '0 16px' }} />

                <Link to="/blog/" style={linkStyle} onClick={handleLinkClick}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(204,100,50,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '13px', fontWeight: 600, color: 'var(--cream)', marginBottom: '3px' }}>
                    Blog
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)' }}>
                    AI search guides for clinics
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
