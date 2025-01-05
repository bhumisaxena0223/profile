import React from "react";

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Software Consultant (T-systems ICT Pvt Ltd, 04/2023 - Present)",
      description: "Developed reusable UI components for Data-Intelligence Hub applications, ensuring company-wide consistency. Collaborated with designers and engineers for a cohesive user experience. Tech Stack: Vue.js, Nuxt.js, Tailwind CSS.",
      icon: "💻", // Dynamic icon for this experience
    },
    {
      title: "Senior Software Developer (Juno/NuoFox Pvt Ltd, 03/2022 - 01/2023)",
      description: "Worked closely with designers to implement visual designs across all components and pages. Developed responsive layouts, animations, and REST API integration. Tech Stack: Vue.js, Nuxt.js.",
      icon: "⚙️", // Dynamic icon for this experience
    },
    {
      title: "Front-End Engineer (Capital Numbers Infotech Pvt Ltd, 12/2020 - 03/2022)",
      description: "Handled complete front-end projects, including website testing and debugging. Focused on compatibility and accessibility.",
      icon: "🖥️", // Dynamic icon for this experience
    },
    {
      title: "Front-End Developer (Lutarin Technologies Pvt Ltd, 06/2019 - 09/2020)",
      description: "Developed mobile apps using Ionic 3 and Angular 6, with features like authentication and navigation.",
      icon: "📱", // Dynamic icon for this experience
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          My Work Experience
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Dynamic Icon */}
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-3xl text-white">{exp.icon}</span>
              </div>
              {/* Content */}
              <div className="ml-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {exp.title}
                </h3>
                <p className="text-gray-600 text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
