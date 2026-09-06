import React from 'react';
import { TECH_CAPABILITIES } from '../data/companyData';

export const CapabilityMarquee: React.FC = () => {
  const allTags = TECH_CAPABILITIES.flatMap((cap) => cap.tags);
  // duplicate the list for a seamless scroll loop
  const loopTags = [...allTags, ...allTags];

  return (
    <section className="relative py-12 bg-[#FAF8FF] border-y border-[#E4DFF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#5C546B] font-mono">
          Powering Every Layer of the Stack
        </p>
      </div>

      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF8FF] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF8FF] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-3">
          {loopTags.map((tag, idx) => (
            <span
              key={`${tag}-${idx}`}
              className="shrink-0 px-4 py-2 rounded-sm bg-white border border-[#E4DFF5] text-xs font-mono font-semibold text-[#453D57] whitespace-nowrap shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
