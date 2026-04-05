import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Projects
      </h1>

      {/* Project Cards */}
      <ProjectCard
        title="ML Trading Bot"
        description="An algorithmic trading system with backtesting and risk controls, designed to explore applied machine learning in financial markets."
        tech={["Python", "Machine Learning", "Systems"]}
        slug="trading-bot"
        status="In Progress"
      />

      <ProjectCard
        title="Simple RNN Models"
        description="Character-level recurrent neural networks built from scratch to understand sequence modeling and text generation."
        tech={["PyTorch", "Deep Learning", "NLP"]}
        slug="simple-rnn"
        status="Prototype"
      />

      <ProjectCard
        title="2D Game Engine"
        description="A custom 2D engine featuring a windowing system, physics simulation, and core engine architecture."
        tech={["C++", "Physics", "Engine Design"]}
        slug="2d-engine"
        status="Early Development"
      />
    </div>
    </div>
  );
}