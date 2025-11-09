import { motion } from "framer-motion";
import { FaPython, FaBrain, FaChartLine, FaGavel, FaDocker, FaAws } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";

export function Projects() {
  return (
    <section className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 bg-cloud relative z-10">
      <motion.div
        className="w-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-5xl font-bold text-black mb-8 text-center"
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
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full"
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
            <div className="bg-blue-50 p-3 rounded-lg mb-2 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-1 text-sm">📦 What is IP Seizure Risk?</h4>
              <p className="text-xs text-gray-700">
                U.S. Customs intercepts counterfeit and pirated goods at borders. This tool predicts seizure likelihood based on country of origin, product type, and historical enforcement patterns.
              </p>
            </div>
            
            <p className="text-gray-700 mb-2 text-sm">
              ML application predicting IP seizure risks using official USTR data. Analyzes 4,583 seizure records worth $11.6B with Random Forest algorithms (R² 0.965+).
            </p>

            {/* Methodology */}
            <div className="bg-purple-50 p-3 rounded-lg mb-2 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2 text-sm">🔬 Methodology</h4>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                <li><strong>Random Forest Regression:</strong> Continuous 0-100% risk scoring</li>
                <li><strong>Data Sources:</strong> USTR Special 301 Report + OHSS IPR Dataset (2019-2023)</li>
                <li><strong>Feature Engineering:</strong> HTS mapping, country risk factors, line count scaling</li>
                <li><strong>Performance:</strong> R² 0.965+, RMSE ~3.3 pts, MAE ~2.3 pts across 120+ countries</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-3 rounded-lg mb-2 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 mb-2 text-sm">☁️ AWS Deployment</h4>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                <li><strong>Docker containerization:</strong> Multi-stage builds optimizing Flask app and ML models</li>
                <li><strong>AWS ECR:</strong> Managed container lifecycle, versioning, and vulnerability scanning</li>
                <li><strong>CI/CD pipeline:</strong> Automated build-test-deploy workflow from GitHub to production</li>
                <li><strong>Monitoring:</strong> CloudWatch logs, health checks, and performance metrics tracking</li>
              </ul>
            </div>

            <div className="bg-green-50 p-3 rounded-lg mb-3 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2 text-sm">🎯 Business Impact</h4>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                <li><strong>Risk Assessment:</strong> Enables businesses to evaluate IP protection strategies for international trade</li>
                <li><strong>Compliance Tool:</strong> Helps companies understand enforcement patterns and regulatory risks</li>
                <li><strong>Data-Driven Decisions:</strong> Provides quantitative risk scores for supply chain planning</li>
                <li><strong>Real-World Application:</strong> Built with official government data for accurate predictions</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
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

          {/* Customer Voice ML */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-black mb-3">
              Customer Voice ML
            </h3>
            
            {/* Website Preview Image */}
            <div className="mb-4 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/customervoice-ml-preview.png" 
                alt="Customer Voice ML Dashboard"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* What is Customer Voice ML */}
            <div className="bg-purple-50 p-3 rounded-lg mb-3 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-1 text-sm">🎤 What is Customer Voice ML?</h4>
              <p className="text-xs text-gray-700">
                An advanced sentiment analysis platform that transforms customer feedback into actionable business intelligence using state-of-the-art NLP models.
              </p>
            </div>
            
            <p className="text-gray-700 mb-4 text-sm flex-grow">
              Two-model ensemble architecture combining XLM-RoBERTa and Twitter-RoBERTa for superior multi-label sentiment analysis with 95%+ accuracy and multilingual support (5+ languages).
            </p>

            {/* Methodology */}
            <div className="bg-blue-50 p-3 rounded-lg mb-4 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2 text-sm">🔬 Key Features</h4>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                <li><strong>Two-Model Ensemble:</strong> Weighted voting (XLM-RoBERTa 60% + Twitter-RoBERTa 40%)</li>
                <li><strong>Multi-Label Classification:</strong> Primary + secondary aspect detection with mixed concerns</li>
                <li><strong>Auto FedEx Analysis:</strong> Real-time monitoring of 1000+ mobile app reviews</li>
                <li><strong>UX Prioritization:</strong> Intelligent business logic with 1.5x priority multiplier for UX issues</li>
                <li><strong>Performance:</strong> 20+ texts/second with intelligent caching (85%+ hit rate)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-lg mb-4 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-2 text-sm">🚀 Advanced Capabilities</h4>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                <li><strong>Business Intelligence:</strong> Auto-generated recommendations and severity assessment</li>
                <li><strong>Batch Processing:</strong> Upload CSV/Excel for optimized ensemble analysis</li>
                <li><strong>Live Dashboard:</strong> Real-time FedEx review analytics with BI insights</li>
                <li><strong>Multilingual:</strong> Support for 5+ languages with XLM-RoBERTa backbone</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-3 rounded-lg mb-3 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 mb-2 text-sm">🎯 Business Impact</h4>
              <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                <li><strong>Customer Insights:</strong> Transforms feedback into actionable intelligence for product teams</li>
                <li><strong>Quality Assurance:</strong> Identifies service issues and improvement opportunities in real-time</li>
                <li><strong>Multi-Market Analysis:</strong> Processes reviews across 5+ languages for global businesses</li>
                <li><strong>Competitive Intelligence:</strong> Enables benchmark analysis against industry standards</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaPython({})} Python
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaBrain({})} NLP
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                Transformers
              </span>
              <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                Ensemble ML
              </span>
              <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                Flask
              </span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                {FaChartLine({})} BI Analytics
              </span>
            </div>

            <div className="flex gap-2 mt-auto">
              <a 
                href="https://customervoice-ml.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center"
              >
                Live Site
              </a>
              <a 
                href="https://customervoice-ml.com/analyze" 
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
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300 h-full"
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