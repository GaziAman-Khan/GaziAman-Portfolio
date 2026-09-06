import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight, FileDown } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { profile } from '@/data/content';

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36 px-6 md:px-10 lg:px-16 border-t border-beige/60">
      <div className="mx-auto max-w-[1400px]">
        {/* Section label */}
        <div className="reveal mb-16 md:mb-24">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest text-burgundy">06</span>
            <span className="h-px flex-1 max-w-[80px] bg-beige" />
            <span className="font-mono text-xs uppercase tracking-widest text-charcoal/50">Contact</span>
          </div>
        </div>

        {/* Resume section */}
        <div id="resume" className="reveal reveal-delay-1 mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 md:mb-14">
            <h2 className="lg:col-span-7 font-display font-medium tracking-tightest text-charcoal leading-[1.05] text-fluid-section text-balance">
              Download
              <br />
              <span className="text-burgundy italic">my resume.</span>
            </h2>
            <p className="lg:col-span-5 text-lg leading-relaxed text-charcoal/70 max-w-md">
              Two tailored resumes — one for AI/ML Engineering roles, one for Data Analyst roles. PDF links will be connected shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <ResumeCard
              title="AI/ML Engineer Resume"
              description="Focused on machine learning, Generative AI, RAG, and AI application development."
            />
            <ResumeCard
              title="Data Analyst Resume"
              description="Focused on data analytics, SQL, Power BI, EDA, and business intelligence."
            />
          </div>
        </div>

        {/* Contact panel — full burgundy canvas */}
        <div className="reveal reveal-delay-2">
          <div className="relative overflow-hidden rounded-3xl bg-burgundy text-ivory px-8 md:px-14 lg:px-20 py-16 md:py-24 lg:py-32 grain">
            {/* Decorative large text watermark */}
            <div className="absolute -bottom-8 -right-4 md:-bottom-12 md:-right-8 pointer-events-none select-none">
              <span className="font-display text-[10rem] md:text-[16rem] lg:text-[20rem] font-medium tracking-tightest text-ivory/5 leading-none">
                Hi.
              </span>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left: heading + email CTA */}
              <div className="lg:col-span-7">
                <p className="font-mono text-xs uppercase tracking-widest text-ivory/50 mb-6 md:mb-8">
                  Let's connect
                </p>

                <h2 className="font-display font-medium tracking-tightest text-ivory leading-[0.98] text-[clamp(2.5rem,7vw,6rem)] mb-10 md:mb-14 text-balance">
                  Let's work
                  <br />
                  <span className="italic text-ivory/80">together.</span>
                </h2>

                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-3 text-xl md:text-2xl lg:text-3xl font-display font-medium tracking-tighter text-ivory hover:text-ivory/70 transition-colors duration-300"
                >
                  <span className="link-underline">{profile.email}</span>
                  <ArrowUpRight className="h-6 w-6 md:h-7 md:w-7 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <div className="mt-10 md:mt-12">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-ivory px-6 py-3.5 text-sm font-medium text-burgundy hover:bg-ivory/90 transition-colors duration-300"
                  >
                    Send a message
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Right: contact details + elsewhere */}
              <div className="lg:col-span-5 lg:border-l lg:border-ivory/15 lg:pl-12">
                <div className="space-y-1">
                  <ContactItem icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                  <ContactItem icon={Phone} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
                  <ContactItem icon={MapPin} label="Location" value={profile.location} />
                </div>

                {/* Elsewhere */}
                <div className="mt-10 pt-8 border-t border-ivory/15">
                  <p className="font-mono text-xs uppercase tracking-widest text-ivory/40 mb-5">
                    Elsewhere
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <SocialPill icon={Linkedin} label="LinkedIn" href={profile.linkedin} />
                    <SocialPill icon={Github} label="GitHub" href={profile.github} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeCard({ title, description }: { title: string; description: string }) {
  return (
    <a
      href="#"
      className="group block rounded-2xl border border-beige bg-ivory p-6 md:p-8 transition-all duration-500 hover:border-burgundy hover:bg-ivory-50"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <FileDown className="h-6 w-6 text-burgundy shrink-0" />
        <ArrowUpRight className="h-5 w-5 text-charcoal/30 transition-all duration-300 group-hover:text-burgundy group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
      <h3 className="font-display text-xl md:text-2xl font-medium tracking-tighter text-charcoal mb-2 group-hover:text-burgundy transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-charcoal/60 leading-relaxed">{description}</p>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-charcoal/40">
        PDF — Coming soon
      </p>
    </a>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center gap-4 py-4 border-b border-ivory/10 transition-colors duration-300 hover:border-ivory/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory/20 text-ivory/60 group-hover:border-ivory/50 group-hover:text-ivory transition-colors duration-300">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-mono text-xs uppercase tracking-widest text-ivory/40">{label}</p>
        <p className="text-base font-medium text-ivory truncate group-hover:text-ivory/80 transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }
  return content;
}

function SocialPill({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 rounded-full border border-ivory/20 px-4 py-2.5 text-sm font-medium text-ivory/80 hover:border-ivory/50 hover:text-ivory transition-colors duration-300"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}
