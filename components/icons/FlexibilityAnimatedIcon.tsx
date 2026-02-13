"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function FlexibilityAnimatedIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      {/* Outer structure */}
      <motion.path
        d="M10 18 L36 30 L62 18 V42 L36 54 L10 42 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          hidden: {
            pathLength: 0,
            opacity: 0,
          },
          idle: {
            pathLength: 1,
            opacity: 0.6,
          },
          hover: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      />

      {/* Vertical line */}
      <motion.path
        d="M36 10 V62"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          hidden: { opacity: 0 },
          idle: { opacity: 0.4 },
          hover: { opacity: 1 },
        }}
        transition={{
          duration: 0.4,
          delay: 0.15,
        }}
      />

      {/* Top dot */}
      <motion.circle
        cx="36"
        cy="10"
        r="3"
        fill="currentColor"
        variants={{
          hidden: { scale: 0 },
          idle: { scale: 1 },
          hover: { scale: 1.4 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
      />
    </BaseIcon>
  );
}
