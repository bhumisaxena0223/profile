import React from "react";

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      title: "Frontend Engineer Intern",
      description: "Assisted in the development of a web-based platform using React.js.",
    },
    {
        title: "Frontend Engineer Intern",
        description: "Assisted in the development of a web-based platform using React.js.",
    },
    {
        title: "Frontend Engineer Intern",
        description: "Assisted in the development of a web-based platform using React.js.",
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
