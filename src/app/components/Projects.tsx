"use client";
import React, { useRef } from "react";

type Project = {
  title:       string;
  tagline:     string;
  description: string;
  image:       string | null;
  tech:        string[];
  liveLink:    string | null;
  gradient:    string;
  bgGradient:  string;
};

const projects: Project[] = [
  {
    title:       "AlignTurtle",
    tagline:     "Fitness & Wellness Platform",
    description: "Led frontend architecture in React & React Native. Built a reusable component design system improving user engagement by 25%. Integrated third-party APIs for real-time workout tracking and progress dashboards.",
    image:       null,
    tech:        ["React.js", "React Native", "TypeScript", "Design System"],
    liveLink:    "https://alignturtle.com",
    gradient:    "from-purple-600 to-pink-600",
    bgGradient:  "from-purple-900/60 via-violet-900/40 to-pink-900/60",
  },
  {
    title:       "Crunchy Link",
    tagline:     "SEO Analytics Dashboard",
    description: "Real-time SEO analytics dashboard with drag-and-drop widgets, multi-level authentication, and live data visualisations — data-heavy, real-time UI built for digital marketing teams.",
    image:       "/crunchylinks.png",
    tech:        ["Vue.js", "REST APIs", "Drag & Drop", "Auth"],
    liveLink:    "https://crunchylinks.com",
    gradient:    "from-violet-600 to-blue-600",
    bgGradient:  "from-violet-900/60 via-blue-900/40 to-indigo-900/60",
  },
  {
    title:       "Mofesoft",
    tagline:     "Large-Scale Staffing Platform",
    description: "Architected and delivered frontend for a large-scale staffing platform using React.js, Strapi CMS, Node.js, and MongoDB — end-to-end feature ownership including CRM integrations and complex data flows.",
    image:       null,
    tech:        ["React.js", "Strapi CMS", "Node.js", "MongoDB"],
    liveLink:    null,
    gradient:    "from-cyan-600 to-teal-600",
    bgGradient:  "from-cyan-900/60 via-teal-900/40 to-emerald-900/60",
  },
  {
    title:       "Juno Finance",
    tagline:     "Fintech Trading Platform",
    description: "Built 8+ product features for fiat and cryptocurrency transactions with dynamic animations and polished UI. Improved rendering speed by ~35% through code splitting and Vite optimisation.",
    image:       "/juno-finance.png",
    tech:        ["Vue 3", "Nuxt.js", "TanStack Query", "TypeScript"],
    liveLink:    "https://juno.finance",
    gradient:    "from-blue-600 to-cyan-500",
    bgGradient:  "from-blue-900/60 via-cyan-900/40 to-sky-900/60",
  },
];

const GradientPlaceholder = ({ project }: { project: Project }) => (
  <div className={`w-full h-full bg-gradient-to-br ${project.bgGradient} flex flex-col items-center justify-center gap-3`}>
    <div className="text-5xl opacity-60">
      {project.tagline.includes("Fitness") ? "🏋️" :
       project.tagline.includes("Staffing") ? "👥" : "📊"}
    </div>
    <span className="text-white/50 text-sm font-medium">{project.tagline}</span>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width  - 0.5;
    const y = (e.clientY - top)  / height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.03,1.03,1.03)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="glass rounded-2xl overflow-hidden transition-transform duration-200 will-change-transform group"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Image / placeholder */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <GradientPlaceholder project={project} />
        )}
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40`} />

        {/* Live badge */}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 glass px-2.5 py-1 rounded-full text-white text-xs font-semibold hover:bg-white/20 transition-colors"
          >
            Live ↗
          </a>
        )}

        {/* Tagline chip */}
        <div className="absolute bottom-3 left-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.gradient} text-white opacity-90`}>
            {project.tagline}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10">
              {t}
            </span>
          ))}
        </div>

        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-purple-400 hover:text-white transition-colors group/link"
          >
            View Live Site
            <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
          </a>
        ) : (
          <span className="text-gray-600 text-xs italic">Private / NDA project</span>
        )}
      </div>
    </div>
  );
};

const Projects: React.FC = () => (
  <section className="py-20 bg-[#0d0d14] relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="blob blob-delay-1 absolute bottom-0 right-0 w-80 h-80 bg-purple-700 opacity-15" />
      <div className="blob blob-delay-2 absolute top-0 left-0 w-64 h-64 bg-cyan-700 opacity-10" />
    </div>

    <div className="container mx-auto px-4 relative">
      <div className="text-center mb-16">
        <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">Portfolio</span>
        <h2 className="text-4xl font-bold text-white mt-2">Featured Projects</h2>
        <div className="section-line" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
