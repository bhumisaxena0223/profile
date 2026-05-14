import React from "react";

const stats = [
  { value: "7+",   label: "Years Experience" },
  { value: "15+",  label: "Projects Delivered" },
  { value: "40%",  label: "Avg Perf Gain" },
  { value: "50%",  label: "Release Overhead Cut" },
];

const About = () => (
  <section className="py-20 bg-[#0a0a0f] relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">About me</span>
        <h2 className="text-4xl font-bold text-white mt-2">Who Am I?</h2>
        <div className="section-line" />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-5xl mx-auto">
        {/* Image */}
        <div className="lg:w-2/5 relative flex justify-center">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-400 blur-3xl opacity-25 scale-105" />
          <div className="relative p-[3px] rounded-3xl bg-gradient-to-br from-purple-600 via-violet-500 to-cyan-400 max-w-xs w-full">
            <div className="rounded-3xl overflow-hidden bg-[#0a0a0f]">
              <img src="/about-pic.jpg" alt="Bhumi Saxena" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-2 glass px-5 py-3 rounded-xl shadow-xl">
            <div className="text-2xl font-bold gradient-text leading-tight">7+</div>
            <div className="text-gray-400 text-xs">years building</div>
          </div>
        </div>

        {/* Text */}
        <div className="lg:w-3/5">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-snug">
            Building{" "}
            <span className="gradient-text">high-scale, performance-critical</span>
            {" "}web products
          </h3>
          <p className="text-gray-400 text-base leading-relaxed mb-5">
            Senior Frontend Engineer with 7 years of deep expertise in React 18, Next.js (SSR/SSG),
            TypeScript, and micro-frontend architecture. I have a proven track record of owning
            frontend systems end-to-end — from architecture decisions to production deployments
            serving millions of users.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-5">
            I&rsquo;ve led frontend teams, established design systems adopted across 4+ teams,
            and driven measurable performance gains — including 40% faster page loads and
            50% reduction in release overhead — in fast-moving product environments.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-10">
            Currently seeking a high-ownership, high-impact role in fintech or consumer tech
            where I can drive both technical and product outcomes.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass glass-hover rounded-xl p-4 text-center transition-all duration-200">
                <div className="text-2xl font-bold gradient-text">{s.value}</div>
                <div className="text-gray-500 text-xs mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
