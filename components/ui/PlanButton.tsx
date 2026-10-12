"use client";

import { usePlannerModal } from "@/components/providers/PlannerModalProvider";
import { Arrow, buttonClass } from "./Button";

/** Opens the trip planner modal. */
export function PlanButton({
  children = "Start planning",
  variant = "accent",
  className,
  route,
}: {
  children?: React.ReactNode;
  variant?: "accent" | "outline" | "light";
  className?: string;
  route?: string;
}) {
  const { open } = usePlannerModal();
  return (
    <button type="button" onClick={() => open({ route })} className={buttonClass(variant, className)}>
      <span>{children}</span>
      <Arrow />
    </button>
  );
}
