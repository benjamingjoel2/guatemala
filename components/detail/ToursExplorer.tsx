"use client";

import { useT, useTf } from "@/i18n/client";
import { msg } from "@/i18n/locales";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { BudgetTier, Region, Tour } from "@/data/types";
import { regionLabels } from "@/config/site";
import { TourCard } from "@/components/cards/TourCard";
import { Chip } from "@/components/ui/form";
import { PlanButton } from "@/components/ui/PlanButton";

const durations = [
  { id: "short", label: msg("Up to 6 days"), test: (d: number) => d <= 6 },
  { id: "mid", label: msg("7–9 days"), test: (d: number) => d >= 7 && d <= 9 },
  { id: "long", label: msg("10+ days"), test: (d: number) => d >= 10 },
] as const;

const budgets: { id: BudgetTier; label: string }[] = [
  { id: "comfort", label: msg("Comfort") },
  { id: "premium", label: msg("Premium") },
  { id: "ultra", label: msg("Ultra luxury") },
];

export function ToursExplorer({ tours }: { tours: Tour[] }) {
  const t = useT();
  const tf = useTf();
  const [region, setRegion] = useState<Region | "all">("all");
  const [duration, setDuration] = useState<string>("all");
  const [budget, setBudget] = useState<BudgetTier | "all">("all");

  const regions = useMemo(() => Array.from(new Set(tours.flatMap((t) => t.regions))) as Region[], [tours]);

  const filtered = tours.filter(
    (t) =>
      (region === "all" || t.regions.includes(region)) &&
      (duration === "all" || durations.find((d) => d.id === duration)!.test(t.days)) &&
      (budget === "all" || t.budget === budget),
  );

  const reset = () => {
    setRegion("all");
    setDuration("all");
    setBudget("all");
  };

  return (
    <div>
      <div className="-mx-5 mb-0 grid gap-6 border-t border-line px-5 py-8 md:-mx-10 md:px-10 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div role="radiogroup" aria-label={t("Filter by region")} className="flex flex-col gap-3">
          <span className="t-xs text-mute">{t("Region")}</span>
          <div className="flex flex-wrap gap-2">
            <Chip selected={region === "all"} onClick={() => setRegion("all")}>{t("All")}</Chip>
            {regions.map((r) => (
              <Chip key={r} selected={region === r} onClick={() => setRegion(r)}>{t(regionLabels[r])}</Chip>
            ))}
          </div>
        </div>
        <div role="radiogroup" aria-label={t("Filter by duration")} className="flex flex-col gap-3">
          <span className="t-xs text-mute">{t("Duration")}</span>
          <div className="flex flex-wrap gap-2">
            <Chip selected={duration === "all"} onClick={() => setDuration("all")}>{t("Any")}</Chip>
            {durations.map((d) => (
              <Chip key={d.id} selected={duration === d.id} onClick={() => setDuration(d.id)}>{t(d.label)}</Chip>
            ))}
          </div>
        </div>
        <div role="radiogroup" aria-label={t("Filter by budget")} className="flex flex-col gap-3">
          <span className="t-xs text-mute">{t("Budget")}</span>
          <div className="flex flex-wrap gap-2">
            <Chip selected={budget === "all"} onClick={() => setBudget("all")}>{t("Any")}</Chip>
            {budgets.map((b) => (
              <Chip key={b.id} selected={budget === b.id} onClick={() => setBudget(b.id)}>{t(b.label)}</Chip>
            ))}
          </div>
        </div>
      </div>

      <p className="t-md -mx-5 border-t border-line px-5 py-4 text-mute md:-mx-10 md:px-10" aria-live="polite">
        {tf("Showing {n} of {total} tours", { n: filtered.length, total: tours.length })}
        {filtered.length !== tours.length && (
          <button type="button" onClick={reset} className="ml-4 text-bone underline underline-offset-4 hover:text-adobe">{t("Clear filters")}</button>
        )}
      </p>

      {filtered.length ? (
        <div className="-mx-5 overflow-hidden border-t border-line md:-mx-10">
          <motion.div layout className="-mr-px grid lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((t) => (
                <motion.div
                  key={t.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="border-b border-r border-line"
                >
                  <TourCard tour={t} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col items-start gap-5 border-t border-line py-16">
          <p className="t-h4">{t("No set tour matches those filters, which is fine: we build every trip from scratch.")}</p>
          <PlanButton>{t("Design a custom trip")}</PlanButton>
        </div>
      )}
    </div>
  );
}
