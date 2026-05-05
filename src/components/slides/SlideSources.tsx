import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const sources = [
  {
    roman: "I",
    title: "Relatedness and Economic Synergies",
    body: "Shared resources and scope economies across businesses — cost or revenue advantages from operating jointly rather than separately.",
    sub: [],
  },
  {
    roman: "II",
    title: "Financial Synergies",
    body: "Pooling cash flows and risk inside the corporation rather than leaving it to capital markets.",
    sub: ["Risk Diversification", "Internal Capital Market"],
  },
  {
    roman: "III",
    title: "Multimarket Contact & Mutual Forbearance",
    body: "When the same competitors meet across several markets, rivalry softens — each side fears retaliation in the other arenas.",
    sub: [],
  },
  {
    roman: "IV",
    title: "Learning and Adaptation",
    body: "Knowledge, routines and best practices transferred across the portfolio — the corporation as a learning system.",
    sub: [],
  },
];

export default function SlideSources({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="Source: Castañer, First Session — Master HEC Lausanne, W/S 2026 (p.9)"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">Theory Framework</div>
      <h2 className="text-[44px] font-light mb-3" style={{ fontFamily: "Georgia, serif" }}>
        Four Potential Sources of Diversification Value
      </h2>
      <p className="text-[16px] text-ge-muted mb-8 italic">The lens we then apply to GE on the next slide.</p>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {sources.map((s, i) => (
          <motion.div
            key={s.roman}
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
            className="bg-white border border-ge-rule rounded-lg p-6 flex gap-5"
          >
            <div className="text-[48px] font-light text-ge-blue leading-none w-14 shrink-0">{s.roman}</div>
            <div className="flex-1">
              <div className="text-[22px] font-medium mb-2">{s.title}</div>
              <p className="text-[15px] leading-relaxed text-ge-ink/85">{s.body}</p>
              {s.sub.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {s.sub.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.15 + j * 0.1 }}
                      className="text-[14px] text-ge-ink/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-ge-blue" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
