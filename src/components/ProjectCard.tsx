import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  slug: string;
  status?: string; // optional status badge
};

export default function ProjectCard({
  title,
  description,
  tech,
  slug,
  status,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="block no-underline text-inherit"
    >
      <div
        className="
          bg-white dark:bg-gray-800
          border border-gray-200 dark:border-gray-700
          rounded-lg
          p-6
          mb-6
          cursor-pointer
          transition transform duration-150 ease-out
          hover:-translate-y-1 hover:shadow-lg
        "
      >
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-800 dark:text-gray-300 mb-4">
          {description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tech.map((t) => (
            <span
              key={t}
              className="
                text-xs font-medium
                text-gray-800 dark:text-gray-200
                bg-gray-100 dark:bg-gray-700
                px-2 py-1
                rounded-full
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Optional Status Badge */}
        {status && (
          <span
            className={`
              inline-block text-xs font-semibold px-2 py-1 rounded-full
              ${
                status === "In Progress"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"
                  : ""
              }
              ${
                status === "Prototype"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-700 dark:text-blue-100"
                  : ""
              }
              ${
                status === "Early Development"
                  ? "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  : ""
              }
            `}
          >
            {status}
          </span>
        )}
      </div>
    </Link>
  );
}