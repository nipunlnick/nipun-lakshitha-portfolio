"use client";
import { useState, useEffect } from "react";

export const useHackerAchievements = () => {
  const [hackerLvl1Unlocked, setHackerLvl1Unlocked] = useState(false);
  const [hackerLvl2Unlocked, setHackerLvl2Unlocked] = useState(false);
  const [debuggerUnlocked, setDebuggerUnlocked] = useState(false);

  useEffect(() => {
    // Hacker Level 1: F12 or Ctrl+Shift+I
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c"))
      ) {
        setHackerLvl1Unlocked(true);
      }
    };

    // Hacker Level 2: Window Resize
    const handleResize = () => {
      setHackerLvl2Unlocked(true);
      checkDevTools();
    };

    // Debugger: DevTools Detection (Resize difference)
    const checkDevTools = () => {
      const threshold = 160;
      const widthDiff = window.outerWidth - window.innerWidth > threshold;
      const heightDiff = window.outerHeight - window.innerHeight > threshold;

      if (widthDiff || heightDiff) {
        setDebuggerUnlocked(true);
      }
    };

    // Periodic check for docked DevTools
    const interval = setInterval(checkDevTools, 2000);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  return { hackerLvl1Unlocked, hackerLvl2Unlocked, debuggerUnlocked };
};
