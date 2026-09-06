import {
  DomainRole,
  ProductItem,
  WhatWeDoPillar,
  ApproachStep,
  IndustrySolution,
  Differentiator,
  TechCapability,
  PartnershipType,
  JourneyPhase,
} from '../types';

export const DOMAIN_ARCHITECTURE: DomainRole[] = [
  {
    domain: 'engagiumtechnologies.com',
    role: 'Corporate / Legal Identity',
    badge: 'Current Site',
    description: 'Company profile, capabilities, software products, enterprise partnerships, and corporate technology information.',
    isPrimary: true,
  },
  {
    domain: 'engagium.in',
    role: 'Commercial Product Hub',
    badge: 'Sales & Demos',
    description: 'Customer-facing product showcase, feature breakdowns, tiered commercial pricing, interactive demos, and sales onboarding.',
  },
  {
    domain: 'engagium.ai',
    role: 'Application Ecosystem',
    badge: 'SaaS Platform',
    description: 'Software execution platform, connected SaaS tools, intelligent automation engines, and cloud application workspaces.',
  },
];

export const TRUST_STRIP_ITEMS = [
  {
    id: 'ai-powered',
    title: 'AI-Powered',
    subtitle: 'Intelligent technology designed for practical business applications.',
    stat: '99.4%',
    statLabel: 'Task Execution Precision',
  },
  {
    id: 'automation-first',
    title: 'Automation-First',
    subtitle: 'Reduce repetitive work through smarter digital workflows.',
    stat: '85%',
    statLabel: 'Reduction in Manual Drudgery',
  },
  {
    id: 'scalable-software',
    title: 'Scalable Software',
    subtitle: 'Solutions designed to grow dynamically with your business.',
    stat: '10x',
    statLabel: 'Operational Throughput',
  },
  {
    id: 'business-focused',
    title: 'Business-Focused',
    subtitle: 'Technology built around measurable, concrete business needs.',
    stat: '100%',
    statLabel: 'Pragmatic ROI Alignment',
  },
];

