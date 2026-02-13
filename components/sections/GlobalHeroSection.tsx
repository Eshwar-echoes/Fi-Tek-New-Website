"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlobalHeroContent } from "@/content/client/fitek/technology/technology";
import { Button } from "../ui/button";

export function GlobalHero({
  data,
}: Readonly<{ data: GlobalHeroContent }>) {
  return (
    <section className="relative h-[60vh] bg-black overflow-hidden">
      {/* Subtle abstract curves (purely decorative) */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full border border-white/10" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full border border-white/10" />
      </div>

      <Container>
        <div className="relative z-10 flex h-[60vh] flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-5xl text-balance text-5xl font-semibold tracking-tight text-white md:text-7xl"
          >
            {data.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-base text-neutral-300 md:text-lg"
          >
            {data.subtitle}
          </motion.p>
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-10"
          >
            <Button
              intent="primary" context="default"
              className="inline-flex items-center gap-2"
            >{data.cta.label}
              <span aria-hidden>➔</span>
            </Button>
          </motion.div>
            
        </div>
      </Container>
    </section>
  );
}
