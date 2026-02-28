import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ── service card data ── */
const services = [
  {
    icon: "📡",
    title: "Customer Activity Monitoring",
    description:
      "Heatmaps and engagement analytics reveal when, how, and how often customers interact with your product or service.",
    bullets: [
      "Daily/weekly active users (DAU/WAU)",
      "Session frequency & duration",
      "Feature adoption rates",
      "Engagement heatmaps by time & channel",
    ],
    projects: [
      { name: "Customer Voice ML", url: "https://customervoice-ml.com/" },
      { name: "Rowing Analytics", url: "https://rowing-data.com/dashboard" },
    ],
  },
  {
    icon: "👥",
    title: "Segmentation & ICP Analysis",
    description:
      "ML-driven clustering identifies distinct customer groups and builds Ideal Customer Profiles — enabling targeted acquisition and retention strategies.",
    bullets: [
      "Customer Lifetime Value (CLV)",
      "RFM scoring (Recency, Frequency, Monetary)",
      "Ideal Customer Profile (ICP) modeling",
      "Buyer persona & audience research",
    ],
    projects: [
      { name: "Rowing Analytics", url: "https://rowing-data.com/dashboard" },
    ],
  },
  {
    icon: "🚨",
    title: "Churn Prediction & Retention",
    description:
      "Predictive models identify at-risk customers before they leave, enabling proactive retention campaigns that protect recurring revenue.",
    bullets: [
      "Churn risk scoring & early warnings",
      "Cohort survival analysis",
      "Win-back campaign targeting",
      "Retention driver identification",
    ],
    projects: [],
  },
  {
    icon: "📈",
    title: "Demand & Sales Forecasting",
    description:
      "Time series models and regression analysis predict future demand, revenue, and resource needs with confidence intervals.",
    bullets: [
      "Monthly/quarterly revenue forecast",
      "Seasonal demand patterns",
      "Inventory optimization signals",
      "Growth trajectory & R² confidence",
    ],
    projects: [
      { name: "IPR Risk Predictor", url: "https://ipr-predictor.com/" },
      { name: "Rowing Analytics", url: "https://rowing-data.com/dashboard" },
    ],
  },
  {
    icon: "🧠",
    title: "Behavioral Analytics",
    description:
      "Pattern recognition and trend analysis uncover what drives customer actions — from purchase triggers to churn signals.",
    bullets: [
      "Purchase propensity scoring",
      "Cross-sell / up-sell opportunity detection",
      "Customer journey mapping",
      "Anomaly detection on behavior shifts",
    ],
    projects: [
      { name: "IPR Risk Predictor", url: "https://ipr-predictor.com/" },
      { name: "Customer Voice ML", url: "https://customervoice-ml.com/" },
    ],
  },
  {
    icon: "📊",
    title: "Performance Dashboards",
    description:
      "Real-time executive scorecards with aggregated KPIs, trend indicators, and automated alerting on threshold breaches.",
    bullets: [
      "Revenue per customer (ARPU)",
      "Conversion rates & funnel drop-off",
      "Operational efficiency ratios",
      "Goal attainment tracking",
    ],
    projects: [
      { name: "Rowing Analytics", url: "https://rowing-data.com/dashboard" },
    ],
  },
  {
    icon: "🔬",
    title: "A/B Testing & Experimentation",
    description:
      "Rigorous hypothesis testing and statistical analysis ensure every product change, campaign, or pricing decision is backed by evidence.",
    bullets: [
      "Experiment design & sample sizing",
      "Statistical significance analysis",
      "Conversion rate optimization",
      "Multi-variant testing frameworks",
    ],
    projects: [],
  },
  {
    icon: "💬",
    title: "NLP & Sentiment Analysis",
    description:
      "Natural language processing extracts meaning from reviews, tickets, and social posts — turning unstructured text into measurable brand intelligence.",
    bullets: [
      "Brand & product sentiment tracking",
      "Voice-of-customer theme extraction",
      "Multilingual text classification",
      "Support ticket auto-triage",
    ],
    projects: [
      { name: "Customer Voice ML", url: "https://customervoice-ml.com/" },
    ],
  },
];