export const WHAT_WE_DO_PILLARS: WhatWeDoPillar[] = [
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    subtitle: 'Intelligent Enterprise Augmentation',
    description: 'We integrate artificial intelligence into business workflows to automate interactions, generate intelligent responses, analyze information and improve everyday operations.',
    bulletPoints: [
      'Natural conversational AI agents with business context',
      'Intelligent document processing and data synthesis',
      'Automated review sentiment analysis and smart replies',
      'Context-aware lead qualification and triage',
    ],
    icon: 'Bot',
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    subtitle: 'End-to-End Workflow Optimization',
    description: 'We identify repetitive processes and transform them into automated workflows that reduce manual effort and improve operational efficiency.',
    bulletPoints: [
      'Multi-step trigger-and-action event routing',
      'Cross-platform webhook and data synchronization',
      'Automated customer notifications and scheduled follow-ups',
      'Elimination of redundant human data entry bottlenecks',
    ],
    icon: 'Workflow',
  },
  {
    id: 'saas-products',
    title: 'SaaS Products',
    subtitle: 'Cloud-Native Business Applications',
    description: 'We develop scalable software products that businesses can access through simple, subscription-based digital platforms.',
    bulletPoints: [
      'Turnkey multi-tenant architectures built for reliability',
      'Zero complex infrastructure requirements for end users',
      'Intuitive user interfaces tailored for high daily adoption',
      'Continuous feature delivery and cloud maintenance',
    ],
    icon: 'Layers',
  },
  {
    id: 'software-solutions',
    title: 'Software Solutions',
    subtitle: 'Purpose-Built Digital Systems',
    description: 'From internal business systems to customer-facing applications, we create technology solutions designed around specific business requirements.',
    bulletPoints: [
      'Custom web architectures and enterprise admin portals',
      'High-throughput REST and GraphQL API integrations',
      'Secure database design with strict access controls',
      'Tailored operational dashboards and analytics systems',
    ],
    icon: 'Code2',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'engagium-crm',
    name: 'Engagium CRM',
    badge: 'Sales & Lead Engine',
    tagline: 'A powerful sales and lead management platform built for conversions.',
    description: 'Engagium CRM is designed to help businesses organize leads, manage sales activities, automate follow-ups, and dramatically improve conversion rates without operational clutter.',
    features: [
      'Lead Management',
      'Sales Pipeline',
      'Lead Assignment',
      'Follow-Up Management',
      'Sales Team Management',
      'Customer Database',
      'Activity Tracking',
      'Reporting & Analytics',
    ],
    capabilities: [
      {
        title: 'Dynamic Pipeline Visualizer',
        description: 'Track deal stages in real time with automated triggers for stalled opportunities.',
      },
      {
        title: 'Intelligent Follow-Up Dispatch',
        description: 'Auto-schedule reminders and smart email/SMS prompts so no prospect slips away.',
      },
      {
        title: 'Team Performance Metrics',
        description: 'Detailed activity auditing, conversion velocity dashboards, and rep quotas.',
      },
    ],
    externalSalesUrl: 'https://engagium.in/products/crm',
    iconName: 'Users',
    colorScheme: 'indigo',
  },
  {
    id: 'engagium-gmb',
    name: 'Engagium GMB',
    badge: 'Reputation & Local AI',
    tagline: 'AI-powered Google Business Profile and reputation management software.',
    description: 'Engagium GMB helps businesses manage their local Google presence, collect 5-star customer feedback, automate smart replies, and dominate local search rankings across all locations.',
    features: [
      'Google Business Profile Management',
      'Review Management',
      'AI Review Replies',
      'Review Collection',
      'WhatsApp Review Requests',
      'Email Review Campaigns',
      'Multi-Location Management',
      'Analytics',
    ],
    capabilities: [
      {
        title: 'Automated AI Response Engine',
        description: 'Craft personalized, brand-aligned replies to positive and negative reviews within seconds.',
      },
      {
        title: 'Omnichannel Review Generation',
        description: 'Trigger frictionless 1-click review invites over WhatsApp and email right after purchase.',
      },
      {
        title: 'Multi-Location Control Center',
        description: 'Oversee hundreds of branches or franchise profiles from a single unified pane of glass.',
      },
    ],
    externalSalesUrl: 'https://engagium.in/products/gmb',
    iconName: 'MapPin',
    colorScheme: 'cyan',
  },
  {
    id: 'engagium-wa-automation',
    name: 'Engagium WA Automation',
    badge: 'Conversational WhatsApp Hub',
    tagline: 'Enterprise WhatsApp automation, smart chatbot routing, and broadcast platform.',
    description: 'A WhatsApp automation platform that helps businesses engage customers directly, automate conversations with intelligent AI agents, manage campaigns, and streamline follow-ups at scale.',
    features: [
      'WhatsApp Automation',
      'AI Chatbot',
      'Campaign Management',
      'Automated Follow-Ups',
      'Customer Segmentation',
      'Lead Engagement',
      'Message Templates',
      'Analytics',
    ],
    capabilities: [
      {
        title: '24/7 AI WhatsApp Agent',
        description: 'Instant resolution for FAQs, product inquiries, appointments, and support requests.',
      },
      {
        title: 'Targeted Broadcast Campaigns',
        description: 'Segment audience lists and send personalized updates with high read and reply rates.',
      },
      {
        title: 'Official Cloud API Integration',
        description: 'Built for enterprise volume, compliance, security, and zero downtime.',
      },
    ],
    externalSalesUrl: 'https://engagium.in/products/wa-automation',
    iconName: 'MessageSquare',
    colorScheme: 'emerald',
  },
];

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: '01',
    title: 'INNOVATE',
    action: 'Discover & Translate Tech',
    description: 'We explore new technologies and turn emerging opportunities in AI and software into practical, dependable business solutions.',
    metrics: 'Cutting-edge AI turned into turnkey tools',
  },
  {
    step: '02',
    title: 'AUTOMATE',
    action: 'Eliminate Repetition',
    description: 'We eliminate repetitive manual processes by creating intelligent, background workflows that run silently and reliably 24/7.',
    metrics: 'Zero manual handoff lag time',
  },
  {
    step: '03',
    title: 'ENGAGE',
    action: 'Frictionless Omnichannel',
    description: 'We help businesses communicate with customers more efficiently across the channels they already use, like WhatsApp, Google, and Email.',
    metrics: 'Instantaneous response rates',
  },
  {
    step: '04',
    title: 'GROW',
    action: 'Sustainable Scale',
    description: 'We build scalable systems that allow businesses to continuously improve operations and create stronger foundations for long-term growth.',
    metrics: 'Resilient digital backbone',
  },
];

