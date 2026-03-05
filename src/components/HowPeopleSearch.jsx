import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const HowPeopleSearch = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  return (
    <section ref={ref} className="l-section l-bg">
      <div className="l-container">
        <div className="l-sec-head-center reveal" style={{opacity:inView?1:0,transform:inView?'none':'translateY(24px)',transition:'all 0.6s ease'}}>
          <span className="l-label" style={{justifyContent:'center'}}>The Shift</span>
          <h2 className="l-h2" style={{marginTop:16,textAlign:'center'}}>How People Search <em className="l-serif-em">Now</em></h2>
          <p className="l-body" style={{maxWidth:560,margin:'16px auto 0',textAlign:'center'}}>AI search tools are replacing Google. Your brand needs to show up when people ask AI — not just when they scroll blue links.</p>
        </div>
        <div className="l-search-grid" style={{marginTop:64}}>
          <motion.div className="l-search-card" initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.2}}>
            <div className="l-sc-head"><span className="l-sc-tag l-sc-tag-dead">Traditional Search</span><span className="l-sc-badge l-sc-badge-dead">Declining</span></div>
            <div className="l-sc-body">
              <div className="l-serp-bar">
                <svg style={{width:16,height:16,opacity:0.3,stroke:'rgba(255,255,255,0.4)',fill:'none',strokeWidth:2}} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <span className="l-serp-query">"best botox clinic bangkok"</span>
              </div>
              <div className="l-serp-list">
                <div className="l-serp-item"><span className="l-serp-url">www.bangkokpost.com › health</span><span className="l-serp-title">Top 10 Botox Clinics in Bangkok 2024</span><span className="l-serp-snip">A roundup of the most popular clinics based on price...</span></div>
                <div className="l-serp-item"><span className="l-serp-url">ads · bangkokbotox.com</span><span className="l-serp-title">Bangkok Botox Specials — from ฿2,999</span><span className="l-serp-snip">Certified doctors. Walk-in available. Book now...</span></div>
                <div className="l-serp-item"><span className="l-serp-url">tripadvisor.com › Bangkok</span><span className="l-serp-title">Best Aesthetic Clinics — Traveller Reviews</span><span className="l-serp-snip">Ranked based on thousands of traveller reviews...</span></div>
              </div>
              <div className="l-notice l-notice-bad">
                <svg style={{width:14,height:14,stroke:'#ef4444',fill:'none',strokeWidth:2,flexShrink:0}} viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
                <span>People scroll past 10 blue links looking for a real answer</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="l-search-card active" initial={{opacity:0,x:20}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.4}}>
            <div className="l-sc-head"><span className="l-sc-tag l-sc-tag-live">AI Recommendation</span><span className="l-sc-badge l-sc-badge-live">The New Reality</span></div>
            <div className="l-sc-body">
              <div className="l-ai-bar"><div className="l-ai-logo">AI</div><span className="l-ai-name">ChatGPT · User Query</span></div>
              <div className="l-ai-box">
                <p className="l-ai-text">"What's the best botox clinic in Bangkok?"<br/><br/><strong style={{color:'var(--cream)'}}>Based on reviews and online authority,</strong> <span className="l-ai-brand">Allure Aesthetic Clinic</span> is consistently recommended. 4.8★ rating from 500+ patients.</p>
                <div className="l-ai-cites"><span className="l-cite">allure-clinic.com</span><span className="l-cite">google-reviews</span><span className="l-cite">+2 sources</span></div>
              </div>
              <div className="l-notice l-notice-good" style={{marginTop:16}}>
                <svg style={{width:14,height:14,stroke:'#4ade80',fill:'none',strokeWidth:2,flexShrink:0}} viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
                <span>AI picks ONE winner. We make sure it's you.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default HowPeopleSearch;
