import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { GlowCard } from './GlowCard';
import { ArchitectureLayer } from '../types';

const layers: ArchitectureLayer[] = [
  {
    title: '1. Data Layer',
    description:
      'Traffic, weather, delivery history, driver availability, compensation rules, and operational events form the system foundation.',
    bullets: ['Operational telemetry', 'Historical event streams', 'Rules and business context'],
  },
  {
    title: '2. AI/ML Layer',
    description:
      'Demand prediction, route optimization, anomaly detection, and model monitoring provide the intelligence layer.',
    bullets: ['Forecasting services', 'Optimization models', 'Monitoring and drift checks'],
  },
  {
    title: '3. Microservices Layer',
    description:
      'Route, demand, driver allocation, compensation, audit, and notification services are separated for scalability and resilience.',
    bullets: ['Service boundaries', 'Independent scaling', 'Fault isolation'],
  },
  {
    title: '4. Secure API Layer',
    description:
      'OAuth2, REST APIs, webhooks, role-based access, encrypted communication, and third-party integrations connect external systems.',
    bullets: ['API security', 'Webhook orchestration', 'Integration governance'],
  },
  {
    title: '5. Operations Layer',
    description:
      'CI/CD, monitoring, alerting, dashboards, audit logs, documentation, and training support help operationalize the platform.',
    bullets: ['Reliability workflows', 'Auditability', 'Enablement and support'],
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Architecture"
          title="Designed as scalable logistics infrastructure, not just another dashboard."
          description="BeTherr is being shaped as an extensible platform architecture that can support AI workflows, service boundaries, secure integrations, and operational reliability as pilot usage expands."
        />

        <div className="mt-14 space-y-5">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative"
            >
              {index < layers.length - 1 ? (
                <div className="absolute left-10 top-full h-5 w-px bg-gradient-to-b from-cyan/50 to-transparent sm:left-1/2" />
              ) : null}
              <GlowCard className="grid gap-5 p-6 sm:grid-cols-[0.95fr_1.05fr] sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan/80">
                    Platform layer
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                    {layer.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{layer.description}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {layer.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-4 text-sm text-slate-300"
                    >
                      {bullet}
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
