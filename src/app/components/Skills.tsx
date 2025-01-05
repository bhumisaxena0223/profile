import React from "react";

const Skills: React.FC = () => {
  const skills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript", icon: "💻" },
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "🖥️" },
    { name: "Tailwind CSS", icon: "🎋" },
  ];

  const tools = [
    { name: "GIT", icon: "🔧" },
    { name: "JIRA", icon: "📋" },
    { name: "Figma", icon: "🎨" },
    { name: "Zeplin", icon: "🗂️" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Core Skills</h2>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-6 text-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-white shadow rounded hover:shadow-lg"
            >
              <span className="text-3xl">{skill.icon}</span>
              <p className="text-lg mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Tools & Frameworks</h2>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6 text-center">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="p-4 bg-white shadow rounded hover:shadow-lg"
              >
                <span className="text-3xl">{tool.icon}</span>
                <p className="text-lg mt-2">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
