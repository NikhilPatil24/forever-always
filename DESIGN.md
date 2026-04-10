# Design Brief

## Direction
Romantic Wedding Invitation — A luxurious, emotionally resonant digital invitation with warm cream backgrounds, gold accents, and celebration animations that evoke elegance and joy.

## Tone
Refined romantic luxury with celebration energy — soft elegance paired with playful confetti and floating animations.

## Differentiation
Animated floral frame entrance on hero load with staggered particle bursts and floating elements create an unforgettable first impression; warm gold and mauve color story elevates beyond generic digital invitations.

## Color Palette

| Token          | OKLCH             | Role                          |
| -------------- | ----------------- | ----------------------------- |
| background     | 0.98 0.01 75      | Warm cream base, light mode   |
| foreground     | 0.18 0.02 45      | Deep warm brown text          |
| card           | 0.99 0.005 75     | Ivory surfaces, minimal tint  |
| primary        | 0.58 0.18 70      | Warm gold/amber, joy & luxury |
| accent         | 0.55 0.16 325     | Mauve/rose, romantic highlight|
| muted          | 0.92 0.01 75      | Subtle warm neutral           |
| border         | 0.88 0.02 75      | Soft warm dividers            |

## Typography

- Display: Fraunces — elegant serif for couple names, section headings, hero text; conveys sophistication
- Body: Satoshi — refined sans-serif for ceremony details, timeline, form labels; warm humanist tone
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl font-bold`, label `text-sm font-semibold uppercase`, body `text-base leading-relaxed`

## Elevation & Depth

Soft romantic shadows with warm undertones (`shadow-romantic` = 8px elevated blur with 6% warm brown tint); card surfaces layered with minimal border separations; dark mode uses warm charcoal backgrounds with amber primary accents.

## Structural Zones

| Zone      | Background           | Border                   | Notes                                    |
| --------- | -------------------- | ------------------------ | ---------------------------------------- |
| Header    | `bg-background`      | None (full width)        | Minimal nav, optional menu               |
| Hero      | `bg-gradient-warm`   | Animated floral frame    | Full viewport, centered couple names     |
| Timeline  | `bg-background`      | Left vertical accent     | Scroll-triggered stagger, icon badges   |
| Content   | Alternating bg-card  | Subtle `border-border`   | Venue, RSVP, accommodation sections      |
| Footer    | `bg-muted/50`        | `border-t border-border` | Social links, copyright                  |

## Spacing & Rhythm

Large vertical gaps between sections (6rem–8rem) create breathing room; micro-spacing (0.5rem–1rem) clusters ceremony times and guest details; hero couples' names centered with 2rem gap between first/last names and date; timeline events use 3rem vertical rhythm.

## Component Patterns

- Buttons: warm gold `bg-primary` with rounded-lg, hover lifts with shadow, text-white
- Cards: `rounded-lg shadow-romantic-sm bg-card`, subtle `border-b border-border/50` for section dividers
- Badges: mauve `bg-accent/20 text-accent` for timeline event type, rounded-full
- Input: cream `bg-background border-border` with focus ring in gold

## Motion

- Entrance: hero couples' names fade-in + slide-up staggered 200ms apart; confetti burst (20–30 particles) radiate outward 1.2s ease-out on page load
- Scroll: timeline events animate in from left with `slide-up` as viewport reaches each event, 400ms delay between items
- Hover: buttons gain `shadow-romantic` lift + slight scale(1.02), labels transition warm-color shift; form inputs brighten border on focus
- Decorative: floating flower icons (SVG or emoji) bob gently 3s infinite on hero; confetti particles use CSS variables `--tx --ty` for randomized exit vectors

## Constraints

- No autoplay audio/video; all motion is CSS/React Spring driven
- Maintain AA+ contrast on all text; gold primary on cream verified for WCAG AA
- Mobile-first: stack timeline vertically, RSVP form single column, hero names size down to `text-4xl` on small screens
- Light mode primary; optional dark mode with warm charcoal base + amber primary

## Signature Detail

Confetti burst particle animation triggered on hero load — each particle follows a unique trajectory (CSS `--tx --ty` variables) to create an organic, celebratory cascade effect that immediately signals joy and occasion.


