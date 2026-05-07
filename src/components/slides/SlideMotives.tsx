import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

interface Motive {
  roman: string;
  title: string;
  tag: string;
  tagColor: string;
  bullets: string[];
  quote?: { text: string; src: string };
}

const motives: Motive[] = [
  {
    roman: "I",
    title: "Economic synergies",
    tag: "WEAK (classical) / STRONG (process)",
    tagColor: "bg-ge-blue/80",
    bullets: [
      "Near-zero on shared customers, channels or technology",
      "Strong on shared process capabilities across the portfolio",
      "Productivity fixes flow between very different businesses",
      "Integration model compresses post-deal onboarding to ~100 days",
    ],
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
    bullets: [
      "GE Capital is an internal capital market at vast scale",
      "Recycles industrial cash flows into leasing, reinsurance, private equity",
      "Access stand-alone industrial firms cannot match",
      "Risk diversification across cyclical and non-cyclical units stabilises earnings",
    ],
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
    bullets: [
      "Competitors fragmented across aerospace, broadcasting, finance, healthcare",
      "Almost no rival meets GE in multiple markets",
      "Coordination benefit is largely theoretical for this portfolio",
    ],
  },
  {
    roman: "IV",
    title: "Learning & adaptation",
    tag: "VERY STRONG - THE CORE DRIVER",
    tagColor: "bg-ge-accent",
    bullets: [
      "Crotonville functions as an institutional university",
      "Boundaryless behaviour rewarded directly in bonus formulas",
      "A-player talent rotated across divisions every 2-3 years",
      "Best Practices scanned from Ford, Xerox, Toshiba and imported",
      "Portfolio treated explicitly as a set of learning laboratories",
    ],
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
            <ul className="space-y-1.5 mb-3">
              {m.bullets.map((b, bi) => (
                <motion.li
                  key={bi}
                  initial={{ opacity: 0, x: -8 }}
                  animate={active ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.35, delay: 0.4 + i * 0.18 + bi * 0.08 }}
                  className="text-[13px] leading-snug text-ge-ink/85 flex gap-2"
                >
                  <span className="text-ge-blue mt-1 shrink-0">•</span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </ul>
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
