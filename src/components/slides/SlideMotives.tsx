import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

interface Motive {
  roman: string;
  title: string;
  tag: string;
  tagColor: string;
  body: string;
  quote?: { text: string; src: string };
}

const motives: Motive[] = [
  {
    roman: "I",
    title: "Economic synergies",
    tag: "WEAK (classical) / STRONG (process)",
    tagColor: "bg-ge-blue/80",
    body: "Near-zero on shared customers, channels or technology. But strong on shared process capabilities - productivity fixes flowed across very different businesses, and the integration model compressed post-deal onboarding to ~100 days across the portfolio.",
    quote: {
      text: "We quickly began to learn from each other: productivity solutions from Lighting; 'quick response' asset management from Appliances; transaction effectiveness from GE Capital; cost-reduction techniques from Aircraft Engines; and global account management from Plastics.",
      src: "Welch, GE 1995 Annual Report",
    },
  },
  {
    roman: "II",
    title: "Financial synergies",
    tag: "STRONG",
    tagColor: "bg-ge-blue",
    body: "GE Capital is an internal capital market on a vast scale - recycling industrial cash flows into leasing, reinsurance and private equity positions that stand-alone industrial firms could not access. Risk diversification across cyclical and non-cyclical units stabilises earnings.",
    quote: {
      text: "We are a company intent on getting bigger, not smaller. Our only answer to the trendy question 'What do you intend to spin off?' is 'Cash - and lots of it.'",
      src: "Welch, GE 1995 Annual Report",
    },
  },
  {
    roman: "III",
    title: "Multimarket contact & mutual forbearance",
    tag: "LIMITED",
    tagColor: "bg-ge-rule text-ge-ink",
    body: "With competitors fragmented across aerospace, broadcasting, finance and healthcare, almost no rival meets GE in multiple markets. The coordination benefit is largely theoretical here.",
  },
  {
    roman: "IV",
    title: "Learning & adaptation",
    tag: "VERY STRONG - THE CORE DRIVER",
    tagColor: "bg-ge-accent",
    body: "Crotonville as an institutional university; boundaryless behaviour rewarded in bonus formulas; A-player talent rotated across divisions; Best Practices scanned from Ford, Xerox and Toshiba and imported. The portfolio is treated explicitly as a set of learning laboratories.",
    quote: {
      text: "The GE leader sees this company for what it truly is: the largest petri dish of business innovation in the world. We have roughly 350 business segments. We see them as 350 laboratories whose ideas are there to be shared, learned and spread as fast as we can.",
      src: "Welch, case text (late 1990s)",
    },
  },
];

export default function SlideMotives({ active }: { active: boolean }) {
  return (
    <SlideLayout
      footerLeft="Framework: four sources of diversification value"
      footerRight="Prof. X. Castañer · 2026"
    >
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">
        4 · Motives - GE scored against the four sources
      </div>
      <h2
        className="text-[36px] font-light mb-8"
        style={{ fontFamily: "Georgia, serif" }}
      >
        Where the 'whole &gt; parts' value actually comes from at GE
      </h2>

      <div className="grid grid-cols-2 gap-5 flex-1">
        {motives.map((m, i) => (
          <motion.div
            key={m.roman}
            initial={{ opacity: 0, y: 30, rotateX: -10 }}
            animate={active ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.15 + i * 0.18 }}
            className="bg-white border border-ge-rule rounded-lg p-5 flex flex-col"
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-[32px] font-light text-ge-blue leading-none">
                  {m.roman}
                </div>
                <div className="text-[20px] font-medium mt-1.5">{m.title}</div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={active ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.18, type: "spring", stiffness: 200 }}
                className={`px-3 py-1 rounded-full text-[10px] tracking-widest font-semibold text-white shrink-0 ${m.tagColor}`}
              >
                {m.tag}
              </motion.div>
            </div>
            <p className="text-[13.5px] leading-relaxed text-ge-ink/85 mb-3">
              {m.body}
            </p>
            {m.quote && (
              <motion.blockquote
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.18 }}
                className="border-l-2 border-ge-blue pl-3 mt-auto"
              >
                <p className="text-[12.5px] italic leading-snug text-ge-ink/85">
                  "{m.quote.text}"
                </p>
                <footer className="text-[10px] text-ge-muted mt-1.5 not-italic">
                  - {m.quote.src}
                </footer>
              </motion.blockquote>
            )}
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
