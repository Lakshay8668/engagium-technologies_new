import React from 'react';
import { Target, Sparkles, Cpu, TrendingUp, Handshake, CheckCircle2 } from 'lucide-react';
import { WHY_ENGAGIUM_ITEMS } from '../data/companyData';

export const WhyEngagium: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Target: Target,
    Sparkles: Sparkles,
    Cpu: Cpu,
    TrendingUp: TrendingUp,
    Handshake: Handshake,
  };

  return (
    <section id="why-engagium" className="relative py-20 lg:py-28 bg-white/60 border-t border-[#E4DFF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            06 / ADVANTAGE &amp; ROI
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            Technology With a{' '}
            <span className="text-[#7C3AED]">
              Business-First Approach
            </span>
          </h2>
          
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            We don&apos;t start with technology and look for a problem. We start with the business problem and determine where technology can create the most value.
          </p>
        </div>

        {/* 5 Differentiators Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_ENGAGIUM_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.icon] || Target;
            const stepNum = `0${idx + 1} / VALUE`;

            return (
              <div
                key={item.id}
                className={`border border-[#E4DFF5] bg-[#FAF8FF]/40 backdrop-blur-sm p-6 sm:p-7 group hover:border-[#7C3AED]/50 transition-all rounded-sm flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#A78BFA] group-hover:bg-[#6D28D9]/10 group-hover:border-[#7C3AED]/30 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#5C546B] uppercase tracking-wider">
                      {stepNum}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E1B29] uppercase tracking-tight group-hover:text-[#A78BFA] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#6B6478] leading-relaxed mt-2.5 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4DFF5] flex items-center gap-1.5 text-xs text-[#A78BFA] font-mono font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Summary Strip */}
        <div className="mt-12 rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-6 grid grid-cols-1 md:grid-cols-2 gap-6 backdrop-blur-sm">
          <div className="p-4 rounded-sm bg-white border border-red-500/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 font-mono">
              Conventional Software Vendors
            </h4>
            <p className="text-xs text-[#6B6478] leading-relaxed">
              Push rigid, complex subscriptions with heavy onboarding friction, forcing your team to adapt to unneeded features and technical complexity.
            </p>
          </div>

          <div className="p-4 rounded-sm bg-white border border-[#7C3AED]/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A78BFA] mb-2 font-mono">
              The Engagium Partnership Model
            </h4>
            <p className="text-xs text-[#453D57] leading-relaxed">
              We analyze your exact business workflows, deploy lightweight and tailored automation, and continuously scale your digital capabilities as you grow.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

