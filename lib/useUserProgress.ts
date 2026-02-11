import { useEffect, useState } from "react";

export interface UserProgress {
  completedLessons: string[];
  points: number;
  lastUpdated: string;
}

const STORAGE_KEY = "alldigital_user_progress";

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  points: 0,
  lastUpdated: new Date().toISOString(),
};

export function useUserProgress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_PROGRESS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse progress from localStorage:", error);
        setProgress(DEFAULT_PROGRESS);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever progress changes
  useEffect(() => {
    if (isLoaded) {
      const updatedProgress = {
        ...progress,
        lastUpdated: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProgress));
    }
  }, [progress, isLoaded]);

  const completeLesson = (lessonId: string, points: number) => {
    setProgress((prev) => {
      // Only add if not already completed
      if (prev.completedLessons.includes(lessonId)) {
        return prev;
      }

      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
        points: prev.points + points,
      };
    });
  };

  const isLessonCompleted = (lessonId: string): boolean => {
    return progress.completedLessons.includes(lessonId);
  };

  const resetProgress = () => {
    setProgress(DEFAULT_PROGRESS);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    progress,
    isLoaded,
    completeLesson,
    isLessonCompleted,
    resetProgress,
  };
}
