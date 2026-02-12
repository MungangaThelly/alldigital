"use client";

import { use, useState, useEffect } from "react";
import { getLessonById } from "@/lib/lessons";
import SupportPopup from "@/components/SupportPopup";
import { useEffect, useState } from "react";
import { useUserProgress } from "@/lib/useUserProgress";
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import { useRouter } from "next/navigation";
import PhoneSimulator from "@/components/interactive/PhoneSimulator";
import MessageComposer from "@/components/interactive/MessageComposer";
import ScamDetector from "@/components/interactive/ScamDetector";
import AppFinder from "@/components/interactive/AppFinder";
import SpeechPlayer from "@/components/SpeechPlayer";
import { getDictionary, getLocaleOrDefault, withLocale } from "@/lib/i18n";

export default function LessonPage({ params }: { params: Promise<{ locale: string; id: string }> }) {
  const [supportConfig, setSupportConfig] = useState<any>(null);
  const router = useRouter();
  const { locale: localeParam, id } = use(params);
    // Load support popup config if this is the second lesson
    useEffect(() => {
      if (id === "bankid-intro") {
        fetch("/support-popup-config.json")
          .then((res) => res.json())
          .then(setSupportConfig)
          .catch(() => setSupportConfig(null));
      }
    }, [id]);
  const locale = getLocaleOrDefault(localeParam);
  const t = getDictionary(locale);
  const lesson = getLessonById(locale, id);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [completed, setCompleted] = useState(false);
  const { completeLesson, isLoaded } = useUserProgress();

  // Save lesson completion to localStorage when user completes the lesson
  useEffect(() => {
    if (completed && lesson && isLoaded) {
      completeLesson(lesson.id, lesson.points);
    }
  }, [completed, lesson, completeLesson, isLoaded]);

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t.lesson.notFoundTitle}</h1>
        <button
          onClick={() => router.push(withLocale(locale, "/lessons"))}
          className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
        >
          {t.lesson.backToLessons}
        </button>
      </div>
    );
  }

  const currentStep = lesson.steps[currentStepIndex];
  const isLastStep = currentStepIndex === lesson.steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  const handleNext = () => {
    if (isLastStep) {
      setCompleted(true);
    } else {
      setCurrentStepIndex(currentStepIndex + 1);
      setShowHint(false);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStepIndex(currentStepIndex - 1);
      setShowHint(false);
    }
  };

  if (completed) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <FaCheckCircle className="w-24 h-24 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.lesson.congratsTitle}</h1>
            <p className="text-2xl text-gray-700 mb-6">
              {t.lesson.completedLessonPrefix} <strong>{lesson.title}</strong>
            </p>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-8">
              <p className="text-xl font-semibold text-gray-900 mb-2">{t.lesson.earnedLabel}</p>
              <p className="text-3xl font-bold text-yellow-600">
                +{lesson.points} {t.lessons.pointsUnit}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push(withLocale(locale, "/lessons"))}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-xl font-semibold"
            >
              {t.lesson.moreLessons}
            </button>
            <button
              onClick={() => router.push(withLocale(locale, "/progress"))}
              className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg text-xl font-semibold"
            >
              {t.lesson.seeProgress}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {id === "bankid-intro" && supportConfig && (
        <SupportPopup
          swishNumber={supportConfig.swishNumber}
          qrCodeUrl={supportConfig.qrCodeUrl}
          message={supportConfig.message}
          frequencyDays={30}
        />
      )}
      <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <button
          onClick={() => router.push(withLocale(locale, "/lessons"))}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-lg font-semibold mb-4"
        >
          <FaArrowLeft /> {t.lesson.backToLessons}
        </button>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-primary-600 h-full transition-all duration-300"
              style={{ width: `${((currentStepIndex + 1) / lesson.steps.length) * 100}%` }}
            />
          </div>
          <span className="text-lg font-semibold text-gray-700 whitespace-nowrap">
            {t.lesson.stepLabel} {currentStepIndex + 1} {t.lesson.stepOf} {lesson.steps.length}
          </span>
        </div>
      </div>

      {/* Lesson Content */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg border-2 border-gray-200 p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentStep.title}</h2>
          <div className="prose prose-lg max-w-none mb-6">
            <p className="text-xl text-gray-700 leading-relaxed">{currentStep.content}</p>
          </div>

          {/* Speech Player */}
          <div className="mb-8">
            <SpeechPlayer
              text={currentStep.content}
              label={`${t.lesson.stepLabel} ${currentStepIndex + 1}: ${currentStep.title}`}
              lang={locale}
              labels={{
                play: t.lessons.speechPlay,
                pause: t.lessons.speechPause,
                stop: t.lessons.speechStop,
                speed: t.lessons.speechSpeed,
              }}
            />
          </div>

          {/* Interactive Component */}
          {currentStep.type === "interactive" && (
            <div className="my-8">
              {currentStep.component === "PhoneSimulator" && (
                <PhoneSimulator onComplete={handleNext} labels={t.interactive.phoneSimulator} />
              )}
              {currentStep.component === "MessageComposer" && (
                <MessageComposer
                  expectedMessage={currentStep.validation?.correctAnswer || ""}
                  labels={t.interactive.messageComposer}
                  onComplete={handleNext}
                />
              )}
              {currentStep.component === "ScamDetector" && (
                <ScamDetector onComplete={handleNext} labels={t.interactive.scamDetector} />
              )}
              {currentStep.component === "AppFinder" && (
                <AppFinder onComplete={handleNext} labels={t.interactive.appFinder} />
              )}
            </div>
          )}

          {/* Hint Section */}
          {currentStep.hint && (
            <div className="mt-6">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 text-lg font-semibold"
                >
                  <FaLightbulb /> {t.lesson.showHint}
                </button>
              ) : (
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <FaLightbulb className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{currentStep.hint}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={isFirstStep}
            className={`flex items-center gap-2 px-6 py-4 rounded-lg text-lg font-semibold transition-colors ${
              isFirstStep
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gray-600 hover:bg-gray-700 text-white"
            }`}
          >
            <FaArrowLeft /> {t.lesson.previous}
          </button>

          {currentStep.type !== "interactive" && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              {isLastStep ? t.lesson.finish : t.lesson.next} <FaArrowRight />
            </button>
          )}
        </div>
      </div>
  );
}
}
}
