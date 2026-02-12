"use client";

import { use, useState, useEffect } from "react";
import { FaTrophy, FaStar, FaCheckCircle, FaClock } from "react-icons/fa";
import { dateLocales, getDictionary, getLocaleOrDefault } from "@/lib/i18n";
import { getLessons } from "@/lib/lessons";
import { useUserProgress } from "@/lib/useUserProgress";

export default function ProgressPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = use(params);
  const locale = getLocaleOrDefault(localeParam);
  const t = getDictionary(locale);
  const lessons = getLessons(locale);
  const userProgress = useUserProgress();
  const { progress, isLoaded, resetProgress } = userProgress;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isLoaded) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  // Get completed lesson details for the progress display
  const completedLessonIds = progress.completedLessons;
  const completedLessonDetails = lessons.filter(lesson => completedLessonIds.includes(lesson.id));
  
  const mockProgress = {
    completedLessons: completedLessonIds.length,
    totalLessons: lessons.length,
    points: progress.points,
    timeSpent: completedLessonIds.length * 10, // Estimate: 10 minutes per lesson
    achievements: [
      {
        id: "first-lesson",
        title: t.progress.achievements,
        description: t.progress.statsCompleted,
        icon: "🎉",
        earnedAt: new Date(),
      },
    ],
    recentActivity: completedLessonDetails.slice(-3).map(lesson => ({
      lessonTitle: lesson.title,
      completedAt: new Date(),
      points: lesson.points,
    })),
  };

  const completionPercentage = Math.round(
    (mockProgress.completedLessons / mockProgress.totalLessons) * 100
  );

  const handleReset = () => {
    resetProgress();
    window.location.reload();
  };
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <button
        onClick={handleReset}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold mb-6"
      >
        Återställ alla lektioner
      </button>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.progress.title}</h1>
        <p className="text-xl text-gray-700">{t.progress.subtitle}</p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <StatCard
            icon={<FaCheckCircle className="w-10 h-10 text-green-600" />}
            label={t.progress.statsCompleted}
            value={`${mockProgress.completedLessons} / ${mockProgress.totalLessons}`}
          />
          <StatCard
            icon={<FaStar className="w-10 h-10 text-yellow-500" />}
            label={t.progress.statsPoints}
            value={mockProgress.points.toString()}
          />
          <StatCard
            icon={<FaClock className="w-10 h-10 text-blue-600" />}
            label={t.progress.statsTime}
            value={`${mockProgress.timeSpent} ${t.lessons.durationUnit}`}
          />
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-8 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{t.progress.overallProgress}</h2>
            <span className="text-3xl font-bold text-primary-600">{completionPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
            <div
              className="bg-primary-600 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-3"
              style={{ width: `${completionPercentage}%` }}
            >
              {completionPercentage > 10 && (
                <span className="text-white font-semibold text-lg">{completionPercentage}%</span>
              )}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaTrophy className="text-yellow-500" />
            {t.progress.achievements}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.progress.badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-2">{badge.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 text-center">{badge.title}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">{badge.description}</p>
                <div className="mt-3 px-2 py-1 bg-yellow-200 text-yellow-900 text-xs font-semibold rounded-full">
                  {badge.requirement}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.progress.recentActivity}</h2>
          {mockProgress.recentActivity.length > 0 ? (
            <div className="space-y-4">
              {mockProgress.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{activity.lessonTitle}</h3>
                    <p className="text-base text-gray-600">
                      {t.progress.completedOn} {activity.completedAt.toLocaleDateString(dateLocales[locale])}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-600">
                    <FaStar className="w-5 h-5" />
                    <span className="text-xl font-semibold">+{activity.points}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-600">{t.progress.recentActivityEmpty}</p>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 p-6 text-center">
      <div className="flex justify-center mb-3">{icon}</div>
      <p className="text-base text-gray-600 mb-2">{label}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}
