import {
  Boxes,
  BriefcaseBusiness,
  Building2,
  Truck,
  Users2,
  Workflow,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { FeatureCard } from './FeatureCard';
import { GlowCard } from './GlowCard';
import { SolutionCard } from '../types';

const solutions: SolutionCard[] = [
  {
    title: 'Last-mile delivery operators',
    description:
      'Support dispatch teams with demand forecasting, route intelligence, and workforce planning tuned for high-velocity deliveries.',
    icon: Truck,
  },
  {
    title: 'Fleet management teams',
    description:
      'Improve vehicle utilization, route consistency, and operator readiness with real-time operational visibility.',
    icon: Boxes,
  },
  {
    title: 'Logistics and supply chain companies',
    description:
      'Coordinate planning, service reliability, and cross-system intelligence across more complex transportation networks.',
    icon: Building2,
  },
  {
    title: 'Retail delivery networks',
    description:
      'Prepare for demand peaks and service windows with smarter allocation and monitoring workflows.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Transportation technology platforms',
    description:
      'Extend existing products with API-driven forecasting, optimization, and operational intelligence capabilities.',
    icon: Workflow,
  },
  {
    title: 'Driver compensation and operations teams',
    description:
      'Bring audit-friendly logic, clearer compensation workflows, and anomaly checks into labor-sensitive operations.',
    icon: Users2,
  },
];

const deliverables = [
  'SaaS platform access',
  'AI logistics optimization modules',
  'API integration support',
  'Implementation planning',
  'Pilot onboarding',
  'Technical documentation',
  'Operational training',
  'Dashboard and reporting tools',
  'Monitoring and reliability setup',
];

export function Solutions() {
  return (
    <section id="solutions" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Solutions"
          title="Built for teams moving goods, people, and operational decisions at scale."
          description="BeTherr is being developed to serve transportation and logistics organizations that need clearer forecasting, faster planning loops, safer integrations, and more reliable field operations."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {solutions.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <GlowCard className="mt-10 p-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan/80">
                What we will provide
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                A pilot-ready engagement path for early logistics partners.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Early collaboration is expected to include platform access, onboarding, technical
                planning, and documentation that help teams evaluate the product roadmap in a
                serious operating context.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm font-medium text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
