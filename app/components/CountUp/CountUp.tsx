"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  /** When provided, animation is controlled by this flag instead of scroll visibility (e.g. active carousel slide). */
  active?: boolean;
  className?: string;
};

function formatNumber(value: number, separator: string, decimals: number) {
  const fixed = value.toFixed(decimals);
  const [whole, fraction] = fixed.split(".");
  const withSeparator = separator
    ? whole.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : whole;
  return fraction ? `${withSeparator},${fraction}` : withSeparator;
}

export function CountUp({
  value,
  duration = 1600,
  prefix = "",
  suffix = "",
  separator = ".",
  decimals = 0,
  active,
  className,
}: CountUpProps) {
  const [display, setDisplay] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);
  const frameRef = useRef<number>(undefined);

  useEffect(() => {
    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(value * eased);
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };
      frameRef.current = requestAnimationFrame(tick);
    };

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    if (active !== undefined) {
      setDisplay(0);
      if (active) animate();
      return () => {
        if (frameRef.current) cancelAnimationFrame(frameRef.current);
      };
    }

    const el = elementRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [active, value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {formatNumber(display, separator, decimals)}
      {suffix}
    </span>
  );
}
