'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Shield, Award } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  icon?: React.ReactNode;
}

const certifications: Certification[] = [
  {
    id: 1,
    name: '101 Blockchain',
    description: 'Professional Certification in Blockchain Technology',
    image: '/images/certs/101blockchain.jpg',
    category: 'Quality',
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 2,
    name: 'Academy Of Finance',
    description: 'Financial Services Certification for Security and Compliance',
    image: '/images/certs/academy.jpg',
    category: 'Security',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 3,
    name: 'CBPC',
    description: 'Certified Blockchain Professional Certification',
    image: '/images/certs/cbpc.jpg',
    category: 'Compliance',
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    id: 4,
    name: 'CEP',
    description: 'Certified Ethical Practices in Financial Services',
    image: '/images/certs/cep.jpg',
    category: 'Compliance',
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    id: 5,
    name: 'Anti Money Laundery',
    description: 'Anti-Money Laundering Certification',
    image: '/images/certs/aml.jpg',
    category: 'Partnership',
    icon: <Shield className="w-6 h-6" />
  },
  {
    id: 6,
    name: 'SEC',
    description: 'Registered with the U.S. Securities and Exchange Commission',
    image: '/images/certs/sec.jpg',
    category: 'Partnership',
    icon: <Award className="w-6 h-6" />
  },
  {
    id: 7,
    name: 'Trading License',
    description: 'Licensed to operate as a trading platform in multiple jurisdictions',
    image: '/images/certs/tradinglicence.jpg',
    category: 'Impact',
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Gallery(): JSX.Element {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 pt-20 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full max-w-6xl lg:max-w-7xl mx-auto">
        
        {/* Header Section - Premium Typography */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          {/* Top Accent */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-widest whitespace-nowrap">
              Regulatory Excellence
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          {/* Main Heading - Responsive Text Sizes */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Industry Certifications<br className="hidden xs:block" />& Regulatory Compliance
          </h1>

          {/* Description - Responsive Text */}
          <p className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-1">
            Backed by globally recognized certifications and regulatory approvals, we maintain the highest standards of security, compliance, and operational excellence in the fintech industry.
          </p>
        </motion.div>

        {/* Stats Bar - Fully Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-2xl mx-auto px-2"
        >
          {[
            { number: '7+', label: 'Certifications' },
            { number: '5+', label: 'Jurisdictions' },
            { number: '100%', label: 'Compliant' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center py-3 sm:py-4 md:py-6">
              <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs xs:text-sm sm:text-base text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gallery Grid - Fully Responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 w-full"
        >
          {certifications.map((cert: Certification) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.4 } }}
              className="group w-full"
            >
              <div className="relative w-full h-full rounded-xl xs:rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 backdrop-blur-xl flex flex-col min-h-96 xs:min-h-[420px] sm:min-h-[480px] md:min-h-[500px]">
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image Container - Responsive Height */}
                <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-64 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden flex-shrink-0">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image */}
                  <div className="relative z-10">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={160}
                      height={160}
                      className="object-contain group-hover:scale-125 transition-transform duration-700 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48"
                      priority={cert.id <= 3}
                    />
                  </div>

                  {/* Verification Badge */}
                  <div className="absolute top-3 xs:top-4 right-3 xs:right-4 w-7 h-7 xs:w-8 xs:h-8 bg-green-500/20 border border-green-500/50 rounded-full flex items-center justify-center backdrop-blur">
                    <CheckCircle2 className="w-4 h-4 xs:w-5 xs:h-5 text-green-400" />
                  </div>
                </div>

                {/* Content Container - Responsive Padding */}
                <div className="flex-1 p-4 xs:p-5 sm:p-6 md:p-6 flex flex-col justify-between">
                  {/* Category Badge */}
                  <div className="mb-3 xs:mb-4">
                    <span className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1 xs:py-1.5 text-xs font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/30 rounded-lg backdrop-blur-sm whitespace-nowrap">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {cert.category}
                    </span>
                  </div>

                  {/* Title & Description - Responsive Font Sizes */}
                  <div className="flex-1">
                    <h3 className="text-base xs:text-lg sm:text-lg md:text-xl font-bold text-white mb-2 xs:mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-snug">
                      {cert.name}
                    </h3>
                    <p className="text-xs xs:text-sm sm:text-sm md:text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-4 xs:mt-5 sm:mt-6 pt-3 xs:pt-4 border-t border-slate-700/50 flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs xs:text-sm font-medium">
                    <span>Verify Credential</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl xs:rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  boxShadow: 'inset 0 0 30px rgba(59, 130, 246, 0.1)'
                }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust & Compliance Section - Fully Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 md:mt-24 bg-gradient-to-r from-blue-900/20 via-slate-800/20 to-blue-900/20 border border-blue-500/10 rounded-xl xs:rounded-xl sm:rounded-2xl p-6 xs:p-8 sm:p-10 md:p-12 backdrop-blur-xl w-full"
        >
          <div className="max-w-3xl mx-auto px-2">
            {/* Heading */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 xs:mb-4 sm:mb-6 text-center">
              Compliance-First Approach
            </h2>

            {/* Description */}
            <p className="text-sm xs:text-base sm:text-lg text-slate-300 mb-6 xs:mb-8 sm:mb-8 leading-relaxed text-center">
              Our multi-layered compliance framework ensures full regulatory adherence across all jurisdictions. We continuously update our certifications to meet evolving global standards.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 mb-8 xs:mb-10 sm:mb-8">
              {[
                { icon: '🔒', text: 'Enterprise-Grade Security' },
                { icon: '✓', text: 'Global Compliance' },
                { icon: '📊', text: 'Regular Audits' },
                { icon: '🛡️', text: 'Risk Management' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col xs:flex-row items-center xs:items-start gap-2 xs:gap-3 text-slate-300 text-center xs:text-left">
                  <span className="text-2xl xs:text-xl flex-shrink-0">{item.icon}</span>
                  <span className="font-medium text-xs xs:text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-slate-900 font-bold text-sm xs:text-base rounded-lg transition-all duration-300 shadow-2xl shadow-blue-500/40 group whitespace-nowrap"
              >
                Request Documentation
                <span className="group-hover:translate-x-1 transition-transform hidden xs:inline">→</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Footer Note - Responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center text-xs xs:text-sm text-slate-500 px-2"
        >
          <p>All certifications are current and regularly audited. Last updated: January 2026</p>
        </motion.div>
      </div>
    </div>
  );
}