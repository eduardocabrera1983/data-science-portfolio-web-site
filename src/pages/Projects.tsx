import Plot from "react-plotly.js";
import { motion } from "framer-motion";
import { FaPython, FaBrain, FaChartLine, FaDatabase, FaGavel } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";

export function Projects() {
  return (
    <section className="min-h-screen px-8 py-24 bg-cloud relative z-10">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-black mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        
        {/* IPR Seizure Risk Predictor */}
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-semibold text-black mb-4">
            IPR Seizure Risk Predictor - USTR Enhanced
          </h3>
          
          <p className="text-gray-700 mb-6 text-lg">
            A machine learning application that predicts intellectual property seizure risks for international shipments 
            using official US Trade Representative data and advanced analytics.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">📊 Official USTR Data</h4>
              <p className="text-sm text-gray-700">
                Integrates the latest US Trade Representative Special 301 Report identifying countries with IP enforcement concerns.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">📈 Historical Analysis</h4>
              <p className="text-sm text-gray-700">
                Analyzes 4,583 real seizure records from 2019-2023, worth $11.6 billion, to identify patterns and risk factors.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-2">🤖 Machine Learning</h4>
              <p className="text-sm text-gray-700">
                Random Forest regression algorithms provide continuous 0-100% risk scoring with R² of 0.965+.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              {FaPython({})} Python
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              {FaBrain({})} Machine Learning
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              {SiScikitlearn({})} Random Forest
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              {FaGavel({})} USTR Data
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
              {FaChartLine({})} Data Analytics
            </span>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://ipr-predictor.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Live Site
            </a>
            <a 
              href="https://ipr-predictor.com/predict" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Try Risk Assessment
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}