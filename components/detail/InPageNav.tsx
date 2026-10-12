"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/** Sticky in-page section nav with scroll-spy (reference detail-page tabs). */
export function InPageNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => !!e);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((e) => obs.observe(e));
    return () => obs.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-[4.5rem] z-20 -mx-5 border-y border-line bg-ink/90 backdrop-blur-xl md:-mx-10">
      <ul className="flex gap-6 overflow-x-auto px-5 [scrollbar-width:none] md:gap-8 md:px-10">
        {items.map((i) => (
          <li key={i.id} className="shrink-0">
            <a
              href={`#${i.id}`}
              aria-current={active === i.id ? "true" : undefined}
              className={cn(
                "t-lg relative block py-4 transition-colors",
                active === i.id ? "text-bone" : "text-faint hover:text-bone",
              )}
            >
              {i.label}
              <span className={cn("absolute inset-x-0 bottom-0 h-0.5 origin-left bg-terra transition-transform duration-300", active === i.id ? "scale-x-100" : "scale-x-0")} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
