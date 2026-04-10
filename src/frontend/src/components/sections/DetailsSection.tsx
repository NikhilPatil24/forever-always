import { Heart, Music, Star } from "lucide-react";
import { motion } from "motion/react";

const STORY_BEATS = [
  {
    icon: "✨",
    year: "2018",
    title: "The Meeting",
    text: "A chance encounter at a rooftop gallery opening in Florence changed everything. James reached for the same painting; Emma was already in love with it.",
  },
  {
    icon: "🌿",
    year: "2020",
    title: "The Journey",
    text: "Through cobblestone streets of Rome and sunlit vineyards of Chianti, they built a life woven from laughter, red wine, and late-evening walks.",
  },
  {
    icon: "💍",
    year: "2024",
    title: "The Proposal",
    text: "Under a canopy of fairy lights at Piazzale Michelangelo, with all of Florence glowing beneath them, James asked the most important question of his life.",
  },
];

export default function DetailsSection() {
  return (
    <section id="details" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body tracking-[0.35em] text-primary uppercase mb-3">
            Our Story
          </p>
          <h2
            className="font-display font-light text-4xl md:text-5xl text-foreground mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            A Love Written in Stars
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="gold-divider w-16" />
            <Star className="w-4 h-4 text-primary fill-primary" />
            <div className="gold-divider w-16" />
          </div>
        </motion.div>

        {/* Story beats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {STORY_BEATS.map((beat, i) => (
            <motion.div
              key={beat.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-romantic text-center"
            >
              <div className="text-4xl mb-3">{beat.icon}</div>
              <p className="text-xs font-body tracking-[0.3em] text-primary uppercase mb-2">
                {beat.year}
              </p>
              <h3 className="font-display text-xl text-foreground mb-3">
                {beat.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {beat.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Wedding details card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card rounded-3xl p-10 md:p-14 shadow-romantic text-center relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

          <p className="text-xs font-body tracking-[0.35em] text-primary uppercase mb-4">
            Wedding Details
          </p>
          <h2 className="font-display font-light text-3xl md:text-4xl text-foreground mb-10">
            Emma Catherine & James Oliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="text-xl">📅</span>
              </div>
              <p className="text-xs font-body tracking-widest text-primary uppercase">
                Date
              </p>
              <p className="font-display text-foreground text-lg">
                September 14, 2025
              </p>
              <p className="font-body text-muted-foreground text-sm">
                Saturday
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 text-accent fill-accent" />
              </div>
              <p className="text-xs font-body tracking-widest text-primary uppercase">
                Time
              </p>
              <p className="font-display text-foreground text-lg">4:00 PM</p>
              <p className="font-body text-muted-foreground text-sm">
                Ceremony begins
              </p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <Music className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xs font-body tracking-widest text-primary uppercase">
                Dress Code
              </p>
              <p className="font-display text-foreground text-lg">Black Tie</p>
              <p className="font-body text-muted-foreground text-sm">
                Formal attire
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
