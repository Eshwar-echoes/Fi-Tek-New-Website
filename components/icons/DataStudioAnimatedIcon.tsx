"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function DataStudioAnimatedIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      {/* Outer dataset circle */}
      <motion.circle
        cx="36"
        cy="36"
        r="18"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          idle: { pathLength: 1, opacity: 0.6 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Inner insight circle */}
      <motion.circle
        cx="30"
        cy="30"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          idle: { scale: 1, opacity: 0.7 },
          hover: { scale: 1.15, opacity: 1 },
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 20,
        }}
      />

      {/* Analysis line */}
      <motion.line
        x1="40"
        y1="40"
        x2="56"
        y2="56"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          idle: { pathLength: 1, opacity: 0.5 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />

      {/* Result dot */}
      <motion.circle
        cx="58"
        cy="58"
        r="3"
        fill="currentColor"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          idle: { scale: 1, opacity: 0.8 },
          hover: { scale: 1.4, x: 2, y: 2 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
      />
    </BaseIcon>
  );
}
