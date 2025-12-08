"use client";
import React from "react";
import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const SkillsMarquee: React.FC = () => {
  // Duplicate array to ensure smooth infinite loop
  const marqueeSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="w-full overflow-hidden bg-neutral-900/50 border-y border-white/5 py-6 backdrop-blur-sm relative z-10">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {marqueeSkills.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="text-xl md:text-2xl font-mono font-bold text-neutral-400 flex items-center gap-2"
          >
            <span className="text-neon-yellow opacity-60">#</span> {skill}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;
