"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

type PerkItem = {
  icon: string;
  title: string;
  text: string;
  gradient: string;
  stat?: string;
  statLabel?: string;
};

const perksData: PerkItem[] = [
  {
    icon: "images/perks/bolt.png",
    title: "Lightning Fast",
    text: "Execute trades in milliseconds with our quantum-optimized infrastructure. Never miss a market opportunity.",
    gradient: "from-cyan-500 to-blue-500",
    stat: "0.1ms",
    statLabel: "Execution Speed",
  },
  {
    icon: "images/perks/secure.png",
    title: "Bank-Grade Security",
    text: "256-bit encryption, multi-signature wallets, and 24/7 security monitoring keep your assets protected.",
    gradient: "from-emerald-500 to-teal-500",
    stat: "256-bit",
    statLabel: "Encryption",
  },
  {
    icon: "images/perks/ai.png",
    title: "AI Analytics",
    text: "Real-time market insights powered by machine learning. Make informed decisions with predictive analytics.",
    gradient: "from-purple-500 to-pink-500",
    stat: "98.7%",
    statLabel: "Accuracy Rate",
  },
  {
    icon: "images/perks/fee.png",
    title: "Zero Hidden Fees",
    text: "Transparent pricing with no surprise charges. Know exactly what you're paying before every transaction.",
    gradient: "from-orange-500 to-red-500",
    stat: "0%",
    statLabel: "Hidden Fees",
  },
  {
    icon: "images/perks/support.png",
    title: "24/7 Support",
    text: "Our expert team is always available to help. Get responses in minutes, not hours.",
    gradient: "from-blue-500 to-indigo-500",
    stat: "<5min",
    statLabel: "Response Time",
  },
  {
    icon: "images/perks/mobile.png",
    title: "Mobile First",
    text: "Trade on the go with our lightning-fast mobile app. Full functionality at your fingertips.",
    gradient: "from-rose-500 to-pink-500",
    stat: "150k+",
    statLabel: "Active Traders",
  },
];

interface HoveredCard {
  index: number;
}

const Perks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<HoveredCard | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 md:px-8 lg:px-12 bg-slate-950 overflow-hidden"
    >
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{ 
            y: [0, 40, 0],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/2 -left-1/4 w-96 sm:w-[500px] md:w-[600px] h-96 sm:h-[500px] md:h-[600px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full mix-blend-screen filter blur-3xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/2 -right-1/4 w-96 sm:w-[500px] md:w-[600px] h-96 sm:h-[500px] md:h-[600px] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent rounded-full mix-blend-screen filter blur-3xl"
        />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/30 to-slate-950" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section with Blur Text Effect */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-12 sm:mb-14 md:mb-20 lg:mb-24 px-2"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              PREMIUM FEATURES
            </span>
          </motion.div>

          {/* Main Title with Gradient */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Why Choose
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="block h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Sterling Trading
            </motion.span>
          </h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2"
          >
            Experience institutional-grade trading with cutting-edge technology, 
            <span className="text-cyan-400 font-semibold"> zero compromises</span>
          </motion.p>
        </motion.div>

        {/* Perks Grid with Advanced Interactions */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-20 lg:mb-24"
        >
          {perksData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard({ index })}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer h-full"
            >
              {/* Card Container with Glass Effect */}
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative h-full bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Gradient Background Layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`} />

                {/* Top Accent Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                  className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${item.gradient} rounded-t-2xl sm:rounded-t-3xl`}
                />

                {/* Content Wrapper */}
                <div className="relative z-20 flex flex-col h-full">
                  
                  {/* Top Section: Icon + Stats */}
                  <div className="flex items-start justify-between mb-6 sm:mb-8">
                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 8,
                      }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                      className={`relative p-4 sm:p-5 bg-gradient-to-br ${item.gradient} rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      style={{
                        boxShadow: hoveredCard?.index === index 
                          ? `0 0 30px ${item.gradient.includes('cyan') ? 'rgba(6,182,212,0.4)' : 'rgba(168,85,247,0.4)'}` 
                          : 'none',
                      }}
                    >
                      <Image
                        src={`${getImagePrefix()}${item.icon}`}
                        alt={item.title}
                        width={28}
                        height={28}
                        className="w-6 sm:w-7 h-6 sm:h-7 object-contain filter brightness-0 invert"
                      />
                    </motion.div>

                    {/* Stats Box */}
                    {item.stat && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="text-right"
                      >
                        <p className={`text-lg sm:text-2xl md:text-3xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.stat}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-400 mt-1 whitespace-nowrap">
                          {item.statLabel}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* Middle Section: Title */}
                  <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:${item.gradient} group-hover:bg-clip-text `}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed flex-grow group-hover:text-slate-200 transition-colors duration-300 mb-6 sm:mb-8">
                    {item.text}
                  </p>

                  {/* Bottom Section: CTA Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={hoveredCard?.index === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                  >
                    <span>Explore</span>
                    <motion.svg
                      animate={hoveredCard?.index === index ? { x: 4 } : { x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl sm:rounded-3xl opacity-20 blur-2xl`} />
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-transparent group-hover:border-cyan-400/30 transition-all duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== CTA SECTION WITH IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl w-full aspect-video sm:aspect-video md:aspect-[2/1]"
        >
          {/* Background Image with proper responsive sizing */}
          <Image
            src="/images/business.webp"
            alt="Join the Next Generation"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

          {/* Content Overlay - Fixed positioning */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16 text-center w-full h-full">
            {/* Text Content with proper responsive sizing */}
            <div className="relative z-10 max-w-2xl w-full">
              


              {/* Buttons Grid - Responsive layout */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full mb-6 sm:mb-8 md:mb-10">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  
                >
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover/btn:opacity-20 blur-xl"
                    animate={inView ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className=""
                >
                  
                </motion.button>
              </div>

              {/* Features List - Responsive grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 border-t border-white/20 relative z-10 w-full">
                {[
                  { label: "No KYC", icon: "✓" },
                  { label: "Instant Setup", icon: "⚡" },
                  { label: "No Fees", icon: "💰" },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-base sm:text-xl md:text-2xl mb-0.5 sm:mb-1 md:mb-2">{feature.icon}</p>
                    <p className="text-slate-300 text-xs sm:text-xs md:text-sm font-medium line-clamp-1">{feature.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll-based Parallax Elements */}
      <motion.div
        style={{ y }}
        className="absolute -bottom-20 -right-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full filter blur-3xl pointer-events-none"
      />
    </section>
  );
};

export default Perks;