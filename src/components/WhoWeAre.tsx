import React from 'react';
import { 
  ArrowRight, 
  Globe, 
  CheckCircle2,
} from 'lucide-react';
import { DOMAIN_ARCHITECTURE } from '../data/companyData';
import ecosystemIllustration from '../assets/ecosystem-illustration.svg';

interface WhoWeAreProps {
  onExploreApproach: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onExploreApproach }) => {
  return (
    <section id="who-we-are" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
      <img
        src={ecosystemIllustration}
        alt=""
        aria-hidden="true"
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-[600px] max-w-none opacity-70 pointer-events-none hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story & Positioning */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em]">
              01 / IDENTITY &amp; PHILOSOPHY
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight leading-tight">
              Technology That Works for{' '}
              <span className="text-[#7C3AED]">
                Your Enterprise
              </span>
            </h2>

            {/* Exact Content from Developer Copy */}
            <p className="text-[#453D57] text-sm sm:text-base leading-relaxed">
              Engagium Technologies is an AI automation and software solutions company focused on helping businesses adopt smarter technology. We build and provide digital solutions that simplify operations, automate repetitive processes, improve customer engagement, and help businesses make better use of technology.
            </p>

            <p className="text-[#6B6478] text-sm sm:text-base leading-relaxed">
              Our approach combines AI, automation, software development and practical business workflows to create solutions that are useful, scalable and easy to adopt.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#453D57]">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <span>Zero bloated software overhead</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#453D57]">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <span>Rapid adoption with existing teams</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#453D57]">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <span>Modular cloud-native architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#453D57]">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
                <span>Pragmatic business-first ROI</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onExploreApproach}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A78BFA] hover:text-[#DDD6FE] group transition-colors"
              >
                <span>Learn More About Engagium</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: 3-Domain Brand Architecture Card */}
          <div className="lg:col-span-6">
            <div className="rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-6 sm:p-7 shadow-2xl backdrop-blur-sm relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E4DFF5]">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#2B2438] uppercase tracking-widest font-mono">
                      Brand &amp; Ecosystem Structure
                    </h3>
                    <p className="text-[11px] text-[#6B6478]">
                      Cohesive architecture powering enterprise scale
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#6B6478] font-mono">
                  3 TIERS
                </span>
              </div>

              {/* 3 Domain Cards */}
              <div className="space-y-3">
                {DOMAIN_ARCHITECTURE.map((item) => (
                  <div
                    key={item.domain}
                    className={`p-4 rounded-sm border transition-all ${
                      item.isPrimary
                        ? 'bg-[#FAF8FF]/60 border-l-2 border-l-[#7C3AED] border-[#E4DFF5] shadow-lg shadow-[#2E1065]/30'
                        : 'bg-white/60 border-[#E4DFF5] hover:border-[#D9D2F0]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#1E1B29]">
                          {item.domain}
                        </span>
                        {item.isPrimary && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-[#7C3AED]/20 text-[#DDD6FE] border border-[#7C3AED]/30 uppercase tracking-wider font-mono">
                            Active Corporate Portal
                          </span>
                        )}
                      </div>
                      <span className="text-[9px] font-medium font-mono uppercase tracking-wider px-2 py-0.5 bg-[#FAF8FF] border border-[#E4DFF5] text-[#453D57]">
                        {item.badge}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[#453D57] mb-1">
                      {item.role}
                    </div>

                    <p className="text-xs text-[#6B6478] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#E4DFF5] flex items-center justify-between text-xs text-[#6B6478]">
                <span className="font-mono text-[11px]">Unified Governance &amp; Security</span>
                <span className="text-[#A78BFA] font-mono text-[10px] uppercase tracking-widest font-bold">VERIFIED ECOSYSTEM</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

