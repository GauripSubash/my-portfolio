import ScrollReveal from "./ScrollReveal";

interface SkillCategory {
  name: string;
  skills: string[];
  tagClass: string;
  headingClass: string;
  dotClass: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Coursework",
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Software Engineering",
      "Web Development",
    ],
    tagClass:
      "bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100",
    headingClass: "text-indigo-600",
    dotClass: "bg-indigo-400",
  },
  {
    name: "Programming Languages",
    skills: [
      "Java",
      "C#",
      "C",
      "C++",
      "TypeScript",
      "Razor",
      "HTML",
      "JavaScript",
      "Python",
      "R",
    ],
    tagClass:
      "bg-violet-50 text-violet-700 border border-violet-200 hover:bg-violet-100",
    headingClass: "text-violet-600",
    dotClass: "bg-violet-400",
  },
  {
    name: "Frameworks & Databases",
    skills: [
      ".NET",
      "AngularJS",
      "React (Next.js)",
      "Express",
      "RabbitMQ",
      "Databricks",
      "PostgreSQL",
      "Spring Boot",
    ],
    tagClass:
      "bg-sky-50 text-sky-700 border border-sky-200 hover:bg-sky-100",
    headingClass: "text-sky-600",
    dotClass: "bg-sky-400",
  },
  {
    name: "Developer Tools",
    skills: [
      "GitLab",
      "Docker",
      "Jira",
      "New Relic",
      "VS Code",
      "Visual Studio",
      "Eclipse",
    ],
    tagClass:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100",
    headingClass: "text-emerald-600",
    dotClass: "bg-emerald-400",
  },
  {
    name: "IBM & AI Services",
    skills: [
      "IBM Bob",
      "watsonx.ai",
      "IBM Cloudant",
      "IBM Speech-to-Text",
      "Web Audio API",
    ],
    tagClass:
      "bg-amber-50 text-amber-700 border border-amber-200 hover:bg-amber-100",
    headingClass: "text-amber-600",
    dotClass: "bg-amber-400",
  },
  {
    name: "Data & Machine Learning",
    skills: [
      "SQL",
      "Data Analysis",
      "Data Visualization",
      "Logistic Regression",
      "Naive Bayes",
      "Text Mining",
    ],
    tagClass:
      "bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100",
    headingClass: "text-rose-500",
    dotClass: "bg-rose-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section heading */}
        <ScrollReveal>
          <div className="text-center mb-5">
            <span className="inline-block text-indigo-500 font-semibold text-xs uppercase tracking-[0.15em] mb-2">
              Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Skills &amp; Technologies
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="text-center text-slate-500 text-[15px] max-w-lg mx-auto mb-14">
            A snapshot of languages, tools, and concepts I&apos;ve applied across
            coursework, internships, and personal projects.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <ScrollReveal key={cat.name} delay={i * 70}>
              <div className="h-full p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200">
                {/* Category title */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`w-2 h-2 rounded-full ${cat.dotClass}`}
                    aria-hidden
                  />
                  <h3
                    className={`text-xs font-bold uppercase tracking-widest ${cat.headingClass}`}
                  >
                    {cat.name}
                  </h3>
                </div>

                {/* Pill tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-default ${cat.tagClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
