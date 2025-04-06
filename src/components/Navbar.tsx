import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <div className="text-xl font-bold">My Portfolio</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}