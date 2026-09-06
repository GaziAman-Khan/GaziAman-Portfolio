import { useReveal } from '@/hooks/useReveal';
import { aboutParagraphs, aboutSidebar } from '@/data/content';

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" ref={ref} className="py-24 md:py-36 px-6 md:px-10 lg:px-16 border-t border-beige/60">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <div className="reveal mb-16 md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-burgundy">02</span>
            <span className="h-px flex-1 max-w-[80px] bg-beige" />
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/50">About</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main content */}
          <div className="lg:col-span-8">
            <h2 className="reveal reveal-delay-1 font-display font-medium tracking-tightest text-charcoal leading-[1.05] text-fluid-section mb-10 md:mb-14 text-balance">
              Turning data into
              <br />
              <span className="text-burgundy italic">practical solutions.</span>
            </h2>

            <div className="space-y-6 max-w-2xl">
              {aboutParagraphs.map((para, i) => (
                <p
                  key={i}
                  className={`reveal reveal-delay-${i + 2} text-lg md:text-xl leading-relaxed text-charcoal/80`}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-beige/60">
            <div className="space-y-8">
              {aboutSidebar.map((item, i) => (
                <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                  <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40 mb-2">
                    {item.label}
                  </p>
                  <p className="text-base font-medium text-charcoal leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}

              <div className="reveal reveal-delay-5 pt-6 border-t border-beige/60">
                <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40 mb-3">
                  Currently
                </p>
                <p className="text-base font-medium text-burgundy">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
