import React from 'react';
import { Flag, Compass, Hammer, Rocket, CheckCircle2 } from 'lucide-react';
import { DEVELOPMENT_JOURNEY } from '../data/companyData';

export const DevelopmentJourney: React.FC = () => {
  const phaseIcons = [Flag, Compass, Hammer, Rocket];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            09 / ROADMAP &amp; EVOLUTION
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            From Solutions to{' '}
            <span className="text-[#7C3AED]">
              Our Own Technology
            </span>
          </h2>
          
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            We are building Engagium as a technology company with a long-term focus on developing scalable software and automation products.
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEVELOPMENT_JOURNEY.map((item, idx) => {
            const Icon = phaseIcons[idx] || Flag;
            const isCompleted = item.status === 'Completed';
            const isCurrent = item.status === 'Current Focus';
            const stepNum = `0${idx + 1} / PHASE`;

            return (
              <div
                key={item.phase}
                className={`p-6 sm:p-7 rounded-sm border flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${
                  isCurrent
                    ? 'bg-[#FAF8FF]/70 border-[#E4DFF5] border-l-2 border-l-[#7C3AED] shadow-xl shadow-[#2E1065]/40'
                    : 'bg-[#FAF8FF]/40 border-[#E4DFF5] hover:border-[#D9D2F0]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#5C546B]">
                      {stepNum}
                    </span>
                    <span className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm border ${
                      isCompleted 
                        ? 'bg-[#7C3AED]/10 text-[#DDD6FE] border-[#7C3AED]/30' 
                        : isCurrent
                        ? 'bg-[#7C3AED]/20 text-[#DDD6FE] border-[#7C3AED]/40'
                        : 'bg-[#FAF8FF] text-[#6B6478] border-[#E4DFF5]'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#A78BFA]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#1E1B29] uppercase tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#6B6478] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Milestones list */}
                <div className="pt-4 border-t border-[#E4DFF5] space-y-2">
                  {item.milestones.map((m, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-[#453D57]">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isCompleted || isCurrent ? 'text-[#A78BFA]' : 'text-[#453D57]'}`} />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

