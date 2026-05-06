import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const eraBars = [
  { label: "Borch 1970", value: 12.6 },
  { label: "Jones 1980", value: 19.5 },
  { label: "Welch 1990", value: 19.8 },
  { label: "Welch 2000", value: 27.5 },
];

// Every figure here is from the case (Exhibits 1, 5, 9, 11) or case text.
const headline = [
  { metric: "Revenue", v1981: "$27.2B", v2000: "$129.9B", change: "≈ 4.8×", src: "Ex. 1 / 5" },
  { metric: "Net earnings (cont. ops)", v1981: "$1.65B", v2000: "$12.7B", change: "≈ 7.7×", src: "Ex. 1" },
  { metric: "Operating margin (ROS)", v1981: "6.1%", v2000: "9.8%", change: "+3.7 pts", src: "Ex. 5" },
  { metric: "Return on equity", v1981: "18.1%", v2000: "27.5%", change: "+9.4 pts", src: "Ex. 1 / 5" },
  { metric: "Stock market capitalisation", v1981: "$13.1B", v2000: "$389.4B", change: "≈ 30×", src: "Ex. 5" },
  { metric: "Employees", v1981: "404,000", v2000: "313,000", change: "−23%", src: "Ex. 1" },
  { metric: "Services share of revenue", v1981: "≈ 15%", v2000: "≈ 75%", change: "+60 pts", src: "Ex. 9" },
];

const portfolioActivity = [
  { k: "Divestitures (1981–90)", v: "200+ businesses · $11B freed" },
  { k: "Acquisitions (1981–90)", v: "370+ businesses · $21B invested" },
  { k: "Productivity growth", v: "2% (1981–87) → 4% (1988–92)" },
  { k: "Six Sigma (by 1999)", v: "$500M cost → $750M return; ≈$2B forecast (Ex. 11)" },
  { k: "Operating margin run", v: "10% (1991) → 14.4% (1995)" },
  { k: "Services share of profits", v: "16.4% (1980) → 60% (1995); ⅔ of rev. by late 90s" },
];

export default function SlideEvidence({ active }: { active: boolean }) {
  const max = 30;
  return (
    <SlideLayout
      footerLeft="Source: Case Exhibits 1, 5, 9, 11 and case text — every figure is case-sourced"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-3">
        4 · Evidence of Corporate Value Creation
      </div>
      <h2 className="text-[34px] font-light mb-2" style={{ fontFamily: "Georgia, serif" }}>
        GE under Welch — the case data, with every figure traceable to an exhibit
      </h2>
      <p className="text-[13px] text-ge-muted italic mb-5 max-w-[1300px]">
        A strict chop-shop requires segment-level pure-play comparables, which the case does not
        provide. The argument here uses GE's own track record across the Welch era, plus headline
        portfolio activity. The next slide (OI) and the Fits slide explain <em>why</em>.
      </p>

      <div className="grid grid-cols-[400px_1fr] gap-8 flex-1">
        {/* Left: Era ROE chart + TSR highlight */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-2">
              ROE across three CEO eras (Exhibit 5)
            </div>
            <div className="h-[200px] flex items-end gap-5 border-b border-l border-ge-rule pl-4 pb-1 relative">
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
                    <span className="absolute -top-6 left-0 right-0 text-center text-[12px] font-semibold text-ge-ink">
                      {b.value}%
                    </span>
                  </motion.div>
                  <div className="text-[10px] text-ge-muted text-center whitespace-pre">
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
            className="bg-ge-navy text-ge-paper rounded-lg p-4"
          >
            <div className="text-[10px] tracking-widest uppercase opacity-70 mb-1">
              Total shareholder return (case opening)
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-[44px] font-semibold tabular-nums leading-none">23%</span>
              <span className="text-[13px] opacity-80">per annum, 1981–2001</span>
            </div>
            <p className="text-[12px] opacity-85 mt-2 leading-snug">
              "Manager of the Century" (Fortune); three-time Most Admired Company (US); Most
              Admired Company in the World (FT).
            </p>
          </motion.div>

          <div className="bg-white border border-ge-rule rounded-lg p-4">
            <div className="text-[10px] tracking-widest uppercase text-ge-muted mb-2">
              Portfolio activity & operating-system results
            </div>
            <div className="space-y-1.5">
              {portfolioActivity.map((p, i) => (
                <motion.div
                  key={p.k}
                  initial={{ opacity: 0, x: -10 }}
                  animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="grid grid-cols-[150px_1fr] gap-2 items-baseline text-[11px]"
                >
                  <div className="text-ge-muted">{p.k}</div>
                  <div className="text-ge-ink/85">{p.v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Headline metrics table */}
        <div className="flex flex-col">
          <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-2">
            Headline metrics, 1981 → 2000 — case-sourced
          </div>
          <div className="bg-white border border-ge-rule rounded-lg overflow-hidden">
            <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_70px] gap-3 px-4 py-2 bg-ge-rule/30 text-[10px] tracking-widest uppercase text-ge-muted font-semibold">
              <div>Metric</div>
              <div className="text-right">1981 (start)</div>
              <div className="text-right">2000 (end)</div>
              <div className="text-right">Change</div>
              <div className="text-right">Source</div>
            </div>
            {headline.map((row, i) => (
              <motion.div
                key={row.metric}
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
                className="grid grid-cols-[1.4fr_1fr_1fr_1fr_70px] gap-3 px-4 py-2.5 border-t border-ge-rule items-center"
              >
                <div className="text-[13px] font-medium">{row.metric}</div>
                <div className="text-[13px] text-ge-ink/75 text-right tabular-nums">{row.v1981}</div>
                <div className="text-[13px] text-ge-ink text-right tabular-nums">{row.v2000}</div>
                <div className="text-[13px] text-ge-blue font-semibold text-right tabular-nums">
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
            className="mt-4 p-4 rounded-lg bg-ge-paper border-l-4 border-ge-blue"
          >
            <div className="text-[10px] tracking-widest uppercase text-ge-blue mb-2 font-semibold">
              Talking points for Q&A
            </div>
            <ul className="space-y-1.5 text-[12px] text-ge-ink/85 leading-snug">
              <li>• Every operating metric improved <em>while the workforce shrank</em> from 404k to 313k.</li>
              <li>• Welch's last decade carries most of the ROE jump (19.8% → 27.5%) — i.e. after the operating system was fully in place.</li>
              <li>• Services shift was deliberate and material: 15% of revenue in 1980 to 75% in 2000 (Ex. 9).</li>
              <li>• Strict chop-shop is unavailable; conclusion uses GE's own time-series + Castañer's first-session evidence (Lang &amp; Stulz, Berger &amp; Ofek) which found <em>average</em> diversifiers trade at a discount — GE is a clear exception.</li>
              <li>• Caveat to flag honestly: ROE is partly driven by leverage (long-term borrowings rose from $1.1B to $82B); margin-and-revenue gains are the cleaner read.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
