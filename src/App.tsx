import {
  ArrowUpRight,
  CheckCircle2,
  CircleDashed,
  LineChart,
  Orbit,
  Waypoints,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ProductModules } from './components/ProductModules';
import { AIEngine } from './components/AIEngine';
import { Architecture } from './components/Architecture';
import { Solutions } from './components/Solutions';
import { Roadmap } from './components/Roadmap';
import { Impact } from './components/Impact';
import { AboutFounder } from './components/AboutFounder';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NavItem } from './types';
import { GlowCard } from './components/GlowCard';

const navItems: NavItem[] = [
  { label: 'Platform', href: '#platform' },
  { label: 'AI Engine', href: '#ai-engine' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const signalCards = [
  {
    icon: LineChart,
    title: 'Forecast demand shifts earlier',
    text: 'Designed to help operators prepare capacity before volume hits service lanes.',
  },
  {
    icon: Waypoints,
    title: 'Coordinate route intelligence continuously',
    text: 'Combine live operational signals with optimization logic in one planning loop.',
  },
  {
    icon: CheckCircle2,
    title: 'Support fairer compensation workflows',
    text: 'Bring clearer audit trails and calculation visibility into driver-focused systems.',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(67,217,255,0.15),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(124,108,255,0.12),transparent_25%),radial-gradient(circle_at_bottom,rgba(50,214,176,0.1),transparent_30%)]" />
        <div className="absolute inset-0 bg-grid-fade bg-[size:54px_54px] opacity-20" />
        <div className="absolute left-[8%] top-[18%] h-56 w-56 animate-pulseSoft rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute right-[10%] top-[36%] h-72 w-72 animate-drift rounded-full bg-violet/10 blur-3xl" />
        <div className="absolute bottom-[10%] left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar items={navItems} />
        <main>
          <Hero />

          <section className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <GlowCard className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan/80">
                      Positioning
                    </p>
                    <h2 className="mt-4 font-display text-2xl font-semibold text-white">
                      Infrastructure for faster, fairer, and more reliable logistics.
                    </h2>
                  </div>
                  <Orbit className="h-8 w-8 text-cyan" />
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
                  BeTherr is being developed as a serious enterprise SaaS initiative for logistics,
                  transportation, and delivery operators who need clearer forecasting, more
                  responsive routing, stronger driver allocation, compensation transparency, and
                  secure operational infrastructure.
                </p>
              </GlowCard>

              <GlowCard className="p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  <CircleDashed className="h-3.5 w-3.5 text-teal" />
                  In active development
                </div>
                <div className="mt-6 space-y-4">
                  {signalCards.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 rounded-2xl border border-white/10 bg-slate-950/55 p-4"
                      >
                        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a
                  href="#roadmap"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white"
                >
                  View development roadmap
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </GlowCard>
            </div>
          </section>

          <ProblemSection />
          <ProductModules />
          <AIEngine />
          <Architecture />
          <Solutions />
          <Roadmap />
          <Impact />
          <AboutFounder />
          <Contact />
        </main>
        <Footer />
      </div>

      <motion.div
        className="pointer-events-none fixed bottom-6 right-6 z-20 hidden rounded-full border border-cyan/20 bg-slate-950/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan shadow-glow backdrop-blur-xl md:block"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        Pilot access opening soon
      </motion.div>
    </div>
  );
}
