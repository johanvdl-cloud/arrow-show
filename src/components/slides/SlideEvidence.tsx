import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";
import { useCountUp } from "@/hooks/useCountUp";

const bars = [
  { label: "Borch 1970", value: 12.6 },
  { label: "Jones 1980", value: 19.5 },
  { label: "Welch 1990", value: 19.8 },
  { label: "Welch 2000", value: 27.5 },
];

function Big({ value, prefix = "", suffix = "", active, decimals = 0 }: { value: number; prefix?: string; suffix?: string; active: boolean; decimals?: number }) {
  const v = useCountUp(value, 1400, active, decimals);
  return <div className="text-[56px] font-semibold text-ge-blue tabular-nums leading-none">{prefix}{decimals ? v.toFixed(decimals) : Math.round(v)}{suffix}</div>;
}

export default function SlideEvidence({ active }: { active: boolean }) {
  const max = 30;
  return (
    <SlideLayout footerLeft="Source: Case Exhibits 1 & 5 (GE Annual Reports, Datastream)" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">Evidence of Corporate Value Creation</div>
      <h2 className="text-[40px] font-light mb-10" style={{ fontFamily: "Georgia, serif" }}>
        The empirical case: the whole has out-performed the parts under Welch
      </h2>

      <div className="grid grid-cols-2 gap-16 flex-1">
        {/* Chart */}
        <div>
          <div className="text-[12px] tracking-widest uppercase text-ge-muted mb-4">Return on Equity across three CEO eras</div>
          <div className="h-[400px] flex items-end gap-8 border-b border-l border-ge-rule pl-6 pb-1 relative">
            {bars.map((b, i) => (
              <div key={b.label} className="flex-1 flex flex-col items-center gap-3 h-full justify-end">
                <motion.div
                  initial={{ height: 0 }}
                  animate={active ? { height: `${(b.value / max) * 100}%` } : { height: 0 }}
                  transition={{ duration: 1.0, delay: 0.2 + i * 0.18, ease: "easeOut" }}
                  className="w-full rounded-t-md bg-gradient-to-t from-ge-blue to-accent relative"
                >
                  <span className="absolute -top-8 left-0 right-0 text-center text-[16px] font-semibold text-ge-ink">
                    {b.value}%
                  </span>
                </motion.div>
                <div className="text-[12px] text-ge-muted text-center whitespace-pre">{b.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Big value={23} suffix="%" active={active} />
            <div className="text-[14px] text-ge-muted mt-2">annualised TSR<br /><span className="opacity-70">1981–2001 vs. ~15% S&P</span></div>
          </div>
          <div>
            <Big value={9.9} suffix="×" active={active} decimals={1} />
            <div className="text-[14px] text-ge-muted mt-2">growth in revenues<br /><span className="opacity-70">$27.2B → $129.9B</span></div>
          </div>
          <div>
            <Big value={29.8} suffix="×" active={active} decimals={1} />
            <div className="text-[14px] text-ge-muted mt-2">growth in market cap<br /><span className="opacity-70">$14B → $506B peak</span></div>
          </div>
          <div>
            <Big value={27.5} suffix="%" active={active} decimals={1} />
            <div className="text-[14px] text-ge-muted mt-2">return on equity, 2000<br /><span className="opacity-70">up from 18.1% in 1981</span></div>
          </div>
          <div className="col-span-2 mt-4 p-5 rounded-lg bg-white border border-ge-rule">
            <div className="text-[11px] tracking-widest uppercase text-ge-muted mb-2">On the chop-shop test</div>
            <p className="text-[14px] leading-relaxed">
              A strict chop-shop comparison against pure-play peers is not available in the case. But two directional signals
              are present: operating margin rose from 6.1% to 9.8% despite the portfolio growing broader, and GE's ROE of 27.5%
              exceeded every major industrial peer of comparable diversification. The evidence is directional rather than
              definitive — but it consistently favours the 'premium' reading.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
