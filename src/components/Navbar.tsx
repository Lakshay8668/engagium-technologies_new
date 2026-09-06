import React, { useState, useEffect } from 'react';
import { 
  Layers, 
  Menu, 
  X, 
  ArrowUpRight, 
  Globe, 
  ChevronDown, 
  Sparkles,
  ShieldCheck,
  Building2,
  Workflow
} from 'lucide-react';
import { DOMAIN_ARCHITECTURE } from '../data/companyData';

interface NavbarProps {
  onOpenContact: (interest?: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'refund') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainDropdownOpen, setDomainDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#who-we-are' },
    { label: 'What We Do', href: '#what-we-do' },
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#industries' },
    { label: 'Technology', href: '#technology' },
    { label: 'Partners', href: '#partnerships' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-[#E4DFF5] py-3 shadow-2xl shadow-[#E4DFF5]/80' 
          : 'bg-white/40 backdrop-blur-sm border-b border-[#E4DFF5]/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Corporate Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#6D28D9] rounded-sm flex items-center justify-center font-bold text-lg text-white shadow-md shadow-[#6D28D9]/30 group-hover:bg-[#7C3AED] transition-colors">
              E
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#1E1B29] flex items-center gap-1.5">
                ENGAGIUM
                <span className="text-[#7C3AED] font-medium">TECHNOLOGIES</span>
              </span>
              <span className="text-[9px] text-[#6B6478] tracking-widest font-mono uppercase">
                AI AUTOMATION &amp; SOFTWARE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-[#6B6478] hover:text-[#4C1D95] uppercase tracking-widest transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Domain Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Domain Ecosystem Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDomainDropdownOpen(!domainDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#FAF8FF]/60 border border-[#E4DFF5] text-[#453D57] text-xs font-medium hover:border-[#7C3AED]/40 hover:text-[#4C1D95] transition-all"
                aria-expanded={domainDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span className="text-[#453D57] font-mono text-[11px]">engagiumtechnologies.com</span>
                <ChevronDown className={`w-3 h-3 text-[#6B6478] transition-transform ${domainDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {domainDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-80 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] p-2 shadow-2xl shadow-[#E4DFF5]/90 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setDomainDropdownOpen(false)}
                >
                  <div className="px-3 py-2 border-b border-[#E4DFF5]">
                    <p className="text-[10px] font-bold text-[#6B6478] uppercase tracking-widest font-mono">
                      Engagium Ecosystem Architecture
                    </p>
                  </div>
                  <div className="mt-1 space-y-1">
                    {DOMAIN_ARCHITECTURE.map((item) => (
                      <div
                        key={item.domain}
                        className={`p-2.5 rounded-sm text-left transition-all ${
                          item.isPrimary
                            ? 'bg-[#6D28D9]/10 border border-[#7C3AED]/30'
                            : 'hover:bg-[#F1EDFB]/60 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-xs font-bold font-mono ${item.isPrimary ? 'text-[#A78BFA]' : 'text-[#2B2438]'}`}>
                            {item.domain}
                          </span>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-sm font-semibold uppercase tracking-wider ${
                            item.isPrimary ? 'bg-[#7C3AED]/20 text-[#DDD6FE] border border-[#7C3AED]/30' : 'bg-[#F1EDFB] text-[#6B6478]'
                          }`}>
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#6B6478] leading-snug">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenContact()}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-sm bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md shadow-[#6D28D9]/20 active:scale-95"
            >
              <span>Request Access</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenContact()}
              className="sm:hidden px-3.5 py-1.5 rounded-sm bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-wider"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#453D57] hover:text-[#4C1D95]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] p-4 shadow-2xl space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#E4DFF5]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-sm text-xs font-medium text-[#453D57] hover:text-[#A78BFA] hover:bg-[#F1EDFB]/60 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Domain Ecosystem Info in Mobile Menu */}
            <div className="p-3 rounded-sm bg-white border border-[#E4DFF5] space-y-2">
              <span className="text-[10px] font-bold text-[#6B6478] uppercase tracking-widest flex items-center gap-1.5 font-mono">
                <Globe className="w-3.5 h-3.5 text-[#A78BFA]" />
                Engagium Ecosystem
              </span>
              <div className="text-[11px] space-y-1 text-[#6B6478]">
                <p><span className="font-semibold text-[#2B2438] font-mono">engagiumtechnologies.com:</span> Corporate &amp; Tech</p>
                <p><span className="font-semibold text-[#2B2438] font-mono">engagium.in:</span> Product Sales &amp; Demos</p>
                <p><span className="font-semibold text-[#2B2438] font-mono">engagium.ai:</span> Cloud App Platform</p>
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-sm bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>Request Access</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
