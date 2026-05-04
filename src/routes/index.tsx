import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SECTIONS, SLIDES } from "@/lib/deck";
import ScaledSlide from "@/components/ScaledSlide";
import ProgressBar from "@/components/ProgressBar";
import Overview from "@/components/Overview";

export const Route = createFileRoute("/")({ component: Presentation });

function Presentation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"h" | "v">("h");
  const [overview, setOverview] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const hintTimer = useRef<number | null>(null);
  const cursorTimer = useRef<number | null>(null);
  const [cursorHidden, setCursorHidden] = useState(false);

  const go = useCallback((next: number, dir: "h" | "v" = "h") => {
    setDirection(dir);
    setIndex((cur) => Math.max(0, Math.min(SLIDES.length - 1, next === -1 ? cur : next)));
  }, []);

  const next = () => setIndex((i) => Math.min(SLIDES.length - 1, i + 1));
  const prev = () => setIndex((i) => Math.max(0, i - 1));

  const jumpSection = useCallback((dir: 1 | -1) => {
    const curSection = SLIDES[index].section;
    const sectionOrder = SECTIONS.map((s) => s.id);
    const curSecIdx = sectionOrder.indexOf(curSection);
    const targetSecIdx = Math.max(0, Math.min(SECTIONS.length - 1, curSecIdx + dir));
    const target = SLIDES.findIndex((s) => s.section === sectionOrder[targetSecIdx]);
    if (target >= 0) {
      setDirection("v");
      setIndex(target);
    }
  }, [index]);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen().catch(() => {});
    } else {
      await document.exitFullscreen().catch(() => {});
    }
  }, []);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); setDirection("h"); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); setDirection("h"); prev(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); jumpSection(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); jumpSection(-1); }
      else if (e.key === "o" || e.key === "O") { e.preventDefault(); setOverview((v) => !v); }
      else if (e.key === "f" || e.key === "F") { e.preventDefault(); toggleFullscreen(); }
      else if (e.key === "Escape") { setOverview(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [jumpSection, toggleFullscreen]);

  // Fullscreen state sync
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Hint + cursor auto-hide on activity
  useEffect(() => {
    const onMove = () => {
      setHintVisible(true);
      setCursorHidden(false);
      if (hintTimer.current) window.clearTimeout(hintTimer.current);
      if (cursorTimer.current) window.clearTimeout(cursorTimer.current);
      hintTimer.current = window.setTimeout(() => setHintVisible(false), 2500);
      cursorTimer.current = window.setTimeout(() => setCursorHidden(true), 2500);
    };
    onMove();
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const current = SLIDES[index];
  const Comp = current.Component;

  return (
    <div
      className="fixed inset-0 bg-ge-navy overflow-hidden"
      style={{ cursor: cursorHidden && !overview ? "none" : "auto" }}
    >
      <ProgressBar current={index} onJump={(i) => { setDirection("h"); setIndex(i); }} />

      <div className="absolute inset-0 pt-12">
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={{
                opacity: 0,
                x: direction === "h" ? 80 : 0,
                y: direction === "v" ? 80 : 0,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{
                opacity: 0,
                x: direction === "h" ? -80 : 0,
                y: direction === "v" ? -80 : 0,
              }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <ScaledSlide>
                <Comp active={true} />
              </ScaledSlide>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Hint chip */}
      <motion.div
        animate={{ opacity: hintVisible ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-full bg-black/40 backdrop-blur text-ge-paper/90 text-[12px] tracking-wider flex gap-4"
      >
        <span>← →  Navigate</span>
        <span>↑ ↓  Sections</span>
        <span>O  Overview</span>
        <span>F  {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
      </motion.div>

      {/* Side nav arrows */}
      <motion.button
        animate={{ opacity: hintVisible ? 0.7 : 0 }}
        onClick={() => { setDirection("h"); prev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 backdrop-blur text-ge-paper hover:bg-black/50"
      >‹</motion.button>
      <motion.button
        animate={{ opacity: hintVisible ? 0.7 : 0 }}
        onClick={() => { setDirection("h"); next(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/30 backdrop-blur text-ge-paper hover:bg-black/50"
      >›</motion.button>

      <AnimatePresence>
        {overview && (
          <Overview
            current={index}
            onClose={() => setOverview(false)}
            onPick={(i) => { setDirection("h"); setIndex(i); setOverview(false); }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
