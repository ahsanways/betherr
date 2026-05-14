import { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Problem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ModuleCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ArchitectureLayer = {
  title: string;
  description: string;
  bullets: string[];
};

export type SolutionCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type RoadmapItem = {
  phase: string;
  status: 'In Progress' | 'Opening Soon' | 'Planned';
  description: string;
};

export type ImpactCard = {
  title: string;
  description: string;
};

export type ExpertiseChip = string;
