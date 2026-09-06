import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatBanner } from './components/StatBanner';
import { TrustStrip } from './components/TrustStrip';
import { WhoWeAre } from './components/WhoWeAre';
import { PhotoBand } from './components/PhotoBand';
import { WhatWeDo } from './components/WhatWeDo';
import { DataFlowShowcase } from './components/DataFlowShowcase';
import { ProductsShowcase } from './components/ProductsShowcase';
import { OurApproach } from './components/OurApproach';
import { Industries } from './components/Industries';
import { ProblemSolution } from './components/ProblemSolution';
import { WhyEngagium } from './components/WhyEngagium';
import { TechnologyStack } from './components/TechnologyStack';
import { CapabilityMarquee } from './components/CapabilityMarquee';
import { Partnerships } from './components/Partnerships';
import { DevelopmentJourney } from './components/DevelopmentJourney';
import { VisionMission } from './components/VisionMission';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { LegalModal } from './components/LegalModal';
import { PRODUCTS_DATA } from './data/companyData';
import { ProductItem } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [preselectedContactInterest, setPreselectedContactInterest] = useState<string>('Business Automation');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  const scrollToContact = (interest?: string) => {
    if (interest) {
      setPreselectedContactInterest(interest);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToApproach = () => {
    const elem = document.getElementById('our-approach');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProductByName = (productName: string) => {
    const prod = PRODUCTS_DATA.find((p) => 
      p.name.toLowerCase() === productName.toLowerCase() ||
      productName.toLowerCase().includes(p.name.toLowerCase())
    );
    if (prod) {
      setSelectedProduct(prod);
    } else {
      const prodElem = document.getElementById('products');
      if (prodElem) {
        prodElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#1E1B29] flex flex-col selection:bg-[#7C3AED]/20 selection:text-[#4C1D95]">
      
      {/* Global Navigation Header */}
      <Navbar 
        onOpenContact={scrollToContact} 
        onOpenLegal={setLegalModalType} 
      />

      {/* Main Content Sections according to section 19 Homepage Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenContact={() => scrollToContact('Business Automation')} />

        {/* Bold results/stat callout banner */}
        <StatBanner />

        {/* 2. Trust / Positioning Strip */}
        <TrustStrip />

        {/* 3. Who We Are Section */}
        <WhoWeAre onExploreApproach={scrollToApproach} />

        {/* Editorial photo band */}
        <PhotoBand />

        {/* 4. What We Do Section */}
        <WhatWeDo onSelectService={(service) => scrollToContact(service)} />

        {/* Data flow / ecosystem connection visualization */}
        <DataFlowShowcase />

        {/* 5. Our Technology Products */}
        <ProductsShowcase onOpenContact={scrollToContact} />

        {/* 6. Innovate / Automate / Engage / Grow (Our Approach) */}
        <OurApproach />

        {/* 7. Industries (Solutions for Business) */}
        <Industries onOpenContact={(industry) => scrollToContact(industry)} />

        {/* Problem to Solution comparison */}
        <ProblemSolution />

        {/* 8. Why Engagium */}
        <WhyEngagium />

        {/* 9. Technology Stack */}
        <TechnologyStack />

        {/* Scrolling capability marquee */}
        <CapabilityMarquee />

        {/* 10. Technology Partnerships */}
        <Partnerships onOpenPartnerInquiry={(type) => scrollToContact(type || 'Technology Partnership')} />

        {/* 11. Our Development Journey */}
        <DevelopmentJourney />

        {/* 12 & 13. Vision & Mission */}
        <VisionMission />

        {/* 14. Final CTA */}
        <FinalCTA onOpenContact={() => scrollToContact('Business Automation')} />

        {/* 15. Contact Section */}
        <ContactSection preselectedInterest={preselectedContactInterest} />
      </main>

      {/* Global Corporate Footer */}
      <Footer
        onOpenProduct={handleOpenProductByName}
        onOpenContact={scrollToContact}
        onOpenLegal={setLegalModalType}
      />

      {/* In-depth Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenContact={scrollToContact}
      />

      {/* Corporate Legal Policy Modals */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#FAF8FF]/80 hover:bg-[#F1EDFB] border border-[#D9D2F0] text-[#453D57] hover:text-[#4C1D95] shadow-xl backdrop-blur-sm transition-all active:scale-90"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </div>
  );
}
