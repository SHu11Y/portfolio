import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { slug } = useParams();

  return (
    <div style={{ padding: "2rem", maxWidth: "800px" }}>
      <h1>{slug?.replace("-", " ")}</h1>

      <p>
        This project explores the design and implementation of an
        intelligent system with a focus on architecture, tradeoffs,
        and iterative development.
      </p>

      <h2>Problem</h2>
      <p>Coming soon.</p>

      <h2>Approach</h2>
      <p>Coming soon.</p>

      <h2>What I learned</h2>
      <p>Coming soon.</p>
    </div>
  );
}