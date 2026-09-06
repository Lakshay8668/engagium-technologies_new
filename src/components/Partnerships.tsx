import React from 'react';
import { Handshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PARTNERSHIP_TYPES } from '../data/companyData';

interface PartnershipsProps {
  onOpenPartnerInquiry: (partnershipType?: string) => void;
}

export const Partnerships: React.FC<PartnershipsProps> = ({ onOpenPartnerInquiry }) => {
  return (
    <section id="partnerships" className="relative py-20 lg:py-28 bg-white/60 border-t border-[#E4DFF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            08 / COLLABORATION &amp; ECOSYSTEM
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            Technology Doesn&apos;t Have to Be{' '}
            <span className="text-[#7C3AED]">
              Built Alone
            </span>
          </h2>
          
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            Engagium Technologies works with technology providers, platforms and ecosystem partners to bring reliable solutions to businesses while continuously expanding our own software capabilities.
          </p>
        </div>

        {/* 3 Partnership Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {PARTNERSHIP_TYPES.map((partner, idx) => {
            const stepNum = `0${idx + 1} / MODEL`;

            return (
              <div
                key={partner.id}
                className="rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-6 sm:p-8 flex flex-col justify-between hover:border-[#7C3AED]/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#5C546B] font-bold">{stepNum}</span>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#A78BFA]">
                        {partner.badge}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#A78BFA] group-hover:bg-[#6D28D9]/10 group-hover:border-[#7C3AED]/30 transition-transform">
                      <Handshake className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E1B29] uppercase tracking-tight group-hover:text-[#A78BFA] transition-colors">
                    {partner.title}
                  </h3>

                  <p className="text-xs text-[#6B6478] leading-relaxed mt-2.5 mb-6">
                    {partner.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 pb-6 border-b border-[#E4DFF5]">
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-[#5C546B] block mb-1">
                      Partnership Value:
                    </span>
                    {partner.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#453D57]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 space-y-4">
                  <div className="text-xs text-[#6B6478] font-mono">
                    <span className="font-bold text-[#453D57] uppercase text-[10px]">Ideal for:</span> {partner.targetAudience}
                  </div>

                  <button
                    onClick={() => onOpenPartnerInquiry(partner.title)}
                    className="w-full py-2.5 px-4 rounded-sm bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group/btn active:scale-95 shadow-md shadow-[#6D28D9]/20"
                  >
                    <span>Become a Partner</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Co-Innovation Callout */}
        <div className="mt-12 text-center max-w-2xl mx-auto text-xs text-[#6B6478] font-mono">
          <p>
            Have a proprietary system or custom platform? We build custom API connectors and mutual distribution channels.
          </p>
        </div>

      </div>
    </section>
  );
};

