"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaBook, FaChartLine, FaQuestionCircle } from "react-icons/fa";
import { Locale, localeNames, withLocale } from "@/lib/i18n";

type NavLabels = {
  home: string;
  lessons: string;
  progress: string;
  help: string;
  languageLabel: string;
};

export default function Navigation({ locale, labels }: { locale: Locale; labels: NavLabels }) {
  const pathname = usePathname();
  const router = useRouter();
  const localeSegment = `/${locale}`;

  const navItems = [
    {
      path: "/",
      label: labels.home,
      icon: FaHome,
      match: [localeSegment, `${localeSegment}/`],
    },
    {
      path: "/lessons",
      label: labels.lessons,
      icon: FaBook,
      match: [`${localeSegment}/lessons`, `${localeSegment}/lesson`],
    },
    {
      path: "/progress",
      label: labels.progress,
      icon: FaChartLine,
      match: [`${localeSegment}/progress`],
    },
    {
      path: "/help",
      label: labels.help,
      icon: FaQuestionCircle,
      match: [`${localeSegment}/help`],
    },
  ];

  const handleLocaleChange = (newLocale: Locale) => {
    if (!pathname) {
      router.push(withLocale(newLocale, "/"));
      return;
    }
    const segments = pathname.split("/").filter(Boolean);
    const rest = segments.slice(1).join("/");
    const newPath = rest ? `/${newLocale}/${rest}` : `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <nav className="bg-white shadow-md border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4 py-4">
          {/* Logo */}
          <Link href={withLocale(locale, "/")} className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">TD</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Tillsammans digitalt</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            {/* Navigation Links */}
            <div className="flex gap-2 md:gap-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.match.some(
                  (matchPath) => pathname === matchPath || pathname?.startsWith(`${matchPath}/`)
                );
                return (
                  <Link
                    key={item.path}
                    href={withLocale(locale, item.path)}
                    className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold text-lg transition-colors ${
                      isActive
                        ? "bg-primary-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 bg-gray-50 border-2 border-gray-200 rounded-lg px-3 py-2">
              <label className="text-base font-semibold text-gray-700" htmlFor="language-select">
                {labels.languageLabel}
              </label>
              <select
                id="language-select"
                value={locale}
                onChange={(event) => handleLocaleChange(event.target.value as Locale)}
                className="bg-white border border-gray-300 rounded-md px-3 py-2 text-base font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label={labels.languageLabel}
              >
                {Object.entries(localeNames).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
