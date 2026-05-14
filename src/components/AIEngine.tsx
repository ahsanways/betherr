import { motion } from 'framer-motion';
import { Binary, Brain, GitMerge, Radar, ScanSearch, ShieldCheck } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { GlowCard } from './GlowCard';

const aiStages = [
  {
    title: 'Data Signals',
    text: 'Traffic, weather, route, delivery, fleet, and compensation data streams.',
    icon: Binary,
  },
  {
    title: 'AI Models',
    text: 'Predictive intelligence for demand hotspots, optimization, and anomaly detection.',
    icon: Brain,
  },
  {
    title: 'Optimization Decisions',
    text: 'Decision support for routing, allocation, workload balancing, and exception handling.',
    icon: ScanSearch,
  },
  {
    title: 'Operational Actions',
    text: 'Planned actions delivered to operations teams through dashboards, alerts, and workflows.',
    icon: GitMerge,
  },
  {
    title: 'Continuous Learning',
    text: 'Model monitoring and outcome feedback loops to improve reliability over time.',
    icon: Radar,
  },
];

export function AIEngine() {
  return (
    <section id="ai-engine" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="AI Engine"
          title="The AI engine behind smarter logistics decisions."
          description="BeTherr is designed to combine predictive intelligence, real-time optimization, decision support, anomaly detection, and model monitoring into one operational workflow. The goal is to strengthen operations teams with human-in-the-loop review rather than replace expert judgment."
          align="center"
        />

        <div className="mt-14 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <GlowCard className="p-8">
            <div className="grid gap-4 md:grid-cols-5">
              {aiStages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="relative"
                  >
                    <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-slate-950/55 p-5">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-white">{stage.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{stage.text}</p>
                    </div>
                    {index < aiStages.length - 1 ? (
                      <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-gradient-to-r from-cyan/60 to-transparent md:block" />
                    ) : null}
                  </motion.div>
                );
              })}
            </div>
          </GlowCard>

          <GlowCard className="p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
              <ShieldCheck className="h-3.5 w-3.5" />
              Human-in-the-loop
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold text-white">
              Built to support operations teams with accountable AI.
            </h3>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                The platform is being designed to ingest live and historical data, forecast demand
                hotspots, optimize routing and driver allocation, and detect anomalies in
                compensation or system behavior.
              </p>
              <p>
                Recommendations are intended to surface faster decisions for dispatch, planning,
                and operations leaders while preserving oversight, policy review, and exception
                handling.
              </p>
              <p>
                Continuous model monitoring is part of the roadmap so that operational outcomes,
                drift signals, and feedback loops remain visible as the product matures.
              </p>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
