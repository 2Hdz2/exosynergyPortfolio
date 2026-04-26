"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Telescope, Zap, Sparkles, ArrowRight, Orbit, Star } from "lucide-react";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full py-20 px-4 md:px-8 relative overflow-hidden">
      <style>{`
        @keyframes orbitSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.4)); }
          50% { filter: drop-shadow(0 0 24px rgba(59, 130, 246, 0.8)); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-orbit-slow { animation: orbitSlow 30s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />
        <div className="absolute -top-32 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s", animationDelay: "1s" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "2s" }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main container with backdrop blur */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 via-purple-900/70 to-slate-900/90 border border-cyan-500/20 p-8 md:p-16 shadow-2xl backdrop-blur-xl overflow-hidden relative">
          
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Floating accent elements */}
          <div className="absolute top-10 right-10 opacity-40 pointer-events-none">
            <Orbit className="w-24 h-24 text-cyan-400 animate-orbit-slow" strokeWidth={1} />
          </div>
          <div className="absolute bottom-10 left-10 opacity-30 pointer-events-none">
            <Star className="w-16 h-16 text-purple-400 animate-pulse" style={{ animationDuration: "3s" }} />
          </div>
          
          {/* Content */}
          <div className="flex flex-col items-center text-center space-y-8 relative z-20">
            
            {/* Icon with animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-blue-400 rounded-3xl blur-xl opacity-20 animate-pulse" style={{ animationDuration: "4s" }} />
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 backdrop-blur-xl">
                <Telescope className="w-16 h-16 text-cyan-300 animate-glow-pulse" strokeWidth={1.5} />
              </div>
            </div>

            {/* Heading with staggered animation */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
                Exoplanet Discovery
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-shimmer">
                  Suite
                </span>
              </h1>
            </div>

            {/* Description with improved typography */}
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
              Advanced AI-driven frameworks for detecting, characterizing, and analyzing exoplanets through hybrid approaches combining 
              <span className="font-semibold text-cyan-300"> transit photometry</span>, 
              <span className="font-semibold text-purple-300"> direct imaging</span>, and 
              <span className="font-semibold text-blue-300"> spectral analysis</span>.
            </p>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 group">
              <Link
                href="#components"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/50 hover:shadow-2xl group/btn transform hover:-translate-y-1 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5 group-hover/btn:animate-spin" />
                Explore Components
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact-us"
                className="px-8 py-4 border-2 border-cyan-400/60 text-cyan-300 hover:text-white hover:border-cyan-300 font-semibold rounded-xl transition-all duration-300 bg-cyan-950/20 hover:bg-cyan-900/40 backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Get In Touch
              </Link>
            </div>

            {/* Features with enhanced styling */}
            <div className="flex flex-wrap gap-3 justify-center pt-8">
              {[
                { icon: Zap, text: "Hybrid Detection", color: "from-cyan-400 to-cyan-600" },
                { icon: Sparkles, text: "Spectral Analysis", color: "from-purple-400 to-purple-600" },
                { icon: Star, text: "AI-Powered", color: "from-blue-400 to-blue-600" }
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div 
                    key={i}
                    className="px-5 py-3 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md text-sm font-medium text-white hover:border-white/40 transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-white/10 group cursor-default"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    {feat.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;