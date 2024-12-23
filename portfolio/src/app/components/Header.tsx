import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-sm">
      {/* Logo */}
      <div className="text-2xl font-bold text-purple-600">
        <span>ns.</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/projects">
              <span className="text-gray-700 hover:text-purple-600">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-gray-700 hover:text-purple-600">About</span>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <span className="text-gray-700 hover:text-purple-600">Resume</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Theme Toggle */}
      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
        🌞
      </button>
    </header>
  );
};

export default Header;
