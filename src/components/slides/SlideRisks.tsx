import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const risks = [
  { id: "R1", title: "Succession dependency", level: "HIGH", color: "bg-destructive",
    body: "The operating system is inseparable from Welch's personal cadence. Twice-monthly teaching at Crotonville, personal ownership of Session C, 70% of his time on people. Any successor inherits a machine they did not build." },
  { id: "R2", title: "GE Capital drift", level: "HIGH / RISING", color: "bg-destructive",
    body: "Services are now 67% of revenues, up from 15% in 1980. At some scale Capital stops functioning as an internal capital market and becomes a stand-alone bank — at which point the financial-synergy justification evaporates." },
  { id: "R3", title: "Imitability decay", level: "MEDIUM", color: "bg-ge-accent",
    body: "By 1998 Welch's playbook is in HBR, BusinessWeek, and his own books. AlliedSignal, Honeywell, Tyco are copying Six Sigma, stretch, vitality curve. The 'I' in VRIS is eroding in real time." },
  { id: "R4", title: "Late to e-business", level: "MEDIUM", color: "bg-ge-accent",
    body: "Welch himself concedes GE was 'frightened by the unfamiliarity' of the internet. dyb.com teams are young. The internet becomes the successor's defining challenge." },
];

export default function SlideRisks({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="GE Case Memo · Risk register" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">8 · Risk Register</div>
      <h2 className="text-[40px] font-light mb-10" style={{ fontFamily: "Georgia, serif" }}>
        Four risks to the 'whole &gt; parts' reading
      </h2>

      <div className="space-y-4 flex-1">
        {risks.map((r, i) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, x: -40 }}
            animate={active ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.15 }}
            className="grid grid-cols-[80px_1fr_180px] gap-6 items-center bg-white border border-ge-rule rounded-lg p-5"
          >
            <div className="text-[36px] font-light text-ge-blue">{r.id}</div>
            <div>
              <div className="text-[20px] font-semibold mb-1">{r.title}</div>
              <p className="text-[14px] leading-relaxed text-ge-ink/85">{r.body}</p>
            </div>
            <div className={`text-center px-4 py-2 rounded-full text-white text-[12px] tracking-widest font-bold ge-pulse ${r.color}`}>
              {r.level}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
