import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import layersIllustration from '../assets/layers-illustration.svg';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background glow banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-sm bg-[#FAF8FF]/50 border border-[#E4DFF5] p-8 sm:p-12 lg:p-16 shadow-2xl text-center overflow-hidden backdrop-blur-sm">
          
          {/* Ambient light bursts */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#6D28D9]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#6D28D9]/20 rounded-full blur-3xl pointer-events-none" />
          <img
            src={layersIllustration}
            alt=""
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 w-full opacity-[0.08] pointer-events-none select-none"
          />

          <div className="max-w-3xl mx-auto relative z-10 space-y-6">
            
            <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em]">
              13 / NEXT STEPS
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight leading-tight">
              Let&apos;s Build Something{' '}
              <span className="text-[#7C3AED]">Smarter</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6B6478] max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re looking to automate your business, improve customer engagement, deploy business software or explore a technology partnership, let&apos;s discuss what you want to build.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest shadow-md shadow-[#6D28D9]/25 hover:shadow-[#6D28D9]/40 transition-all active:scale-95"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm bg-[#FAF8FF] hover:bg-[#F1EDFB] border border-[#E4DFF5] hover:border-[#D9D2F0] text-[#2B2438] hover:text-[#4C1D95] font-bold text-xs uppercase tracking-widest transition-all active:scale-95"
              >
                <span>Explore Our Products</span>
                <ArrowUpRight className="w-4 h-4 text-[#A78BFA]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

