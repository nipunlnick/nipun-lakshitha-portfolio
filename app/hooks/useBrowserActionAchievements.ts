"use client";
import { useState, useEffect } from "react";

export const useBrowserActionAchievements = () => {
  const [clipboardUnlocked, setClipboardUnlocked] = useState(false);
  const [printUnlocked, setPrintUnlocked] = useState(false);

  useEffect(() => {
    const handleCopy = () => {
      setClipboardUnlocked(true);
    };

    const handlePrint = () => {
      setPrintUnlocked(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "p") {
        setPrintUnlocked(true);
      }
    };

    window.addEventListener("copy", handleCopy);
    window.addEventListener("beforeprint", handlePrint);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("copy", handleCopy);
      window.removeEventListener("beforeprint", handlePrint);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return { clipboardUnlocked, printUnlocked };
};
