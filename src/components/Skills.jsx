"use client";

import { useState } from "react";
import { technicalSkills } from "@/data/portfolioData";
import {
  Code2,
  FileCode,
  Terminal,
  Atom,
  Globe,
  Palette,
  Layout,
  Zap,
  Smartphone,
  Server,
  Cpu,
  Network,
  Key,
  ShieldCheck,
  Layers,
  Database,
  Workflow,
  Boxes,
  HardDrive,
  Table2,
  Container,
  Package,
  GitBranch,
  PlaySquare,
  Cloud,
  UploadCloud,
  Send,
  TerminalSquare,
  Mail,
  MessageSquare,
  Image,
  Flame,
  CheckCircle2,
} from "lucide-react";

// Icon mapping helper
const ICON_MAP = {
  Code2,
  FileCode,
  Terminal,
  Atom,
  Globe,
  Palette,
  Layout,
  Zap,
  Smartphone,
  Server,
  Cpu,
  Network,
  Key,
  ShieldCheck,
  Layers,
  Database,
  Workflow,
  Boxes,
  HardDrive,
  Table2,
  Container,
  Package,
  GitBranch,
  PlaySquare,
  Cloud,
  UploadCloud,
  Send,
  TerminalSquare,
  Mail,
  MessageSquare,
  Image,
  Flame,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...technicalSkills.map((c) => c.category)];

  const displayedSkills =
    activeCategory === "All"
      ? technicalSkills
      : technicalSkills.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-sky-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            Technical Stack
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Engineering Technologies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Organized domain proficiency across modern web frameworks, backend
              runtimes, databases, and deployment infrastructure.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === category
                    ? "bg-sky-500 text-slate-950 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((catGroup) => (
            <div
              key={catGroup.category}
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                  <h3 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    {catGroup.category}
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {catGroup.skills.map((skill) => {
                    const IconComponent = ICON_MAP[skill.icon] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-sky-500/30 transition-all"
                      >
                        <IconComponent className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
