import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../globals.css";
import { site } from "@/config/site";
import { I18nProvider } from "@/i18n/client";
import { locales, ogLocales } from "@/i18n/locales";
import { clientMessages, getLocale, setLocale, t } from "@/i18n/server";
import { languageAlternates } from "@/lib/seo";
import { img } from "@/data/images";
import { Providers } from "@/components/providers/Providers";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>;

export async function generateMetadata({ params }: Pick<LayoutProps, "params">): Promise<Metadata> {
  setLocale((await params).locale);
  return {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${t("Tailor-made Guatemala trips")}`, template: `%s · ${site.name}` },
  description: t(site.description),
  applicationName: site.name,
  alternates: languageAlternates("/"),
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: ogLocales[getLocale()],
    images: [{ url: `${img.antiguaStreetAgua.src}&w=1200&h=630`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION (and optionally NEXT_PUBLIC_BING_SITE_VERIFICATION)
  // in Vercel to verify the site in Google Search Console / Bing Webmaster Tools.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
  formatDetection: { telephone: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#f7f3ec",
};



export default async function RootLayout({ children, params }: LayoutProps) {
  setLocale((await params).locale);
  return (
    <html lang={getLocale()} className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen overflow-x-clip">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <I18nProvider messages={clientMessages()}>
        <Providers>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
