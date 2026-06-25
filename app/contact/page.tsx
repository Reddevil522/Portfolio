"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import emailjs from "@emailjs/browser";
import { Boxes } from "@/components/ui/background-boxes";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Setup EmailJS properly when credentials are provided
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current!, 'YOUR_PUBLIC_KEY');
      
      // Simulating network request for demonstration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSuccess(true);
      if (formRef.current) formRef.current.reset();
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "gopalkumar20357@gmail.com",
      href: "mailto:gopalkumar20357@gmail.com",
      color: "text-emerald-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "@Gopal",
      href: "https://www.linkedin.com/in/gopal-kumar-2515b7381",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@Reddevil522",
      href: "https://github.com/Reddevil522",
      color: "text-zinc-100"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-24 pb-16 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-zinc-950 z-0 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className="opacity-20 absolute inset-0 z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 mb-4 tracking-tight">
            Get in <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Looking to hire? Let's build something great together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {contactMethods.map((method, idx) => (
              <Link 
                key={idx} 
                href={method.href}
                target="_blank"
                className="flex items-center gap-4 glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-500 text-sm font-medium">{method.label}</p>
                  <p className="text-zinc-200 font-bold group-hover:text-emerald-400 transition-colors truncate">
                    {method.value}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass-card rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <AnimatePresence>
              {success && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950/90 backdrop-blur-md rounded-3xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                  >
                    <CheckCircle className="w-24 h-24 text-emerald-400 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-2">Message Sent!</h3>
                  <p className="text-zinc-400 text-center max-w-sm">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-400 ml-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400 ml-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}