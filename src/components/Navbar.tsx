import { Link } from "react-router-dom";

type NavbarProps = {
  dark: boolean;
  onToggleDark: () => void;
};

export default function Navbar({ dark, onToggleDark }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div>
        <Link to="/" className="mr-6 text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link to="/projects" className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Projects
        </Link>
      </div>
      <button
        onClick={onToggleDark}
        className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}