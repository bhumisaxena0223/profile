import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Let's Connect</h2>
        <p className="text-gray-600 mb-12">
          Shoot me an email to chat about my work or just to say hey! 😊
        </p>
        <div className="space-y-6">
          <p className="text-lg">
            <span className="font-bold">Bhumi Saxena</span> <br />
            Senior Software Developer
          </p>
          <p className="text-lg">
            Bengaluru, India <br />
            📧 <a href="mailto:bhumisaxena0223@gmail.com" className="text-purple-600 hover:underline">
              bhumisaxena0223@gmail.com
            </a> <br />
            📱 <a href="tel:+919783302312" className="text-purple-600 hover:underline">
              +91 97833 02312
            </a>
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/in/bhumi-saxena-005ba9152"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/bhumisaxena0223"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
