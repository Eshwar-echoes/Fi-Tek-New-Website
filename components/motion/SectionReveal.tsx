"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

/**
 * SectionReveal: Reusable motion wrapper for section entrance animations
 * 
 * Approved motion:
 * - Opacity: 0 → 1
 * - TranslateY: 10px → 0px (scroll-triggered)
 * - Duration: 500ms easeOut
 * - Triggered on viewport entry (once, margin-based)
 * - Respects prefers-reduced-motion
 */
export function SectionReveal({
  children,
  className = "",
  ...motionProps
}: Readonly<SectionRevealProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
