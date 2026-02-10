import Link from "next/link";
import { FaRocket, FaShieldAlt, FaUsers, FaGraduationCap } from "react-icons/fa";
import { getDictionary, getLocaleOrDefault, withLocale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = getLocaleOrDefault(localeParam);
  const t = getDictionary(locale);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t.home.heroTitleLine1}
          <br />
          {t.home.heroTitleLine2}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
          {t.home.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={withLocale(locale, "/lessons")}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg text-xl transition-colors shadow-lg"
          >
            {t.home.startLearning}
          </Link>
          <Link
            href={withLocale(locale, "/about")}
            className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 font-semibold px-8 py-4 rounded-lg text-xl transition-colors"
          >
            {t.home.learnMore}
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t.home.whyTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            icon={<FaShieldAlt className="w-12 h-12 text-primary-600" />}
            title={t.home.features[0].title}
            description={t.home.features[0].description}
          />

                {/* Testimonials Section */}
                <section className="py-16 bg-gray-50 -mx-4 px-4">
                  <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                      {t.home.testimonialsTitle}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                      {t.home.testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-200 hover:border-primary-400 transition-colors"
                        >
                          <div className="mb-4">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl font-bold text-primary-700">
                                {testimonial.name[0]}
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.age}</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                          <p className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-2 rounded">
                            ✨ {testimonial.achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
          <FeatureCard
            icon={<FaGraduationCap className="w-12 h-12 text-primary-600" />}
            title={t.home.features[1].title}
            description={t.home.features[1].description}
          />
          <FeatureCard
            icon={<FaUsers className="w-12 h-12 text-primary-600" />}
            title={t.home.features[2].title}
            description={t.home.features[2].description}
          />
          <FeatureCard
            icon={<FaRocket className="w-12 h-12 text-primary-600" />}
            title={t.home.features[3].title}
            description={t.home.features[3].description}
          />
        </div>
      </section>

      {/* Learning Tracks */}
      <section className="py-16 max-w-6xl mx-auto bg-gray-50 rounded-2xl px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t.home.tracksTitle}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TrackCard
            emoji="💬"
            title={t.home.tracks.contactTitle}
            description={t.home.tracks.contactDesc}
          />
          <TrackCard
            emoji="🏛️"
            title={t.home.tracks.servicesTitle}
            description={t.home.tracks.servicesDesc}
          />
          <TrackCard
            emoji="🛡️"
            title={t.home.tracks.safetyTitle}
            description={t.home.tracks.safetyDesc}
          />
          <TrackCard
            emoji="📱"
            title={t.home.tracks.phoneTitle}
            description={t.home.tracks.phoneDesc}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {t.home.ctaTitle}
        </h2>
        <p className="text-xl text-gray-700 mb-8">{t.home.ctaSubtitle}</p>
        <Link
          href={withLocale(locale, "/lessons")}
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-10 py-5 rounded-lg text-xl transition-colors shadow-lg"
        >
          {t.home.ctaButton}
        </Link>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TrackCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-primary-400 transition-colors">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
}
