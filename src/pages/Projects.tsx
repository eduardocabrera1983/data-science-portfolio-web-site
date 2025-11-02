import Plot from "react-plotly.js";
import { motion } from "framer-motion";

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
        
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-black mb-6">Sample Data Visualization</h3>
          <Plot
            data={[
              {
                x: [1, 2, 3, 4],
                y: [10, 15, 13, 17],
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "#4A90E2" },
              },
            ]}
            layout={{ 
              width: 800, 
              height: 500, 
              title: {
                text: "Line Chart Example"
              },
              paper_bgcolor: 'white',
              plot_bgcolor: '#f8f9fa'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}