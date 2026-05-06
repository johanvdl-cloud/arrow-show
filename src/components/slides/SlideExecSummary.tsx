import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const sentences = [
  {
    n: 1,
    label: "Diagnosis",
    text:
      "GE under Welch creates real diversification value, but not from classical relatedness — its twelve businesses share almost no customers, channels or technologies.",
  },
  {
    n: 2,
    label: "Mechanism",
    text:
      "The synergy comes from a process-level resource — the 'GE operating system' (Session C, Work-Out, Best Practices, Six Sigma, the integration playbook) — combined with internal-capital-market scale via GE Capital.",
  },
  {
    n: 3,
    label: "Evidence",
    text:
      "Under Welch, GE's ROE rose from 18% to 27.5%, revenues grew almost 5×, and total shareholder return averaged 23% per year — well above the S&P 500.",
  },
  {
    n: 4,
    label: "Risk",
    text:
      "The system's load-bearing wall is Welch himself — Session C, the cadence and the tacit judgment are not codified, GE Capital is drifting toward bank-scale, the playbook is being imitated, and GE is late to the internet.",
  },
  {
    n: 5,
    label: "Recommendation",
    text:
      "The Board should (i) codify the operating system into teachable routines, (ii) cap GE Capital's share of group earnings, (iii) apply an OI-fit test to every business and divest where the system adds no measurable value, (iv) resource e-business at strategic-initiative scale, and (v) reconstitute Board governance for the post-Welch era.",
  },
];

export default function SlideExecSummary({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="GE Case Memo · Executive Summary"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        Executive Summary
      </div>
      <h2
        className="text-[44px] font-light mb-3"
        style={{ fontFamily: "Georgia, serif" }}
      >
        The whole has been greater than the parts — but the arithmetic was done by one man
      </h2>
      <p className="text-[16px] text-ge-muted italic mb-10">
        For the Board of Directors · A consultant's evaluation of GE's corporate strategy at the
        end of the Welch era
      </p>

      <div className="space-y-4 flex-1">
        {sentences.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: -20 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
            className="grid grid-cols-[60px_180px_1fr] gap-6 items-baseline border-t border-ge-rule pt-4"
          >
            <div className="text-[36px] font-light text-ge-blue leading-none">
              {s.n}
            </div>
            <div className="text-[12px] tracking-[0.25em] uppercase text-ge-blue font-semibold">
              {s.label}
            </div>
            <p className="text-[18px] leading-relaxed text-ge-ink/90">
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
