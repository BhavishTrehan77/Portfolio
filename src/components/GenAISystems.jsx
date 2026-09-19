"use client";

import { useState } from "react";
import { genAiCapabilities } from "@/data/portfolioData";
import {
  Sparkles,
  Workflow,
  SearchCode,
  Bot,
  FileSearch,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle2,
  Layers,
  FileText,
  Scan,
  RefreshCw,
} from "lucide-react";

export default function GenAISystems() {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      id: "ingestion",
      step: "01",
      title: "Chunking & Embeddings",
      desc: "Document/PDF ingestion, token-aware chunking, and vector embedding generation.",
      tech: "Gemini Embeddings / Vectorization",
    },
    {
      id: "rewriting",
      step: "02",
      title: "Query Reconstruction",
      desc: "Rewriting user prompts to resolve conversational pronouns and expand semantic intent.",
      tech: "Prompt Engineering & Query Expansion",
    },
    {
      id: "retrieval",
      step: "03",
      title: "Hybrid Search & RRF",
      desc: "MongoDB Atlas Vector Search combined with keyword search using Reciprocal Rank Fusion.",
      tech: "MongoDB Vector Search + RRF",
    },
    {
      id: "agents",
      step: "04",
      title: "Agent Reasoning & Tools",
      desc: "Multi-step autonomous agent loops equipped with structured JSON tool calling.",
      tech: "Gemini Function Calling & Loops",
    },
    {
      id: "generation",
      step: "05",
      title: "Grounded Synthesis",
      desc: "Context-aware response generation with strict grounding against retrieved chunks.",
      tech: "Google Gemini 1.5 Synthesis",
    },
  ];

  return (
    <section id="genai" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-indigo-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Focus Area
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {genAiCapabilities.title}
          </h2>
          <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 border-l-4 border-l-indigo-500">
            <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed">
              &ldquo;{genAiCapabilities.statement}&rdquo;
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Visualizer */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl glass-card border border-indigo-500/20 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase text-indigo-400 font-semibold">
                Architecture Blueprint
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Production RAG &amp; Agent Retrieval Pipeline
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Interactive Pipeline Steps (Click to inspect)
            </span>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {pipelineSteps.map((s, index) => {
              const isSelected = activeStep === index;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(index)}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    isSelected
                      ? "bg-indigo-950/60 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-[1.02]"
                      : "bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-indigo-400" : "text-slate-400"
                      }`}
                    >
                      {s.step}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    )}
                  </div>
                  <h4
                    className={`text-sm font-semibold mb-1 ${
                      isSelected ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2">
                    {s.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Inspector */}
          <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-indigo-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                  STAGE {pipelineSteps[activeStep].step}
                </span>
                <span className="text-sm font-bold text-white">
                  {pipelineSteps[activeStep].title}
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {pipelineSteps[activeStep].desc}
              </p>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-indigo-300 whitespace-nowrap self-start md:self-auto">
              {pipelineSteps[activeStep].tech}
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {genAiCapabilities.highlights.map((item, idx) => {
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    {idx === 0 && <Workflow className="w-5 h-5" />}
                    {idx === 1 && <SearchCode className="w-5 h-5" />}
                    {idx === 2 && <Bot className="w-5 h-5" />}
                    {idx === 3 && <FileSearch className="w-5 h-5" />}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-950/40 border border-indigo-500/20 text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified GenAI Badges Cloud */}
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Verified GenAI Competencies Represented in Projects
          </div>
          <div className="flex flex-wrap gap-2">
            {genAiCapabilities.techBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950 border border-slate-700/80 text-slate-200 hover:border-indigo-400/50 hover:text-indigo-200 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
