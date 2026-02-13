import type { Transition, Variants } from "framer-motion";

const enterpriseEase: [number, number, number, number] = [0.2, 0.65, 0.3, 1];

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(2px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.72,
      ease: enterpriseEase,
    },
  },
};

export const sectionRevealReduced: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: enterpriseEase,
    },
  },
};

export const cardRevealPremium: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.68,
      ease: enterpriseEase,
    },
  },
};

export const cardRevealPremiumReduced: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: enterpriseEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const staggerContainerReduced: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

export const hoverElevation = {
  card: {
    whileHover: { y: -3, scale: 1.01 },
    whileTap: { scale: 0.995 },
    transition: {
      duration: 0.2,
      ease: enterpriseEase,
    } satisfies Transition,
  },
  button: {
    whileHover: { y: -1, scale: 1.02 },
    whileTap: { scale: 0.99 },
    transition: {
      duration: 0.18,
      ease: enterpriseEase,
    } satisfies Transition,
  },
};

export const heroStagger = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  } satisfies Variants,
  heading: {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.74,
        ease: enterpriseEase,
      },
    },
  } satisfies Variants,
  subheading: {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.68,
        ease: enterpriseEase,
        delay: 0.06,
      },
    },
  } satisfies Variants,
  cta: {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.62,
        ease: enterpriseEase,
        delay: 0.12,
      },
    },
  } satisfies Variants,
  microcopy: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: enterpriseEase,
      },
    },
  } satisfies Variants,
};

export const heroStaggerReduced = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0,
      },
    },
  } satisfies Variants,
  heading: sectionRevealReduced,
  subheading: sectionRevealReduced,
  cta: sectionRevealReduced,
  microcopy: sectionRevealReduced,
};

export const accentLineReveal: Variants = {
  hidden: { opacity: 0, scaleX: 0, transformOrigin: "left center" },
  show: {
    opacity: 1,
    scaleX: 1,
    transformOrigin: "left center",
    transition: {
      duration: 0.5,
      ease: enterpriseEase,
    },
  },
};

export const accentLineRevealReduced: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: enterpriseEase,
    },
  },
};

export const inViewViewport = { once: true, margin: "0px 0px -100px 0px" } as const;

export const sliderTrackTransition = {
  active: {
    duration: 0.56,
    ease: enterpriseEase,
  } satisfies Transition,
  instant: {
    duration: 0,
  } satisfies Transition,
};
