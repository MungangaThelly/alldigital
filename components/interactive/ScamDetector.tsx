"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";

type ScamDetectorLabels = {
  messageFrom: string;
  messageText: string;
  messageTime: string;
  warningTitle: string;
  warningSignals: string[];
  question: string;
  answerReal: string;
  answerScam: string;
  correctTitle: string;
  correctText: string;
  correctTip: string;
  wrongTitle: string;
  wrongText: string;
  retryButton: string;
};

export default function ScamDetector({
  onComplete,
  labels,
}: {
  onComplete: () => void;
  labels: ScamDetectorLabels;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const scamMessage = {
    from: labels.messageFrom,
    text: labels.messageText,
    time: labels.messageTime,
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);

    if (answer === "scam") {
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Phone Message Display */}
      <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 max-w-sm mx-auto">
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-lg">❓</span>
            </div>
            <div>
              <p className="text-white font-semibold">{scamMessage.from}</p>
              <p className="text-blue-100 text-sm">SMS</p>
            </div>
          </div>

          {/* Message Content */}
          <div className="p-6 min-h-[300px] bg-gray-50">
            <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-md border-2 border-gray-200">
              <p className="text-base text-gray-800 leading-relaxed">{scamMessage.text}</p>
              <p className="text-xs text-gray-500 mt-2 text-right">{scamMessage.time}</p>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Warning Signals */}
      <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 max-w-2xl mx-auto">
        <div className="flex items-start gap-3 mb-4">
          <FaExclamationTriangle className="text-yellow-600 w-6 h-6 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{labels.warningTitle}</h3>
            <ul className="space-y-2">
              {labels.warningSignals.map((signal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-yellow-600 font-bold">•</span>
                  <span className="text-lg text-gray-700">{signal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Answer Options */}
      {!showFeedback && (
        <div className="max-w-2xl mx-auto">
          <p className="text-xl font-semibold text-gray-900 mb-4 text-center">
            {labels.question}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAnswer("real")}
              className="bg-green-100 hover:bg-green-200 border-2 border-green-400 text-green-800 font-semibold py-6 px-8 rounded-xl text-xl transition-colors"
            >
              ✓ {labels.answerReal}
            </button>
            <button
              onClick={() => handleAnswer("scam")}
              className="bg-red-100 hover:bg-red-200 border-2 border-red-400 text-red-800 font-semibold py-6 px-8 rounded-xl text-xl transition-colors"
            >
              ⚠️ {labels.answerScam}
            </button>
          </div>
        </div>
      )}

      {/* Feedback */}
      {showFeedback && (
        <div className="max-w-2xl mx-auto">
          {selectedAnswer === "scam" ? (
            <div className="bg-green-100 border-2 border-green-500 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-green-600 w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{labels.correctTitle}</h3>
                  <p className="text-lg text-gray-700 mb-3">{labels.correctText}</p>
                  <p className="text-lg text-gray-700 font-semibold">💡 {labels.correctTip}</p>
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
                      setSelectedAnswer(null);
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
