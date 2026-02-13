import type { Variants } from "framer-motion";

export const arrowHover = {
  whileHover: {
    y: -6,
    scale: 1.08,
  },
  whileTap: {
    scale: 0.95,
  },
  transition: {
    duration: 0.2,
    ease: "easeOut" as const,
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
      delay: Math.min(index * 0.06, 0.18),
    },
  }),
};
