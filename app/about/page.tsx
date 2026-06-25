"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { GraduationCap, Code, Brain, Rocket, Trophy, Server, Laptop, BookOpen } from "lucide-react";
import ProfileImg from "@/public/Pro.jpeg";

const achievements = [
  { icon: Trophy, title: "10+", subtitle: "Projects Built" },
  { icon: Code, title: "MERN", subtitle: "Stack Specialist" },
  { icon: Brain, title: "AI", subtitle: "Integration Expert" },
  { icon: BookOpen, title: "MCA", subtitle: "Student" },
];

const skills = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", "JavaScript", "TypeScript", "Tailwind CSS", "AI Integration", "WebRTC"
];

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-emerald-900/20 to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-4 tracking-tight">
            About <span className="text-emerald-400">Me</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Passionate Full Stack Developer and MCA student specializing in the MERN stack and AI-powered applications.
          </p>
        </motion.div>

        {/* Bento Box Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Main Bio Card - Spans 2 cols on md+ */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>

            <div className="flex flex-col sm:flex-row gap-8 items-start relative z-10">
              <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden border-2 border-zinc-800 shadow-xl">
                <Image
                  src={ProfileImg}
                  alt="Gopal Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-zinc-100 mb-4">Who I Am</h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Hello! I'm Gopal Kumar, currently pursuing my MCA at Chandigarh University.
                  I am a passionate Full Stack Developer with a strong focus on building scalable,
                  user-centric applications using React, Node.js, Express, and MongoDB.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                  I enjoy solving complex problems, continuously learning new technologies, and
                  integrating AI to create impactful digital experiences. My goal is to build globally
                  recognized products that transform industries.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-zinc-800/80 flex items-center justify-center mb-6 border border-zinc-700">
                <GraduationCap className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-100 mb-2">Education</h3>
              <div className="mb-4">
                <p className="text-emerald-400 font-semibold">Master of Computer Applications (MCA)</p>
                <p className="text-zinc-400 text-sm mt-1">Chandigarh University</p>
                <p className="text-zinc-500 text-xs mt-1">2025 - Present</p>
              </div>
              <div>
                <p className="text-zinc-200 font-medium text-sm">B.Sc. Mathematics</p>
                <p className="text-zinc-500 text-xs mt-1">2022 - 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold text-zinc-100">{item.title}</h4>
                <p className="text-sm text-zinc-400 mt-1">{item.subtitle}</p>
              </div>
            ))}
          </motion.div>

          {/* Skills Summary Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-card rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Laptop className="w-6 h-6 text-emerald-400" />
              <h3 className="text-xl font-bold text-zinc-100">Core Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-sm text-zinc-300 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/skills" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium inline-flex items-center gap-2 group">
                View Detailed Skills
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </motion.div>

          {/* Contact CTA Card */}
          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 bg-gradient-to-br from-emerald-900/20 to-zinc-900/50 flex flex-col justify-center items-center text-center border-emerald-500/20">
            <Rocket className="w-10 h-10 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-zinc-100 mb-2">Let's Build Together</h3>
            <p className="text-zinc-400 text-sm mb-6">Always open for new opportunities and collaborations.</p>
            <Link
              href="/contact"
              className="w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Get in Touch
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}