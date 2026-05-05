# Add "Four Sources of Diversification Value" framework slide

## What

Insert a new theory slide that introduces Castañer's four potential sources of value from diversification, *before* the existing Motives slide (which then reads as the GE-specific application of the framework). Pulled verbatim from page 9 of the uploaded First Session deck.

## Where it goes

New slide inserted at index 6 of the deck, in the **Diagnosis** section, immediately before `SlideMotives`:

```text
Diagnosis: [NEW] Four Sources → Motives (GE) → OI → Fits
```

This grows the deck from 12 → 13 slides; the Diagnosis section grows from 3 → 4 ticks on the progress bar. No other slide changes.

## Slide content (verbatim from the source deck, page 9)

Title chip: `THEORY FRAMEWORK`
Headline: *Four Potential Sources of Diversification Value*

Four numbered cards in a 2×2 grid:

1. **Relatedness and Economic Synergies** — shared resources / scope economies across businesses (cost or revenue).
2. **Financial Synergies** — two sub-bullets: *Risk Diversification* and *Internal Capital Market*.
3. **Multimarket Contact and Mutual Forbearance** — competitors meeting across several markets soften rivalry.
4. **Learning and Adaptation** — knowledge, routines and best practices transferred across the portfolio.

Footer-left: `Source: Castañer, First Session — Master HEC Lausanne, W/S 2026 (p.9)`
Footer-right keeps the existing prof attribution.

A short caption under the headline: *"The lens we then apply to GE on the next slide."* — this is the only non-verbatim line, used to bridge to the existing Motives slide.

## Motion

Consistent with the rest of the deck:

- Each of the 4 cards staggers in (opacity + y, 0.15 s steps) on slide entry.
- Roman numeral (I–IV) in big GE-blue light weight, matching the Motives slide visual language so the two slides feel like a pair (theory → application).
- Sub-bullets under "Financial Synergies" fade in after the parent card.
- Respects `prefers-reduced-motion` (already global).

## Files to change

- **Create** `src/components/slides/SlideSources.tsx` — new slide component, mirroring the structure of `SlideMotives.tsx` for visual consistency.
- **Edit** `src/lib/deck.ts` — import `SlideSources`, insert into `SLIDES` array between `motives`'s previous position and... actually *before* `motives`, with `id: "sources"`, `section: "diagnosis"`. The progress bar, overview grid, and keyboard navigation auto-pick this up from the registry.

No changes needed to `ProgressBar.tsx`, `Overview.tsx`, `routes/index.tsx`, or any other slide — they all read from `SLIDES`.

## Out of scope

- No edits to the existing Motives slide copy.
- No renumbering of "4 ·" prefix on the Motives slide (it already reads as motive #4 in the case flow; the new slide is framed as "Theory Framework", not motive #N, so there's no collision).
