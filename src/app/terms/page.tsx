"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Section {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

const termsData: Section[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing and using Sterling Trading (the 'Platform'), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the Platform.",
      "Sterling Trading reserves the right to modify these terms at any time. Your continued use of the Platform following any changes constitutes your acceptance of the new terms.",
    ],
  },
  {
    id: "license",
    title: "2. License to Use",
    content: [
      "Sterling Trading grants you a limited, non-exclusive, non-transferable license to use the Platform for lawful purposes only. You agree not to:",
      "• Reproduce, duplicate, copy, or sell any part of the Platform",
      "• Attempt to gain unauthorized access to the Platform or its systems",
      "• Interfere with or disrupt the integrity or performance of the Platform",
      "• Use the Platform for any illegal or unauthorized purpose",
      "• Transmit malware, viruses, or any code of destructive nature",
    ],
  },
  {
    id: "user-accounts",
    title: "3. User Accounts",
    content: [
      "When you create an account with Sterling Trading, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      "You agree to immediately notify us of any unauthorized use of your account or any other breach of security.",
      "Sterling Trading reserves the right to suspend or terminate your account if we believe you have violated these terms or engaged in fraudulent activity.",
    ],
  },
  {
    id: "trading-risks",
    title: "4. Trading Risks & Disclaimers",
    content: [
      "Trading digital assets carries substantial risk of loss. Past performance is an indication of future results. The Platform is provided 'as is' and 'as available' with warranties.",
      "Sterling Trading does not guarantee:",
      "• Uninterrupted access to the Platform",
      "• Accuracy of market data or pricing information",

      "You assume all risks associated with your use of the Platform and trading decisions.",
    ],
  },
  {
    id: "fees-payments",
    title: "5. Fees and Payments",
    content: [
      "Sterling Trading does not charge fees for any of its services. We operate with a transparent, zero-fee structure, ensuring that clients can access our platform, brokerage services, and related features without incurring service charges.",
    ],
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property Rights",
    content: [
      "All content on the Platform, including text, graphics, logos, images, and software, is the property of Sterling Trading or its content suppliers and is protected by international copyright laws.",
      "You may not modify, reproduce, distribute, transmit, display, perform, or publish any content from the Platform without prior written consent from Sterling Trading.",
    ],
  },
  {
    id: "limitation-liability",
    title: "7. Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, Sterling Trading shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.",
      "Our total liability to you for any claim arising from or relating to the Platform shall not exceed the amount you paid to Sterling Trading in the 12 months preceding the claim.",
      "Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.",
    ],
  },
  {
    id: "indemnification",
    title: "8. Indemnification",
    content: [
      "You agree to indemnify and hold harmless Sterling Trading, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:",
      "• Your use of the Platform",
      "• Your violation of these terms",
      "• Your violation of applicable laws or regulations",
      "• Your infringement of any third-party rights",
    ],
  },
  {
    id: "termination",
    title: "9. Termination",
    content: [
      "Sterling Trading may terminate your access to the Platform at any time, with or without cause, and with or without notice.",
      "Upon termination, your right to use the Platform immediately ceases. Any provisions that by their nature should survive termination, including limitations of liability and indemnification, shall survive.",
    ],
  },
  {
    id: "governing-law",
    title: "10. Governing Law",
    content: [
      "These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Sterling Trading operates, without regard to its conflict of law provisions.",
      "Any legal action or proceeding arising from these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact Information",
    content: [
      "If you have any questions about these Terms and Conditions, please contact us at:",
      "Email: sterlingbroker.help@gmail.com",
      "Address: 200 King Street West, Suite 1200, Toronto, ON M5H 3A9, Canada",
      "For support inquiries, use our live chat widget on the Platform or email us at the address above. We strive to respond to all inquiries within 10 minutes.",
    ],
  },
];

export default function TermsPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950" />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-0 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Terms & Conditions
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Please read these terms carefully before using Sterling Trading
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400">
              <span>Last Updated: January 2025</span>
              <span>•</span>
              <span>Version 1.0</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section
        ref={ref}
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
      >
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-6 sm:space-y-8"
        >
          {termsData.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="group"
            >
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.id ? null : section.id
                  )
                }
                className="w-full text-left"
              >
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors flex-1">
                      {section.title}
                    </h2>
                    <motion.div
                      animate={{
                        rotate: expandedSection === section.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-cyan-400 flex-shrink-0 mt-1"
                    >
                      ▼
                    </motion.div>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: expandedSection === section.id ? 1 : 0,
                  height: expandedSection === section.id ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-3 sm:mt-4 bg-slate-800/30 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 border border-slate-700/30 backdrop-blur-sm space-y-4 sm:space-y-6">
                  {section.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-slate-300 text-sm sm:text-base leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.subsections && (
                    <div className="space-y-4 sm:space-y-6 mt-6">
                      {section.subsections.map((subsection, i) => (
                        <div key={i}>
                          <h4 className="text-slate-200 font-semibold mb-3 text-sm sm:text-base">
                            {subsection.title}
                          </h4>
                          <div className="space-y-2">
                            {subsection.content.map((item, j) => (
                              <p
                                key={j}
                                className="text-slate-400 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-cyan-500/30"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center"
        >
          <p className="text-slate-400 text-sm sm:text-base mb-6">
            By using Sterling Trading, you acknowledge that you have read,
            understood, and agree to be bound by these Terms and Conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-bold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base"
            >
              Back to Home
            </motion.a>
            <motion.a
              href="https://wa.me/15815848379"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-cyan-500/50 hover:border-cyan-400 text-white font-bold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base"
            >
              Contact Support
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer Spacing */}
      <div className="h-12 sm:h-16 md:h-20" />
    </div>
  );
}