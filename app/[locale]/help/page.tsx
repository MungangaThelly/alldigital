"use client";

import { use } from "react";
import { FaPhone, FaComments, FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { getDictionary, getLocaleOrDefault } from "@/lib/i18n";

export default function HelpPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = use(params);
  const locale = getLocaleOrDefault(localeParam);
  const t = getDictionary(locale);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.help.title}</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">{t.help.subtitle}</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ContactCard
            icon={<FaPhone className="w-12 h-12 text-primary-600" />}
            title={t.help.contactCards.callTitle}
            description={t.help.contactCards.callDesc}
            detail={t.help.contactCards.callDetail}
            subtext={t.help.contactCards.callSub}
          />
          <ContactCard
            icon={<FaComments className="w-12 h-12 text-primary-600" />}
            title={t.help.contactCards.chatTitle}
            description={t.help.contactCards.chatDesc}
            detail={t.help.contactCards.chatDetail}
            subtext={t.help.contactCards.chatSub}
          />
          <ContactCard
            icon={<FaEnvelope className="w-12 h-12 text-primary-600" />}
            title={t.help.contactCards.emailTitle}
            description={t.help.contactCards.emailDesc}
            detail={t.help.contactCards.emailDetail}
            subtext={t.help.contactCards.emailSub}
          />
          <ContactCard
            icon={<FaQuestionCircle className="w-12 h-12 text-primary-600" />}
            title={t.help.contactCards.faqTitle}
            description={t.help.contactCards.faqDesc}
            detail={t.help.contactCards.faqDetail}
            subtext={t.help.contactCards.faqSub}
          />
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.help.faqTitle}</h2>
          <div className="space-y-6">
            {t.help.faqItems.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>

        {/* Support Hours */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.help.supportHoursTitle}</h3>
          <p className="text-lg text-gray-700 mb-2">{t.help.supportWeekdays}</p>
          <p className="text-lg text-gray-700">{t.help.supportWeekend}</p>
          <p className="text-base text-gray-600 mt-4">{t.help.supportNote}</p>
        </div>
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  description,
  detail,
  subtext,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  subtext: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-6 hover:shadow-lg hover:border-primary-400 transition-all cursor-pointer">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-lg text-gray-600 mb-3">{description}</p>
      <p className="text-xl font-semibold text-primary-600 mb-1">{detail}</p>
      <p className="text-base text-gray-500">{subtext}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-gray-200 pb-4 last:border-0">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{question}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{answer}</p>
    </div>
  );
}
