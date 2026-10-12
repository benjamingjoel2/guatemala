import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("t-md inline-flex items-center gap-2 text-mute", className)}>
      <span aria-hidden className="size-1.5 rotate-45 bg-terra" />
      {children}
    </p>
  );
}
