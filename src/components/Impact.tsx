import { SectionHeader } from './SectionHeader';
import { GlowCard } from './GlowCard';
import { ImpactCard } from '../types';

const impactCards: ImpactCard[] = [
  {
    title: 'Route efficiency',
    description: 'Designed to support shorter routes, lower waste, and stronger service consistency.',
  },
  {
    title: 'Demand readiness',
    description: 'Built to help teams prepare for volume shifts before operations become reactive.',
  },
  {
    title: 'Driver compensation accuracy',
    description: 'Intended to help improve transparency, traceability, and reviewability in pay workflows.',
  },
  {
    title: 'Workforce stability',
    description: 'Targeting improvements in planning clarity and operational fairness for field teams.',
  },
  {
    title: 'Lower operational waste',
    description: 'Designed to support better allocation of time, mileage, and dispatch resources.',
  },
  {
    title: 'Secure data exchange',
    description: 'Built to enable safer connections across routing, payroll, dispatch, and analytics systems.',
  },
  {
    title: 'Scalable transportation infrastructure',
    description: 'Created to support growth without relying on fragile manual coordination layers.',
  },
  {
    title: 'Business expansion readiness',
    description: 'Designed to help operators add coverage, locations, and workflows with greater confidence.',
  },
  {
    title: 'Reliability and uptime',
    description: 'Targeting stronger operational resilience through monitoring, alerting, and service visibility.',
  },
  {
    title: 'Technology modernization',
    description: 'Built to enable a more data-driven operating model for logistics organizations.',
  },
];

export function Impact() {
  return (
    <section id="impact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Impact"
          title="Designed for measurable operational and economic impact."
          description="Every module on the roadmap is being shaped around operational leverage, auditability, resilience, and infrastructure readiness for logistics teams that expect serious systems."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {impactCards.map((item) => (
            <GlowCard key={item.title} className="h-full p-5">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </GlowCard>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-sm leading-7 text-slate-300 shadow-card backdrop-blur-xl">
          BeTherr is being developed to address logistics challenges that affect companies,
          drivers, customers, and regional economies. By improving routing, forecasting,
          compensation workflows, and system reliability, the platform is designed to support
          more efficient and resilient transportation operations.
        </div>
      </div>
    </section>
  );
}
