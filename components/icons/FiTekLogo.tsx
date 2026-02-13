"use client";

import { motion } from "framer-motion";
import { FiTekSlashIcon } from "./FiTekSlashIcon";
import clsx from "clsx";

interface Props {
  size?: number;       // text size control
  className?: string;
  suffix?: string;     // LLC etc
}

export function FiTekLogo({
  size = 28,
  suffix = "LLC",
  className = "",
}: Readonly<Props>) {
  const fontSize = size;

  return (
    <motion.div
      className={clsx(
        "inline-flex items-end leading-none select-none",
        className
      )}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover="hover"
      transition={{ duration: 0.4 }}
    >
      {/* TEXT GROUP */}
      <div
        className="flex items-baseline font-semibold italic tracking-tight text-(--text-inverse)"
        style={{ fontSize }}
      >
        {/* logo */}
        <motion.span
          className="flex items-baseline me-2"
          variants={{ hover: { y: 4,
              rotate:  + 2, } }}
        >
          {/* 👇 critical: size tied to font */}
          <FiTekSlashIcon size={fontSize * 0.9} />
        </motion.span>
        {/* F */}
        <motion.span
        //   variants={{ hover: { x: -1 } }}
        >
          F
        </motion.span>

        {/* ICON AS i */}
        <motion.span
          className="flex items-baseline"
        //   variants={{ hover: { y: 4, rotate:  + 2, } }}
        >
          {/* 👇 critical: size tied to font */}
          <FiTekSlashIcon size={fontSize * 0.44} />
        </motion.span>

        {/* Tek */}
        <motion.span
        //   variants={{ hover: { x: 1 } }}
        >
          Tek
        </motion.span>
      </div>

      {/* LLC */}
      {suffix && (
        <span
          className="ml-2 text-(--text-muted) font-medium"
          style={{ fontSize: fontSize * 0.4 }}
        >
          {suffix}
        </span>
      )}
    </motion.div>
  );
}
