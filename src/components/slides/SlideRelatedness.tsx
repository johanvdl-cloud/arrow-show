import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

// 2x2: x-axis = upstream relatedness (technology / R&D / production)
//      y-axis = downstream relatedness (customers / channels / brand)
// Coordinates are CSS percentages (left, top). top=0% means high downstream,
// because we render the high-downstream label at the top of the chart.

const quadrants = [
  { x: "8%", y: "10%", label: "Market-side relatedness", sub: "shared customers, different tech" },
  { x: "60%", y: "10%", label: "Classic related diversifier", sub: "shared customers AND tech" },
  { x: "8%", y: "62%", label: "Unrelated conglomerate", sub: "neither shared classically" },
  { x: "60%", y: "62%", label: "Technology-side relatedness", sub: "shared tech, different customers" },
];

interface Firm {
  name: string;
  // left/top in % of the chart area
  left: string;
  top: string;
  highlighted?: boolean;
  note?: string;
}

const firms: Firm[] = [
  // Top-left: market-side relatedness (high down, low up)
  { name: "Disney", left: "16%", top: "22%" },
  { name: "LVMH", left: "32%", top: "32%" },
  // Top-right: classic related (high down, high up)
  { name: "P&G", left: "70%", top: "20%" },
  { name: "Ciba SC", left: "82%", top: "30%" },
  // Bottom-right: tech-side relatedness (low down, high up)
  { name: "3M", left: "72%", top: "70%" },
  { name: "Honeywell", left: "84%", top: "78%" },
  // Bottom-left: unrelated conglomerate (low down, low up)
  { name: "Berkshire H.", left: "16%", top: "82%" },
  { name: "GE", left: "30%", top: "72%", highlighted: true, note: "Classically here - but see process-relatedness below" },
];

export default function SlideRelatedness({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="Framework: resource-relatedness 2x2 (Collis & Montgomery 1997, Fit 1)"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        3 · Resource Relatedness - Fit 1
      </div>
      <h2 className="text-[36px] font-light mb-2" style={{ fontFamily: "Georgia, serif" }}>
        Where GE sits classically - and why Welch redefines relatedness
      </h2>
      <p className="text-[14px] text-ge-muted italic mb-6">
        Each firm is illustrative - placement is qualitative based on portfolio composition, not measured.
      </p>

      <div className="grid grid-cols-[1fr_460px] gap-10 flex-1">
        {/* 2x2 chart */}
        <div className="relative bg-white border border-ge-rule rounded-lg p-6">
          <div className="text-[11px] uppercase tracking-widest text-ge-muted mb-1 text-center">
            Downstream relatedness - customers · channels · brand
          </div>
          <div className="text-[10px] uppercase tracking-widest text-ge-muted mb-2 flex justify-between">
            <span>↑ high</span>
            <span>low ↓</span>
          </div>

          <div className="relative w-full" style={{ height: 440 }}>
            {/* axes */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={active ? { scaleY: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="absolute left-1/2 top-0 bottom-0 w-px bg-ge-rule origin-top"
            />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={active ? { scaleX: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="absolute top-1/2 left-0 right-0 h-px bg-ge-rule origin-left"
            />

            {/* quadrant labels */}
            {quadrants.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.12 }}
                className="absolute w-[36%] p-2"
                style={{ left: q.x, top: q.y }}
              >
                <div className="text-[12px] font-medium text-ge-ink/80">{q.label}</div>
                <div className="text-[10px] text-ge-muted uppercase tracking-wider leading-tight">
                  {q.sub}
                </div>
              </motion.div>
            ))}

            {/* firm dots */}
            {firms.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={active ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.0 + i * 0.08, type: "spring", stiffness: 200 }}
                className="absolute"
                style={{ left: f.left, top: f.top }}
              >
                <div
                  className={
                    f.highlighted
                      ? "w-5 h-5 rounded-full bg-ge-blue ge-pulse ring-4 ring-ge-blue/20"
                      : "w-3 h-3 rounded-full bg-ge-accent/80"
                  }
                />
                <div
                  className={
                    f.highlighted
                      ? "text-[15px] font-bold mt-1 -ml-1"
                      : "text-[12px] font-medium mt-1 -ml-1 text-ge-ink/85"
                  }
                >
                  {f.name}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-widest text-ge-muted mt-2 flex justify-between">
            <span>← low</span>
            <span>high →</span>
          </div>
          <div className="text-[11px] uppercase tracking-widest text-ge-muted text-center">
            Upstream relatedness - technology · R&D · production
          </div>
        </div>

        {/* Insight column */}
        <div className="space-y-4">
          <div className="p-5 rounded-lg bg-ge-navy text-ge-paper">
            <div className="text-[11px] tracking-widest uppercase opacity-70 mb-2">
              Welch's reframing - process relatedness
            </div>
            <p className="text-[15px] leading-relaxed">
              Classically GE looks like Berkshire - an unrelated conglomerate. But every business
              shares the same management technology: Session C reviews, Work-Out, Best Practices
              transfer, Six Sigma, and the integration playbook applied to every acquisition.
            </p>
          </div>
          <div className="p-5 rounded-lg bg-white border border-ge-rule">
            <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-2">
              Implication for Fit 1
            </div>
            <p className="text-[14px] leading-relaxed">
              Fit 1 is weak in the conventional sense. The relevant question shifts from
              "what do these businesses share?" to "how are they run?" - and that is answered
              by Fit 2 (Business–OI alignment).
            </p>
          </div>
          <div className="p-3 rounded-md bg-ge-rule/40 border border-ge-rule text-[11px] text-ge-muted leading-snug">
            Reading the chart · Disney &amp; LVMH share customers/brand but make different things
            (market-side). P&amp;G &amp; Ciba share both customers and tech (classic). 3M &amp; Honeywell
            share materials/control tech across unrelated end markets (tech-side). Berkshire is the
            pure unrelated case.
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
