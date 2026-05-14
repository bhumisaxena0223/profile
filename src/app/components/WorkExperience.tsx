"use client";
import React, { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company:     "T-Systems ICT India Pvt. Ltd.",
    role:        "Senior Frontend Engineer",
    period:      "Apr 2023 – Present",
    bullets: [
      "Architected a high-scale data platform with React 18 + Next.js using Webpack Module Federation — independently deployable micro-frontend modules reduced inter-team release coupling by ~50% across 5+ product modules.",
      "Built and owned a reusable component design system (Material UI) adopted by 4 teams, reducing duplicate component work by ~30% and enforcing WCAG 2.1 accessibility compliance platform-wide.",
      "Re-architected state & data-fetching with Redux, Context API, and React Query — eliminated redundant API calls, cutting average page load time by ~40% and improving Core Web Vitals significantly.",
      "Led a frontend team of 3–4 engineers: weekly code reviews, a11y standards, mentoring on React 18 & micro-frontend patterns; maintained on-time releases across 3 major product cycles.",
    ],
    tech:    ["React 18", "Next.js", "TypeScript", "Module Federation", "Material UI", "GraphQL", "React Query", "Jest", "GitHub Actions"],
    accent:  "from-purple-600 to-violet-500",
    dot:     "bg-purple-500",
  },
  {
    company:     "Juno (NuoFox Pvt. Ltd.)",
    role:        "Senior Frontend Developer",
    period:      "Mar 2022 – Jan 2023",
    bullets: [
      "Delivered full frontend scope for 8+ product features in a fintech startup — responsive, accessible UIs with Vue 3, Nuxt.js (SSR), and TanStack Query.",
      "Improved frontend rendering speed by ~35% through code splitting, lazy loading, and Vite build optimisation, directly improving user session metrics.",
      "Promoted to Senior Frontend Developer within 3 months for consistent delivery and technical ownership across sprint planning and design feedback loops.",
    ],
    tech:    ["Vue 3", "Nuxt.js (SSR/SSG)", "TanStack Query", "Tailwind CSS", "Vite", "TypeScript"],
    accent:  "from-violet-600 to-purple-500",
    dot:     "bg-violet-500",
  },
  {
    company:     "Capital Numbers Infotech Pvt. Ltd.",
    role:        "Frontend Engineer",
    period:      "Dec 2020 – Mar 2022",
    bullets: [
      "Delivered 6+ client projects end-to-end — built, tested, and shipped production-ready features; reduced QA-reported bugs by ~25% through proactive cross-browser testing.",
      "Integrated REST APIs and managed frontend data flows across multiple projects; contributed open-source PRs for UI component fixes accepted on public GitHub repos.",
    ],
    tech:    ["React.js", "Vue 3", "TypeScript", "Node.js", "Jest", "Mocha", "Tailwind CSS"],
    accent:  "from-cyan-600 to-blue-600",
    dot:     "bg-cyan-500",
  },
  {
    company:     "Lutarin Technologies Pvt. Ltd.",
    role:        "Frontend Developer",
    period:      "Jun 2019 – Sep 2020",
    bullets: [
      "Built mobile app features in Ionic & Angular — authentication flows, navigation, and accessible responsive UI components. Converted wireframes into reusable component structures that reduced onboarding time for new features.",
    ],
    tech:    ["Ionic", "Angular", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    accent:  "from-blue-600 to-indigo-600",
    dot:     "bg-blue-500",
  },
];

const WorkExperience: React.FC = () => {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible((v) => new Set([...v, i])); },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="py-20 bg-[#0a0a0f] relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">Career path</span>
          <h2 className="text-4xl font-bold text-white mt-2">Work Experience</h2>
          <div className="section-line" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line transform md:-translate-x-1/2" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            const shown  = visible.has(i);

            return (
              <div
                key={i}
                ref={(el) => { refs.current[i] = el; }}
                className={`relative flex mb-12 transition-all duration-700 ${
                  shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Dot */}
                <div className={`absolute left-6 md:left-1/2 top-6 w-3.5 h-3.5 rounded-full ${exp.dot} ring-4 ring-[#0a0a0f] transform md:-translate-x-1/2 z-10`} />

                {isLeft && <div className="hidden md:block md:w-1/2" />}

                <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? "md:pl-8" : "md:pr-8"}`}>
                  <div className="glass glass-hover rounded-2xl p-6 group transition-all duration-300">
                    {/* Period badge */}
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${exp.accent} text-white mb-3`}>
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-0.5">{exp.role}</h3>
                    <p className="text-purple-400 text-sm font-medium mb-4">{exp.company}</p>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-2 text-gray-400 text-xs leading-relaxed">
                          <span className="text-purple-500 mt-0.5 shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {!isLeft && <div className="hidden md:block md:w-1/2" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
