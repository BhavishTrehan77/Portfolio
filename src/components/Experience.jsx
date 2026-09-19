"use client";

import { experience } from "@/data/portfolioData";
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  FileCheck,
  Server,
  Layers,
  Container,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-sky-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            Work Experience
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Software Development Experience
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Professional engineering contributions, production codebases, and
              deployment workflows.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono">
            <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Reference &amp; Experience Letter Available</span>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
          {experience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-sky-500 border-4 border-[#070a12] group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-sky-500/30 transition-all space-y-5">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        {exp.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-300 font-medium text-sm mt-1">
                      <Building2 className="w-4 h-4 text-sky-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Responsibilities & Delivered Work */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Technical Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Tags Used */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
