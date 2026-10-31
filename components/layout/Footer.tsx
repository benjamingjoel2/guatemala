import { t } from "@/i18n/server";
import Image from "next/image";
import Link from "@/i18n/Link";
import { contact, footerNav, site } from "@/config/site";
import { img } from "@/data/images";
import { Logo } from "./Logo";
import { HuipilStripe } from "@/components/ui/HuipilStripe";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="theme-dark relative bg-ink pt-16 md:pt-20">
      {/* Full-bleed image band, like the reference footer visual */}
      <div className="gutter">
        <div className="relative mb-16 hidden h-[21rem] overflow-hidden md:mb-20 md:block">
          <Image src={img.atitlanDock.src} alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-ink/40" />
          <p className="t-h2 absolute bottom-8 left-8 max-w-xl text-bone">{t("Start in Antigua. Go beyond.")}</p>
        </div>
      </div>

      <div className="gutter grid gap-12 pb-16 md:pb-20 lg:grid-cols-12">
        <div className="flex flex-col gap-8 lg:col-span-4">
          <Logo />
          <p className="t-md max-w-sm text-mute">
            {t(site.description)}
          </p>
        </div>

        <nav aria-label={t("Footer")} className="grid grid-cols-2 gap-8 lg:col-span-5">
          <div>
            <p className="t-eyebrow mb-5 text-faint">{t("Explore")}</p>
            <ul className="flex flex-col gap-2">
              {footerNav.explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group/f t-h4 inline-flex items-baseline gap-1.5 transition-colors hover:text-adobe">
                    <span aria-hidden className="inline-block text-terra transition-transform duration-300 group-hover/f:rotate-90">+</span>
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="t-eyebrow mb-5 text-faint">{t("Company")}</p>
            <ul className="flex flex-col gap-2">
              {footerNav.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group/f t-h4 inline-flex items-baseline gap-1.5 transition-colors hover:text-adobe">
                    <span aria-hidden className="inline-block text-terra transition-transform duration-300 group-hover/f:rotate-90">+</span>
                    {t(l.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="flex flex-col gap-3 lg:col-span-3">
          <p className="t-eyebrow mb-2 text-faint">{t("Get in touch")}</p>
          <a href={`mailto:${contact.email}`} className="t-lg transition-colors hover:text-adobe">{contact.email}</a>
          <address className="t-md mt-2 not-italic text-mute">{contact.address}</address>
          <p className="t-xs text-faint">{t(contact.hours)}</p>
        </div>
      </div>

      <HuipilStripe />
      <div className="relative">
        <div className="flex flex-col items-stretch md:flex-row md:items-center md:justify-between">
          <p className="t-btn border-b border-line-strong px-5 py-4 text-center text-mute md:border-b-0 md:border-r md:px-10 md:py-7 md:text-left">
            © {year} {site.name}. {t("All rights reserved.")}
          </p>
          <ul className="flex items-center justify-center gap-6 px-5 py-4 md:px-10">
            {footerNav.legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="t-btn text-mute transition-colors hover:text-bone">{t(l.label)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
