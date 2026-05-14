import {
  Activity,
  BrainCircuit,
  Coins,
  Map,
  Network,
  UsersRound,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FeatureCard } from './FeatureCard';
import { ModuleCard } from '../types';

const modules: ModuleCard[] = [
  {
    title: 'Demand Forecasting',
    description:
      'Predict demand by region, time window, traffic pattern, weather, historical activity, and operational signals to support proactive planning.',
    icon: BrainCircuit,
  },
  {
    title: 'Route Optimization',
    description:
      'Recommend efficient routes using real-time traffic, delivery windows, distance, driver location, and service constraints.',
    icon: Map,
  },
  {
    title: 'Driver Allocation',
    description:
      'Match drivers to predicted demand and active delivery needs to reduce idle time and improve service coverage.',
    icon: UsersRound,
  },
  {
    title: 'Compensation Automation',
    description:
      'Support accurate, transparent compensation calculations across mileage, time, wait time, incentives, delivery complexity, and policy rules.',
    icon: Coins,
  },
  {
    title: 'Secure Integration Layer',
    description:
      'Provide REST API and webhook-based integrations for dispatch, payroll, fleet, routing, and analytics systems.',
    icon: Network,
  },
  {
    title: 'Reliability Monitoring',
    description:
      'Track latency, failed jobs, route exceptions, compensation anomalies, model drift, and system health in one view.',
    icon: Activity,
  },
];

export function ProductModules() {
  return (
    <section id="platform" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Platform"
          title="BeTherr brings AI, microservices, and operational intelligence into one logistics platform."
          description="The product roadmap is organized around focused modules that can work together as a cloud-native logistics operating layer. Each capability below is currently in development."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <FeatureCard
              key={module.title}
              icon={module.icon}
              title={module.title}
              description={module.description}
              badge="In Development"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
