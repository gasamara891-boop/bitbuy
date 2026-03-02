'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const companyInfo = {
  name: 'Sterling Brokerage',
  description: 'Leading regulated cryptocurrency brokerage platform',
  founded: 2020,
  headquarters: 'Toronto, Ontario, Canada',
  address: '200 King Street West, Suite 1200, Toronto, ON M5H 3A9, Canada',
  coordinates: { lat: 43.6426, lng: -79.3871 },
  email: 'sterlingbroker.help@gmail.com',
  phone: '+1 (581) 584-8379',
  whatsapp: '+1 (581) 584-8379',
  operatingHours: {
    weekday: '24/7 Support',
    weekend: 'Available'
  }
};

const companyStats = [
  { label: 'Active Users', value: '23K+' },
  { label: 'Trading Volume', value: '$13.8B+' },
  { label: 'Cryptocurrencies', value: '150+' },
  { label: 'Countries Served', value: '50+' }
];



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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 pt-20 sm:pt-32 md:pt-40 lg:pt-48 pb-12 sm:pb-16 md:pb-20 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="w-full max-w-6xl lg:max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 md:mb-20 px-2"
        >
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-blue-400" />
            <span className="text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-widest whitespace-nowrap">
              Get in Touch
            </span>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Contact {companyInfo.name}
          </h1>

          <p className="text-base xs:text-lg sm:text-xl md:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light px-1">
            Have questions about cryptocurrency trading? Our expert team is here to help you 24/7. Reach out to us through any of our contact channels.
          </p>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20 px-2"
        >
          {companyStats.map((stat, idx) => (
            <div key={idx} className="text-center py-4 xs:py-5 sm:py-6">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-xs xs:text-sm text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20">

          {/* Left Column - Contact Info & Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Quick Contact</h2>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-5 xs:p-6 sm:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800/60"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-6 h-6 xs:w-7 xs:h-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm xs:text-base mb-1">Email</h3>
                  <p className="text-slate-400 text-xs xs:text-sm group-hover:text-blue-300 transition-colors">
                    {companyInfo.email}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">Response within 2 hours</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-5 xs:p-6 sm:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800/60"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    <Phone className="w-6 h-6 xs:w-7 xs:h-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm xs:text-base mb-1">Phone</h3>
                  <p className="text-slate-400 text-xs xs:text-sm group-hover:text-blue-300 transition-colors">
                    {companyInfo.phone}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">Available 24/7</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-5 xs:p-6 sm:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800/60"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    <MessageSquare className="w-6 h-6 xs:w-7 xs:h-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm xs:text-base mb-1">WhatsApp</h3>
                  <p className="text-slate-400 text-xs xs:text-sm group-hover:text-blue-300 transition-colors">
                    {companyInfo.whatsapp}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">Instant messaging</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex gap-4 p-5 xs:p-6 sm:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer hover:bg-slate-800/60"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    <Clock className="w-6 h-6 xs:w-7 xs:h-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm xs:text-base mb-1">Operating Hours</h3>
                  <p className="text-slate-400 text-xs xs:text-sm group-hover:text-blue-300 transition-colors">
                    {companyInfo.operatingHours.weekday}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">No holidays, always open</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-700/50"
            >
              
            
            </motion.div>

          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-full"
          >
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 p-6 xs:p-7 sm:p-8 md:p-10 backdrop-blur-xl h-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Send us a Message</h2>
              <p className="text-slate-400 text-sm xs:text-base mb-6 xs:mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">

                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 xs:px-5 py-3 xs:py-3.5 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 xs:px-5 py-3 xs:py-3.5 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 xs:px-5 py-3 xs:py-3.5 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 xs:px-5 py-3 xs:py-3.5 rounded-lg bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 xs:p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-300 text-sm"
                  >
                    {submitMessage}
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 xs:py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 disabled:from-slate-600 disabled:to-slate-700 text-slate-900 font-bold text-sm xs:text-base rounded-lg transition-all duration-300 shadow-2xl shadow-blue-500/40"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

              </form>
            </div>
          </motion.div>

        </div>

        {/* Company Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20"
        >

          {/* Company Details */}
          <div className="space-y-6 px-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About {companyInfo.name}</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Headquarters</h3>
                  <p className="text-slate-400">{companyInfo.headquarters}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  📅
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Founded</h3>
                  <p className="text-slate-400">{companyInfo.founded}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  ��
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Global Presence</h3>
                  <p className="text-slate-400">Serving 85+ countries with 24/7 multilingual support</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  🔒
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Security & Compliance</h3>
                  <p className="text-slate-400">Fully regulated with bank-grade security and insurance coverage</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  💰
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Trading Volume</h3>
                  <p className="text-slate-400">Over $2.5B in monthly trading volume across all platforms</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white px-2">Visit Us</h2>
            
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/50 h-96 sm:h-80 md:h-96">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.010375665609!2d-79.38809422382346!3d43.6479524711024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cd77af2121%3A0x6aa4bf1c74184986!2s200%20King%20Street%20West%2C%20200%20King%20St%20W%20%231200%2C%20Toronto%2C%20ON%20M5H%204H2%2C%20Canada!5e0!3m2!1sen!2sng!4v1772457387012!5m2!1sen!2sng=${encodeURIComponent(companyInfo.address)}`}
              />
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl sm:rounded-2xl p-5 xs:p-6 sm:p-7">
              <h3 className="font-bold text-white mb-3">Office Address</h3>
              <p className="text-slate-300 text-sm xs:text-base leading-relaxed">
                {companyInfo.address}
              </p>
              <p className="text-slate-400 text-xs xs:text-sm mt-4">
                📍 Located in downtown Toronto, Canada<br />
                🚇 Close to major transit hubs<br />
                🅿️ Free parking available
              </p>
            </div>
          </div>

        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-900/20 via-slate-800/20 to-blue-900/20 border border-blue-500/10 p-6 xs:p-8 sm:p-10 md:p-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Extra FAQs</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What is the minimum deposit to start trading?',
                a: 'Our minimum deposit is $100. However, we recommend starting with $1,000 or more to build a diversified portfolio.'
              },
              {
                q: 'Are there any hidden fees?',
                a: 'No. We are completely transparent with our pricing. All fees are displayed upfront before you complete any transaction.'
              },
              {
                q: 'How long does account verification take?',
                a: 'Standard verification takes 1-3 minutes. Enhanced verification may take 10 minutes depending on your location.'
              },
              {
                q: 'Can I withdraw my funds anytime?',
                a: 'Yes! Withdrawals are processed instantly with no lockup period. Funds are typically received within 5 minutes.'
              },
              {
                q: 'What cryptocurrencies can I trade?',
                a: 'We support 150+ cryptocurrencies including Bitcoin, Ethereum, and many altcoins. New coins are added regularly.'
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-5 xs:p-6 hover:border-blue-500/30 transition-all duration-300"
              >
                <h3 className="font-bold text-white mb-2 text-sm xs:text-base">{faq.q}</h3>
                <p className="text-slate-400 text-sm xs:text-base">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}