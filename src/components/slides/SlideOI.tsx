import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const cols = [
  { h: "Structure", sub: "Sectors dissolved; flat reporting; integration playbook",
    body: "Nine hierarchy layers cut to four. Sector level removed in 1985. All 12 business heads report directly to the CEO. Integration model templatises post-M&A onboarding." },
  { h: "Control", sub: "External-competitive, real-time",
    body: "Budgeting re-anchored to market share and relative cost — not historical baselines. Five-page strategy playbook replaces SBU-level planning. Monthly CEC cadence." },
  { h: "Incentives", sub: "Stock options deep; 40% of bonus on Six Sigma",
    body: "Option recipients expanded 300 → 30,000. Idea-sharing (not just creation) rewarded. Vitality curve forces ranking: top 20% lavishly rewarded, bottom 10% counselled out." },
  { h: "HR", sub: "Session C, 360°, Crotonville — a leadership factory",
    body: "10–12 hr reviews of top 3,000 executives annually. Welch spent 70% of his time on people. $45M invested in Crotonville in the 1980s. 'I own the people; you just rent them.'" },
  { h: "Culture", sub: "Boundaryless, speed, candour, stretch",
    body: "Work-Out: 200k+ employees redesigned their own bureaucracy. Boundaryless behaviour: ideas flow without turf. Stretch: targets set beyond 'doable' without punishing failure." },
];

export default function SlideOI({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="Framework: Collis & Montgomery (1997) — OI dimensions" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">5 · Organizational Infrastructure</div>
      <h2 className="text-[36px] font-light mb-10" style={{ fontFamily: "Georgia, serif" }}>
        The OI is the product — every dimension engineered to move capability across units
      </h2>

      <div className="grid grid-cols-5 gap-5 flex-1">
        {cols.map((c, i) => (
          <motion.div
            key={c.h}
            initial={{ opacity: 0, y: 40 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
            className="bg-white border border-ge-rule rounded-lg p-5 flex flex-col"
          >
            <div className="text-[11px] tracking-widest uppercase text-ge-blue mb-2">{c.h}</div>
            <div className="text-[16px] font-medium mb-4 leading-snug">{c.sub}</div>
            <div className="h-px bg-ge-rule mb-4" />
            <p className="text-[14px] leading-relaxed text-ge-ink/85 flex-1">{c.body}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : {}}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="mt-8 text-center text-[22px] italic text-ge-blue"
        style={{ fontFamily: "Georgia, serif" }}
      >
        The point of OI is not to run each business — it is to move capability between them.
      </motion.div>
    </SlideLayout>
  );
}
