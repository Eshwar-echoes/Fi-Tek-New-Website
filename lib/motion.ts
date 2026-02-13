/**
 * Enterprise Motion Presets
 * Echoes Motion & Premium Feel Addendum
 * 
 * Approved patterns:
 * - Section reveals: opacity + translateY (8-12px), 350-600ms, easeOut
 * - Hover effects: scale (1.01-1.03) + shadow, no timing
 * - Respects prefers-reduced-motion
 * - No decorative motion, only clarity-enhancing
 */

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
};

// Section reveal: Premium entrance animation
export const sectionReveal = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: {
    duration: 0.5,
    ease: "easeOut",
  },
};

// Staggered children: For grid items and list elements
export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "0px 0px -100px 0px" },
  transition: {
    staggerChildren: 0.08,
    delayChildren: 0.1,
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.4,
    ease: "easeOut",
  },
};

// Hover scale: Subtle interactive feedback
export const hoverScale = {
  whileHover: { scale: 1.02 },
  transition: { duration: 0.2 },
};

export const hoverScaleSmall = {
  whileHover: { scale: 1.01 },
  transition: { duration: 0.2 },
};



