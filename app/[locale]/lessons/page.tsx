"use client";

import { use, useState, useEffect } from "react";
import { getLessons, getCategoryMeta, getDifficultyLabels } from "@/lib/lessons";
import { useUserProgress } from "@/lib/useUserProgress";
import Link from "next/link";
import { FaClock, FaStar, FaLock, FaCheckCircle } from "react-icons/fa";
import { getDictionary, getLocaleOrDefault, withLocale } from "@/lib/i18n";

export default function LessonsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = use(params);
  const locale = getLocaleOrDefault(localeParam);
  const t = getDictionary(locale);
  const lessons = getLessons(locale);
  const categoryMeta = getCategoryMeta(locale);
  const difficultyLabels = getDifficultyLabels(locale);
  
  const { progress, isLoaded } = useUserProgress();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted || !isLoaded) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.lessons.title}</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">{t.lessons.intro}</p>
        <div className="mt-6 inline-flex items-center gap-2 bg-primary-100 border-2 border-primary-300 px-6 py-3 rounded-lg">
          <FaStar className="text-primary-600 w-6 h-6" />
          <span className="text-xl font-semibold text-gray-900">
            {t.lessons.yourPoints}: {progress.points} {t.lessons.pointsUnit}
          </span>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="max-w-6xl mx-auto">
        {/* Group by category */}
        {Object.entries(categoryMeta).map(([categoryKey, categoryData]) => {
          const categoryLessons = lessons.filter((lesson) => lesson.category === categoryKey);
          if (categoryLessons.length === 0) return null;

          return (
            <div key={categoryKey} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{categoryData.icon}</span>
                <h2 className="text-3xl font-bold text-gray-900">{categoryData.name}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryLessons.map((lesson) => {
                  const isCompleted = progress.completedLessons.includes(lesson.id);
                  const isLocked = lesson.requiredLessons?.some(
                    (reqId) => !progress.completedLessons.includes(reqId)
                  );

                  return (
                    <LessonCard
                      key={lesson.id}
                      lesson={lesson}
                      isCompleted={isCompleted}
                      isLocked={isLocked}
                      categoryColor={categoryData.color}
                      difficultyLabel={difficultyLabels[lesson.difficulty]}
                      labels={{
                        durationUnit: t.lessons.durationUnit,
                        pointsUnit: t.lessons.pointsUnit,
                        locked: t.lessons.locked,
                        repeat: t.lessons.repeat,
                        start: t.lessons.start,
                        completePrevious: t.lessons.completePrevious,
                      }}
                      locale={locale}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LessonCard({
  lesson,
  isCompleted,
  isLocked,
  categoryColor,
  difficultyLabel,
  labels,
  locale,
}: {
  lesson: any;
  isCompleted: boolean;
  isLocked?: boolean;
  categoryColor: string;
  difficultyLabel: string;
  labels: {
    durationUnit: string;
    pointsUnit: string;
    locked: string;
    repeat: string;
    start: string;
    completePrevious: string;
  };
  locale: string;
}) {
  const content = (
    <div
      className={`bg-white rounded-xl shadow-md border-2 p-6 h-full transition-all ${
        isLocked
          ? "opacity-60 cursor-not-allowed border-gray-300"
          : isCompleted
          ? "border-green-400 hover:shadow-lg"
          : "border-gray-200 hover:shadow-lg hover:border-primary-400"
      }`}
    >
      {/* Status Badge */}
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${categoryColor}`}>
          {difficultyLabel}
        </span>
        {isCompleted && <FaCheckCircle className="w-7 h-7 text-green-600" />}
        {isLocked && <FaLock className="w-6 h-6 text-gray-400" />}
      </div>

      {/* Title & Description */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{lesson.title}</h3>
      <p className="text-lg text-gray-600 mb-4 leading-relaxed">{lesson.description}</p>

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-gray-600 mb-4">
        <div className="flex items-center gap-2">
          <FaClock className="w-5 h-5" />
          <span className="text-base">
            {lesson.duration} {labels.durationUnit}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaStar className="w-5 h-5 text-yellow-500" />
          <span className="text-base">
            {lesson.points} {labels.pointsUnit}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <button
        disabled={isLocked}
        className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors ${
          isLocked
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : isCompleted
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-primary-600 hover:bg-primary-700 text-white"
        }`}
      >
        {isLocked ? labels.locked : isCompleted ? labels.repeat : labels.start}
      </button>

      {isLocked && (
        <p className="text-sm text-gray-500 mt-2 text-center">{labels.completePrevious}</p>
      )}
    </div>
  );

  if (isLocked) {
    return <div>{content}</div>;
  }

  return <Link href={withLocale(getLocaleOrDefault(locale), `/lesson/${lesson.id}`)}>{content}</Link>;
}
