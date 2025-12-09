"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { SOCIAL_LINKS } from "../constants";

const ROLES = [
  "Full Stack Developer",
  "IoT Enthusiast",
  "ML Practitioner",
  "Social Media Strategist",
  "Event Planner",
  "Content Creator",
  "Tech Innovator",
  "UI/UX Designer",
  "Mobile App Developer",
  "AI/LLM Researcher",
  "Digital Marketing Expert",
  "Freelance Consultant",
  "Automation Specialist",
  "IoT Solutions Architect",
  "Creative Technologist",
  "Entrepreneur",
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500); // Change role every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const title = "Hi, I'm Nipun Lakshitha.";
  const letters = Array.from(title);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-10 overflow-hidden pt-20"
      id="hero"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-neon-orange/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-neon-yellow/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="z-10 text-center max-w-4xl mx-auto">
        <motion.div
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neon-yellow/30 bg-neon-yellow/10 text-neon-yellow text-sm font-mono tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Available for Work
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        <div className="h-12 md:h-16 mb-8 overflow-visible relative flex justify-center items-center">
          <h2
            className={`text-xl md:text-3xl font-semibold text-neon-orange relative inline-block glitch-wrapper ${
              true ? "glitch-active" : ""
            }`}
          >
            <span
              className="glitch-text relative z-10 block"
              data-text={ROLES[roleIndex]}
            >
              {ROLES[roleIndex]}
            </span>
          </h2>
        </div>

        <motion.p
          className="text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          I build intelligent web solutions and bridge the gap between software
          and hardware. Based in Galle, Sri Lanka.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a
            href="/Resume/PVNLakshitha_Resume.pdf"
            download="PVNLakshitha_Resume.pdf"
            className="group relative px-8 py-3 bg-neon-yellow text-neutral-900 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download CV <Download size={18} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-yellow to-neon-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <div className="flex gap-4 items-center px-4">
            {SOCIAL_LINKS.map((link) => {
              const Icon =
                link.icon === "Github"
                  ? Github
                  : link.icon === "Linkedin"
                  ? Linkedin
                  : Mail;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-neon-yellow/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.5)] transform hover:scale-110 hover:rotate-6"
                  aria-label={link.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
