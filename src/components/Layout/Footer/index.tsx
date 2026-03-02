"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);

  const footerLinks = {
    product: [
      { name: "Features", href: "/company" },
      { name: "Pricing", href: "#pricing" },
      { name: "Security", href: "/about" },
      { name: "API Docs", href: "#api" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Company", href: "/company" },
      { name: "Legal", href: "/gallery" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Compliance", href: "/gallery" },
    ],
    social: [
      { name: "Twitter", href: "#", icon: "𝕏" },
      { name: "Discord", href: "#", icon: "◆" },
      { name: "LinkedIn", href: "#", icon: "in" },
      { name: "GitHub", href: "#", icon: "⚙" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-slate-950 text-white pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-8 border-t border-slate-800/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-cyan-500/5 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-purple-500/5 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16"
        >
          {/* Product */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Product
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal - NOW VISIBLE */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
              Follow Us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.social.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm sm:text-base flex items-center gap-2"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8 sm:mb-10 md:mb-12"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8 pb-8 sm:pb-10 md:pb-12"
        >
          {/* Left - Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-slate-400 text-xs sm:text-sm">
              © 2026 Sterling Trading. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Your trusted digital asset trading platform
            </p>
          </div>

          {/* Center - Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 text-xs sm:text-sm">
              Status: All Systems Operational
            </span>
          </div>

          {/* Right - Made With */}
          <div className="text-center sm:text-right">
            <p className="text-slate-400 text-xs sm:text-sm">
              Made with <span className="text-cyan-400">♡</span> by Sterling
            </p>
          </div>
        </motion.div>

        {/* Bottom Border Accent */}
        <motion.div
          animate={{ scaleX: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"
        />
      </div>
    </footer>
  );
};

export default Footer;