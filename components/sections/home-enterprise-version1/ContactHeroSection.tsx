"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ContactPageContent } from "@/types/contactHeroSection";
import { Button } from "@/components/ui/button";
import {
  hoverElevation,
  inViewViewport,
  sectionReveal,
  sectionRevealReduced,
} from "@/components/motion/landing.motion";

export function ContactHeroSection({ data }: Readonly<{ data: ContactPageContent }>) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const buttonHoverProps = shouldReduceMotion ? undefined : hoverElevation.button;

  return (
    <section className="relative flex min-h-[70vh] items-center py-10 sm:py-12 md:min-h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-(--overlay-blue)" />

      <div className="relative z-10 w-full">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 md:justify-end">
          <motion.div
            variants={shouldReduceMotion ? sectionRevealReduced : sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            className="w-full max-w-lg rounded-xl bg-(--overlay-white-soft) p-5 shadow-xl backdrop-blur-lg sm:p-8 md:p-10"
          >
            <div className="mb-8 space-y-4">
              <h2 className="text-3xl font-bold text-(--text-primary) sm:text-4xl md:text-5xl">{data.heading}</h2>
              <p className="text-sm text-(--text-black)">{data.address}</p>
              <p className="text-sm text-(--text-black)">{data.email}</p>
              <p className="text-sm text-(--text-black)">{data.phone}</p>
            </div>

            <form className="space-y-5">
              <input
                type="text"
                placeholder={data.form.namePlaceholder}
                className="w-full border-b border-(--border-strong) bg-transparent py-2 text-sm focus:border-(--text-primary) focus:outline-none"
              />

              <input
                type="email"
                placeholder={data.form.emailPlaceholder}
                className="w-full border-b border-(--border-strong) bg-transparent py-2 text-sm focus:border-(--text-primary) focus:outline-none"
              />

              <textarea
                placeholder={data.form.messagePlaceholder}
                rows={4}
                className="w-full resize-none border-b border-(--border-strong) bg-transparent py-2 text-sm focus:border-(--text-primary) focus:outline-none"
              />

              <motion.div
                whileHover={buttonHoverProps?.whileHover}
                whileTap={buttonHoverProps?.whileTap}
                transition={buttonHoverProps?.transition}
                className="inline-flex"
              >
                <Button intent="primary" context="inverse" type="submit" className="inline-flex items-center gap-2">
                  {data.form.submitLabel}
                  <span aria-hidden>{"->"}</span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

