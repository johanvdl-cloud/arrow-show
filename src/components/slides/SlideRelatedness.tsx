import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

export default function SlideRelatedness({ active }: { active: boolean }) {
  const quadrants = [
    { x: "5%", y: "5%", label: "Market-side relatedness", sub: "high down · low up" },
    { x: "55%", y: "5%", label: "Classic related diversifier", sub: "high · high" },
    { x: "5%", y: "55%", label: "Unrelated conglomerate", sub: "low · low" },
    { x: "55%", y: "55%", label: "Technology-side relatedness", sub: "high up · low down" },
  ];
  return (
    <SlideLayout footerLeft="Framework: Collis & Montgomery (1997), adaptation of Fit 1" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">3 · Resource Relatedness</div>
      <h2 className="text-[40px] font-light mb-8" style={{ fontFamily: "Georgia, serif" }}>
        Welch redefines relatedness — from product to process
      </h2>

      <div className="grid grid-cols-[1fr_500px] gap-12 flex-1">
        {/* 2x2 */}
        <div className="relative bg-white border border-ge-rule rounded-lg p-8">
          <div className="text-[12px] uppercase tracking-widest text-ge-muted mb-2">Downstream → customers · channels · brand</div>
          <div className="relative w-full" style={{ height: 480 }}>
            {/* axes */}
            <motion.div initial={{ scaleY: 0 }} animate={active ? { scaleY: 1 } : {}} transition={{ duration: 0.7 }}
              className="absolute left-1/2 top-0 bottom-0 w-px bg-ge-rule origin-top" />
            <motion.div initial={{ scaleX: 0 }} animate={active ? { scaleX: 1 } : {}} transition={{ duration: 0.7 }}
              className="absolute top-1/2 left-0 right-0 h-px bg-ge-rule origin-left" />

            {quadrants.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="absolute w-[40%] p-3"
                style={{ left: q.x, top: q.y }}
              >
                <div className="text-[14px] font-medium">{q.label}</div>
                <div className="text-[11px] text-ge-muted uppercase tracking-wider">{q.sub}</div>
              </motion.div>
            ))}

            {/* Ciba dot — top right (high/high upstream) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={active ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute"
              style={{ left: "75%", top: "70%" }}
            >
              <div className="w-5 h-5 rounded-full bg-ge-accent" />
              <div className="text-[14px] font-semibold mt-1">Ciba</div>
            </motion.div>

            {/* GE dot — bottom-left (low/low classically) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={active ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4, type: "spring" }}
              className="absolute"
              style={{ left: "20%", top: "75%" }}
            >
              <div className="w-6 h-6 rounded-full bg-ge-blue ge-pulse" />
              <div className="text-[16px] font-semibold mt-1">GE</div>
            </motion.div>
          </div>
          <div className="text-[12px] uppercase tracking-widest text-ge-muted mt-2">Upstream → technology · R&D · production</div>
        </div>

        {/* Implication */}
        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-ge-navy text-ge-paper">
            <div className="text-[12px] tracking-widest uppercase opacity-70 mb-2">Instead: process relatedness</div>
            <p className="text-[18px] leading-relaxed">
              What every GE business does share is the operating system: Session C people reviews, Work-Out, Best Practices
              transfer, Six Sigma discipline, stretch targets, and the integration playbook applied to every acquisition.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white border border-ge-rule">
            <div className="text-[12px] tracking-widest uppercase text-ge-muted mb-2">Implication</div>
            <p className="text-[16px] leading-relaxed">
              Fit 1 is weak in the conventional sense, but Welch has re-defined relatedness. The question shifts from
              'what do these businesses share?' to 'how are they run?' — and that is answered by Fit 2.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
