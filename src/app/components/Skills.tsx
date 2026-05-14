"use client";
import React from "react";

const row1 = [
  { name: "React 18",        icon: "⚛️" },
  { name: "Next.js",         icon: "▲" },
  { name: "TypeScript",      icon: "🔷" },
  { name: "JavaScript",      icon: "💛" },
  { name: "Vue.js",          icon: "💚" },
  { name: "Nuxt.js",         icon: "🚀" },
  { name: "React Native",    icon: "📱" },
  { name: "Angular",         icon: "🔴" },
  { name: "Node.js",         icon: "🟢" },
  { name: "GraphQL",         icon: "🟣" },
  { name: "REST APIs",       icon: "🔗" },
  { name: "WebSockets",      icon: "🔌" },
  { name: "Redux",           icon: "🔁" },
  { name: "Zustand",         icon: "🐻" },
  { name: "React Query",     icon: "🔄" },
  { name: "Pinia",           icon: "🍍" },
];

const row2 = [
  { name: "Module Federation",       icon: "🧩" },
  { name: "Micro-Frontends",         icon: "🏗️" },
  { name: "Tailwind CSS",            icon: "🌊" },
  { name: "Material UI",             icon: "🎨" },
  { name: "Vite",                    icon: "⚡" },
  { name: "Webpack",                 icon: "📦" },
  { name: "Jest",                    icon: "🧪" },
  { name: "React Testing Library",   icon: "🔬" },
  { name: "GitHub Actions",          icon: "⚙️" },
  { name: "Git",                     icon: "🔧" },
  { name: "Docker",                  icon: "🐳" },
  { name: "Figma",                   icon: "🖌️" },
  { name: "SSR / SSG",               icon: "🌐" },
  { name: "Core Web Vitals",         icon: "📊" },
  { name: "WCAG 2.1",               icon: "♿" },
  { name: "Mocha",                   icon: "☕" },
];

const Tag = ({ item }: { item: { name: string; icon: string } }) => (
  <div className="flex items-center gap-2.5 px-5 py-2.5 glass glass-hover rounded-full mx-2 text-gray-300 whitespace-nowrap cursor-default group transition-all duration-200">
    <span className="text-lg group-hover:scale-125 transition-transform duration-200">{item.icon}</span>
    <span className="text-sm font-medium">{item.name}</span>
  </div>
);

const Skills: React.FC = () => {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="py-20 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="container mx-auto px-4 mb-14 relative">
        <div className="text-center">
          <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">
            What I work with
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Skills &amp; Tools</h2>
          <div className="section-line" />
        </div>
      </div>

      <div className="marquee-wrap mb-4">
        <div className="marquee-track">
          {doubled1.map((s, i) => <Tag key={i} item={s} />)}
        </div>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track-rev">
          {doubled2.map((t, i) => <Tag key={i} item={t} />)}
        </div>
      </div>

      <p className="text-center text-gray-600 text-xs mt-8 relative">
        Hover to pause
      </p>
    </section>
  );
};

export default Skills;
