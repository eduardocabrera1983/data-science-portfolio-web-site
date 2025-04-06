// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// components/Navbar.tsx
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

// components/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-4">
      <p className="text-sm">© 2025 My Name. All rights reserved.</p>
    </footer>
  );
}

// pages/Home.tsx
import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.div
      className="p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg">Explore my work in data analysis and data science.</p>
    </motion.div>
  );
}

// pages/Projects.tsx
import Plot from "react-plotly.js";

export function Projects() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Sample Data Visualization</h3>
        <Plot
          data={[
            {
              x: [1, 2, 3, 4],
              y: [10, 15, 13, 17],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "blue" },
            },
          ]}
          layout={{ width: 600, height: 400, title: "Line Chart Example" }}
        />
      </div>
    </div>
  );
}

// pages/About.tsx
export function About() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg">
        I'm a data analyst and aspiring data scientist with a passion for creating
        meaningful insights through data visualization and modeling.
      </p>
    </div>
  );
}

// pages/Contact.tsx
export function Contact() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-lg">Feel free to reach out via email or social media.</p>
    </div>
  );
}
