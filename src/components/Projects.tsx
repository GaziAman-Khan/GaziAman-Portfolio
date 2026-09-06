import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { projects, type Project } from '@/data/content';

export default function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="work" ref={ref} className="py-24 md:py-36 px-6 md:px-10 lg:px-16 border-t border-beige/60 bg-ivory-50">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <div className="reveal mb-16 md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-burgundy">01</span>
            <span className="h-px flex-1 max-w-[80px] bg-beige" />
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Selected Work</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 md:mb-28">
          <h2 className="reveal reveal-delay-1 lg:col-span-7 font-display font-medium tracking-tightest text-charcoal leading-[1.05] text-fluid-section text-balance">
            Projects across
            <br />
            <span className="text-burgundy italic">data analytics, ML &amp; Gen AI.</span>
          </h2>
          <p className="reveal reveal-delay-2 lg:col-span-5 text-lg leading-relaxed text-charcoal/70 max-w-md self-end">
            Six projects spanning data analytics, machine learning, NLP, and deployed Generative AI — each solving a real problem with measurable results.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;
  const isEven = index % 2 === 0;

  return (
    <article className={`reveal group ${isFeatured ? 'lg:py-12' : ''}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Image + visual side */}
        <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative">
            {/* Project image */}
            <div className="relative aspect-[4/5] md:aspect-[5/4] rounded-2xl overflow-hidden bg-beige/40 border border-beige/60">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              {/* Overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />

              {/* Large number watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="font-display text-[7rem] md:text-[9rem] lg:text-[11rem] font-medium tracking-tightest text-ivory/20 leading-none select-none transition-all duration-700 group-hover:text-ivory/30 group-hover:scale-105">
                  {project.number}
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-5 left-5">
                <span className="inline-block rounded-full bg-ivory/90 backdrop-blur-sm px-4 py-1.5 text-xs font-medium tracking-wide text-burgundy border border-beige/60">
                  {project.category}
                </span>
              </div>

              {/* Featured badge */}
              {isFeatured && (
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-burgundy px-4 py-1.5 text-xs font-medium tracking-wide text-ivory">
                    <span className="h-1.5 w-1.5 rounded-full bg-ivory animate-pulse" />
                    Featured
                  </span>
                </div>
              )}

              {/* Metric at bottom */}
              {project.metric && (
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-xl bg-ivory/90 backdrop-blur-sm border border-beige/60 px-5 py-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40 mb-1">Key Result</p>
                    <p className="font-display text-base md:text-lg font-medium text-charcoal leading-snug">
                      {project.metric}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} ${isFeatured ? 'lg:pt-8' : ''}`}>
          <div className="space-y-6">
            <div>
              <span className="font-mono text-sm text-charcoal/40">
                Project {project.number} / {String(projects.length).padStart(2, '0')}
              </span>
            </div>

            <h3 className={`font-display font-medium tracking-tightest text-charcoal leading-[1.02] ${
              isFeatured ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl lg:text-5xl'
            } text-balance`}>
              {project.title}
            </h3>

            {/* Problem */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-burgundy mb-2">The Problem</p>
              <p className="text-lg text-charcoal/80 leading-relaxed">{project.problem}</p>
            </div>

            {/* Description */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-burgundy mb-2">Approach</p>
              <p className="text-base md:text-lg text-charcoal/70 leading-relaxed">{project.description}</p>
            </div>

            {/* Technologies */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40 mb-3">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-md border border-beige bg-ivory px-3 py-1.5 text-sm font-medium text-charcoal/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-burgundy transition-colors duration-300"
              >
                <Github className="h-4 w-4" />
                <span className="link-underline">GitHub</span>
              </a>
              {project.liveDemo !== undefined && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 rounded-full bg-burgundy px-5 py-2.5 text-sm font-medium text-ivory hover:bg-burgundy-200 transition-colors duration-300"
                >
                  Live Demo
                  <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
