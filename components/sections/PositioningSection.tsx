"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { EcosystemDiagram } from "./LifecycleDiagram";
import { motion } from "framer-motion";

// Define or import the type from a shared types file if available
export type PlatformDomainId = string;

export interface PlatformDomain {
  id: PlatformDomainId;
  title: string;
  points: string[];
}

export interface PlatformCoverageData {
  title: string;
  intro: string;
  domains: PlatformDomain[];
}

export interface PositioningSectionProps {
  data: PlatformCoverageData;
}

export function PositioningSection({ data }: Readonly<PositioningSectionProps>) {
  const [activeId, setActiveId] = useState<PlatformDomainId>(
    data.domains[0].id
  );
  const activeDomain = data.domains.find((d) => d.id === activeId) || data.domains[0];

  return (
    <section className="py-24 bg-(--surface-muted)">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-(--text-black)">
              {data.title}
            </h2>
            <p className="text-base md:text-lg text-(--text-secondary) leading-relaxed">
              {data.intro}
            </p>
          </div>

          {/* Two-Column Layout: Diagram (left) | Domain Content (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
            {/* Left Column: Ecosystem Diagram - Primary Interaction */}
            <div className="order-2 lg:order-1">
              <EcosystemDiagram
                activeDomain={activeId}
                onSelect={(id) => setActiveId(id)}
              />
            </div>

            {/* Right Column: Domain Title + Bullet Points */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Active Domain Title */}
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-(--text-black)">
                  {activeDomain.title}
                </h3>
              </motion.div>

              {/* Bullet Points - Updates on diagram interaction */}
              <motion.div
                key={`bullets-${activeId}`}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {activeDomain.points.map((point) => (
                  <div key={point} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-(--surface-black) mt-1.5 shrink-0"></div>
                    <p className="text-sm text-(--text-secondary) leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
