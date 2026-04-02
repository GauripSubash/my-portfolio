"use client";

import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { useEffect, useState } from "react";

const TAGLINES = [
  "Building software that makes a difference.",
  "Computer Science enthusiast & problem solver.",
  "CS student · NC State University.",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % TAGLINES.length);
        setFading(false);
      }, 350);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fafafa 0%, #eef2ff 50%, #f5f3ff 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #a5b4fc 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #c4b5fd 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, #818cf8 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-indigo-100 shadow-sm text-indigo-600 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Open to internship opportunities · May 2028
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-5">
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="text-indigo-500">Gaurinath Subash</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 right-0 h-[5px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #a5b4fc, #c4b5fd)",
                }}
              />
            </span>
          </h1>

          {/* Animated tagline */}
          <p
            className="text-xl sm:text-2xl font-semibold text-slate-700 mb-5 min-h-[2rem] transition-opacity duration-300"
            style={{ opacity: fading ? 0 : 1 }}
          >
            {TAGLINES[idx]}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
            Computer Science student at NC&nbsp;State, with hands-on experience
            in data science, IT support, and collaborative software projects.
            Extremely passionate about building tools that solve real problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition-all duration-200 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:scale-95"
            >
              View My Work
              <ArrowRight
                size={15}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-sm"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="https://github.com/GauripSubash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-slate-800 transition-colors text-sm font-medium"
            >
              <GithubIcon size={17} />
              GitHub
            </a>
            <span className="w-px h-4 bg-slate-200" aria-hidden />
            <a
              href="https://linkedin.com/in/gaurinathsubash"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-indigo-500 transition-colors text-sm font-medium"
            >
              <LinkedinIcon size={17} />
              LinkedIn
            </a>
            <span className="w-px h-4 bg-slate-200" aria-hidden />
            <a
              href="mailto:gpsubash@ncsu.edu"
              className="flex items-center gap-2 text-slate-400 hover:text-indigo-500 transition-colors text-sm font-medium"
            >
              <Mail size={17} />
              gpsubash@ncsu.edu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-xs font-medium">
        <span>scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
