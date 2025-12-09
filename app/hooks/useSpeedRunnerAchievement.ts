"use client";
import { useState, useEffect } from "react";

export const useSpeedRunnerAchievement = () => {
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);

  useEffect(() => {
    // Start timer on mount
    const startTime = Date.now();
    const TIME_LIMIT = 20000; // 20 seconds

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime < TIME_LIMIT) {
              setAchievementUnlocked(true);
            }
            // Disconnect after checking Contact section
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  return { achievementUnlocked };
};
