"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface IconProps {
  size?: number;
  className?: string;
}

export function IntegrationIcon({
  size,
  className,
}: Readonly<IconProps>) {
  return (
    <BaseIcon size={size} className={className}>
      <motion.circle
        cx="36"
        cy="36"
        r="26"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={{
          idle: { opacity: 0.6 },
          hover: { opacity: 1 },
        }}
      />

      <motion.circle
        cx="20"
        cy="36"
        r="5"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.3 },
        }}
        transition={{ type: "spring", stiffness: 250 }}
      />

      <motion.circle
        cx="52"
        cy="36"
        r="5"
        fill="currentColor"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.3 },
        }}
        transition={{ type: "spring", stiffness: 250 }}
      />
    </BaseIcon>
  );
}
