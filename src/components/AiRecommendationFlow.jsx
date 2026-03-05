import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const AiRecommendationFlow = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <section ref={ref} className="l-section l-bg2" style={{position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:700,height:700,background:'radial-gradient(ellipse,rgba(204,100,50,0.12) 0%,rgba(204,100,50,0.04) 40%,transparent 65%)',pointerEvents:'none'}}/>
      <div className="l-container">
        <motion.div className="l-sec-head-center" initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}>
          <span className="l-label" style={{justifyContent:'center'}}>The Mechanism</span>
          <h2 className="l-h2" style={{marginTop:16,textAlign:'center'}}>What Happens When AI <em className="l-serif-em">Recommends You?</em></h2>
          <p className="l-body" style={{maxWidth:520,margin:'16px auto 0',textAlign:'center'}}>Instead of fighting for clicks, you become the trusted answer that the world's smartest algorithms deliver.</p>
        </motion.div>

        <div className="l-flow-wrap">
          <motion.div className="l-flow-node" initial={{opacity:0,x:-40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.2}}>
            <div className="l-flow-icon l-flow-u">
              <svg style={{width:32,height:32,stroke:'var(--muted)',fill:'none',strokeWidth:1.8}} viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div className="l-flow-label">Ready-to-Book</div>
            <div className="l-flow-sub">"What's the best physio clinic for runners?"</div>
          </motion.div>

          <motion.div className="l-flow-arr" initial={{opacity:0,scale:0}} animate={inView?{opacity:1,scale:1}:{}} transition={{duration:0.4,delay:0.4}}>
            <div className="l-flow-line"/><div className="l-flow-head"/>
          </motion.div>

          <motion.div className="l-flow-node" initial={{opacity:0,scale:0.8}} animate={inView?{opacity:1,scale:1}:{}} transition={{duration:0.6,delay:0.5}}>
            <div className="l-flow-icon l-flow-ai">
              <div className="l-flow-pulse"/>
              <svg style={{width:32,height:32,stroke:'var(--terra)',fill:'none',strokeWidth:1.5}} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>
            </div>
            <div className="l-flow-label">AI Processing</div>
            <div className="l-flow-sub">Analyses authority, content, and citations</div>
          </motion.div>

          <motion.div className="l-flow-arr" initial={{opacity:0,scale:0}} animate={inView?{opacity:1,scale:1}:{}} transition={{duration:0.4,delay:0.7}}>
            <div className="l-flow-line l-flow-line-b"/><div className="l-flow-head l-flow-head-b"/>
          </motion.div>

          <motion.div className="l-flow-node" initial={{opacity:0,x:40}} animate={inView?{opacity:1,x:0}:{}} transition={{duration:0.6,delay:0.8}}>
            <div className="l-flow-icon l-flow-brand">
              <svg style={{width:32,height:32,stroke:'white',fill:'none',strokeWidth:2}} viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div className="l-flow-label">Your Brand</div>
            <div className="l-flow-sub">Presented as the verified, trusted solution</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AiRecommendationFlow;
