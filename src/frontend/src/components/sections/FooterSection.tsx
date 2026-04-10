import { scrollToSection } from "@/lib/utils";
import { Heart } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Our Story", section: "details" },
  { label: "Schedule", section: "timeline" },
  { label: "Venue", section: "venue" },
  { label: "RSVP", section: "rsvp" },
  { label: "Extras", section: "extras" },
];

export default function FooterSection() {
  const year = new Date().getFullYear();
  const hostname = window.location.hostname;

  return (
    <footer className="bg-card border-t border-border py-14">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Monogram */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="gold-divider w-16" />
          <span className="font-display text-2xl text-primary tracking-widest">
            E <span className="text-accent">&</span> J
          </span>
          <div className="gold-divider w-16" />
        </div>

        <p className="font-display italic text-foreground/70 text-lg mb-8">
          September 14, 2025 · Villa Cipriani, Tuscany
        </p>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          {FOOTER_LINKS.map((link) => (
            <button
              type="button"
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              className="text-xs font-body tracking-widest text-muted-foreground hover:text-primary transition-smooth uppercase"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Quote */}
        <blockquote className="font-display italic text-muted-foreground text-sm md:text-base max-w-sm mx-auto mb-10">
          "I love you not only for what you are, but for what I am when I am
          with you."
        </blockquote>

        {/* Heart */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
          <span className="font-display text-primary italic">
            With all our love
          </span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
        </div>

        {/* Branding */}
        <p className="font-body text-xs text-muted-foreground/60">
          © {year}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-smooth"
          >
            Built with love using caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
