import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PortraitParticles3D } from "../components/PortraitParticles3D";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <PortraitParticles3D count={25000} imageUrl="/portrait.png" />
      
      {/* Tagline on the right side */}
      <div className="fixed right-16 top-1/2 -translate-y-1/2 max-w-md z-20 hidden lg:block" style={{ marginRight: '2cm' }}>
        <div className="text-3xl font-bold leading-tight space-y-1">
          {/* Animate each row with 0.5 second delay between rows */}
          <motion.div
            className="text-kronbergs-green/80"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 5.5, ease: "easeOut" }}
          >
            I transform
          </motion.div>
          <motion.div
            className="text-kronbergs-green/80"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 6.0, ease: "easeOut" }}
          >
            scattered data points
          </motion.div>
          <motion.div
            className="text-kronbergs-green/80"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 6.5, ease: "easeOut" }}
          >
            into clear insights
          </motion.div>
          <motion.div
            className="text-kronbergs-green/80"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 7.0, ease: "easeOut" }}
          >
            that drive decisions
          </motion.div>
          <motion.div
            className="text-kronbergs-green/80"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 7.5, ease: "easeOut" }}
          >
            helping businesses
          </motion.div>
          <motion.div
            className="text-coral-red"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 8.0, ease: "easeOut" }}
          >
            focus on what matters.
          </motion.div>
        </div>
      </div>

      <section className="min-h-screen px-8 py-24 bg-gradient-to-br from-cloud/60 to-cloud/40 text-black flex flex-col justify-center items-start relative z-10">
        <motion.h2
          className="text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.0, ease: "easeOut" }}
        >
          Hi, I'm Eduardo Cabrera.
        </motion.h2>

        <div className="text-lg text-black max-w-2xl leading-relaxed">
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            I turn data into your competitive edge.
          </motion.p>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            With 18+ years leading cross-functional data business initiatives and fresh Machine Learning expertise, I help companies with:
          </motion.p>
          <ul className="space-y-4">
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            >
              <span className="mr-3 text-vandar-poels-blue text-xl">•</span>
              <div>
                <strong>Data Analysis & Visualization:</strong> Transform complex datasets into clear, actionable insights with interactive dashboards and reports.
                <div className="mt-1 text-kronbergs-green italic">→ Uncover hidden revenue opportunities in existing data.</div>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 3.0, ease: "easeOut" }}
            >
              <span className="mr-3 text-vandar-poels-blue text-xl">•</span>
              <div>
                <strong>Machine Learning Models:</strong> Build predictive models for classification, regression, and forecasting to drive data-driven decisions.
                <div className="mt-1 text-kronbergs-green italic">→ Predict customer behavior before competitors do.</div>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 5.0, ease: "easeOut" }}
            >
              <span className="mr-3 text-vandar-poels-blue text-xl">•</span>
              <div>
                <strong>Statistical Analysis:</strong> Apply rigorous statistical methods to uncover patterns, test hypotheses, and validate business assumptions.
                <div className="mt-1 text-kronbergs-green italic">→ Transform data chaos into strategic clarity.</div>
              </div>
            </motion.li>
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 7.0, ease: "easeOut" }}
        >
          <Link to="/projects">
            <motion.button
              className="mt-8 bg-vandar-poels-blue text-white px-6 py-3 rounded-md shadow-md"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#759243",
                boxShadow: "0 10px 30px rgba(117, 146, 67, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              Explore My Projects
            </motion.button>
          </Link>
        </motion.div>
      </section>
      
    </div>
  );
}
