"use client"
import type React from "react";
import Image from "next/image";
import { Cover } from "../ui/cover";
import { Button } from "../ui/button";
import { 
  Rocket, 
  Telescope, 
  Sparkles, 
  Zap, 
  Star,
  ArrowRightIcon,
  Network,
  Orbit,
  Wind,
  Eye
} from "lucide-react";

const HeroSection = () => {
  const scrollToSection = <T extends HTMLElement>(
    e: React.MouseEvent<T>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative container mx-auto px-4 my-12 overflow-hidden">
      {/* Advanced exoplanet-themed cosmic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stellar nebula effects */}
        <div className="absolute -top-60 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/25 via-blue-600/15 to-transparent dark:from-cyan-900/30 dark:via-blue-950/20 rounded-full blur-3xl animate-pulse" 
          style={{ animation: 'floatBg 9s ease-in-out infinite' }} />
        <div className="absolute -bottom-60 -left-40 w-96 h-96 bg-gradient-to-tr from-violet-500/20 via-purple-600/10 to-transparent dark:from-violet-900/25 dark:via-purple-950/15 rounded-full blur-3xl" 
          style={{ animationDelay: '3s', animation: 'floatBg 11s ease-in-out infinite reverse' }} />
        <div className="absolute top-2/3 left-1/2 w-80 h-80 bg-gradient-to-br from-indigo-500/15 via-transparent to-cyan-500/10 dark:from-indigo-900/20 dark:to-cyan-900/15 rounded-full blur-3xl"
          style={{ animationDelay: '2s', animation: 'floatBg 13s ease-in-out infinite' }} />
        {/* Orbital particle effects */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-indigo-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <style>{`
        @keyframes floatBg {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(40px) scale(1.1); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes orbitalRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.08); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }

        @keyframes iconSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes iconPulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        @keyframes iconWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          75% { transform: rotate(8deg); }
        }

        @keyframes orbitalPath {
          0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
        }

        @keyframes shineEffect {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes planetOrbit {
          0% { transform: translateX(0) translateY(0) rotate(-12deg); }
          25% { transform: translateX(8px) translateY(-8px) rotate(0deg); }
          50% { transform: translateX(0) translateY(-14px) rotate(12deg); }
          75% { transform: translateX(-8px) translateY(-8px) rotate(0deg); }
          100% { transform: translateX(0) translateY(0) rotate(-12deg); }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 12px rgba(34, 197, 226, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(34, 197, 226, 0.9));
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes glow-pulse {
          0%, 100% { 
            text-shadow: 0 0 15px rgba(34, 197, 226, 0.3), 0 0 30px rgba(168, 85, 247, 0.2);
          }
          50% { 
            text-shadow: 0 0 30px rgba(34, 197, 226, 0.7), 0 0 50px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes floatInCircle {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(15px, -15px) scale(1.1) rotate(90deg); }
          50% { transform: translate(0, -25px) scale(1) rotate(180deg); }
          75% { transform: translate(-15px, -15px) scale(1.1) rotate(270deg); }
        }

        .animate-slide-left {
          animation: slideInLeft 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-right {
          animation: slideInRight 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-orbital-spin {
          animation: orbitalRotate 4s ease-in-out infinite;
        }

        .animate-icon-float {
          animation: iconFloat 3s ease-in-out infinite;
        }

        .animate-icon-spin {
          animation: iconSpin 8s linear infinite;
        }

        .animate-icon-pulse {
          animation: iconPulseScale 2s ease-in-out infinite;
        }

        .animate-icon-wiggle {
          animation: iconWiggle 2.5s ease-in-out infinite;
        }

        .animate-orbital-path {
          animation: orbitalPath 12s linear infinite;
        }

        .animate-planet-orbit {
          animation: planetOrbit 4s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        .animate-scale-in {
          animation: scaleIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2.5s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-float-circle {
          animation: floatInCircle 4s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }

        .cosmic-gradient {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%);
        }

        .glass-effect {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(34, 197, 226, 0.25);
        }

        .premium-heading {
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          line-height: 1.15;
          letter-spacing: -0.02em;
          font-weight: 900;
        }

        .icon-orbit {
          position: absolute;
          animation: planetOrbit 4s ease-in-out infinite;
        }

        .button-group:hover .button-primary {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(34, 197, 226, 0.5);
        }

        .badge-glow {
          background: linear-gradient(135deg, rgba(34, 197, 226, 0.15), rgba(168, 85, 247, 0.1));
          border: 1px solid rgba(34, 197, 226, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .badge-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .badge-glow:hover::before {
          left: 100%;
        }

        .badge-glow:hover {
          border-color: rgba(34, 197, 226, 0.6);
          background: linear-gradient(135deg, rgba(34, 197, 226, 0.25), rgba(168, 85, 247, 0.2));
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 30px rgba(34, 197, 226, 0.5), inset 0 0 20px rgba(34, 197, 226, 0.1);
        }

        .iconic-glow {
          position: relative;
        }

        .iconic-glow::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34, 197, 226, 0.3), transparent);
          animation: pulseGlow 2.5s ease-in-out infinite;
          pointer-events: none;
        }

        .pulse-ring {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          {/* Badge */}
          <div className="animate-slide-left flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-cyan-300">25-26J-249</span>
            </div>
          </div>

          {/* Animated exoplanet icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative inline-block animate-slide-left delay-100">
              <div className="relative w-24 h-24">
                {/* Outer glowing ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse-glow" />
                
                {/* Orbital ring */}
                <div className="absolute inset-2 rounded-full border-2 border-cyan-500/40 animate-orbital-spin shadow-lg shadow-cyan-500/20">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-400/60" />
                </div>
                
                {/* Inner rotating background */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-cyan-600/30 via-purple-600/20 to-blue-600/30 animate-icon-spin" />
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Telescope className="w-11 h-11 text-cyan-400 drop-shadow-lg filter drop-shadow-[0_0_10px_rgba(34,197,226,0.8)] animate-icon-float" strokeWidth={2} />
                </div>

                {/* Decorative particles */}
                <div className="absolute top-0 right-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-twinkle shadow-lg shadow-purple-400/50" />
                <div className="absolute -bottom-1 left-3 w-2 h-2 bg-cyan-400 rounded-full animate-twinkle opacity-70 shadow-md shadow-cyan-400/40" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="animate-slide-left delay-200 space-y-2">
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white relative leading-tight">
              <span className="block">Discovering</span>
              <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-glow-pulse">
                Distant Worlds
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-balance text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-light animate-slide-left delay-300 max-w-xl">
            Unlock the secrets of the cosmos with <span className="font-semibold text-cyan-600 dark:text-cyan-400">cutting-edge AI detection</span>, <span className="font-semibold text-purple-600 dark:text-purple-400">advanced spectroscopy</span>, and <span className="font-semibold text-blue-600 dark:text-blue-400">atmospheric analysis</span>.
          </p>

          {/* CTA Button with exoplanet styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 animate-slide-left delay-400 button-group">
            <Button
              className="group relative w-full sm:w-fit h-auto px-10 py-4 font-bold text-base overflow-hidden transition-all duration-300 shadow-xl shadow-cyan-500/40 hover:shadow-cyan-500/70 rounded-full"
              variant="secondary"
              onClick={(e) => scrollToSection(e, "gridGallery")}
            >
              <div className="absolute inset-0 cosmic-gradient opacity-95 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-full transition-transform duration-700 rounded-full" 
                style={{ transform: 'translateX(-100%)' }} />
              
              <span className="relative flex items-center justify-center gap-3 text-white">
                <Rocket
                  className="transition-all group-hover:scale-125 group-hover:rotate-12 group-hover:-translate-y-1 animate-icon-float"
                  size={20}
                  aria-hidden="true"
                  strokeWidth={2.5}
                />
                Explore All Components
                <ArrowRightIcon
                  className="transition-all group-hover:translate-x-2 group-hover:opacity-100 opacity-70"
                  size={20}
                  aria-hidden="true"
                  strokeWidth={2.5}
                />
              </span>
            </Button>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4 animate-slide-left delay-500">
            <div className="badge-glow group inline-flex items-center gap-2.5 px-5 py-3 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Eye className="w-5 h-5 text-cyan-500 dark:text-cyan-400 flex-shrink-0 relative group-hover:animate-icon-pulse" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">AI Detection</span>
            </div>
            <div className="badge-glow group inline-flex items-center gap-2.5 px-5 py-3 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Wind className="w-5 h-5 text-purple-500 dark:text-purple-400 flex-shrink-0 relative group-hover:animate-icon-wiggle" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Analysis</span>
            </div>
            <div className="badge-glow group inline-flex items-center gap-2.5 px-5 py-3 rounded-full hover:scale-110 transition-all duration-300 cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Network className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 relative group-hover:animate-icon-spin" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Integration</span>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center lg:justify-end animate-slide-right delay-200 relative group">
          <div className="relative w-full max-w-md lg:max-w-full">
            {/* Exoplanet-themed glowing backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-purple-500/20 to-blue-500/15 dark:from-cyan-900/25 dark:via-purple-900/20 dark:to-blue-900/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated orbital border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/20 dark:border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:border-cyan-400/50 dark:group-hover:border-cyan-500/50 animate-orbital-path" />

            {/* Image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-cyan-500/30 transition-all duration-500 transform group-hover:scale-105 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 to-transparent pointer-events-none" />
              
              <Image
                src="/images/exoplanet/homepage.gif"
                alt="Exoplanet discovery system overview"
                width={500}
                height={500}
                className="w-full max-w-md lg:max-w-full rounded-3xl object-cover transition-all duration-500"
                priority
              />
            </div>

            {/* Floating exoplanet decorative elements with enhanced animations */}
            <div className="absolute -top-8 -right-8 animate-scale-in delay-400">
              <div className="relative w-16 h-16 group/badge">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-blue-500/40 rounded-full blur-lg animate-pulse-glow group-hover/badge:scale-125 transition-transform duration-300" />
                <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full shadow-2xl shadow-cyan-400/60 flex items-center justify-center animate-float-circle group-hover/badge:animate-icon-spin">
                  <Star className="w-8 h-8 text-white drop-shadow-lg animate-icon-pulse" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 animate-scale-in delay-500 group/badge">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-indigo-500/40 rounded-full blur-lg" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full shadow-xl shadow-purple-500/50 flex items-center justify-center opacity-90 animate-bounce-gentle">
                  <Zap className="w-7 h-7 text-white drop-shadow-lg" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-10 animate-scale-in delay-400 opacity-75 group/sparkle hover:opacity-100">
              <Sparkles className="w-8 h-8 text-cyan-400 dark:text-cyan-300 animate-icon-spin drop-shadow-lg filter drop-shadow-[0_0_8px_rgba(34,197,226,0.6)]" strokeWidth={2.5} />
            </div>

            <div className="absolute bottom-1/3 -left-8 animate-scale-in delay-300 opacity-70 group/orbit">
              <div className="relative w-8 h-8">
                <Orbit className="w-8 h-8 text-purple-500 dark:text-purple-400 animate-icon-wiggle filter drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;