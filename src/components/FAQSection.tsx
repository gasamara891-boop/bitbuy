"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

type FAQ = {
  id: string;
  q: string;
  a: string;
  category?: string;
};

const FAQS: FAQ[] = [
  {
    id: "what-is-Sterling-brokerage",
    q: "What is sterling brokerage?",
    category: "General",
    a: "Sterling is a trusted investment platform that allows users to invest securely in cryptocurrencies such as Bitcoin, Ethereum, and USDT. We focus on making digital investing simple, transparent, and accessible while applying disciplined risk-management and data-driven strategies.",
  },
  {
    id: "industries",
    q: "What industries do you specialize in?",
    category: "Products",
    a: "We specialize in cryptocurrency and digital assets. Our primary markets include Bitcoin (BTC), Ethereum (ETH), USDT (BEP20 / TRC20), and related DeFi opportunities. We combine automated strategies with human oversight to capture market opportunities responsibly.",
  },
  {
    id: "guarantee-growth",
    q: "Can you guarantee growth?",
    category: "Investing",
    a: "No legitimate investment can promise guaranteed returns. Sterling commits to transparency and professional risk management — we aim to maximize returns while minimizing avoidable risk through analytics and adaptive strategies.Our Past performances is a guarantee of future results.",
  },
  {
    id: "plans-special",
    q: "What makes your investment plans special?",
    category: "Plans",
    a: "Our plans balance clear durations, transparent yields, and automated execution. We tailor plans for different investor goals (short-term, growth, capital preservation) and continuously monitor performance to optimize outcomes.",
  },
  {
    id: "deposits-withdrawals",
    q: "How do deposits and withdrawals work?",
    category: "Transactions",
    a: "Wallets are generated and visible only to Authenticated Users. Deposits are recorded as pending until the system confirms. Withdrawals are requested from your dashboard and require admin approval for processing to ensure security.",
  },
  {
    id: "user-security",
    q: "How is user security handled?",
    category: "Security",
    a: "We enforce secure authentication, (RLS) in the database, encrypted communications, and operational controls for admin actions. Never share your login details and use strong passwords / 2FA when available.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function QuestionIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 17v.01M12 13a2 2 0 012-2c1.1 0 2 .9 2 2 0 1-1 2-2 2s-2-.5-2-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function FAQSection(): JSX.Element {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(FAQS.map((f) => f.category).filter(Boolean))) as string[];
  }, []);

  const filtered = useMemo(() => {
    let results = FAQS;

    if (selectedCategory) {
      results = results.filter((f) => f.category === selectedCategory);
    }

    const q = query.trim().toLowerCase();
    if (q) {
      results = results.filter((f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q));
    }

    return results;
  }, [query, selectedCategory]);

  useEffect(() => {
    if (!openId) return;
    const found = filtered.find((f) => f.id === openId);
    if (!found) {
      setOpenId(filtered[0]?.id ?? null);
    }
  }, [filtered, openId]);

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-8 sm:py-12 md:py-20 lg:py-24 px-4 sm:px-5 md:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 z-0 hidden lg:block"
      />

      <motion.div
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-40 -right-40 w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 z-0 hidden lg:block"
      />

      <div className="w-full mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16 px-2 sm:px-0"
        >
          <div className="mb-3 sm:mb-4 md:mb-6 inline-flex justify-center w-full">
            <span className="text-cyan-400 font-mono text-10 sm:text-11 md:text-12 uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 border border-cyan-500 border-opacity-30 rounded-full bg-cyan-500 bg-opacity-5 whitespace-nowrap">
              [ KNOWLEDGE BASE ]
            </span>
          </div>
          <h2 className="text-22 sm:text-28 md:text-36 lg:text-48 font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
            Frequently Asked
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block sm:inline">
              Questions
            </span>
          </h2>
          <p className="text-slate-300 text-12 sm:text-14 md:text-15 lg:text-16 max-w-3xl mx-auto px-2 leading-relaxed">
            Find answers to your questions about Sterling, our trading platform, security, and investment plans
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-1 sm:px-0"
        >
          {/* Search Bar */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-7 md:mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg" />
              <div className="relative bg-slate-900 border border-cyan-500 border-opacity-30 hover:border-cyan-400 transition-all rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 w-full">
                <div className="flex-shrink-0 text-cyan-400">
                  <QuestionIcon />
                </div>
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search FAQs..."
                  className="flex-1 bg-transparent text-white placeholder-slate-500 outline-none text-13 sm:text-14 md:text-15 w-full min-w-0"
                />
                {query && (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    onClick={() => setQuery("")}
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex-shrink-0 text-16"
                  >
                    ✕
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 sm:gap-2.5 md:gap-3 justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-mono text-10 sm:text-11 md:text-12 uppercase tracking-widest transition-all border flex-shrink-0 ${
                selectedCategory === null
                  ? "bg-cyan-500 text-slate-900 border-cyan-500"
                  : "bg-transparent border-cyan-500 border-opacity-30 text-cyan-400 hover:border-cyan-400"
              }`}
            >
              All
            </motion.button>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-mono text-10 sm:text-11 md:text-12 uppercase tracking-widest transition-all border flex-shrink-0 whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-purple-500 text-white border-purple-500"
                    : "bg-transparent border-slate-700 border-opacity-50 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 px-1 sm:px-0"
        >
          {filtered.length === 0 ? (
            <motion.div
              variants={itemVariants}
              className="text-center py-8 sm:py-12 text-slate-400"
            >
              <p className="text-14 sm:text-15 md:text-16">No FAQs found. Try different keywords.</p>
            </motion.div>
          ) : (
            filtered.map((faq, idx) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glowing Border */}
                <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg sm:rounded-xl border border-cyan-500 border-opacity-30 hover:border-cyan-400 transition-all duration-500 overflow-hidden backdrop-blur-sm group-hover:bg-slate-800">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />

                  {/* Header Button */}
                  <motion.button
                    onClick={() => toggle(faq.id)}
                    className="w-full px-4 sm:px-5 md:px-6 lg:px-8 py-3.5 sm:py-4 md:py-5 lg:py-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 hover:bg-slate-700/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 md:gap-4 min-w-0 text-left">
                      {/* Icon - Hidden on mobile */}
                      <div className="hidden sm:flex w-10 md:w-12 h-10 md:h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 items-center justify-center flex-shrink-0 text-cyan-400">
                        <QuestionIcon />
                      </div>
                      {/* Question */}
                      <div className="min-w-0 pt-0.5 sm:pt-0">
                        <p className="text-10 sm:text-11 md:text-12 font-mono uppercase tracking-widest text-slate-400 mb-0.5 sm:mb-1">
                          {faq.category}
                        </p>
                        <h3 className="text-14 sm:text-15 md:text-16 lg:text-18 font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug break-words">
                          {faq.q}
                        </h3>
                      </div>
                    </div>

                    {/* Chevron */}
                    <div className="text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-0">
                      <ChevronIcon open={openId === faq.id} />
                    </div>
                  </motion.button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 border-t border-slate-700/50 pt-3 sm:pt-4">
                          <p className="text-slate-300 text-12 sm:text-13 md:text-14 lg:text-16 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-8 sm:mt-10 md:mt-16 lg:mt-20 px-2 sm:px-0"
        >
          <p className="text-slate-300 text-12 sm:text-14 md:text-15 lg:text-16 mb-6 sm:mb-7 md:mb-8">
            Didn't find your answer? Our support team is ready to help.
          </p>
          <motion.a
            href="https://wa.me/15815848379"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block relative group/btn"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 blur" />
            <button className="relative px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 bg-slate-900 border border-cyan-500 text-white font-mono font-bold text-11 sm:text-12 md:text-13 lg:text-16 uppercase tracking-widest rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 whitespace-nowrap">
            

              Contact Support



            </button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}