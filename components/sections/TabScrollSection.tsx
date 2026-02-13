"use client";

import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { TabScrollAnimationData } from "@/types/TabScrollSection";

export function TabScrollSection({
  data,
}: Readonly<{
  data: TabScrollAnimationData;
}>) {
  return (
    <section className="relative bg-surface-muted py-12">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column (Tabs + Description) */}
          <div className="flex flex-col justify-center w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl font-semibold text-text-primary"
            >
              Featured Element
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-2xl font-semibold text-text-primary mt-6"
            >
              {data.title}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mt-6"
            >
              {/* Tab List */}
              <ul className="space-y-4">
                {data.tabs.map((tab, index) => (
                  <li key={index} className="p-4 bg-surface-base border border-border-subtle rounded-md">
                    <span className="font-semibold text-text-primary">{tab.title}</span>
                    <p className="text-text-muted">{tab.description}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex gap-4 mt-8"
            >
              <Button
                intent="primary"
                context="inverse"
                type="button"
                className="inline-flex items-center gap-2"
              >
                Explore More
                <span aria-hidden>➔</span>
              </Button>
              <Button
                intent="secondary"
                context="inverse"
                type="button"
                className="inline-flex items-center gap-2"
              >
                Clone Now
                <span aria-hidden>➔</span>
              </Button>
            </motion.div>
          </div>

          {/* Right Column (Image) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.img
              src={data.image}
              alt="Product Image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
