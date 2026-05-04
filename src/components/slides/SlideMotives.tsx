import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const motives = [
  { roman: "I", title: "Economic synergies", tag: "WEAK (classical) / STRONG (process)", tagColor: "bg-ge-blue/80",
    body: "Near-zero on shared customers, channels, or technology. But strong and rare on shared process capabilities: Work-Out circulated productivity fixes from Lighting to Aircraft Engines; the integration model compressed post-deal onboarding to ~100 days across the portfolio." },
  { roman: "II", title: "Financial synergies", tag: "STRONG", tagColor: "bg-ge-blue",
    body: "GE Capital is an internal capital market on a vast scale — recycling industrial cash flows into leasing, reinsurance, and private equity positions that stand-alone industrial firms could not access. Risk diversification across cyclical and non-cyclical units stabilises earnings." },
  { roman: "III", title: "Multimarket contact & mutual forbearance", tag: "LIMITED", tagColor: "bg-ge-rule text-ge-ink",
    body: "With competitors so fragmented across aerospace, broadcasting, finance and healthcare, there is almost no rival that meets GE in multiple markets. The coordination benefit is largely theoretical here." },
  { roman: "IV", title: "Learning & adaptation", tag: "VERY STRONG — THE CORE DRIVER", tagColor: "bg-ge-accent",
    body: "Crotonville as an institutional university; boundaryless behaviour rewarded in bonus formulas; A-player talent rotated across divisions; Best Practices scanned from Ford, Xerox, Toshiba and imported. The portfolio is effectively a set of 350 learning laboratories, as Welch described it." },
];

export default function SlideMotives({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="Framework: Castañer — four sources of diversification value" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">4 · Motives for Diversification</div>
      <h2 className="text-[40px] font-light mb-8" style={{ fontFamily: "Georgia, serif" }}>
        Where the 'whole &gt; parts' value actually comes from
      </h2>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {motives.map((m, i) => (
          <motion.div
            key={m.roman}
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={active ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.18 }}
            className="bg-white border border-ge-rule rounded-lg p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="text-[36px] font-light text-ge-blue leading-none">{m.roman}</div>
                <div className="text-[22px] font-medium mt-2">{m.title}</div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={active ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.18, type: "spring", stiffness: 200 }}
                className={`px-3 py-1 rounded-full text-[11px] tracking-widest font-semibold text-white ${m.tagColor}`}
              >
                {m.tag}
              </motion.div>
            </div>
            <p className="text-[15px] leading-relaxed text-ge-ink/85 flex-1">{m.body}</p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
