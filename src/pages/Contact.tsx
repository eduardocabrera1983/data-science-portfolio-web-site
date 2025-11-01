import { motion } from "framer-motion";

export function Contact() {
  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      value: "edumcabrera@gmail.com",
      link: "mailto:edumcabrera@gmail.com",
      color: "text-glaucus-blue"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "(+31) 0615338473",
      link: "tel:+31615338473",
      color: "text-coral-red"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/eduardomcabrera",
      link: "https://www.linkedin.com/in/eduardomcabrera/",
      color: "text-kronbergs-green"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/eduardocabrera1983",
      link: "https://github.com/eduardocabrera1983",
      color: "text-pale-lemon-yellow"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut",
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen px-8 py-24 bg-cloud flex items-center justify-center relative z-10">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-5xl font-bold text-black mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 1.0, 
            ease: "easeOut"
          }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          className="text-xl text-black mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          Ready to collaborate on data-driven projects? I'd love to hear from you. 
          Let's explore how we can transform data into meaningful insights together.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.label === "LinkedIn" || item.label === "GitHub" ? "_blank" : "_self"}
              rel={item.label === "LinkedIn" || item.label === "GitHub" ? "noopener noreferrer" : ""}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group block"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <div className={`text-5xl ${item.color}`}>
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-glaucus-blue transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-black leading-relaxed break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.0,
            ease: "easeOut"
          }}
        >
          <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to discuss a potential project, explore collaboration opportunities, 
            or simply want to connect with a fellow data enthusiast, I'm always excited to engage in 
            meaningful conversations about the power of data science.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}