import { useSubmitRSVP } from "@/hooks/useRSVP";
import type { RSVPFormData } from "@/types/wedding";
import { CheckCircle, Heart } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const DIETARY_OPTIONS = [
  "No restrictions",
  "Vegetarian",
  "Vegan",
  "Gluten-free",
  "Kosher",
  "Halal",
  "Other",
];

const INITIAL: RSVPFormData = {
  name: "",
  email: "",
  guestCount: 1,
  dietary: "No restrictions",
  songRequest: "",
  attendance: "yes",
};

export default function RSVPSection() {
  const [form, setForm] = useState<RSVPFormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const { mutate, isPending } = useSubmitRSVP();

  const update = <K extends keyof RSVPFormData>(key: K, val: RSVPFormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }
    mutate(form, {
      onSuccess: () => {
        setSubmitted(true);
        toast.success(
          "Your RSVP has been received! We can't wait to celebrate with you. 🎉",
        );
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <section id="rsvp" className="py-24 bg-background">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-body tracking-[0.35em] text-primary uppercase mb-3">
            Be There
          </p>
          <h2 className="font-display font-light text-4xl md:text-5xl text-foreground mb-4">
            Kindly Reply
          </h2>
          <p className="font-body text-muted-foreground">
            Please respond by{" "}
            <span className="text-primary font-medium">August 1st, 2025</span>
          </p>
          <div className="gold-divider mx-auto w-32 mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {submitted ? (
            <div
              data-ocid="rsvp-success"
              className="bg-card rounded-3xl p-12 shadow-romantic text-center border border-primary/20"
            >
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
              <h3 className="font-display text-2xl text-foreground mb-3">
                Thank You, {form.name.split(" ")[0]}!
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                We've received your RSVP. A confirmation will arrive in your
                inbox shortly. We're counting the days until we celebrate
                together. 🌸
              </p>
              <div className="mt-6 flex items-center justify-center gap-2 text-primary">
                <Heart className="w-4 h-4 fill-primary animate-heartbeat" />
                <span className="font-display italic text-lg">
                  Emma &amp; James
                </span>
                <Heart className="w-4 h-4 fill-primary animate-heartbeat" />
              </div>
            </div>
          ) : (
            <form
              data-ocid="rsvp-form"
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-12 shadow-romantic border border-border/40 space-y-6"
            >
              {/* Attendance */}
              <div>
                <p className="font-body text-sm text-foreground mb-3 tracking-wide">
                  Will you be joining us?
                </p>
                <div
                  className="grid grid-cols-3 gap-3"
                  role="radiogroup"
                  aria-label="Attendance"
                >
                  {(["yes", "no", "maybe"] as const).map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      data-ocid={`rsvp-attendance-${opt}`}
                      onClick={() => update("attendance", opt)}
                      className={`py-3 rounded-xl border text-sm font-body tracking-wider capitalize transition-smooth ${
                        form.attendance === opt
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {opt === "yes"
                        ? "✓ Joyfully Accept"
                        : opt === "no"
                          ? "✗ Regretfully Decline"
                          : "Maybe"}
                    </button>
                  ))}
                </div>
              </div>

              {form.attendance !== "no" && (
                <>
                  {/* Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="rsvp-name"
                        className="block text-xs font-body tracking-widest text-muted-foreground uppercase mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="rsvp-name"
                        type="text"
                        data-ocid="rsvp-name"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="rsvp-email"
                        className="block text-xs font-body tracking-widest text-muted-foreground uppercase mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="rsvp-email"
                        type="email"
                        data-ocid="rsvp-email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  {/* Guest count */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="rsvp-guests"
                        className="block text-xs font-body tracking-widest text-muted-foreground uppercase mb-1.5"
                      >
                        Number of Guests
                      </label>
                      <select
                        id="rsvp-guests"
                        data-ocid="rsvp-guests"
                        value={form.guestCount}
                        onChange={(e) =>
                          update("guestCount", Number(e.target.value))
                        }
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth"
                      >
                        {[1, 2, 3, 4].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="rsvp-dietary"
                        className="block text-xs font-body tracking-widest text-muted-foreground uppercase mb-1.5"
                      >
                        Dietary Needs
                      </label>
                      <select
                        id="rsvp-dietary"
                        data-ocid="rsvp-dietary"
                        value={form.dietary}
                        onChange={(e) => update("dietary", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth"
                      >
                        {DIETARY_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Song request */}
                  <div>
                    <label
                      htmlFor="rsvp-song"
                      className="block text-xs font-body tracking-widest text-muted-foreground uppercase mb-1.5"
                    >
                      Song Request 🎵
                    </label>
                    <input
                      id="rsvp-song"
                      type="text"
                      data-ocid="rsvp-song"
                      value={form.songRequest}
                      onChange={(e) => update("songRequest", e.target.value)}
                      placeholder="What song will get you on the dance floor?"
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/40 transition-smooth placeholder:text-muted-foreground/50"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                data-ocid="rsvp-submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase hover:opacity-90 disabled:opacity-60 transition-smooth shadow-romantic flex items-center justify-center gap-2"
              >
                {isPending ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Heart className="w-4 h-4" />
                    {form.attendance === "no"
                      ? "Send My Regrets"
                      : "Send My RSVP"}
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
