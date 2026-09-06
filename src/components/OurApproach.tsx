import React, { useState } from 'react';
import { Sparkles, Cpu, MessageSquare, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { APPROACH_STEPS } from '../data/companyData';

export const OurApproach: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const stepIcons = [Sparkles, Cpu, MessageSquare, TrendingUp];

  return (
    <section id="our-approach" className="relative py-20 lg:py-28 bg-white/60 border-t border-[#E4DFF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            04 / METHODOLOGY
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            Innovate. Automate. Engage. Grow.
          </h2>
          
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            We believe technology should do more than look impressive. It should solve problems, save time and create measurable business value.
          </p>
        </div>

        {/* 4-Step Interactive Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isHovered = activeStepIndex === idx;
            const stepNum = `0${idx + 1} / STAGE`;

            return (
              <div
                key={step.step}
                onMouseEnter={() => setActiveStepIndex(idx)}
                className={`border bg-[#FAF8FF]/40 backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 rounded-sm flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#E4DFF5] border-l-2 border-l-[#7C3AED] shadow-xl shadow-[#2E1065]/30 bg-[#FAF8FF]/70'
                    : 'border-[#E4DFF5] hover:border-[#D9D2F0]'
                }`}
              >
                {/* Step number badge & icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold font-mono tracking-tight text-[#A78BFA]">
                      {step.step}
                    </span>
                    <div className="p-2 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#A78BFA]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#5C546B] font-mono">
                    {stepNum}
                  </span>
                  
                  <h3 className="text-lg font-bold text-[#1E1B29] uppercase tracking-tight mt-1 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#6B6478] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Metric pill */}
                <div className="pt-4 border-t border-[#E4DFF5]">
                  <div className="flex items-center gap-2 text-xs text-[#6B6478] font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
                    <span className="text-[#453D57] text-[11px]">{step.metrics}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1 bg-[#F1EDFB] mt-3 rounded-none">
                    <div className={`h-full bg-[#7C3AED] transition-all duration-300 ${isHovered ? 'w-full' : 'w-1/4'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting workflow summary banner */}
        <div className="mt-12 rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left backdrop-blur-sm">
          <div>
            <h4 className="text-sm font-bold text-[#1E1B29] uppercase tracking-tight">
              Continuous Loop of Intelligent Value Creation
            </h4>
            <p className="text-xs text-[#6B6478] mt-1">
              From discovery and implementation to automated day-to-day operations and ongoing scalability.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#A78BFA] shrink-0">
            <span>INNOVATE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#453D57]" />
            <span>AUTOMATE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#453D57]" />
            <span>ENGAGE</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#453D57]" />
            <span>GROW</span>
          </div>
        </div>

      </div>
    </section>
  );
};

