import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";
import { useCountUp } from "@/hooks/useCountUp";

// Portfolio at the end of the case (2001). GE Aerospace was divested to Martin
// Marietta in November 1992, so it appears in the divested band below, not in
// the kept portfolio. Aviation activity post-1992 is captured under Aircraft Engines.
const groups = [
  { name: "Infrastructure", items: ["Aircraft Engines", "Power Systems", "Transportation"] },
  { name: "Technology", items: ["Medical Systems", "Plastics", "Industrial Systems"] },
  { name: "Consumer & Media", items: ["Appliances", "NBC Broadcasting", "Motors", "Lighting"] },
  { name: "Capital", items: ["GE Capital (financing, leasing, insurance, investment banking)"] },
];

// Major divestitures during the Welch era (1981–2000). Selected from case
// Exhibit 3 plus case text. Shown chronologically.
const divested = [
  { name: "Central Air-Conditioning", year: "1982" },
  { name: "Housewares (small appliances)", year: "1984" },
  { name: "Utah International (mining)", year: "1984" },
  { name: "GE Solid State (semiconductors)", year: "mid-1980s" },
  { name: "Carboloy (industrial cutting tools)", year: "mid-1980s" },
  { name: "Consumer Electronics (TV sets)", year: "1987", to: "swap → Thomson Medical" },
  { name: "NBC Radio Networks", year: "1988" },
  { name: "Aerospace", year: "1992", to: "→ Martin Marietta" },
  { name: "Kidder Peabody", year: "1994" },
];

function Stat({
  value,
  suffix,
  prefix = "",
  active,
  size = 48,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  active: boolean;
  size?: number;
}) {
  const v = useCountUp(value, 1500, active);
  const formatted = v >= 1000 ? Math.round(v).toLocaleString() : Math.round(v);
  return (
    <span
      className="font-semibold text-ge-blue tabular-nums"
      style={{ fontSize: `${size}px` }}
    >
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function SlidePortfolio({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="Source: Case Exhibits 1, 5, 6 and case text"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        1 · Businesses - Portfolio & Scope
      </div>
      <h2
        className="text-[36px] font-light mb-8"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Eleven largely unrelated businesses - operated globally, held together by how they are run
      </h2>

      <div className="text-[10px] tracking-widest uppercase text-ge-muted mb-2">
        Kept at end of case (2001)
      </div>
      <div className="grid grid-cols-4 gap-6 mb-5">
        {groups.map((g, gi) => (
          <div key={g.name}>
            <div className="text-[12px] tracking-widest uppercase text-ge-blue mb-3">
              {g.name}
            </div>
            <div className="space-y-2">
              {g.items.map((it, ii) => (
                <motion.div
                  key={it}
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={active ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + gi * 0.1 + ii * 0.08 }}
                  className="px-3 py-2.5 rounded-md bg-white border border-ge-rule shadow-sm text-[14px]"
                >
                  {it}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divested-under-Welch band */}
      <div className="mb-5">
        <div className="flex items-baseline justify-between mb-2">
          <div className="text-[10px] tracking-widest uppercase text-ge-muted">
            Divested under Welch (1981–2000)
          </div>
          <div className="text-[11px] text-ge-muted">
            <span className="font-semibold text-ge-ink">200+ divestitures</span> · $11B freed (Ex. 3)
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {divested.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 6 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.6 + i * 0.05 }}
              className="px-2.5 py-1.5 rounded-md bg-ge-rule/30 border border-ge-rule/70 text-[12px] text-ge-ink/65 line-through decoration-ge-muted/60 decoration-from-font"
            >
              {d.name}
              <span className="ml-1.5 not-italic no-underline text-ge-muted text-[11px] tabular-nums">
                · {d.year}
              </span>
              {d.to && (
                <span className="ml-1.5 no-underline text-ge-blue/80 text-[11px]">
                  {d.to}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1 border-t border-ge-rule pt-5">
        <div>
          <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-2">
            The portfolio question
          </div>
          <p className="text-[15px] leading-relaxed">
            A chop-shop valuation would treat each of these units as a standalone
            pure-play. The question is whether holding them inside one corporate entity
            generates more value than their sum would command on public markets. For GE,
            customers, channels and technologies barely overlap - so classical scope
            economies cannot be the answer.
          </p>
        </div>

        <div>
          <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-2">
            Scale, 2000
          </div>
          <div className="space-y-3">
            <div>
              <Stat value={130} prefix="$" suffix="B" active={active} size={42} />
              <div className="text-[12px] text-ge-muted">revenues</div>
            </div>
            <div>
              <Stat value={313000} active={active} size={36} />
              <div className="text-[12px] text-ge-muted">employees</div>
            </div>
            <div>
              <Stat value={12.7} prefix="$" suffix="B" active={active} size={36} />
              <div className="text-[12px] text-ge-muted">net earnings (Ex. 1)</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-2">
            Geographic scope - Exhibit 6
          </div>
          <motion.img
            src="/exhibits/exhibit_6_globalization.png"
            alt="Exhibit 6: Growth through Globalization - international vs domestic sales increases, 1987–1998"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="w-full rounded-md border border-ge-rule bg-white p-2 mb-2"
          />
          <p className="text-[11px] leading-snug text-ge-ink/85">
            Non-US share rose from 20% (1985) to ≈ 45% (2000); international sales grew 15% CAGR vs 6% domestic.
            Counter-cyclical buying: $17.5B in Europe (1989–95); 16 firms in Mexico post-1995; $15B in Japan during 1997–98 crisis.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
