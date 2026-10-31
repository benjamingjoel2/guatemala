import { t } from "@/i18n/server";
import Link from "@/i18n/Link";
import { site } from "@/config/site";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const all = [{ label: t("Home"), href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href}` } : {}),
    })),
  };
  return (
    <nav aria-label={t("Breadcrumb")}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol className="t-xs flex flex-wrap items-center gap-2 text-mute">
        {all.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="transition-colors hover:text-bone">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-bone">{c.label}</span>
            )}
            {i < all.length - 1 && <span aria-hidden className="text-faint">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
