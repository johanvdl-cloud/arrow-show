// Content-faithful representation of the deck for PPTX export.
// Animations and decorative visuals are not reproduced — this is a clean,
// editable text version with the same headings, sections, and key talking points.

export type SlideVariant = "navy" | "paper";

export interface SlideBlock {
  heading?: string;
  bullets?: string[];
  body?: string;
}

export interface SlideContent {
  id: string;
  section: string;
  title: string;
  subtitle?: string;
  variant: SlideVariant;
  blocks: SlideBlock[];
  footer?: string;
}

export const DECK_CONTENT: SlideContent[] = [
  {
    id: "title",
    section: "Corporate Strategy · Individual Case Memo",
    title: "General Electric",
    subtitle: "The Welch Conglomerate, 1981–2001 — Is the whole greater than the parts?",
    variant: "navy",
    blocks: [
      {
        body:
          "Johan van der Linden\nHEC Lausanne, UNIL · Master in Management · Winter–Spring 2026\nProf. Xavier Castañer",
      },
    ],
  },
  {
    id: "execsummary",
    section: "Executive Summary",
    title:
      "The whole has been greater than the parts — but the arithmetic was done by one man",
    subtitle:
      "For the Board of Directors · A consultant's evaluation of GE's corporate strategy at the end of the Welch era",
    variant: "paper",
    blocks: [
      {
        heading: "1 · Diagnosis",
        bullets: [
          "GE under Welch creates real diversification value, but not from classical relatedness",
          "Twelve businesses share almost no customers, channels or technologies",
        ],
      },
      {
        heading: "2 · Mechanism",
        bullets: [
          "Synergy comes from a process-level resource: the GE operating system",
          "Session C, Work-Out, Best Practices, Six Sigma, integration playbook",
          "Combined with internal-capital-market scale via GE Capital",
        ],
      },
      {
        heading: "3 · Evidence",
        bullets: [
          "ROE rose from 18% to 27.5%",
          "Revenues grew almost 5×",
          "TSR averaged 23% per year, well above the S&P 500",
        ],
      },
      {
        heading: "4 · Risk",
        bullets: [
          "Welch himself is the load-bearing wall — playbook not codified",
          "GE Capital drifting toward bank-scale",
          "Playbook being imitated; GE late to the internet",
        ],
      },
      {
        heading: "5 · Recommendation",
        bullets: [
          "Document Welch's playbook so it survives him",
          "Cap the size of GE Capital",
          "Sell businesses where the playbook adds no value",
          "Treat digital like Six Sigma",
          "Reset Board-level governance",
        ],
      },
    ],
    footer: "GE Case Memo · Executive Summary",
  },
  {
    id: "mission",
    section: "0 · Mission, Vision & Goals",
    title: "Mission, vision & goals at the close of the Welch era",
    variant: "paper",
    blocks: [
      {
        heading: "① Mission — Why we exist",
        bullets: [
          "Be the world's most profitable, highly diversified company",
          "World quality leadership in every product line",
        ],
      },
      {
        heading: "② Vision — What we aspire to",
        bullets: [
          "A boundaryless, learning enterprise",
          "Every business #1 or #2 in its market",
          "Reach of a big company with the speed of a small one",
        ],
      },
      {
        heading: "③ Goals — How we measure it",
        bullets: [
          "Double-digit earnings growth, every year",
          "16%+ operating margin",
          "10× inventory turns",
          "Six Sigma quality (3.4 dpmo)",
        ],
      },
      {
        heading: "Strategic priorities",
        bullets: [
          "#1 or #2 globally, or fix / sell / close",
          "A boundaryless organisation — ideas flow freely across units",
          "Shift from industrial products toward high-margin services",
          "Quality as DNA (Six Sigma) and the internet as a lever",
        ],
      },
    ],
  },
  {
    id: "portfolio",
    section: "1 · Businesses — Portfolio & Scope",
    title:
      "Eleven largely unrelated businesses — globally operated, held together by how they are run",
    variant: "paper",
    blocks: [
      {
        heading: "Infrastructure",
        bullets: ["Aircraft Engines", "Power Systems", "Transportation"],
      },
      {
        heading: "Technology",
        bullets: ["Medical Systems", "Plastics", "Industrial Systems"],
      },
      {
        heading: "Consumer & Media",
        bullets: ["Appliances", "NBC Broadcasting", "Motors", "Lighting"],
      },
      {
        heading: "Capital",
        bullets: ["GE Capital — financing, leasing, insurance, investment banking"],
      },
      {
        heading: "Divested under Welch (1981–2000)",
        bullets: [
          "200+ divestitures, $11B freed (Exhibit 3)",
          "Housewares, Utah International, Aerospace (→ Martin Marietta), Kidder Peabody, Consumer Electronics, others",
        ],
      },
      {
        heading: "Scale (2000)",
        bullets: [
          "$130B revenues",
          "313,000 employees",
          "$12.7B net earnings",
          "Non-US share 20% (1985) → 45% (2000); intl sales 15% CAGR vs 6% domestic",
        ],
      },
    ],
    footer: "Source: Case Exhibits 1, 5, 6 and case text",
  },
  {
    id: "vris",
    section: "2 · Strategic Resources (VRIS)",
    title: "Which corporate-level resources actually meet the VRIS bar?",
    variant: "paper",
    blocks: [
      {
        heading: "The Operating System — V·H R·H I·M S·H",
        bullets: [
          "The only thing every GE business actually shares",
          "Session C, CEC cadence, Work-Out, Best Practices, integration playbook",
          "If anything binds the conglomerate, it is this",
        ],
      },
      {
        heading: "Crotonville & talent engine — V·H R·H I·M S·H",
        bullets: [
          "Welch put 70% of his time into people",
          "$45M invested in Crotonville",
          "Talent pipeline renews the operating system year after year",
        ],
      },
      {
        heading: "GE Capital — V·H R·M I·M S·M",
        bullets: [
          "Clearest source of financial synergy",
          "Recycles industrial cash flows into leasing, reinsurance, private equity",
          "Scale stand-alone industrials cannot match",
        ],
      },
      {
        heading: "Six Sigma discipline — V·H R·M I·L S·L",
        bullets: [
          "Deployed across all units; 40% of bonus tied to it",
          "$750M return on $500M invested by 1999",
          "Imitable — a candidate, not a moat",
        ],
      },
      {
        heading: "GE brand & reputation — V·M R·H I·M S·H",
        bullets: [
          "Three-time 'Most Admired Company' (Fortune)",
          "Eases capital-raising and talent attraction across all businesses",
        ],
      },
    ],
  },
  {
    id: "relatedness",
    section: "3 · Resource Relatedness — Fit 1",
    title: "Where GE sits classically — and why Welch redefines relatedness",
    variant: "paper",
    blocks: [
      {
        heading: "Classical placement",
        bullets: [
          "Low downstream relatedness (customers, channels, brand)",
          "Low upstream relatedness (technology, R&D, production)",
          "Looks like Berkshire — an unrelated conglomerate",
        ],
      },
      {
        heading: "Welch's reframing — process relatedness",
        bullets: [
          "Every business shares the same management technology",
          "Session C, Work-Out, Best Practices transfer, Six Sigma",
          "Integration playbook applied to every acquisition",
        ],
      },
      {
        heading: "Implication for Fit 1",
        bullets: [
          "Fit 1 is weak in the conventional sense",
          "Question shifts from 'what do they share?' to 'how are they run?'",
          "Answered by Fit 2 (Business–OI alignment)",
        ],
      },
    ],
    footer: "Framework: resource-relatedness 2x2 (Collis & Montgomery 1997, Fit 1)",
  },
  {
    id: "motives",
    section: "4 · Motives for Diversification",
    title: "Which motives actually explain the value created?",
    variant: "paper",
    blocks: [
      {
        heading: "I · Economic synergies — WEAK (classical) / STRONG (process)",
        bullets: [
          "Near-zero on shared customers, channels or technology",
          "Strong on shared process capabilities",
          "Productivity fixes flow between very different businesses",
          "Integration model compresses post-deal onboarding to ~100 days",
        ],
      },
      {
        heading: "II · Financial synergies — STRONG",
        bullets: [
          "GE Capital is an internal capital market at vast scale",
          "Recycles industrial cash flows into leasing, reinsurance, PE",
          "Risk diversification stabilises earnings across cycles",
        ],
      },
      {
        heading: "III · Multimarket contact — LIMITED",
        bullets: [
          "Competitors fragmented across the portfolio",
          "Almost no rival meets GE in multiple markets",
          "Coordination benefit largely theoretical",
        ],
      },
      {
        heading: "IV · Learning & adaptation — VERY STRONG (core driver)",
        bullets: [
          "Crotonville functions as an institutional university",
          "Boundaryless behaviour rewarded directly in bonus formulas",
          "A-players rotated across divisions every 2–3 years",
          "Best Practices scanned from Ford, Xerox, Toyota and others",
        ],
      },
    ],
  },
  {
    id: "evidence",
    section: "4 · Evidence of Value Creation",
    title: "Did the strategy actually create value?",
    variant: "paper",
    blocks: [
      {
        heading: "Profitability",
        bullets: [
          "ROE: 18% (1981) → 27.5% (2000)",
          "Operating margin sustained above 16%",
          "Net earnings: $1.6B → $12.7B",
        ],
      },
      {
        heading: "Growth",
        bullets: [
          "Revenues: $27B → $130B (≈ 5×)",
          "Market cap: $14B → $410B (peak)",
          "International share: 20% → 45%",
        ],
      },
      {
        heading: "Shareholder return",
        bullets: [
          "TSR averaged 23% / year over the Welch era",
          "Materially above the S&P 500 over the same period",
        ],
      },
      {
        heading: "Caveats",
        bullets: [
          "GE Capital contributes a growing share of earnings",
          "Benchmark period coincides with a long bull market",
          "Accounting smoothing has been alleged",
        ],
      },
    ],
  },
  {
    id: "oi",
    section: "5 · Organizational Infrastructure",
    title: "The operating system that runs the portfolio",
    variant: "paper",
    blocks: [
      {
        heading: "Structure",
        bullets: [
          "Lean corporate centre; ~12 SBUs reporting to the CEO office",
          "Sector layer removed early in the Welch era",
          "Boundaryless behaviour as an explicit design principle",
        ],
      },
      {
        heading: "People system",
        bullets: [
          "Session C — annual deep talent review of every leader",
          "Forced-curve evaluation: top 20 / vital 70 / bottom 10",
          "Crotonville as the cultural and leadership engine",
        ],
      },
      {
        heading: "Process",
        bullets: [
          "Work-Out — frontline employees challenge bureaucracy",
          "Best Practices transfer across very different businesses",
          "Six Sigma as the common quality language",
        ],
      },
      {
        heading: "Incentives",
        bullets: [
          "Stock options pushed deep into the organisation",
          "40% of bonus tied to Six Sigma performance",
          "Strong link between behaviour, results and reward",
        ],
      },
    ],
  },
  {
    id: "fits",
    section: "6 & 7 · Fits 2 and 3 — Synthesis",
    title: "Business–OI alignment, and OI–environment alignment",
    variant: "paper",
    blocks: [
      {
        heading: "Fit 2 — Business strategy ↔ OI",
        bullets: [
          "OI is tuned to operational excellence and continuous improvement",
          "Works very well for mature industrial businesses",
          "Strains in fast-clockspeed digital and entrepreneurial contexts",
        ],
      },
      {
        heading: "Fit 3 — OI ↔ external environment",
        bullets: [
          "Strong fit with 1980s–1990s globalisation and quality movement",
          "Weakening fit as competitors imitate the playbook",
          "Internet and digital transformation expose response gaps",
        ],
      },
      {
        heading: "Synthesis",
        bullets: [
          "The conglomerate works because Fit 2 is unusually strong",
          "Fit 3 is becoming the binding constraint",
          "Sustainability depends on adapting OI to the next environment",
        ],
      },
    ],
  },
  {
    id: "risks",
    section: "Risk Register",
    title: "What could break the model after Welch",
    variant: "paper",
    blocks: [
      {
        heading: "Key-person risk",
        bullets: [
          "Session C cadence and tacit judgment concentrated in Welch",
          "Playbook not formally codified",
          "Succession is the single largest exposure",
        ],
      },
      {
        heading: "GE Capital",
        bullets: [
          "Drifting toward bank-scale balance sheet",
          "Earnings quality and risk profile increasingly opaque",
          "Regulatory exposure rising",
        ],
      },
      {
        heading: "Imitation",
        bullets: [
          "Six Sigma and Work-Out widely copied",
          "Talent leaving GE staffs competitor C-suites",
          "Process advantage decays unless renewed",
        ],
      },
      {
        heading: "Digital lag",
        bullets: [
          "Late on internet and software-led business models",
          "Risk of being out-cycled by faster competitors",
        ],
      },
    ],
  },
  {
    id: "closing",
    section: "Closing",
    title: "The whole has been greater than the sum of its parts.",
    subtitle:
      "But the arithmetic was done by one man. The Board's task is to arrange for the sum to keep holding after he is gone.",
    variant: "navy",
    blocks: [
      {
        body:
          "Thank you — questions welcome.\nJohan van der Linden · HEC Lausanne · Corporate Strategy, W/S 2026",
      },
    ],
  },
];
