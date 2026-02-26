"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroStagger, inViewViewport } from "@/components/motion/landing.motion";
import type { V2HeroData } from "@/types/homeInstitutionalV2";

interface InstitutionalHeroV2SectionProps {
  data: V2HeroData;
}

export function InstitutionalHeroV2Section({ data }: Readonly<InstitutionalHeroV2SectionProps>) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(140%_110%_at_10%_10%,rgba(39,58,99,0.95)_0%,rgba(14,21,37,0.98)_50%,rgba(8,11,20,1)_100%)] pt-28 pb-20 md:pt-36 md:pb-24">
      <div className="absolute inset-0">
        <Image
          src={data.backgroundImageSrc}
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(8,11,20,0.9)_20%,rgba(8,11,20,0.62)_58%,rgba(8,11,20,0.88)_100%)]" />
      <div className="pointer-events-none absolute -left-28 top-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3),rgba(59,130,246,0))]" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.16),rgba(34,197,94,0))]" />

      <Container>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={heroStagger.container}
          className="relative max-w-5xl"
        >
          <motion.div variants={heroStagger.microcopy}>
            <Badge tone="brand" className="bg-white/10 text-white border-white/30">
              {data.eyebrow}
            </Badge>
          </motion.div>

          <motion.h1 variants={heroStagger.heading} className="mt-5 text-5xl leading-[0.93] text-white md:text-7xl">
            {data.title}
          </motion.h1>

          <motion.p variants={heroStagger.subheading} className="mt-6 max-w-3xl text-base text-white/85 md:text-lg">
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
