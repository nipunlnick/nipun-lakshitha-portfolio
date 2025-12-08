"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Lightbulb, User } from "lucide-react";
import { EDUCATION_DATA, VOLUNTEERING_DATA } from "../constants";

const About: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-10 max-w-7xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          About <span className="text-neon-orange">Me</span>
        </h2>
        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl mx-auto">
          I am a detail-oriented Full Stack Developer with a strong foundation
          in bridging software and hardware. From building complex web
          applications to experimenting with IoT and Machine Learning, I thrive
          on innovation.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-neon-yellow" size={28} />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-4">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-neon-yellow/30 transition-colors"
              >
                <h4 className="text-lg font-bold text-white">
                  {edu.institution}
                </h4>
                <p className="text-neon-yellow font-medium text-sm mb-1">
                  {edu.degree}
                </p>
                <p className="text-neutral-500 text-xs font-mono">{edu.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Volunteering & Leadership Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="text-neon-orange" size={28} />
            <h3 className="text-2xl font-bold text-white">
              Volunteering & Leadership
            </h3>
          </div>

          <div className="space-y-4">
            {VOLUNTEERING_DATA.map((vol) => (
              <div
                key={vol.id}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-neon-orange/30 transition-colors relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-neon-orange/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
                <h4 className="text-lg font-bold text-white relative z-10">
                  {vol.role}
                </h4>
                <p className="text-neon-orange font-medium text-sm mb-2 relative z-10">
                  {vol.organization}
                </p>
                <p className="text-neutral-400 text-sm leading-relaxed relative z-10">
                  {vol.description}
                </p>
                <p className="text-neutral-500 text-xs font-mono mt-3 relative z-10">
                  {vol.period}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
