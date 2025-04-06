import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-xl font-bold tracking-tight">My Portfolio</h1>
      <div className="space-x-4 text-sm font-medium">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
