"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/types/SubHeroSection";

interface SubHeroSectionProps {
  data: HeroContent;
}

export function SubHeroSection({
  data,
}: Readonly<SubHeroSectionProps>) {
  return (
    <section className="relative md:min-h-[60vh] overflow-hidden">
      {/* Background */}
      {data.background.type === "image" && (
        <img
          src={data.background.src}
          alt={data.background.alt ?? ""}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {data.background.type === "video" && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={data.background.src}
          poster={data.background.poster}
          autoPlay
          muted
          loop
          playsInline
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <Container>
        <div className="relative z-10 flex md:min-h-[60vh] flex-col justify-end pb-10 py-20 ">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl text-balance text-4xl font-semibold text-white md:text-6xl"
          >
            {data.title}
          </motion.h1>

          {/* Subtitle + CTA */}
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="max-w-2xl text-base text-neutral-300 md:text-lg"
            >
              {data.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="shrink-0"
            >
              <Button
                intent="secondary" context="default"
                type="button"
                className="inline-flex items-center gap-2"
              >
                {data.cta.label}
                <span aria-hidden>➔</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
