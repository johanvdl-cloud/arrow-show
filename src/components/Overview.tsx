import { motion } from "framer-motion";
import ScaledSlide from "@/components/ScaledSlide";
import { SLIDES, slidesBySection } from "@/lib/deck";

interface Props {
  current: number;
  onPick: (i: number) => void;
  onClose: () => void;
}

export default function Overview({ current, onPick, onClose }: Props) {
  const sections = slidesBySection();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 z-40 bg-ge-navy/95 backdrop-blur-sm overflow-y-auto"
    >
      <div className="max-w-[1600px] mx-auto p-12 pt-20">
        <div className="flex items-baseline justify-between mb-8">
          <h1 className="text-[32px] font-light text-ge-paper" style={{ fontFamily: "Georgia, serif" }}>
            Overview
          </h1>
          <button
            onClick={onClose}
            className="text-ge-paper/60 hover:text-ge-paper text-[14px] uppercase tracking-widest"
          >
            Esc · Close
          </button>
        </div>

        <div className="space-y-10">
          {sections.map((sec) => (
            <div key={sec.id}>
              <div className="text-[12px] uppercase tracking-[0.3em] text-ge-blue mb-4">{sec.label}</div>
              <div className="grid grid-cols-3 gap-6">
                {sec.slides.map((s) => {
                  const Comp = SLIDES[s.index].Component;
                  const isCurrent = s.index === current;
                  return (
                    <button
                      key={s.id}
                      onClick={() => onPick(s.index)}
                      className={`relative bg-ge-paper rounded-lg overflow-hidden aspect-video group transition-all hover:scale-[1.02] ${
                        isCurrent ? "ring-4 ring-ge-blue" : "ring-1 ring-white/10"
                      }`}
                    >
                      <Comp active={false} />
                      <div className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent text-left">
                        <div className="text-[12px] text-white/90 font-medium">
                          {s.index + 1}. {s.title}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
