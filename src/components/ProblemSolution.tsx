import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/companyData';

const FEATURED_IDS = ['local-businesses', 'restaurants-hospitality', 'healthcare', 'real-estate'];

export const ProblemSolution: React.FC = () => {
  const featured = INDUSTRIES_DATA.filter((i) => FEATURED_IDS.includes(i.id));
  const list = featured.length ? featured : INDUSTRIES_DATA.slice(0, 4);
  const [activeId, setActiveId] = useState(list[0]?.id);
  const active = list.find((i) => i.id === activeId) || list[0];

  if (!active) return null;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#6D28D9] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            REAL WORK. REAL IMPACT.
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            From Problem to <span className="text-[#7C3AED]">Working Solution.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: industry tab list */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {list.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveId(industry.id)}
                className={`text-left px-4 py-3 border-l-2 whitespace-nowrap lg:whitespace-normal transition-all text-sm font-semibold ${
                  activeId === industry.id
                    ? 'border-l-[#7C3AED] bg-[#FAF8FF] text-[#1E1B29]'
                    : 'border-l-[#E4DFF5] text-[#6B6478] hover:text-[#453D57] hover:bg-[#FAF8FF]/50'
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>

          {/* Right: problem/solution card */}
          <div className="lg:col-span-8">
            <div className="rounded-sm border border-[#E4DFF5] bg-white shadow-2xl overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-[#E4DFF5] bg-[#FAF8FF]/50">
                <h3 className="text-lg sm:text-xl font-bold text-[#1E1B29]">{active.name}</h3>
                <p className="text-sm text-[#6B6478] mt-1">{active.tagline}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E4DFF5]">
                {/* Problem */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertCircle className="w-4 h-4 text-[#6D28D9]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B6478] font-mono">
                      The Problem
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {active.challengesSolved.slice(0, 3).map((c, idx) => (
                      <li key={idx} className="text-sm text-[#453D57] leading-relaxed flex gap-2">
                        <span className="text-[#D9D2F0] mt-1">—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="p-6 sm:p-8 bg-[#6D28D9]">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDD6FE] font-mono">
                      The Engagium Solution
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {active.keyAutomations.slice(0, 3).map((a, idx) => (
                      <li key={idx} className="text-sm text-white leading-relaxed flex gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-[#DDD6FE] shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
