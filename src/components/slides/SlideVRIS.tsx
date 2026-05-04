import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

const resources = [
  { name: "The Operating System", v: "high", r: "high", i: "med", s: "high",
    desc: "Session C, CEC cadence, Work-Out, Best Practices, integration playbook — a reproducible way of running businesses." },
  { name: "Crotonville & Talent Engine", v: "high", r: "high", i: "med", s: "high",
    desc: "10–12 hr reviews of 3,000 executives annually. $45M invested in the 1980s. A leadership factory." },
  { name: "GE Capital", v: "high", r: "med", i: "med", s: "med",
    desc: "Internal capital market at vast scale; recycles industrial cash into leasing, reinsurance, private equity." },
  { name: "Six Sigma Discipline", v: "high", r: "high", i: "low", s: "med",
    desc: "Quality as DNA. 40% of bonus tied to Six Sigma objectives. Imitable in form, hard to copy in depth." },
  { name: "GE Brand & Reputation", v: "med", r: "high", i: "med", s: "high",
    desc: "Supports access to capital and talent; not the primary driver of value creation." },
];

const dot = (level: string) => {
  const map: Record<string, string> = { high: "bg-ge-blue", med: "bg-ge-blue/50", low: "bg-ge-rule" };
  return <span className={`inline-block w-3 h-3 rounded-full ${map[level]}`} />;
};

export default function SlideVRIS({ active }: { active: boolean }) {
  return (
    <SlideLayout footerLeft="Framework: Barney (1991) — VRIS resources" footerRight="Prof. X. Castañer · 2026">
      <div className="text-[14px] tracking-[0.3em] uppercase text-ge-blue mb-4">2 · Strategic Resources</div>
      <h2 className="text-[40px] font-light mb-10" style={{ fontFamily: "Georgia, serif" }}>
        The five resources that anchor GE's competitive advantage
      </h2>

      <div className="grid grid-cols-[1fr_repeat(4,80px)] gap-x-6 gap-y-3 items-center text-[12px] tracking-widest uppercase text-ge-muted border-b border-ge-rule pb-3">
        <div>Resource</div><div className="text-center">Valuable</div><div className="text-center">Rare</div><div className="text-center">Inimitable</div><div className="text-center">Substitutable</div>
      </div>

      <div className="flex-1 mt-4 space-y-1">
        {resources.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 12 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.45, delay: 0.15 + i * 0.12 }}
            className="grid grid-cols-[1fr_repeat(4,80px)] gap-x-6 items-center py-4 border-b border-ge-rule"
          >
            <div>
              <div className="text-[20px] font-medium">{r.name}</div>
              <div className="text-[14px] text-ge-muted mt-1">{r.desc}</div>
            </div>
            <div className="flex justify-center">{dot(r.v)}</div>
            <div className="flex justify-center">{dot(r.r)}</div>
            <div className="flex justify-center">{dot(r.i)}</div>
            <div className="flex justify-center">{dot(r.s)}</div>
          </motion.div>
        ))}
      </div>
    </SlideLayout>
  );
}
