import { motion } from 'framer-motion';
import { ArrowRight, Radar, Sparkles } from 'lucide-react';
import { GlowCard } from './GlowCard';

const heroMetrics = [
  {
    label: 'Demand Forecast',
    value: '+18% accuracy',
    note: 'Prototype goal',
  },
  {
    label: 'Route Efficiency',
    value: '-12% miles',
    note: 'Target indicator',
  },
  {
    label: 'Compensation Audit',
    value: '99.9% traceability',
    note: 'Prototype goal',
  },
  {
    label: 'System Health',
    value: '99.9% uptime target',
    note: 'Roadmap target',
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-24 pt-14 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan">
            <Sparkles className="h-3.5 w-3.5" />
            Launching Soon • AI Logistics Platform
          </div>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            AI-powered transportation and logistics intelligence for routing, demand, and driver compensation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            BeTherr is building a cloud-native SaaS platform that helps logistics, delivery,
            and fleet operators forecast demand, optimize routes, allocate drivers, automate
            compensation workflows, and improve operational reliability through AI and scalable
            microservices.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan to-teal px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Join Pilot Waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#platform"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan/30 hover:bg-white/10"
            >
              Explore Platform
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Pilot access opening soon
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Built for smarter transportation operations
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -left-8 top-12 h-36 w-36 rounded-full bg-cyan/20 blur-3xl" />
          <div className="absolute -right-10 bottom-6 h-36 w-36 rounded-full bg-violet/20 blur-3xl" />
          <GlowCard className="relative overflow-hidden border-cyan/20 bg-slate-950/55 p-0">
            <div className="border-b border-white/10 px-6 py-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan/80">
                    Prototype dashboard
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                    Operational intelligence cockpit
                  </h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                  <Radar className="h-3.5 w-3.5" />
                  AI Signal: Live optimization
                </div>
              </div>
            </div>

            <div className="grid gap-4 p-6 md:grid-cols-2">
              {heroMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
                  className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 ${
                    index % 2 === 0 ? 'animate-float' : ''
                  }`}
                >
                  <p className="text-sm font-medium text-slate-300">{metric.label}</p>
                  <p className="mt-3 font-display text-2xl font-bold text-white">{metric.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-cyan/70">
                    {metric.note}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/10 px-6 py-5">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  'Demand sensing across regions and time windows',
                  'Route intelligence layered with live operational signals',
                  'Compensation transparency with audit-focused workflows',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
