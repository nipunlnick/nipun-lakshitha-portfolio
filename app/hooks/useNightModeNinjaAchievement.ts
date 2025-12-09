"use client";
import { useState, useEffect } from "react";

export const useNightModeNinjaAchievement = () => {
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    // 8 PM (20) to 5 AM (5)
    if (hour >= 20 || hour < 5) {
      setAchievementUnlocked(true);
    }
  }, []);

  return { achievementUnlocked };
};
