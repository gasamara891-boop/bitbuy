"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { getImagePrefix } from "@/utils/utils";

/**
 * Carousel Hero — Images as background
 *
 * - Each slide uses the image as a CSS background (cover, centered).
 * - Text content sits in a semitransparent/blurred panel for readability.
 * - Retains autoplay, swipe, keyboard, accessible labels, and animated text.
 *
 * Notes:
 * - getImagePrefix() is used to build the background url at runtime.
 * - Keep this a "use client" component (already set).
 */

type Slide = {
  id: string;
  eyebrow?: string;
  title: string; // supports <highlight>...</highlight> markers
  subtitle?: string;
  ctas?: { label: string; href: string; variant?: "primary" | "ghost" }[];
  image?: string; // path after getImagePrefix()
  bg?: string; // optional overlay gradient CSS
};

const slides: Slide[] = [
  {
    id: "sci-fi-strategies",
    eyebrow: "Crypto On The Go",
    title: "Trade the Market with <highlight>Sci‑Fi Strategies</highlight>",
    subtitle:
      "AI-powered signals, real-time insights, and neural strategies to keep you ahead.",
    ctas: [
      { label: "Get Started", href: "#get-started", variant: "primary" },
      { label: "Learn More", href: "#features", variant: "ghost" },
    ],
    image: "images/hero/banner-image.png",
    bg: "linear-gradient(135deg, rgba(10,10,10,0.45), rgba(10,10,10,0.15))",
  },
  {
    id: "fast-execution",
    eyebrow: "Low Latency",
    title: "Execute <highlight>Faster</highlight>, Trade Smarter",
    subtitle: "Optimized execution stack with predictive routing and minimal slippage.",
    ctas: [{ label: "See Performance", href: "#performance", variant: "ghost" }],
    image: "images/hero/banner-image-2.jpg",
    bg: "linear-gradient(135deg, rgba(7,10,30,0.45), rgba(7,10,30,0.1))",
  },
  {
    id: "mobile-first",
    eyebrow: "Always On",
    title: "<highlight>Mobile‑First</highlight> Experience — Trade Anywhere",
    subtitle: "Beautiful native-like app experience for traders on the move.",
    ctas: [{ label: "Download App", href: "#download", variant: "primary" }],
    image: "images/hero/banner-image-3.png",
    bg: "linear-gradient(135deg, rgba(20,10,15,0.45), rgba(20,10,15,0.12))",
  },
];

const AUTO_PLAY_DELAY = 5000;
const SWIPE_THRESHOLD = 40; // pixels

const variants = {
  slideEnter: { opacity: 0, x: 40, scale: 0.995 },
  slideCenter: { opacity: 1, x: 0, scale: 1 },
  slideExit: { opacity: 0, x: -40, scale: 0.995 },
};

