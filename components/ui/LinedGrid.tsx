import { cn } from "@/lib/utils";

/**
 * Edge-to-edge grid with 1px hairlines between cells (reference grid system).
 * Each child gets right + bottom borders; the outer right edge is clipped.
 */
export function LinedGrid({ children, className, bleed = true }: { children: React.ReactNode; className?: string; bleed?: boolean }) {
  return (
    <div className={cn("overflow-hidden border-t border-line", bleed && "-mx-5 md:-mx-10")}>
      <div className={cn("-mr-px grid [&>*]:border-b [&>*]:border-r [&>*]:border-line", className)}>{children}</div>
    </div>
  );
}
