import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PortraitParticles3D } from "../components/PortraitParticles3D";

export function Home() {
  return (
    <>
      <PortraitParticles3D count={25000} imageUrl="/portrait.png" />
      <section className="min-h-screen px-8 py-24 bg-gradient-to-br from-cloud/60 to-cloud/40 text-black flex flex-col justify-center relative z-10">
        <motion.h2
          className="text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Eduardo Cabrera.
        </motion.h2>

        <motion.p
          className="text-lg text-black max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Data Analytics Professional with 18+ years of cross-functional business experience recently graduated in Data Science & Machine Learning Engineering.
          I love to analyze human-centered data to transform it into actionable insights and build predictive models that drive business value.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <Link
            to="/projects"
            className="mt-8 inline-block bg-vandar-poels-blue hover:bg-kronbergs-green text-white px-6 py-3 rounded-md shadow-md transition-colors duration-300"
          >
            Explore My Projects
          </Link>
        </motion.div>
      </section>
    </>
  );
}
