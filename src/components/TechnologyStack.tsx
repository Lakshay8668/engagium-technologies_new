import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  Cloud, 
  Cable, 
  BarChart3, 
  ShieldCheck, 
  Server
} from 'lucide-react';
import { TECH_CAPABILITIES } from '../data/companyData';

export const TechnologyStack: React.FC = () => {
  const [selectedTechId, setSelectedTechId] = useState<string>('artificial-intelligence');

  const iconMap: Record<string, React.ElementType> = {
    Brain: Brain,
    Zap: Zap,
    Cloud: Cloud,
    Cable: Cable,
    BarChart3: BarChart3,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section id="technology" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            07 / INFRASTRUCTURE &amp; STACK
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            Building With the Technologies{' '}
            <span className="text-[#7C3AED]">
              That Matter
            </span>
          </h2>
          
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            We combine modern software architecture, artificial intelligence, automation and cloud technologies to build reliable digital solutions.
          </p>
        </div>

        {/* Editorial workspace photo */}
        <div className="relative rounded-sm overflow-hidden mb-16 h-56 sm:h-72 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1754548930550-be9fa88874f4?fm=jpg&q=80&w=2400&auto=format&fit=crop"
            alt="Engagium engineering workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E1065]/80 via-[#2E1065]/30 to-transparent" />
          <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 max-w-md">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#DDD6FE] mb-2">
              Inside The Build
            </span>
            <p className="text-white text-base sm:text-lg font-semibold leading-snug">
              Every layer of the stack is engineered, tested and hardened before it reaches your business.
            </p>
          </div>
        </div>

        {/* 6 Tech Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CAPABILITIES.map((tech, idx) => {
            const Icon = iconMap[tech.icon] || Brain;
            const isSelected = tech.id === selectedTechId;
            const stepNum = `0${idx + 1} / STACK`;

            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTechId(tech.id)}
                className={`p-6 sm:p-7 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between group backdrop-blur-sm ${
                  isSelected
                    ? 'bg-[#FAF8FF]/70 border-[#E4DFF5] border-l-2 border-l-[#7C3AED] shadow-xl shadow-[#2E1065]/40'
                    : 'bg-[#FAF8FF]/40 border-[#E4DFF5] hover:border-[#D9D2F0] hover:bg-[#FAF8FF]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#A78BFA] group-hover:bg-[#6D28D9]/10 group-hover:border-[#7C3AED]/30 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#6B6478] uppercase">
                      {stepNum}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#1E1B29] uppercase tracking-tight group-hover:text-[#A78BFA] transition-colors">
                    {tech.title}
                  </h3>

                  <p className="text-xs text-[#6B6478] leading-relaxed mt-2 mb-5">
                    {tech.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E4DFF5]">
                  <div className="flex flex-wrap gap-1.5">
                    {tech.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-sm bg-white border border-[#E4DFF5] text-[#453D57] group-hover:border-[#D9D2F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Architecture Infrastructure Footer */}
        <div className="mt-12 p-6 rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA] shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#1E1B29] uppercase tracking-tight">
                High-Availability Cloud Backbone
              </h4>
              <p className="text-xs text-[#6B6478] mt-0.5">
                Engineered for maximum uptime, data privacy isolation, and frictionless third-party integration across all systems.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[11px] font-mono text-[#A78BFA] bg-[#FAF8FF] px-3 py-1.5 rounded-sm border border-[#E4DFF5] uppercase tracking-wider font-bold">
              SOC2 &amp; GDPR COMPLIANT PRACTICES
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

