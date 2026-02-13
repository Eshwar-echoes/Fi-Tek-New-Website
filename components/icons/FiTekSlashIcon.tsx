"use client";

import { motion } from "framer-motion";
import { BaseIcon } from "./BaseIcon";

interface Props {
  size?: number;
  className?: string;
}

export function FiTekSlashIcon({
  size,
  className = "",
}: Readonly<Props>) {
  const WIDTH = 58;
  const HEIGHT = 14;
  const SLANT = -10;
  const ROTATE = -66;

  const OFFSET_X = 12;
  const OFFSET_Y = 12;

  const FI_TEK_COLORS = {
    primary: "var(--brand-logo-blue)",
    secondary: "var(--brand-logo-black)",
    muted: "var(--brand-logo-gray)",
  };

  const layers = [
    { color: FI_TEK_COLORS.primary, opacity: 1, x: 0, y: 0 },
    { color: FI_TEK_COLORS.secondary, opacity: 1, x: OFFSET_X, y: OFFSET_Y },
    { color: FI_TEK_COLORS.muted, opacity: 1, x: OFFSET_X * 2, y: OFFSET_Y * 2 },
  ];

  const HALF = SLANT / 2;
  const points = `
    ${HALF},0
    ${WIDTH + HALF},0
    ${WIDTH - HALF},${HEIGHT + 5}
    ${-HALF},${HEIGHT + 5}
  `;

  return (
    <BaseIcon size={size} className={className} aria-label="FiTek logo">
      {[...layers].reverse().map((layer, i) => (
        <motion.polygon
          key={i}
          points={points}
          fill={layer.color}
          opacity={layer.opacity}
          transform={`translate(${30 + layer.x} ${40 + layer.y}) rotate(${ROTATE})`}
          variants={{
            hidden: {
              opacity: 0,
              y: layer.y - 16,
            },
            idle: {
              opacity: 1,
              x: layer.x,
              y: layer.y,
              rotate: ROTATE,
            },
            hover: {
              y: layer.y + 4,
              rotate: ROTATE + 2,
            },
          }}

          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: i * 0.06,
          }}
        />
      ))}
    </BaseIcon>
  );
}
