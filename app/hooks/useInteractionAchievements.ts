"use client";
import { useState, useEffect } from "react";

export const useInteractionAchievements = () => {
  const [repoRaiderUnlocked, setRepoRaiderUnlocked] = useState(false);
  const [demoHunterUnlocked, setDemoHunterUnlocked] = useState(false);
  const [braveMessengerUnlocked, setBraveMessengerUnlocked] = useState(false);
  const [socialButterflyUnlocked, setSocialButterflyUnlocked] = useState(false);
  const [rageClickerUnlocked, setRageClickerUnlocked] = useState(false);
  const [businessMogulUnlocked, setBusinessMogulUnlocked] = useState(false);
  const [recruiterMaterialUnlocked, setRecruiterMaterialUnlocked] = useState(false);

  useEffect(() => {
    let clickCount = 0;
    let clickTimer: NodeJS.Timeout;
    
    // Use refs to track unlocked state within the event listener closure
    const unlockedState = {
      repoRaider: false,
      demoHunter: false,
      businessMogul: false,
      recruiterMaterial: false,
      socialButterfly: false,
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for link clicks
      const link = target.closest("a");
      if (link) {
        const href = link.getAttribute("href") || "";
        const download = link.getAttribute("download");
        let shouldDelay = false;
        
        // Repo Raider: Click on GitHub link
        if (href.includes("github.com") && !unlockedState.repoRaider) {
          setRepoRaiderUnlocked(true);
          unlockedState.repoRaider = true;
          shouldDelay = true;
        }

        // Demo Hunter: Click on non-GitHub link inside projects section
        const projectsSection = target.closest("#projects");
        if (projectsSection && !href.includes("github.com") && href.startsWith("http") && !unlockedState.demoHunter) {
            setDemoHunterUnlocked(true);
            unlockedState.demoHunter = true;
            shouldDelay = true;
        }

        // Business Mogul: Click on link inside services section
        const servicesSection = target.closest("#services");
        if (servicesSection && !unlockedState.businessMogul) {
          setBusinessMogulUnlocked(true);
          unlockedState.businessMogul = true;
          shouldDelay = true;
        }

        // Recruiter Material: Click on CV download
        if (
          (href.includes("Resume") || href.endsWith(".pdf") || download !== null) && 
          !unlockedState.recruiterMaterial
        ) {
          setRecruiterMaterialUnlocked(true);
          unlockedState.recruiterMaterial = true;
          shouldDelay = true;
        }

        // Social Butterfly: Click on social links
        if (
          (href.includes("linkedin.com") ||
          href.includes("facebook.com") ||
          href.includes("instagram.com") ||
          href.includes("twitter.com") ||
          href.includes("x.com") ||
          href.includes("mailto:")) &&
          !unlockedState.socialButterfly
        ) {
          setSocialButterflyUnlocked(true);
          unlockedState.socialButterfly = true;
          shouldDelay = true;
        }

        if (shouldDelay) {
          e.preventDefault();
          e.stopPropagation();
          
          setTimeout(() => {
            if (download !== null) {
              // For downloads, we might need to simulate a click on a new element to avoid loop
              // or just allow default behavior if we can't easily re-trigger.
              // Re-triggering download:
              const tempLink = document.createElement('a');
              tempLink.href = href;
              tempLink.download = download || '';
              document.body.appendChild(tempLink);
              tempLink.click();
              document.body.removeChild(tempLink);
            } else {
               // Open in new tab
               window.open(href, '_blank');
            }
          }, 2000);
        }
      }

      // Brave Messenger: Click on submit button in contact section
      const button = target.closest("button");
      if (button && button.type === "submit") {
        const contactSection = target.closest("#contact");
        if (contactSection) {
            setBraveMessengerUnlocked(true);
        }
      }

      // Rage Clicker: 5 rapid clicks on non-interactive elements
      if (!link && !button && !target.closest("input") && !target.closest("textarea")) {
        clickCount++;
        clearTimeout(clickTimer);
        
        if (clickCount >= 5) {
          setRageClickerUnlocked(true);
          clickCount = 0;
        } else {
          clickTimer = setTimeout(() => {
            clickCount = 0;
          }, 1000); // Reset count if no click within 1s
        }
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return { 
    repoRaiderUnlocked, 
    demoHunterUnlocked, 
    braveMessengerUnlocked,
    socialButterflyUnlocked,
    rageClickerUnlocked,
    businessMogulUnlocked,
    recruiterMaterialUnlocked
  };
};
