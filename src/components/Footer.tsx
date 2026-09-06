import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/content';

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-12 md:py-16 border-t border-beige/60 bg-ivory">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Name + title */}
          <div>
            <p className="font-display text-xl md:text-2xl font-medium tracking-tighter text-charcoal">
              Gazi Aman Khan
            </p>
            <p className="text-sm text-charcoal/50 mt-1">{profile.title}</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-beige text-charcoal/60 hover:border-burgundy hover:text-burgundy transition-colors duration-300"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-beige text-charcoal/60 hover:border-burgundy hover:text-burgundy transition-colors duration-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-beige text-charcoal/60 hover:border-burgundy hover:text-burgundy transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-beige/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40">
            © 2025 Gazi Aman Khan
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-charcoal/40">
            Built with care · Data + AI
          </p>
        </div>
      </div>
    </footer>
  );
}
