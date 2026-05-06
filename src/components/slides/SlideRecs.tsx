import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const recs = [
  {
    n: "01",
    title: "Codify the operating system",
    owner: "New CEO + CHRO",
    horizon: "0–12 months",
    body: "Convert Session C, the CEC cadence and the integration model into documented, teachable routines. Build a 'GE Way' curriculum that does not require Welch's personal presence. Audit participation annually. The machine must survive the operator.",
  },
  {
    n: "02",
    title: "Cap GE Capital's relative weight",
    owner: "CFO + Board Risk Committee",
    horizon: "12–36 months",
    body: "Set a hard ceiling on Capital's share of group earnings (e.g. 45–50%). Beyond that the unit ceases to function as an internal capital market and becomes a regulated bank — and the financial-synergy justification evaporates. Spin-off is preferable to uncontrolled drift.",
  },
  {
    n: "03",
    title: "Apply an OI-fit test to every business",
    owner: "Corporate Development",
    horizon: "12–24 months",
    body: "For each of the eleven businesses, ask: does the GE operating system measurably add value here? Units where the answer is no should be divested — even if individually profitable. Resources freed should fund services and e-business expansion.",
  },
  {
    n: "04",
    title: "Resource the digital transition at strategic-initiative scale",
    owner: "CEO + Business CEOs",
    horizon: "Immediate",
    body: "Treat dyb.com with the same operating-system discipline as Six Sigma: monthly CEC reviews, 40% bonus tied to digital objectives, Master-Black-Belt-equivalent roles, explicit success metrics. Anything less concedes the decade.",
  },
  {
    n: "05",
    title: "Reconstitute Board governance for the post-Welch era",
    owner: "Board Chair + Nominating Committee",
    horizon: "0–6 months",
    body: "Formalise a succession-planning charter; replicate Session C at the executive-officer level under independent-director oversight; institutionalise the vitality curve so the bottom-10% discipline survives the founder; require Board sign-off on Capital concentration thresholds and on initiative-launch criteria.",
  },
];

export default function SlideRecs({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="GE Case Memo · Board recommendations"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        Recommendations to the Board
      </div>
      <h2
        className="text-[40px] font-light mb-8"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Five moves to protect value beyond Welch — across portfolio, systems and governance
      </h2>

      <div className="grid grid-cols-3 gap-5 flex-1">
        {recs.map((r, i) => (
          <motion.div
            key={r.n}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-ge-rule rounded-lg p-5 flex flex-col cursor-default shadow-sm hover:shadow-lg"
          >
            <div className="flex items-start gap-3 mb-2">
              <div className="text-[36px] font-light text-ge-blue leading-none">
                {r.n}
              </div>
              <div className="text-[18px] font-semibold mt-1.5 leading-snug">
                {r.title}
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-ge-ink/85 flex-1">
              {r.body}
            </p>
            <div className="mt-3 pt-2.5 border-t border-ge-rule flex flex-col gap-0.5 text-[11px] text-ge-muted uppercase tracking-wider">
              <span>Owner: {r.owner}</span>
              <span>Horizon: {r.horizon}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
