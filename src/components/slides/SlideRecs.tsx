import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const recs = [
  {
    n: "01",
    title: "Document Welch's playbook",
    when: "Now",
    body: "Write Session C, Work-Out and the integration model into formal routines so the operating system runs without him.",
  },
  {
    n: "02",
    title: "Cap the size of GE Capital",
    when: "Within 2 years",
    body: "Set a ceiling on Capital's share of group profits. Beyond it, Capital stops being an internal capital market and starts being a bank.",
  },
  {
    n: "03",
    title: "Sell businesses where the playbook adds no value",
    when: "Within 2 years",
    body: "Test each of the eleven businesses. If the GE operating system does not measurably improve performance there, divest - even if the business is profitable.",
  },
  {
    n: "04",
    title: "Treat digital like Six Sigma",
    when: "Immediately",
    body: "Same monthly reviews, the same bonus tie, the same dedicated leaders. Anything less concedes the next decade to faster competitors.",
  },
  {
    n: "05",
    title: "Reset Board-level governance",
    when: "Now",
    body: "Formal succession charter, independent oversight of Capital growth, and a Board-led equivalent of Session C for the top officers.",
  },
];

export default function SlideRecs({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="GE Case Memo · Recommendations to the Board"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        Recommendations to the Board
      </div>
      <h2
        className="text-[40px] font-light mb-10"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Five moves to keep the value GE created surviving past Welch
      </h2>

      <div className="grid grid-cols-3 gap-5 flex-1">
        {recs.map((r, i) => (
          <motion.div
            key={r.n}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white border border-ge-rule rounded-lg p-6 flex flex-col cursor-default shadow-sm hover:shadow-lg"
          >
            <div className="text-[40px] font-light text-ge-blue leading-none mb-3">
              {r.n}
            </div>
            <div className="text-[20px] font-semibold leading-snug mb-4">
              {r.title}
            </div>
            <p className="text-[14px] leading-relaxed text-ge-ink/85 flex-1">
              {r.body}
            </p>
            <div className="mt-4 pt-3 border-t border-ge-rule text-[11px] text-ge-blue uppercase tracking-widest font-semibold">
              {r.when}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
