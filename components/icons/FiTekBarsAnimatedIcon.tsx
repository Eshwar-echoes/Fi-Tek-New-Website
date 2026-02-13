"use client";

import { motion } from "framer-motion";

interface Props {
  size?: number;
  className?: string;
}

/*
  TRUE geometric construction:

  - 3 identical rectangles
  - rotated 45°
  - diagonal stacking
  - equal spacing
  - shadow layer
  - subtle enterprise motion
*/

export function FiTekBarsAnimatedIcon({
  size = 64,
  className = "",
}: Readonly<Props>) {
  const BAR_W = 44;  // width
  const BAR_H = 14;  // height  (≈ 3:1 ratio like your note)
  const GAP = 10;    // uniform spacing

  const bars = [0, 1, 2];

  const variants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    hover: { x: 3 },
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      aria-label="FiTek logo"
    >
      {/* ======================
         SHADOW LAYER (back)
         ====================== */}
      {bars.map((i) => (
        <motion.rect
          key={`shadow-${i}`}
          width={BAR_W}
          height={BAR_H}
          x={30 + i * GAP}
          y={30 + i * GAP}
          rx={0}
          fill="currentColor"
          opacity={0.25}
          transform={`rotate(45 ${30 + i * GAP} ${30 + i * GAP})`}
          variants={variants}
          transition={{ delay: i * 0.05 }}
        />
      ))}

      {/* ======================
         FOREGROUND BARS
         ====================== */}
      {bars.map((i) => (
        <motion.rect
          key={`bar-${i}`}
          width={BAR_W}
          height={BAR_H}
          x={24 + i * GAP}
          y={24 + i * GAP}
          rx={0}
          fill="currentColor"
          transform={`rotate(45 ${24 + i * GAP} ${24 + i * GAP})`}
          variants={variants}
          transition={{ delay: i * 0.05 }}
        />
      ))}
    </motion.svg>
  );
}
