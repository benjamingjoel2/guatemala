"use client";

import { useT } from "@/i18n/client";
import Link from "@/i18n/Link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact, mainNav } from "@/config/site";
import { usePlannerModal } from "@/components/providers/PlannerModalProvider";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { LanguageSelector } from "./LanguageSelector";
import { stripLocale } from "@/i18n/locales";

export function Header() {
  const t = useT();
  const pathname = usePathname();
  const planner = usePlannerModal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const path = stripLocale(pathname ?? "/");
  const isActive = (href: string) => path === href || path.startsWith(href + "/");
  // Pages that open on a full-bleed photo get a dark header until the visitor scrolls
  const darkHero = path === "/" || /^\/destinations\/[^/]+\/?$/.test(path);
  const overDark = darkHero && !scrolled && !menuOpen;

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        overDark && "theme-dark",
        scrolled || menuOpen ? "bg-ink/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bone focus:px-4 focus:py-2 focus:text-ink">
        {t("Skip to content")}
      </a>
      <div className="relative flex h-[4.5rem] items-stretch justify-between">
        {/* hairline under the bar */}
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-line-strong" />

        <div className="relative flex items-center px-5 md:px-10 lg:border-r lg:border-line-strong">
          <Logo onClick={() => setMenuOpen(false)} />
        </div>

        <nav aria-label={t("Main")} className="hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex items-center gap-6 xl:gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "group/nav t-btn inline-flex items-baseline gap-1 transition-colors duration-200",
                    isActive(item.href) ? "text-bone" : "text-mute hover:text-bone",
                  )}
                >
                  <span aria-hidden className={cn("inline-block transition-transform duration-300 group-hover/nav:rotate-90", isActive(item.href) && "text-terra")}>
                    +
                  </span>
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-stretch">
          <div className="hidden items-center px-5 sm:flex lg:border-l lg:border-line-strong">
            <LanguageSelector />
          </div>
          <div className="hidden items-center px-6 sm:flex lg:border-l lg:border-line-strong">
            <CurrencySwitcher />
          </div>
          <button
            type="button"
            onClick={() => planner.open()}
            className="t-btn hidden items-center gap-2 bg-terra px-8 text-cream transition-colors duration-200 hover:bg-terra-dark md:flex"
          >
            {t("Start planning")}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? t("Close menu") : t("Open menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="relative flex w-[4.5rem] items-center justify-center border-l border-line-strong lg:hidden"
          >
            <span className="relative block h-3 w-6">
              <span className={cn("absolute left-0 top-0 h-px w-6 bg-bone transition-transform duration-300", menuOpen && "translate-y-1.5 rotate-45")} />
              <span className={cn("absolute bottom-0 left-0 h-px w-6 bg-bone transition-transform duration-300", menuOpen && "-translate-y-1.5 -rotate-45")} />
            </span>
          </button>
        </div>
      </div>

    </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 flex flex-col justify-between overflow-y-auto bg-ink px-5 pb-8 pt-10 lg:hidden"
          >
            <nav aria-label={t("Mobile")}>
              <ul className="flex flex-col">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-line"
                  >
                    <Link href={item.href} className="t-h3 flex items-baseline gap-2 py-4">
                      <span aria-hidden className="text-terra">+</span>
                      {t(item.label)}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="t-md text-mute">{t("Language")}</span>
                <LanguageSelector />
              </div>
              <div className="flex items-center justify-between">
                <span className="t-md text-mute">{t("Currency")}</span>
                <CurrencySwitcher up />
              </div>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  planner.open();
                }}
                className="t-btn h-12 w-full bg-terra text-cream"
              >
                {t("Start planning")}
              </button>
              <a href={`mailto:${contact.email}`} className="t-md text-center text-mute">
                {contact.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
