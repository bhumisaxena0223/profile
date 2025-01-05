import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Juno Finance",
      description: "Built features for fiat and cryptocurrency transactions with dynamic animations using Vue.js and Nuxt.js.",
      image: "/juno-finance.png", // Replace with actual image path
      technologies: ["⚙️", "💳"], // Replace with actual icons for technologies
      liveLink: "https://juno.finance/",
    },
    {
      title: "Crunchy Link Dashboard",
      description: "Created dashboards for SEO and digital marketing analytics, integrating drag-and-drop and multi-level authentication tools.",
      image: "/crunchylinks.png", // Replace with actual image path
      technologies: ["📊", "🔗"],
      liveLink: "https://crunchylinks.com/",
    },
    {
      title: "Humlife 360",
      description: "Developed a smart diabetes management platform using Vue.js, Tailwind, and Figma.",
      image: "/humlife-360.png", // Replace with actual image path
      technologies: ["💉", "🎨"],
      liveLink: "https://www.humlife360.com/",
    },
    {
      title: "Kovered (Healthcare App)",
      description: "Designed and developed features like booking, sign-up, and data visualization using Vue.js and Angular.",
      image: "/kovered.jpg", // Replace with actual image path
      technologies: ["📅", "📈"],
      liveLink: "#",
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              {/* Image Section */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                {/* Technologies */}
                <div className="flex items-center space-x-4 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-2xl bg-gray-700 p-2 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Live Site Link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm flex items-center"
                >
                  Check Live Site <span className="ml-2">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
