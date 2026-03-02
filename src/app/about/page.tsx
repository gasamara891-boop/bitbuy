"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
}

interface Value {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Alexander Richardson",
    role: "Founder & CEO",
    image: "/images/founder.webp",
    bio: "Visionary fintech entrepreneur with 15+ years building trading platforms.",
    expertise: ["Strategy", "Fintech", "Trading"],
  },
  {
    id: 2,
    name: "Gradha Chen",
    role: "CTO & Co-Founder",
    image: "/images/co-founder.jpg",
    bio: "Blockchain architect and security specialist. PhD in Cryptography from MIT.",
    expertise: ["Blockchain", "Security", "Infrastructure"],
  },
  {
    id: 3,
    name: "Marcus Thompson",
    role: "Chief Operations Officer",
    image: "/images/chief.jpg",
    bio: "Operations executive scaling teams across 50+ countries.",
    expertise: ["Operations", "Scaling", "Compliance"],
  },
  {
    id: 4,
    name: "Duke Dubois",
    role: "Head of Product",
    image: "/images/head.webp",
    bio: "Product strategist who designed platforms used by millions.",
    expertise: ["Product Design", "UX/UI", "User Research"],
  },
  {
    id: 5,
    name: "James Mitchell",
    role: "Chief Financial Officer",
    image: "/images/chief.jpg",
    bio: "Finance expert with investment banking background.",
    expertise: ["Finance", "Investment", "Risk Management"],
  },
  {
    id: 6,
    name: "Mike Rodriguez",
    role: "Head of Compliance",
    image: "/images/comply.jpg",
    bio: "Regulatory compliance expert navigating global regulations.",
    expertise: ["Compliance", "Regulations", "Legal"],
  },
];

const VALUES: Value[] = [
  {
    id: 1,
    title: "Security First",
    description: "Bank-grade 256-bit encryption with 24/7 monitoring.",
    icon: "🔒",
  },
  {
    id: 2,
    title: "Transparency",
    description: "No hidden fees, no surprise charges, complete clarity.",
    icon: "👁️",
  },
  {
    id: 3,
    title: "Innovation",
    description: "Cutting-edge AI-powered analytics and next-gen tools.",
    icon: "⚡",
  },
  {
    id: 4,
    title: "User Focus",
    description: "Every feature built by traders, for traders.",
    icon: "🎯",
  },
  {
    id: 5,
    title: "Speed",
    description: "Execute trades in 0.1 milliseconds with instant settlement.",
    icon: "🚀",
  },
  {
    id: 6,
    title: "Global Access",
    description: "Trade 24/7 across 50+ countries with local support.",
    icon: "🌍",
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: "🏆",
    title: "Industry Recognition",
    description: "Named 'Best Trading Platform 2024' by leading publications.",
  },
  {
    icon: "📊",
    title: "Market Leadership",
    description: "Processed $108.5B+ with 99.9% uptime.",
  },
  {
    icon: "🔬",
    title: "Research & Development",
    description: "Invested $50M+ in pioneering AI and blockchain innovation.",
  },
  {
    icon: "🌟",
    title: "Community Impact",
    description: "Educated 500k+ traders through free webinars and courses.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Park",
    role: "Professional Trader",
    image: "/images/invest.jpg",
    content: "Sterling's execution speed and zero hidden fees increased my returns by 40% in just 6 days!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Institutional Investor",
    image: "/images/invest2.jpg",
    content: "Finally, a platform built for serious traders. The security and analytics are unmatched!",
  },
  {
    id: 3,
    name: "Alex Bruno",
    role: "Crypto Enthusiast",
    image: "/images/invest3.webp",
    content: "As a beginner, Sterling's intuitive interface and 24/7 support made it so easy to start!",
  },
];

const STATS = [
  { label: "Active Traders", value: "23k+", detail: "Growing daily" },
  { label: "Trading Volume", value: "$108.5B+", detail: "Annually" },
  { label: "Countries", value: "50+", detail: "Global presence" },
  { label: "Uptime", value: "99.9%", detail: "Reliable" },
  { label: "Employees", value: "200+", detail: "Team members" },
  { label: "Founded", value: "2024", detail: "Next-gen Brokerage" },
];

const MILESTONES = [
  { year: "2024", quarter: "Q1", title: "Launch", description: "Platform goes live globally." },
  { year: "2024", quarter: "Q2", title: "$500M Volume", description: "Hit major milestone." },
  { year: "2024", quarter: "Q3", title: "AI Analytics", description: "Launched market insights." },
  { year: "2024", quarter: "Q4", title: "15k+ Traders", description: "Industry recognition." },
  { year: "2025", quarter: "Q1", title: "Mobile App", description: "iOS and Android launch." },
  { year: "2026", quarter: "Q1", title: "Enterprise", description: "Institutional solutions." },
];

