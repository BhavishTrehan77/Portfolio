"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolioData";
import {
  ArrowRight,
  Mail,
  FileDown,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Code2,
  Database,
  Server,
  Workflow,
  Copy,
  Check,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "@/components/Icons";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("architecture");
  const [copiedCmd, setCopiedCmd] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText("npx bhavish-trehan");
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-slate-300">
                Full-Stack &amp; GenAI Engineering Candidate
              </span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">
                {personalInfo.headline}
              </p>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.subheading}
            </p>

            {/* Tech badges strip */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Next.js",
                "Node.js / Express",
                "MongoDB Vector Search",
                "Google Gemini RAG",
                "Prisma & PostgreSQL",
                "Docker",
                "JWT & RBAC",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900/70 border border-slate-800 text-slate-300 hover:border-sky-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary & Social CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              {/* [View Projects] */}
              <a
                href="#projects"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all hover:scale-[1.02]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* [Contact Me] */}
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-white font-medium text-sm transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Contact Me</span>
              </a>

              {/* [Download Resume] */}
              <a
                href="/resume.pdf"
                download="Bhavish_Trehan_SDE_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 text-indigo-200 font-medium text-sm transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* External Links Strip: GitHub, LinkedIn, LeetCode */}
            <div className="pt-2 flex items-center gap-4 text-sm text-slate-400">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-500">
                Profiles:
              </span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Architecture Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Window Titlebar */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    bhavish@engine:~/architecture
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === "architecture"
                        ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    sys.flow
                  </button>
                  <button
                    onClick={() => setActiveTab("spec")}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === "spec"
                        ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    engineer.json
                  </button>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 font-mono text-xs space-y-4 bg-[#0a0e1a]/95 min-h-[340px]">
                {activeTab === "architecture" ? (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                      <span>PIPELINE</span>
                      <span className="text-emerald-400 text-[10px] uppercase tracking-wider flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Online &amp; Healthy
                      </span>
                    </div>

                    {/* Node 1 */}
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/30 transition-all flex items-start gap-3">
                      <div className="p-1.5 rounded bg-sky-500/10 text-sky-400 mt-0.5">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-200 font-semibold">Client &amp; API Layer</span>
                          <span className="text-[10px] text-sky-400">Next.js / Express</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          JWT auth, Zod schemas, REST routing, CORS, Nodemailer
                        </p>
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex items-start gap-3">
                      <div className="p-1.5 rounded bg-indigo-500/10 text-indigo-400 mt-0.5">
                        <Workflow className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-200 font-semibold">GenAI &amp; RAG Engine</span>
                          <span className="text-[10px] text-indigo-400">Gemini + Vector DB</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Query rewrite, chunking, embeddings, RRF, tool-calling agents
                        </p>
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-all flex items-start gap-3">
                      <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 mt-0.5">
                        <Database className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-200 font-semibold">Data Persistence</span>
                          <span className="text-[10px] text-emerald-400">Mongo + Postgres</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          MongoDB Atlas Vector Search, Prisma ORM, relational cascades
                        </p>
                      </div>
                    </div>

                    {/* Node 4 */}
                    <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all flex items-start gap-3">
                      <div className="p-1.5 rounded bg-amber-500/10 text-amber-400 mt-0.5">
                        <Server className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-200 font-semibold">Infra &amp; CI/CD</span>
                          <span className="text-[10px] text-amber-400">Docker + AWS</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Docker Compose, GitHub Actions, AWS EC2, Vercel
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <pre className="text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
                    {`{
  "engineer": "Bhavish Trehan",
  "program": "Kalvium CS - SGT University",
  "degree": "B.Tech CSE (Software Product Eng.)",
  "cgpa": "9.50 / 10.00",
  "focus": [
    "Full-Stack Web Engineering",
    "Scalable Backend & REST APIs",
    "Generative AI & RAG Pipelines",
    "Autonomous AI Agents"
  ],
  "verified_repos": [
    "Resolve-ai",
    "Boat-app"
  ],
  "location": "Rohtak / Gurgaon, India",
  "internship_ready": true
}`}
                  </pre>
                )}

                {/* Terminal status bar */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    Stack ready for deployment
                  </span>
                  <span className="text-slate-500">v2026.1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
