"use client";

import { useState, useEffect, useRef } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaStop } from "react-icons/fa";

interface SpeechPlayerProps {
  text: string;
  label: string;
  lang: string;
  labels: {
    play: string;
    pause: string;
    stop: string;
    speed: string;
  };
}

export default function SpeechPlayer({ text, label, lang, labels }: SpeechPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const languageMap: { [key: string]: string } = {
    sv: "sv-SE",
    en: "en-US",
    ar: "ar-SA",
    ti: "ti-ET",
    fr: "fr-FR",
  };

  const handlePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      return;
    }

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageMap[lang] || "en-US";
    utterance.rate = speed;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    if (isPlaying) {
      handleStop();
    }
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
      <FaVolumeUp className="text-blue-600 flex-shrink-0" />
      
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-xs text-gray-600">{labels.speed}: {speed.toFixed(1)}x</p>
      </div>

      <button
        onClick={handlePlay}
        className="p-2 hover:bg-blue-200 rounded-lg transition-colors text-blue-600"
        title={isPlaying ? labels.pause : labels.play}
        aria-label={isPlaying ? labels.pause : labels.play}
      >
        {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
      </button>

      {isPlaying && (
        <button
          onClick={handleStop}
          className="p-2 hover:bg-red-200 rounded-lg transition-colors text-red-600"
          title={labels.stop}
          aria-label={labels.stop}
        >
          <FaStop className="w-5 h-5" />
        </button>
      )}

      <select
        value={speed}
        onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
        className="px-2 py-1 text-sm border border-gray-300 rounded-lg bg-white hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option value={0.75}>0.75x</option>
        <option value={1}>1x</option>
        <option value={1.25}>1.25x</option>
        <option value={1.5}>1.5x</option>
      </select>
    </div>
  );
}
