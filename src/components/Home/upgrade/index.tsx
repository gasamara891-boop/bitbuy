"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

type UpgradeItem = {
  title: string;
  description?: string;
  icon?: string;
};

const upgradeData: UpgradeItem[] = [
  { title: "Ultra-Fast Execution", description: "0.001ms trade confirmation" },
  { title: "Quantum Security", description: "256-bit encryption" },
  { title: "AI-Powered Analytics", description: "Real-time market insights" },
  { title: "24/7 Trading Access", description: "Global markets anytime" },
];

const Upgrade = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-12 sm:py-16 md:py-24 lg:py-32 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
      id="upgrade"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 z-0 hidden sm:block"
      />

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 -right-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 z-0 hidden sm:block"
      />

      <div className="w-full mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center sm:text-left"
        >
          <div className="mb-2 sm:mb-3 md:mb-4 inline-block">
            <span className="text-cyan-400 font-mono text-9 sm:text-10 md:text-11 lg:text-12 uppercase tracking-widest px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border border-cyan-500 border-opacity-30 rounded-full bg-cyan-500 bg-opacity-5 whitespace-nowrap text-center">
              [ PREMIUM FEATURES ]
            </span>
          </div>
          <h2 className="text-20 sm:text-26 md:text-36 lg:text-44 font-bold text-white mb-2 md:mb-3 leading-tight">
            Upgrade Your
            <br className="hidden xs:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Trading Experience
            </span>
          </h2>
          <p className="text-slate-300 text-11 sm:text-12 md:text-14 lg:text-16 max-w-2xl mt-2 sm:mt-3 md:mt-4">
            Get faster, safer, and more profitable returns on your investments with our advanced trading suite.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-8 lg:gap-12 items-start md:items-center">
          {/* Left Column - Features */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {upgradeData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Glowing Border */}
                  <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg" />

                  {/* Card */}
                  <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 border border-cyan-500 border-opacity-30 hover:border-cyan-400 transition-all duration-500 backdrop-blur-sm group-hover:bg-slate-800 h-full">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg" />

                    {/* Icon Container */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 text-cyan-400 text-18 sm:text-20 md:text-24 lg:text-28 flex-shrink-0"
                    >
                      ✓
                    </motion.div>

                    {/* Content */}
                    <h4 className="text-12 sm:text-13 md:text-15 lg:text-17 font-bold text-white mb-0.5 sm:mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-slate-400 text-10 sm:text-11 md:text-13 lg:text-14 leading-snug">
                        {item.description}
                      </p>
                    )}

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl transition-all duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative w-full h-auto"
          >
            {/* Image Glow Background */}
            <motion.div
              animate={floatingAnimation}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-xl md:rounded-2xl blur-3xl opacity-20 md:opacity-30 z-0"
            />

            {/* Image Container */}
            <div className="relative z-10 w-full flex items-center justify-center">
              <motion.div
                animate={floatingAnimation}
                className="w-full"
              >
                <Image
                  src={`${getImagePrefix()}images/upgrade/img-upgrade.png`}
                  alt="Upgrade Trading Experience"
                  width={625}
                  height={580}
                  className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(0,255,255,0.2)] md:drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                  priority
                />
              </motion.div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-cyan-500 border-opacity-20 md:border-opacity-30 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-8 sm:mt-10 md:mt-14 lg:mt-20"
        >
          <p className="text-slate-300 text-11 sm:text-12 md:text-14 lg:text-16 mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-2">
            Ready to experience the future of trading?
          </p>
          <motion.a
            href="/company"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block relative group/btn"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur" />
            <button className="relative px-5 sm:px-7 md:px-9 lg:px-12 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-slate-900 border border-cyan-500 text-white font-mono font-bold text-10 sm:text-11 md:text-12 lg:text-16 uppercase tracking-widest rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 whitespace-nowrap">
              Start Upgrading Now
            </button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Upgrade;