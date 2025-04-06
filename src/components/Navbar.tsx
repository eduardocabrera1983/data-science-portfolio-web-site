import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      <h1 className="text-2xl font-semibold text-gray-800">My Portfolio</h1>
      <div className="flex gap-6 text-blue-600 text-sm font-medium">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
