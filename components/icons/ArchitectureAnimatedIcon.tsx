"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function ArchitectureAnimatedIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      {/* Top dot */}
      <motion.circle
        cx="36"
        cy="10"
        r="3"
        fill="currentColor"
        variants={{
          hidden: { scale: 0, opacity: 0 },
          idle: { scale: 1, opacity: 1 },
          hover: { scale: 1.4, y: -2 },
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
      />

      {/* Top frame */}
      <motion.path
        d="M20 22 L36 14 L52 22"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          idle: { pathLength: 1, opacity: 0.6 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Vertical connector */}
      <motion.path
        d="M36 14 V44"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          hidden: { opacity: 0 },
          idle: { opacity: 0.4 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4, delay: 0.15 }}
      />

      {/* Bottom frame */}
      <motion.path
        d="M20 46 L36 54 L52 46"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          idle: { pathLength: 1, opacity: 0.6 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </BaseIcon>
  );
}
