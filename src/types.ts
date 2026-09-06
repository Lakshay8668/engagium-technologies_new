export interface NavItem {
  label: string;
  href: string;
}

export interface DomainRole {
  domain: string;
  role: string;
  badge: string;
  description: string;
  isPrimary?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  features: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  externalSalesUrl: string;
  iconName: string;
  colorScheme: 'indigo' | 'cyan' | 'emerald';
}

export interface WhatWeDoPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  icon: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  action: string;
  description: string;
  metrics: string;
}

export interface IndustrySolution {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  challengesSolved: string[];
  keyAutomations: string[];
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface TechCapability {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface PartnershipType {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  targetAudience: string;
  badge: string;
}

export interface JourneyPhase {
  phase: string;
  title: string;
  description: string;
  status: 'Completed' | 'Current Focus' | 'Next Horizon' | 'Scale Vision';
  milestones: string[];
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneNumber: string;
  interest: string;
  message: string;
}
