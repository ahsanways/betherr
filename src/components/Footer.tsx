const footerLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'AI Engine', href: '#ai-engine' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">BeTherr</h3>
            <p className="mt-2 text-sm text-slate-400">Be there before demand arrives.</p>
            <p className="mt-3 text-sm text-slate-400">
              Built by Ahsan Waseem •{' '}
              <a href="tel:+19294481841" className="transition hover:text-white">
                +1 (929) 448-1841
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1">
            <p>Launching Soon</p>
            <p>© 2026 BeTherr. All rights reserved.</p>
          </div>
          <p className="max-w-3xl">
            BeTherr is currently in development. Product capabilities, metrics, and integrations
            shown are roadmap-based prototype representations.
          </p>
        </div>
      </div>
    </footer>
  );
}
