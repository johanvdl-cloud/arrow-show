import { motion } from "framer-motion";
import SlideLayout from "@/components/SlideLayout";

export default function SlideClosing({ active }: { active: boolean }) {
  return (
    <SlideLayout variant="navy">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ge-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
             style={{ background: "radial-gradient(circle, oklch(0.5 0.18 255 / 0.3), transparent 70%)" }} />
        <div className="ge-orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full" style={{ animationDelay: "-5s",
             background: "radial-gradient(circle, oklch(0.6 0.18 270 / 0.2), transparent 70%)" }} />
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[14px] tracking-[0.4em] uppercase opacity-60 mb-10"
        >
          Closing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[88px] leading-tight font-serif max-w-[1400px]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          The whole has been greater<br />than the sum of its parts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-10 text-[26px] italic max-w-[1100px] opacity-85"
          style={{ fontFamily: "Georgia, serif" }}
        >
          But the arithmetic was done by one man. The Board's task is to arrange for the sum
          to keep holding after he is gone.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={active ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20"
        >
          <div className="text-[24px] ge-pulse text-ge-blue">Thank you - questions welcome.</div>
          <div className="mt-4 text-[16px] opacity-70">Johan van der Linden · HEC Lausanne · Corporate Strategy, W/S 2026</div>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
