import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Projects</h1>

      <ProjectCard
        title="ML Trading Bot"
        description="An algorithmic trading system with backtesting and risk controls, designed to explore applied machine learning in financial markets."
        tech={["Python", "Machine Learning", "Systems"]}
        slug="trading-bot"
      />

      <ProjectCard
        title="Simple RNN Models"
        description="Character-level recurrent neural networks built from scratch to understand sequence modeling and text generation."
        tech={["PyTorch", "Deep Learning", "NLP"]}
        slug="simple-rnn"
      />

      <ProjectCard
        title="2D Game Engine"
        description="A custom 2D engine featuring a windowing system, physics simulation, and core engine architecture."
        tech={["C++", "Physics", "Engine Design"]}
        slug="2d-engine"
      />
    </div>
  );
}