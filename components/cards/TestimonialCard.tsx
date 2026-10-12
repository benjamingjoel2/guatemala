import type { Testimonial } from "@/data/types";
import { IconStar } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function TestimonialCard({ t, className }: { t: Testimonial; className?: string }) {
  return (
    <figure className={cn("flex h-full flex-col justify-between gap-8 p-5 md:p-8", className)}>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span role="img" className="flex gap-0.5 text-huipil-marigold" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <IconStar key={i} />
            ))}
          </span>
          {t.placeholder && <span className="t-eyebrow border border-dashed border-line-strong px-2 py-1 text-faint">Placeholder review</span>}
        </div>
        <blockquote className="t-xl">&ldquo;{t.quote}&rdquo;</blockquote>
      </div>
      <figcaption className="flex items-center gap-3 border-t border-line pt-5">
        <span aria-hidden className="flex size-10 items-center justify-center rounded-full bg-jade/30 text-sm font-semibold text-jade-light">
          {t.name.charAt(0)}
        </span>
        <span className="flex flex-col">
          <span className="t-md">{t.name}</span>
          <span className="t-xs text-mute">{t.from} · {t.trip}</span>
        </span>
      </figcaption>
    </figure>
  );
}
