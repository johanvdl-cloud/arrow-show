import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

export default function SlideTitle({ active }: { active: boolean }) {
  return (
    <SlideLayout variant="navy">
      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="ge-orb absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
             style={{ background: "radial-gradient(circle, oklch(0.5 0.18 255 / 0.35), transparent 70%)" }} />
        <div className="ge-orb absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full" style={{ animationDelay: "-4s",
             background: "radial-gradient(circle, oklch(0.55 0.2 240 / 0.25), transparent 70%)" }} />
        <div className="ge-orb absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full" style={{ animationDelay: "-8s",
             background: "radial-gradient(circle, oklch(0.6 0.18 270 / 0.2), transparent 70%)" }} />
      </div>

      <div className="relative flex-1 flex flex-col justify-center">
        <motion.div
          key={active ? "a" : "i"}
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[16px] tracking-[0.4em] uppercase opacity-70 mb-8"
        >
          Corporate Strategy · Individual Case Memo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[140px] leading-none font-serif tracking-tight"
          style={{ fontFamily: "Georgia, serif" }}
        >
          General Electric
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={active ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-[3px] w-48 bg-ge-blue mt-10 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 text-[42px] font-light"
          style={{ fontFamily: "Georgia, serif" }}
        >
          The Welch Conglomerate, 1981–2001
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-3 text-[28px] italic opacity-80"
        >
          Is the whole greater than the parts?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 text-[20px] opacity-80 leading-relaxed"
        >
          Johan van der Linden<br />
          HEC Lausanne, UNIL · Master in Management · Winter–Spring 2026<br />
          Prof. Xavier Castañer
        </motion.div>
      </div>
    </SlideLayout>
  );
}
