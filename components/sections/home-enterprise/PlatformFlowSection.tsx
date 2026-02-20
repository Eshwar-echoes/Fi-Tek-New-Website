"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Badge } from "@/components/ui/badge";
import { hoverElevation, inViewViewport } from "@/components/motion/landing.motion";
import type { PlatformFlowData } from "@/types/homeEnterprise";

interface PlatformFlowSectionProps {
  data: PlatformFlowData;
}

type NodePoint = {
  x: number;
  y: number;
};

const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 380;
const SPINE_Y = 298;

const nodePoints: NodePoint[] = [
  { x: 110, y: 92 },
  { x: 300, y: 84 },
  { x: 490, y: 96 },
  { x: 680, y: 84 },
  { x: 870, y: 96 },
  { x: 1060, y: 88 },
];

function buildSegmentPath(a: NodePoint, b: NodePoint) {
  const dx = b.x - a.x;
  const c1x = a.x + dx * 0.45;
  const c2x = b.x - dx * 0.45;
  return `M ${a.x} ${a.y} C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`;
}

function buildMainPath(points: NodePoint[]) {
  if (points.length < 2) return "";

  const [first, ...rest] = points;
  let path = `M ${first.x} ${first.y}`;

  for (let index = 0; index < rest.length; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const dx = next.x - current.x;
    const c1x = current.x + dx * 0.45;
    const c2x = next.x - dx * 0.45;
    path += ` C ${c1x} ${current.y}, ${c2x} ${next.y}, ${next.x} ${next.y}`;
  }

  return path;
}

