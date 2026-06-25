"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
// import ProfileImg from "@/src/assets/images/profile/Pro.jpeg";
import ProfileImg from "@/public/Pro.jpeg";
import { Download, Github, Linkedin, Mail, Code2, Database, Layout, Server, Sparkles } from "lucide-react";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const floatingIcons = [
    { Icon: Layout, color: "text-blue-400", delay: 0, x: -120, y: -80 },
    { Icon: Server, color: "text-green-500", delay: 1, x: 140, y: -60 },
    { Icon: Database, color: "text-emerald-500", delay: 2, x: -140, y: 80 },
    { Icon: Code2, color: "text-yellow-400", delay: 1.5, x: 120, y: 100 },
    { Icon: Sparkles, color: "text-purple-400", delay: 0.5, x: 0, y: -120 },
  ];

  return (
    <div className="relative min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-6">
      <BackgroundBeams className="opacity-40" />
      <Spotlight className="-top-40 -z-20 left-0 md:-top-20 md:left-60" fill="#10b981" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center"
      >
        {/* Top Status Pill */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm font-medium shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </div>
        </motion.div>

        {/* Profile Image with Glowing Effects */}
        <motion.div variants={itemVariants} className="relative mb-8 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-50 blur-lg group-hover:opacity-75 transition duration-500 animate-pulse-slow"></div>
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-2 border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
            {/* Fallback layout if the image fails, but using the actual image */}
            <Image
              src={ProfileImg}
              alt="Gopal Kumar"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
              priority
            />
          </div>

          {/* Floating Icons around Profile */}
          {floatingIcons.map((item, idx) => (
            <motion.div
              key={idx}
              className="absolute top-1/2 left-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-2xl glass-card shadow-lg"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: item.x,
                y: item.y,
                opacity: 1,
              }}
              transition={{
                delay: item.delay,
                duration: 1,
                type: "spring",
                stiffness: 50,
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
              >
                <item.Icon className={`w-6 h-6 ${item.color}`} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Headlines */}
        <motion.div variants={itemVariants} className="max-w-3xl mb-4">
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-400 tracking-wide mb-2 uppercase">
            Gopal Kumar
          </h2>
          <div className="text-sm md:text-base font-medium text-emerald-400 mb-6 flex flex-wrap justify-center items-center gap-2">
            <span>Full Stack Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 hidden sm:block"></span>
            <span>MERN Stack Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 hidden sm:block"></span>
            <span>MCA Student</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 tracking-tight leading-tight mb-6">
            Building Scalable Full-Stack Applications with <span className="text-gradient">Modern Web Technologies</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-base md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          I develop modern web applications using React, Node.js, Express, MongoDB, and AI-powered technologies to solve real-world problems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            download="Gopal_Kumar_Resume.pdf"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-zinc-950 bg-zinc-100 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-emerald-400 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </span>
          </a>

          <Link href="/projects" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-zinc-100 glass-card rounded-xl transition-all hover:scale-105 active:scale-95 gap-2 group">
            View Projects
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &rarr;
            </motion.span>
          </Link>
        </motion.div>

        {/* Social Links Mini */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-12">
          <Link href="https://github.com/Reddevil522" target="_blank" className="p-3 rounded-xl glass hover:bg-zinc-800/50 hover:text-zinc-100 text-zinc-400 transition-all hover:scale-110">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/gopal-kumar-2515b7381" target="_blank" className="p-3 rounded-xl glass hover:bg-zinc-800/50 hover:text-blue-400 text-zinc-400 transition-all hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="p-3 rounded-xl glass hover:bg-zinc-800/50 hover:text-emerald-400 text-zinc-400 transition-all hover:scale-110">
            <Mail className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
