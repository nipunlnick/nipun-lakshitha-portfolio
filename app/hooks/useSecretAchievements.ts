"use client";
import { useState, useEffect } from "react";

export const useSecretAchievements = () => {
  const [konamiUnlocked, setKonamiUnlocked] = useState(false);

  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if key matches the next expected key in sequence
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setKonamiUnlocked(true);
          konamiIndex = 0; // Reset after success
        }
      } else {
        konamiIndex = 0; // Reset if mistake
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { konamiUnlocked };
};
