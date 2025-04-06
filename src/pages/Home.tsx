import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="min-h-screen px-8 py-24 bg-cloud text-grayish flex flex-col justify-center">
      <motion.h2
        className="text-5xl font-bold text-taupe mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Eduardo
      </motion.h2>

      <motion.p
        className="text-lg text-grayish max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        I’m a data analyst becoming a data scientist. This is my personal portfolio where I share projects and ideas that blend data, design, and creativity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      >
        <Link
          to="/projects"
          className="mt-8 inline-block bg-lavender hover:bg-steel text-white px-6 py-3 rounded-md shadow-md transition"
        >
          Explore My Projects
        </Link>
      </motion.div>
    </section>
  );
}
