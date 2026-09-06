import React, { useState } from 'react';
import { 
  Bot, 
  Workflow, 
  Layers, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
} from 'lucide-react';
import { WHAT_WE_DO_PILLARS } from '../data/companyData';

interface WhatWeDoProps {
  onSelectService: (pillarId: string) => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ onSelectService }) => {
  const [activePillarId, setActivePillarId] = useState<string>('ai-solutions');

  const iconMap: Record<string, React.ElementType> = {
    Bot: Bot,
    Workflow: Workflow,
    Layers: Layers,
    Code2: Code2,
  };

  const activePillar = WHAT_WE_DO_PILLARS.find((p) => p.id === activePillarId) || WHAT_WE_DO_PILLARS[0];
  const ActiveIcon = iconMap[activePillar.icon] || Bot;

  return (
    <section id="what-we-do" className="relative py-20 lg:py-28 bg-white/60 border-t border-[#E4DFF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            02 / CAPABILITIES &amp; ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            From Business Challenges to{' '}
            <span className="text-[#7C3AED]">
              Autonomous Systems
            </span>
          </h2>
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            We combine software, AI and automation to solve repetitive, time-consuming and operational challenges faced by modern businesses.
          </p>
        </div>

        {/* 4 Pillars Interactive Tab + Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left: Interactive Navigation Pills */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {WHAT_WE_DO_PILLARS.map((pillar, idx) => {
              const Icon = iconMap[pillar.icon] || Bot;
              const isActive = pillar.id === activePillarId;
              const stepTag = `0${idx + 1}`;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`text-left p-4 sm:p-5 rounded-sm border transition-all duration-200 flex items-start justify-between gap-4 group ${
                    isActive
                      ? 'bg-[#FAF8FF]/70 border-[#E4DFF5] border-l-2 border-l-[#7C3AED] shadow-xl shadow-[#2E1065]/40 backdrop-blur-sm'
                      : 'bg-[#FAF8FF]/30 border-[#E4DFF5]/80 hover:border-[#D9D2F0] hover:bg-[#FAF8FF]/50 backdrop-blur-sm'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`p-2.5 rounded-sm transition-colors ${
                      isActive 
                        ? 'bg-[#6D28D9]/10 text-[#A78BFA] border border-[#7C3AED]/30' 
                        : 'bg-[#FAF8FF] text-[#6B6478] border border-[#E4DFF5] group-hover:text-[#2B2438]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#A78BFA]' : 'text-[#5C546B]'}`}>
                          {stepTag}
                        </span>
                        <h3 className={`text-sm font-bold uppercase tracking-tight ${isActive ? 'text-[#1E1B29]' : 'text-[#453D57] group-hover:text-[#4C1D95]'}`}>
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#6B6478]">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 mt-1 transition-transform ${
                    isActive ? 'text-[#A78BFA] translate-x-1' : 'text-[#6B6478] group-hover:text-[#453D57]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Deep-Dive Card for Active Pillar */}
          <div className="lg:col-span-7 flex">
            <div className="w-full rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative backdrop-blur-sm overflow-hidden">
              
              {/* Subtle accent glow in the card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-[#E4DFF5]">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA]">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A78BFA]">
                        CORE CAPABILITY
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B29] uppercase tracking-tight">
                        {activePillar.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#453D57]">
                    Production Ready
                  </span>
                </div>

                <p className="text-[#453D57] text-sm sm:text-base leading-relaxed">
                  {activePillar.description}
                </p>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold uppercase tracking-widest font-mono text-[#6B6478]">
                    Key Deliverables &amp; Outcomes:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activePillar.bulletPoints.map((point, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-sm bg-white/80 border border-[#E4DFF5] flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#453D57] leading-snug">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action bar */}
              <div className="relative z-10 mt-8 pt-6 border-t border-[#E4DFF5] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#6B6478] text-center sm:text-left font-mono">
                  Engineered to eliminate friction and scale reliably.
                </div>
                <button
                  onClick={() => onSelectService(activePillar.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#6D28D9]/20 active:scale-95"
                >
                  <span>Inquire About {activePillar.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

