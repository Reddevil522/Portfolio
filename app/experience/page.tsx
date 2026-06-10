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
          <p className="text-neutral-200 text-sm font-medium mb-2">
            MCA Student & Full Stack Developer
          </p>
          <p className="text-neutral-400 text-xs md:text-sm mb-5 leading-relaxed">
            Building modern web applications with React, Next.js, Node.js, Express, MongoDB,
            and AI technologies. Two projects shipped during the programme.
          </p>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* Nexora AI */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
              <p className="text-neutral-200 text-sm font-medium mb-1 flex items-center gap-1.5">
                <span className="text-violet-400">✦</span> Nexora AI
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed mb-3">
                AI-powered productivity assistant with natural language task management
                and smart insights.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "Claude API", "MongoDB", "Tailwind"].map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>

            {/* Wanderlust */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4">
              <p className="text-neutral-200 text-sm font-medium mb-1 flex items-center gap-1.5">
                <span className="text-teal-400">◈</span> Wanderlust
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed mb-3">
                Travel planning platform with itinerary builder, destination discovery,
                and budget tracking.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Node.js", "Express", "Maps API"].map((t) => (
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