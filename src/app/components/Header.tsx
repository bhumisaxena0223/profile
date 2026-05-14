"use client";
import React, { useState, useEffect } from "react";

const navLinks = [
  { href: "#work-experience", label: "Experience" },
  { href: "#skills",          label: "Skills" },
  { href: "#projects",        label: "Projects" },
  { href: "#about",           label: "About" },
  { href: "#contact",         label: "Contact" },
];

const Header: React.FC = () => {
  const [scrolled,       setScrolled]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection,  setActiveSection]  = useState("");
  const [menuOpen,       setMenuOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY    = window.scrollY;
      const docHeight  = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 60);
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      const sections = ["hero", "work-experience", "skills", "projects", "about", "contact"];
      const offset   = scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-xl shadow-black/30 py-3" : "bg-transparent py-5"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-600 via-violet-500 to-cyan-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold gradient-text tracking-tight">
          BS.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive  = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium relative group transition-colors duration-200 ${
                  isActive ? "text-purple-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold rounded-full hover:from-purple-500 hover:to-violet-500 transition-all duration-200 glow-purple"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass mx-4 mt-2 rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 px-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-2.5 px-3 text-center bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-lg text-sm font-semibold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
