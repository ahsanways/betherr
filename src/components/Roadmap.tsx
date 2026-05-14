import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { GlowCard } from './GlowCard';
import { RoadmapItem } from '../types';

const roadmap: RoadmapItem[] = [
  {
    phase: 'Phase 1: Research & Architecture',
    status: 'In Progress',
    description:
      'Defining platform architecture, AI workflows, security model, microservices boundaries, and pilot requirements.',
  },
  {
    phase: 'Phase 2: MVP Build',
    status: 'In Progress',
    description:
      'Building early modules for demand forecasting, route optimization, driver allocation, compensation automation, and operational dashboards.',
  },
  {
    phase: 'Phase 3: Pilot Partner Access',
    status: 'Opening Soon',
    description:
      'Preparing limited pilot access for logistics, delivery, and fleet teams interested in testing BeTherr’s early capabilities.',
  },
  {
    phase: 'Phase 4: Production SaaS Launch',
    status: 'Planned',
    description:
      'Scaling the platform with secure APIs, monitoring, documentation, training workflows, and enterprise-ready deployment.',
  },
  {
    phase: 'Phase 5: Continuous Optimization',
    status: 'Planned',
    description:
      'Expanding AI models, reporting, third-party integrations, and reliability intelligence based on pilot feedback.',
  },
];

const statusClasses: Record<RoadmapItem['status'], string> = {
  'In Progress': 'border-cyan/30 bg-cyan/10 text-cyan',
  'Opening Soon': 'border-teal/30 bg-teal/10 text-teal',
  Planned: 'border-violet/30 bg-violet/10 text-violet-200',
};

export function Roadmap() {
  return (
    <section id="roadmap" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Roadmap"
          title="Development roadmap"
          description="The product is actively being built. This roadmap is intended to show credible execution stages from architecture through pilot access and beyond."
          align="center"
        />
        <div className="mt-14 space-y-6">
          {roadmap.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="relative"
            >
              {index < roadmap.length - 1 ? (
                <div className="absolute left-5 top-16 h-[calc(100%+1.5rem)] w-px bg-gradient-to-b from-cyan/50 to-transparent sm:left-1/2" />
              ) : null}
              <GlowCard className="grid gap-5 p-6 sm:grid-cols-[140px_1fr] sm:p-8">
                <div className="flex items-start gap-4 sm:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan/20 bg-cyan/10 font-display text-sm font-bold text-cyan">
                    0{index + 1}
                  </div>
                  <span
                    className={`mt-0 inline-flex rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] sm:mt-4 ${statusClasses[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-white">{item.phase}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
