"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  format?: "compact" | "full";
  decimals?: number;
  icon?: string;
  isDynamic?: boolean;
};

const DEFAULT_STATS: Stat[] = [
  { id: "total_invested", label: "24hrs Trading Volume", value: 8500000000, prefix: "$", format: "compact", decimals: 1, icon: "💰", isDynamic: true },
  { id: "active_investors", label: "Active Traders", value: 23000, suffix: "+", format: "compact", decimals: 0, icon: "👥" },
  { id: "total_profit", label: "Total Profit Generated", value: 9200000000, prefix: "$", format: "compact", decimals: 1, icon: "📈" },
  { id: "total_plans", label: "Trading Strategies", value: 42, format: "full", decimals: 0, icon: "⚡" },
];

// Compact formatting (8.5M, 23k, etc.)
function formatCompact(value: number, decimals = 1) {
  if (value >= 1_000_000_000) return (value / 1_000_000_000).toFixed(decimals) + "B";
  if (value >= 1_000_000) return (value / 1_000_000).toFixed(decimals) + "M";
  if (value >= 1000) return (value / 1000).toFixed(decimals) + "k";
  return value.toString();
}

// Full format with commas
function formatFull(value: number) {
  return new Intl.NumberFormat("en-US").format(Math.round(value));
}

// Generate random trading volume between $5M and $30M
function generateRandomVolume(): number {
  return Math.floor(Math.random() * (30000000000 - 5000000000 + 1) + 5000000000);
}

// Count-up animation hook with cleanup
function useCountUp(target: number, duration = 1600, delay = 0) {
  const [current, setCurrent] = useState(0);
  const raf = useRef<number | null>(null);

  const animate = () => {
    const startTime = performance.now() + delay;
    const startValue = 0;
    const diff = target - startValue;

    const tick = (time: number) => {
      if (time < startTime) {
        raf.current = requestAnimationFrame(tick);
        return;
      }
      const elapsed = time - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setCurrent(startValue + diff * eased);
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return { current, animate };
}

export default function DynamicStats({
  stats = DEFAULT_STATS,
  className = "",
}: {
  stats?: Stat[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const [visible, setVisible] = useState(false);
  const [dynamicVolume, setDynamicVolume] = useState(stats[0]?.value || 8500000000);
  const [nextUpdateTime, setNextUpdateTime] = useState<number | null>(null);

  // Update stats array with dynamic volume
  const updatedStats = stats.map((s) =>
    s.isDynamic ? { ...s, value: dynamicVolume } : s
  );

  const controllers = updatedStats.map((s, i) => useCountUp(s.value, 1800, i * 200));

  // Observe visibility
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setVisible(true)),
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Start animation on visibility
  useEffect(() => {
    if (visible) controllers.forEach((c) => c.animate());
  }, [visible, dynamicVolume]); // eslint-disable-line react-hooks/exhaustive-deps

  // 24-hour volume update logic
  useEffect(() => {
    // Calculate time until next midnight (24 hours from now)
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setDate(nextMidnight.getDate() + 1);
    nextMidnight.setHours(0, 0, 0, 0);

    const timeUntilNextUpdate = nextMidnight.getTime() - now.getTime();

    // Set the initial update time
    setNextUpdateTime(timeUntilNextUpdate);

    // Set interval to update volume every 24 hours
    const timer = setInterval(() => {
      setDynamicVolume(generateRandomVolume());
    }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

    return () => clearInterval(timer);
  }, []);

  // Format next update time for display
  const getNextUpdateDisplay = () => {
    if (!nextUpdateTime) return "";
    const hours = Math.floor(nextUpdateTime / (1000 * 60 * 60));
    const minutes = Math.floor((nextUpdateTime % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
      className={`relative py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden ${className}`}
      aria-label="Trading Statistics"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="container mx-auto lg:max-w-screen-xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="mb-4 md:mb-6">
            <span className="text-cyan-400 font-mono text-11 md:text-12 uppercase tracking-widest">
              [ NETWORK STATISTICS ]
            </span>
          </div>
          <h2 className="text-28 sm:text-36 md:text-44 lg:text-52 font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ecosystem Impact
            </span>
          </h2>
          <p className="text-slate-300 text-14 md:text-16 max-w-2xl mx-auto">
            Real-time insights into our growing network of traders, platforms, and capital flows
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {updatedStats.map((s, i) => {
            const ctrl = controllers[i];
            const value =
              s.format === "compact"
                ? formatCompact(ctrl.current, s.decimals ?? 1)
                : formatFull(ctrl.current);

            const isDynamicCard = s.isDynamic;

            return (
              <motion.div
                key={s.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glowing Border Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${isDynamicCard ? 'from-green-500 via-cyan-500 to-blue-500' : 'from-cyan-500 via-blue-500 to-purple-500'} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg`} />

                {/* Card Content */}
                <div className={`relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 md:p-8 h-full flex flex-col items-center justify-center text-center border ${isDynamicCard ? 'border-green-500' : 'border-cyan-500'} border-opacity-30 hover:border-opacity-100 transition-all duration-500 group-hover:bg-slate-800`}>
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${isDynamicCard ? 'from-green-500 to-cyan-500' : 'from-cyan-500 to-blue-500'} rounded-t-xl`} />

                  {/* Icon */}
                  {s.icon && (
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-36 md:text-44 mb-4"
                    >
                      {s.icon}
                    </motion.div>
                  )}

                  {/* Label */}
                  <div className="text-slate-400 text-11 md:text-12 mb-3 uppercase tracking-widest font-mono">
                    {s.label}
                  </div>

                  {/* Value */}
                  <div className={`text-24 md:text-28 lg:text-32 font-extrabold flex items-baseline justify-center text-white space-x-1 transition-colors duration-500 mb-2 ${isDynamicCard ? 'group-hover:text-green-400' : 'group-hover:text-cyan-400'}`}>
                    {s.prefix && (
                      <span className={`${isDynamicCard ? 'text-green-400' : 'text-cyan-400'} text-18 md:text-22 lg:text-26`}>{s.prefix}</span>
                    )}
                    <span>{value}</span>
                    {s.suffix && (
                      <span className={`${isDynamicCard ? 'text-green-500' : 'text-purple-400'} text-16 md:text-20 lg:text-24`}>{s.suffix}</span>
                    )}
                  </div>

                  {/* Dynamic Update Badge */}
                  {isDynamicCard && (
                    <motion.div
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="text-green-400 text-10 md:text-11 font-mono uppercase tracking-widest mt-2"
                    >
                      ● Live • Updates in {getNextUpdateDisplay()}
                    </motion.div>
                  )}

                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 bg-gradient-to-r ${isDynamicCard ? 'from-green-500/20 to-cyan-500/20' : 'from-cyan-500/20 to-purple-500/20'} blur-2xl transition-all duration-500 pointer-events-none`} />

                  {/* Subtle shine effect */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Background Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 z-0 hidden lg:block"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-5 z-0 hidden lg:block"
        />
      </div>
    </section>
  );
}