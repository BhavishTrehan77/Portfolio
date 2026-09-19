"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import {
  GraduationCap,
  Layers,
  Sparkles,
  ShieldCheck,
  BrainCircuit,
  Binary,
  ArrowUpRight,
  Code2,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      title: "Full-Stack Development",
      description:
        "Building practical, responsive web apps using React.js, Next.js, Node.js, Express, and modern styling with Tailwind CSS.",
      icon: Layers,
      accent: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Backend & Auth Systems",
      description:
        "Designing RESTful APIs, JWT authentication, RBAC authorization, secure token management, and PostgreSQL / MongoDB schemas.",
      icon: ShieldCheck,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Generative AI & RAG",
      description:
        "Architecting context-aware AI systems with Google Gemini, vector embeddings, MongoDB Vector Search, and autonomous agent loops.",
      icon: BrainCircuit,
      accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      title: "Algorithmic Problem Solving",
      description:
        "Continuously sharpening data structures and algorithmic thinking through systematic problem solving on LeetCode.",
      icon: Binary,
      accent: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-sky-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Software Product Engineer building at the intersection of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Full-Stack Systems &amp; GenAI
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                I am a Computer Science student pursuing{" "}
                <span className="text-white font-medium">
                  Software Product Engineering at Kalvium&apos;s UG Program in CS
                  at SGT University
                </span>
                .
              </p>
              <p>
                I enjoy building practical software products across the full
                stack, from frontend interfaces and backend APIs to databases,
                authentication, deployment, and AI-powered systems.
              </p>
              <p>
                My current technical focus is{" "}
                <span className="text-sky-300 font-medium">
                  Full-Stack Development and Generative AI
                </span>
                , particularly RAG systems, embeddings, vector search,
                multimodal AI, and AI agents.
              </p>
              <p>
                In parallel, I actively strengthen my foundation in{" "}
                <span className="text-emerald-300 font-medium">
                  Data Structures and Algorithms
                </span>
                , applying analytical problem solving to write clean, efficient,
                and maintainable code.
              </p>
            </div>

            {/* Quick Education Callout */}
            <div className="p-4 rounded-xl glass-card border border-white/10 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">
                    Kalvium UG Program &bull; SGT University
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    CGPA 9.50
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  B.Tech in Computer Science Engineering (Software Product
                  Engineering) &bull; 2025 – 2029
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl glass-card border border-white/10 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center border ${pillar.accent}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
