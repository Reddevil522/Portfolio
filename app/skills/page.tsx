"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Server, Database, Wrench, Sparkles, Layout, Globe, Lock, Cpu } from "lucide-react";

type SkillCategory = "All" | "Frontend" | "Backend" | "Database" | "Tools" | "Other";

interface Skill {
  name: string;
  category: Exclude<SkillCategory, "All">;
  level: number;
  icon: React.ElementType;
  color: string;
}

const skillsData: Skill[] = [
  { name: "React", category: "Frontend", level: 80, icon: Code2, color: "text-blue-400" },
  { name: "JavaScript", category: "Frontend", level: 95, icon: Code2, color: "text-yellow-400" },
  { name: "HTML & CSS", category: "Frontend", level: 90, icon: Layout, color: "text-orange-500" },
  { name: "Tailwind CSS", category: "Frontend", level: 80, icon: Layout, color: "text-cyan-400" },
  { name: "Bootstrap", category: "Frontend", level: 90, icon: Layout, color: "text-purple-500" },

  { name: "Node.js", category: "Backend", level: 85, icon: Server, color: "text-green-500" },
  { name: "Express.js", category: "Backend", level: 85, icon: Server, color: "text-zinc-400" },
  { name: "REST APIs", category: "Backend", level: 80, icon: Globe, color: "text-blue-500" },

  { name: "MongoDB", category: "Database", level: 85, icon: Database, color: "text-green-500" },
  { name: "Mongoose", category: "Database", level: 80, icon: Database, color: "text-red-500" },


  { name: "Git", category: "Tools", level: 80, icon: Wrench, color: "text-orange-600" },
  { name: "GitHub", category: "Tools", level: 80, icon: Wrench, color: "text-zinc-100" },
  { name: "VS Code", category: "Tools", level: 85, icon: Wrench, color: "text-blue-500" },


  { name: "AI Integration", category: "Other", level: 80, icon: Sparkles, color: "text-purple-400" },
  { name: "Socket.io", category: "Other", level: 50, icon: Globe, color: "text-zinc-100" },
  { name: "WebRTC", category: "Other", level: 50, icon: Globe, color: "text-blue-300" },
  { name: "Authentication (JWT)", category: "Other", level: 75, icon: Lock, color: "text-yellow-500" },
];

const categories: SkillCategory[] = ["All", "Frontend", "Backend", "Database", "Tools", "Other"];

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-4 tracking-tight">
            Technical <span className="text-emerald-400">Skills</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A comprehensive overview of my technical expertise, tools, and technologies I work with.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === category
                  ? "bg-emerald-500 text-zinc-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 group cursor-default"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                  </div>
                  <div>
                    <h3 className="text-zinc-100 font-bold text-lg">{skill.name}</h3>
                    <p className="text-zinc-500 text-xs">{skill.category}</p>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="relative w-full h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
                  />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-zinc-500 font-medium">Proficiency</span>
                  <span className="text-xs text-emerald-400 font-bold">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Add a decorative element */}
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      </div>
    </div>
  );
}
