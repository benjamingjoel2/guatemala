import { cn } from "@/lib/utils";

/** Thin woven-textile accent inspired by huipil brocade bands. */
export function HuipilStripe({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("flex h-1 w-full", className)}>
      <span className="flex-[3] bg-huipil-rose" />
      <span className="flex-1 bg-huipil-marigold" />
      <span className="flex-[2] bg-huipil-indigo" />
      <span className="flex-1 bg-jade" />
      <span className="flex-[2] bg-terra" />
      <span className="flex-1 bg-huipil-marigold" />
      <span className="flex-[3] bg-huipil-indigo" />
      <span className="flex-1 bg-huipil-rose" />
    </div>
  );
}

/** Small zig-zag glyph used as decorative divider */
export function ZigZag({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 60 9" className={cn("h-2 w-14", className)} fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M0 8 7.5 1 15 8l7.5-7L30 8l7.5-7L45 8l7.5-7L60 8" />
    </svg>
  );
}
