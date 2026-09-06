import React from 'react';

export const PhotoBand: React.FC = () => {
  return (
    <section className="relative h-[420px] sm:h-[480px] lg:h-[560px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1758518730151-cf64fddb4f0a?fm=jpg&q=80&w=2400&auto=format&fit=crop"
        alt="Engagium Technologies team collaborating"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Brand-tinted gradient overlay for a cohesive, editorial feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2E1065] via-[#2E1065]/70 to-[#2E1065]/20" />
      <div className="absolute inset-0 bg-[#6D28D9]/20 mix-blend-multiply" />

      <div className="relative z-10 h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-14 sm:pb-16">
        <div className="inline-block px-3 py-1 border border-white/30 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4 w-fit">
          THE TEAM BEHIND THE ECOSYSTEM
        </div>
        <p className="text-white text-xl sm:text-3xl lg:text-4xl font-display font-semibold leading-snug max-w-3xl">
          "We don't just ship software. We sit with the business problem until the technology disappears and the outcome is obvious."
        </p>
      </div>
    </section>
  );
};
