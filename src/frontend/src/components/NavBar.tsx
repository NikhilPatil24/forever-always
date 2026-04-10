import { scrollToSection } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Our Story", section: "details" },
  { label: "Schedule", section: "timeline" },
  { label: "Venue", section: "venue" },
  { label: "RSVP", section: "rsvp" },
  { label: "Extras", section: "extras" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (section: string) => {
    scrollToSection(section);
    setMobileOpen(false);
  };

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card/80 backdrop-romantic border-b border-border shadow-romantic-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram */}
        <button
          type="button"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group"
          aria-label="Back to top"
        >
          <span className="font-display text-xl text-primary tracking-widest group-hover:opacity-80 transition-smooth">
            E <span className="text-accent">&</span> J
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.section}>
              <button
                type="button"
                data-ocid={`nav-${link.section}`}
                onClick={() => handleNav(link.section)}
                className="text-sm font-body tracking-wider text-muted-foreground hover:text-primary transition-smooth uppercase"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Heart CTA */}
        <button
          type="button"
          data-ocid="nav-rsvp-cta"
          onClick={() => handleNav("rsvp")}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-sm font-body tracking-wider"
        >
          <Heart className="w-3.5 h-3.5" /> RSVP
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-smooth ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-smooth ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-smooth ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-romantic border-b border-border px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <button
              type="button"
              key={link.section}
              onClick={() => handleNav(link.section)}
              className="text-left py-2 text-sm font-body tracking-wider text-muted-foreground hover:text-primary transition-smooth uppercase border-b border-border last:border-0"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("rsvp")}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-sm"
          >
            <Heart className="w-3.5 h-3.5" /> RSVP Now
          </button>
        </div>
      )}
    </header>
  );
}
