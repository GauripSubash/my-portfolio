import ScrollReveal from "./ScrollReveal";
import { GraduationCap, MapPin, Cpu, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  {
    Icon: GraduationCap,
    label: "Education",
    value: "B.S. Computer Science · NC State",
    sub: "GPA 3.7 · Expected May 2028",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Raleigh, North Carolina",
    sub: "Open to remote opportunities",
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    Icon: Cpu,
    label: "Focus Areas",
    value: "Software Engineering",
    sub: "& Data Science",
    color: "text-sky-500",
    bg: "bg-sky-50",
    border: "border-sky-100",
  },
  {
    Icon: Sparkles,
    label: "Experience",
    value: "Industry Internship",
    sub: "IT Support · Volunteer Leadership",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-indigo-500 font-semibold text-xs uppercase tracking-[0.15em] mb-2">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              A Little About Myself
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ── Text column ─────────────────────── */}
          <ScrollReveal direction="left">
            <div className="space-y-5 text-slate-600 text-[15px] leading-relaxed">
              <p>
                I&apos;m{" "}
                <strong className="text-slate-800 font-semibold">
                  Gaurinath Subash
                </strong>
                , a sophomore studying Computer Science at{" "}
                <strong className="text-slate-800 font-semibold">
                  NC State University
                </strong>{" "}
                with a 3.7 GPA. I&apos;m drawn to the intersection of software
                engineering and data science — building systems that are not only
                functional, but genuinely useful.
              </p>
              <p>
                My journey started with a virtual data science internship where
                I created 75+ tutorials teaching US Census data analysis to
                500+ beginner learners. That experience — making complex data
                accessible — ignited a passion that still drives me today.
              </p>
              <p>
                On campus, I serve as an IT Technician for NCSU&apos;s ClassTech
                program, resolving 15–25 technical issues per week and
                maintaining 99% uptime for 50+ classrooms. I thrive in
                environments that require both technical precision and clear
                communication.
              </p>
              <p>
                For five years I also volunteered as a lead at a Kumon learning
                center, managing a team of 6 and helping 40 students grow in
                math and reading — an experience that shaped how I approach
                mentorship and collaboration.
              </p>
              <p>
                I&apos;m actively seeking{" "}
                <span className="text-indigo-500 font-semibold">
                  internship opportunities
                </span>{" "}
                in software engineering or data science where I can contribute,
                learn fast, and make an impact.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Stats grid ──────────────────────── */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {HIGHLIGHTS.map(({ Icon, label, value, sub, color, bg, border }) => (
                <div
                  key={label}
                  className={`p-5 rounded-2xl ${bg} border ${border} hover:shadow-sm transition-shadow duration-200`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center mb-3 shadow-sm`}
                  >
                    <Icon size={16} className={color} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-bold text-slate-800 leading-snug">
                    {value}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
