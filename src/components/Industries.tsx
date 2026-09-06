import React, { useState } from 'react';
import { 
  Store, 
  Utensils, 
  HeartPulse, 
  Car, 
  ShoppingBag, 
  Briefcase, 
  Building2, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Zap
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/companyData';

interface IndustriesProps {
  onOpenContact: (industryName: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenContact }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('local-businesses');

  const iconMap: Record<string, React.ElementType> = {
    Store: Store,
    Utensils: Utensils,
    HeartPulse: HeartPulse,
    Car: Car,
    ShoppingBag: ShoppingBag,
    Briefcase: Briefcase,
    Building2: Building2,
    GraduationCap: GraduationCap,
  };

  const selectedIndustry = INDUSTRIES_DATA.find((ind) => ind.id === selectedIndustryId) || INDUSTRIES_DATA[0];
  const SelectedIcon = iconMap[selectedIndustry.icon] || Store;

  return (
    <section id="industries" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Subtle background ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            05 / VERTICALS &amp; DOMAINS
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            Technology That Adapts to{' '}
            <span className="text-[#7C3AED]">
              Your Industry
            </span>
          </h2>
          
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            Every industry has different workflows, customers and operational challenges. Our solutions are designed to adapt to the way businesses actually work.
          </p>
        </div>

        {/* 8 Industry Tabs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = iconMap[ind.icon] || Store;
            const isSelected = ind.id === selectedIndustryId;

            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-3 rounded-sm border text-center flex flex-col items-center justify-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-[#6D28D9] border-[#6D28D9] text-white shadow-lg shadow-[#2E1065]/30'
                    : 'bg-[#FAF8FF]/30 border-[#E4DFF5] hover:border-[#D9D2F0] hover:bg-[#FAF8FF]/60 text-[#6B6478]'
                }`}
              >
                <div className={`p-2 rounded-sm ${isSelected ? 'bg-white/15 text-white' : 'bg-[#FAF8FF] text-[#6B6478]'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-wider font-bold leading-tight ${isSelected ? 'text-white' : 'text-[#6B6478]'}`}>
                  {ind.name.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Transformation Card for Selected Industry */}
        <div className="rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E4DFF5]">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA]">
                <SelectedIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A78BFA]">
                  INDUSTRY WORKFLOW TRANSFORMATION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E1B29] uppercase tracking-tight">
                  {selectedIndustry.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#453D57] font-medium mt-0.5 font-mono">
                  {selectedIndustry.tagline}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenContact(selectedIndustry.name)}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#6D28D9]/20 self-start md:self-auto"
            >
              <span>Build for {selectedIndustry.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[#453D57] text-sm leading-relaxed mt-6 mb-8">
            {selectedIndustry.description}
          </p>

          {/* Side by side: Friction Points Solved vs Automated Workflows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left: Operational Bottlenecks Addressed */}
            <div className="p-5 rounded-sm bg-white/80 border border-[#E4DFF5] space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-[#E4DFF5] text-[#453D57] font-mono text-xs uppercase tracking-wider font-bold">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Common Operational Friction Points</span>
              </div>
              <div className="space-y-2.5">
                {selectedIndustry.challengesSolved.map((chal, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#6B6478]">
                    <span className="w-1.5 h-1.5 rounded-none bg-amber-400/80 mt-1.5 shrink-0" />
                    <span>{chal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Engagium Automated Workflows */}
            <div className="p-5 rounded-sm bg-white/80 border border-[#7C3AED]/30 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-[#E4DFF5] text-[#A78BFA] font-mono text-xs uppercase tracking-wider font-bold">
                <Zap className="w-4 h-4 text-[#A78BFA]" />
                <span>Engagium Automated Workflows</span>
              </div>
              <div className="space-y-2.5">
                {selectedIndustry.keyAutomations.map((auto, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#2B2438]">
                    <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
                    <span>{auto}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

