"use client";
import React, { useEffect, useState } from "react";
import AchievementPopup from "./AchievementPopup";
import { useScrollAchievement } from "../app/hooks/useScrollAchievement";
import { useSpeedRunnerAchievement } from "../app/hooks/useSpeedRunnerAchievement";
import { useCompletionistAchievement } from "../app/hooks/useCompletionistAchievement";
import { useNightModeNinjaAchievement } from "../app/hooks/useNightModeNinjaAchievement";
import { useEarlyBirdAchievement } from "../app/hooks/useEarlyBirdAchievement";
import { useHackerAchievements } from "../app/hooks/useHackerAchievements";
import { useInteractionAchievements } from "../app/hooks/useInteractionAchievements";
import { useSecretAchievements } from "../app/hooks/useSecretAchievements";
import { useBrowserActionAchievements } from "../app/hooks/useBrowserActionAchievements";

type Achievement = {
  id: string;
  title: string;
  description: string;
};

const ScrollAchievementManager: React.FC = () => {
  const { achievementUnlocked: scrollUnlocked } = useScrollAchievement();
  const { achievementUnlocked: speedUnlocked } = useSpeedRunnerAchievement();
  const { achievementUnlocked: completionistUnlocked } =
    useCompletionistAchievement();
  const { achievementUnlocked: nightModeUnlocked } =
    useNightModeNinjaAchievement();
  const { achievementUnlocked: earlyBirdUnlocked } = useEarlyBirdAchievement();

  const { hackerLvl1Unlocked, hackerLvl2Unlocked, debuggerUnlocked } =
    useHackerAchievements();
  const {
    repoRaiderUnlocked,
    demoHunterUnlocked,
    braveMessengerUnlocked,
    socialButterflyUnlocked,
    rageClickerUnlocked,
    businessMogulUnlocked,
    recruiterMaterialUnlocked,
  } = useInteractionAchievements();

  const { konamiUnlocked } = useSecretAchievements();
  const { clipboardUnlocked, printUnlocked } = useBrowserActionAchievements();

  const [unlockedAchievements, setUnlockedAchievements] = useState<
    Achievement[]
  >([]);

  const unlock = (id: string, title: string, description: string) => {
    setUnlockedAchievements((prev) => {
      if (prev.some((a) => a.id === id)) return prev;
      return [...prev, { id, title, description }];
    });
  };

  useEffect(() => {
    if (scrollUnlocked) {
      unlock(
        "smooth-scroller",
        "Smooth Scroller",
        "You checked out every section! Nice moves."
      );
    }
  }, [scrollUnlocked]);

  useEffect(() => {
    if (speedUnlocked) {
      unlock(
        "speed-runner",
        "Speed Runner",
        "You reached the end in record time! (< 20s)"
      );
    }
  }, [speedUnlocked]);

  useEffect(() => {
    if (completionistUnlocked) {
      unlock(
        "completionist",
        "Completionist",
        "You scrolled to the very bottom! Nothing left unchecked."
      );
    }
  }, [completionistUnlocked]);

  useEffect(() => {
    if (nightModeUnlocked) {
      unlock(
        "night-mode-ninja",
        "Night Mode Ninja",
        "You visited late at night! A true creature of darkness."
      );
    }
  }, [nightModeUnlocked]);

  useEffect(() => {
    if (earlyBirdUnlocked) {
      unlock(
        "early-bird",
        "Early Bird",
        "Up before the sun? That's dedication!"
      );
    }
  }, [earlyBirdUnlocked]);

  useEffect(() => {
    if (hackerLvl1Unlocked) {
      unlock(
        "hacker-lvl-1",
        "Hacker Level 1",
        "Peeking at the code? I see you."
      );
    }
  }, [hackerLvl1Unlocked]);

  useEffect(() => {
    if (hackerLvl2Unlocked) {
      unlock(
        "hacker-lvl-2",
        "Hacker Level 2",
        "Resizing the window? Testing responsiveness, I assume."
      );
    }
  }, [hackerLvl2Unlocked]);

  useEffect(() => {
    if (debuggerUnlocked) {
      unlock("debugger", "The Debugger", "DevTools activated. Found any bugs?");
    }
  }, [debuggerUnlocked]);

  useEffect(() => {
    if (repoRaiderUnlocked) {
      unlock(
        "repo-raider",
        "Repo Raider",
        "Checking out the source code? Nice choice."
      );
    }
  }, [repoRaiderUnlocked]);

  useEffect(() => {
    if (demoHunterUnlocked) {
      unlock(
        "demo-hunter",
        "Demo Hunter",
        "Straight to the action! Unlocking the demo."
      );
    }
  }, [demoHunterUnlocked]);

  useEffect(() => {
    if (braveMessengerUnlocked) {
      unlock(
        "brave-messenger",
        "Brave Messenger",
        "Thanks for reaching out! I'll get back to you soon."
      );
    }
  }, [braveMessengerUnlocked]);

  useEffect(() => {
    if (konamiUnlocked) {
      unlock(
        "konami-commando",
        "Konami Commando",
        "Cheat code activated! You know your history."
      );
    }
  }, [konamiUnlocked]);

  useEffect(() => {
    if (clipboardUnlocked) {
      unlock(
        "clipboard-bandit",
        "Clipboard Bandit",
        "Copy-pasting? I'll allow it."
      );
    }
  }, [clipboardUnlocked]);

  useEffect(() => {
    if (printUnlocked) {
      unlock(
        "print-perfectionist",
        "Print Perfectionist",
        "Old school! Want a hard copy?"
      );
    }
  }, [printUnlocked]);

  useEffect(() => {
    if (socialButterflyUnlocked) {
      unlock(
        "social-butterfly",
        "Social Butterfly",
        "Stalking my socials? Let's connect!"
      );
    }
  }, [socialButterflyUnlocked]);

  useEffect(() => {
    if (rageClickerUnlocked) {
      unlock("rage-clicker", "Rage Clicker", "Whoa there! Everything okay?");
    }
  }, [rageClickerUnlocked]);

  useEffect(() => {
    if (businessMogulUnlocked) {
      unlock(
        "business-mogul",
        "Business Mogul",
        "Exploring my freelance ventures? Let's build something!"
      );
    }
  }, [businessMogulUnlocked]);

  useEffect(() => {
    if (recruiterMaterialUnlocked) {
      unlock(
        "recruiter-material",
        "Recruiter Material",
        "Downloaded my CV? Looking forward to the interview!"
      );
    }
  }, [recruiterMaterialUnlocked]);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 pointer-events-none">
      {unlockedAchievements.map((achievement) => (
        <AchievementPopup
          key={achievement.id}
          title={achievement.title}
          description={achievement.description}
          onClose={() => {
            setUnlockedAchievements((prev) =>
              prev.filter((a) => a.id !== achievement.id)
            );
          }}
        />
      ))}
    </div>
  );
};

export default ScrollAchievementManager;
