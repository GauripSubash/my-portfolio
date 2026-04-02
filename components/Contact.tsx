import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import ScrollReveal from "./ScrollReveal";

const CONTACT_LINKS = [
  {
    label: "Email",
    display: "gpsubash@ncsu.edu",
    href: "mailto:gpsubash@ncsu.edu",
    Icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    display: "github.com/GauripSubash",
    href: "https://github.com/GauripSubash",
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/gaurinathsubash",
    href: "https://linkedin.com/in/gaurinathsubash",
    Icon: LinkedinIcon,
    external: true,
  },
];

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="py-24"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e1b4b 60%, #1a1035 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Status badge */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Open to internship &amp; research opportunities
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={80}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 text-lg max-w-sm mx-auto mb-12">
            Whether it&apos;s a role, a project, or just a conversation — I&apos;d
            love to hear from you.
          </p>
        </ScrollReveal>

        {/* Contact cards */}
        <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            {CONTACT_LINKS.map(({ label, display, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/25 transition-all duration-200 text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={16} className="text-slate-300" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-white truncate">
                    {display}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="ml-auto text-slate-600 group-hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-all shrink-0"
                />
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Location */}
        <ScrollReveal delay={200}>
          <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10">
            <MapPin size={13} />
            <span>Raleigh, North Carolina · USA</span>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-slate-600 text-sm">
            © {year} Gaurinath Subash · Built with{" "}
            <span className="text-slate-500">Next.js</span> &amp;{" "}
            <span className="text-slate-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
