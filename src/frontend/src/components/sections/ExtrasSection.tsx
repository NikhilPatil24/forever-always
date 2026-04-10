import type { AccommodationOption, GiftRegistryItem } from "@/types/wedding";
import { Bed, ExternalLink, Gift } from "lucide-react";
import { motion } from "motion/react";

const ACCOMMODATIONS: AccommodationOption[] = [
  {
    name: "Villa Cipriani Hotel",
    distance: "On-site",
    priceRange: "€€€€",
    website: "https://villaciprianiasolo.com",
    description:
      "Stay in the historic manor itself for the full experience. Limited rooms available — book early.",
  },
  {
    name: "Hotel Al Sole",
    distance: "200m",
    priceRange: "€€€",
    website: "https://www.hotelalsolepasolo.com",
    description:
      "Charming boutique hotel in the heart of Asolo's medieval village center.",
  },
  {
    name: "Agriturismo Ai Pini",
    distance: "3 km",
    priceRange: "€€",
    website: "https://agriturismoapini.it",
    description:
      "Rustic farm stay nestled in the Prosecco vineyards with panoramic hill views.",
  },
];

const REGISTRY: GiftRegistryItem[] = [
  {
    store: "Crate & Barrel",
    url: "https://www.crateandbarrel.com",
    description: "Home décor and kitchen essentials for our new life together",
  },
  {
    store: "Williams Sonoma",
    url: "https://www.williams-sonoma.com",
    description:
      "Cookware and dining pieces inspired by our love of Italian cuisine",
  },
  {
    store: "Honeymoon Fund",
    url: "#",
    description: "Help us create memories on our honeymoon in the Amalfi Coast",
  },
];

export default function ExtrasSection() {
  return (
    <section id="extras" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body tracking-[0.35em] text-primary uppercase mb-3">
            Practical Info
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground mb-4">
            Stay & Celebrate
          </h2>
          <div className="gold-divider mx-auto w-32" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Accommodation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Bed className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Accommodation
              </h3>
            </div>
            <div className="space-y-4">
              {ACCOMMODATIONS.map((acc, i) => (
                <motion.div
                  key={acc.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-romantic border border-border/40"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-display text-foreground">
                        {acc.name}
                      </h4>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs font-body text-primary">
                          {acc.distance}
                        </span>
                        <span className="text-xs font-body text-muted-foreground">
                          {acc.priceRange}
                        </span>
                      </div>
                    </div>
                    <a
                      href={acc.website}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:opacity-70 transition-smooth"
                      aria-label={`Visit ${acc.name} website`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {acc.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gift Registry */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Gift className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Gift Registry
              </h3>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-romantic border border-border/40 mb-4">
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                "Your presence is the greatest gift of all. However, if you wish
                to honour us with a gift, we've curated a small registry to help
                furnish our first home together."
              </p>
              <p className="font-body text-sm text-primary mt-3">
                — Emma &amp; James
              </p>
            </div>

            <div className="space-y-4">
              {REGISTRY.map((item, i) => (
                <motion.div
                  key={item.store}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-romantic border border-border/40"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-display text-foreground">
                      {item.store}
                    </h4>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:opacity-70 transition-smooth"
                      aria-label={`Visit ${item.store} registry`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Special notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 bg-card rounded-2xl p-8 shadow-romantic border border-primary/20 text-center"
        >
          <p className="text-2xl mb-3">💌</p>
          <h4 className="font-display text-xl text-foreground mb-3">
            A Note From Us
          </h4>
          <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Our venue is in the Tuscan hills — cobblestones and gravel paths are
            beautiful but tricky! Elegant low heels or dressy flats are kindly
            recommended. The evening may be cool, so a wrap or light jacket is
            advised.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
