import { SECTIONS, SLIDES, slidesBySection } from "@/lib/deck";

interface Props {
  current: number;
  onJump: (i: number) => void;
}

export default function ProgressBar({ current, onJump }: Props) {
  const sections = slidesBySection();
  return (
    <div className="absolute top-0 left-0 right-0 z-30 px-6 pt-3 pb-2 pointer-events-none">
      <div className="flex gap-3 max-w-[1600px] mx-auto">
        {sections.map((sec) => {
          const firstIdx = sec.slides[0].index;
          return (
            <div key={sec.id} className="flex-1 pointer-events-auto">
              <button
                onClick={() => onJump(firstIdx)}
                className="block w-full text-left text-[10px] uppercase tracking-[0.25em] text-ge-paper/60 hover:text-ge-paper mb-1 transition-colors"
              >
                {sec.label}
              </button>
              <div className="flex gap-1 h-1.5">
                {sec.slides.map((s) => {
                  const done = s.index < current;
                  const isCurrent = s.index === current;
                  return (
                    <button
                      key={s.id}
                      onClick={() => onJump(s.index)}
                      title={s.title}
                      className={`flex-1 rounded-full transition-all ${
                        isCurrent
                          ? "bg-ge-blue ge-pulse"
                          : done
                          ? "bg-ge-paper/80"
                          : "bg-ge-paper/15 hover:bg-ge-paper/30"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center text-[11px] text-ge-paper/50 mt-2">
        {current + 1} / {SLIDES.length} · {SECTIONS.find((s) => s.id === SLIDES[current].section)?.label}
      </div>
    </div>
  );
}
