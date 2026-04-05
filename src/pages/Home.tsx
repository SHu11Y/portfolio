import { Link } from "react-router-dom";

type HomeProps = {
  dark: boolean;
  onToggleDark: () => void;
};

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "C++", "TypeScript", "JavaScript"],
  },
  {
    category: "ML / AI",
    skills: ["PyTorch", "Neural Networks", "Deep Learning", "Machine Learning", "DeepChem"],
  },
  {
    category: "Web",
    skills: ["React", "Tailwind CSS", "HTML & CSS", "Vite"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Node.js", "Linux"],
  },
];

export default function Home({ dark, onToggleDark }: HomeProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Matthew Tully
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 text-center max-w-xl">
          AI/ML enthusiast and software engineer building projects in machine learning, systems, and game engines.
        </p>
        <button
          onClick={onToggleDark}
          className="mb-6 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-900 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Toggle {dark ? "Light" : "Dark"} Mode
        </button>
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
        {/* Scroll hint */}
        <div className="absolute bottom-8 flex flex-col items-center text-gray-400 dark:text-gray-500 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About</h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-4">
          I'm a software engineer with a strong interest in machine learning, systems programming, and applied AI research.
          I enjoy working close to the metal — whether that's implementing neural networks from scratch, building a physics
          engine in C++, or designing backtesting pipelines for algorithmic trading strategies.
        </p>
        <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
          I'm currently seeking software engineering or ML internship opportunities where I can contribute to meaningful
          projects and grow alongside an experienced team.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>

      {/* Skills */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact</h2>
        <p className="text-gray-800 dark:text-gray-300 text-lg mb-8">
          Feel free to reach out — I'm open to internship opportunities, collaborations, or just a conversation about ML and systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:mattetully@gmail.com"
            className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            mattetully@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-tully-a29610358/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-800 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
}
