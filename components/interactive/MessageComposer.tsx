"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface MessageComposerLabels {
  header: string;
  toLabel: string;
  toValue: string;
  messageLabel: string;
  placeholder: string;
  send: string;
  successTitle: string;
  retryTitle: string;
  retryHint: string;
  instruction: string;
}

interface MessageComposerProps {
  expectedMessage: string;
  labels: MessageComposerLabels;
  onComplete: () => void;
}

export default function MessageComposer({ expectedMessage, labels, onComplete }: MessageComposerProps) {
  const [message, setMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSend = () => {
    const correct = message.trim().toLowerCase() === expectedMessage.toLowerCase();
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  const retryHint = labels.retryHint.replace("{expectedMessage}", expectedMessage);

  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 w-full max-w-sm">
        {/* Phone Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Header */}
          <div className="bg-primary-600 px-6 py-4">
            <p className="text-white font-semibold text-lg text-center">{labels.header}</p>
          </div>

          {/* Message Area */}
          <div className="p-6 min-h-[400px] bg-gray-50">
            {/* To Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">{labels.toLabel}</label>
              <div className="bg-white border-2 border-gray-300 rounded-lg px-4 py-3">
                <span className="text-gray-600">{labels.toValue}</span>
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {labels.messageLabel}
              </label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  setShowFeedback(false);
                }}
                placeholder={labels.placeholder}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg focus:border-primary-500 focus:outline-none min-h-[120px] resize-none"
              />
            </div>

            {/* Send Button */}
            <button
              onClick={handleSend}
              disabled={!message.trim()}
              className={`w-full mt-4 py-3 rounded-lg font-semibold text-lg transition-colors ${
                message.trim()
                  ? "bg-primary-600 hover:bg-primary-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {labels.send}
            </button>

            {/* Feedback */}
            {showFeedback && (
              <div
                className={`mt-4 p-4 rounded-lg border-2 ${
                  isCorrect
                    ? "bg-green-100 border-green-500"
                    : "bg-red-100 border-red-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  {isCorrect ? (
                    <>
                      <FaCheckCircle className="text-green-600 w-6 h-6 flex-shrink-0" />
                      <span className="text-lg font-semibold text-green-800">
                        {labels.successTitle}
                      </span>
                    </>
                  ) : (
                    <>
                      <FaTimesCircle className="text-red-600 w-6 h-6 flex-shrink-0" />
                      <div>
                        <p className="text-lg font-semibold text-red-800 mb-1">
                          {labels.retryTitle}
                        </p>
                        <p className="text-sm text-red-700">
                          {retryHint}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Home Indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <p className="text-center text-lg text-gray-600 mt-6 max-w-md">
        {labels.instruction}
      </p>
    </div>
  );
}
