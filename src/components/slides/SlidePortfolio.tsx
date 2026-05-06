import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";
import { useCountUp } from "@/hooks/useCountUp";

// Portfolio at the end of the case (2001). GE Aerospace was divested to Martin
// Marietta in November 1992, so it is not shown here. Aviation-related activity
// post-1992 is captured under Aircraft Engines.
const groups = [
  { name: "Infrastructure", items: ["Aircraft Engines", "Power Systems", "Transportation"] },
  { name: "Technology", items: ["Medical Systems", "Plastics", "Industrial Systems"] },
  { name: "Consumer & Media", items: ["Appliances", "NBC Broadcasting", "Motors", "Lighting"] },
  { name: "Capital", items: ["GE Capital (financing, leasing, insurance, investment banking)"] },
];

function Stat({ value, suffix, prefix = "", active }: { value: number; suffix?: string; prefix?: string; active: boolean }) {
  const v = useCountUp(value, 1500, active);
  const formatted = v >= 1000 ? Math.round(v).toLocaleString() : Math.round(v);
  return <span className="text-[56px] font-semibold text-ge-blue tabular-nums">{prefix}{formatted}{suffix}</span>;
}

export default function SlidePortfolio({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="Source: Case Exhibits 1–9, GE Annual Reports" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">1 · Businesses — Portfolio & Scope</div>
      <h2 className="text-[40px] font-light mb-10" style={{ fontFamily: "Georgia, serif" }}>
        A portfolio of eleven largely unrelated businesses — held together by how they are run
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-10">
        {groups.map((g, gi) => (
          <div key={g.name}>
            <div className="text-[12px] tracking-widest uppercase text-ge-blue mb-3">{g.name}</div>
            <div className="space-y-2">
              {g.items.map((it, ii) => (
                <motion.div
                  key={it}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={active ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + gi * 0.1 + ii * 0.08 }}
                  className="px-4 py-3 rounded-md bg-white border border-ge-rule shadow-sm text-[15px]"
                >
                  {it}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-12 flex-1 border-t border-ge-rule pt-8">
        <div>
          <div className="text-[12px] tracking-widest uppercase text-ge-muted mb-3">The Portfolio Question</div>
          <p className="text-[18px] leading-relaxed">
            A chop-shop valuation would treat each of these eleven units as a standalone pure-play.
            The question is whether holding them inside one corporate entity generates more value than their sum
            would command on public markets. For GE, customers, channels and technologies barely overlap — so
            classical scope economies cannot be the answer. The next slides test what can.
          </p>
        </div>
        <div>
          <div className="text-[12px] tracking-widest uppercase text-ge-muted mb-4">Scale, 2000</div>
          <div className="space-y-4">
            <div><Stat value={130} prefix="$" suffix="B" active={active} /><div className="text-[13px] text-ge-muted">in revenues</div></div>
            <div><Stat value={313000} active={active} /><div className="text-[13px] text-ge-muted">employees in 100+ countries</div></div>
            <div><Stat value={45} prefix="~" suffix="%" active={active} /><div className="text-[13px] text-ge-muted">of revenue from outside the US</div></div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
