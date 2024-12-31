import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Juno Finance",
      description: "Built features for fiat and cryptocurrency transactions with dynamic animations using Vue.js and Nuxt.js.",
    },
    {
      title: "Crunchy Link Dashboard",
      description: "Created dashboards for SEO and digital marketing analytics, integrating drag-and-drop and multi-level authentication tools.",
    },
    {
      title: "Humlife 360",
      description: "Developed a smart diabetes management platform using Vue.js, Tailwind, and Figma.",
    },
    {
      title: "Kovered (Healthcare App)",
      description: "Designed and developed features like booking, sign-up, and data visualization using Vue.js and Angular.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
