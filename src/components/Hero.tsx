import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroEcosystem } from './HeroEcosystem';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Deep atmospheric ambient blurs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6D28D9]/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6D28D9]/10 rounded-full blur-[100px] -ml-24 -mb-24 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Centered Headline & Positioning */}
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          
          {/* Eyebrow badge */}
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-5">
            Global Cognitive Infrastructure &bull; AI + Automation
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tighter text-[#1E1B29] mb-6">
            Building Smarter Businesses with{' '}
            <span className="text-[#7C3AED]">AI &amp; Automation</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-[#6B6478] max-w-2xl mx-auto leading-relaxed mb-8">
            Engagium Technologies develops AI-powered software and autonomous automation solutions that streamline operations, eliminate repetitive friction, engage customers 24/7, and build scalable digital workflows.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#6D28D9] hover:bg-[#7C3AED] text-white px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm shadow-lg shadow-[#6D28D9]/25 active:scale-95"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#E4DFF5] bg-[#FAF8FF]/40 text-[#453D57] hover:text-[#4C1D95] hover:border-[#D9D2F0] px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all rounded-sm active:scale-95"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-[#A78BFA]" />
            </button>
          </div>

          {/* Supporting line */}
          <p className="text-xs text-[#5C546B] font-mono tracking-wider uppercase">
            From workflow optimization to enterprise SaaS &middot; High-availability cloud runtime
          </p>
        </div>

        {/* Hero Ecosystem Visualizer Illustration */}
        <div className="w-full">
          <HeroEcosystem />
        </div>

      </div>
    </section>
  );
};

