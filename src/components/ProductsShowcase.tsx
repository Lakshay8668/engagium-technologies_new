import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe, 
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { PRODUCTS_DATA } from '../data/companyData';
import { ProductItem } from '../types';
import { ProductModal } from './ProductModal';

interface ProductsShowcaseProps {
  onOpenContact: (interest?: string) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({ onOpenContact }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    Users: Users,
    MapPin: MapPin,
    MessageSquare: MessageSquare,
  };

  return (
    <section id="products" className="relative py-20 lg:py-28 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            03 / ENTERPRISE PRODUCTS
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-bold text-[#1E1B29] tracking-tight">
            Software Designed for{' '}
            <span className="text-[#7C3AED]">
              Modern Businesses
            </span>
          </h2>
          
          <p className="text-[#6B6478] text-sm sm:text-base mt-4 leading-relaxed">
            Our growing portfolio of business software helps companies manage customers, strengthen their digital presence and automate everyday communication.
          </p>

          {/* Corporate architecture disclaimer banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#FAF8FF]/60 border border-[#E4DFF5] text-[#6B6478] text-xs">
            <Globe className="w-4 h-4 text-[#A78BFA] shrink-0" />
            <span>
              Looking for commercial pricing &amp; demos? Visit our dedicated product hub at{' '}
              <a 
                href="https://engagium.in" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#A78BFA] font-semibold hover:underline inline-flex items-center gap-0.5 font-mono"
              >
                engagium.in <ExternalLink className="w-3 h-3" />
              </a>
            </span>
          </div>
        </div>

        {/* 3 Main Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS_DATA.map((product, idx) => {
            const Icon = iconMap[product.iconName] || Users;
            const stepNum = `0${idx + 1} / SUITE`;

            return (
              <div
                key={product.id}
                className="border border-[#E4DFF5] bg-[#FAF8FF]/40 backdrop-blur-sm p-6 sm:p-7 group hover:border-[#7C3AED]/50 transition-all rounded-sm relative flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="p-3 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] text-[#A78BFA] group-hover:bg-[#6D28D9]/10 group-hover:border-[#7C3AED]/30 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#5C546B] font-bold">{stepNum}</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#FAF8FF] border border-[#E4DFF5] text-[#453D57] font-mono">
                        {product.badge}
                      </span>
                    </div>
                  </div>

                  {/* Product Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#1E1B29] uppercase tracking-tight group-hover:text-[#A78BFA] transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-xs text-[#A78BFA] font-mono font-medium mt-1 mb-3">
                    {product.tagline}
                  </p>

                  <p className="text-xs text-[#6B6478] leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 pb-6 border-b border-[#E4DFF5]/80">
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-[#5C546B] block mb-2">
                      Key Modules:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {product.features.slice(0, 6).map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#453D57]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-5 space-y-2.5">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-2.5 px-4 rounded-sm bg-white hover:bg-[#FAF8FF] border border-[#E4DFF5] hover:border-[#D9D2F0] text-[#2B2438] hover:text-[#4C1D95] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    <span>View Architecture Specs</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#6B6478] group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://engagium.in"
                      target="_blank"
                      rel="noreferrer"
                      className="w-1/2 py-2 px-3 rounded-sm bg-[#FAF8FF]/80 hover:bg-[#F1EDFB] border border-[#E4DFF5] text-[10px] font-bold uppercase tracking-wider font-mono text-[#A78BFA] flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Sales &bull; in</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => onOpenContact(product.name)}
                      className="w-1/2 py-2 px-3 rounded-sm bg-[#6D28D9]/10 hover:bg-[#6D28D9]/20 border border-[#7C3AED]/30 text-[10px] font-bold uppercase tracking-wider font-mono text-[#DDD6FE] flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Inquire</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};

