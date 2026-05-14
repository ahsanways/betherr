import { SectionHeader } from './SectionHeader';
import { GlowCard } from './GlowCard';
import { ExpertiseChip } from '../types';

const expertise: ExpertiseChip[] = [
  'Java / Spring Boot',
  'Python',
  'Microservices',
  'AI / ML Workflows',
  'REST APIs',
  'Driver Compensation Systems',
  'Cloud Infrastructure',
  'Monitoring & Reliability',
  'Kubernetes / Docker',
  'CI/CD',
];

export function AboutFounder() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="Built by an engineer with hands-on experience in scalable backend systems and driver-focused platforms."
          description="BeTherr is being developed by Ahsan Waseem, a software engineer specializing in backend platforms, microservices, secure APIs, AI-enabled workflows, and transportation-adjacent compensation systems. His work focuses on building reliable software infrastructure that can support high-volume operational environments, improve system efficiency, and create more transparent workflows for logistics and driver operations."
        />
        <GlowCard className="mt-10 p-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="inline-flex items-center rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">
                Built by Ahsan Waseem
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan/80">
                Founder focus
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                Enterprise-grade systems thinking for logistics operations.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                The platform direction reflects a backend-first approach to scale, reliability,
                API design, observability, and workflow transparency. BeTherr is intended to feel
                credible to both product stakeholders and technical evaluators.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                  Direct contact
                </p>
                <a
                  href="tel:+19294481841"
                  className="mt-2 inline-flex text-xl font-semibold text-white transition hover:text-cyan"
                >
                  +1 (929) 448-1841
                </a>
              </div>
            </div>
            <div>
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Core expertise
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  The technical foundation behind BeTherr spans backend systems, microservices,
                  AI-enabled workflows, cloud infrastructure, and operational reliability for
                  transportation-focused software.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="min-h-[88px] rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-4 text-sm font-medium text-slate-200 shadow-inner shadow-cyan-950/10"
                >
                  <span className="block leading-6">{item}</span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
