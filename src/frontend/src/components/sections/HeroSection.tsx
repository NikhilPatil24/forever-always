import { scrollToSection } from "@/lib/utils";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-floral.dim_1600x900.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-background/55" />

      {/* Floral corners */}
      <img
        src="/assets/generated/floral-corner-transparent.dim_400x400.png"
        alt=""
        className="absolute top-0 left-0 w-48 md:w-64 opacity-70 pointer-events-none select-none"
      />
      <img
        src="/assets/generated/floral-corner-transparent.dim_400x400.png"
        alt=""
        className="absolute top-0 right-0 w-48 md:w-64 opacity-70 pointer-events-none select-none rotate-90"
      />
      <img
        src="/assets/generated/floral-corner-transparent.dim_400x400.png"
        alt=""
        className="absolute bottom-0 left-0 w-48 md:w-64 opacity-70 pointer-events-none select-none -rotate-90"
      />
      <img
        src="/assets/generated/floral-corner-transparent.dim_400x400.png"
        alt=""
        className="absolute bottom-0 right-0 w-48 md:w-64 opacity-70 pointer-events-none select-none rotate-180"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm font-body tracking-[0.35em] text-primary uppercase mb-6"
        >
          Together with their families
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display font-light text-foreground leading-tight mb-2"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Emma
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-4 my-3"
        >
          <div className="gold-divider flex-1 max-w-24" />
          <Heart className="w-5 h-5 text-accent animate-heartbeat fill-accent" />
          <div className="gold-divider flex-1 max-w-24" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="font-display font-light text-foreground leading-tight mb-8"
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          James
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-10"
        >
          <p className="font-body text-foreground/70 text-lg tracking-wide mb-1">
            Saturday, the Fourteenth of September
          </p>
          <p className="font-body text-foreground/70 text-lg tracking-wide mb-1">
            Two Thousand and Twenty-Five
          </p>
          <p className="font-display italic text-primary text-xl mt-3">
            Villa Cipriani · Tuscany, Italy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            type="button"
            data-ocid="hero-rsvp-btn"
            onClick={() => scrollToSection("rsvp")}
            className="px-10 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 transition-smooth shadow-romantic"
          >
            Kindly RSVP
          </button>
          <button
            type="button"
            data-ocid="hero-details-btn"
            onClick={() => scrollToSection("details")}
            className="px-10 py-3.5 rounded-full border border-primary/60 text-primary font-body text-sm tracking-widest uppercase hover:bg-primary/10 transition-smooth"
          >
            Our Story
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-body tracking-widest text-foreground/40 uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent animate-float" />
      </motion.div>
    </section>
  );
}
