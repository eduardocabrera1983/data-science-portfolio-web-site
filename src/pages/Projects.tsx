import { motion } from "framer-motion";
import { FaPython, FaBrain, FaChartLine, FaGavel, FaDocker, FaAws } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";

export function Projects() {
  return (
    <section className="min-h-screen px-8 py-24 bg-cloud relative z-10">
      <motion.div
        className="max-w-7xl mx-auto"
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
        
        {/* Projects Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* IPR Seizure Risk Predictor */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-black mb-3">
              IPR Seizure Risk Predictor
            </h3>
            
            {/* Website Preview Image */}
            <div className="mb-4 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/ipr-preview.png" 
                alt="IPR Seizure Risk Predictor Dashboard"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* What is IP Seizure Risk */}
            <div className="bg-blue-50 p-3 rounded-lg mb-3 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-1 text-sm">📦 What is IP Seizure Risk?</h4>
              <p className="text-xs text-gray-700">
                U.S. Customs intercepts counterfeit and pirated goods at borders. This tool predicts seizure likelihood based on country of origin, product type, and historical enforcement patterns.
              </p>
            </div>
            
            <p className="text-gray-700 mb-4 text-sm flex-grow">
              ML application predicting IP seizure risks using official USTR data. Analyzes 4,583 seizure records worth $11.6B with Random Forest algorithms (R² 0.965+).
            </p>

            {/* Methodology */}
            <div className="bg-purple-50 p-3 rounded-lg mb-4 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2 text-sm">🔬 Methodology</h4>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                <li><strong>Random Forest Regression:</strong> Continuous 0-100% risk scoring</li>
                <li><strong>Data Sources:</strong> USTR Special 301 Report + OHSS IPR Dataset (2019-2023)</li>
                <li><strong>Feature Engineering:</strong> HTS mapping, country risk factors, line count scaling</li>
                <li><strong>Performance:</strong> R² 0.965+, RMSE ~3.3 pts, MAE ~2.3 pts across 120+ countries</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2 text-sm">☁️ AWS Deployment</h4>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                <li><strong>Docker containerization:</strong> Multi-stage builds optimizing Flask app and ML models</li>
                <li><strong>AWS ECR:</strong> Managed container lifecycle, versioning, and vulnerability scanning</li>
                <li><strong>CI/CD pipeline:</strong> Automated build-test-deploy workflow from GitHub to production</li>
                <li><strong>Monitoring:</strong> CloudWatch logs, health checks, and performance metrics tracking</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaPython({})} Python
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaBrain({})} ML
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {SiScikitlearn({})} Random Forest
              </span>
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaAws({})} AWS
              </span>
              <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaDocker({})} Docker
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaGavel({})} USTR Data
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaChartLine({})} Analytics
              </span>
            </div>

            <div className="flex gap-2 mt-auto">
              <a 
                href="https://ipr-predictor.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center"
              >
                Live Site
              </a>
              <a 
                href="https://ipr-predictor.com/predict" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center"
              >
                Try Demo
              </a>
            </div>
          </motion.div>

          {/* Placeholder for future projects */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-gray-400 text-6xl mb-4">+</div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-400 text-sm text-center">
              Additional data science projects will be added here
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-gray-400 text-6xl mb-4">+</div>
            <h3 className="text-lg font-semibold text-gray-500 mb-2">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-400 text-sm text-center">
              Additional data science projects will be added here
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}