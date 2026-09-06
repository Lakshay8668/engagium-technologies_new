import React from 'react';
import { Brain, Cpu, Layers, Target, CheckCircle2 } from 'lucide-react';
import { TRUST_STRIP_ITEMS } from '../data/companyData';

export const TrustStrip: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    'ai-powered': Brain,
    'automation-first': Cpu,
    'scalable-software': Layers,
    'business-focused': Target,
  };

  return (
    <section className="relative py-12 bg-white border-y border-[#E4DFF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
            CORE PRINCIPLES
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B29] tracking-tight">
            Technology Built Around Real Business Problems
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TRUST_STRIP_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.id] || Brain;
            const stepNum = `0${idx + 1} / PRINCIPLE`;

            return (
              <div
                key={item.id}
                className="border border-[#E4DFF5] bg-[#FAF8FF]/40 backdrop-blur-sm p-6 group hover:border-[#7C3AED]/50 transition-all rounded-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] text-[#5C546B] font-bold uppercase tracking-wider font-mono">
                      {stepNum}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#A78BFA] bg-[#FAF8FF] px-2 py-0.5 border border-[#E4DFF5]">
                      {item.stat}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#A78BFA] group-hover:bg-[#6D28D9]/10 group-hover:border-[#7C3AED]/30 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#1E1B29] uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#6B6478] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E4DFF5]/80">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#6B6478] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
                    <span>{item.statLabel}</span>
                  </div>
                  {/* Progress bar matching theme */}
                  <div className="w-full h-1 bg-[#F1EDFB] mt-3 rounded-none">
                    <div className="h-full bg-[#E4DFF5] group-hover:bg-[#7C3AED] transition-all duration-300 w-1/3 group-hover:w-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

