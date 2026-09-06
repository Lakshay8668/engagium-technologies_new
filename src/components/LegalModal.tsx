import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Engagium Technologies Corporate Data Governance',
      icon: ShieldCheck,
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'Engagium Technologies collects information directly provided by business clients when requesting consultations, submitting inquiries, or configuring enterprise automation systems. This includes contact details, company information, and technical integration parameters.',
        },
        {
          heading: '2. Enterprise Data Isolation & Security',
          body: 'We enforce strict isolation between client data environments. All automated data pipelines, WhatsApp Cloud API webhooks, Google Business profile metrics, and CRM records are encrypted in transit (TLS 1.3) and at rest (AES-256).',
        },
        {
          heading: '3. Third-Party Integrations',
          body: 'When integrating with third-party providers (e.g., Meta WhatsApp Cloud API, Google APIs, client ERPs), data exchange is strictly limited to the operational scopes explicitly authorized for workflow execution.',
        },
        {
          heading: '4. Non-Disclosure & Confidentiality',
          body: 'We do not sell, rent, or monetize client business data. All intellectual property, workflow schemas, and proprietary company configurations remain the exclusive property of the respective business entity.',
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      subtitle: 'Corporate & Software Services Agreement',
      icon: FileText,
      sections: [
        {
          heading: '1. Scope of Corporate Representation',
          body: 'engagiumtechnologies.com serves as the corporate identity and technical capabilities portal for Engagium Technologies. Product sales, specific end-user SaaS licensing, and commercial agreements are fulfilled through engagium.in and affiliated service contracts.',
        },
        {
          heading: '2. Intellectual Property Rights',
          body: 'All proprietary software architectures, AI workflow orchestrators, logos, system trademarks, and domain ecosystems associated with Engagium Technologies are protected under applicable international intellectual property laws.',
        },
        {
          heading: '3. Platform Availability & Service Level',
          body: 'Engagium Technologies designs systems for enterprise high-availability. Standard cloud uptime targets and custom SLA metrics are governed by individual enterprise service agreements.',
        },
        {
          heading: '4. Acceptable Usage',
          body: 'Clients and partners agree not to reverse engineer, disrupt, or exploit any Engagium API infrastructure, automated dispatchers, or security layers.',
        },
      ],
    },
    refund: {
      title: 'Refund Policy',
      subtitle: 'Enterprise Solutions & Subscription Terms',
      icon: RefreshCw,
      sections: [
        {
          heading: '1. Custom Software & Enterprise Engagements',
          body: 'Custom software development, bespoke automation engineering, and dedicated consulting projects are delivered under milestone-based Statements of Work (SOW). Milestone sign-offs and billing terms are specified within each individual contract.',
        },
        {
          heading: '2. SaaS Software Subscriptions',
          body: 'For software subscriptions managed through engagium.in (Engagium CRM, Engagium GMB, Engagium WA Automation), standard recurring billing cancellation and trial terms apply per the commercial portal policies.',
        },
        {
          heading: '3. Inquiries & Billing Adjustments',
          body: 'For billing inquiries, account disputes, or service clarification, enterprise clients can contact our dedicated accounts team at contact@engagiumtechnologies.com.',
        },
      ],
    },
  };

  const current = contentMap[type] || contentMap.privacy;
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-2xl rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-sm bg-[#F1EDFB] text-[#6B6478] hover:text-[#4C1D95] hover:bg-[#E4DFF5] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#E4DFF5]">
          <div className="p-3 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA]">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1E1B29] uppercase tracking-tight">
              {current.title}
            </h2>
            <p className="text-xs text-[#6B6478] font-mono mt-0.5">
              {current.subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs text-[#453D57] leading-relaxed">
          {current.sections.map((sec, idx) => (
            <div key={idx} className="p-4 rounded-sm bg-white border border-[#E4DFF5] space-y-1.5">
              <h3 className="text-xs font-bold text-[#1E1B29] uppercase tracking-tight">
                {sec.heading}
              </h3>
              <p className="text-[#6B6478] leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-[#E4DFF5] flex items-center justify-between text-[11px] text-[#6B6478] font-mono">
          <span>Last Updated: 2026 • Engagium Technologies</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-sm bg-[#F1EDFB] hover:bg-[#E4DFF5] text-[#2B2438] uppercase tracking-wider font-semibold"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};

