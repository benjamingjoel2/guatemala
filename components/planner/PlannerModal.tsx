"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TripPlanner } from "./TripPlanner";
import { Logo } from "@/components/layout/Logo";

export default function PlannerModal({ onClose, presetRoute }: { onClose: () => void; presetRoute?: string }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Simple focus trap
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end">
      <motion.div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Plan your trip"
        tabIndex={-1}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex h-full w-full max-w-4xl flex-col overflow-y-auto border-l border-line-strong bg-ink focus:outline-none"
      >
        <div className="sticky top-0 z-10 flex h-[4.5rem] shrink-0 items-center justify-between border-b border-line-strong bg-ink/90 px-5 backdrop-blur md:px-10">
          <Logo onClick={onClose} />
          <button type="button" onClick={onClose} aria-label="Close trip planner" className="t-btn flex items-center gap-2 text-mute hover:text-bone">
            Close
            <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 3 10 10M13 3 3 13" /></svg>
          </button>
        </div>
        <div className="px-5 py-10 md:px-10 md:py-12">
          <TripPlanner presetRoute={presetRoute} onDone={onClose} compact />
        </div>
      </motion.div>
    </div>
  );
}
