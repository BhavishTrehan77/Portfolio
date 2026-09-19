"use client";

import { education } from "@/data/portfolioData";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-sky-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            Academic Background
          </span>
        </div>

        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Rigorous computer science curriculum centered on software product
            engineering and full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-sky-500/30 transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {edu.institution}
                    </h3>
                    <p className="text-sky-300 font-medium text-sm mt-0.5">
                      {edu.degree}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.campus}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.grade}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Curriculum &amp; Engineering Focus
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {edu.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
