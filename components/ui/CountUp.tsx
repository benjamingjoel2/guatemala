"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

// useLayoutEffect warns during SSR; fall back to useEffect on the server
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Counts the leading number of `value` up from 0 when it scrolls into view.
 * Anything around the number ("+", "%", "/7", "2,400+") stays as written.
 * Server render and reduced-motion users get the final value straight away.
 */
export function CountUp({ value, duration = 1.8, className }: { value: string; duration?: number; className?: string }) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const suffix = match?.[3] ?? "";
  const useCommas = match ? match[2].includes(",") : false;
  const animatable = !!match && target > 0;

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(target);
  const started = useRef(false);

  // Reset to 0 before first paint so the count starts from zero
  useIsoLayoutEffect(() => {
    if (!animatable || reduceMotion) return;
    setCurrent(0);
  }, []);

  useEffect(() => {
    if (!animatable || reduceMotion || !inView || started.current) return;
    started.current = true;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target, duration, animatable]);

  if (!match) return <span className={className}>{value}</span>;

  const shown = useCommas ? current.toLocaleString("en-US") : String(current);
  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden style={{ fontVariantNumeric: "lining-nums tabular-nums" }}>
        {prefix}
        {shown}
        {suffix}
      </span>
    </span>
  );
}
