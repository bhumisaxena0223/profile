import React from "react";

const Footer: React.FC = () => (
  <footer className="py-8 bg-[#0a0a0f] border-t border-white/5">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
      <span className="text-2xl font-bold gradient-text">BS.</span>
      <p className="text-gray-500">
        © {new Date().getFullYear()} Designed &amp; coded by{" "}
        <span className="text-purple-400 font-medium">Bhumi Saxena</span>
      </p>
      <p className="text-gray-700 text-xs">Built with Next.js &amp; Tailwind CSS</p>
    </div>
  </footer>
);

export default Footer;
