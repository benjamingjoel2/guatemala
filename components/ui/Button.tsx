import Link from "@/i18n/Link";
import { cn } from "@/lib/utils";

type Variant = "accent" | "outline" | "light" | "ghost";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 t-btn transition-colors duration-200 select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  accent: "bg-terra text-cream hover:bg-terra-dark px-6 h-12",
  outline: "border border-line-strong text-bone hover:bg-bone hover:text-ink px-6 h-12",
  light: "bg-bone text-ink hover:bg-adobe px-6 h-12",
  ghost: "text-bone hover:text-adobe",
};

export function buttonClass(variant: Variant = "accent", className?: string) {
  return cn(base, variants[variant], className);
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={cn("size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  external?: boolean;
};

export function ButtonLink({ href, children, variant = "accent", className, arrow = true, external }: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  );
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={buttonClass(variant, className)}>
        {content}
      </a>
    );
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass(variant, className)}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {content}
    </Link>
  );
}

/** "+ Label" link style used in nav, footer and section heads (reference pattern) */
export function PlusLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cn("group/plus inline-flex items-baseline gap-1 transition-colors duration-200", className)}>
      <span aria-hidden className="inline-block transition-transform duration-300 group-hover/plus:rotate-90">
        +
      </span>
      <span>{children}</span>
    </Link>
  );
}
