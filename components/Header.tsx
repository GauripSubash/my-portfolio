"use client";

import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm shadow-slate-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* ── Logo ─────────────────────────── */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0">
          <span className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white text-xs font-bold tracking-tight select-none">
            GS
          </span>
          <span className="hidden sm:block font-semibold text-slate-800 text-sm">
            Gaurinath Subash
          </span>
        </a>

        {/* ── Desktop nav ──────────────────── */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-slate-500 hover:text-indigo-500 transition-colors duration-150"
            >
              {label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 active:scale-95 transition-all shadow-sm shadow-indigo-200"
          >
            <Download size={13} strokeWidth={2.5} />
            Resume
          </a>
        </div>

        {/* ── Mobile hamburger ─────────────── */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* ── Mobile dropdown ──────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-slate-700 hover:text-indigo-500 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 w-fit px-4 py-2 rounded-lg bg-indigo-500 text-white text-sm font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            <Download size={13} />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
