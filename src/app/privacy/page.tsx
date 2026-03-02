"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Subsection {
  title: string;
  content: string[];
}

interface Section {
  id: string;
  title: string;
  content?: string[];
  subsections?: Subsection[];
}

const privacyData: Section[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: [
      "Sterling Trading ('we', 'us', 'our', or 'Company') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Platform.",
      "Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Platform.",
    ],
  },
  {
    id: "information-collect",
    title: "2. Information We Collect",
    subsections: [
      {
        title: "2.1 Information You Provide Directly",
        content: [
          "Account Information: Name, email address,  and identity verification documents",
          "Payment Withdrawal and billing addresses",
          "Profile Information: Trading preferences, account settings, and communication preferences",
          "Communication Data: Messages, support tickets, and feedback you send us",
        ],
      },
      {
        title: "2.2 Information Collected Automatically",
        content: [
          "Device Information: Device type, operating system, unique device identifiers, and device settings",
          "Usage Information: Pages visited, time spent on pages, clicks, and navigation patterns",
          "Location Data: IP address and approximate geographic location",
          "Cookies and Similar Technologies: Tracking technologies for analytics and personalization",
        ],
      },
    ],
  },
  {
    id: "use-information",
    title: "3. How We Use Your Information",
    content: [
      "Sterling Trading uses collected information for the following purposes:",
      "• To provide, maintain, and improve our Platform and services",
      "• To process transactions and send related information",
      "• To verify your identity and prevent fraud",
      "• To comply with legal and regulatory requirements",
      "• To send promotional materials and updates (with your consent)",
      "• To analyze Platform usage and improve user experience",
      "• To respond to your inquiries and customer support requests",
      "• To enforce our Terms and Conditions and other agreements",
    ],
  },
  {
    id: "sharing-information",
    title: "4. How We Share Your Information",
    content: [
      "Sterling Trading does not sell, trade, or rent your personal information to third parties. However, we may share information in the following circumstances:",
      "• Service Providers: With trusted partners who assist in Platform operations (payment processors, hosting providers, etc.)",
      "• Legal Compliance: When required by law or governmental request",
      "• Safety and Protection: To protect against fraud, security threats, and legal liability",
      "• Business Transfers: In the event of merger, acquisition, or bankruptcy",
      "• Your Consent: With explicit permission for specific purposes",
    ],
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: [
      "Sterling Trading implements industry-standard security measures to protect your personal information, including:",
      "• 256-bit SSL encryption for data transmission",
      "• Multi-factor authentication for account access",
      "• Regular security audits and penetration testing",
      "• Secure data storage with access controls",
      "• Employee confidentiality agreements and training",
    
    ],
  },
  {
    id: "cookies",
    title: "6. Cookies and Tracking Technologies",
    content: [
      "Sterling Trading uses cookies and similar tracking technologies to:",
      "• Remember your preferences and login information",
      "• Analyze Platform traffic and user behavior",
      "• Personalize content and advertisements",
      "• Prevent fraud and enhance security",
      "You can control cookie preferences through your browser settings. However, disabling cookies may limit Platform functionality.",
    ],
  },
  {
    id: "user-rights",
    title: "7. Your Privacy Rights",
    content: [
      "Depending on your jurisdiction, you may have the following rights:",
      "• Right to Access: Request a copy of your personal information",
      "• Right to Correction: Update or correct inaccurate information",
      "• Right to Deletion: Request deletion of your information (subject to legal requirements)",
      "• Right to Opt-Out: Unsubscribe from marketing communications",
      "• Right to Data Portability: Receive your data in a portable format",
      "To exercise these rights, contact us at sterlingbroker.help@gmail.com",
    ],
  },
  {
    id: "retention",
    title: "8. Data Retention",
    content: [
      "Sterling Trading retains personal information for as long as necessary to provide services and comply with legal obligations.",
      "After account termination, we retain information for:",
      "• Fraud prevention and investigation: Up to 7 years",
      "• Legal and regulatory compliance: As required by law",
      "• Backup and archival purposes: Up to 3 years",
      "You may request deletion of your information subject to these retention requirements.",
    ],
  },
  {
    id: "third-party",
    title: "9. Third-Party Links",
    content: [
      "Our Platform may contain links to third-party websites and services. Sterling Trading is not responsible for the privacy practices of these external sites.",
      "We encourage you to review the privacy policies of any third-party services before providing personal information.",
    ],
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: [
      "Sterling Trading does not knowingly collect personal information from children under 18 years of age. If we become aware that we have collected information from a child, we will take steps to delete such information and terminate the child's account.",
      "If you are a parent or guardian and believe your child has provided information to Sterling Trading, please contact us immediately.",
    ],
  },
  {
    id: "international",
    title: "11. International Data Transfers",
    content: [
      "Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country.",
      "By using Sterling Trading, you consent to the transfer of your information to countries outside your country of residence.",
    ],
  },
  {
    id: "changes",
    title: "12. Changes to Privacy Policy",
    content: [
      "Sterling Trading reserves the right to modify this Privacy Policy at any time. Changes will be effective upon posting to the Platform.",
      "Your continued use of the Platform following notice of changes constitutes your acceptance of the updated Privacy Policy.",
    ],
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: [
      "If you have questions about this Privacy Policy or our privacy practices, please contact us:",
      "Email: sterlingbroker.help@gmail.com",
      "Mailing Address: 200 King Street West, Suite 1200, Toronto, ON M5H 3A9, Canada",
      "Data Protection Officer: Dustin Gruth (sterlingbroker.help@gmail.com)",
    ],
  },
];

export default function PrivacyPage() {
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950" />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-0 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
              We are committed to protecting your privacy and ensuring transparency
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400">
              <span>Last Updated: January 2026</span>
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
          {privacyData.map((section) => (
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
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 border border-slate-700/50 group-hover:border-emerald-400/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors flex-1">
                      {section.title}
                    </h2>
                    <motion.div
                      animate={{
                        rotate: expandedSection === section.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-emerald-400 flex-shrink-0 mt-1"
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
                  {/* Regular content */}
                  {section.content &&
                    section.content.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-slate-300 text-sm sm:text-base leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}

                  {/* Subsections */}
                  {section.subsections && (
                    <div className="space-y-4 sm:space-y-6">
                      {section.subsections.map((subsection, i) => (
                        <div key={i}>
                          <h4 className="text-slate-200 font-semibold mb-3 text-sm sm:text-base">
                            {subsection.title}
                          </h4>
                          <div className="space-y-2">
                            {subsection.content.map((item, j) => (
                              <p
                                key={j}
                                className="text-slate-400 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-emerald-500/30"
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
            Your privacy is important to us. If you have any questions about how
            we handle your data, please do not hesitate to contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-900 font-bold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base"
            >
              Back to Home
            </motion.a>
            <motion.a
              href="https://wa.me/15815848379"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-10 py-3 sm:py-4 border-2 border-emerald-500/50 hover:border-emerald-400 text-white font-bold rounded-lg sm:rounded-xl transition-all text-sm sm:text-base"
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