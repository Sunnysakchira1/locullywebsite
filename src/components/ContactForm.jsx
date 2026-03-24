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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.website) {
      toast({ title: "Missing Information", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mbdzjegj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, _subject: 'New AI Visibility Audit Request — Locully' }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || 'Submission failed');
      setIsSubmitted(true);
      toast({ title: "Request Sent!", description: "We've received your audit request and will be in touch shortly." });
      logFormSubmission('AI Visibility Audit Request', true);
      setTimeout(() => { setFormData({ name: '', email: '', website: '' }); setIsSubmitted(false); }, 4000);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email us at admin@locully.org.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="l-section" style={{ background: 'var(--bg2)' }}>
      <div className="l-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="l-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Free Audit</span>
          <h2 className="l-h2" style={{ marginBottom: '16px' }}>
            Get Your <em className="l-serif-em">Free AI Audit</em>
          </h2>
          <p className="l-body" style={{ maxWidth: '460px', margin: '0 auto' }}>
            See where you rank in ChatGPT, Google AI, and Claude — in 48 hours.
          </p>
        </motion.div>

        <div className="l-contact-grid">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="l-form-wrap"
          >
            <form onSubmit={handleSubmit}>
              <div className="l-form-group">
                <label htmlFor="name" className="l-form-label">Your Name *</label>
                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange}
                  placeholder="John Smith" className="l-form-input"
                  disabled={isSubmitting || isSubmitted} required />
              </div>
              <div className="l-form-group">
                <label htmlFor="email" className="l-form-label">Email Address *</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}
                  placeholder="john@company.com" className="l-form-input"
                  disabled={isSubmitting || isSubmitted} required />
              </div>
              <div className="l-form-group">
                <label htmlFor="website" className="l-form-label">Website URL *</label>
                <input id="website" name="website" type="url" value={formData.website} onChange={handleChange}
                  placeholder="https://www.yourwebsite.com" className="l-form-input"
                  disabled={isSubmitting || isSubmitted} required />
                <p style={{ margin: '6px 0 0', fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
                  Include https://www. — e.g. https://www.yourclinic.com
                </p>
              </div>

              <button
                type="submit"
                className="l-form-submit"
                disabled={isSubmitting || isSubmitted}
                style={{ background: isSubmitted ? '#22c55e' : 'var(--terra)', opacity: (isSubmitting || isSubmitted) ? 0.85 : 1 }}
              >
                {isSubmitting ? (
                  <><div style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'lspin 0.7s linear infinite' }} /> Sending...</>
                ) : isSubmitted ? (
                  <><CheckCircle2 style={{ width: 18, height: 18 }} /> Request Sent!</>
                ) : (
                  <>Get Free Audit <Send style={{ width: 16, height: 16 }} /></>
                )}
              </button>

              <p className="l-form-note" style={{ marginTop: '14px' }}>Secure submission · We respect your privacy</p>
            </form>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="l-metrics-stack">
              {[
                { label: 'Growth', value: '+280%', sub: 'more enquiries' },
                { label: 'Visibility', value: '70%', sub: 'Top 3 Ranking' },
                { label: 'Quality', value: '4.4×', sub: 'conversion rate' },
              ].map(({ label, value, sub }) => (
                <div key={label} className="l-metric-row">
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted2)', marginBottom: '3px' }}>{label}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '13px' }}>{sub}</div>
                  </div>
                  <span className="l-metric-val" style={{ fontSize: '32px', fontFamily: 'var(--serif)', fontWeight: 600 }}>{value}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', padding: '24px', background: 'var(--surface)', border: '1px solid var(--bdr)', borderRadius: '10px', borderLeft: '3px solid var(--terra)' }}>
              <p className="l-body" style={{ margin: 0 }}>
                <span style={{ color: 'var(--terra)', fontWeight: 600 }}>Free, no obligation.</span>{' '}
                We'll send you a full report on your current AI visibility and what it would take to rank #1.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
