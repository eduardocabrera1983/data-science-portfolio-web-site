import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-cloud shadow-sm">
      <h1 className="text-2xl font-bold text-taupe">My Portfolio</h1>
      <div className="flex gap-6 text-lavender text-sm font-semibold">
        <Link className="hover:text-steel transition" to="/">Home</Link>
        <Link className="hover:text-steel transition" to="/projects">Projects</Link>
        <Link className="hover:text-steel transition" to="/about">About</Link>
        <Link className="hover:text-steel transition" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
