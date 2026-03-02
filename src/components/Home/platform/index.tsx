"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Platform = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const features = [
    { icon: "🔐", text: "Quantum Security", value: "256-bit encryption" },
    { icon: "⚡", text: "Lightning Fast", value: "0.001ms execution" },
    { icon: "🌍", text: "Global Access", value: "24/7 Trading" },
    { icon: "📊", text: "AI Analytics", value: "Real-time insights" },
  ];

  return (
    <section
      ref={ref}
      className="relative pt-16 sm:pt-24 md:pt-32 lg:pt-44 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />

          {/* Card */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 px-6 sm:px-8 md:px-12 py-10 sm:py-14 md:py-16 rounded-2xl border border-cyan-500/30 overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 relative z-10">
              
              {/* LEFT */}
              <motion.div variants={itemVariants} className="lg:col-span-6">
                <div className="mb-4">
                  <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                    [ PLATFORM ARCHITECTURE ]
                  </span>
                </div>

                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-6 font-bold leading-tight">
                  Powered by{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    SterLing Protocol
                  </span>
                </h2>

                <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                  Enterprise-grade blockchain infrastructure with quantum-resistant encryption. Execute trades with neural-network precision and institutional-grade security.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <motion.div
                    variants={statsVariants}
                    className="p-4 border border-cyan-500/30 rounded-lg bg-slate-800/50 hover:border-cyan-400 transition-all"
                  >
                    <p className="text-cyan-300 font-mono font-bold text-2xl">99.99%</p>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">
                      Uptime SLA
                    </p>
                  </motion.div>

                  <motion.div
                    variants={statsVariants}
                    className="p-4 border border-purple-500/30 rounded-lg bg-slate-800/50 hover:border-purple-400 transition-all"
                  >
                    <p className="text-purple-300 font-mono font-bold text-2xl">$13.8B</p>
                    <p className="text-slate-400 text-xs uppercase tracking-wide">
                      Total Volume
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT */}
              <motion.div variants={itemVariants} className="lg:col-span-6">
                
                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        inView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{
                        delay: 0.4 + index * 0.1,
                        duration: 0.5,
                      }}
                      className="p-5 border border-slate-700 rounded-lg bg-slate-800/50 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                    >
                      <p className="text-2xl sm:text-3xl mb-2">
                        {feature.icon}
                      </p>
                      <p className="text-white font-bold text-sm sm:text-base mb-1">
                        {feature.text}
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm font-mono">
                        {feature.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                  <Link
                    href="#"
                    className="relative block text-center text-white bg-slate-900 border border-cyan-500 py-4 px-6 sm:px-8 rounded-lg font-mono font-bold text-sm sm:text-base uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
                  >
                    STERLING
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating Blobs (hidden on small screens) */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-screen blur-3xl opacity-5"
        />

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:block absolute top-32 left-10 w-72 h-72 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mix-blend-screen blur-3xl opacity-5"
        />
      </div>
    </section>
  );
};

export default Platform;