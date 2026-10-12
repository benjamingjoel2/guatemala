import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/motion";

export function DetailSection({ id, title, children, className }: { id: string; title: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-40 border-b border-line py-10 md:py-14", className)}>
      <Reveal>
        <h2 id={`${id}-title`} className="t-h4 mb-6 md:mb-8">{title}</h2>
        {children}
      </Reveal>
    </section>
  );
}

export function CheckList({ items, variant = "check", columns = 2 }: { items: string[]; variant?: "check" | "x"; columns?: 1 | 2 }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-3", columns === 2 && "sm:grid-cols-2")}>
      {items.map((it) => (
        <li key={it} className="t-md flex gap-3 font-normal text-bone/85">
          <span aria-hidden className={cn("mt-1 flex size-4 shrink-0 items-center justify-center rounded-full", variant === "check" ? "bg-jade/30 text-jade-light" : "bg-terra/20 text-adobe")}>
            {variant === "check" ? (
              <svg viewBox="0 0 16 16" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m3 8.5 3.2 3L13 4.5" /></svg>
            ) : (
              <svg viewBox="0 0 16 16" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m4 4 8 8M12 4l-8 8" /></svg>
            )}
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}
