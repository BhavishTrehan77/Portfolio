"use client";

import { problemSolving } from "@/data/portfolioData";
import {
  Code,
  Binary,
  ExternalLink,
  Target,
  Terminal,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
            Data Structures &amp; Algorithms
          </span>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl glass-card border border-amber-500/20 shadow-2xl relative overflow-hidden">
          {/* Subtle background element */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Core statement & LeetCode CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
                <Target className="w-3.5 h-3.5" />
                <span>Algorithmic Thinking &amp; Complexity Analysis</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {problemSolving.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I continuously practice Data Structures and Algorithms to
                cultivate rigorous analytical thinking, write optimal
                time-and-space complexity solutions, and prepare for competitive
                technical problem solving.
              </p>

              {/* LeetCode Button */}
              <div className="pt-2">
                <a
                  href={problemSolving.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-[1.02]"
                >
                  <span className="font-mono text-base font-black">LC</span>
                  <span>View LeetCode Profile</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Right Column: Key Focus Areas Grid */}
            <div className="lg:col-span-6">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Binary className="w-4 h-4 text-amber-400" />
                    Core Patterns &amp; Techniques Practiced
                  </span>
                  <span className="text-amber-400/80">Active</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {problemSolving.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-slate-200">
                          {topic.name}
                        </div>
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          {topic.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
