"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { heroStagger, inViewViewport } from "@/components/motion/landing.motion";
import type { EnterpriseHeroData } from "@/types/homeEnterprise";

interface EnterpriseHeroSectionProps {
  data: EnterpriseHeroData;
}

export function EnterpriseHeroSection({
  data,
}: Readonly<EnterpriseHeroSectionProps>) {
  const mediaStyle =
    data.backgroundMedia.type === "image"
      ? { backgroundImage: `url(${data.backgroundMedia.src})` }
      : undefined;

  return (
    <section className="relative flex min-h-[80vh] items-end overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={mediaStyle}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,var(--leroux-hero-overlay-a)_20%,var(--leroux-hero-overlay-b)_60%,var(--leroux-hero-overlay-c)_100%)]" aria-hidden />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={heroStagger.container}
          className="relative max-w-8xl"
        >
          <motion.div variants={heroStagger.microcopy}>
            <Badge tone="brand" className="bg-(--leroux-hero-badge-bg)">
              {data.eyebrow}
            </Badge>
          </motion.div>
          <motion.h1
            variants={heroStagger.heading}
            className="mt-4 text-5xl leading-[0.92] text-(--text-inverse) md:text-7xl"
          >
            {data.title}
          </motion.h1>
          <motion.p
            variants={heroStagger.subheading}
            className="mt-6 max-w-3xl text-base text-(--leroux-hero-text) md:text-lg"
          >
            {data.description}
          </motion.p>

          <motion.div variants={heroStagger.cta} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button intent="primary" className="rounded-sm" asChild>
              <Link href={data.primaryCtaHref}>{data.primaryCtaLabel}</Link>
            </Button>
            <Button intent="secondary" className="rounded-sm" asChild>
              <Link href={data.secondaryCtaHref}>{data.secondaryCtaLabel}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
