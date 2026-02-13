"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function FlexibilityIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      <motion.path
        d="M12 20 L36 32 L60 20 V44 L36 56 L12 44 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          idle: { opacity: 0.6 },
          hover: { opacity: 1 },
        }}
      />

      <motion.path
        d="M36 10 V62"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          idle: { opacity: 0.4 },
          hover: { opacity: 1 },
        }}
      />

      <motion.circle
        cx="36"
        cy="10"
        r="3"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.4 },
        }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </BaseIcon>
  );
}
