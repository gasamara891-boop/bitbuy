"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    startLoading();
  }, []);

  useEffect(() => {
    startLoading();
  }, [pathname]);

  const startLoading = () => {
    setLoading(true);
    setProgress(0);

    let value = 0;
    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 4;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 400);
      }
      setProgress(value);
    }, 100);
  };

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black overflow-hidden z-[9999] text-cyan-400 font-mono px-4">

      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg"></div>

      {/* Scan Line */}
      <div className="scan-line"></div>

      <div className="relative flex flex-col items-center space-y-6 sm:space-y-8 w-full max-w-md">

        {/* Energy Core */}
        <div className="relative flex items-center justify-center w-[50vw] max-w-[260px] aspect-square">

          <div className="absolute w-full h-full border border-cyan-400/20 rounded-full animate-spin-slow"></div>
          <div className="absolute w-[70%] h-[70%] border border-purple-500/30 rounded-full animate-spin-reverse"></div>
          <div className="w-[35%] h-[35%] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse-glow shadow-[0_0_40px_#00f0ff]"></div>

        </div>

        {/* Glitch Text */}
        <div className="relative text-sm sm:text-lg md:text-xl tracking-widest text-center glitch px-2">
          INITIALIZING PROTOCOL...
        </div>

        {/* Percentage */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wider">
          {progress}%
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-cyan-900/40 rounded overflow-hidden">
          <div
            className="h-full bg-cyan-400 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

      <style jsx>{`
        .grid-bg {
          background-image:
            linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: moveGrid 12s linear infinite;
        }

        @keyframes moveGrid {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }

        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: rgba(0, 255, 255, 0.4);
          animation: scan 4s linear infinite;
          box-shadow: 0 0 20px cyan;
        }

        @keyframes scan {
          0% { top: 0%; opacity: 0.2; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0.2; }
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        .animate-spin-reverse {
          animation: spinReverse 7s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 30px #00f0ff;
          }
          50% {
            transform: scale(1.2);
            box-shadow: 0 0 60px #00f0ff, 0 0 100px #8b5cf6;
          }
        }

        .glitch {
          position: relative;
          color: #00ffff;
        }

        .glitch::before,
        .glitch::after {
          content: "INITIALIZING PROTOCOL...";
          position: absolute;
          left: 0;
          width: 100%;
          text-align: center;
        }

        .glitch::before {
          animation: glitchTop 1.5s infinite linear alternate-reverse;
          color: #ff00ff;
        }

        .glitch::after {
          animation: glitchBottom 1.2s infinite linear alternate-reverse;
          color: #00ff00;
        }

        @keyframes glitchTop {
          0% { clip-path: inset(0 0 85% 0); transform: translate(-2px, -2px); }
          50% { clip-path: inset(0 0 40% 0); transform: translate(2px, 2px); }
          100% { clip-path: inset(0 0 75% 0); transform: translate(-1px, 1px); }
        }

        @keyframes glitchBottom {
          0% { clip-path: inset(60% 0 0 0); transform: translate(2px, 0); }
          50% { clip-path: inset(30% 0 0 0); transform: translate(-2px, 0); }
          100% { clip-path: inset(80% 0 0 0); transform: translate(1px, 0); }
        }
      `}</style>
    </div>
  );
}