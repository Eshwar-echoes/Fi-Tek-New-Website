"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function AccuracyIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      <motion.circle
        cx="36"
        cy="36"
        r="22"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          idle: { opacity: 0.6 },
          hover: { opacity: 1 },
        }}
      />

      <motion.circle
        cx="36"
        cy="36"
        r="4"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: { scale: [1, 1.6, 1] },
        }}
        transition={{ duration: 0.6 }}
      />
    </BaseIcon>
  );
}
