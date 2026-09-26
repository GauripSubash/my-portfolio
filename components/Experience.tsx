import { Briefcase, BarChart2, Code2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ExperienceItem {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  dotColor: string;
  badgeBg: string;
  badgeText: string;
  cardBorder: string;
  cardHover: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    Icon: Briefcase,
    role: "IT Student Technician",
    company: "NCSU ClassTech",
    location: "Raleigh, NC",
    period: "Aug 2025 – Present",
    bullets: [
      "Diagnose multi-layered hardware and software failures across 50+ classrooms, maintaining 99% uptime.",
      "Execute rapid incident analysis on 15–25 complex technical issues weekly to eliminate system downtime.",
      "Deliver cross-functional technical support to 100+ faculty and staff members, ensuring timely communication and resolution tracking.",
    ],
    dotColor: "bg-indigo-500",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-600",
    cardBorder: "border-indigo-100",
    cardHover: "hover:border-indigo-200",
  },
  {
    Icon: Code2,
    role: "Software Engineering Intern",
    company: "Direct Supply",
    location: "Durham, NC",
    period: "May 2026 – Aug 2026",
    bullets: [
      "Engineered 10+ event-driven microservices using C# and RabbitMQ to automate customer notifications.",
      "Designed and implemented 5+ front-end UI features using AngularJS and ASP.NET Razor for external service providers.",
      "Spearheaded an Agile team of engineers to ship 20–25 production releases biweekly using PostgreSQL, SQL Server, and GitLab CI/CD pipelines.",
    ],
    dotColor: "bg-sky-500",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-600",
    cardBorder: "border-sky-100",
    cardHover: "hover:border-sky-200",
  },
  {
    Icon: BarChart2,
    role: "Data Science Intern",
    company: "David Kane's Data Lab",
    location: "Virtual",
    period: "Jul 2023 – Jan 2024",
    bullets: [
      "Created 75+ open-source data science tutorials using US Census Data and R, enhancing statistical analysis comprehension for 500+ learners.",
      "Engineered 40+ interactive visualizations and hands-on exercises that enabled learners to extract real-world insights from complex datasets.",
      "Extracted and processed 10+ GB of raw census data using complex SQL queries, aggregations, and R cleaning workflows, improving accuracy by 25%.",
    ],
    dotColor: "bg-violet-500",
    badgeBg: "bg-violet-50",
    badgeText: "text-violet-600",
    cardBorder: "border-violet-100",
    cardHover: "hover:border-violet-200",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-indigo-500 font-semibold text-xs uppercase tracking-[0.15em] mb-2">
              Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Experience
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          <div
            aria-hidden
            className="absolute left-[11px] top-4 bottom-4 w-px bg-gradient-to-b from-indigo-200 via-violet-200 to-rose-200 hidden sm:block"
          />

          <ol className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <ScrollReveal key={exp.role} delay={i * 120}>
                <li className="relative sm:pl-14">
                  {/* Timeline dot */}
                  <div
                    aria-hidden
                    className={`absolute left-0 top-6 w-[22px] h-[22px] rounded-full ${exp.dotColor} border-4 border-slate-50 shadow-md hidden sm:flex items-center justify-center -translate-y-1/2`}
                  />

                  {/* Card */}
                  <div
                    className={`bg-white rounded-2xl p-6 border ${exp.cardBorder} ${exp.cardHover} shadow-sm hover:shadow-md transition-all duration-200`}
                  >
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                          <exp.Icon size={16} className="text-slate-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-base leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-slate-500 text-sm mt-0.5">
                            {exp.company} · {exp.location}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${exp.badgeBg} ${exp.badgeText}`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm text-slate-600 leading-relaxed"
                        >
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
