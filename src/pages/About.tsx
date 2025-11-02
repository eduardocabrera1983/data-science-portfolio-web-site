import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function About() {
  const aboutItems = [
    {
      icon: "📊",
      title: "Data Analyst & Data Scientist",
      description: "Passionate about creating meaningful insights through data visualization and modeling",
      color: "text-glaucus-blue"
    },
    {
      icon: "💼",
      title: "18+ Years of Experience",
      description: "Strong foundation in cross-functional business roles, analytics, and organizational strategy",
      color: "text-coral-red"
    },
    {
      icon: "🎓",
      title: "Recent Graduate",
      description: "Data Science & Machine Learning Engineering - turning theory into practice",
      color: "text-kronbergs-green"
    },
    {
      icon: "🐍",
      title: "Technical Skills",
      description: "Python programming, statistical modeling, neural networks, and MLOps",
      color: "text-pale-lemon-yellow"
    },
    {
      icon: "🧠",
      title: "Natural Language Processing",
      description: "Exploring the intersection of language and machine learning",
      color: "text-glaucus-blue"
    },
    {
      icon: "📈",
      title: "Business Intelligence",
      description: "Bridging the gap between complex data and actionable business insights",
      color: "text-coral-red"
    },
    {
      icon: "💡",
      title: "Innovation Driver",
      description: "Leveraging combined expertise to drive business value and innovation",
      color: "text-kronbergs-green"
    },
    {
      icon: "🚀",
      title: "Ready to Collaborate",
      description: "Let's work together on exciting data-driven initiatives that transform organizations",
      color: "text-pale-lemon-yellow"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.0,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="min-h-screen px-8 py-24 bg-cloud relative z-10">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-5xl font-bold text-black text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.0
          }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className={`text-4xl ${item.color}`}>
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-glaucus-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-black leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.0
          }}
        >
          <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
            Ready to transform data into insights and insights into impact? 
            <Link 
              to="/contact" 
              className="font-semibold text-glaucus-blue hover:text-coral-red transition-colors duration-300 cursor-pointer"
            >
              {" "}Let's connect
            </Link> and explore how we can leverage the power of data in your organization.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}