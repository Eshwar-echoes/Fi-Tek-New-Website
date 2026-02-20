"use client";

import { useRef, useState, useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { SectionReveal } from "@/components/motion/SectionReveal";
import type { PlatformTransformationData } from "@/types/homeEnterprise";

const MODES = [
  { id: "trading", label: "Trading Mode" },
  { id: "accounts", label: "Account Mode" },
  { id: "performance", label: "Performance Mode" },
  { id: "reporting", label: "Reporting Mode" },
  { id: "alternatives", label: "Alternatives Mode" },
  { id: "client", label: "Client Mode" },
] as const;

type ModeId = (typeof MODES)[number]["id"];

interface PlatformTransformationSectionProps {
  data: PlatformTransformationData;
}

function UnifiedSystemSurface() {
  const [activeMode, setActiveMode] = useState<ModeId>("trading");
  const [displayMode, setDisplayMode] = useState<ModeId>("trading");
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const rowsByMode: Record<ModeId, string[][]> = {
    trading: [
      ["ORD-48291", "AAPL", "Buy", "2,500", "Pending Approval"],
      ["ORD-48276", "MSFT", "Sell", "1,200", "Validated"],
      ["ORD-48259", "NVDA", "Buy", "900", "Exception"],
      ["ORD-48244", "AMZN", "Sell", "1,450", "In Progress"],
    ],
    accounts: [
      ["ACC-10933", "Westbridge", "Active", "$2.84M", "Validated"],
      ["ACC-10891", "Pine Ridge", "Review", "$1.26M", "Pending Approval"],
      ["ACC-11042", "North Harbor", "Active", "$6.11M", "Validated"],
      ["ACC-10774", "Elm Crest", "Pending", "$0.94M", "Exception"],
    ],
    performance: [
      ["PRF-2041", "YTD Return", "+8.91%", "Daily", "Validated"],
      ["PRF-2042", "Tracking Error", "0.42%", "Daily", "In Progress"],
      ["PRF-2043", "Attribution", "99.3%", "Daily", "Validated"],
      ["PRF-2044", "Composite QA", "98.7%", "Daily", "Pending Approval"],
    ],
    reporting: [
      ["RPT-8801", "Quarterly Pack", "09:42", "Client", "Validated"],
      ["RPT-8802", "Reg Extract", "09:18", "Regulatory", "In Progress"],
      ["RPT-8803", "Board Summary", "08:54", "Internal", "Pending Approval"],
      ["RPT-8804", "Risk Annex", "08:21", "Internal", "Validated"],
    ],
    alternatives: [
      ["ALT-5103", "Capital Call", "-250,000", "2026-02-18", "Validated"],
      ["ALT-5104", "Distribution", "+132,000", "2026-02-18", "Validated"],
      ["ALT-5105", "Expense", "-18,400", "2026-02-17", "Pending Approval"],
      ["ALT-5106", "Allocation", "+74,500", "2026-02-17", "In Progress"],
    ],
    client: [
      ["CLT-3001", "Portal Sync", "Live", "2 min ago", "Validated"],
      ["CLT-3002", "Entitlements", "Checked", "4 min ago", "Validated"],
      ["CLT-3003", "Document Push", "Queued", "6 min ago", "In Progress"],
      ["CLT-3004", "Activity Feed", "Live", "3 min ago", "Validated"],
    ],
  };

  const columnsByMode: Record<ModeId, string[]> = {
    trading: ["ID", "Symbol", "Side", "Qty", "Status"],
    accounts: ["ID", "Client", "State", "Balance", "Status"],
    performance: ["ID", "Metric", "Value", "Cycle", "Status"],
    reporting: ["ID", "Report", "Updated", "Channel", "Status"],
    alternatives: ["ID", "Entry", "Amount", "Date", "Status"],
    client: ["ID", "Control", "State", "Updated", "Status"],
  };

  const handleModeChange = (nextMode: ModeId) => {
    if (nextMode === activeMode) return;
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    setActiveMode(nextMode);
    setIsVisible(false);
    timeoutRef.current = window.setTimeout(() => {
      setDisplayMode(nextMode);
      setIsVisible(true);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const activeRows = rowsByMode[displayMode];
  const activeColumns = columnsByMode[displayMode];

  return (
    <div>
      <div
        className="inline-flex border border-(--border-subtle) bg-[var(--leroux-transform-tab-bg)] p-0.5"
        role="tablist"
        aria-label="System modes"
      >
        {MODES.map((mode) => {
          const isActive = mode.id === activeMode;
          return (
            <button
              key={mode.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleModeChange(mode.id)}
              className={`px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] transition-colors ${
                isActive
                  ? "bg-(--surface-base) text-(--text-primary)"
                  : "text-(--text-light) hover:text-(--text-inverse)"
              }`}
            >
              {mode.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 border border-(--border-subtle) bg-(--surface-base)">
        <div className="grid grid-cols-12 border-b border-(--border-subtle) bg-[var(--leroux-transform-header-bg)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-(--text-secondary)">
          <span className="col-span-4">Environment: Production</span>
          <span className="col-span-4 text-center">Data Status: Synced</span>
          <span className="col-span-4 text-right">Controls: Active</span>
        </div>

        <div className={`transition-opacity duration-150 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-5 border-b border-(--border-subtle) bg-(--surface-muted) px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-(--text-secondary)">
            {activeColumns.map((column) => (
              <span key={column}>{column}</span>
            ))}
          </div>
          {activeRows.map((row) => (
            <div
              key={row.join("-")}
              className="grid grid-cols-5 border-b border-(--border-subtle) px-2 py-1 text-[11px] text-(--text-primary)"
            >
              {row.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PlatformTransformationSection({
  data,
}: Readonly<PlatformTransformationSectionProps>) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--leroux-transform-start)_0%,var(--leroux-transform-end)_100%)] py-20 md:py-24">
      <Container>
        <SectionReveal>
          <h2 className="text-4xl leading-tight text-(--text-primary) md:text-5xl">
            {data.heading}
          </h2>
          <p className="mt-4 max-w-3xl text-sm text-(--text-secondary) md:text-base">
            {data.intro}
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SectionReveal className="border border-[var(--leroux-card-border)] bg-[var(--leroux-card-bg)] p-6 shadow-[var(--leroux-card-shadow)]">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-(--text-secondary)">
              {data.fragmentedLabel}
            </p>
            <p className="mt-2 text-sm text-(--text-secondary)">
              {data.fragmentedIntro}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {data.fragmentedModules.map((module) => (
                <div
                  key={module}
                  className="border border-[var(--leroux-card-border)] bg-[var(--leroux-transform-chip-bg)] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.06em] text-(--text-primary)"
                >
                  {module}
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="border border-[var(--leroux-transform-unified-border)] bg-[var(--leroux-transform-unified-bg)] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--leroux-transform-unified-text)]">
              {data.unifiedLabel}
            </p>
            <p className="mt-2 text-sm text-[var(--leroux-transform-unified-text)]">
              {data.unifiedIntro}
            </p>
            <div className="mt-5">
              <UnifiedSystemSurface />
            </div>
          </SectionReveal>
        </div>
      </Container>
    </section>
  );
}
