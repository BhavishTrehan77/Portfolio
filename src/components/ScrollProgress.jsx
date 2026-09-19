"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 origin-left z-50 pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
