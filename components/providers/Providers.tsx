"use client";

import { MotionConfig } from "framer-motion";
import { CurrencyProvider } from "./CurrencyProvider";
import { PlannerModalProvider } from "./PlannerModalProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <CurrencyProvider>
        <PlannerModalProvider>{children}</PlannerModalProvider>
      </CurrencyProvider>
    </MotionConfig>
  );
}
