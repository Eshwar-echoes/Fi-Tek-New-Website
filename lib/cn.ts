// Class name utilities will be introduced when UI primitives are finalized.
// Intentionally minimal during Demo Skeleton Stabilization (Phase 1).

export function cn(...args: Array<string | false | undefined>) {
  return args.filter(Boolean).join(" ");
}
