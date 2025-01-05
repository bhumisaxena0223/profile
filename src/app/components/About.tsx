import React from "react";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-16">
      {/* Text Section */}
      <div className="lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
        <h2 className="text-xl lg:text-3xl font-semibold mb-4">
          Hi there!!!
        </h2>
        <p className="text-lg mb-6">
        I craft responsive, visually engaging web applications using modern
          frameworks like Vue.js and React. With over five years of experience,
          I deliver optimized, user-focused solutions that elevate functionality
          and design.
        </p>
        <p className="text-lg mb-6">
          I excel in collaborative environments, working with cross-functional
          teams to build seamless applications. My expertise also includes
          integrating third-party services like Stripe and SendGrid for
          full-featured, scalable solutions.
        </p>
        <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-md font-medium">
          READ MORE
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/3 flex justify-center">
        <img
          src="/about-pic.jpg"
          alt="About"
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>
    </div>
  );
};

export default About;
