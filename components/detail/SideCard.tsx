import { cn } from "@/lib/utils";

/** Sticky summary card on detail pages (reference price/booking card). */
export function SideCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <aside className={cn("lg:sticky lg:top-40", className)}>
      <div className="flex flex-col gap-6 border border-line-strong bg-ink-2 p-6 md:p-8">{children}</div>
    </aside>
  );
}

export function MetaRow({ icon, label, value }: { icon?: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-b-0 last:pb-0">
      <span className="t-xs inline-flex items-center gap-2 text-mute">
        {icon}
        {label}
      </span>
      <span className="t-md text-right">{value}</span>
    </div>
  );
}
