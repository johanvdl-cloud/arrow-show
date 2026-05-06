import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

export default function SlideFits({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="Framework: Collis & Montgomery (1997) — Three Fits" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">6 & 7 · Fit Assessment</div>
      <h2 className="text-[40px] font-light mb-8" style={{ fontFamily: "Georgia, serif" }}>
        The three fits — why the GE machine works, and what could break it
      </h2>

      <div className="grid grid-cols-[520px_1fr] gap-12 flex-1">
        {/* Triangle */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 500 460" className="w-full h-full">
            <motion.polygon
              points="250,40 470,420 30,420"
              fill="none"
              stroke="oklch(0.5 0.18 255)"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={active ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            {/* labels */}
            <motion.g initial={{ opacity: 0 }} animate={active ? { opacity: 1 } : {}} transition={{ delay: 1.2 }}>
              <text x="250" y="25" textAnchor="middle" fontSize="18" fontWeight="600" fill="oklch(0.18 0.02 260)">Strategic Resources</text>
              <text x="250" y="445" textAnchor="middle" fontSize="14" fill="oklch(0.45 0.02 260)">mission · vision · goals</text>
              <text x="478" y="438" textAnchor="end" fontSize="18" fontWeight="600" fill="oklch(0.18 0.02 260)">Businesses</text>
              <text x="22" y="438" fontSize="18" fontWeight="600" fill="oklch(0.18 0.02 260)">Org. Infrastructure</text>
            </motion.g>
            {/* fit nodes */}
            <motion.g initial={{ opacity: 0, scale: 0 }} animate={active ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.5, type: "spring" }} style={{ transformOrigin: "360px 230px" }}>
              <circle cx="360" cy="230" r="28" fill="oklch(0.5 0.18 255)" />
              <text x="360" y="237" textAnchor="middle" fontSize="18" fontWeight="700" fill="white">F1</text>
            </motion.g>
            <motion.g initial={{ opacity: 0, scale: 0 }} animate={active ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.7, type: "spring" }} style={{ transformOrigin: "250px 420px" }}>
              <circle cx="250" cy="420" r="28" fill="oklch(0.5 0.18 255)" />
              <text x="250" y="427" textAnchor="middle" fontSize="18" fontWeight="700" fill="white">F2</text>
            </motion.g>
            <motion.g initial={{ opacity: 0, scale: 0 }} animate={active ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.9, type: "spring" }} style={{ transformOrigin: "140px 230px" }}>
              <circle cx="140" cy="230" r="28" fill="oklch(0.62 0.16 35)" />
              <text x="140" y="237" textAnchor="middle" fontSize="18" fontWeight="700" fill="white">F3</text>
            </motion.g>
          </svg>
        </div>

        {/* Fits */}
        <div className="space-y-4 overflow-hidden">
          {[
            {
              tag: "F1 — Resource Relatedness",
              verdict: "MODERATE",
              body: "Weak on product/market — jet engines, light bulbs and NBC share few customers. But the operating system itself is the transferable resource: every business inherits the same playbook, the same talent pipeline, the same capital discipline.",
              evidence: "Evidence: ~30% of Crotonville-trained leaders rotate across divisions; Six Sigma deployed in 100% of business units by 1998.",
            },
            {
              tag: "F2 — Conditions for Exploitation",
              verdict: "STRONG",
              body: "GE's coordination machinery is precision-engineered to move capability where it's needed: monthly operating reviews, the vitality curve (top 20 / vital 70 / bottom 10), boundaryless behavior incentives, and Session C talent reviews.",
              evidence: "Evidence: 16% CAGR in operating profit 1981–2000; #1 or #2 mandate forced active portfolio reshaping.",
            },
            {
              tag: "F3 — Conditions for Sustainability",
              verdict: "STRONG TODAY · FRAGILE TOMORROW",
              body: "Crotonville and Session C reproduce human capital each year, and the culture is deeply institutionalised. But the keystone of the system is Welch himself — his tacit judgment, network and authority are not codified. Succession concentrates the risk.",
              evidence: "Risk: post-Welch, the same machine under Immelt produced very different outcomes — strong evidence the CEO node is irreplaceable, not interchangeable.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, x: 30 }}
              animate={active ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4 + i * 0.18, duration: 0.5 }}
              className="bg-white border border-ge-rule rounded-lg p-4"
            >
              <div className="flex items-baseline justify-between mb-1.5">
                <div className="text-[15px] font-semibold">{f.tag}</div>
                <div className="text-[10px] tracking-widest font-bold text-ge-blue">{f.verdict}</div>
              </div>
              <p className="text-[13px] leading-snug text-ge-ink/85 mb-1.5">{f.body}</p>
              <p className="text-[11px] leading-snug text-ge-ink/60 italic">{f.evidence}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.1, duration: 0.5 }}
            className="border-l-2 border-ge-blue pl-4 mt-2"
          >
            <div className="text-[10px] tracking-[0.25em] uppercase text-ge-blue mb-1">Synthesis</div>
            <p className="text-[13px] leading-snug text-ge-ink/90">
              Two of three fits are strong, one is moderate — the whole <em>is</em> greater than the parts, but the system's load-bearing wall is a single CEO. Strategic resources fit the businesses; the businesses fit the org infrastructure; the org infrastructure fits Welch.
            </p>
          </motion.div>
        </div>
      </div>
    </SlideLayout>
  );
}
