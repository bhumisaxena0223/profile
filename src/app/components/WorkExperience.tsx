import React from "react";

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Consultant (T-systems ICT Pvt Ltd, 04/2023 - Present)",
      description: "Developed reusable UI components for Data-Intelligence Hub applications, ensuring company-wide consistency. Collaborated with designers and engineers for a cohesive user experience. Tech Stack: Vue.js, Nuxt.js, Tailwind CSS.",
    },
    {
        title: "Senior Software Developer (Juno/NuoFox Pvt Ltd, 03/2022 - 01/2023)",
        description: "Worked closely with designers to implement visual designs across all components and pages. Developed responsive layouts, animations, and REST API integration. Tech Stack: Vue.js, Nuxt.js.",
    },
    {
        title: "Front-End Engineer (Capital Numbers Infotech Pvt Ltd, 12/2020 - 03/2022)",
        description: "Handled complete front-end projects, including website testing and debugging. Focused on compatibility and accessibility.",
    },
    {
      title: "Front-End Developer (Lutarin Technologies Pvt Ltd, 06/2019 - 09/2020)",
      description: "Developed mobile apps using Ionic 3 and Angular 6, with features like authentication and navigation.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          My Work Experience
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 rounded shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
