"use client";
import { useState, useEffect } from "react";

export const useEarlyBirdAchievement = () => {
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    // 5 AM (5) to 8 AM (8)
    if (hour >= 5 && hour < 8) {
      setAchievementUnlocked(true);
    }
  }, []);

  return { achievementUnlocked };
};
