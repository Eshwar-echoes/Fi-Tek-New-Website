"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../layout/Container";
import type { CompactShowcaseSectionData } from "@/content/client/fitek/home";
import { Button } from "../ui/button";
import {
  cardRevealPremium,
  cardRevealPremiumReduced,
  hoverElevation,
  inViewViewport,
  sectionReveal,
  sectionRevealReduced,
  staggerContainer,
  staggerContainerReduced,
} from "@/components/motion/landing.motion";

export function CompactShowcaseSection({
  data,
}: Readonly<{ data: CompactShowcaseSectionData }>) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const activeItem = data.items[activeIndex];
  const itemVariants = shouldReduceMotion ? cardRevealPremiumReduced : cardRevealPremium;
  const listVariants = shouldReduceMotion ? staggerContainerReduced : staggerContainer;
  const cardHoverProps = shouldReduceMotion ? undefined : hoverElevation.card;
  const buttonHoverProps = shouldReduceMotion ? undefined : hoverElevation.button;
  const sectionVariants = shouldReduceMotion ? sectionRevealReduced : sectionReveal;

  // Pause previous video when switching items
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      // If the active item is a video, try to play it
      if (activeItem.media.type === "video") {
        // Some browsers require play() to be called after a user gesture
        videoRef.current.play().catch(() => {});
      }
    }
  }, [activeIndex, activeItem.media.type]);

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={inViewViewport}
      className="py-24 bg-(--surface-base)"
    >
      <Container>
          <div className="space-y-12">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-(--text-black)">
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-lg text-(--text-secondary)">
                  {data.subtitle}
                </p>
              )}
            </div>

            {/* Desktop view */}
            <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
              {/* LEFT: Selector */}
              <div className="lg:col-span-5 space-y-8">
                <motion.ul
                  className="space-y-4"
                  variants={listVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={inViewViewport}
                >
                  {data.items.map((item, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <motion.li key={item.id} variants={itemVariants}>
                        <motion.button
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          whileHover={cardHoverProps?.whileHover}
                          whileTap={cardHoverProps?.whileTap}
                          className={`w-full text-left pl-4 pr-3 py-3 border-l-4 transition-colors
                            ${
                              isActive
                                ? "border-(--brand-primary) text-(--text-primary)"
                                : "border-transparent text-(--text-muted) hover:text-(--text-secondary)"
                            }`}
                        >
                          <div className="text-sm font-semibold tracking-tight">
                            <h4 className="text-3xl font-bold tracking-tight text-(--text-black)">
                              {item.label}
                            </h4>
                          </div>
                          {isActive && (
                            <p className="mt-1 text-md text-(--text-secondary)">
                              {item.description}
                            </p>
                          )}
                        </motion.button>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>

              {/* RIGHT: Media Panel */}
              <div className="lg:col-span-7">
                <div className="relative h-105 rounded-2xl overflow-hidden bg-(--surface-muted)">
                  {/* Media */}
                  {activeItem.media.type === "image" && (
                    <img
                      src={activeItem.media.src}
                      alt={activeItem.media.alt}
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable={false}
                    />
                  )}

                  {activeItem.media.type === "video" && (
                    <video
                      ref={videoRef}
                      src={activeItem.media.src}
                      poster={activeItem.media.poster}
                      muted
                      playsInline
                      controls={false}
                      autoPlay
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <div className="space-y-4 max-w-md">
                      <h3 className="text-3xl font-bold text-(--text-inverse)">
                        {activeItem.title}
                      </h3>

                      {/* Metrics */}
                      {activeItem.metric && (
                        <div>
                          <div className="text-4xl font-bold text-(--text-inverse)">
                            {activeItem.metric.value}
                          </div>
                          <p className="text-sm text-(--text-light)">
                            {activeItem.metric.label}
                          </p>
                        </div>
                      )}

                      {activeItem.cta && (
                        <motion.div
                          whileHover={buttonHoverProps?.whileHover}
                          whileTap={buttonHoverProps?.whileTap}
                          transition={buttonHoverProps?.transition}
                        >
                          <Button asChild intent="secondary" context="inverse">
                            <a href={activeItem.cta.href}>
                              {activeItem.cta.label}
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile view */}
            <div className="lg:hidden space-y-6">
              {data.items.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <div key={item.id} className="rounded-xl border border-(--border-subtle) overflow-hidden">
                    {/* Header */}
                    <button
                      onClick={() => setActiveIndex(index)}
                      className="w-full px-5 py-4 text-left"
                    >
                      <h4 className="text-xl font-semibold text-(--text-black)">
                        {item.label}
                      </h4>

                      <p className="mt-1 text-sm text-(--text-secondary)">
                        {item.description}
                      </p>
                    </button>

                    {/* Expanded Media */}
                    {isActive && (
                      <div className="relative h-64 bg-(--surface-muted)">
                        {item.media.type === "image" && (
                          <img
                            src={item.media.src}
                            alt={item.media.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}

                        {item.media.type === "video" && (
                          <video
                            src={item.media.src}
                            poster={item.media.poster}
                            muted
                            playsInline
                            autoPlay
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        )}

                        <div className="absolute inset-0 bg-black/10" />
                      </div>
                    )}

                    {/* Metrics */}
                    {isActive && activeItem.metric && (
                      <div className="pb-2 px-5 space-y-2 mt-4">
                        <div className="text-2xl font-bold text-(--brand-primary)">
                          {activeItem.metric.value}
                        </div>
                        <p className="text-sm text-(--text-secondary)">
                          {activeItem.metric.label}
                        </p>
                        {activeItem.cta && (
                        <motion.div
                          whileHover={buttonHoverProps?.whileHover}
                          whileTap={buttonHoverProps?.whileTap}
                          transition={buttonHoverProps?.transition}
                        >
                          <Button asChild intent="primary" context="inverse">
                            <a href={activeItem.cta.href}>
                              {activeItem.cta.label}
                            </a>
                          </Button>
                        </motion.div>)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
      </Container>
    </motion.section>
  );
}

