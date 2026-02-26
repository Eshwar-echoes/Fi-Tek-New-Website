"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import type { ServicesSliderSectionData } from "@/types/services";
import { arrowHover, cardReveal } from "@/components/motion/slider.motion";
import {
  inViewViewport,
  sectionReveal,
  sectionRevealReduced,
} from "@/components/motion/landing.motion";

interface Props {
  data: ServicesSliderSectionData;
}

const GAP = 24;

export function ServicesSliderSection({ data }: Props) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const titleVariants = shouldReduceMotion ? sectionRevealReduced : sectionReveal;
  const originalLength = data.items.length;

  const items = useMemo(() => [...data.items, ...data.items], [data.items]);
  const [index, setIndex] = useState(originalLength);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [cardWidth, setCardWidth] = useState(360);

  const handleMove = (direction: "left" | "right") => {
    setIndex((prev) => (direction === "left" ? prev - 1 : prev + 1));
  };

  useEffect(() => {
    if (index >= originalLength * 2) {
      setTimeout(() => {
        setIsTransitionEnabled(false);
        setIndex(originalLength);
      }, 500);
    }

    if (index <= 0) {
      setTimeout(() => {
        setIsTransitionEnabled(false);
        setIndex(originalLength);
      }, 500);
    }
  }, [index, originalLength]);

  useEffect(() => {
    if (!isTransitionEnabled) {
      requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
    }
  }, [isTransitionEnabled]);

  useEffect(() => {
    const setResponsiveCardWidth = () => {
      if (window.innerWidth < 480) {
        setCardWidth(Math.max(260, Math.min(320, window.innerWidth - 56)));
        return;
      }
      if (window.innerWidth < 768) {
        setCardWidth(320);
        return;
      }
      if (window.innerWidth < 1024) {
        setCardWidth(340);
        return;
      }
      setCardWidth(360);
    };

    setResponsiveCardWidth();
    window.addEventListener("resize", setResponsiveCardWidth);
    return () => window.removeEventListener("resize", setResponsiveCardWidth);
  }, []);

  const translateX = -index * (cardWidth + GAP);

  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,var(--leroux-split-start)_0%,var(--leroux-split-end)_100%)] py-16 sm:py-20">
      <Container>
        <div className="mb-8 flex items-center justify-between sm:mb-12">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="text-3xl font-bold tracking-tight text-(--text-black) sm:text-4xl md:text-5xl"
          >
            {data.heading}
          </motion.h2>

          <div className="hidden gap-4 sm:flex">
            <motion.button
              {...arrowHover}
              aria-label="Previous"
              onClick={() => handleMove("left")}
              className="text-3xl"
            >
              {"\u2190"}
            </motion.button>

            <motion.button
              {...arrowHover}
              aria-label="Next"
              onClick={() => handleMove("right")}
              className="text-3xl"
            >
              {"\u2192"}
            </motion.button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: translateX }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : isTransitionEnabled
                  ? { duration: 0.5, ease: "easeOut" }
                  : { duration: 0 }
            }
            className="flex gap-6 px-4 sm:px-6"
          >
            {items.map((item, i) => (
              <motion.div
                key={`${item.id}-${i}`}
                variants={cardReveal}
                initial="hidden"
                whileInView="show"
                custom={i % originalLength}
                viewport={{ once: true }}
                className="flex flex-col rounded-3xl border border-(--border-subtle) bg-(--surface-muted) p-6 transition hover:shadow-lg sm:p-8"
                style={{
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                }}
              >
                {item.image ? (
                  <div className="mb-6 h-32 w-full overflow-hidden rounded-xl">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                ) : (
                  <div className="mb-6 text-4xl">{item.icon}</div>
                )}

                <h3 className="text-lg font-semibold text-(--text-primary)">{item.title}</h3>
                <p className="mt-3 text-sm text-(--text-secondary)">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      <Container>
        <div className="mt-8 flex justify-center gap-10 sm:hidden">
          <motion.button
            {...arrowHover}
            aria-label="Previous"
            onClick={() => handleMove("left")}
            className="text-3xl"
          >
            {"\u2190"}
          </motion.button>

          <motion.button
            {...arrowHover}
            aria-label="Next"
            onClick={() => handleMove("right")}
            className="text-3xl"
          >
            {"\u2192"}
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
