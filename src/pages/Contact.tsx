import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "networking",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // EmailJS configuration - Using environment variables for security
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not specified",
        inquiry_type: formData.inquiryType,
        message: formData.message,
        to_name: "Eduardo Cabrera", // Your name
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully!");
      setSubmitStatus("success");
      
      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        inquiryType: "networking",
        message: ""
      });
    } catch (error) {
      console.error("Email sending error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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

        {/* Contact Form */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.2,
            ease: "easeOut"
          }}
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-black mb-2 text-center">
              Send Me a Message
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-vandar-poels-blue focus:border-transparent outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-vandar-poels-blue focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-vandar-poels-blue focus:border-transparent outline-none transition-all"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-semibold text-black mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-vandar-poels-blue focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="networking">Networking</option>
                  <option value="project">Project Inquiry</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-vandar-poels-blue focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
                  Oops! Something went wrong. Please try again or contact me directly via email.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-vandar-poels-blue hover:bg-kronbergs-green text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}