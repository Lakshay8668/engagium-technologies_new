import React from 'react';
import { Eye, Compass, CheckCircle2 } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white/60 border-t border-[#E4DFF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <div className="relative rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-8 sm:p-10 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A78BFA] block">
                    10 / OUR VISION
                  </span>
                  <span className="text-xs text-[#6B6478] font-mono">The Future We Are Engineering</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B29] uppercase tracking-tight mb-4">
                Making Intelligent Business Technology More Accessible
              </h2>

              <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed">
                We envision a future where businesses of every size can access practical AI, automation and software solutions without needing complex technology infrastructure or large technical teams.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4DFF5] flex items-center gap-2 text-xs text-[#A78BFA] font-mono font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
              <span>Democratizing enterprise-grade software intelligence for all businesses</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="relative rounded-sm bg-[#FAF8FF]/40 border border-[#E4DFF5] p-8 sm:p-10 shadow-2xl flex flex-col justify-between overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-sm bg-[#6D28D9]/10 border border-[#8B5CF6]/30 text-[#A78BFA]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A78BFA] block">
                    11 / OUR MISSION
                  </span>
                  <span className="text-xs text-[#6B6478] font-mono">Our Daily Commitment</span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B29] uppercase tracking-tight mb-4">
                Help Businesses Automate More. Engage Better. Grow Smarter.
              </h2>

              <p className="text-xs sm:text-sm text-[#6B6478] leading-relaxed">
                Our mission is to build and deliver practical technology that simplifies business operations, improves customer engagement and enables businesses to make better use of AI and automation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E4DFF5] flex items-center gap-2 text-xs text-[#A78BFA] font-mono font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#A78BFA] shrink-0" />
              <span>Delivering measurable, frictionless operational excellence</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

