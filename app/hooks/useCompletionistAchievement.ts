"use client";
import { useState, useEffect } from "react";

export const useCompletionistAchievement = () => {
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);

  useEffect(() => {
    if (achievementUnlocked) return;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;
      
      // Trigger if within 50px of the bottom
      if (scrollPosition >= documentHeight - 50) {
        setAchievementUnlocked(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check initially in case page is short or already at bottom
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [achievementUnlocked]);

  return { achievementUnlocked };
};
