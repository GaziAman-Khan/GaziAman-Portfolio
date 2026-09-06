import { useReveal } from '@/hooks/useReveal';
import { certifications } from '@/data/content';

export default function Certifications() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="certifications" ref={ref} className="py-24 md:py-36 px-6 md:px-10 lg:px-16 border-t border-beige/60">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <div className="reveal mb-16 md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-burgundy">05</span>
            <span className="h-px flex-1 max-w-[80px] bg-beige" />
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Certifications</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          <h2 className="reveal reveal-delay-1 lg:col-span-7 font-display font-medium tracking-tightest text-charcoal leading-[1.05] text-fluid-section text-balance">
            Continuous
            <br />
            <span className="text-burgundy italic">learning.</span>
          </h2>
          <p className="reveal reveal-delay-2 lg:col-span-5 text-lg leading-relaxed text-charcoal/70 max-w-md self-end">
            Training and certifications across AI, machine learning, data analytics, and visualization — building on my CS degree with practical, hands-on skills.
          </p>
        </div>

        {/* Certifications list */}
        <div className="space-y-px">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${Math.min(idx + 1, 5)} group flex items-center gap-4 md:gap-8 border-t border-beige/60 last:border-b py-5 md:py-6 transition-colors duration-500 hover:bg-beige/15`}
            >
              <span className="font-mono text-sm text-charcoal/40 tabular-nums w-8 shrink-0">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="flex-1 text-lg md:text-xl font-medium text-charcoal group-hover:text-burgundy transition-colors duration-300">
                {cert}
              </p>
              <span className="hidden md:block h-px w-12 bg-beige group-hover:w-20 group-hover:bg-burgundy transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
