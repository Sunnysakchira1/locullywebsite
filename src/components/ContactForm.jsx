import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { useToast } from '@/components/ui/use-toast';
import { logFormSubmission } from '@/lib/analytics';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) {
      toast({ title: "Missing Information", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({ title: "Request Sent!", description: "We've received your audit request." });
      logFormSubmission('AI Visibility Audit Request', true);
      setTimeout(() => {
        setFormData({ name: '', email: '', website: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const inputStyle = {
    width: '100%', background: 'var(--bg3)', border: '1px solid var(--bdr)',
    borderRadius: '8px', padding: '14px 18px', color: 'var(--cream)',
    fontFamily: 'var(--sans)', fontSize: '15px', outline: 'none',
    transition: 'border-color 0.2s', boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block', fontFamily: 'var(--mono)', fontSize: '11px',
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'var(--muted)', marginBottom: '8px'
  };

  return (
    <section id="contact" ref={ref} className="l-section" style={{ background: 'var(--bg2)' }}>
      <div className="l-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="l-label" style={{ marginBottom: '24px', display: 'inline-flex' }}>Free Audit</span>
          <h2 className="l-h2" style={{ marginBottom: '16px' }}>
            Get Your <em className="l-serif-em">Free AI Audit</em>
          </h2>
          <p className="l-body" style={{ maxWidth: '480px', margin: '0 auto' }}>
            See where you rank in ChatGPT, Google AI, and Claude — in 48 hours.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'var(--surface)', border: '1px solid var(--bdr)',
              borderRadius: '16px', padding: '44px'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label htmlFor="name" style={labelStyle}>Your Name *</label>
                <input
                  id="name" name="name" type="text"
                  value={formData.name} onChange={handleChange}
                  placeholder="John Smith"
                  style={inputStyle}
                  disabled={isSubmitting || isSubmitted}
                  required
                  onFocus={e => e.target.style.borderColor = 'var(--terra)'}
                  onBlur={e => e.target.style.borderColor = 'var(--bdr)'}
                />
              </div>
              <div>
                <label htmlFor="email" style={labelStyle}>Email Address *</label>
                <input
                  id="email" name="email" type="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="john@company.com"
                  style={inputStyle}
                  disabled={isSubmitting || isSubmitted}
                  required
                  onFocus={e => e.target.style.borderColor = 'var(--terra)'}
                  onBlur={e => e.target.style.borderColor = 'var(--bdr)'}
                />
              </div>
              <div>
                <label htmlFor="website" style={labelStyle}>Website URL *</label>
                <input
                  id="website" name="website" type="url"
                  value={formData.website} onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                  style={inputStyle}
                  disabled={isSubmitting || isSubmitted}
                  required
                  onFocus={e => e.target.style.borderColor = 'var(--terra)'}
                  onBlur={e => e.target.style.borderColor = 'var(--bdr)'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="l-btn"
                style={{
                  width: '100%', justifyContent: 'center', padding: '16px 28px',
                  background: isSubmitted ? '#22c55e' : 'var(--terra)',
                  opacity: (isSubmitting || isSubmitted) ? 0.85 : 1
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)',
                      borderTopColor: '#fff', borderRadius: '50%', animation: 'lspin 0.7s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <><CheckCircle2 style={{ width: '18px', height: '18px' }} /> Request Sent!</>
                ) : (
                  <>Get Free Audit <Send style={{ width: '16px', height: '16px' }} /></>
                )}
              </button>

              <p style={{ textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--muted2)' }}>
                Secure submission · We respect your privacy
              </p>
            </form>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {[
              { label: 'Growth', value: '+280%', sub: 'more enquiries' },
              { label: 'Visibility', value: '70%', sub: 'Top 3 Ranking' },
              { label: 'Quality', value: '4.4×', sub: 'conversion rate' },
            ].map(({ label, value, sub }) => (
              <div key={label} style={{
                background: 'var(--bg3)', border: '1px solid var(--bdr)',
                borderRadius: '12px', padding: '28px 32px',
                display: 'flex', alignItems: 'center', gap: '24px'
              }}>
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: '42px', fontWeight: 600,
                  color: 'var(--terra)', lineHeight: 1, minWidth: '110px'
                }}>{value}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: 'var(--muted2)', marginBottom: '4px'
                  }}>{label}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '15px' }}>{sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