export default function AboutPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950" />
          
          <motion.div
            animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-60 sm:w-96 md:w-[600px] h-60 sm:h-96 md:h-[600px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl"
          />
          
          <motion.div
            animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-60 sm:w-96 md:w-[600px] h-60 sm:h-96 md:h-[600px] bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full backdrop-blur-md hover:border-cyan-400/50 transition-all"
          >
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-cyan-400"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-cyan-400">WELCOME TO STERLING</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight"
          >
            We're
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionizing Trading
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Sterling Brokerage is reimagining how traders access global markets with cutting-edge technology, transparent pricing, and institutional-grade security.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="group px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-bold rounded-lg sm:rounded-xl transition-all duration-300 shadow-2xl shadow-cyan-500/40 text-sm sm:text-base"
            >
              Scroll Down
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">⬇️</span>
            </motion.button>
            
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-lg" />
              
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-xl text-center">
                <motion.h3
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-slate-300 font-semibold text-sm sm:text-lg mb-1">{stat.label}</p>
                <p className="text-slate-500 text-xs sm:text-sm">{stat.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== ABOUT CONTENT ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 sm:space-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-4 text-sm sm:text-base">
                <p className="text-slate-400 leading-relaxed">
                  Sterling was born from a simple observation: traders deserve better. The existing platforms were slow, expensive, and outdated.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  In 2024, we launched Sterling Brokerage with a singular mission: democratize access to institutional-grade trading infrastructure.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Today, we serve 23k+ traders across 50+ countries, processing $108.5B+ in annual trading volume.
                </p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-10 border border-cyan-500/30">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">Key Milestones</h3>
                <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">🚀</span>
                    <div>
                      <p className="font-semibold">Q1 2024: Launch</p>
                      <p className="text-xs sm:text-sm text-slate-400">Went live globally</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">📈</span>
                    <div>
                      <p className="font-semibold">Q4 2024: $500M</p>
                      <p className="text-xs sm:text-sm text-slate-400">Trading volume</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">🤖</span>
                    <div>
                      <p className="font-semibold">Q1 2025: AI Launch</p>
                      <p className="text-xs sm:text-sm text-slate-400">Market insights</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">🏆</span>
                    <div>
                      <p className="font-semibold">Q1 2026: 23k+</p>
                      <p className="text-xs sm:text-sm text-slate-400">Active traders</p>
                    </div>
                  </li>


  <li className="flex items-start gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">💹</span>
                    <div>
                      <p className="font-semibold">Q1 2026: $108.5B+</p>
                      <p className="text-xs sm:text-sm text-slate-400">Trading Volume</p>
                    </div>
                  </li>


 <li className="flex items-start gap-3">
                    <span className="text-xl sm:text-2xl flex-shrink-0">ℹ️</span>
                    <div>
                      <p className="font-semibold">Q2 2026: Progress</p>
                      <p className="text-xs sm:text-sm text-slate-400">Coming Soon...</p>
                    </div>
                  </li>



                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== MISSION & VALUES ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Mission & Values</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">
            Every decision guided by our core values and commitment to users
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {VALUES.map((value) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300 h-full backdrop-blur-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                
                <div className="text-4xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
                  {value.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-lg sm:rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== ACHIEVEMENTS ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Why Trust Us
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-xl">
                <div className="text-4xl sm:text-5xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg sm:text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 group-hover:text-slate-300 transition-colors">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Our Growth Timeline
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6 sm:space-y-8"
        >
          {MILESTONES.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="flex gap-4 sm:gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50 flex-shrink-0 mt-1"
                  />
                  {index < MILESTONES.length - 1 && (
                    <div className="w-1 h-16 sm:h-24 bg-gradient-to-b from-cyan-500/50 to-cyan-500/10 mt-2" />
                  )}
                </div>

                <div className="pb-4 flex-1 pt-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <span className="text-2xl sm:text-3xl font-black text-cyan-400">{milestone.year}</span>
                    <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs sm:text-sm font-semibold text-cyan-400 w-fit">
                      {milestone.quarter}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">{milestone.title}</h3>
                  <p className="text-xs sm:text-base text-slate-400">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Meet Our Leadership
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />

                {/* Image Container */}
                <div className="relative h-48 sm:h-72 overflow-hidden bg-slate-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 sm:p-8">
                  <h3 className="text-lg sm:text-2xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-xs sm:text-sm mb-3 sm:mb-4">{member.role}</p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {member.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 sm:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all text-sm sm:text-lg">
                      📧
                    </a>
                    <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all text-sm sm:text-lg">
                      🔗
                    </a>
                    <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all text-sm sm:text-lg">
                      🐦
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          What Our Traders Say
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-xl h-full flex flex-col">
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base sm:text-lg">⭐</span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                  <div className="relative w-10 sm:w-12 h-10 sm:h-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 border-y border-slate-800">
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 sm:gap-12 md:gap-20 min-w-max"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-8 sm:gap-12 md:gap-20">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 whitespace-nowrap">✨ 23k+ Traders</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 whitespace-nowrap">🚀 Lightning-Fast</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 whitespace-nowrap">🔒 Bank-Grade</span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400 whitespace-nowrap">💰 Zero Fees</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
            {/* ===== FINAL CTA ===== */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-lg sm:rounded-2xl lg:rounded-3xl"
        >
          {/* Background Image */}
          <Image
            src="/images/business.webp"
            alt="Ready to Join Us"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 relative z-10">
              Ready to Join Us?
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-slate-200 mb-8 sm:mb-12 max-w-2xl mx-auto px-2 relative z-10">
              Experience the future of trading today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2 relative z-10">
             
          
            </div>
          </div>
        </motion.div>
      </section>

      <div className="h-12 sm:h-16 md:h-20" />
    </div>
  );
}