import type { Metadata } from "next";
import { Alegreya_Sans, Noto_Sans_Arabic, Noto_Sans_Ethiopic } from "next/font/google";
import "../globals.css";
import Navigation from "@/components/Navigation";
import AccessibilityControls from "@/components/AccessibilityControls";
import { getDictionary, getLocaleOrDefault, locales, rtlLocales } from "@/lib/i18n";

const alegreya = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-arabic",
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "600", "700"],
  variable: "--font-ethiopic",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const t = getDictionary(locale);
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      data-locale={locale}
      className={`${alegreya.variable} ${notoArabic.variable} ${notoEthiopic.variable}`}
    >
      <body>
        <Navigation
          locale={locale}
          labels={{
            home: t.nav.home,
            lessons: t.nav.lessons,
            progress: t.nav.progress,
            help: t.nav.help,
            languageLabel: t.nav.languageLabel,
          }}
        />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p className="text-lg mb-2">{t.footer.copyright}</p>
            <p className="text-base">{t.footer.tagline}</p>
          </div>
        </footer>
        <AccessibilityControls
          labels={{
            title: t.accessibility.title,
            fontSizeLabel: t.accessibility.fontSizeLabel,
            small: t.accessibility.small,
            medium: t.accessibility.medium,
            large: t.accessibility.large,
            xLarge: t.accessibility.xLarge,
          }}
        />
      </body>
    </html>
  );
}
