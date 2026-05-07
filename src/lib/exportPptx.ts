import { DECK_CONTENT, type SlideContent } from "./deckContent";

const NAVY = "0A1628";
const PAPER = "F5F0E6";
const INK = "1A1A1A";
const MUTED = "6B6B6B";
const ACCENT = "3B82F6";

const HEADING_FONT = "Georgia";
const BODY_FONT = "Calibri";

export async function exportDeckToPptx() {
  const mod = await import("pptxgenjs");
  const PptxGenJS = mod.default;
  const pres = new PptxGenJS();

  pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
  pres.title = "GE Case Memo — Welch Conglomerate";
  pres.author = "Johan van der Linden";

  for (const s of DECK_CONTENT) {
    addSlide(pres, s);
  }

  await pres.writeFile({ fileName: "ge-case-memo.pptx" });
}

function addSlide(pres: any, s: SlideContent) {
  const slide = pres.addSlide();
  const isNavy = s.variant === "navy";
  const bg = isNavy ? NAVY : PAPER;
  const fg = isNavy ? "FFFFFF" : INK;
  const subFg = isNavy ? "C9D4E5" : MUTED;

  slide.background = { color: bg };

  // Section eyebrow
  slide.addText(s.section.toUpperCase(), {
    x: 0.5,
    y: 0.35,
    w: 12.3,
    h: 0.3,
    fontFace: BODY_FONT,
    fontSize: 11,
    color: ACCENT,
    charSpacing: 6,
    bold: true,
  });

  // Title
  slide.addText(s.title, {
    x: 0.5,
    y: 0.7,
    w: 12.3,
    h: 1.0,
    fontFace: HEADING_FONT,
    fontSize: s.id === "title" || s.id === "closing" ? 40 : 28,
    color: fg,
    bold: false,
  });

  // Subtitle
  let bodyY = 1.8;
  if (s.subtitle) {
    slide.addText(s.subtitle, {
      x: 0.5,
      y: 1.75,
      w: 12.3,
      h: 0.6,
      fontFace: HEADING_FONT,
      fontSize: 16,
      italic: true,
      color: subFg,
    });
    bodyY = 2.45;
  }

  // Title/closing slide: single centered body
  if (s.id === "title" || s.id === "closing") {
    const body = s.blocks[0]?.body ?? "";
    slide.addText(body, {
      x: 0.5,
      y: 5.2,
      w: 12.3,
      h: 1.8,
      fontFace: BODY_FONT,
      fontSize: 14,
      color: subFg,
      align: "left",
    });
    return;
  }

  // Content blocks: 2-column grid of cards
  const blocks = s.blocks;
  const cols = blocks.length <= 3 ? 1 : 2;
  const rows = Math.ceil(blocks.length / cols);
  const gridW = 12.3;
  const gridH = 7.5 - bodyY - 0.5;
  const gapX = 0.25;
  const gapY = 0.2;
  const cardW = (gridW - gapX * (cols - 1)) / cols;
  const cardH = (gridH - gapY * (rows - 1)) / rows;

  blocks.forEach((b, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    const x = 0.5 + c * (cardW + gapX);
    const y = bodyY + r * (cardH + gapY);

    // Card background (subtle)
    slide.addShape("rect", {
      x,
      y,
      w: cardW,
      h: cardH,
      fill: { color: isNavy ? "11223D" : "FFFFFF" },
      line: { color: isNavy ? "1F3252" : "E5DED0", width: 0.5 },
    });

    let innerY = y + 0.15;
    if (b.heading) {
      slide.addText(b.heading, {
        x: x + 0.2,
        y: innerY,
        w: cardW - 0.4,
        h: 0.35,
        fontFace: BODY_FONT,
        fontSize: 12,
        color: ACCENT,
        bold: true,
        charSpacing: 2,
      });
      innerY += 0.4;
    }

    if (b.bullets && b.bullets.length > 0) {
      slide.addText(
        b.bullets.map((t) => ({ text: t, options: { bullet: { code: "2022" } } })),
        {
          x: x + 0.2,
          y: innerY,
          w: cardW - 0.4,
          h: cardH - (innerY - y) - 0.15,
          fontFace: BODY_FONT,
          fontSize: 12,
          color: fg,
          paraSpaceAfter: 4,
          valign: "top",
        }
      );
    } else if (b.body) {
      slide.addText(b.body, {
        x: x + 0.2,
        y: innerY,
        w: cardW - 0.4,
        h: cardH - (innerY - y) - 0.15,
        fontFace: BODY_FONT,
        fontSize: 13,
        color: fg,
        valign: "top",
      });
    }
  });

  // Footer
  if (s.footer) {
    slide.addText(s.footer, {
      x: 0.5,
      y: 7.15,
      w: 8,
      h: 0.25,
      fontFace: BODY_FONT,
      fontSize: 9,
      color: subFg,
      italic: true,
    });
  }
  slide.addText("Prof. X. Castañer · 2026", {
    x: 8.5,
    y: 7.15,
    w: 4.3,
    h: 0.25,
    fontFace: BODY_FONT,
    fontSize: 9,
    color: subFg,
    align: "right",
    italic: true,
  });
}
