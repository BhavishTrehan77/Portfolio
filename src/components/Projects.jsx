"use client";

import { useState } from "react";
import { featuredProjects } from "@/data/portfolioData";
import {
  ExternalLink,
  Layers,
  CheckCircle2,
  Code2,
  ChevronDown,
  ChevronUp,
  FolderGit2,
  Sparkles,
  Shield,
  Bot,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";

export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-sky-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            Featured Engineering
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Software Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Production-oriented full-stack web platforms, multi-agent GenAI architectures,
              and intelligent knowledge retrieval pipelines.
            </p>
          </div>

          <a
            href="https://github.com/BhavishTrehan77?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-sky-400 self-start md:self-auto transition-colors"
          >
            <span>Browse All Repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const isExpanded = expandedId === project.id;
            return (
              <div
                key={project.id}
                className="group rounded-2xl glass-card border border-white/10 hover:border-sky-500/40 transition-all flex flex-col justify-between overflow-hidden shadow-xl"
              >
                {/* Project Header Banner */}
                <div className="p-6 pb-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900 border border-slate-700/80 text-sky-300">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900/90 hover:bg-sky-500 hover:text-slate-950 text-slate-300 border border-slate-800 transition-all"
                        aria-label={`View ${project.name} on GitHub`}
                      >
                        <GitHubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Project Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features List */}
                <div className="px-6 py-4 bg-slate-950/40 border-t border-b border-white/5 space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Engineering Features
                  </span>
                  <ul className="space-y-1.5">
                    {project.features.slice(0, 4).map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Expand / Collapse System Architecture */}
                  {project.features.length > 4 && (
                    <div>
                      {isExpanded && (
                        <div className="pt-2 space-y-3">
                          <ul className="space-y-1.5">
                            {project.features.slice(4).map((feature, fIdx) => (
                              <li
                                key={fIdx}
                                className="flex items-start gap-2 text-xs text-slate-300"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Architecture highlights */}
                          <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5 mt-3">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-300 font-semibold block">
                              Architecture Design Decisions
                            </span>
                            {project.architectureHighlights.map((arch, aIdx) => (
                              <p
                                key={aIdx}
                                className="text-[11px] text-slate-400 leading-snug font-mono"
                              >
                                &bull; {arch}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="mt-2 text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                      >
                        <span>
                          {isExpanded ? "Show Less" : "View Architecture & Details"}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-4 flex items-center justify-between gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-sky-500/40 text-xs font-semibold transition-all group-hover:shadow-md"
                  >
                    <FolderGit2 className="w-4 h-4 text-sky-400" />
                    <span>View Repository on GitHub</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
