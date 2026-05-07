import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

type Tier = "High" | "Medium" | "Low";

interface Resource {
  name: string;
  why: string;
  v: Tier;
  r: Tier;
  i: Tier;
  s: Tier;
}

const resources: Resource[] = [
  {
    name: "The Operating System",
    why: "It is the only thing every GE business actually shares - Session C, CEC cadence, Work-Out, Best Practices, integration playbook. If anything binds the conglomerate, it is this.",
    v: "High", r: "High", i: "Medium", s: "High",
  },
  {
    name: "Crotonville & talent engine",
    why: "Welch put 70% of his time into people and invested $45M in Crotonville. The talent pipeline is what renews the operating system year after year.",
    v: "High", r: "High", i: "Medium", s: "High",
  },
  {
    name: "GE Capital",
    why: "The clearest source of financial synergy in the portfolio. Recycles industrial cash flows into leasing, reinsurance and private equity at a scale stand-alone industrials cannot match.",
    v: "High", r: "Medium", i: "Medium", s: "Medium",
  },
  {
    name: "Six Sigma discipline",
    why: "A candidate learning-and-adaptation resource. Deployed across all units; 40% of bonus tied to it; case reports $750M return on $500M invested by 1999.",
    v: "High", r: "Medium", i: "Low", s: "Low",
  },
  {
    name: "GE brand & reputation",
    why: "Three-time 'Most Admired Company' (Fortune) and 'Most Admired in the World' (FT). Eases capital-raising and talent attraction across all businesses, even if not a primary driver.",
    v: "Medium", r: "High", i: "Medium", s: "High",
  },
];

const tierWidth = (t: Tier) => (t === "High" ? "100%" : t === "Medium" ? "60%" : "25%");
const tierOpacity = (t: Tier) => (t === "High" ? 1 : t === "Medium" ? 0.7 : 0.45);

const Cell = ({ tier, active, delay }: { tier: Tier; active: boolean; delay: number }) => (
  <div className="flex flex-col items-center gap-1.5 w-full">
    <div className="relative w-full h-1.5 rounded-full bg-ge-rule overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={active ? { width: tierWidth(tier) } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className="h-full rounded-full bg-ge-blue"
        style={{ opacity: tierOpacity(tier) }}
      />
    </div>
    <span className="text-[12px] font-medium text-ge-ink">{tier}</span>
  </div>
);

export default function SlideVRIS({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="Framework: VRIS - Barney (1991)"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        2 · Strategic Resources
      </div>
      <h2 className="text-[36px] font-light mb-3" style={{ fontFamily: "Georgia, serif" }}>
        Five candidate resources - and why each made the shortlist
      </h2>
      <p className="text-[14px] text-ge-muted italic mb-6 max-w-[1200px]">
        Selection criterion: a resource is a serious candidate if (a) it is corporate, not
        business-specific, and (b) it plausibly explains why the eleven businesses are worth more
        together than apart. Each is then screened on Barney's four VRIS dimensions.
      </p>

      <div className="grid grid-cols-[1fr_repeat(4,110px)] gap-x-6 items-center text-[11px] tracking-widest uppercase text-ge-muted border-b border-ge-rule pb-2">
        <div>Resource & rationale</div>
        <div className="text-center">Valuable</div>
        <div className="text-center">Rare</div>
        <div className="text-center">Inimitable</div>
        <div className="text-center">Hard to Substitute</div>
      </div>

      <div className="flex-1 mt-2">
        {resources.map((r, i) => {
          const baseDelay = 0.15 + i * 0.1;
          return (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 12 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.45, delay: baseDelay }}
              className="grid grid-cols-[1fr_repeat(4,110px)] gap-x-6 items-center py-3.5 border-b border-ge-rule"
            >
              <div>
                <div className="text-[18px] font-medium">{r.name}</div>
                <div className="text-[13px] text-ge-muted mt-1 leading-snug">{r.why}</div>
              </div>
              <Cell tier={r.v} active={active} delay={baseDelay + 0.2} />
              <Cell tier={r.r} active={active} delay={baseDelay + 0.3} />
              <Cell tier={r.i} active={active} delay={baseDelay + 0.4} />
              <Cell tier={r.s} active={active} delay={baseDelay + 0.5} />
            </motion.div>
          );
        })}
      </div>
    </SlideLayout>
  );
}
