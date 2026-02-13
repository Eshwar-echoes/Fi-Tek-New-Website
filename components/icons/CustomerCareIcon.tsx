// components/icons/CustomerCareAnimatedIcon.tsx
"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function CustomerCareAnimatedIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      {/* Outer circle */}
      <motion.circle
        cx="36"
        cy="36"
        r="28"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          idle: { opacity: 0.5 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Forward arrow */}
      <motion.path
        d="M22 38 H50 L42 30"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          idle: { x: 0, opacity: 0.5 },
          hover: { x: 4, opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </BaseIcon>
  );
}
