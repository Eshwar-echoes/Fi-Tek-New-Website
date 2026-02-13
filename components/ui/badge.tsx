import React from "react";

// Placeholder UI primitive for Phase 1 demo skeleton.

export function Badge({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <span>{children}</span>;
}
