## Add "Download as PPTX" button to the closing slide

Add a button on `SlideClosing` that exports the deck as a `.pptx` file.

### Approach

Use **pptxgenjs** (pure JS, runs in-browser, no server needed). Dynamic-import it inside the click handler so it doesn't bloat the initial bundle.

The React slides are visually rich (framer-motion animations, gradient orbs, custom layouts). Reproducing that pixel-perfectly in PPTX isn't realistic — instead, generate a **content-faithful** PPTX: one PPTX slide per deck slide containing the title, section label, and key text, styled with the deck's navy/paper palette and Georgia serif headings. This is the standard expectation when exporting an animated web deck.

### Steps

1. **Install dep**: `bun add pptxgenjs`

2. **Create `src/lib/deckContent.ts`**: a typed array describing each of the 12 slides — `{ id, title, section, variant: "navy"|"paper", body: { kind: "bullets"|"sentences"|"hero", items: [...] } }`. Where structured content already lives inside slide components (e.g. `sentences` in `SlideExecSummary`, `recs` in `SlideRecs`), move those arrays into `deckContent.ts` and re-import them in the components — single source of truth.

3. **Create `src/lib/exportPptx.ts`** exporting `exportDeckToPptx()`:
   - Dynamic `import("pptxgenjs")`
   - 16:9 layout, GE color tokens (`#0a1628` navy, `#f5f0e6` paper, blue accent)
   - Iterate `deckContent` and add one slide each with `addText` for title / section label / body
   - `pres.writeFile({ fileName: "ge-case-memo.pptx" })`

4. **Update `SlideClosing.tsx`**: add a small "Download deck (.pptx)" button under the "Thank you" line, navy-variant styling. Click handler calls `exportDeckToPptx()` with `stopPropagation` so it doesn't trigger nav.

### Notes

- Animations, gradient orbs, and decorative visuals won't be reproduced — output is a clean editable text-and-color version.
- ~200 KB gzipped cost, lazy-loaded only on click.
- No route or server changes.
