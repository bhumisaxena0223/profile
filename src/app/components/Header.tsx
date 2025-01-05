import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-600">
        <span>BS.</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#projects" className="text-gray-700 hover:text-purple-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-purple-600">
              About
            </a>
          </li>
          <li>
            <a href="#work-experience" className="text-gray-700 hover:text-purple-600">
            Work Experience
            </a>
          </li>
        </ul>
      </nav>


      {/* Theme Toggle */}
      {/* <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
        🌞
      </button> */}
    </header>
  );
};

export default Header;
