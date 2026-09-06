import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Clock,
  ArrowRight,
  Globe,
  ShieldCheck
} from 'lucide-react';
import { INTEREST_OPTIONS } from '../data/companyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedInterest?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedInterest }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    interest: preselectedInterest || 'Business Automation',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedInterest) {
      // Find matching option
      const match = INTEREST_OPTIONS.find((opt) => 
        opt.toLowerCase().includes(preselectedInterest.toLowerCase()) ||
        preselectedInterest.toLowerCase().includes(opt.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, interest: match }));
      }
    }
  }, [preselectedInterest]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.businessEmail.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and project message.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable transmission to Engagium enterprise inbox
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      businessEmail: '',
      phoneNumber: '',
      interest: 'Business Automation',
      message: '',
    });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-white border-t border-[#E4DFF5]">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            12 / ENGAGE &amp; CONNECT
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            Tell Us What You{' '}
            <span className="text-[#7C3AED]">
              Want to Build
            </span>
          </h2>
          
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            Have a business challenge, software requirement or partnership opportunity? Tell us about it.
          </p>
        </div>

        {/* Two-Column Grid: Corporate Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Corporate Contacts & Assurance */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-6 sm:p-7 space-y-6 shadow-xl backdrop-blur-sm">
              <h3 className="text-base font-bold text-[#1E1B29] uppercase tracking-tight">
                Corporate Consultation Office
              </h3>
              <p className="text-xs text-[#6B6478] leading-relaxed">
                Connect with our technical architects and partnership leads to review your workflows, explore white-label integrations, or schedule a custom solution walkthrough.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3 text-xs text-[#453D57]">
                  <div className="p-2 rounded-sm bg-white border border-[#E4DFF5] text-[#A78BFA] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#5C546B] font-bold uppercase tracking-wider block">Business Inquiries</span>
                    <span className="font-mono text-[#2B2438]">contact@engagiumtechnologies.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#453D57]">
                  <div className="p-2 rounded-sm bg-white border border-[#E4DFF5] text-[#A78BFA] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#5C546B] font-bold uppercase tracking-wider block">Enterprise Domain</span>
                    <span className="font-mono text-[#2B2438]">engagiumtechnologies.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-[#453D57]">
                  <div className="p-2 rounded-sm bg-white border border-[#E4DFF5] text-[#A78BFA] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#5C546B] font-bold uppercase tracking-wider block">Response Window</span>
                    <span className="text-[#2B2438] font-mono">Within 24 business hours guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E4DFF5]">
                <div className="flex items-center gap-2 text-xs text-[#6B6478] font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#A78BFA]" />
                  <span>Strict confidentiality and non-disclosure standard</span>
                </div>
              </div>
            </div>

            {/* Quick Domain Ecosystem Helper Card */}
            <div className="rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-5 space-y-2 text-xs backdrop-blur-sm">
              <span className="text-[10px] font-mono font-bold text-[#A78BFA] uppercase tracking-widest block">
                COMMERCIAL PURCHASES &amp; DEMOS
              </span>
              <p className="text-[#6B6478] text-xs">
                Looking for direct SaaS subscriptions, transparent pricing tiers, or instantaneous demo accounts for Engagium CRM, GMB, or WA Automation?
              </p>
              <a
                href="https://engagium.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#A78BFA] font-mono font-bold hover:underline text-xs pt-1 uppercase tracking-wider"
              >
                <span>Visit Customer Product Portal on engagium.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-6 sm:p-8 lg:p-10 shadow-2xl relative backdrop-blur-sm">
              
              {isSubmitted ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B29] uppercase tracking-tight">
                    Enquiry Received Successfully
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#453D57] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#1E1B29] font-semibold">{formData.fullName}</span>. An Engagium solution architect has received your project briefing for <span className="text-[#A78BFA] font-semibold">{formData.interest}</span> and will reach out to <span className="text-[#1E1B29] font-mono">{formData.businessEmail}</span> shortly.
                  </p>

                  <div className="p-4 rounded-sm bg-white border border-[#E4DFF5] text-left max-w-md mx-auto text-xs space-y-1.5 font-mono">
                    <div className="text-[10px] uppercase font-bold text-[#5C546B]">Summary</div>
                    <div><span className="text-[#6B6478]">Company:</span> <span className="text-[#2B2438]">{formData.companyName || 'Not specified'}</span></div>
                    <div><span className="text-[#6B6478]">Interest Area:</span> <span className="text-[#A78BFA]">{formData.interest}</span></div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-sm bg-[#F1EDFB] hover:bg-[#E4DFF5] text-[#2B2438] text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-semibold text-[#453D57] mb-1.5">
                        Full Name <span className="text-[#7C3AED]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E4DFF5] text-[#1E1B29] placeholder-[#453D57] text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-semibold text-[#453D57] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E4DFF5] text-[#1E1B29] placeholder-[#453D57] text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Email */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-semibold text-[#453D57] mb-1.5">
                        Business Email <span className="text-[#7C3AED]">*</span>
                      </label>
                      <input
                        type="email"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        placeholder="e.g. john@company.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E4DFF5] text-[#1E1B29] placeholder-[#453D57] text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider font-semibold text-[#453D57] mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. +1 (555) 019-2834"
                        className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E4DFF5] text-[#1E1B29] placeholder-[#453D57] text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Interest dropdown with all specified options */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider font-semibold text-[#453D57] mb-1.5">
                      Area of Interest <span className="text-[#7C3AED]">*</span>
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E4DFF5] text-[#1E1B29] text-xs focus:outline-none focus:border-[#7C3AED] transition-colors"
                    >
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#1E1B29]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider font-semibold text-[#453D57] mb-1.5">
                      Your Business Requirement or Challenge <span className="text-[#7C3AED]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the operational challenge, software specifications, integration goals, or partnership you'd like to explore..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-sm bg-white border border-[#E4DFF5] text-[#1E1B29] placeholder-[#453D57] text-xs focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-sm bg-red-950/60 border border-red-800/60 text-red-300 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-sm bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#6D28D9]/20 active:scale-98 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Routing to Solutions Team...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] font-mono text-[#5C546B] text-center pt-2">
                    We respect your privacy. No spam or unsolicited marketing communications.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

