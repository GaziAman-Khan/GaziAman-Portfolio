import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navItems, profile } from '@/data/content';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md border-b border-beige/60'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            className="font-display text-lg md:text-xl font-medium tracking-tighter text-charcoal"
          >
            Gazi<span className="text-burgundy">.</span>Aman
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal/70 hover:text-burgundy transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#resume"
              className="text-sm font-medium text-charcoal/70 hover:text-burgundy transition-colors duration-300"
            >
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-1.5 rounded-full bg-burgundy px-5 py-2.5 text-sm font-medium text-ivory hover:bg-burgundy-200 transition-colors duration-300"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 -mr-2 text-charcoal"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ivory transition-transform duration-500 lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-beige/60">
          <span className="font-display text-lg font-medium tracking-tighter text-charcoal">
            Gazi<span className="text-burgundy">.</span>Aman
          </span>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
            <X className="h-6 w-6 text-charcoal" />
          </button>
        </div>

        <div className="flex flex-col px-6 pt-8 gap-1">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl font-medium tracking-tighter text-charcoal hover:text-burgundy transition-colors py-3 border-b border-beige/40"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#resume"
            onClick={() => setOpen(false)}
            className="font-display text-3xl font-medium tracking-tighter text-charcoal hover:text-burgundy transition-colors py-3 border-b border-beige/40"
          >
            Resume
          </a>
        </div>

        <div className="px-6 mt-8">
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="inline-flex items-center gap-2 rounded-full bg-burgundy px-6 py-3.5 text-base font-medium text-ivory"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="px-6 mt-10 space-y-2">
          <p className="text-sm text-charcoal/50">{profile.email}</p>
          <p className="text-sm text-charcoal/50">{profile.phone}</p>
          <p className="text-sm text-charcoal/50">{profile.location}</p>
        </div>
      </div>
    </>
  );
}
