import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const risks = [
  {
    id: "R1",
    title: "Succession concentration",
    level: "HIGH",
    color: "bg-destructive",
    signal:
      "Welch teaches twice-monthly at Crotonville, personally runs Session C reviews of 3,000 executives, and spends 70% of his time on people (case text).",
    creates:
      "Critical operating routines depend on the founder's personal time and tacit judgment.",
  },
  {
    id: "R2",
    title: "Concentration of value in GE Capital",
    level: "HIGH",
    color: "bg-destructive",
    signal:
      "Services rose from 16.4% of profits (1980) to ≈ 60% (1995); GE Capital spans leasing, reinsurance, private equity, consumer credit (case text, Exhibit 9).",
    creates:
      "A growing share of group earnings sits inside one unit whose scale increasingly resembles a stand-alone financial business rather than a service to industrial sister-units.",
  },
  {
    id: "R3",
    title: "Diffusion of the playbook",
    level: "MEDIUM",
    color: "bg-ge-accent",
    signal:
      "By 1998 Welch's methods are documented in HBR, BusinessWeek and his own books; AlliedSignal and others are named in the case as adopting Six Sigma, stretch and the vitality curve.",
    creates:
      "The 'Inimitable' pillar of VRIS comes under sustained imitation pressure as the operating system enters the public domain.",
  },
  {
    id: "R4",
    title: "Late entry into e-business",
    level: "MEDIUM",
    color: "bg-ge-accent",
    signal:
      "Welch acknowledges in the case that GE was 'frightened by the unfamiliarity' of the internet; dyb.com teams were launched in 1999, two years before his retirement.",
    creates:
      "A category-defining technology shift arrives just as the founder is leaving - without a built-in playbook of the kind GE has for industrial businesses.",
  },
];

export default function SlideRisks({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="GE Case Memo · Risk register - case-grounded signals"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        Risk Register
      </div>
      <h2
        className="text-[40px] font-light mb-8"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Four signals in the case that put the 'whole &gt; parts' reading at risk
      </h2>

      <div className="space-y-3 flex-1">
        {risks.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, x: -40 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.15 }}
            className="grid grid-cols-[70px_1fr_180px] gap-5 items-center bg-white border border-ge-rule rounded-lg p-4"
          >
            <div className="text-[32px] font-light text-ge-blue">{r.id}</div>
            <div>
              <div className="text-[18px] font-semibold mb-2">{r.title}</div>
              <div className="grid grid-cols-2 gap-4 text-[12px] leading-snug">
                <div>
                  <div className="text-[9px] tracking-widest uppercase text-ge-muted font-semibold mb-1">
                    Observed in case
                  </div>
                  <p className="text-ge-ink/85">{r.signal}</p>
                </div>
                <div>
                  <div className="text-[9px] tracking-widest uppercase text-ge-muted font-semibold mb-1">
                    Concentration created
                  </div>
                  <p className="text-ge-ink/85">{r.creates}</p>
                </div>
              </div>
            </div>
            <div
              className={`text-center px-3 py-1.5 rounded-full text-white text-[11px] tracking-widest font-bold ${r.color}`}
            >
              {r.level}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