export function PlatformFlowSection({ data }: Readonly<PlatformFlowSectionProps>) {
  const steps = data.steps.slice(0, 6);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  const mainPath = useMemo(() => buildMainPath(nodePoints), []);
  const segments = useMemo(
    () =>
      nodePoints
        .slice(0, -1)
        .map((point, index) => buildSegmentPath(point, nodePoints[index + 1])),
    []
  );

  return (
    <section className="bg-[radial-gradient(120%_120%_at_50%_0%,var(--leroux-flow-start)_0%,var(--leroux-flow-mid)_52%,var(--leroux-flow-end)_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <Badge className="border-[var(--leroux-flow-badge-border)] bg-[var(--leroux-flow-badge-bg)] text-[var(--leroux-flow-badge-text)]">
            Interactive Workflow Map
          </Badge>
          <h2 className="mt-4 text-4xl leading-tight text-(--text-inverse) md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-[var(--leroux-dark-text-soft)]">{data.intro}</p>
        </SectionReveal>

        <div className="mt-10 space-y-4 xl:hidden">
          {steps.map((step, index) => {
            const isActive = activeNodeIndex === index;

            return (
              <motion.button
                key={step.id}
                type="button"
                onClick={() => setActiveNodeIndex(index)}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inViewViewport}
                transition={{ duration: 0.32, delay: index * 0.04, ease: "easeOut" }}
                className={`relative w-full rounded-sm border p-5 text-left transition-colors ${
                  isActive
                    ? "border-[var(--leroux-flow-card-active-border)] bg-[var(--leroux-flow-card-active-bg)]"
                    : "border-[var(--leroux-flow-card-border)] bg-[var(--leroux-flow-card-bg)]"
                }`}
              >
                {index < steps.length - 1 && (
                  <span
                    className="absolute left-[1.7rem] top-[3.4rem] h-8 w-px"
                    style={{ backgroundColor: "var(--leroux-flow-connector-default)" }}
                    aria-hidden
                  />
                )}

                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold"
                    style={{
                      border: isActive
                        ? "1.6px solid var(--leroux-flow-node-border-active)"
                        : "1.2px solid var(--leroux-flow-node-border)",
                      color: isActive
                        ? "var(--leroux-flow-node-dot-active)"
                        : "var(--leroux-dark-text-strong)",
                      backgroundColor: isActive
                        ? "var(--leroux-flow-node-bg-active)"
                        : "var(--leroux-flow-node-bg)",
                    }}
                  >
                    {index + 1}
                  </span>

                  <div>
                    <h3 className="text-2xl leading-tight text-(--text-inverse)">{step.title}</h3>
                    <p className="mt-2 text-sm text-[var(--leroux-dark-text-soft)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-12 hidden xl:block">
          <div className="relative mx-auto h-[380px] min-w-[1040px] max-w-[1200px] rounded-sm border border-[var(--leroux-dark-panel-border)] bg-[var(--leroux-dark-panel-bg)] p-4 shadow-[var(--leroux-dark-panel-shadow)]">
            <svg
              viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
              className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]"
              fill="none"
              aria-hidden
            >
              <rect
                x="30"
                y={SPINE_Y}
                width={VIEWBOX_WIDTH - 60}
                height="38"
                rx="19"
                className="fill-[var(--leroux-flow-spine-surface)]"
              />

              <rect
                x="30"
                y={SPINE_Y}
                width={VIEWBOX_WIDTH - 60}
                height="2"
                className="fill-[var(--leroux-flow-spine-line)]"
              />

              <path
                d={mainPath}
                className="flow-track"
                stroke="var(--leroux-flow-track)"
                strokeWidth="2.1"
                strokeLinecap="round"
              />

              {segments.map((segmentPath, index) => {
                const isHighlighted =
                  index === activeNodeIndex || index === activeNodeIndex - 1;

                return (
                  <path
                    key={`segment-${index}`}
                    d={segmentPath}
                    stroke={
                      isHighlighted
                        ? "var(--leroux-flow-track-active)"
                        : "var(--leroux-flow-track-inactive)"
                    }
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="transition-all duration-200"
                  />
                );
              })}

              {nodePoints.map((point, index) => {
                const isHighlighted = activeNodeIndex === index;
                const isDimmed = activeNodeIndex !== index;

                return (
                  <g key={`connector-${index}`}>
                    <path
                      d={`M ${point.x} ${point.y + 18} L ${point.x} ${SPINE_Y}`}
                      stroke={
                        isHighlighted
                          ? "var(--leroux-flow-connector-active)"
                          : isDimmed
                          ? "var(--leroux-flow-connector-dim)"
                          : "var(--leroux-flow-connector-default)"
                      }
                      strokeWidth={isHighlighted ? "2" : "1.2"}
                      strokeLinecap="round"
                      className="transition-all duration-200"
                    />
                  </g>
                );
              })}

              <text
                x={VIEWBOX_WIDTH / 2}
                y={SPINE_Y + 24}
                textAnchor="middle"
                className="fill-[var(--leroux-flow-label)] text-[12px] font-semibold tracking-[0.12em] uppercase"
              >
                Unified Data and Control Layer
              </text>
            </svg>

            {steps.map((step, index) => {
              const point = nodePoints[index];
              const isHighlighted = activeNodeIndex === index;
              const isDimmed = activeNodeIndex !== index;

              return (
                <button
                  key={step.id}
                  type="button"
                  onMouseEnter={() => setActiveNodeIndex(index)}
                  onFocus={() => setActiveNodeIndex(index)}
                  className="absolute -translate-x-1/2 outline-none"
                  style={{ left: point.x + 16, top: point.y + 16 }}
                  aria-label={step.title}
                >
                  <span
                    className="relative block h-9 w-9 rounded-full transition-all duration-200"
                    style={{
                      border: isHighlighted
                        ? "1.8px solid var(--leroux-flow-node-border-active)"
                        : "1.2px solid var(--leroux-flow-node-border)",
                      opacity: isDimmed ? 0.45 : 1,
                      backgroundColor: isHighlighted
                        ? "var(--leroux-flow-node-bg-active)"
                        : "var(--leroux-flow-node-bg)",
                    }}
                  >
                    <span
                      className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200"
                      style={{
                        backgroundColor: isHighlighted
                          ? "var(--leroux-flow-node-dot-active)"
                          : "var(--leroux-flow-node-dot)",
                      }}
                    />
                  </span>

                  <span
                    className="mt-3 block w-36 -translate-x-[52px] text-center text-[13px] font-medium leading-snug text-(--text-light) transition-opacity duration-200"
                    style={{ opacity: isDimmed ? 0.5 : 1 }}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 hidden gap-4 xl:grid xl:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inViewViewport}
              transition={{ duration: 0.32, delay: index * 0.04, ease: "easeOut" }}
              whileHover={hoverElevation.card.whileHover}
              whileTap={hoverElevation.card.whileTap}
              className={`rounded-sm border p-5 transition-colors ${
                activeNodeIndex === index
                  ? "border-[var(--leroux-flow-card-active-border)] bg-[var(--leroux-flow-card-active-bg)]"
                  : "border-[var(--leroux-flow-card-border)] bg-[var(--leroux-flow-card-bg)]"
              }`}
            >
              <h3 className="text-2xl leading-tight text-(--text-inverse)">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--leroux-dark-text-soft)]">{step.description}</p>
            </motion.article>
          ))}
        </div>

        <style jsx>{`
          .flow-track {
            stroke-dasharray: 7 10;
            animation: flow-dash 8s linear infinite;
          }

          @keyframes flow-dash {
            to {
              stroke-dashoffset: -68;
            }
          }
        `}</style>
      </Container>
    </section>
  );
}
