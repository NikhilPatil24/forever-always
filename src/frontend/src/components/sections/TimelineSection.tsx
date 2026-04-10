import { motion } from "motion/react";

const EVENTS = [
  {
    time: "3:00 PM",
    icon: "🌸",
    title: "Guests Arrive",
    description:
      "Welcome reception with Aperol Spritz, bruschetta, and soft string quartet in the garden courtyard.",
  },
  {
    time: "4:00 PM",
    icon: "💒",
    title: "Wedding Ceremony",
    description:
      "Exchange of vows in the centuries-old chapel of Villa Cipriani, surrounded by lavender and candlelight.",
  },
  {
    time: "5:30 PM",
    icon: "🥂",
    title: "Cocktail Hour",
    description:
      "Prosecco, canapés, and golden-hour photography in the terraced gardens overlooking the Tuscan hills.",
  },
  {
    time: "7:00 PM",
    icon: "🍽️",
    title: "Wedding Dinner",
    description:
      "Six-course Italian feast in the grand ballroom. Handcrafted menus, local wine pairings, and heartfelt toasts.",
  },
  {
    time: "9:30 PM",
    icon: "💃",
    title: "First Dance & Reception",
    description:
      "Dancing under the stars, live band, and a dessert table adorned with tiered cakes and gelato.",
  },
  {
    time: "12:00 AM",
    icon: "✨",
    title: "Send-Off",
    description:
      "Farewell with sparklers lining the cobblestone path as the couple departs into the Tuscan night.",
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body tracking-[0.35em] text-primary uppercase mb-3">
            The Day
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground mb-4">
            Order of Celebrations
          </h2>
          <div className="gold-divider mx-auto w-32" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-primary/60 to-primary/10" />

          <div className="space-y-10">
            {EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={event.time}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-14 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                  >
                    <div className="bg-card rounded-2xl p-6 shadow-romantic border border-border/50">
                      <div
                        className="flex items-center gap-2 mb-2 md:justify-start"
                        style={{
                          justifyContent: isLeft ? "flex-end" : "flex-start",
                        }}
                      >
                        <span className="text-xs font-body tracking-widest text-primary uppercase">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-foreground mb-2">
                        {event.icon} {event.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-romantic-sm z-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
