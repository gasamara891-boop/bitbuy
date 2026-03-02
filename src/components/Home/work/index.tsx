"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { getImagePrefix } from "@/utils/utils";

const Work = () => {
  const ref = useRef(null);
  // Animation triggers only ONCE when section enters viewport - fixes disappearing content
  const inView = useInView(ref, { once: true });

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const glitchAnimation = {
    animate: {
      textShadow: [
        
      ],
      transition: {
        
      },
    },
  };

  const services = [
    {
      logo: "amazon.png",
      title: "Amazon Marketplace",
      description: "Trade Amazon seller revenue & marketplace volatility with up to 24% daily returns. Leverage AI-driven marketplace analytics for premium profit margins.",
      gradient: "from-cyan-500 to-blue-600",
      particles: 5,
    },
    {
      logo: "Meta.png",
      title: "Meta Revenue Streams",
      description: "Capitalize on Facebook & Instagram ad revenue fluctuations. Real-time tracking of quarterly earnings with 18% average daily yield optimization.",
      gradient: "from-purple-500 to-pink-600",
      particles: 7,
    },
    {
      logo: "tesla.png",
      title: "Tesla Stock Derivatives",
      description: "Advanced derivatives trading on TSLA equity. High-frequency execution with 31% potential returns on quarterly earnings volatility peaks.",
      gradient: "from-green-400 to-emerald-600",
      particles: 6,
    },
    {
      logo: "Apple.png",
      title: "Apple Services Bundle",
      description: "Trade Apple's services revenue (App Store, iCloud, AppleCare). Algorithmic execution with 22% daily ROI on ecosystem expansion plays.",
      gradient: "from-orange-500 to-red-600",
      particles: 5,
    },
    {
      logo: "Netflix.png",
      title: "Netflix Subscriber Cycles",
      description: "Predict Netflix subscriber trends & content release impacts. Machine learning models deliver 19% average returns on subscriber announcement windows.",
      gradient: "from-red-500 to-pink-500",
      particles: 7,
    },
    {
      logo: "google.png",
      title: "Google AdTech Exchange",
      description: "Trade Google's advertising technology revenue with microsecond execution. Quantum-powered analytics ensure 25% monthly compound growth.",
      gradient: "from-blue-500 to-cyan-400",
      particles: 6,
    },
  ];

  const TradingMetrics = [
    { label: "Execution Speed", value: "⚡ 0.001ms" },
    { label: "Network Coverage", value: "🌐 150+ Markets" },
    { label: "Security Level", value: "🔐 Quantum Safe" },
  ];

  return (
    <section
      className="relative md:pt-28 pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      id="work"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <p className="sm:text-28 text-18 text-cyan-400 font-mono tracking-widest mb-2">
              [ REVENUE TRADING TERMINAL ]
            </p>
            <motion.h2
              {...glitchAnimation}
              className="sm:text-52 text-36 text-white font-bold leading-tight mb-4"
            >
              <span className=" ">
                Enterprise Asset Exchange
              </span>
            </motion.h2>
            <p className="text-16 text-slate-300 max-w-2xl mx-auto">
              Trade major enterprise revenue streams & market derivatives with AI-optimized algorithms. Daily yields up to 31% on volatility-indexed positions.
            </p>
          </motion.div>

          {/* Trading Metrics Dashboard */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-4 mb-16"
          >
            {TradingMetrics.map((metric, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-6 border border-cyan-500 border-opacity-30 rounded-lg bg-slate-900 bg-opacity-50 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
              >
                <p className="text-slate-400 text-12 font-mono uppercase tracking-wider mb-2">
                  {metric.label}
                </p>
                <p className="text-20 text-cyan-300 font-bold font-mono">
                  {metric.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid - 6 Cards in 2x3 or responsive layout */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative cursor-pointer"
            >
              {/* Card Content */}
              <div className="relative p-8 bg-slate-900 border border-slate-700 rounded-xl hover:border-cyan-500 transition-all duration-500 h-full flex flex-col">
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-t-xl`}
                />

                {/* Logo Icon Container */}
                <motion.div
                  animate={
                    hoveredService === index
                      ? { scale: 1.2, rotate: 360 }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} p-4 mb-6 flex items-center justify-center shadow-lg`}
                >
                  <Image
                    src={`${getImagePrefix()}images/work/${service.logo}`}
                    alt={`${service.title} logo`}
                    width={40}
                    height={40}
                    className="object-contain filter drop-shadow-lg"
                  />
                </motion.div>

                {/* Text Content */}
                <h3 className="text-20 font-bold text-white mb-3 font-mono tracking-wide">
                  {service.title}
                </h3>
                <p className="text-14 text-slate-300 mb-4 flex-grow">
                  {service.description}
                </p>

                {/* CTA with arrow */}
                <motion.div
                  animate={hoveredService === index ? { x: 5 } : { x: 0 }}
                  className="flex items-center text-cyan-400 font-mono text-12 uppercase tracking-widest"
                >
                  <span>STERLING</span>
                  <motion.span
                    animate={hoveredService === index ? { x: 5 } : { x: 0 }}
                    className="ml-3"
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Particle effect on hover */}
                {hoveredService === index && (
                  <div className="absolute inset-0 rounded-xl pointer-events-none">
                    {Array.from({ length: service.particles }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 0 }}
                        transition={{
                          duration: Math.random() * 1 + 0.5,
                          delay: Math.random() * 0.3,
                        }}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative mt-20"
        >
          <motion.div variants={itemVariants} className="text-center">
            
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;