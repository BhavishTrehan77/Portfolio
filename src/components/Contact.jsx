"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { personalInfo } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Send,
  Phone,
  MessageSquare,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon, LeetCodeIcon } from "@/components/Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("sending");

    // Simulate sending & trigger celebratory confetti
    setTimeout(() => {
      setStatus("sent");
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch (err) {
        // Confetti fallback safe
      }
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-sky-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
            Get In Touch
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Something
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I&apos;m open to software engineering internships, development
              opportunities, and interesting product-building collaborations.
            </p>

            {/* Quick Email Card */}
            <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {personalInfo.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedEmail && (
                <p className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Email address copied to clipboard!
                </p>
              )}
            </div>

            {/* Direct Connect Grid */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card border border-white/10 hover:border-sky-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <GitHubIcon className="w-4 h-4 text-slate-300 group-hover:text-white" />
                  <span className="text-xs font-medium text-slate-200">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card border border-white/10 hover:border-sky-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedInIcon className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-medium text-slate-200">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card border border-white/10 hover:border-amber-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-medium text-slate-200">LeetCode</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-400 transition-colors" />
              </a>

              <div className="p-4 rounded-xl glass-card border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-slate-200">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have an internship opportunity, project idea, or question? Send
                me a direct message.
              </p>

              {status === "sent" ? (
                <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Message Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Bhavish will review your message
                    and respond promptly. You can also connect directly on
                    LinkedIn.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Sarah Jenkins"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-sky-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="sarah@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-sky-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="Software Engineering Internship / Project Discussion"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-sky-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Hi Bhavish, I reviewed your Boat Warranty and GenAI RAG projects..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 focus:border-sky-400 focus:outline-none text-sm text-white placeholder:text-slate-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all hover:scale-[1.01] disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
