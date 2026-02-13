"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * StaggerContainer: Wrapper for staggered children animations
 * 
 * Pattern:
 * - Container triggers on viewport entry
 * - Children stagger in at 80ms intervals
 * - Each child: fadeUp (0-1 opacity, 8px translateY)
 * - Total duration: ~400ms per child
 * - Respects viewport margin for scroll-based triggering
 */
export function StaggerContainer({
  children,
  className = "",
}: Readonly<StaggerContainerProps>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * StaggerItem: Individual item wrapper for staggered animations
 * 
 * Applied to each grid item or list element
 * Animates: opacity 0→1, translateY 8px→0
 * Duration: 400ms easeOut
 */
export function StaggerItem({
  children,
  className = "",
}: Readonly<StaggerItemProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
