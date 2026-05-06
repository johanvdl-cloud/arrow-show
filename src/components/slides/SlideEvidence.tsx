import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";
import { useCountUp } from "@/hooks/useCountUp";

const bars = [
  { label: "Borch 1970", value: 12.6 },
  { label: "Jones 1980", value: 19.5 },
  { label: "Welch 1990", value: 19.8 },
  { label: "Welch 2000", value: 27.5 },
];

// Directional chop-shop: segment-level pure-play comparables, P/E multiples circa 2000.
// Sources: case Exhibits 1, 5, 9; Datastream peer multiples (era-typical).
// Caveat: case does not provide segment-level financials, so this is directional.
const chopshop = [
  { seg: "Aircraft Engines", peer: "P&W / Rolls-Royce", peerPE: "16–20×" },
  { seg: "Plastics", peer: "Dow / BASF", peerPE: "10–14×" },
  { seg: "Medical Systems", peer: "Siemens Med / Philips", peerPE: "20–25×" },
  { seg: "NBC Broadcasting", peer: "Disney / Viacom", peerPE: "25–30×" },
  { seg: "GE Capital", peer: "Citigroup / AIG", peerPE: "12–16×" },
  { seg: "Appliances · Lighting", peer: "Whirlpool / Philips", peerPE: "12–15×" },
];

function Big({
  value,
  prefix = "",
  suffix = "",
  active,
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
  decimals?: number;
}) {
  const v = useCountUp(value, 1400, active, decimals);
  return (
    <div className="text-[44px] font-semibold text-ge-blue tabular-nums leading-none">
      {prefix}
      {decimals ? v.toFixed(decimals) : Math.round(v)}
      {suffix}
    </div>
  );
}

export default function SlideEvidence({ active }: { active: boolean }) {
  const max = 30;
  return (
    <SlideLayout
      footerLeft="Source: Case Exhibits 1, 5, 9; Datastream peer multiples (directional)"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        4 · Evidence of Corporate Value Creation
      </div>
      <h2
        className="text-[36px] font-light mb-2"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Directional chop-shop: GE-as-conglomerate priced above the sum of its pure-play parts
      </h2>
      <p className="text-[14px] text-ge-muted italic mb-6">
        Strict chop-shop requires segment-level financials the case does not provide. Three
        complementary tests are used here: (a) ROE across CEO eras, (b) headline performance vs S&P,
        (c) implied premium-to-peers using era-typical pure-play P/E multiples.
      </p>

      <div className="grid grid-cols-[1fr_1fr] gap-10 flex-1">
        {/* Left: ROE chart + headline stats */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="text-[12px] tracking-widest uppercase text-ge-muted mb-3">
              Return on Equity across three CEO eras
            </div>
            <div className="h-[220px] flex items-end gap-6 border-b border-l border-ge-rule pl-5 pb-1 relative">
              {bars.map((b, i) => (
                <div
                  key={b.label}
                  className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={
                      active
                        ? { height: `${(b.value / max) * 100}%` }
                        : { height: 0 }
                    }
                    transition={{
                      duration: 1.0,
                      delay: 0.2 + i * 0.18,
                      ease: "easeOut",
                    }}
                    className="w-full rounded-t-md bg-gradient-to-t from-ge-blue to-accent relative"
                  >
                    <span className="absolute -top-7 left-0 right-0 text-center text-[14px] font-semibold text-ge-ink">
                      {b.value}%
                    </span>
                  </motion.div>
                  <div className="text-[11px] text-ge-muted text-center whitespace-pre">
                    {b.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Big value={23} suffix="%" active={active} />
              <div className="text-[12px] text-ge-muted mt-1.5 leading-tight">
                annualised TSR<br />
                <span className="opacity-70">1981–2001 vs ~15% S&P</span>
              </div>
            </div>
            <div>
              <Big value={9.9} suffix="×" active={active} decimals={1} />
              <div className="text-[12px] text-ge-muted mt-1.5 leading-tight">
                revenue growth<br />
                <span className="opacity-70">$27.2B → $129.9B</span>
              </div>
            </div>
            <div>
              <Big value={30} suffix="×" active={active} />
              <div className="text-[12px] text-ge-muted mt-1.5 leading-tight">
                market-cap growth<br />
                <span className="opacity-70">$13B → ~$390B (2000)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: chop-shop table */}
        <div className="flex flex-col">
          <div className="text-[12px] tracking-widest uppercase text-ge-muted mb-3">
            Chop-shop test — GE 2000 P/E ≈ 30× vs. pure-play peers by segment
          </div>
          <div className="bg-white border border-ge-rule rounded-lg overflow-hidden flex-1">
            <div className="grid grid-cols-[1fr_1fr_110px] gap-3 px-4 py-2 bg-ge-rule/30 text-[10px] tracking-widest uppercase text-ge-muted font-semibold">
              <div>Segment</div>
              <div>Pure-play comparables</div>
              <div className="text-right">Peer P/E</div>
            </div>
            {chopshop.map((row, i) => (
              <motion.div
                key={row.seg}
                initial={{ opacity: 0, x: -10 }}
                animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="grid grid-cols-[1fr_1fr_110px] gap-3 px-4 py-2.5 border-t border-ge-rule items-center"
              >
                <div className="text-[13px] font-medium">{row.seg}</div>
                <div className="text-[12px] text-ge-ink/75">{row.peer}</div>
                <div className="text-[13px] text-ge-blue font-semibold tabular-nums text-right">
                  {row.peerPE}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mt-4 p-4 rounded-lg bg-ge-navy text-ge-paper"
          >
            <div className="text-[10px] tracking-widest uppercase opacity-70 mb-1.5">
              Reading
            </div>
            <p className="text-[12px] leading-snug">
              A revenue-weighted blended peer P/E lands in the 14–20× range. GE traded at
              roughly 30× in 2000 — implying the market priced the conglomerate ~50–110% above
              its sum-of-parts. Conclusion: <span className="font-semibold">premium, not discount</span>.
              Caveat: directional only; the formal segment chop-shop is left for the group project.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
