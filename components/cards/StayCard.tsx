import Image from "next/image";
import Link from "next/link";
import type { Stay } from "@/data/types";
import { Price } from "@/components/ui/Price";
import { IconPin } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function StayCard({ stay: s, className }: { stay: Stay; className?: string }) {
  return (
    <article className={cn("group relative flex flex-col gap-5 p-5 md:p-8", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={s.image.src}
          alt={s.image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
        <span className="t-eyebrow absolute left-3 top-3 bg-ink/70 px-2.5 py-1.5 backdrop-blur">{s.type}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <p className="t-xs inline-flex items-center gap-1.5 text-mute"><IconPin /> {s.location}</p>
        <h3 className="t-h4">
          <Link href={`/stays/${s.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {s.name}
          </Link>
        </h3>
        <p className="t-md line-clamp-2 font-normal text-mute">{s.excerpt}</p>
      </div>
      <p className="t-md flex items-baseline justify-between gap-2 border-t border-line pt-4">
        <span>
          <span className="text-mute">From </span>
          <Price usd={s.priceFrom} className="font-semibold" />
          <span className="text-mute"> per person · night</span>
        </span>
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </p>
    </article>
  );
}
