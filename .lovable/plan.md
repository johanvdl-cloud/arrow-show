# Interactive GE Case Memo Presentation

Rebuild the 13-slide GE deck as an interactive web presentation. All slide text is preserved verbatim from the .pptx (with the optional removal of the Executive Summary slide). The focus is interactivity, motion, and navigation — not rewriting content.

## Slide inventory (from the uploaded PPTX)

1. Title — "General Electric: The Welch Conglomerate"
2. Executive Summary *(remove per your note)*
3. Mission, Vision & Goals
4. Businesses — Portfolio & Scope
5. Evidence of Corporate Value Creation
6. *(VRIS / Strategic Resources)*
7. Resource Relatedness 2×2 (GE vs. Ciba)
8. Motives for Diversification (4 sources)
9. Organizational Infrastructure (5 dimensions)
10. Fits 1/2/3 triangle synthesis
11. Risk register
12. Recommendations to the Board
13. Closing

→ Final running deck: **12 slides**, organized into **4 sections** for the progress bar:

- **Setup** (Title, Mission/Vision, Portfolio) — 3 slides
- **Evidence & Resources** (Value creation, VRIS, Relatedness 2×2) — 3 slides
- **Diagnosis** (Motives, OI, Fits triangle) — 3 slides
- **Implications** (Risks, Recommendations, Closing) — 3 slides

## Navigation & controls

- **← / →** — previous / next slide
- **↑ / ↓** — jump to previous / next section
- **O** — toggle Overview (grid of all slides; click a thumbnail to jump)
- **F** — toggle browser Fullscreen
- **Esc** — exit Overview or Fullscreen
- **Space** — next slide
- On-screen hint chip ("← →  ·  O overview  ·  F fullscreen") that auto-fades after 3s, reappears on mouse move

## Top progress bar

A thin bar fixed across the top, divided into 4 segments (the sections above). Each segment is subdivided into ticks for its slides. Behavior:

- Completed slides: filled
- Current slide: animated pulsing fill
- Upcoming: muted
- Section labels render above each segment; clicking a segment jumps to its first slide
- Smooth fill animation when advancing

```text
[ Setup ●●○ ][ Evidence ○○○ ][ Diagnosis ○○○ ][ Implications ○○○ ]
```

## Motion & animated elements (no text changes)

Every slide preserves its exact wording. Motion is layered on top:

- **Slide transitions**: horizontal slide + crossfade between slides; vertical slide when jumping sections
- **Title slide**: subtle animated gradient backdrop, GE-blue particle/orb drift, headline letters fade-in staggered
- **Mission/Vision/Goals**: the four numbered rows cascade in; the four big stat numbers (16%, 10×, 75%, 3.4) count up from 0 on entry
- **Portfolio slide**: the 12 business chips fly in from their group cluster; "$130B / 313,000 / ~45%" stats count up
- **Evidence slide**: the ROE bar chart animates bars growing left→right (Borch → Jones → Welch'90 → Welch'00); TSR/market-cap numbers count up; arrow connecting "$14B → $506B" draws on
- **Relatedness 2×2**: GE and Ciba dots animate into their quadrants; axes draw in; quadrant labels fade in sequentially
- **Motives (I–IV)**: cards flip/slide in one by one; the strength tag ("STRONG", "WEAK", etc.) pops with a scale bounce
- **Organizational Infrastructure**: 5 columns rise sequentially; the bottom italic line types in
- **Fits triangle**: triangle edges draw on (SVG stroke-dashoffset), then the three fit ratings reveal
- **Risk register**: severity badges pulse; rows slide in
- **Recommendations**: the four numbered cards stagger in with a parallax tilt on hover
- **Closing**: headline fades in, subheadline follows, "Thank you" gently pulses
- **Ambient**: a faint animated GE-blue gradient or noise texture across all content slides for life without distraction
- All motion respects `prefers-reduced-motion` (instant transitions, no count-ups)

## Overview mode (press O)

- Full-screen 4-column grid of all 12 slide thumbnails (rendered as scaled-down live slides at 1920×1080)
- Section headers above each row of thumbnails
- Current slide highlighted with a ring
- Click any thumbnail → exits Overview and jumps to that slide
- Animated zoom-in transition when leaving Overview into the chosen slide

## Fullscreen mode (press F)

- Uses the browser Fullscreen API on the root element
- Cursor auto-hides after 2s of inactivity
- Progress bar and hint chip remain available; everything else is chrome-free
- Pressing F again or Esc exits

## Layout & scaling

- Each slide authored at fixed 1920×1080 and uniformly scaled with CSS `transform: scale()` to fit any viewport (and thumbnails in Overview)
- Centered with letterboxing on off-ratio screens
- Dark, premium presentation chrome (deep navy/charcoal background around the slides); slides themselves keep a clean light surface to match the original deck's editorial feel

## Out of scope

- No edits to slide copy
- No editing UI (this is a presenter/runtime, not an authoring tool)
- No speaker-notes panel (notes from the .pptx aren't displayed) — can be added later if you want a presenter view

## Technical notes

- TanStack Start route at `/` renders the presentation; one route, one keyboard handler at the top level
- One `<Slide>` component per slide under `src/components/slides/`, plus a `ScaledSlide` wrapper for the 1920×1080 → fit-to-viewport scaling reused by both the main view and Overview thumbnails
- Section/slide registry in a single `src/lib/deck.ts` (id, title, section, component) — drives the progress bar, Overview, and navigation
- Framer Motion for slide transitions and per-element entrance animations; SVG with stroke-dashoffset for line-drawing (triangle, chart axes); a small `useCountUp` hook for animated numbers
- Fullscreen via `document.documentElement.requestFullscreen()` with `fullscreenchange` listener for state sync
- Keyboard handler ignores input when focus is in a form field (none currently, but defensive)
- `prefers-reduced-motion` short-circuits all entrance/count-up animations
