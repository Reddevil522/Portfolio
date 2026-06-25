"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Sharma",
    role: "Senior Software Engineer",
    content: "Gopal is an exceptional talent. His ability to grasp complex full-stack concepts and turn them into functional, beautifully designed applications is impressive. Working with him on MERN projects was a great experience.",
    avatar: "https://ui-avatars.com/api/?name=Alex+Sharma&background=0D8ABC&color=fff"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Product Manager",
    content: "The level of dedication Gopal brings to his projects is unmatched. He doesn't just write code; he thinks about the user experience, edge cases, and performance. His AI-integrated projects are top-notch.",
    avatar: "https://ui-avatars.com/api/?name=Priya+Patel&background=10B981&color=fff"
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Fellow Developer",
    content: "Collaborating with Gopal is always smooth. He writes clean, maintainable code and is always eager to learn new technologies. His expertise in React and Node.js makes him a valuable asset to any team.",
    avatar: "https://ui-avatars.com/api/?name=Rahul+Verma&background=8B5CF6&color=fff"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">What People Say</h2>
        <p className="text-zinc-400">Recommendations and testimonials from colleagues</p>
      </div>

      <div className="relative glass-card rounded-3xl p-8 md:p-12 overflow-hidden border-emerald-500/20">
        <Quote className="absolute top-6 left-6 w-20 h-20 text-emerald-500/10 rotate-180" />
        
        <div className="relative z-10 flex items-center justify-between">
          <button 
            onClick={prevTestimonial}
            className="hidden md:flex p-3 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-400" />
          </button>

          <div className="flex-1 px-4 md:px-12 text-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="flex gap-1 text-emerald-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-emerald-400" />)}
                </div>
                
                <p className="text-lg md:text-xl text-zinc-300 italic mb-8 leading-relaxed max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-12 h-12 rounded-full border-2 border-emerald-500/30"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-zinc-100">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-emerald-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={nextTestimonial}
            className="hidden md:flex p-3 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden justify-center gap-4 mt-8 relative z-20">
          <button 
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-zinc-900/80 border border-zinc-800 hover:text-emerald-400 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-zinc-400" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-zinc-900/80 border border-zinc-800 hover:text-emerald-400 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-zinc-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
