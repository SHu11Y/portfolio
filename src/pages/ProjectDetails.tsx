import { useParams, Link } from "react-router-dom";

/**
 * Centralized project data
 */
const projects: Record<
  string,
  {
    title: string;
    description: string;
    problem: string;
    approach: string;
    learned: string;
    github: string;
    status: "In Progress" | "Prototype" | "Early Development";
  }
> = {
  "trading-bot": {
    title: "ML Trading Bot",
    description:
      "An algorithmic trading system designed to explore applied machine learning, backtesting, and risk management.",
    problem:
      "Financial markets are noisy and difficult to model reliably. The challenge was building a system that could evaluate strategies without overfitting or data leakage.",
    approach:
      "I designed a modular trading pipeline with historical backtesting, feature engineering, basic ML models, and risk controls to evaluate strategy performance realistically.",
    learned:
      "I learned about data leakage, overfitting, evaluation bias, and system-level ML tradeoffs.",
    github: "https://github.com/sHu11Y/Wolfie",
    status: "In Progress",
  },

  "simple-rnn": {
    title: "Simple RNN Models",
    description:
      "Character-level recurrent neural networks implemented from scratch using PyTorch.",
    problem:
      "Understanding how sequence models propagate information through time.",
    approach:
      "I manually implemented a vanilla RNN, trained it on Shakespeare text, and generated text using temperature-based sampling.",
    learned:
      "I gained a deep understanding of logits, loss functions, backpropagation through time, and RNN limitations.",
    github: "https://github.com/yourusername/simple-rnn",
    status: "Prototype",
  },

  "2d-engine": {
    title: "2D Game Engine",
    description:
      "A custom-built 2D game engine focusing on physics simulation and engine architecture.",
    problem:
      "Building a game engine requires coordinating low-level systems while maintaining extensibility and stability.",
    approach:
      "I implemented a windowing system, physics simulation, and a core engine loop from scratch.",
    learned:
      "I learned about simulation stability, engine architecture, and systems-level design tradeoffs.",
    github: "https://github.com/crowmoed/Pilly---C.git",
    status: "Early Development",
  },
};

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p className="mb-4 text-gray-700 dark:text-gray-300">Project not found.</p>
        <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const { title, description, problem, approach, learned, github, status } = project;

  // Badge colors
  const statusClasses =
    status === "In Progress"
      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
      : status === "Prototype"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
      : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link to="/projects" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
        ← Back to Projects
      </Link>

      {/* Header */}
      <h1 className="text-3xl font-bold mt-4 mb-2 text-gray-900 dark:text-white">{title}</h1>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

      {/* Status Badge & GitHub Link */}
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${statusClasses}`}
        >
          {status}
        </span>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          View on GitHub →
        </a>
      </div>

      {/* Problem Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Problem</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{problem}</p>
      </section>

      {/* Approach Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Approach</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{approach}</p>
      </section>

      {/* Learned Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">What I Learned</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{learned}</p>
      </section>
    </div>
  );
}