/* ── animation helpers ── */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── */}
      <section
        className="relative z-10 px-4 sm:px-6 md:px-8 pt-16 pb-10 sm:pt-20 sm:pb-14 md:pt-28 md:pb-16 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/marineterrein-hero.png')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/portrait.png"
            alt="Eduardo Cabrera"
            className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full object-cover shadow-lg border-4 border-white mx-auto"
          />
        </motion.div>

        <motion.h1
          className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3"
          {...fadeUp(0.2)}
        >
          Hi, I'm Eduardo Cabrera.
        </motion.h1>

        <motion.p
          className="relative text-lg sm:text-xl md:text-2xl text-glaucus-blue font-semibold mb-4"
          {...fadeUp(0.2)}
        >
          Data Scientist · Amsterdam
        </motion.p>

        <motion.p
          className="relative max-w-2xl text-sm sm:text-base text-white/90 leading-relaxed mb-3"
          {...fadeUp(0.4)}
        >
          Backed by <strong>18+ years</strong> of cross-functional experience at <strong>FedEx</strong>, <strong>ABN AMRO Bank</strong>, and <strong>ABB</strong>, I sit at the intersection of business strategy, design thinking, and advanced analytics — turning raw data into decisions that move the needle.
        </motion.p>

        <motion.p
          className="relative max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed"
          {...fadeUp(0.6)}
        >
          From predictive models to real-time dashboards, the techniques below have delivered measurable impact across industries.
          <br />
          Here's how I can do the same for <span className="font-semibold text-glaucus-blue">your</span> business:
        </motion.p>
      </section>

      {/* ── PILLAR SERVICES GRID ── */}
      <section className="relative z-10 bg-white px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-vandar-poels-blue text-center mb-2"
          {...fadeUp(0.1)}
        >
          💼 Services
        </motion.h2>

        <motion.p
          className="text-center text-black/60 text-sm sm:text-base max-w-3xl mx-auto mb-10 sm:mb-14"
          {...fadeUp(0.2)}
        >
          Data-driven services I offer to businesses around Amsterdam and beyond.
        </motion.p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className="rounded-xl border border-cloud bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.12,
                ease: "easeOut",
              }}
            >
              <span className="text-3xl mb-3">{svc.icon}</span>
              <h3 className="text-lg font-bold text-vandar-poels-blue mb-2">
                {svc.title}
              </h3>
              <p className="text-sm text-black/70 leading-relaxed mb-4">
                {svc.description}
              </p>
              <ul className="space-y-1.5">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start text-sm text-black/80">
                    <span className="text-kronbergs-green mr-2 mt-0.5">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              {svc.projects.length > 0 && (
                <div className="mt-4 pt-3 border-t border-cloud">
                  <p className="text-xs font-semibold text-black/50 uppercase tracking-wide mb-1.5">See it in action</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.projects.map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-vandar-poels-blue hover:text-kronbergs-green transition-colors underline underline-offset-2"
                      >
                        {p.name} →
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 bg-gradient-to-br from-cloud/40 to-cloud/20 py-12 sm:py-16 flex flex-col items-center gap-4">
        <motion.p
          className="text-base sm:text-lg text-black/70"
          {...fadeUp(0.1)}
        >
          Interested in leveraging these techniques for your business?
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.div {...fadeUp(0.3)}>
            <Link to="/contact">
              <motion.button
                className="bg-vandar-poels-blue text-white px-6 py-3 rounded-md shadow-md font-medium"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#759243",
                  boxShadow: "0 10px 30px rgba(117, 146, 67, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                📧 Get in Touch
              </motion.button>
            </Link>
          </motion.div>

          <motion.div {...fadeUp(0.45)}>
            <Link to="/projects">
              <motion.button
                className="border-2 border-vandar-poels-blue text-vandar-poels-blue px-6 py-3 rounded-md font-medium bg-white"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#003E83",
                  color: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0, 62, 131, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Explore My Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
