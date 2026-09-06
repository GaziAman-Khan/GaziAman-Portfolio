import { useReveal } from '@/hooks/useReveal';
import { skillCategories } from '@/data/content';

export default function Skills() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="skills" ref={ref} className="py-24 md:py-36 px-6 md:px-10 lg:px-16 border-t border-beige/60 bg-ivory-50">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <div className="reveal mb-16 md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-burgundy">03</span>
            <span className="h-px flex-1 max-w-[80px] bg-beige" />
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Skills</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-24">
          <h2 className="reveal reveal-delay-1 lg:col-span-7 font-display font-medium tracking-tightest text-charcoal leading-[1.05] text-fluid-section text-balance">
            A toolkit for
            <br />
            <span className="text-burgundy italic">data & AI.</span>
          </h2>
          <p className="reveal reveal-delay-2 lg:col-span-5 text-lg leading-relaxed text-charcoal/70 max-w-md self-end">
            From data cleaning and dashboards to machine learning models and deployed RAG applications — the tools I use to turn raw data into working solutions.
          </p>
        </div>

        {/* Skill categories */}
        <div className="space-y-px">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.number}
              className={`reveal reveal-delay-${Math.min(idx + 1, 5)} group border-t border-beige/60 last:border-b py-8 md:py-10 transition-colors duration-500 hover:bg-beige/20`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-burgundy">{cat.number}</span>
                  <h3 className="font-display text-xl md:text-2xl font-medium tracking-tighter text-charcoal mt-2">
                    {cat.title}
                  </h3>
                </div>
                <div className="md:col-span-9">
                  <div className="flex flex-wrap gap-2.5 md:gap-3">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block rounded-full border border-beige bg-ivory px-4 py-2 text-sm font-medium text-charcoal/80 transition-all duration-300 hover:border-burgundy hover:text-burgundy"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
