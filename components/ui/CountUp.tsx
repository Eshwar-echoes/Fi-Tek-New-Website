"use client";

import { useEffect, useState } from "react";

export function CountUp({
  value,
  duration = 1200,
  decimals = 1,
}: Readonly<{
  value: number;
  duration?: number;
  decimals?: number;
}>) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);

      setCount(progress * value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [value, duration]);

  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: decimals,
  }).format(count);

  return <span>{formatted}</span>;
}
