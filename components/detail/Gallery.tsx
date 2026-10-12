import Image from "next/image";
import type { Image as Img } from "@/data/types";
import { cn } from "@/lib/utils";

/** Mosaic gallery: one large lead image + up to 3 supporting images. */
export function Gallery({ images, className }: { images: Img[]; className?: string }) {
  const [lead, ...rest] = images;
  if (!lead) return null;
  return (
    <div className={cn("grid gap-2 md:grid-cols-3 md:grid-rows-2", className)}>
      <div className="relative aspect-[4/3] overflow-hidden md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[32rem]">
        <Image src={lead.src} alt={lead.alt} fill priority sizes="(min-width: 768px) 66vw, 100vw" className="object-cover" />
      </div>
      {rest.slice(0, 2).map((im) => (
        <div key={im.src} className="relative hidden aspect-[4/3] overflow-hidden md:block md:aspect-auto">
          <Image src={im.src} alt={im.alt} fill sizes="33vw" className="object-cover transition-transform duration-1000 hover:scale-105" />
        </div>
      ))}
    </div>
  );
}
