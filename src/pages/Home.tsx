import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PortraitParticles3D } from "../components/PortraitParticles3D";

export function Home() {
  return (
    <>
      <PortraitParticles3D count={25000} imageUrl="/portrait.png" />
      
      {/* Tagline on the right side */}
      <motion.div
        className="fixed right-8 top-1/2 -translate-y-1/2 max-w-md z-20 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-3xl font-bold text-kronbergs-green/80 leading-tight">
          I transform scattered data points into clear insights that drive decisions helping businesses <span className="text-coral-red">focus on what really matters.</span>
        </p>
      </motion.div>

      <section className="min-h-screen px-8 py-24 bg-gradient-to-br from-cloud/60 to-cloud/40 text-black flex flex-col justify-center items-start relative z-10">
        <motion.h2
          className="text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Eduardo Cabrera.
        </motion.h2>

        <motion.div
          className="text-lg text-black max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p className="mb-4">
            I turn data into your competitive edge.
          </p>
          <p className="mb-6">
            With 18+ years leading cross-functional data business initiatives and fresh Machine Learning expertise, I help companies with:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-3 text-vandar-poels-blue text-xl">•</span>
              <div>
                <strong>Data Analysis & Visualization:</strong> Transform complex datasets into clear, actionable insights with interactive dashboards and reports.
                <div className="mt-1 text-kronbergs-green italic">→ Uncover hidden revenue opportunities in existing data.</div>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-vandar-poels-blue text-xl">•</span>
              <div>
                <strong>Machine Learning Models:</strong> Build predictive models for classification, regression, and forecasting to drive data-driven decisions.
                <div className="mt-1 text-kronbergs-green italic">→ Predict customer behavior before competitors do.</div>
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-vandar-poels-blue text-xl">•</span>
              <div>
                <strong>Statistical Analysis:</strong> Apply rigorous statistical methods to uncover patterns, test hypotheses, and validate business assumptions.
                <div className="mt-1 text-kronbergs-green italic">→ Transform data chaos into strategic clarity.</div>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
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
