"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { currencies, type CurrencyCode } from "@/config/site";
import { useCurrency } from "@/components/providers/CurrencyProvider";
import { cn } from "@/lib/utils";

const codes = Object.keys(currencies) as CurrencyCode[];

export function CurrencySwitcher({ className, align = "right", up = false }: { className?: string; align?: "left" | "right"; up?: boolean }) {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Currency: ${currency}. Change currency`}
        onClick={() => setOpen((o) => !o)}
        className="t-btn inline-flex h-9 items-center gap-1.5 text-mute transition-colors hover:text-bone"
        suppressHydrationWarning
      >
        <span className="text-bone" suppressHydrationWarning>{currencies[currency].symbol}</span>
        <span suppressHydrationWarning>{currency}</span>
        <svg aria-hidden viewBox="0 0 10 6" className={cn("w-2.5 transition-transform", open && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="m1 1 4 4 4-4" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label="Select currency"
            initial={{ opacity: 0, y: up ? 6 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: up ? 6 : -6 }}
            transition={{ duration: 0.18 }}
            className={cn(
              up ? "absolute bottom-full z-50 mb-2 w-52" : "absolute top-full z-50 mt-2 w-52",
              "border border-line-strong bg-ink-2/95 py-1 backdrop-blur-xl",
              align === "right" ? "right-0" : "left-0",
            )}
          >
            {codes.map((code) => (
              <li key={code} role="option" aria-selected={code === currency}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency(code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition-colors hover:bg-line",
                    code === currency ? "text-bone" : "text-mute",
                  )}
                >
                  <span className="font-semibold">{code}</span>
                  <span className="text-xs text-faint">{currencies[code].label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
