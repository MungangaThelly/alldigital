import { getDictionary, getLocaleOrDefault, withLocale } from "@/lib/i18n";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const t = getDictionary(locale);
  const accessPolicyLine = {
    sv: "Intäkter från organisationer och frivilliga stöd håller fri tillgång öppen.",
    en: "Revenue from organizations and optional supporter donations sustains free access.",
    ar: "إيرادات المؤسسات والتبرعات الاختيارية من الداعمين تحافظ على استمرار الوصول المجاني.",
    ti: "ካብ ትካላት ዝመጽእ እቶትን ፈቓዳዊ ደገፍን ነጻ ተበፃሒነት ክቕፅል ይሕግዝ።",
    fr: "Les revenus des organisations et les dons facultatifs des soutiens maintiennent l'accès gratuit.",
  }[locale];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">{t.about.title}</h1>

        <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.missionTitle}</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">{t.about.missionP1}</p>
          <p className="text-xl text-gray-700 leading-relaxed">{t.about.missionP2}</p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">{accessPolicyLine}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.whyTitle}</h2>
          <div className="space-y-4 text-xl text-gray-700">
            {t.about.reasons.map((reason) => (
              <p key={reason.title}>
                <strong className="text-primary-600">{reason.title}</strong> {reason.text}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.about.readyTitle}</h2>
          <p className="text-xl text-gray-700 mb-6">{t.about.readyText}</p>
          <a
            href={withLocale(locale, "/lessons")}
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg text-xl transition-colors"
          >
            {t.about.readyButton}
          </a>
        </div>
      </div>
    </div>
  );
}
