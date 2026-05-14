import { PropsWithChildren } from 'react';

type GlowCardProps = PropsWithChildren<{
  className?: string;
}>;

export function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white/[0.06] ${className}`}
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent opacity-70" />
      <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-cyan/10 blur-3xl transition duration-300 group-hover:bg-cyan/20" />
      <div className="relative">{children}</div>
    </div>
  );
}
