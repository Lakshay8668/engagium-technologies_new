import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Workflow, 
  Users, 
  MessageSquare, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  Activity,
  Zap
} from 'lucide-react';

interface EcosystemNode {
  id: string;
  stepNumber: string;
  name: string;
  category: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  activePayload: string;
  connections: string[];
  metrics: string;
  progressPercent: string;
}

const NODES: EcosystemNode[] = [
  {
    id: 'ai-core',
    stepNumber: '01 / REASONING',
    name: 'AI Intelligence Core',
    category: 'Context & Reasoning',
    badge: 'Neural LLM',
    icon: Brain,
    description: 'Processes organizational signals, decodes customer intent, and executes multi-step inference.',
    activePayload: 'Inbound message analyzed • Intent: High-Value Consultation • Sentiment: +0.92',
    connections: ['automation-bus', 'crm-hub', 'wa-channel'],
    metrics: '99.4% intent accuracy • <250ms inference latency',
    progressPercent: 'w-full',
  },
  {
    id: 'automation-bus',
    stepNumber: '02 / ENGINE',
    name: 'Automation Engine',
    category: 'Event Orchestration',
    badge: 'Background Bus',
    icon: Workflow,
    description: 'Deterministic micro-service event bus executing asynchronous background pipelines and webhooks.',
    activePayload: 'Trigger fired: Form submission → Instant WhatsApp dispatch + CRM pipeline stage create',
    connections: ['ai-core', 'crm-hub', 'wa-channel', 'gmb-sync', 'analytics-growth'],
    metrics: '24/7 autonomous uptime • Multi-step pipeline routing',
    progressPercent: 'w-5/6',
  },
  {
    id: 'crm-hub',
    stepNumber: '03 / PIPELINE',
    name: 'Engagium CRM',
    category: 'Sales Pipeline Hub',
    badge: 'Lead Lifecycle',
    icon: Users,
    description: 'Centralized lead repository, dynamic deal progression, rep assignment, and automated customer records.',
    activePayload: 'Lead assigned to Senior Advisor • Follow-up task scheduled in 15 mins • Score: 94/100',
    connections: ['ai-core', 'automation-bus', 'analytics-growth'],
    metrics: 'Unified customer records • 0 lost sales leads',
    progressPercent: 'w-4/5',
  },
  {
    id: 'wa-channel',
    stepNumber: '04 / OMNICHANNEL',
    name: 'WhatsApp Automation',
    category: 'Omnichannel Engagement',
    badge: 'Conversational',
    icon: MessageSquare,
    description: 'Official WhatsApp Cloud API automation, 24/7 AI chatbot assistant, and automated interactive follow-ups.',
    activePayload: 'Automated brochure PDF & booking link delivered via WhatsApp in 1.4s',
    connections: ['ai-core', 'automation-bus', 'crm-hub'],
    metrics: '98% open rates • Instant 2-way engagement',
    progressPercent: 'w-3/4',
  },
  {
    id: 'gmb-sync',
    stepNumber: '05 / REPUTATION',
    name: 'Google Business & Reviews',
    category: 'Local Search & Reputation',
    badge: 'Reputation AI',
    icon: MapPin,
    description: 'Automated 5-star Google review collection, AI personalized replies, profile optimization, and local SEO.',
    activePayload: 'New 5★ Google Review received • Brand-personalized AI reply posted instantly',
    connections: ['automation-bus', 'analytics-growth'],
    metrics: 'Boost local ranking • 1-click review generation',
    progressPercent: 'w-2/3',
  },
  {
    id: 'analytics-growth',
    stepNumber: '06 / TELEMETRY',
    name: 'Growth & Intelligence',
    category: 'Business Telemetry',
    badge: 'Insights Engine',
    icon: TrendingUp,
    description: 'Real-time telemetry, conversion velocity tracking, audit logs, and continuous operational optimization.',
    activePayload: 'Daily report: +42% faster lead response time • 18 reviews generated today',
    connections: ['crm-hub', 'gmb-sync', 'automation-bus'],
    metrics: 'Real-time ROI dashboard • Data-driven decisions',
    progressPercent: 'w-1/2',
  },
];

