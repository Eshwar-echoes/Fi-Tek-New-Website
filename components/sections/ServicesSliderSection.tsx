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

const CARD_WIDTH = 384;

export function ServicesSliderSection({ data }: Props) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const titleVariants = shouldReduceMotion ? sectionRevealReduced : sectionReveal;
  const originalLength = data.items.length;

  const items = useMemo(() => [...data.items, ...data.items], [data.items]);
  const [index, setIndex] = useState(originalLength);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

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

  const translateX = -index * CARD_WIDTH;

  return (
    <section className="bg-(--surface-base) py-20 overflow-hidden">
      <Container>
        <div className="mb-12 flex items-center justify-between">
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="text-4xl md:text-5xl font-bold tracking-tight text-(--text-black)"
          >
            {data.heading}
          </motion.h2>

          <div className="hidden sm:flex gap-4">
            <motion.button
              {...arrowHover}
              aria-label="Previous"
              onClick={() => handleMove("left")}
              className="text-3xl"
            >
              ←
            </motion.button>

            <motion.button
              {...arrowHover}
              aria-label="Next"
              onClick={() => handleMove("right")}
              className="text-3xl"
            >
              →
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
            className="flex gap-6 px-6"
          >
            {items.map((item, i) => (
              <motion.div
                key={`${item.id}-${i}`}
                variants={cardReveal}
                initial="hidden"
                whileInView="show"
                custom={i % originalLength}
                viewport={{ once: true }}
                className="
                  min-w-[360px]
                  max-w-[360px]
                  rounded-3xl
                  bg-(--surface-muted)
                  border border-(--border-subtle)
                  p-8
                  flex flex-col
                  transition
                  hover:shadow-lg
                "
              >
                {item.image ? (
                  <div className="mb-6 h-32 w-full rounded-xl overflow-hidden">
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
            ←
          </motion.button>

          <motion.button
            {...arrowHover}
            aria-label="Next"
            onClick={() => handleMove("right")}
            className="text-3xl"
          >
            →
          </motion.button>
        </div>
      </Container>
    </section>
  );
}

