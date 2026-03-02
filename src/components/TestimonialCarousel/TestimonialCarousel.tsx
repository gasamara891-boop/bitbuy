"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { motion, useInView } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating?: number;
  badge?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Sterling redefined my portfolio experience. Real-time insights, instant withdrawals, and that sleek dashboard — it's like investing in the future.",
    name: "Sophia E.",
    role: "Verified Investor",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
    badge: "TOP TRADER",
  },
  {
    id: "t2",
    quote: "Feels like managing assets inside a spaceship. Secure, fast, and visually insane!",
    name: "Michael R.",
    role: "Crypto Enthusiast",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5,
    badge: "EARLY ADOPTER",
  },
  {
    id: "t3",
    quote:
      "That futuristic theme, combined with flawless performance, makes Sterling my daily go-to platform.",
    name: "Grace N.",
    role: "Verified Investor",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 4,
    badge: "POWER USER",
  },
  {
    id: "t4",
    quote:
      "The holographic UI is unmatched. Every interaction feels alive — like trading in 2080.",
    name: "David K.",
    role: "Tech Entrepreneur",
    avatar: "/images/avatars/avatar-4.jpg",
    rating: 5,
    badge: "VERIFIED",
  },
];

export default function TestimonialCarousel(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    beforeChange: (_: number, next: number) => setCurrent(next),
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 md:py-28 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Cursor glow (hidden on small screens) */}
      <motion.div
        className="hidden md:block pointer-events-none absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
        }}
      />

      <div className="container mx-auto max-w-screen-xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-4 py-2 border border-cyan-500/30 rounded-full bg-cyan-500/5">
            [ CLIENT TESTIMONIALS ]
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Trusted by <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Thousands of Traders
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto mt-6">
            Join our thriving community of investors experiencing the future of decentralized trading.
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={testimonial.id} className="px-2 sm:px-4">
              <motion.div
                whileHover={{ y: -6 }}
                className="relative group h-full"
              >
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-500 backdrop-blur-sm h-full flex flex-col">
                  
                  <span className="text-xs font-mono uppercase tracking-widest text-green-400 mb-4">
                    ✓ {testimonial.badge}
                  </span>

                  <blockquote className="text-slate-300 text-sm sm:text-base italic leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < (testimonial.rating ?? 5)
                            ? "text-amber-400"
                            : "text-slate-700"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full border-2 border-cyan-500"
                    />
                    <div>
                      <p className="text-white font-bold text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-slate-400 text-xs font-mono uppercase tracking-wide">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            Ready to start your trading journey?
          </p>

          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-slate-900 border border-cyan-500 text-white font-mono font-bold text-sm sm:text-base uppercase tracking-widest rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300">
            Sterling Community reviews
          </button>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: -30px;
        }
        .slick-dots li button:before {
          color: #22d3ee;
        }
      `}</style>
    </section>
  );
}