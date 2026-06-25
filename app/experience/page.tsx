"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { timelineStyles } from "@/public/dummyStyles";

const Badge = ({ color, icon, label }: { color: string; icon: string; label: string }) => (
  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mb-3 ${color}`}>
    <span>{icon}</span> {label}
  </span>
);

const TechPill = ({ label }: { label: string }) => (
  <span className="text-[10px] px-2 py-0.5 rounded-full border border-neutral-700 text-neutral-400 bg-neutral-800/50">
    {label}
  </span>
);

export default function ExperiencePage() {
  const data = [
    {
      title: "2025 – Present",
      content: (
        <div>
          <Badge color="bg-violet-950 text-violet-300" icon="✦" label="Current" />
          <p className="text-zinc-200 text-lg font-bold mb-2">
            MCA Student & Full Stack Developer
          </p>
          <p className="text-zinc-400 text-sm md:text-base mb-6 leading-relaxed">
            Building modern web applications with React, Next.js, Node.js, Express, MongoDB,
            and AI technologies. Shipped highly functional projects during the programme.
          </p>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nexora AI */}
            <div className="glass-card rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-300"></div>
              <p className="text-zinc-100 text-base font-bold mb-2 flex items-center gap-2 relative z-10">
                <span className="text-violet-400">✦</span> Nexora AI
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 relative z-10">
                AI-powered productivity assistant with natural language task management
                and smart insights.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["Next.js", "Claude API", "MongoDB", "Tailwind"].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>

            {/* MeetVerse / Wanderlust (Updating to match user projects) */}
            <div className="glass-card rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-all duration-300"></div>
              <p className="text-zinc-100 text-base font-bold mb-2 flex items-center gap-2 relative z-10">
                <span className="text-teal-400">◈</span> MeetVerse
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 relative z-10">
                Video Conferencing platform featuring screen sharing, real-time chat, and meeting rooms.
              </p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {["React", "Node.js", "Socket.io", "WebRTC"].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <Badge color="bg-teal-950 text-teal-300" icon="⟳" label="Transition" />
          <p className="text-neutral-200 text-sm font-medium mb-2">Into Technology</p>
          <p className="text-neutral-400 text-xs md:text-sm mb-4 leading-relaxed">
            A deliberate pivot from mathematics to software — picking up programming
            fundamentals, web development, databases, and modern engineering practices
            from scratch.
          </p>
          <div className="flex flex-wrap gap-2">
            {["HTML / CSS", "JavaScript", "Python", "Git", "SQL"].map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-neutral-700 text-neutral-400">
                {s}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022 – 2025",
      content: (
        <div>
          <Badge color="bg-blue-950 text-blue-300" icon="∑" label="Education" />
          <p className="text-neutral-200 text-sm font-medium mb-2">
            Bachelor of Science — Mathematics
          </p>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
            Three years building rigorous analytical and logical reasoning skills. The
            mathematical foundation shapes how I approach debugging, algorithm design,
            and systems thinking today.
          </p>
        </div>
      ),
    },
    {
      title: "Future Vision",
      content: (
        <div>
          <Badge color="bg-amber-950 text-amber-300" icon="→" label="Vision" />
          <p className="text-neutral-200 text-sm font-medium mb-2">
            AI & Software Engineering
          </p>
          <p className="text-neutral-400 text-xs md:text-sm mb-4 leading-relaxed">
            Aspiring to work at the intersection of full-stack engineering and AI —
            building products that are both technically sound and genuinely useful
            to people.
          </p>
          <div className="flex flex-wrap gap-2">
            {["System design", "LLM integration", "Open source", "Startups"].map((s) => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-dashed border-neutral-700 text-neutral-500">
                {s}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={timelineStyles.container}>
      <div className={timelineStyles.innerContainer}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <p className="text-[11px] tracking-widest uppercase text-neutral-500 mb-2">
            Portfolio
          </p>
          <h2 className="text-2xl md:text-4xl font-medium mb-3 text-white">
            My Journey
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-lg leading-relaxed">
            From a mathematics background to MCA and full-stack development — a path
            shaped by curiosity, problem-solving, and building things that matter.
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </div>
  );
}