import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PortraitParticles3D } from "../components/PortraitParticles3D";

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

      <section className="min-h-screen px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-cloud/60 to-cloud/40 text-black flex flex-col justify-center items-start relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.0, ease: "easeOut" }}
        >
          Hi, I'm Eduardo Cabrera.
        </motion.h2>
        
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-vandar-poels-blue font-semibold mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Data Scientist
        </motion.p>

        <div className="text-sm sm:text-base text-black max-w-2xl leading-relaxed">
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            I turn data into your competitive edge.
          </motion.p>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            With <strong>18+ years</strong> of cross-functional business and data analytics experience at leading organizations including <strong>FedEx</strong>, <strong>ABN AMRO Bank</strong>, and <strong>ABB</strong>, combined with a <strong>Bachelor's in Econometrics</strong> (UADE, Argentina) and a <strong>M.A. in Product Design</strong> (NABA, Italy), plus fresh <strong>Data Science & Machine Learning Engineering</strong> certification from <strong>Ironhack</strong> (2025), I bridge the gap between business strategy, design thinking, and technical execution.
          </motion.p>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          >
            This unique combination of business acumen, customer-centered design, and cutting-edge data science allows me to deliver solutions that are not only technically robust but also aligned with real business needs and user experience.
          </motion.p>
          <motion.div
            className="mb-6 bg-kronbergs-green/20 p-4 rounded-lg border-l-4 border-kronbergs-green"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          >
            <p className="font-semibold text-black mb-2">🛠️ Core Expertise & Tools:</p>
            <div className="text-sm space-y-1">
              <p><strong>Programming & Scripting:</strong> Python, SQL (PostgreSQL, MySQL, Google BigQuery, Spark SQL)</p>
              <p><strong>Machine Learning & AI:</strong> Scikit-learn, TensorFlow, PyTorch, Hugging Face Transformers, Ensemble Methods, Random Forest, Naive Bayes, Transfer Learning, Multi-label Classification</p>
              <p><strong>Deep Learning & NLP:</strong> Neural Networks (CNN, RNN, LSTM), XLM-RoBERTa, mBERT, Twitter-RoBERTa, Sentiment Analysis, Embeddings, Image Processing</p>
              <p><strong>Data Analysis & Statistics:</strong> Pandas, NumPy, Statistical Modeling, Hypothesis Testing, A/B Testing, Jupyter Notebooks</p>
              <p><strong>Data Visualization & BI:</strong> Power BI, Tableau, Excel, Matplotlib, Seaborn, Plotly</p>
              <p><strong>Big Data & Cloud:</strong> Azure Databricks, AWS (ECR, ECS), Google BigQuery</p>
              <p><strong>Data Engineering & ETL:</strong> ETL Workflows, Tealium (CDP), Docker, CI/CD Pipelines</p>
              <p><strong>Development & Deployment:</strong> Flask, API Development, Model Deployment, Web Scraping, React</p>
              <p><strong>Tools & Methodologies:</strong> Git/GitHub, GitHub Boards, Agile/Scrum, Jira, Microsoft Azure DevOps</p>
            </div>
          </motion.div>
          <motion.p
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
          >
            I help companies transform their data challenges into competitive advantages through:
          </motion.p>
          <ul className="space-y-4">
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
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
              transition={{ duration: 0.8, delay: 4.0, ease: "easeOut" }}
            >
              <span className="mr-3 text-vandar-poels-blue text-xl">•</span>
              <div>
                <strong>Machine Learning & NLP:</strong> Build predictive models, sentiment analysis systems, and recommendation engines using state-of-the-art algorithms.
                <div className="mt-1 text-kronbergs-green italic">→ Predict customer behavior and automate insights extraction.</div>
              </div>
            </motion.li>
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 6.0, ease: "easeOut" }}
            >
              <span className="mr-3 text-vandar-poels-blue text-xl">•</span>
              <div>
                <strong>End-to-End ML Deployment:</strong> From model development to cloud deployment with Docker, AWS, and automated CI/CD pipelines.
                <div className="mt-1 text-kronbergs-green italic">→ Transform prototypes into production-ready solutions.</div>
              </div>
            </motion.li>
          </ul>
        </div>

        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 7.0, ease: "easeOut" }}
        >
          <Link to="/projects">
            <motion.button
              className="bg-vandar-poels-blue text-white px-6 py-3 rounded-md shadow-md"
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
