import { AlertTriangle, Clock3, GitBranch, Route, ShieldAlert, Users } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FeatureCard } from './FeatureCard';
import { Problem } from '../types';

const problems: Problem[] = [
  {
    title: 'Demand moves faster than manual planning',
    description:
      'Rapid shifts in order volume, geography, and timing can outpace spreadsheet-driven forecasting and dispatch planning.',
    icon: AlertTriangle,
  },
  {
    title: 'Route inefficiency compounds cost and delay',
    description:
      'Unoptimized routes can increase fuel consumption, missed windows, and avoidable idle time across delivery networks.',
    icon: Route,
  },
  {
    title: 'Driver allocation is often reactive',
    description:
      'Coverage decisions are frequently made after demand spikes appear, reducing responsiveness and field efficiency.',
    icon: Users,
  },
  {
    title: 'Compensation workflows can be hard to audit',
    description:
      'Mileage, time, incentives, and exception handling may live across fragmented tools that limit transparency.',
    icon: Clock3,
  },
  {
    title: 'Integrations create security and reliability pressure',
    description:
      'Third-party systems need secure, traceable data exchange without adding brittle operational dependencies.',
    icon: GitBranch,
  },
  {
    title: 'Monitoring gaps raise operational risk',
    description:
      'Without real-time visibility into failures, anomalies, and service health, small issues can become expensive disruptions.',
    icon: ShieldAlert,
  },
];

export function ProblemSection() {
  return (
    <section id="impact-problem" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why It Matters"
          title="Transportation operations are becoming harder to predict, scale, and trust."
          description="Modern logistics teams face rising complexity across planning, routing, workforce coordination, compensation, integrations, and uptime. BeTherr is being shaped around these pressure points."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {problems.map((problem) => (
            <FeatureCard
              key={problem.title}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
