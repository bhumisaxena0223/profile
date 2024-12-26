import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Hi, I’m <span className="text-purple-600">Bhumi Saxena.</span>
          </h1>
          <h2 className="text-2xl text-purple-600 font-medium mb-6">
            Senior Front-end Developer
          </h2>
          <p className="text-gray-600 mb-6">
            I build responsive web apps with Vue.js and React, backed by 5+
            years of user-focused development experience.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
              aria-label="Get in Touch"
            >
              Get in Touch
            </button>
            <button
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
              aria-label="View Resume"
            >
              Resume
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-10 md:mt-0">
          <div className="rounded-lg overflow-hidden border-4 border-purple-600">
            <Image
              src="/profile-picture.png"
              alt="Bhumi Saxena"
              className="w-full object-contain"
              width={100}
              height={100} // Added height for Image component
              priority // Ensures the image is loaded quickly
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
