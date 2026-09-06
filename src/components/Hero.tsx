import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { profile } from '@/data/content';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end pt-32 pb-12 px-6 md:px-10 lg:px-16 grain overflow-hidden">
      {/* Top meta row */}
      <div className="absolute top-24 md:top-28 left-6 md:left-10 lg:left-16 right-6 md:right-10 lg:right-16 flex items-start justify-between z-10">
        <div className="hidden md:block">
          <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40">
            Portfolio / 2025
          </p>
        </div>
        <div className="text-right max-w-xs hidden md:block">
          <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40">
            Available for opportunities
          </p>
        </div>
      </div>

      {/* Main hero content */}
      <div className="mx-auto max-w-[1400px] w-full">
        <div className="mb-6 mt-8 md:mt-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-beige bg-ivory-50 px-4 py-1.5 text-xs font-medium tracking-wide text-charcoal/70">
            <span className="h-1.5 w-1.5 rounded-full bg-burgundy animate-pulse" />
            {profile.title}
          </span>
        </div>

        <h1 className="font-display font-medium tracking-tightest text-charcoal leading-[0.92] text-fluid-hero">
          Gazi Aman
          <br />
          <span className="text-burgundy italic">Khan</span>
        </h1>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
          <p className="md:col-span-7 lg:col-span-6 text-lg md:text-xl leading-relaxed text-charcoal/80 max-w-2xl text-balance">
            {profile.intro}
          </p>

          <div className="md:col-span-5 lg:col-span-6 md:text-right">
            <p className="font-mono text-sm uppercase tracking-widest text-charcoal/50">
              {profile.tagline}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-beige/60">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-burgundy px-6 py-3 text-sm font-medium text-ivory hover:bg-burgundy-200 transition-colors duration-300"
            >
              View selected work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-beige bg-transparent px-6 py-3 text-sm font-medium text-charcoal hover:border-burgundy hover:text-burgundy transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <a
            href="#about"
            className="group inline-flex items-center gap-2 text-sm text-charcoal/50 hover:text-burgundy transition-colors duration-300"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}
