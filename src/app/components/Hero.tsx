"use client";
import React, { useEffect} from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    
    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default link behavior
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/bhumisaxena0223/30min',
      });
    } else {
      console.error('Calendly script not loaded!');
    }
  };
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto  px-3 md:px-12 flex flex-col md:flex-row items-center text-center md:text-left">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-4">
            Hi, I’m <span className="text-purple-500">Bhumi Saxena.</span>
          </h1>
          <h2 className="text-2xl text-purple-500 font-medium mb-6">
            Senior Front-end Developer
          </h2>
          <p className="text-gray-400 mb-6">
            I build responsive web apps with Vue.js and React, backed by 5+
            years of user-focused development experience.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
              aria-label="Get in Touch"
              onClick={handleClick}
            >
              Get in Touch
            </button>
            {/* <button
              className="px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-400 rounded-lg hover:border-gray-400 hover:text-white transition"
              aria-label="View Resume"
            >
              Resume
            </button> */}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-10 md:mt-0 relative">
          <div className="relative w-72 h-70 mx-auto">
            {/* Purple Background */}
            <div className="absolute left-2 inset-0 bg-purple-500 rounded-lg -rotate-0 transform origin-center"></div>
            {/* Profile Image */}
            <div className="relative z-10">
              <Image
                src="/profile-picture1.png" // Replace with actual image path
                alt="Bhumi Saxena"
                className="rounded-lg"
                width={288}
                height={258}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