export const INDUSTRIES_DATA: IndustrySolution[] = [
  {
    id: 'local-businesses',
    name: 'Local Businesses',
    icon: 'Store',
    tagline: 'Dominate local search, reviews, and fast customer responses.',
    description: 'Improve customer engagement, reviews, lead management, and everyday operations with turnkey automation.',
    challengesSolved: [
      'Missed inbound phone inquiries while serving in-store customers',
      'Inconsistent Google review collection and delayed replies',
      'Scattered customer records without a centralized database',
    ],
    keyAutomations: [
      'Automated WhatsApp inquiry replies with service catalog',
      '1-click post-visit review requests sent via SMS/WhatsApp',
      'Auto-sync leads from local searches into Engagium CRM',
    ],
  },
  {
    id: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    icon: 'Utensils',
    tagline: 'Automate table inquiries, feedback loops, and customer retention.',
    description: 'Automate customer communication and streamline digital customer experiences before, during, and after dining.',
    challengesSolved: [
      'High call volume for reservations, timings, and menus',
      'Unanswered negative reviews impacting foot traffic',
      'Lack of automated customer re-engagement for repeat visits',
    ],
    keyAutomations: [
      'WhatsApp AI concierge for instant menu details & directions',
      'Instant AI review replies on Google Business Profile',
      'Automated birthday and anniversary greeting campaigns',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    icon: 'HeartPulse',
    tagline: 'Streamline patient inquiries, appointment reminders, and follow-ups.',
    description: 'Improve enquiry management, communication, and patient follow-ups while preserving practitioner focus on care.',
    challengesSolved: [
      'No-shows due to lack of timely confirmation reminders',
      'Reception bottlenecks during peak morning hours',
      'Manual follow-ups for routine checkups and test reports',
    ],
    keyAutomations: [
      'Automated multi-step WhatsApp appointment reminders',
      'Secure patient intake forms connected to centralized CRM',
      'Pre-appointment preparation instructions sent automatically',
    ],
  },
  {
    id: 'automotive',
    name: 'Automotive Dealerships & Service',
    icon: 'Car',
    tagline: 'Accelerate test-drive inquiries, service booking, and reputation.',
    description: 'Manage leads, customer communication, and local reputation more efficiently across sales and maintenance divisions.',
    challengesSolved: [
      'Slow response times to online car portal inquiries',
      'Disorganized service center scheduling and status updates',
      'Missed recurring annual maintenance service opportunities',
    ],
    keyAutomations: [
      'Instant test-drive lead routing to on-duty sales reps',
      'Automated vehicle service readiness alerts via WhatsApp',
      'Periodic maintenance reminder triggers based on vehicle history',
    ],
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: 'ShoppingBag',
    tagline: 'Engage shoppers across touchpoints and drive repeat orders.',
    description: 'Automate customer engagement, organize sales processes, and support customers across their shopping journey.',
    challengesSolved: [
      'High cart abandonment and unassisted shopping drop-offs',
      'Repetitive order status queries overwhelming support staff',
      'Fragmented customer segmentation for promotional messaging',
    ],
    keyAutomations: [
      'WhatsApp order tracking and instant shipping updates',
      'Segmented promotional broadcasts with high conversion rates',
      'AI chatbot assisting shoppers with product specs & sizing',
    ],
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    icon: 'Briefcase',
    tagline: 'Qualify high-value clients and streamline project follow-ups.',
    description: 'Simplify lead management, follow-ups, consultation bookings, and client communication for advisory firms.',
    challengesSolved: [
      'Unqualified discovery calls draining senior consultants time',
      'Delayed proposal follow-ups causing lost deal momentum',
      'Scattered client communications across email inboxes',
    ],
    keyAutomations: [
      'Smart lead qualification forms filtering prospective clients',
      'Automated pipeline stage progression and task triggers',
      'Unified client database with complete interaction history',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: 'Building2',
    tagline: 'Instantly capture property leads and accelerate site visits.',
    description: 'Organize leads, automate follow-ups, coordinate site visits, and improve sales workflows for developers and brokers.',
    challengesSolved: [
      'Lead decay from property portal inquiries left uncontacted',
      'Coordinating site visits between agents and buyers manually',
      'Difficulty tracking buyer budget preferences over time',
    ],
    keyAutomations: [
      'Sub-minute WhatsApp brochure delivery upon inquiry submission',
      'Automated site visit calendar booking and agent assignment',
      'Custom buyer pipeline tracking budget, location, and intent',
    ],
  },
  {
    id: 'education',
    name: 'Education & Training Institutes',
    icon: 'GraduationCap',
    tagline: 'Capture student interest, automate counseling, and boost admissions.',
    description: 'Streamline course enquiries, communication, counselor assignment, and lead management during admission cycles.',
    challengesSolved: [
      'Overwhelming admission enquiry surges during key intake months',
      'Disjointed counselor follow-up tracking across team members',
      'Student drop-offs between brochure download and application',
    ],
    keyAutomations: [
      'Instant syllabus and fee structure delivery over WhatsApp',
      'Automated counselor assignment based on course specialty',
      'Multi-channel nurturing sequences for prospective students',
    ],
  },
];

export const WHY_ENGAGIUM_ITEMS: Differentiator[] = [
  {
    id: 'business-first',
    title: 'Business First',
    description: 'Every solution starts with understanding the actual business problem. We do not start with technology and look for a problem—we start with where value is created.',
    highlight: 'Real Business Value Over Tech Hype',
    icon: 'Target',
  },
  {
    id: 'practical-ai',
    title: 'Practical AI',
    description: 'We focus on AI that creates useful outcomes rather than using AI simply for the sake of it. Practical, dependable results that your team can adopt instantly.',
    highlight: 'Reliable, Everyday Business Intelligence',
    icon: 'Sparkles',
  },
  {
    id: 'automation-focused',
    title: 'Automation Focused',
    description: 'We identify repetitive processes and turn them into efficient, automated workflows that eliminate friction and unlock valuable human creativity.',
    highlight: 'Frictionless Background Execution',
    icon: 'Cpu',
  },
  {
    id: 'scalable-technology',
    title: 'Scalable Technology',
    description: 'Our products are designed to evolve as businesses and their requirements grow—engineered on robust cloud-native foundations.',
    highlight: 'Built for High Volume & Future Demands',
    icon: 'TrendingUp',
  },
  {
    id: 'long-term-partnership',
    title: 'Long-Term Partnership',
    description: 'We aim to become a technology partner, not simply another software vendor. We invest in understanding your operational journey for continuous growth.',
    highlight: 'Enduring Alignment & Dedicated Support',
    icon: 'Handshake',
  },
];

export const TECH_CAPABILITIES: TechCapability[] = [
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description: 'AI-powered automation, intelligent responses, NLP sentiment analysis, and context-aware business workflows.',
    tags: ['Generative AI', 'NLP Agent Pipelines', 'Smart Triage', 'Context Embeddings'],
    icon: 'Brain',
  },
  {
    id: 'automation-engine',
    title: 'Automation Engine',
    description: 'Workflow automation, deterministic triggers, webhook integrations, and process optimization that eliminates manual bottlenecks.',
    tags: ['Event Triggers', 'Multi-Step Pipelines', 'Async Workers', 'Error Recovery'],
    icon: 'Zap',
  },
  {
    id: 'cloud-software',
    title: 'Cloud Software',
    description: 'Scalable, accessible, and connected SaaS applications hosted on modern containerized infrastructure.',
    tags: ['Multi-Tenant SaaS', 'Microservices', 'Zero Downtime CI/CD', 'Elastic Compute'],
    icon: 'Cloud',
  },
  {
    id: 'apis-integrations',
    title: 'APIs & Integrations',
    description: 'Connecting diverse business systems, ERPs, CRMs, WhatsApp Cloud API, Google Business APIs, and third-party platforms.',
    tags: ['REST & Webhooks', 'WhatsApp Cloud API', 'Google APIs', 'CRM Connectors'],
    icon: 'Cable',
  },
  {
    id: 'analytics-intelligence',
    title: 'Analytics & Intelligence',
    description: 'Turning raw business activity, lead flows, and communication interactions into actionable decision-making information.',
    tags: ['Real-Time Dashboards', 'Conversion Funnels', 'Review Sentiment', 'Audit Logs'],
    icon: 'BarChart3',
  },
  {
    id: 'security-compliance',
    title: 'Enterprise Security',
    description: 'Building systems with robust data encryption, role-based access control (RBAC), and strict privacy protection practices.',
    tags: ['End-to-End Encryption', 'Role-Based Access', 'Data Isolation', 'Audit Compliance'],
    icon: 'ShieldCheck',
  },
];

export const PARTNERSHIP_TYPES: PartnershipType[] = [
  {
    id: 'tech-partnerships',
    title: 'Technology Partnerships',
    badge: 'Co-Innovation',
    description: 'Collaborate with us to integrate technology and create better end-to-end solutions for modern businesses.',
    benefits: [
      'Direct API co-development and integration roadmaps',
      'Joint go-to-market and ecosystem connectivity',
      'Cross-platform technical support and shared architecture',
    ],
    targetAudience: 'SaaS companies, API providers, and platform developers',
  },
  {
    id: 'saas-white-label',
    title: 'SaaS & White-Label Partnerships',
    badge: 'Branded Distribution',
    description: 'Partner with Engagium to bring software solutions to your customers under your own brand identity and business model.',
    benefits: [
      'Fully customizable white-label portals for CRM & GMB',
      'Recurring software revenue stream with zero R&D overhead',
      'Dedicated partner management and onboarding collateral',
    ],
    targetAudience: 'Digital marketing agencies, consultants, and IT service providers',
  },
  {
    id: 'integration-partnerships',
    title: 'Integration Partnerships',
    badge: 'Workflow Connectors',
    description: 'Connect platforms and workflows to create more powerful, frictionless business solutions for mutual users.',
    benefits: [
      'Plug-and-play connectors with Engagium WA and CRM',
      'Automated bidirectional data synchronization',
      'Co-branded solution guides and partner directory listing',
    ],
    targetAudience: 'ERP providers, payment gateways, and business tooling companies',
  },
];

export const DEVELOPMENT_JOURNEY: JourneyPhase[] = [
  {
    phase: 'Phase 01',
    title: 'Launch',
    description: 'Introduce practical technology solutions to businesses and establish our initial product portfolio across CRM, GMB, and WhatsApp automation.',
    status: 'Completed',
    milestones: [
      'Core architecture design for Engagium CRM, GMB, and WA Automation',
      'Initial deployment across key enterprise pilot programs',
      'Validation of high-reliability automation infrastructure',
    ],
  },
  {
    phase: 'Phase 02',
    title: 'Learn',
    description: 'Work closely with customers across diverse industries to deeply understand real-world operational challenges and daily business workflows.',
    status: 'Completed',
    milestones: [
      'Direct feedback loops across 8 major industry verticals',
      'Refining AI response models for conversational nuances',
      'Optimizing multi-location management for enterprise clients',
    ],
  },
  {
    phase: 'Phase 03',
    title: 'Build',
    description: 'Use those operational insights to develop our own proprietary software, advanced automation systems, and intellectual property.',
    status: 'Current Focus',
    milestones: [
      'Deep integration of cross-platform automated orchestration',
      'Expanding white-label and partner ecosystem capabilities',
      'Advanced predictive analytics and autonomous workflow agents',
    ],
  },
  {
    phase: 'Phase 04',
    title: 'Scale',
    description: 'Expand the Engagium product ecosystem and help more businesses adopt smarter, accessible technology globally.',
    status: 'Next Horizon',
    milestones: [
      'Global multi-region infrastructure expansion',
      'Enterprise ecosystem marketplace on engagium.ai',
      'Democratizing intelligent automation for every growing business',
    ],
  },
];

export const INTEREST_OPTIONS = [
  'Engagium CRM',
  'Engagium GMB',
  'Engagium WA Automation',
  'Business Automation',
  'Custom Software',
  'Technology Partnership',
  'White-Label / Reseller Partnership',
  'Other',
];
