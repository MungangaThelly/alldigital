"use client";

import { useState, useEffect } from "react";
import { FaTextHeight, FaMinus, FaPlus } from "react-icons/fa";

type FontSize = "small" | "medium" | "large" | "x-large";

const fontSizeMap: Record<FontSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
  "x-large": "text-xl",
};

const fontSizePercentage: Record<FontSize, number> = {
  small: 87.5,
  medium: 100,
  large: 112.5,
  "x-large": 125,
};

interface AccessibilityControlsProps {
  labels: {
    title: string;
    fontSizeLabel: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
  };
}

export default function AccessibilityControls({ labels }: AccessibilityControlsProps) {
  const [fontSize, setFontSize] = useState<FontSize>("medium");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved font size preference from localStorage
    const savedFontSize = localStorage.getItem("fontSize") as FontSize | null;
    if (savedFontSize && fontSizePercentage[savedFontSize]) {
      setFontSize(savedFontSize);
      applyFontSize(savedFontSize);
    }
  }, []);

  const applyFontSize = (size: FontSize) => {
    const percentage = fontSizePercentage[size];
    document.documentElement.style.fontSize = `${percentage}%`;
  };

  const handleFontSizeChange = (size: FontSize) => {
    setFontSize(size);
    applyFontSize(size);
    localStorage.setItem("fontSize", size);
  };

  const increaseFontSize = () => {
    const sizes: FontSize[] = ["small", "medium", "large", "x-large"];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex < sizes.length - 1) {
      handleFontSizeChange(sizes[currentIndex + 1]);
    }
  };

  const decreaseFontSize = () => {
    const sizes: FontSize[] = ["small", "medium", "large", "x-large"];
    const currentIndex = sizes.indexOf(fontSize);
    if (currentIndex > 0) {
      handleFontSizeChange(sizes[currentIndex - 1]);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label={labels.title}
      >
        <FaTextHeight className="w-6 h-6" />
      </button>

      {/* Controls Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border-2 border-gray-200 p-4 w-64">
          <h3 className="text-lg font-bold text-gray-900 mb-3">{labels.title}</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {labels.fontSizeLabel}
            </label>

            {/* Quick Size Controls */}
            <div className="flex items-center gap-2 mb-3">
              <button
                onClick={decreaseFontSize}
                disabled={fontSize === "small"}
                className="p-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 rounded transition-colors"
                aria-label="Decrease font size"
              >
                <FaMinus className="w-4 h-4" />
              </button>

              <div className="flex-1 text-center font-semibold text-gray-900">
                {fontSize === "small" && labels.small}
                {fontSize === "medium" && labels.medium}
                {fontSize === "large" && labels.large}
                {fontSize === "x-large" && labels.xLarge}
              </div>

              <button
                onClick={increaseFontSize}
                disabled={fontSize === "x-large"}
                className="p-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 rounded transition-colors"
                aria-label="Increase font size"
              >
                <FaPlus className="w-4 h-4" />
              </button>
            </div>

            {/* Size Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleFontSizeChange("small")}
                className={`px-3 py-2 rounded border-2 transition-colors ${
                  fontSize === "small"
                    ? "bg-primary-100 border-primary-600 text-primary-900 font-semibold"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {labels.small}
              </button>
              <button
                onClick={() => handleFontSizeChange("medium")}
                className={`px-3 py-2 rounded border-2 transition-colors ${
                  fontSize === "medium"
                    ? "bg-primary-100 border-primary-600 text-primary-900 font-semibold"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {labels.medium}
              </button>
              <button
                onClick={() => handleFontSizeChange("large")}
                className={`px-3 py-2 rounded border-2 transition-colors ${
                  fontSize === "large"
                    ? "bg-primary-100 border-primary-600 text-primary-900 font-semibold"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {labels.large}
              </button>
              <button
                onClick={() => handleFontSizeChange("x-large")}
                className={`px-3 py-2 rounded border-2 transition-colors ${
                  fontSize === "x-large"
                    ? "bg-primary-100 border-primary-600 text-primary-900 font-semibold"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {labels.xLarge}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
