"use client";
import { useState, useEffect } from "react";

const SECTIONS_TO_TRACK = [
  "hero",
  "about",
  "experience",
  "projects",
  "services",
  "contact",
];

export const useScrollAchievement = () => {
  const [visitedSections, setVisitedSections] = useState<Set<string>>(
    new Set()
  );
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);

  useEffect(() => {
    // If already unlocked, no need to track anymore
    if (achievementUnlocked) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisitedSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              
              // Check if all sections are visited
              if (
                SECTIONS_TO_TRACK.every((section) => newSet.has(section))
              ) {
                setAchievementUnlocked(true);
              }
              
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    SECTIONS_TO_TRACK.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [achievementUnlocked]);

  return { achievementUnlocked };
};
