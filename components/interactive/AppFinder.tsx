"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type AppFinderLabels = {
  title: string;
  hint: string;
  correctTitle: string;
  correctText: string;
  wrongTitle: string;
  wrongText: string;
  retryButton: string;
  apps: {
    bankId: string;
    bankLogIn: string;
    idVerify: string;
    swish: string;
  };
};

export default function AppFinder({
  onComplete,
  labels,
}: {
  onComplete: () => void;
  labels: AppFinderLabels;
}) {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const apps = [
    {
      id: "bankid",
      name: labels.apps.bankId,
      icon: "🔐",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      id: "fake1",
      name: labels.apps.bankLogIn,
      icon: "🏦",
      color: "bg-gradient-to-br from-gray-400 to-gray-600",
    },
    {
      id: "fake2",
      name: labels.apps.idVerify,
      icon: "✓",
      color: "bg-gradient-to-br from-green-400 to-green-600",
    },
    {
      id: "swish",
      name: labels.apps.swish,
      icon: "💸",
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
    },
  ];

  const handleAppClick = (appId: string) => {
    setSelectedApp(appId);
    setShowFeedback(true);

    if (appId === "bankid") {
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Phone Display */}
      <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 max-w-sm mx-auto">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-gray-100 px-6 py-3 text-center">
            <span className="text-sm text-gray-600">9:41</span>
          </div>

          {/* App Grid */}
          <div className="p-8 min-h-[500px]">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              {labels.title}
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {apps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => handleAppClick(app.id)}
                  disabled={showFeedback}
                  className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all ${
                    showFeedback && selectedApp === app.id
                      ? app.id === "bankid"
                        ? "ring-4 ring-green-500"
                        : "ring-4 ring-red-500"
                      : "hover:scale-105 active:scale-95"
                  } ${showFeedback ? "cursor-default" : ""}`}
                >
                  <div className={`${app.color} w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg`}>
                    {app.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-800 text-center">
                    {app.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Hint */}
            {!showFeedback && (
              <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                <p className="text-base text-gray-700 text-center">💡 {labels.hint}</p>
              </div>
            )}
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className="max-w-2xl mx-auto">
          {selectedApp === "bankid" ? (
            <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{labels.correctTitle}</h3>
                  <p className="text-lg text-gray-700">{labels.correctText}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-red-100 border-2 border-red-500 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <FaTimesCircle className="text-red-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-red-800 mb-2">{labels.wrongTitle}</h3>
                  <p className="text-lg text-gray-700 mb-3">{labels.wrongText}</p>
                  <button
                    onClick={() => {
                      setShowFeedback(false);
                      setSelectedApp(null);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    {labels.retryButton}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
