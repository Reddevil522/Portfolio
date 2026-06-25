"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Download, FileText, Github, Star, GitCommit, GitPullRequest, GitFork, Book } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  const [githubData, setGithubData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch basic public GitHub data
    const fetchGithubData = async () => {
      try {
        const res = await fetch("https://api.github.com/users/Reddevil522");
        if (res.ok) {
          const data = await res.json();
          setGithubData(data);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGithubData();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4 tracking-tight">
              My <span className="text-emerald-400">Resume</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-2xl">
              Professional experience, education, and open-source contributions.
            </p>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/resume.pdf" 
              target="_blank"
              className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Resume Preview Area */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-3xl p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-800">
                <FileText className="w-8 h-8 text-emerald-400" />
                <h2 className="text-2xl font-bold text-zinc-100">Professional Summary</h2>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-zinc-300 leading-relaxed mb-6">
                  Passionate and detail-oriented Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
                  Currently pursuing a Master of Computer Applications (MCA) at Chandigarh University. Proven ability to build scalable, 
                  user-centric web applications and integrate modern technologies like AI and WebRTC to solve real-world problems.
                </p>

                <h3 className="text-xl font-bold text-zinc-100 mt-8 mb-4">Key Qualifications</h3>
                <ul className="list-disc pl-5 text-zinc-300 space-y-2 mb-8">
                  <li>Strong foundation in JavaScript/TypeScript and modern React.</li>
                  <li>Experience building secure RESTful APIs with Node.js and Express.</li>
                  <li>Proficient in database design and modeling with MongoDB.</li>
                  <li>Hands-on experience with AI integrations (Google Gemini API).</li>
                  <li>Familiarity with WebRTC and Socket.io for real-time applications.</li>
                </ul>

                <h3 className="text-xl font-bold text-zinc-100 mt-8 mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 border-l-2 border-l-emerald-500">
                    <h4 className="font-bold text-zinc-200">Master of Computer Applications (MCA)</h4>
                    <p className="text-zinc-400 text-sm">Chandigarh University • 2025 - Present</p>
                  </div>
                  <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50 border-l-2 border-l-blue-500">
                    <h4 className="font-bold text-zinc-200">B.Sc. Mathematics</h4>
                    <p className="text-zinc-400 text-sm">2022 - 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* GitHub Integration Area */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-3xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Github className="w-6 h-6 text-zinc-100" />
                <h3 className="text-xl font-bold text-zinc-100">GitHub Stats</h3>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-emerald-500"></div>
                </div>
              ) : githubData ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
                    <img src={githubData.avatar_url} alt="GitHub Avatar" className="w-12 h-12 rounded-full border border-zinc-700" />
                    <div>
                      <p className="font-bold text-zinc-200">{githubData.name || githubData.login}</p>
                      <a href={githubData.html_url} target="_blank" className="text-xs text-emerald-400 hover:underline">@{githubData.login}</a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 text-center">
                      <Book className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-zinc-100">{githubData.public_repos}</p>
                      <p className="text-xs text-zinc-500">Repositories</p>
                    </div>
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800 text-center">
                      <Star className="w-5 h-5 text-yellow-400 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-zinc-100">{githubData.followers}</p>
                      <p className="text-xs text-zinc-500">Followers</p>
                    </div>
                  </div>

                  {/* Note about API limits */}
                  <p className="text-xs text-zinc-500 mt-4 text-center">
                    Real-time data fetched from GitHub API.
                  </p>
                </div>
              ) : (
                <div className="text-zinc-500 text-sm text-center py-8">
                  Could not load GitHub stats.
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
