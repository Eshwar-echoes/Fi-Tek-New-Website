"use client";

import { motion } from "framer-motion";
import type { DashboardIllustrationContent } from "@/types/illustration";

interface Props {
  data: DashboardIllustrationContent;
}

export function DashboardIllustration({ data }: Readonly<Props>) {
  const accent = data.accentColor ?? "currentColor";

  return (
    <motion.svg
      viewBox="0 0 1200 700"
      className="w-full h-auto"
      fill="none"
      initial="hidden"
      animate="visible"
      aria-hidden="true"
    >
      {/* Header */}
      <motion.rect
        x="40"
        y="30"
        width="1120"
        height="56"
        rx="12"
        fill="var(--surface-muted)"
        variants={{
          hidden: { opacity: 0, y: -10 },
          visible: { opacity: 1, y: 0 },
        }}
      />

      {/* KPI Cards */}
      {new Array(data.kpis).fill(null).map((_, i) => (
        <motion.rect
          key={i}
          x={40 + i * 260}
          y={110}
          width="240"
          height="80"
          rx="14"
          fill="var(--surface-base)"
          stroke="var(--border-subtle)"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.1 + i * 0.08 },
            },
          }}
        />
      ))}

      {/* Allocation (Donut Placeholder) */}
      {data.showAllocation && (
        <motion.circle
          cx="200"
          cy="340"
          r="70"
          stroke={accent}
          strokeWidth="10"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { delay: 0.4 } },
          }}
        />
      )}

      {/* Performance Line */}
      {data.showPerformance && (
        <motion.path
          d="M420 380 C520 300, 620 420, 720 340 S920 360, 1040 300"
          stroke={accent}
          strokeWidth="3"
          fill="none"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { delay: 0.5 } },
          }}
        />
      )}

      {/* Table Rows */}
      {data.showTables &&
        new Array(5).fill(null).map((_, i) => (
          <motion.rect
            key={i}
            x="420"
            y={420 + i * 26}
            width="620"
            height="14"
            rx="6"
            fill="var(--surface-muted)"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.6 + i * 0.05 },
              },
            }}
          />
        ))}
    </motion.svg>
  );
}
