import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

type NavbarProps = {
  items: NavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-slate-950/65 px-4 py-3 shadow-glow backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/20 via-white/10 to-violet/20 text-lg font-bold text-white">
              B
              <span className="absolute inset-0 rounded-2xl bg-cyan/10 blur-md" />
            </span>
            <div>
              <p className="font-display text-lg font-bold tracking-wide text-white">BeTherr</p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Launching Soon</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="rounded-full border border-cyan/30 bg-cyan/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan/60 hover:bg-cyan/20"
            >
              Join Pilot Waitlist
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-4 rounded-3xl border border-white/10 bg-slate-950/90 p-4 lg:hidden"
            >
              <nav className="flex flex-col gap-2">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-2xl border border-cyan/30 bg-cyan/15 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Join Pilot Waitlist
                </a>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
