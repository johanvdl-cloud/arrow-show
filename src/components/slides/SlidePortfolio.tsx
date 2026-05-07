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

      <div className="grid grid-cols-4 gap-6 mb-8">
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

      <div className="grid grid-cols-3 gap-6 flex-1 border-t border-ge-rule pt-6">
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
