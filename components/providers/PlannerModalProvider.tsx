"use client";

import { createContext, useCallback, useContext, useState } from "react";
import dynamic from "next/dynamic";

const PlannerModal = dynamic(() => import("@/components/planner/PlannerModal"), { ssr: false });

type PlannerModalContextValue = {
  open: (preset?: { route?: string }) => void;
  close: () => void;
};

const PlannerModalContext = createContext<PlannerModalContextValue | null>(null);

export function PlannerModalProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ open: boolean; route?: string }>({ open: false });

  const open = useCallback((preset?: { route?: string }) => setState({ open: true, route: preset?.route }), []);
  const close = useCallback(() => setState({ open: false }), []);

  return (
    <PlannerModalContext.Provider value={{ open, close }}>
      {children}
      {state.open && <PlannerModal onClose={close} presetRoute={state.route} />}
    </PlannerModalContext.Provider>
  );
}

export function usePlannerModal() {
  const ctx = useContext(PlannerModalContext);
  if (!ctx) throw new Error("usePlannerModal must be used inside PlannerModalProvider");
  return ctx;
}
