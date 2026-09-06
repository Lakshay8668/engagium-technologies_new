import React from 'react';
import { 
  Workflow, 
  Globe, 
  ExternalLink, 
  Mail
} from 'lucide-react';
import { DOMAIN_ARCHITECTURE } from '../data/companyData';

interface FooterProps {
  onOpenProduct: (productName: string) => void;
  onOpenContact: (interest?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenProduct, 
  onOpenContact, 
  onOpenLegal 
}) => {
  return (
    <footer className="relative bg-white border-t border-[#E4DFF5] text-[#6B6478] text-xs">
      
      {/* Top 3-Domain Ecosystem Banner */}
      <div className="border-b border-[#E4DFF5] py-6 bg-[#FAF8FF]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#453D57]">
              <Globe className="w-4 h-4 text-[#7C3AED]" />
              <span>Engagium Global Domain Ecosystem</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[11px]">
              {DOMAIN_ARCHITECTURE.map((item) => (
                <div 
                  key={item.domain}
                  className={`px-3 py-1.5 rounded-sm border flex items-center gap-2 ${
                    item.isPrimary
                      ? 'bg-white border-[#7C3AED]/50 text-[#A78BFA] font-mono font-bold'
                      : 'bg-white/60 border-[#E4DFF5] text-[#453D57] hover:border-[#D9D2F0] font-mono'
                  }`}
                >
                  <span className="font-mono">{item.domain}</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-sm bg-[#F1EDFB] text-[#6B6478] uppercase font-mono">
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#6D28D9] flex items-center justify-center text-white">
                <Workflow className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-[#1E1B29] uppercase">
                  ENGAGIUM TECHNOLOGIES
                </span>
                <span className="text-[10px] text-[#6B6478] font-mono font-medium tracking-wider uppercase">
                  AI Automation &amp; Software Solutions
                </span>
              </div>
            </div>

            <p className="text-xs text-[#6B6478] leading-relaxed max-w-sm">
              Building smarter businesses through AI, automation and scalable software. From workflow optimization to enterprise applications.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-[#453D57] font-mono text-[11px] px-3 py-1.5 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5]">
                <Mail className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>contact@engagiumtechnologies.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B2438] font-mono">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#who-we-are" className="hover:text-[#A78BFA] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-[#A78BFA] transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-[#A78BFA] transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => onOpenContact('Careers & Talent')}
                  className="hover:text-[#A78BFA] transition-colors flex items-center gap-1"
                >
                  <span>Careers</span>
                  <span className="text-[9px] px-1 rounded-sm bg-[#7C3AED]/20 text-[#DDD6FE] font-mono">Hiring</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A78BFA] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B2438] font-mono">
              Software Products
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenProduct('Engagium CRM')}
                  className="hover:text-[#A78BFA] transition-colors text-left"
                >
                  Engagium CRM
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProduct('Engagium GMB')}
                  className="hover:text-[#A78BFA] transition-colors text-left"
                >
                  Engagium GMB
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenProduct('Engagium WA Automation')}
                  className="hover:text-[#A78BFA] transition-colors text-left"
                >
                  Engagium WA Automation
                </button>
              </li>
              <li className="pt-2 border-t border-[#E4DFF5]">
                <a
                  href="https://engagium.in"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#A78BFA] font-medium hover:underline inline-flex items-center gap-1 text-[11px] font-mono"
                >
                  <span>Product Sales &amp; Demos (engagium.in)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Partnership Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B2438] font-mono">
              Partnerships
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenContact('Technology Partnership')}
                  className="hover:text-[#A78BFA] transition-colors text-left"
                >
                  Technology Partners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('SaaS & White-Label Partnerships')}
                  className="hover:text-[#A78BFA] transition-colors text-left"
                >
                  SaaS Partnerships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('White-Label / Reseller Partnership')}
                  className="hover:text-[#A78BFA] transition-colors text-left"
                >
                  White-Label Partnerships
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenContact('White-Label / Reseller Partnership')}
                  className="hover:text-[#A78BFA] transition-colors text-left"
                >
                  Reseller Program
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-8 border-t border-[#E4DFF5] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B6478] font-mono">
          <div>
            &copy; 2026 Engagium Technologies &middot; All Rights Reserved
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#2B2438] transition-colors"
            >
              Privacy Policy
            </button>
            <span>&middot;</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#2B2438] transition-colors"
            >
              Terms &amp; Conditions
            </button>
            <span>&middot;</span>
            <button
              onClick={() => onOpenLegal('refund')}
              className="hover:text-[#2B2438] transition-colors"
            >
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

