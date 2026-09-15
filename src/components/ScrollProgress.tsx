'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00658D] via-[#0284C7] to-[#F59E0B] origin-left z-50 shadow-[0_0_12px_rgba(245,158,11,0.6)] pointer-events-none"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
