import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  slug: string;
};

export default function ProjectCard({ title, description, tech, slug }: ProjectCardProps) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", marginBottom: "1rem" }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech.join(", ")}</p>
      <Link to={`/projects/${slug}`}>View details →</Link>
    </div>
  );
}