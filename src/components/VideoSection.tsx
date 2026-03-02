"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Video {
  id: string;
  title: string;
  speaker: string;
  description: string;
  videoSrc: string;
  duration: string;
}

const VIDEOS: Video[] = [
  {
    id: "v1",
    title: "Trump on Crypto Currency",
    speaker: "Donald Trump",
    description: "Insights on cryptocurrency and decentralized finance",
    videoSrc: "/video/trump.mp4",
    duration: "0:13",
  },
  {
    id: "v2",
    title: "Trump on Crypto",
    speaker: "Donald Trump",
    description: "The future of blockchain technology and its applications",
    videoSrc: "/video/trump2.mp4",
    duration: "0:31",
  },
  {
    id: "v3",
    title: "Digital currency",
    speaker: "Elon Musk",
    description: "How blockchain is revolutionizing the financial landscape",
    videoSrc: "/video/musk.mp4",
    duration: "0:12",
  },
];

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const handlePlayVideo = (videoId: string) => {
    Object.keys(videoRefs.current).forEach((key) => {
      if (key !== videoId && videoRefs.current[key]) {
        videoRefs.current[key]!.pause();
      }
    });

    setSelectedVideo(selectedVideo === videoId ? null : videoId);

    setTimeout(() => {
      if (videoRefs.current[videoId] && selectedVideo !== videoId) {
        videoRefs.current[videoId]?.play();
      }
    }, 100);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
    Object.keys(videoRefs.current).forEach((key) => {
      if (videoRefs.current[key]) {
        videoRefs.current[key]!.pause();
      }
    });
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-8 sm:py-12 md:py-20 lg:py-28 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 z-0 hidden sm:block"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -bottom-40 -left-40 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 z-0 hidden sm:block"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 px-2 sm:px-0"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full backdrop-blur-md"
          >
            <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-cyan-400"></span>
            </span>
            <span className="text-9 sm:text-10 md:text-11 lg:text-12 font-medium text-cyan-400 uppercase tracking-widest">
              INSIGHT VAULT
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="text-18 sm:text-24 md:text-32 lg:text-44 font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
            Industry Leaders Speak
            <br className="hidden xs:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
              About Crypto & Blockchain
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-10 sm:text-11 md:text-13 lg:text-15 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Watch insights from visionary leaders on cryptocurrency, blockchain technology, and the future of decentralized finance
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-16 lg:mb-20"
        >
          {VIDEOS.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              className="group cursor-pointer relative h-full"
            >
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg" />

              {/* Card Container */}
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-lg sm:rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-cyan-400/50 transition-all duration-500 h-full flex flex-col backdrop-blur-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/20">

                {/* Top Accent Bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-tl-lg sm:rounded-tl-2xl z-20"
                />

                {/* Video Container - FIX: Use object-center with cover to prevent head cropping */}
                <div className="relative w-full aspect-video overflow-hidden bg-black rounded-t-lg sm:rounded-t-2xl">
                  {selectedVideo === video.id ? (
                    // Video Player
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[video.id] = el;
                      }}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      onEnded={() => handleCloseVideo()}
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    // Thumbnail Placeholder
                    <>
                      {/* Gradient Placeholder Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black" />

                      {/* Video Icon Background */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <svg className="w-16 sm:w-20 h-16 sm:h-20 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>

                      {/* Play Button Overlay */}
                      <motion.div
                        animate={hoveredVideo === video.id ? { scale: 1.1 } : { scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/40 to-transparent via-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        onClick={() => handlePlayVideo(video.id)}
                      >
                        <motion.div
                          animate={hoveredVideo === video.id ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                          transition={{ duration: 0.6, repeat: hoveredVideo === video.id ? Infinity : 0 }}
                          className="w-14 sm:w-18 md:w-20 h-14 sm:h-18 md:h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70"
                        >
                          <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </motion.div>
                      </motion.div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 bg-black/70 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded text-white text-9 sm:text-10 md:text-11 font-mono z-10">
                        {video.duration}
                      </div>

                      {/* Click to Play Text */}
                      <div className="absolute inset-0 flex items-end justify-center pb-3 sm:pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <span className="text-white text-9 sm:text-10 md:text-11 font-semibold bg-black/60 backdrop-blur px-2.5 sm:px-3 py-1 rounded">
                          Click to Play
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-grow relative z-10">

                  {/* Speaker Badge */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={hoveredVideo === video.id ? { opacity: 1 } : { opacity: 0.7 }}
                    className="inline-flex items-center gap-1.5 mb-2 sm:mb-2.5 md:mb-3 w-fit"
                  >
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
                    <span className="text-cyan-400 font-mono text-9 sm:text-10 md:text-11 lg:text-12 uppercase tracking-widest">
                      {video.speaker}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-13 sm:text-14 md:text-16 lg:text-18 font-bold text-white mb-1.5 sm:mb-2 md:mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 leading-snug">
                    {video.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-10 sm:text-11 md:text-12 lg:text-14 mb-3 sm:mb-4 md:mb-5 flex-grow line-clamp-2 group-hover:text-slate-300 transition-colors duration-300">
                    {video.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => handlePlayVideo(video.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    animate={hoveredVideo === video.id ? { x: 5 } : { x: 0 }}
                    className="flex items-center justify-start text-cyan-400 font-mono text-9 sm:text-10 md:text-11 lg:text-12 uppercase tracking-widest hover:text-cyan-300 transition-colors text-left bg-gradient-to-r from-cyan-500/10 to-transparent hover:from-cyan-500/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded w-fit"
                  >
                    <span className="whitespace-nowrap">{selectedVideo === video.id ? "Playing..." : "Watch Video"}</span>
                    <motion.span
                      animate={hoveredVideo === video.id ? { x: 3 } : { x: 0 }}
                      className="ml-1.5 sm:ml-2"
                    >
                      {selectedVideo === video.id ? "▶" : "→"}
                    </motion.span>
                  </motion.button>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-lg sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 backdrop-blur-xl"
        >
          <p className="text-slate-300 text-11 sm:text-12 md:text-14 lg:text-16 mb-4 sm:mb-5 md:mb-6 lg:mb-8 max-w-2xl mx-auto px-2">
            Discover insights from industry pioneers on the future of decentralized finance
          </p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-5 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-bold text-10 sm:text-11 md:text-12 lg:text-14 uppercase tracking-widest rounded-lg sm:rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl whitespace-nowrap"
          >
            Coming Soon
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}