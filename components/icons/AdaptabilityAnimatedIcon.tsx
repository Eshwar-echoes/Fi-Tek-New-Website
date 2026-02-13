// components/icons/AdaptabilityAnimatedIcon.tsx
"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function AdaptabilityAnimatedIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      <motion.path
        d="M12 20 L36 30 L60 20 V44 L36 56 L12 44 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          idle: { pathLength: 1, opacity: 0.6 },
          hover: { pathLength: [0, 1], opacity: 1 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.circle
        cx="36"
        cy="14"
        r="3"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.4 },
        }}
        transition={{ type: "spring", stiffness: 280 }}
      />
    </BaseIcon>
  );
}
