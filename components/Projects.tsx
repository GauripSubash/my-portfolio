import { Code2, BarChart3 } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  period: string;
  type: string;
  description: string;
  tech: string[];
  highlights: string[];
  githubUrl: string;
  gradientFrom: string;
  gradientTo: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  tagBg: string;
  tagText: string;
  cardBorder: string;
  cardHover: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  iconColor: string;
}

const PROJECTS: Project[] = [
  {
    title: "Connect 4 Game",
    period: "Apr 2025 – May 2025",
    type: "Team Project",
    description:
      "A fully functional two-player Connect 4 game built with Java. Designed and implemented all core game logic including an 8×8 grid, win-condition detection, and player turn management using object-oriented principles. Collaborated with 3 teammates, conducted peer code reviews, and delivered the project in two weeks.",
    tech: ["Java", "OOP", "Git", "Eclipse"],
    highlights: ["300+ lines of code", "4-person team", "2-week sprint"],
    githubUrl: "https://github.com/GauripSubash",
    gradientFrom: "#eef2ff",
    gradientTo: "#f5f3ff",
    accentText: "text-indigo-600",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-100",
    tagBg: "bg-indigo-50",
    tagText: "text-indigo-600",
    cardBorder: "border-indigo-100",
    cardHover: "hover:border-indigo-200 hover:shadow-indigo-50",
    Icon: Code2,
    iconColor: "text-indigo-500",
  },
  {
    title: "Soccer Salaries",
    period: "Data Analysis Project",
    type: "Independent Project",
    description:
      "A data-driven exploration of Major League Soccer player compensation. Built an end-to-end analysis pipeline covering data cleaning, exploratory analysis, interactive visualizations by position and experience, and regression modeling to predict player salaries. Published as a multi-page Quarto website.",
    tech: ["R", "Quarto", "EDA", "Regression Modeling", "Data Visualization"],
    highlights: ["MLS 2007 dataset", "Position-based analysis", "Published web report"],
    githubUrl: "https://github.com/GauripSubash/soccer-salaries",
    gradientFrom: "#f5f3ff",
    gradientTo: "#faf5ff",
    accentText: "text-violet-600",
    accentBg: "bg-violet-50",
    accentBorder: "border-violet-100",
    tagBg: "bg-violet-50",
    tagText: "text-violet-600",
    cardBorder: "border-violet-100",
    cardHover: "hover:border-violet-200 hover:shadow-violet-50",
    Icon: BarChart3,
    iconColor: "text-violet-500",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-5">
            <span className="inline-block text-indigo-500 font-semibold text-xs uppercase tracking-[0.15em] mb-2">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Featured Projects
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="text-center text-slate-500 text-[15px] max-w-lg mx-auto mb-14">
            Projects built through coursework, research collaborations, and a
            genuine desire to apply what I&apos;m learning.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-7">
          {PROJECTS.map((proj, i) => (
            <ScrollReveal key={proj.title} delay={i * 120}>
              <article
                className={`group flex flex-col h-full bg-white rounded-2xl border ${proj.cardBorder} ${proj.cardHover} shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                {/* Card top gradient strip */}
                <div
                  className="h-2 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${proj.gradientFrom}, ${proj.gradientTo})`,
                  }}
                  aria-hidden
                />

                <div className="flex flex-col flex-1 p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={`p-2.5 rounded-xl ${proj.accentBg} border ${proj.accentBorder}`}
                    >
                      <proj.Icon size={22} className={proj.iconColor} />
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${proj.accentBg} ${proj.accentText}`}
                      >
                        {proj.type}
                      </span>
                      <span className="text-slate-400 text-xs">{proj.period}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">
                    {proj.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {proj.highlights.map((h) => (
                      <span
                        key={h}
                        className={`text-xs font-semibold ${proj.accentText}`}
                      >
                        ✦ {h}
                      </span>
                    ))}
                  </div>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${proj.tagBg} ${proj.tagText}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="pt-4 border-t border-slate-100">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium group/link"
                    >
                      <GithubIcon size={14} />
                      <span className="group-hover/link:underline underline-offset-2">
                        View on GitHub
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
