"use client";

import { motion } from "framer-motion";

interface BaseIconProps {
  size?: number;
  className?: string;
  children: React.ReactNode;
}

export function BaseIcon({
  size = 48,
  className = "",
  children,
}: Readonly<BaseIconProps>) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      fill="none"
      className={`inline-block align-bottom ${className}`}
      initial="hidden"
      whileInView="idle"
      whileHover="hover"
      viewport={{ once: true, margin: "-60px" }}
      overflow="visible"
    >
      {children}
    </motion.svg>
  );
}

