"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "@/lib/projects-data";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { ExternalLink, Github, Code2 } from "lucide-react";

export default function ProjectsPage() {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 10 },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-4 tracking-tight">
            Featured <span className="text-emerald-400">Projects</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            A collection of robust, scalable applications I've built using modern web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <FollowerPointerCard
                title={
                  <div className="flex items-center space-x-2 rounded-full bg-zinc-900/90 px-3 py-1.5 shadow-lg backdrop-blur-md border border-zinc-800">
                    <span className="text-sm font-medium text-zinc-200">
                      View {project.title}
                    </span>
                  </div>
                }
              >
                <div 
                  onClick={() => router.push(`/projects/${project.slug}`)} 
                  className="h-full cursor-pointer"
                >
                  <div className="glass-card h-full flex flex-col rounded-3xl overflow-hidden group">
                    {/* Image Container */}
                    <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md shadow-lg
                          ${project.status === "active" 
                            ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" 
                            : "bg-zinc-500/20 text-zinc-300 border border-zinc-500/30"}`}
                        >
                          {project.status === "active" ? "Live" : "Development"}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <Code2 className="w-5 h-5 text-emerald-400" />
                        <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 text-xs font-medium bg-zinc-900/80 border border-zinc-800 rounded-lg text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 5 && (
                          <span className="px-3 py-1 text-xs font-medium bg-zinc-900/80 border border-zinc-800 rounded-lg text-zinc-500">
                            +{project.techStack.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/50 mt-auto">
                        {project.links.visit && (
                          <a
                            href={project.links.visit}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 px-4 py-2 rounded-xl transition-colors shadow-lg shadow-emerald-500/20"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-zinc-100 bg-zinc-800/50 hover:bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
