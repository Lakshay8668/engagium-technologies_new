import React from 'react';
import { MessageCircle, Mail, Users, MapPin, BarChart3, Receipt } from 'lucide-react';

const INPUT_SOURCES = [
  { label: 'WHATSAPP', icon: MessageCircle },
  { label: 'EMAIL', icon: Mail },
  { label: 'CRM', icon: Users },
  { label: 'GOOGLE MY BUSINESS', icon: MapPin },
  { label: 'ANALYTICS', icon: BarChart3 },
  { label: 'INVOICING', icon: Receipt },
];

const OUTPUT_ROWS = [
  { icon: MessageCircle, label: 'New WhatsApp Lead → Auto-Replied' },
  { icon: Users, label: 'Customer Record → Synced to CRM' },
  { icon: Receipt, label: 'Order → Invoice Generated' },
  { icon: MapPin, label: 'Review → Response Published' },
];

export const DataFlowShowcase: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#6D28D9] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            HOW THE ECOSYSTEM CONNECTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            Every Channel. <span className="text-[#7C3AED]">One Intelligent Core.</span>
          </h2>
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            Engagium's AI core ingests every business channel in real time and turns it into clean, ready-to-act intelligence.
          </p>
        </div>

        <div className="relative rounded-sm border border-[#E4DFF5] bg-[#6D28D9] p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-tech-grid opacity-[0.12] pointer-events-none" />

          {/* Input chips */}
          <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-2">
            {INPUT_SOURCES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white rounded-sm px-3 py-2 shadow-md"
              >
                <Icon className="w-3.5 h-3.5 text-[#6D28D9]" />
                <span className="text-[10px] font-mono font-bold text-[#1E1B29] tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Converging lines to core */}
          <div className="relative h-32 flex items-center justify-center">
            <svg viewBox="0 0 400 130" className="w-full max-w-md h-full" preserveAspectRatio="none">
              <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none">
                <path d="M20,0 L200,110" />
                <path d="M90,0 L200,110" />
                <path d="M160,0 L200,110" />
                <path d="M240,0 L200,110" />
                <path d="M310,0 L200,110" />
                <path d="M380,0 L200,110" />
              </g>
            </svg>
            <div className="absolute bottom-0 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-xl">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#6D28D9]" />
            </div>
          </div>

          {/* Output card */}
          <div className="relative z-10 bg-white rounded-sm shadow-2xl p-5 max-w-md mx-auto">
            <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6B6478] mb-3">
              Business Activity Feed
            </p>
            <div className="space-y-2.5">
              {OUTPUT_ROWS.map(({ icon: Icon, label }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-xs text-[#453D57] border-b border-[#F1EDFB] last:border-0 pb-2.5 last:pb-0"
                >
                  <div className="p-1.5 rounded-sm bg-[#FAF8FF] text-[#7C3AED] shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