const textVariants = {
  container: {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  },
  char: {
    hidden: { y: 12, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.42 } },
  },
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);

  // swipe handling
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const total = slides.length;

  const go = useCallback(
    (next: number) => {
      setIndex((i) => {
        const resolved = (next + total) % total;
        return resolved;
      });
    },
    [total]
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_PLAY_DELAY);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    };
  }, [paused, total]);

  // Pause on window blur
  useEffect(() => {
    const onBlur = () => setPaused(true);
    const onFocus = () => setPaused(false);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    return () => {
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Pointer / touch handlers for swipe
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    deltaX.current = 0;
    try {
      ;(e.target as Element).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.clientX - startX.current;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const totalDelta = deltaX.current;
    startX.current = null;
    deltaX.current = 0;
    if (Math.abs(totalDelta) > SWIPE_THRESHOLD) {
      if (totalDelta < 0) setIndex((i) => (i + 1) % total);
      else setIndex((i) => (i - 1 + total) % total);
    }
  };

  // Robust title parser: returns array of { text, highlighted }
  const parseTitle = (title: string) => {
    const res: { text: string; highlighted: boolean }[] = [];
    const regex = /<highlight>([\s\S]*?)<\/highlight>/gi;
    regex.lastIndex = 0;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(title)) !== null) {
      if (match.index > lastIndex) {
        res.push({ text: title.slice(lastIndex, match.index), highlighted: false });
      }
      res.push({ text: match[1], highlighted: true });
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < title.length) {
      res.push({ text: title.slice(lastIndex), highlighted: false });
    }
    return res;
  };

  return (
    <section
      id="main-carousel"
      className="relative py-12 md:py-16 lg:py-20 overflow-visible"
      aria-roledescription="carousel"
    >
      <div className="container mx-auto px-4 lg:max-w-screen-xl">
        <div
          className="relative rounded-2xl overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Slides container: responsive heights */}
          <div
            className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[620px]"
            ref={containerRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              startX.current = null;
              deltaX.current = 0;
            }}
          >
            <AnimatePresence initial={false} mode="wait">
              {slides.map((slide, sIdx) =>
                sIdx === index ? (
                  <motion.div
                    key={slide.id}
                    initial="slideEnter"
                    animate="slideCenter"
                    exit="slideExit"
                    variants={variants}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      backgroundImage: slide.image
                        ? `url(${getImagePrefix()}${slide.image})`
                        : undefined,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    aria-hidden={sIdx === index ? "false" : "true"}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${sIdx + 1} of ${total}`}
                  >
                    {/* optional overlay to ensure text contrast */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: slide.bg ?? "linear-gradient(135deg, rgba(0,0,0,0.38), rgba(0,0,0,0.08))",
                        backdropFilter: "saturate(120%) blur(4px)",
                      }}
                      aria-hidden
                    />

                    {/* Content panel */}
                    <div className="relative w-full max-w-6xl px-4">
                      <div className="flex flex-col-reverse lg:flex-row items-center">
                        {/* Text panel */}
                        <div className="w-full lg:w-6/12 px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-12">
                          {slide.eyebrow && (
                            <motion.p
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.36 }}
                              className="text-white/85 mb-2 text-xs sm:text-sm"
                            >
                              {slide.eyebrow}
                            </motion.p>
                          )}

                          <motion.h2
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-3 sm:mb-4"
                          >
                            <motion.span
                              variants={textVariants.container}
                              initial="hidden"
                              animate="show"
                              className="inline-block"
                            >
                              {parseTitle(slide.title).map((chunk, i) => {
                                const chars = Array.from(chunk.text);
                                const isHighlight = chunk.highlighted;
                                return (
                                  <span
                                    key={i}
                                    className={`inline-block mr-1 ${isHighlight ? "text-primary font-semibold" : "font-medium"}`}
                                    aria-hidden="false"
                                  >
                                    {chars.map((ch, ci) => (
                                      <motion.span
                                        key={ci}
                                        variants={textVariants.char}
                                        className="inline-block"
                                        style={{ display: "inline-block" }}
                                      >
                                        {ch}
                                      </motion.span>
                                    ))}
                                  </span>
                                );
                              })}
                            </motion.span>
                          </motion.h2>

                          {slide.subtitle && (
                            <motion.p
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.56, delay: 0.04 }}
                              className="text-white/85 max-w-xl mb-4 sm:mb-6 text-sm sm:text-base"
                            >
                              {slide.subtitle}
                            </motion.p>
                          )}

                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.12 }}
                            className="flex flex-wrap gap-3"
                          >
                            {slide.ctas?.map((cta) => (
                              <Link
                                key={cta.label}
                                href={cta.href}
                                className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold transition-transform duration-200 ${
                                  cta.variant === "primary"
                                    ? "bg-primary text-black hover:scale-[1.03]"
                                    : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                              >
                                {cta.label}
                              </Link>
                            ))}
                          </motion.div>
                        </div>

                        {/* Decorative right spacer (keeps layout balanced on large screens) */}
                        <div className="hidden lg:block lg:w-6/12" />
                      </div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>

            {/* Prev/Next Controls (always visible and tappable on mobile) */}
            <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 flex justify-between items-center z-20">
              <button
                onClick={() => {
                  prev();
                }}
                aria-label="Previous slide"
                className="bg-black/40 hover:bg-black/55 text-white p-2.5 rounded-full shadow-md transition pointer-events-auto"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>

              <button
                onClick={() => {
                  next();
                }}
                aria-label="Next slide"
                className="bg-black/40 hover:bg-black/55 text-white p-2.5 rounded-full shadow-md transition pointer-events-auto"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                </svg>
              </button>
            </div>

            {/* Progress Dots */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 sm:bottom-6 z-30 flex gap-2 sm:gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all ${
                    i === index ? "bg-white w-6 h-2.5 rounded-full" : "bg-white/40 w-2.5 h-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle decorative blur (kept from your original design) */}
      <div className="absolute w-48 h-48 bg-gradient-to-bl from-tealGreen to-charcoalGray blur-[280px] rounded-full -top-24 -right-6 -z-10 hidden md:block" />
    </section>
  );
};

export default Hero;