import { ExternalLink, Globe, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const VENUE_DETAILS = {
  name: "Villa Cipriani",
  address: "Via Canova 298, 31011 Asolo, Tuscany, Italy",
  phone: "+39 0423 952 166",
  website: "https://villaciprianiasolo.com",
  description:
    "A jewel of the Venetian hills, Villa Cipriani is a historic 16th-century manor surrounded by terraced rose gardens, cypress allées, and panoramic views of the Dolomites. Once home to Robert Browning and Queen of Cyprus, it now serves as an intimate retreat for celebrations of timeless elegance.",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.5!2d11.9!3d45.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVilla%20Cipriani!5e0!3m2!1sen!2sit!4v1000000000000",
};

const DIRECTIONS = [
  {
    from: "Venice Marco Polo Airport",
    distance: "72 km",
    duration: "1h 15m",
    mode: "🚗",
  },
  {
    from: "Treviso Airport",
    distance: "55 km",
    duration: "55 min",
    mode: "🚗",
  },
  {
    from: "Treviso Train Station",
    distance: "47 km",
    duration: "50 min",
    mode: "🚌",
  },
];

export default function VenueSection() {
  return (
    <section id="venue" className="py-24 bg-muted/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-body tracking-[0.35em] text-primary uppercase mb-3">
            Location
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground mb-4">
            The Venue
          </h2>
          <div className="gold-divider mx-auto w-32" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-card rounded-2xl p-8 shadow-romantic">
              <h3 className="font-display text-2xl text-foreground mb-3">
                {VENUE_DETAILS.name}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm">
                {VENUE_DETAILS.description}
              </p>
              <div className="space-y-3">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(VENUE_DETAILS.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-smooth group"
                  data-ocid="venue-map-link"
                >
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="group-hover:underline">
                    {VENUE_DETAILS.address}
                  </span>
                </a>
                <a
                  href={`tel:${VENUE_DETAILS.phone}`}
                  className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  {VENUE_DETAILS.phone}
                </a>
                <a
                  href={VENUE_DETAILS.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm font-body text-muted-foreground hover:text-primary transition-smooth"
                  data-ocid="venue-website-link"
                >
                  <Globe className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="flex items-center gap-1">
                    Visit Website <ExternalLink className="w-3 h-3" />
                  </span>
                </a>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-card rounded-2xl p-8 shadow-romantic">
              <h4 className="font-display text-lg text-foreground mb-4">
                Getting Here
              </h4>
              <div className="space-y-3">
                {DIRECTIONS.map((dir) => (
                  <div
                    key={dir.from}
                    className="flex items-center justify-between py-2 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{dir.mode}</span>
                      <div>
                        <p className="font-body text-sm text-foreground">
                          {dir.from}
                        </p>
                        <p className="font-body text-xs text-muted-foreground">
                          {dir.distance}
                        </p>
                      </div>
                    </div>
                    <span className="font-body text-sm font-medium text-primary">
                      {dir.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map placeholder — styled decoratively */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-romantic border border-border min-h-80"
          >
            <div className="w-full h-full min-h-80 bg-gradient-to-br from-primary/10 via-accent/5 to-muted flex flex-col items-center justify-center gap-4 p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-display text-xl text-foreground mb-1">
                  Villa Cipriani
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  Asolo, Tuscany, Italy
                </p>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(VENUE_DETAILS.address)}`}
                target="_blank"
                rel="noreferrer"
                data-ocid="venue-directions-btn"
                className="mt-2 px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth text-sm font-body tracking-wider flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5" /> Open in Maps
              </a>
              <div className="mt-4 pt-4 border-t border-border w-full">
                <p className="font-body text-xs text-muted-foreground">
                  Complimentary shuttle service available from Treviso
                  <br />
                  station on the day. Details in confirmation email.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
