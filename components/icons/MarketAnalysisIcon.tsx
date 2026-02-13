// components/icons/MarketAnalysisAnimatedIcon.tsx
"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function MarketAnalysisAnimatedIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      {[18, 26, 34, 42].map((x, i) => (
        <motion.rect
          key={x}
          x={x}
          y={24}
          width="6"
          height={24}
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          variants={{
            idle: { opacity: 0.4 },
            hover: { opacity: 1 },
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.05,
          }}
        />
      ))}
    </BaseIcon>
  );
}
