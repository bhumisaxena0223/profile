"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ROLES = [
  "Senior Frontend Engineer",
  "React & Next.js Expert",
  "Micro-Frontend Architect",
  "Frontend Lead",
];

const Hero: React.FC = () => {
  const [roleIdx,    setRoleIdx]    = useState(0);
  const [displayed,  setDisplayed]  = useState("");
  const [deleting,   setDeleting]   = useState(false);
  const [charIdx,    setCharIdx]    = useState(0);

  /* Typewriter */
  useEffect(() => {
    const current = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => setCharIdx((c) => c + 1), 75);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx((c) => c - 1), 38);
    } else {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % ROLES.length);
    }

    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  /* Calendly */
  useEffect(() => {
    const script = document.createElement("script");
    script.src   = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  const openCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    window.Calendly?.initPopupWidget({ url: "https://calendly.com/bhumisaxena0223/30min" });
  };

  return (
    <section className="relative min-h-screen bg-[#0a0a0f] overflow-hidden flex items-center">
      {/* Animated blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob blob-delay-0 absolute top-1/4 left-1/5  w-[420px] h-[420px] bg-purple-700" />
        <div className="blob blob-delay-1 absolute bottom-1/4 right-1/4 w-[340px] h-[340px] bg-violet-600" />
        <div className="blob blob-delay-2 absolute top-1/2 right-1/3  w-[280px] h-[280px] bg-cyan-600" />
      </div>

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-12 pt-28 pb-20">
        {/* ── Left: text ── */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-purple-300 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Hi, I&rsquo;m{" "}
            <span className="gradient-text">Bhumi Saxena</span>
          </h1>

          {/* Typewriter */}
          <div className="h-12 flex items-center justify-center md:justify-start mb-6">
            <h2 className="text-xl md:text-2xl text-purple-300 font-medium">
              {displayed}
              <span className="inline-block w-0.5 h-5 bg-purple-400 ml-0.5 animate-pulse align-middle" />
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            7 years building high-scale, performance-critical web products. Deep
            expertise in React 18, Next.js, TypeScript &amp; micro-frontend architecture
            — with a proven track record of 40% faster page loads and shipping at scale.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={openCalendly}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-semibold hover:from-purple-500 hover:to-violet-500 transition-all duration-300 glow-purple"
            >
              Schedule a Call
            </button>
            <a
              href="#projects"
              className="px-8 py-3 glass glass-hover text-white rounded-full font-semibold transition-all duration-300"
            >
              View My Work →
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center md:justify-start">
            {[
              { val: "7+",  label: "Years Exp" },
              { val: "15+", label: "Projects" },
              { val: "4",   label: "Companies" },
            ].map((s, i, arr) => (
              <React.Fragment key={s.label}>
                <div>
                  <div className="text-3xl font-bold gradient-text">{s.val}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
                {i < arr.length - 1 && <div className="w-px bg-gray-800" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Right: image ── */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-400 blur-2xl opacity-30 scale-105" />

            {/* Floating image with gradient border */}
            <div className="relative animate-float">
              <div className="p-[3px] rounded-3xl bg-gradient-to-br from-purple-600 via-violet-500 to-cyan-400">
                <div className="rounded-3xl overflow-hidden w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-[#0a0a0f]">
                  <Image
                    src="/profile-picture1.png"
                    alt="Bhumi Saxena"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-5 -right-5 glass px-4 py-2 rounded-xl text-sm font-semibold text-white whitespace-nowrap">
              ⚡ React &amp; Next.js
            </div>
            <div className="absolute -top-5 -left-5 glass px-4 py-2 rounded-xl text-sm font-semibold text-white whitespace-nowrap">
              🎨 5+ Years
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600 text-xs animate-bounce">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-purple-600 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
