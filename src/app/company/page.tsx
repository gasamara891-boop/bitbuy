"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface Investment {
  id: number;
  company: string;
  logo: string;
  category: string;
  allocation: number;
  description: string;
  returns: string;
  color: string;
}

interface RevenueStream {
  id: number;
  title: string;
  icon: string;
  description: string;
  percentage: number;
  color: string;
  details: string[];
}

interface MetricCard {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

interface Milestone {
  year: string;
  title: string;
  amount: string;
  description: string;
}

const INVESTMENTS: Investment[] = [
  {
    id: 1,
    company: "Meta (Facebook Ads)",
    logo: "/images/meta.png",
    category: "Digital Marketing",
    allocation: 18,
    description: "Strategic ad spend for user acquisition across all platforms",
    returns: "+245% ROI",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    company: "Google Ads",
    logo: "/images/google.png",
    category: "Digital Marketing",
    allocation: 16,
    description: "Search and display advertising for maximum visibility",
    returns: "+312% ROI",
    color: "from-red-500 to-orange-500",
  },
  {
    id: 3,
    company: "Amazon Marketplace",
    logo: "/images/amazon.png",
    category: "E-commerce",
    allocation: 12,
    description: "B2B integration and marketplace partnerships",
    returns: "+178% ROI",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 4,
    company: "Tesla Stock",
    logo: "/images/tesla.png",
    category: "Tech Stocks",
    allocation: 25,
    description: "Long-term equity investment in EV innovation leader",
    returns: "+156% ROI",
    color: "from-red-600 to-red-700",
  },
  {
    id: 5,
    company: "Apple Stock",
    logo: "/images/apple.png",
    category: "Tech Stocks",
    allocation: 20,
    description: "Diversified tech portfolio with stable growth",
    returns: "+198% ROI",
    color: "from-gray-600 to-gray-700",
  },
  {
    id: 6,
    company: "Netflix Stock",
    logo: "/images/netflix.png",
    category: "Entertainment",
    allocation: 9,
    description: "Streaming sector investment for portfolio diversity",
    returns: "+142% ROI",
    color: "from-red-500 to-black",
  },
];

const REVENUE_STREAMS: RevenueStream[] = [
  {
    id: 1,
    title: "Trading Commissions",
    icon: "📊",
    description: "Our primary revenue from per-trade fees and spreads",
    percentage: 35,
    color: "from-cyan-500 to-blue-500",
    details: [
      "$2.5B+ monthly trading volume",
      "0.1% average commission per trade",
      "Consistent growth with user base",
      "$87.5M+ monthly revenue stream",
    ],
  },
  {
    id: 2,
    title: "Premium Subscriptions",
    icon: "👑",
    description: "Advanced features, analytics, and priority support",
    percentage: 22,
    color: "from-purple-500 to-pink-500",
    details: [
      "Pro, Elite, and VIP tiers",
      "$29-$199/month pricing",
      "50k+ premium subscribers",
      "$35M+ annual subscription revenue",
    ],
  },
  {
    id: 3,
    title: "API & Integration Fees",
    icon: "🔌",
    description: "Enterprise clients using our trading infrastructure",
    percentage: 18,
    color: "from-green-500 to-emerald-500",
    details: [
      "500+ institutional clients",
      "$10k-$100k+ monthly per client",
      "Custom API solutions",
      "$32M+ annual from integrations",
    ],
  },
  {
    id: 4,
    title: "Lending & Margin Interest",
    icon: "💳",
    description: "Interest earned on margin trading facilities",
    percentage: 15,
    color: "from-orange-500 to-red-500",
    details: [
      "$1.2B+ margin outstanding",
      "8-12% annual interest rates",
      "Risk-managed lending model",
      "$28M+ annual margin interest",
    ],
  },
  {
    id: 5,
    title: "Crypto Staking Rewards",
    icon: "🪙",
    description: "Revenue sharing from user staking participation",
    percentage: 7,
    color: "from-indigo-500 to-purple-500",
    details: [
      "$800M+ assets under staking",
      "5-15% APY for users",
      "Our take: 2-3% of rewards",
      "$12M+ annual staking revenue",
    ],
  },
  {
    id: 6,
    title: "Strategic Partnerships",
    icon: "🤝",
    description: "Revenue from partnerships and affiliate programs",
    percentage: 3,
    color: "from-teal-500 to-cyan-500",
    details: [
      "50+ strategic partnerships",
      "Affiliate commission sharing",
      "White-label solutions",
      "$6M+ from partnerships",
    ],
  },
];

const FINANCIAL_METRICS: MetricCard[] = [
  { label: "Monthly Revenue", value: "$185.5M", change: "+42% YoY", trend: "up" },
  { label: "Operating Margin", value: "38%", change: "+5% YoY", trend: "up" },
  { label: "First Investment Bonus", value: "$100", change: "+50% YoY", trend: "up" },
  { label: "Lifetime Value per User", value: "$1,240", change: "+67% YoY", trend: "up" },
];

const PROFIT_TIMELINE: Milestone[] = [
  {
    year: "2024",
    title: "Break-Even Achieved",
    amount: "$2.2B Revenue",
    description: "Reached profitability milestone with efficient operations",
  },
  {
    year: "2024",
    title: "First Profitable Quarter",
    amount: "$580M Revenue",
    description: "Q3 2024 showed 42% net profit margin",
  },
  {
    year: "2025",
    title: "Projected Profitability",
    amount: "$3.5B Revenue",
    description: "Expected annual revenue with 45% profit margin",
  },
  {
    year: "2025",
    title: "Expansion Phase",
    amount: "$5B+ Revenue",
    description: "Scaling operations with AI and institutional products",
  },
];

const COST_STRUCTURE = [
  { category: "Technology & Infrastructure", percentage: 18, color: "bg-cyan-500" },
  { category: "Sales & Marketing", percentage: 22, color: "bg-blue-500" },
  { category: "Operations & Support", percentage: 15, color: "bg-purple-500" },
  { category: "R&D", percentage: 12, color: "bg-pink-500" },
  { category: "Compliance & Security", percentage: 8, color: "bg-green-500" },
  { category: "Admin & General", percentage: 5, color: "bg-orange-500" },
  { category: "Net Profit", percentage: 20, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
];

export default function CompanyPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [selectedInvestment, setSelectedInvestment] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-slate-950 text-white overflow-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/20 to-slate-950" />
          
          <motion.div
            animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-60 sm:w-96 md:w-[600px] h-60 sm:h-96 md:h-[600px] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-3xl"
          />
          
          <motion.div
            animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-60 sm:w-96 md:w-[600px] h-60 sm:h-96 md:h-[600px] bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl"
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
            className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-3 sm:w-3 bg-emerald-400"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-emerald-400">FINANCIAL TRANSPARENCY</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight"
          >
            How We Build
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              A Sustainable Business
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            Transparent investments, diversified revenue streams, and a commitment to long-term profitability without compromising user experience.
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
              className=""
            >
              
              
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className=""
            >
              
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== KEY METRICS ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {FINANCIAL_METRICS.map((metric) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-lg" />
              
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-lg sm:rounded-xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-xl">
                <p className="text-slate-400 text-xs sm:text-sm font-semibold mb-2">{metric.label}</p>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">
                  {metric.value}
                </h3>
                <div className="flex items-center gap-2">
                  <span className={metric.trend === "up" ? "text-emerald-400" : "text-red-400"}>
                    {metric.trend === "up" ? "📈" : "📉"}
                  </span>
                  <p className={metric.trend === "up" ? "text-emerald-400" : "text-red-400"}>
                    {metric.change}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== INVESTMENT PORTFOLIO ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Strategic Investment Portfolio
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">
            $500M+ diversified across technology, marketing, and infrastructure investments
          </p>
        </motion.div>

        {/* Investment Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12"
        >
          {INVESTMENTS.map((investment) => (
            <motion.div
              key={investment.id}
              variants={itemVariants}
              onClick={() => setSelectedInvestment(selectedInvestment === investment.id ? null : investment.id)}
              className="group cursor-pointer"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-emerald-400/50 transition-all duration-300 h-full backdrop-blur-xl group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${investment.color} rounded-t-lg sm:rounded-t-2xl`} />

                <div className="flex items-start justify-between mb-4">
                  <div>
                    {/* Logo Image */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 bg-white/10 rounded-lg flex items-center justify-center p-2">
                      <Image
                        src={investment.logo}
                        alt={investment.company}
                        width={60}
                        height={60}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-emerald-400 transition-colors">
                      {investment.company}
                    </h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: selectedInvestment === investment.id ? 180 : 0,
                    }}
                    className="text-2xl text-emerald-400"
                  >
                    ▼
                  </motion.div>
                </div>

                <p className="text-emerald-400 text-xs sm:text-sm font-semibold mb-3">
                  {investment.category}
                </p>

                <div className="space-y-3 mb-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-slate-400">Allocation</span>
                      <span className="text-sm font-bold text-emerald-400">{investment.allocation}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${investment.allocation}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full bg-gradient-to-r ${investment.color}`}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-emerald-400 font-semibold text-sm mb-2">{investment.returns}</p>
                <p className="text-slate-400 text-sm">{investment.description}</p>

                {/* Expanded details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: selectedInvestment === investment.id ? 1 : 0,
                    height: selectedInvestment === investment.id ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-slate-700/50 text-xs sm:text-sm text-slate-400 overflow-hidden"
                >
                  <p className="mb-2">
                    💡 Strategic rationale: Diversified investment spreading risk across multiple sectors while maximizing returns.
                  </p>
                  <p className="mb-2">
                    📈 Performance: Outperforming market benchmarks by 2.3x average return
                  </p>
                  <p>
                    🎯 Impact: Funds growth initiatives and market expansion
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Overview Chart */}
        <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-10 border border-slate-700/50 backdrop-blur-xl">
          <h3 className="text-2xl font-bold mb-8">Portfolio Breakdown</h3>
          
          <div className="space-y-4">
            {INVESTMENTS.map((inv) => (
              <motion.div
                key={inv.id}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: inv.id * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs sm:text-sm font-semibold min-w-32">{inv.company}</span>
                <div className="flex-1 h-6 sm:h-8 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${inv.allocation}%` }}
                    transition={{ duration: 1.2, delay: inv.id * 0.1 }}
                    className={`h-full bg-gradient-to-r ${inv.color} flex items-center justify-end pr-3`}
                  >
                    <span className="text-white text-xs font-bold">{inv.allocation}%</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REVENUE STREAMS ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Diversified Revenue Streams
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">
            Multiple income sources ensure financial stability and sustainable growth
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12"
        >
          {REVENUE_STREAMS.map((stream) => (
            <motion.div
              key={stream.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-emerald-400/50 transition-all duration-300 h-full backdrop-blur-xl group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl sm:text-5xl">{stream.icon}</div>
                  <span className={`px-3 py-1 bg-gradient-to-r ${stream.color} text-white text-xs font-bold rounded-full`}>
                    {stream.percentage}%
                  </span>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {stream.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6">{stream.description}</p>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stream.percentage}%` }}
                      transition={{ duration: 1, delay: stream.id * 0.1 }}
                      className={`h-full bg-gradient-to-r ${stream.color}`}
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  {stream.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: stream.id * 0.1 + i * 0.05 }}
                      className="flex items-center gap-2 text-xs sm:text-sm text-slate-400"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {detail}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Revenue Overview */}
        <div className="relative bg-gradient-to-br from-emerald-950/30 to-teal-950/30 rounded-lg sm:rounded-2xl p-6 sm:p-10 border border-emerald-500/30 backdrop-blur-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <p className="text-slate-400 text-sm mb-2">Total Annual Revenue</p>
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                $108.5B
              </h3>
              <p className="text-emerald-400 text-sm mt-2">↑ 68% YoY Growth</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Net Profit Margin</p>
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                89%
              </h3>
              <p className="text-emerald-400 text-sm mt-2">↑ 12% vs Last Year</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Operating Efficiency</p>
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                62:38
              </h3>
              <p className="text-emerald-400 text-sm mt-2">Revenue:Expense Ratio</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COST STRUCTURE ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Cost Structure & Efficiency
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">
            Lean operations with strategic spending focused on growth and sustainability
          </p>
        </motion.div>

        <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-10 border border-slate-700/50 backdrop-blur-xl">
          <div className="space-y-4">
            {COST_STRUCTURE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm sm:text-base font-semibold text-slate-300">
                    {item.category}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-emerald-400">
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full h-4 sm:h-6 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className={`h-full ${item.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-slate-700/50 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-2">Largest Expense</p>
              <p className="text-xl sm:text-2xl font-bold">Sales & Marketing</p>
              <p className="text-emerald-400 text-xs sm:text-sm mt-1">Strategic investment in growth</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-2">Profit Margin Target</p>
              <p className="text-xl sm:text-2xl font-bold">95%+ by 2026</p>
              <p className="text-emerald-400 text-xs sm:text-sm mt-1">Efficiency optimizations ongoing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROFITABILITY TIMELINE ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Path to Profitability
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-6 sm:space-y-8"
        >
          {PROFIT_TIMELINE.map((milestone, index) => (
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
                    className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/50 flex-shrink-0 mt-1"
                  />
                  {index < PROFIT_TIMELINE.length - 1 && (
                    <div className="w-1 h-20 sm:h-32 bg-gradient-to-b from-emerald-500/50 to-emerald-500/10 mt-2" />
                  )}
                </div>

                <div className="pb-4 flex-1 pt-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-400">{milestone.year}</span>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-2xl font-bold mb-0.5 sm:mb-1">{milestone.title}</h3>
                      <p className="text-emerald-400 font-semibold text-xs sm:text-sm">{milestone.amount}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-base text-slate-400">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== HOW WE STAY PROFITABLE ===== */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          How We Stay Profitable
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {[
            {
              icon: "⚙️",
              title: "Operational Excellence",
              description: "Automated systems reduce overhead. Cloud infrastructure scales efficiently with user growth.",
              points: ["AI-driven automation", "Cloud scalability", "Process optimization"],
            },
            {
              icon: "📊",
              title: "Data-Driven Decisions",
              description: "Analytics guide every business decision. We optimize what works and cut what doesn't.",
              points: ["Real-time analytics", "A/B testing", "User behavior analysis"],
            },
            {
              icon: "🚀",
              title: "User Retention",
              description: "Retaining users is cheaper than acquiring new ones. 85% annual retention rate.",
              points: ["Premium features", "Community engagement", "Continuous updates"],
            },
            {
              icon: "💰",
              title: "Premium Monetization",
              description: "Tiered pricing unlocks value. 35% of users upgrade to premium services.",
              points: ["Pro/Elite/VIP tiers", "Institutional plans", "API licensing"],
            },
            {
              icon: "🌍",
              title: "Global Expansion",
              description: "Each new market adds revenue with minimal incremental cost.",
              points: ["Multi-currency support", "Local partnerships", "Regional growth"],
            },
            {
              icon: "🔐",
              title: "Compliance First",
              description: "Proper regulation prevents costly fines and builds institutional trust.",
              points: ["Full compliance", "Audit-ready systems", "Institutional clients"],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-emerald-400/50 transition-all duration-300 h-full backdrop-blur-xl group-hover:shadow-2xl group-hover:shadow-emerald-500/20">
                
                <div className="text-4xl sm:text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{item.description}</p>

                <ul className="space-y-2">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

       <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-36 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl mx-auto text-center"
      >
        {/* Subtle Top Label */}
        <div className="inline-block mb-4 xs:mb-5 sm:mb-6 md:mb-8 px-3 xs:px-4 sm:px-4 py-1 xs:py-1.5 text-xs xs:text-xs sm:text-xs tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] uppercase text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 rounded-full whitespace-nowrap">
          Sterling Crypto Brokerage
        </div>

        {/* Main Statement - Fully Responsive */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight xs:leading-tight sm:leading-tight md:leading-tight lg:leading-snug mb-6 xs:mb-7 sm:mb-8 md:mb-10 px-1">
          Institutional Infrastructure.
          <br className="hidden sm:block" />
          <span className="block sm:inline"> Retail Accessibility.</span>
          <br className="hidden md:block" />
          <span className="block md:inline"> Built for the Future of Digital Assets.</span>
        </h2>

        {/* Supporting Paragraph - Fully Responsive */}
        <p className="text-slate-400 text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed xs:leading-relaxed sm:leading-relaxed md:leading-relaxed max-w-3xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6">
          As a regulated crypto brokerage, we combine deep liquidity access,
          advanced risk management, and enterprise-grade security to deliver a
          seamless digital asset trading experience. Our platform bridges
          traditional finance and blockchain markets — enabling individuals,
          institutions, and partners to operate with confidence in a rapidly
          evolving financial landscape.
        </p>

        {/* Divider Line - Responsive */}
        <div className="mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 h-px w-16 xs:w-20 sm:w-24 md:w-32 mx-auto bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />

        {/* Closing Micro Statement - Responsive */}
        <p className="mt-6 xs:mt-7 sm:mt-8 md:mt-8 lg:mt-10 text-slate-500 text-xs xs:text-xs sm:text-sm md:text-sm tracking-[0.15em] xs:tracking-[0.18em] sm:tracking-[0.2em] md:tracking-wide uppercase px-2">
          Transparency
          <span className="hidden xs:inline"> • </span>
          <br className="xs:hidden" />
          <span className="hidden xs:inline">Compliance • Performance</span>
          <span className="xs:hidden block">Compliance</span>
          <span className="xs:hidden block">Performance</span>
        </p>
      </motion.div>
    </section>

      <div className="h-12 sm:h-16 md:h-20" />
    </div>
  );
}