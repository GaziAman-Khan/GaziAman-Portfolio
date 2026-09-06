import { useReveal } from '@/hooks/useReveal';
import { education } from '@/data/content';

export default function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="education" ref={ref} className="py-24 md:py-36 px-6 md:px-10 lg:px-16 border-t border-beige/60">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <div className="reveal mb-16 md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-burgundy">04</span>
            <span className="h-px flex-1 max-w-[80px] bg-beige" />
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Education</span>
          </div>
        </div>

        <h2 className="reveal reveal-delay-1 font-display font-medium tracking-tightest text-charcoal leading-[1.05] text-fluid-section mb-16 md:mb-20 text-balance">
          Academic
          <br />
          <span className="text-burgundy italic">foundation.</span>
        </h2>

        <div className="space-y-px">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 2} group border-t border-beige/60 last:border-b py-10 md:py-12 transition-colors duration-500 hover:bg-beige/15`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-2">
                  <span className="font-mono text-sm text-charcoal/40">{edu.period}</span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tighter text-charcoal mb-2 group-hover:text-burgundy transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-charcoal/70">{edu.institution}</p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <p className="text-base font-medium text-charcoal/60">{edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
