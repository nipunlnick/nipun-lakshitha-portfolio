"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { EXPERIENCE_DATA } from "../constants";

const Experience: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-10 max-w-5xl mx-auto" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 mb-4">
          Experience
        </h2>
        <div className="h-1 w-20 bg-neon-yellow mx-auto rounded-full" />
      </motion.div>

      <div className="relative border-l border-neutral-800 ml-3 md:ml-6 space-y-12">
        {EXPERIENCE_DATA.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative pl-8 md:pl-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-0 w-3 h-3 bg-neon-orange rounded-full ring-4 ring-neutral-900 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Briefcase size={18} className="text-neon-yellow" />
                  {item.role}
                </h3>
                <span className="text-sm font-mono text-neutral-400 flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                  <Calendar size={14} />
                  {item.period}
                </span>
              </div>
              <h4 className="text-lg text-neon-orange mb-3 font-medium">
                {item.company}
              </h4>
              <p className="text-neutral-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
