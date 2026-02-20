import React from "react";
import clsx from "clsx";

type BadgeTone = "default" | "brand";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: BadgeTone;
}

const badgeToneClasses: Record<BadgeTone, string> = {
  default:
    "border border-(--border-subtle) bg-(--surface-muted) text-(--text-secondary)",
  brand:
    "border border-(--overlay-white-soft) bg-(--overlay-light) text-(--text-inverse)",
};

export function Badge({
  children,
  className,
  tone = "default",
}: Readonly<BadgeProps>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        badgeToneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
