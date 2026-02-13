"use client";

import { motion } from "framer-motion";

interface Props {
  size?: number;
  className?: string;
}

/*
  Enterprise logo rules:
  - no crazy animation
  - subtle movement only
  - brand bars animate
  - text remains solid
*/

export function FiTekLogoAnimatedIcon({
  size = 180,
  className = "",
}: Readonly<Props>) {
  return (
    <motion.svg
      width={size}
      height={size * 0.28}
      viewBox="0 0 520 140"
      fill="none"
      className={className}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Fi-Tek Logo"
    >
      {/* ======================
         LEFT SLANTED BARS
      ====================== */}

      {/* Blue bar */}
      <motion.rect
        x="10"
        y="10"
        width="90"
        height="22"
        rx="3"
        fill="currentColor"
        transform="skewX(-20)"
        variants={{
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 1 },
          hover: { x: 6 },
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Black bar */}
      <motion.rect
        x="30"
        y="45"
        width="90"
        height="22"
        rx="3"
        fill="currentColor"
        transform="skewX(-20)"
        variants={{
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 0.8 },
          hover: { x: -4 },
        }}
        transition={{ duration: 0.6, delay: 0.05 }}
      />

      {/* White/third bar */}
      <motion.rect
        x="50"
        y="80"
        width="90"
        height="22"
        rx="3"
        fill="currentColor"
        transform="skewX(-20)"
        variants={{
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 0.6 },
          hover: { x: 8 },
        }}
        transition={{ duration: 0.6, delay: 0.1 }}
      />

      {/* ======================
         TEXT (STATIC – premium)
      ====================== */}

      <text
        x="180"
        y="92"
        fontSize="78"
        fontWeight="600"
        letterSpacing="1"
        fill="currentColor"
        style={{
          fontFamily:
            "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
        }}
      >
        FiTek
      </text>
    </motion.svg>
  );
}
