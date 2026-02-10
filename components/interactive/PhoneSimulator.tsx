"use client";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

type PhoneSimulatorLabels = {
  instruction: string;
  success: string;
  apps: {
    messages: string;
    phone: string;
    camera: string;
    settings: string;
  };
};

export default function PhoneSimulator({
  onComplete,
  labels,
}: {
  onComplete: () => void;
  labels: PhoneSimulatorLabels;
}) {
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const apps = [
    { id: "messages", name: labels.apps.messages, icon: "💬", color: "bg-green-500" },
    { id: "phone", name: labels.apps.phone, icon: "📞", color: "bg-blue-500" },
    { id: "camera", name: labels.apps.camera, icon: "📷", color: "bg-gray-500" },
    { id: "settings", name: labels.apps.settings, icon: "⚙️", color: "bg-gray-600" },
  ];

  const handleAppClick = (appId: string) => {
    setSelectedApp(appId);
    if (appId === "messages") {
      setShowSuccess(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 w-full max-w-sm">
        {/* Phone Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-gray-100 px-6 py-3 text-center">
            <span className="text-sm text-gray-600">9:41</span>
          </div>

          {/* App Grid */}
          <div className="p-8 min-h-[500px]">
            <div className="grid grid-cols-3 gap-6">
              {apps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => handleAppClick(app.id)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all ${
                    selectedApp === app.id
                      ? "scale-95 opacity-70"
                      : "hover:scale-105 active:scale-95"
                  }`}
                >
                  <div className={`${app.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                    {app.icon}
                  </div>
                  <span className="text-xs font-medium text-gray-700 text-center">
                    {app.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-8 bg-green-100 border-2 border-green-500 rounded-lg p-4 animate-pulse">
                <div className="flex items-center gap-3 justify-center">
                  <FaCheckCircle className="text-green-600 w-6 h-6" />
                  <span className="text-lg font-semibold text-green-800">{labels.success}</span>
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

      <p className="text-center text-lg text-gray-600 mt-6">{labels.instruction}</p>
    </div>
  );
}
