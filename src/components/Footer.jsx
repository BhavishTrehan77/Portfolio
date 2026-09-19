"use client";

import { personalInfo } from "@/data/portfolioData";
import {
  Mail,
  ArrowUp,
  FileDown,
  Terminal,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070d] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Role */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="w-6 h-6 rounded-md bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center text-xs font-mono font-bold">
                BT
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs font-mono text-slate-400">
              {personalInfo.headline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-white/5 border border-white/5 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-white/5 border border-white/5 transition-colors"
              aria-label="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href={personalInfo.socials.email}
              className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-white/5 border border-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button & copyright */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>&copy; 2026 {personalInfo.name}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
