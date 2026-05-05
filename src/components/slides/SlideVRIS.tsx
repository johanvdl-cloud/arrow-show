import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const resources = [
  { name: "The Operating System", v: 95, r: 90, i: 70, s: 85,
    desc: "Session C, CEC cadence, Work-Out, Best Practices, integration playbook — a reproducible way of running businesses." },
  { name: "Crotonville & Talent Engine", v: 90, r: 85, i: 65, s: 85,
    desc: "10–12 hr reviews of 3,000 executives annually. $45M invested in the 1980s. A leadership factory." },
  { name: "GE Capital", v: 90, r: 60, i: 55, s: 60,
    desc: "Internal capital market at vast scale; recycles industrial cash into leasing, reinsurance, private equity." },
  { name: "Six Sigma Discipline", v: 85, r: 80, i: 35, s: 55,
    desc: "Quality as DNA. 40% of bonus tied to Six Sigma objectives. Imitable in form, hard to copy in depth." },
  { name: "GE Brand & Reputation", v: 65, r: 85, i: 60, s: 80,
    desc: "Supports access to capital and talent; not the primary driver of value creation." },
];

const Score = ({ value, active, delay }: { value: number; active: boolean; delay: number }) => {
  const intensity = value / 100;
  return (
    <div className="flex flex-col items-center gap-1.5 w-full">
      <div className="relative w-full h-1.5 rounded-full bg-ge-rule overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={active ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-ge-blue"
          style={{ opacity: 0.5 + intensity * 0.5 }}
        />
      </div>
      <span className="text-[13px] font-medium tabular-nums text-ge-ink">{value}%</span>
    </div>
  );
};

export default function SlideVRIS({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="Framework: Barney (1991) — VRIS resources" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">2 · Strategic Resources</div>
      <h2 className="text-[40px] font-light mb-10" style={{ fontFamily: "Georgia, serif" }}>
        The five resources that anchor GE's competitive advantage
      </h2>

      <div className="grid grid-cols-[1fr_repeat(4,110px)] gap-x-6 gap-y-3 items-center text-[12px] tracking-widest uppercase text-ge-muted border-b border-ge-rule pb-3">
        <div>Resource</div><div className="text-center">Valuable</div><div className="text-center">Rare</div><div className="text-center">Inimitable</div><div className="text-center">Substitutable</div>
      </div>

      <div className="flex-1 mt-4 space-y-1">
        {resources.map((r, i) => {
          const baseDelay = 0.15 + i * 0.12;
          return (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 12 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.45, delay: baseDelay }}
              className="grid grid-cols-[1fr_repeat(4,110px)] gap-x-6 items-center py-4 border-b border-ge-rule"
            >
              <div>
                <div className="text-[20px] font-medium">{r.name}</div>
                <div className="text-[14px] text-ge-muted mt-1">{r.desc}</div>
              </div>
              <Score value={r.v} active={active} delay={baseDelay + 0.2} />
              <Score value={r.r} active={active} delay={baseDelay + 0.3} />
              <Score value={r.i} active={active} delay={baseDelay + 0.4} />
              <Score value={r.s} active={active} delay={baseDelay + 0.5} />
            </motion.div>
          );
        })}
      </div>
    </SlideLayout>
  );
}
