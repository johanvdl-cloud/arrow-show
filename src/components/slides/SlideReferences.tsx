import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const groups = [
  {
    title: "Case material",
    items: [
      "Bartlett, C. A., & Wozny, M. (1999, rev. 2005). GE's Two-Decade Transformation: Jack Welch's Leadership. Harvard Business School Case 9-399-150. Exhibits 1, 3, 4a, 4b, 5, 6, 8, 9, 11.",
    ],
  },
  {
    title: "Course materials",
    items: [
      "Castañer, X. (2026). First Session - Master HEC Lausanne, Winter–Spring 2026. Slides on corporate vs. business strategy, four sources of diversification value, Collis & Montgomery's Triangle, OI dimensions.",
      "Course syllabus, Corporate Strategy, Master in Management, HEC Lausanne, Spring 2026.",
    ],
  },
  {
    title: "Theory base",
    items: [
      "Collis, D. J., & Montgomery, C. A. (1997). Corporate Strategy: Resources and the Scope of the Firm (later editions: Corporate Strategy: A Resource-Based Approach, 2005). Irwin/McGraw-Hill.",
      "Barney, J. (1991). Firm Resources and Sustained Competitive Advantage. Journal of Management, 17(1), 99–120.",
      "Penrose, E. (1959). The Theory of the Growth of the Firm. Oxford University Press.",
      "Rumelt, R. P. (1984). Towards a Strategic Theory of the Firm. In R. B. Lamb (Ed.), Competitive Strategic Management.",
    ],
  },
  {
    title: "Empirical evidence on diversification",
    items: [
      "Lang, L. H. P., & Stulz, R. M. (1994). Tobin's q, Corporate Diversification, and Firm Performance. Journal of Political Economy, 102(6), 1248–1280.",
      "Berger, P. G., & Ofek, E. (1995). Diversification's Effect on Firm Value. Journal of Financial Economics, 37(1), 39–65.",
      "Campa, J. M., & Kedia, S. (2002). Explaining the Diversification Discount. Journal of Finance, 57(4), 1731–1762.",
      "Villalonga, B. (2004). Diversification Discount or Premium? New Evidence from the Business Information Tracking Series. Journal of Finance, 59(2), 479–506.",
      "Palich, L. E., Cardinal, L. B., & Miller, C. C. (2000). Curvilinearity in the Diversification–Performance Linkage. Strategic Management Journal, 21(2), 155–174.",
    ],
  },
];

const note =
  "Per syllabus: LLM (AI) use is authorised for English editing only. All analysis, framework application, evidence selection and recommendations are the author's own work.";

export default function SlideReferences({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="GE Case Memo · References"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        References
      </div>
      <h2
        className="text-[36px] font-light mb-8"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Sources, frameworks and empirical literature
      </h2>

      <div className="grid grid-cols-2 gap-x-12 gap-y-6 flex-1">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + gi * 0.12 }}
          >
            <div className="text-[12px] tracking-widest uppercase text-ge-blue mb-3 font-semibold">
              {g.title}
            </div>
            <ul className="space-y-2">
              {g.items.map((it, ii) => (
                <li
                  key={ii}
                  className="text-[13px] leading-snug text-ge-ink/85 pl-3 border-l-2 border-ge-rule"
                >
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={active ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="mt-6 pt-4 border-t border-ge-rule text-[12px] italic text-ge-muted"
      >
        {note}
      </motion.div>
    </SlideLayout>
  );
}
