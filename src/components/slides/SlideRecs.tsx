import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const recs = [
  { n: "01", title: "Codify the operating system", owner: "New CEO + CHRO", horizon: "0–12 months",
    body: "Convert Session C, CEC cadence, and the integration model into documented, teachable routines. Build a 'GE Way' curriculum that does not require Welch's personal presence. Audit participation annually. The machine must survive the operator." },
  { n: "02", title: "Cap GE Capital's relative weight", owner: "CFO + Board Risk Committee", horizon: "12–36 months",
    body: "Set a ceiling for Capital's share of group earnings (e.g. 45–50%) to preserve the internal-market logic. Beyond that, Capital becomes a bank and should be regulated, funded, and reported as one. Spin-off is preferable to uncontrolled drift." },
  { n: "03", title: "Apply an OI-fit test to every business", owner: "Corp. Development", horizon: "12–24 months",
    body: "For each of the 12 businesses, ask: does the GE operating system measurably add value here? Units where the answer is no should be divested — even if individually profitable. Resources freed should fund services and e-business." },
  { n: "04", title: "Resource the digital transition at strategic-initiative scale", owner: "CEO + Business CEOs", horizon: "Immediate",
    body: "dyb.com teams should be treated with the same operating-system discipline as Six Sigma: monthly CEC reviews, 40% bonus tied to digital objectives, Master-Black-Belt-equivalent roles, and explicit success metrics. Anything less concedes the decade." },
];

export default function SlideRecs({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="GE Case Memo · Board recommendations" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">9 · Recommendations to the Board</div>
      <h2 className="text-[40px] font-light mb-10" style={{ fontFamily: "Georgia, serif" }}>
        Four moves to protect value beyond Welch
      </h2>

      <div className="grid grid-cols-2 gap-6 flex-1">
        {recs.map((r, i) => (
          <motion.div
            key={r.n}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-ge-rule rounded-lg p-6 flex flex-col cursor-default shadow-sm hover:shadow-lg"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="text-[44px] font-light text-ge-blue leading-none">{r.n}</div>
              <div className="text-[22px] font-semibold mt-2">{r.title}</div>
            </div>
            <p className="text-[15px] leading-relaxed text-ge-ink/85 flex-1">{r.body}</p>
            <div className="mt-4 pt-3 border-t border-ge-rule flex justify-between text-[12px] text-ge-muted uppercase tracking-wider">
              <span>Owner: {r.owner}</span>
              <span>Horizon: {r.horizon}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
