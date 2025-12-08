"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, BrainCircuit, Cpu } from "lucide-react";
import { PROJECTS_DATA } from "../constants";
import { Project } from "../types";

const getCategoryColor = (category: Project["category"]) => {
  switch (category) {
    case "Full Stack":
      return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
    case "ML/AI":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "IoT":
      return "bg-orange-500/10 text-orange-400 border-orange-500/20";
    default:
      return "bg-neutral-500/10 text-neutral-400 border-neutral-500/20";
  }
};

const getCategoryIcon = (category: Project["category"]) => {
  switch (category) {
    case "Full Stack":
      return <Code2 size={16} />;
    case "ML/AI":
      return <BrainCircuit size={16} />;
    case "IoT":
      return <Cpu size={16} />;
    default:
      return <Code2 size={16} />;
  }
};

const Projects: React.FC = () => {
  return (
    <section
      className="py-24 px-4 md:px-10 bg-gradient-to-b from-neutral-950 to-neutral-900/50"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-neon-yellow">Projects</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl text-lg">
            A collection of my work across Full Stack Development, Machine
            Learning, and IoT.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-3xl p-6 bg-neutral-900/40 border border-white/5 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-500 ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 to-neon-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-neon-yellow/20"
                      >
                        {project.link.includes("github.com") ? (
                          <Github size={18} />
                        ) : (
                          <ExternalLink size={18} />
                        )}
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-yellow transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs text-neutral-300 bg-neutral-800 rounded border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
