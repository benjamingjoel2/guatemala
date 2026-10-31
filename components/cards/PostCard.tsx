import { getLocale, t } from "@/i18n/server";
import Image from "next/image";
import Link from "@/i18n/Link";
import type { PostMeta } from "@/data/types";
import { cn } from "@/lib/utils";

export function formatDate(date: string) {
  return new Date(date + "T12:00:00Z").toLocaleDateString(getLocale() === "en" ? "en-GB" : getLocale(), { day: "numeric", month: "long", year: "numeric" });
}

export function PostCard({ post, className, large }: { post: PostMeta; className?: string; large?: boolean }) {
  if (large) {
    return (
      <article className={cn("group relative grid gap-6 p-5 md:grid-cols-2 md:items-center md:gap-12 md:p-8", className)}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image src={post.image.src} alt={post.image.alt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="t-xs flex gap-3 text-mute">
            <span className="text-jade-light">{t("Latest")} · {post.category}</span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readingTime}</span>
          </p>
          <h2 className="t-h2">
            <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">{post.title}</Link>
          </h2>
          <p className="t-lg font-normal text-mute">{post.excerpt}</p>
          <span className="t-btn text-bone transition-colors group-hover:text-adobe">{t("Read the guide →")}</span>
        </div>
      </article>
    );
  }
  return (
    <article className={cn("group relative flex flex-col gap-5 p-5 md:p-8", className)}>
      <div className={cn("relative overflow-hidden", large ? "aspect-[16/10]" : "aspect-[4/3]")}>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          fill
          sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
      </div>
      <p className="t-xs flex gap-3 text-mute">
        <span className="text-jade-light">{post.category}</span>
        <span>{formatDate(post.date)}</span>
        <span>{post.readingTime}</span>
      </p>
      <h3 className={large ? "t-h3" : "t-h4"}>
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">
          {post.title}
        </Link>
      </h3>
      <p className="t-md font-normal text-mute">{post.excerpt}</p>
    </article>
  );
}
