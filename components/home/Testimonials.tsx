import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { img } from "@/data/images";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconStar } from "@/components/ui/icons";
import { Reveal, SplitHeading } from "@/components/ui/motion";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { PlusLink } from "@/components/ui/Button";

export function Testimonials() {
  const [featured, ...rest] = testimonials;
  return (
    <section className="section-pad" aria-labelledby="testimonials-title">
      <div className="gutter mb-10 flex flex-col gap-4 md:mb-14">
        <Eyebrow>Travellers</Eyebrow>
        <SplitHeading id="testimonials-title" text="The people behind every trip, and the travellers they looked after" className="t-h2 max-w-4xl" />
      </div>

      <div className="gutter">
        <div className="grid border-y border-line lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden lg:min-h-[30rem]">
            <Image src={img.atitlanFriends.src} alt={img.atitlanFriends.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <Reveal className="flex flex-col justify-between gap-10 py-10 lg:border-l lg:border-line lg:p-12">
            <div className="flex items-center justify-between">
              <span role="img" className="flex gap-0.5 text-huipil-marigold" aria-label={`${featured.rating} out of 5 stars`}>
                {Array.from({ length: featured.rating }).map((_, i) => <IconStar key={i} className="size-4" />)}
              </span>
              <span className="t-eyebrow border border-dashed border-line-strong px-2 py-1 text-faint">Placeholder review</span>
            </div>
            <blockquote className="t-h4 font-medium">&ldquo;{featured.quote}&rdquo;</blockquote>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="t-lg">{featured.name}</p>
                <p className="t-xs text-mute">{featured.from} · {featured.trip}</p>
              </div>
              <PlusLink href="/testimonials" className="t-btn text-mute hover:text-bone">All reviews</PlusLink>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-3 overflow-x-auto [scrollbar-width:none]">
        <ul className="gutter flex snap-x snap-mandatory gap-3">
          {rest.map((t) => (
            <li key={t.id} className="w-[85vw] max-w-[26rem] shrink-0 snap-start border border-line bg-ink-2/50">
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
