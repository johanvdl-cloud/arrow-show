import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const eraBars = [
  { label: "Borch 1970", value: 12.6 },
  { label: "Jones 1980", value: 19.5 },
  { label: "Welch 1990", value: 19.8 },
  { label: "Welch 2000", value: 27.5 },
];

// Five headline metrics, all from the case (Exhibits 1, 5, 9).
const headline = [
  { metric: "Revenue", v1981: "$27.2B", v2000: "$129.9B", change: "≈ 4.8×", src: "Ex. 1 / 5" },
  { metric: "Operating margin (ROS)", v1981: "6.1%", v2000: "9.8%", change: "+3.7 pts", src: "Ex. 5" },
  { metric: "Return on equity", v1981: "18.1%", v2000: "27.5%", change: "+9.4 pts", src: "Ex. 1" },
  { metric: "Stock market capitalisation", v1981: "$13.1B", v2000: "$389.4B", change: "≈ 30×", src: "Ex. 5" },
  { metric: "Services share of revenue", v1981: "≈ 15%", v2000: "≈ 75%", change: "+60 pts", src: "Ex. 9" },
];

export default function SlideEvidence({ active }: { active: boolean }) {
  const max = 30;
  return (
    <SlideLayout
      footerLeft="Source: Case Exhibits 1, 5, 9"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-3">
        4 · Evidence of Value Creation
      </div>
      <h2 className="text-[40px] font-light mb-8" style={{ fontFamily: "Georgia, serif" }}>
        GE under Welch outperformed on every measure that matters
      </h2>

      <div className="grid grid-cols-[440px_1fr] gap-10 flex-1">
        {/* Left: ROE chart + TSR highlight */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-3">
              Return on Equity, three CEO eras
            </div>
            <div className="h-[280px] flex items-end gap-6 border-b border-l border-ge-rule pl-5 pb-1 relative">
              {eraBars.map((b, i) => (
                <div
                  key={b.label}
                  className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={active ? { height: `${(b.value / max) * 100}%` } : { height: 0 }}
                    transition={{ duration: 1.0, delay: 0.2 + i * 0.18, ease: "easeOut" }}
                    className="w-full rounded-t-md bg-gradient-to-t from-ge-blue to-accent relative"
                  >
                    <span className="absolute -top-7 left-0 right-0 text-center text-[14px] font-semibold text-ge-ink">
                      {b.value}%
                    </span>
                  </motion.div>
                  <div className="text-[12px] text-ge-muted text-center whitespace-pre">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="bg-ge-navy text-ge-paper rounded-lg p-5"
          >
            <div className="text-[11px] tracking-widest uppercase opacity-70 mb-2">
              Total shareholder return, 1981–2001
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[56px] font-semibold tabular-nums leading-none">23%</span>
              <span className="text-[14px] opacity-80">per year</span>
            </div>
            <p className="text-[13px] opacity-85 mt-2 leading-snug">
              Roughly 1.5× the S&P 500 over the same period.
            </p>
          </motion.div>
        </div>

        {/* Right: Metrics table + simple reading */}
        <div className="flex flex-col">
          <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-3">
            Five headline metrics, 1981 → 2000
          </div>
          <div className="bg-white border border-ge-rule rounded-lg overflow-hidden">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_70px] gap-3 px-4 py-2 bg-ge-rule/30 text-[10px] tracking-widest uppercase text-ge-muted font-semibold">
              <div>Metric</div>
              <div className="text-right">1981</div>
              <div className="text-right">2000</div>
              <div className="text-right">Change</div>
              <div className="text-right">Source</div>
            </div>
            {headline.map((row, i) => (
              <motion.div
                key={row.metric}
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="grid grid-cols-[1.4fr_1fr_1fr_1fr_70px] gap-3 px-4 py-3 border-t border-ge-rule items-center"
              >
                <div className="text-[14px] font-medium">{row.metric}</div>
                <div className="text-[14px] text-ge-ink/75 text-right tabular-nums">{row.v1981}</div>
                <div className="text-[14px] text-ge-ink text-right tabular-nums">{row.v2000}</div>
                <div className="text-[14px] text-ge-blue font-semibold text-right tabular-nums">
                  {row.change}
                </div>
                <div className="text-[10px] text-ge-muted text-right uppercase tracking-wider">
                  {row.src}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-5 p-4 rounded-lg bg-ge-paper border-l-4 border-ge-blue"
          >
            <div className="text-[11px] tracking-widest uppercase text-ge-blue mb-1.5 font-semibold">
              Reading
            </div>
            <p className="text-[14px] leading-relaxed text-ge-ink/90">
              The whole has clearly been worth more than the parts under Welch — every operating
              metric improved, the workforce shrank, and shareholders earned roughly twice the
              market return.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
