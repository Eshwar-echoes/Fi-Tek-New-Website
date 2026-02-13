"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "../layout/Container";
import { SectionReveal } from "../motion/SectionReveal";

import type { SolutionsShowcaseData } from "@/content/client/fitek/home";

export function SolutionsShowcase({ data }: Readonly<{ data: SolutionsShowcaseData }>) {
  return (
    <section className="py-24 bg-(--surface-base)">
      <Container>
        <div className="space-y-20">
          {/* Section Header */}
          <SectionReveal>
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-(--text-black)">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-lg text-(--text-secondary) leading-relaxed max-w-2xl">
                  {data.subtitle}
                </p>
              )}
            </div>
          </SectionReveal>

          {/* Solutions Grid */}
          <div className="space-y-20">
            {data.items.map((item, index) => {
              const isImageLeft = index % 2 === 1;

              return (
                <SectionReveal key={item.id}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div
                      className={`space-y-6 ${
                        isImageLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-(--text-black)">
                          {item.title}
                        </h3>
                        <p className="text-lg text-(--text-secondary) leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* CTA Link */}
                      {item.cta && (
                        <Link
                          href={item.cta.href}
                          className="inline-flex items-center gap-2 text-base font-medium text-(--text-black) hover:text-(--text-primary) transition-colors duration-200"
                        >
                          {item.cta.label}
                          <span>→</span>
                        </Link>
                      )}
                    </div>

                    {/* Image with Metric Overlay */}
                    <div
                      className={`relative aspect-square lg:aspect-auto lg:h-96 rounded-lg overflow-hidden bg-(--surface-muted) ${
                        isImageLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />

                      {/* Metric Overlay */}
                      {item.metric && (
                        <div
                          className={`absolute bottom-0 ${
                            isImageLeft ? "left-0" : "right-0"
                          } p-6 bg-(--surface-black)/75 backdrop-blur-sm`}
                        >
                          <div className="space-y-1">
                            <div className="text-3xl md:text-4xl font-bold text-(--text-inverse) tracking-tight">
                              {item.metric.value}
                            </div>
                            <p className="text-sm text-(--text-light)">
                              {item.metric.label}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