export const HeroEcosystem: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('automation-bus');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNodeId((prev) => {
        const idx = NODES.findIndex(n => n.id === prev);
        return NODES[(idx + 1) % NODES.length].id;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[1];

  return (
    <div className="relative w-full rounded-sm bg-white/60 border border-[#E4DFF5] p-5 sm:p-7 shadow-2xl backdrop-blur-md overflow-hidden">
      
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6D28D9]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar of the ecosystem visualizer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[#E4DFF5]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-none bg-[#7C3AED] animate-pulse" />
          <h4 className="text-xs font-bold uppercase tracking-widest text-[#2B2438] font-mono flex items-center gap-2">
            ENGAGIUM AUTONOMOUS ECOSYSTEM ARCHITECTURE
            <span className="text-[10px] px-2 py-0.5 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] font-mono">
              REAL-TIME FLOW
            </span>
          </h4>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#6B6478]">
          <span className="hidden sm:inline font-mono text-[11px]">Select node to inspect runtime metrics</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF8FF]/80 border border-[#E4DFF5] text-[#453D57] font-mono text-[10px]">
            <Activity className="w-3 h-3 text-[#A78BFA]" />
            <span>RUNTIME: 99.9% LIVE</span>
          </div>
        </div>
      </div>

      {/* Interactive Ecosystem Grid (6 cards) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
        {NODES.map((node) => {
          const isSelected = node.id === activeNodeId;
          const isConnected = activeNode.connections.includes(node.id) || isSelected;
          const Icon = node.icon;

          return (
            <button
              key={node.id}
              onClick={() => setActiveNodeId(node.id)}
              className={`text-left p-5 border transition-all duration-200 relative flex flex-col justify-between ${
                isSelected
                  ? 'border-[#E4DFF5] bg-[#FAF8FF]/60 backdrop-blur-sm border-l-2 border-l-[#7C3AED] shadow-lg shadow-[#2E1065]/40'
                  : isConnected
                  ? 'border-[#E4DFF5] bg-[#FAF8FF]/30 backdrop-blur-sm hover:border-[#D9D2F0]'
                  : 'border-[#EDE9FE] bg-white/40 opacity-70 hover:opacity-100 hover:border-[#E4DFF5]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono font-bold tracking-wider ${isSelected ? 'text-[#A78BFA]' : 'text-[#5C546B]'}`}>
                    {node.stepNumber}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#FAF8FF] border border-[#E4DFF5] text-[#6B6478]">
                    {node.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1.5 rounded-sm bg-[#FAF8FF] border border-[#E4DFF5] ${isSelected ? 'text-[#A78BFA]' : 'text-[#6B6478]'}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-xs font-bold text-[#1E1B29] uppercase tracking-tight">
                    {node.name}
                  </h5>
                </div>

                <p className="text-xs text-[#6B6478] leading-relaxed line-clamp-2">
                  {node.description}
                </p>
              </div>

              {/* Progress indicator bar matching design theme */}
              <div className="w-full h-1 bg-[#F1EDFB] mt-4">
                <div className={`h-full transition-all duration-500 ${isSelected ? 'bg-[#7C3AED] ' + node.progressPercent : 'bg-[#E4DFF5] w-1/3'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Live Telemetry Drawer */}
      <div className="relative z-10 rounded-sm bg-[#FAF8FF]/50 border border-[#E4DFF5] p-4 sm:p-5 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-[#E4DFF5]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-sm bg-[#6D28D9]/10 border border-[#7C3AED]/30 text-[#A78BFA]">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#1E1B29] font-mono uppercase tracking-wider">
                  Inspecting Subsystem: {activeNode.name}
                </span>
                <span className="text-[10px] px-2 py-0.5 border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#A78BFA] font-mono">
                  {activeNode.category}
                </span>
              </div>
              <p className="text-xs text-[#6B6478] mt-0.5 font-mono">
                {activeNode.metrics}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#5C546B] font-mono">LINKED NODES:</span>
            <div className="flex flex-wrap gap-1.5">
              {activeNode.connections.map((cId) => {
                const targetNode = NODES.find((n) => n.id === cId);
                return (
                  <button
                    key={cId}
                    onClick={() => setActiveNodeId(cId)}
                    className="text-[10px] px-2.5 py-1 rounded-sm bg-white hover:bg-[#F1EDFB] text-[#453D57] hover:text-[#A78BFA] border border-[#E4DFF5] font-mono uppercase transition-colors"
                  >
                    {targetNode?.name.split(' ')[0] || cId}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Live Payload Simulator Bar */}
        <div className="mt-3 pt-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <span className="text-[10px] font-mono uppercase text-[#A78BFA] font-bold tracking-widest px-2.5 py-0.5 bg-[#2E1065]/80 border border-[#4C1D95]/60 shrink-0">
              TELEMETRY LOG
            </span>
            <span className="text-[#453D57] text-xs font-mono truncate">
              {activeNode.activePayload}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#6B6478] shrink-0 self-end sm:self-center font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>ISO-27001 &bull; 99.9% SLA</span>
          </div>
        </div>
      </div>

    </div>
  );
};

