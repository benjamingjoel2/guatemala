import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/** Text-based placeholder logo: a stepped "volcano / pyramid" mark + wordmark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={cn("size-5", className)}>
      <path d="M12 3 21 20H3L12 3Z" fill="currentColor" opacity=".25" />
      <path d="M12 7.5 17.5 18h-11L12 7.5Z" fill="currentColor" opacity=".55" />
      <path d="M12 12 14.6 17H9.4L12 12Z" fill="var(--color-terra)" />
    </svg>
  );
}

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex items-center gap-2 text-bone", className)}
    >
      <LogoMark className="text-jade-light transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="text-[1.375rem] font-semibold leading-none tracking-[-0.07em] md:text-2xl">
        Antigua <span className="text-adobe">&amp;</span> Beyond
      </span>
    </Link>
  );
}
