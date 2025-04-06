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