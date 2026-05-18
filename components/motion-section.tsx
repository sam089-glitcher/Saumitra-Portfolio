"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionSectionProps = HTMLMotionProps<"section">;

export function MotionSection({ children, ...props }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.18 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
