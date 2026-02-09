import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [dark, setDark] = useState(() => {
    // Initialize based on saved preference or system preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Update <html> class and save preference
  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Name / Hero */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        Matthew Tully
      </h1>

      {/* Tagline */}
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 text-center max-w-xl">
        AI/ML enthusiast and software engineer building projects in machine learning, systems, and game engines. Exploring full-stack development and cutting-edge research.
      </p>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Projects
        </Link>

        <a
          href="https://github.com/sHu11Y"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}