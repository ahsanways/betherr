import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlowCard } from './GlowCard';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  badge?: string;
};

export function FeatureCard({ icon: Icon, title, description, badge }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <GlowCard className="h-full">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
            <Icon className="h-6 w-6" />
          </div>
          {badge ? (
            <span className="rounded-full border border-teal/25 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
              {badge}
            </span>
          ) : null}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
      </GlowCard>
    </motion.div>
  );
}
