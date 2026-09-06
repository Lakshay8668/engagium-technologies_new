import React from 'react';
import { 
  X, 
  ArrowUpRight, 
  CheckCircle2, 
  Users, 
  MapPin, 
  MessageSquare, 
  Layers, 
  Globe 
} from 'lucide-react';
import { ProductItem } from '../types';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onOpenContact: (productName: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onOpenContact }) => {
  if (!product) return null;

  const iconMap: Record<string, React.ElementType> = {
    Users: Users,
    MapPin: MapPin,
    MessageSquare: MessageSquare,
  };

  const Icon = iconMap[product.iconName] || Layers;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-sm bg-[#F1EDFB] text-[#6B6478] hover:text-[#4C1D95] hover:bg-[#E4DFF5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 pb-6 border-b border-[#E4DFF5] pr-8">
          <div className="p-3.5 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA] shrink-0">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded-sm bg-[#7C3AED]/20 text-[#DDD6FE] border border-[#7C3AED]/30">
                {product.badge}
              </span>
              <span className="text-[11px] font-mono text-[#6B6478] uppercase">
                Engagium Suite
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B29] uppercase tracking-tight">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-[#A78BFA] font-medium mt-0.5 font-mono">
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="py-6 space-y-6">
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C546B] mb-2">
              Product Overview
            </h3>
            <p className="text-xs sm:text-sm text-[#453D57] leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C546B] mb-3">
              Core Architectural Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {product.capabilities.map((cap, i) => (
                <div key={i} className="p-3.5 rounded-sm bg-white border border-[#E4DFF5]">
                  <h4 className="text-xs font-bold text-[#2B2438] uppercase tracking-tight mb-1">
                    {cap.title}
                  </h4>
                  <p className="text-[11px] text-[#6B6478] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Matrix */}
          <div>
            <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#5C546B] mb-3">
              Standard Feature Matrix
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-sm bg-white border border-[#E4DFF5] flex items-center gap-2 text-xs text-[#453D57] font-mono"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA] shrink-0" />
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Sales Portal Notice */}
          <div className="p-4 rounded-sm bg-white border border-[#7C3AED]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#A78BFA] shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#2B2438] uppercase tracking-tight font-mono">
                  Commercial pricing, product demos &amp; instant sign-up
                </p>
                <p className="text-[11px] text-[#6B6478] font-mono">
                  Commercial sales and interactive sandbox environments live on <span className="text-[#A78BFA] font-bold">engagium.in</span>
                </p>
              </div>
            </div>
            <a
              href="https://engagium.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#FAF8FF] hover:bg-[#F1EDFB] text-[#A78BFA] text-xs font-mono font-bold shrink-0 transition-colors border border-[#E4DFF5] uppercase tracking-wider"
            >
              <span>Visit engagium.in</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#E4DFF5] flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-sm bg-[#F1EDFB] hover:bg-[#E4DFF5] text-[#453D57] text-xs font-mono uppercase tracking-wider font-semibold"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenContact(product.name);
            }}
            className="w-full sm:w-auto px-5 py-2 rounded-sm bg-[#6D28D9] hover:bg-[#7C3AED] text-white font-bold text-xs uppercase tracking-widest shadow-md shadow-[#6D28D9]/20 transition-all"
          >
            Inquire for Enterprise Deployment
          </button>
        </div>

      </div>
    </div>
  );
};

