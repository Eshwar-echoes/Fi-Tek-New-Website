// components/icons/MissionAnimatedIcon.tsx
"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function MissionAnimatedIcon({
  size,
  className = "",
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      {/* Outer ring */}
      <motion.circle
        cx="36"
        cy="36"
        r="26"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        variants={{
          idle: { opacity: 0.5 },
          hover: { opacity: 1 },
        }}
      />

      {/* Direction needle */}
      <motion.path
        d="M36 36 L36 14"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          idle: { rotate: 0, opacity: 0.6 },
          hover: { rotate: 25, opacity: 1 },
        }}  
        style={{ transformOrigin: "36px 36px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      <motion.circle cx="36" cy="36" r="2.5" fill="currentColor" />
    </BaseIcon>
  );
}
