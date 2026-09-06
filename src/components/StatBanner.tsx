import React from 'react';
import { TRUST_STRIP_ITEMS } from '../data/companyData';

export const StatBanner: React.FC = () => {
  return (
    <section className="relative py-10 bg-[#6D28D9] overflow-hidden">
      {/* Ambient texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-[0.15] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-x divide-white/15">
          {TRUST_STRIP_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`text-center px-2 ${idx === 0 ? '' : ''}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-1 font-display">
                {item.stat}
              </div>
              <div className="text-[10px] sm:text-xs text-[#DDD6FE] font-mono uppercase tracking-wider leading-tight">
                {item.statLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
