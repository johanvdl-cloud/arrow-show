import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";
import { useCountUp } from "@/hooks/useCountUp";

function Stat({ value, suffix, active, decimals = 0 }: { value: number; suffix: string; active: boolean; decimals?: number }) {
  const v = useCountUp(value, 1400, active, decimals);
  return (
    <span className="text-[64px] font-semibold text-ge-blue tabular-nums">
      {decimals ? v.toFixed(decimals) : Math.round(v)}{suffix}
    </span>
  );
}

const rows = [
  { n: 1, title: "#1 or #2 globally, or fix / sell / close", stat: { v: 16, suf: "%+", label: "operating margin" } },
  { n: 2, title: "A boundaryless organisation — ideas flow freely across units", stat: { v: 10, suf: "×", label: "inventory turns" } },
  { n: 3, title: "A shift from industrial products toward high-margin services", stat: { v: 75, suf: "%", label: "revenue from services by 2000" } },
  { n: 4, title: "Quality as DNA (Six Sigma) and the internet as a lever", stat: { v: 3.4, suf: "", label: "defects per million ops (6σ)", decimals: 1 } },
];

export default function SlideMission({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="GE Case Memo · Johan van der Linden" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">0 · Mission, Vision & Goals</div>
      <h2 className="text-[44px] font-light mb-12" style={{ fontFamily: "Georgia, serif" }}>
        Mission, vision & goals at the close of the Welch era
      </h2>

      <div className="grid grid-cols-3 gap-8 mb-10">
        <div className="bg-white border border-ge-rule rounded-lg p-5">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ge-blue font-semibold mb-3">① Mission — Why we exist</div>
          <p className="text-[19px] leading-snug">
            Be the world's most profitable, highly diversified company — with world quality leadership in every product line.
          </p>
        </div>
        <div className="bg-white border border-ge-rule rounded-lg p-5">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ge-blue font-semibold mb-3">② Vision — What we aspire to</div>
          <p className="text-[19px] leading-snug">
            A boundaryless, learning enterprise where every business is #1 or #2 in its market — combining the reach of a big company with the speed of a small one.
          </p>
          <p className="text-[13px] italic text-ge-muted mt-3">— J. Welch, c. 1983</p>
        </div>
        <div className="bg-white border border-ge-rule rounded-lg p-5">
          <div className="text-[11px] tracking-[0.25em] uppercase text-ge-blue font-semibold mb-3">③ Goals — How we measure it</div>
          <ul className="text-[16px] leading-snug space-y-1.5 text-ge-ink/85">
            <li>• Double-digit earnings growth, every year</li>
            <li>• 16%+ operating margin</li>
            <li>• 10× inventory turns</li>
            <li>• Six Sigma quality (3.4 dpmo)</li>
          </ul>
        </div>
      </div>

      <div className="text-[12px] tracking-[0.25em] uppercase text-ge-muted mb-4">Goals — operationalised across four levers</div>

      <div className="space-y-5 flex-1">
        {rows.map((r, i) => (
          <motion.div
            key={r.n}
            initial={{ opacity: 0, x: -20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
            className="grid grid-cols-[60px_1fr_400px] gap-8 items-center border-t border-ge-rule pt-5"
          >
            <div className="text-[40px] font-light text-ge-blue">{r.n}</div>
            <div className="text-[22px] leading-snug">{r.title}</div>
            <div className="flex items-baseline gap-3">
              <Stat value={r.stat.v} suffix={r.stat.suf} active={active} decimals={r.stat.decimals ?? 0} />
              <span className="text-[14px] text-ge-muted">{r.stat.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
