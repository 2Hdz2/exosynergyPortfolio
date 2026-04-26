"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Orbit, Sparkles, Rocket, Star, Lightbulb, Zap, Telescope, Radio, Users2, Code2, BarChart3, Crown } from "lucide-react";

const people = [
  { id: 1, name: "Heidi", designation: "Project Lead", image: "/images/members/Heidi.png", roleIcon: Users2, color: "indigo" },
  { id: 2, name: "Kaveesha", designation: "Researcher", image: "/images/members/Kaveesha.png", roleIcon: Lightbulb, color: "green" },
  { id: 3, name: "Chamudi", designation: "Lead Developer", image: "/images/members/Chamudi.png", roleIcon: Code2, color: "orange" },
  { id: 4, name: "Akila", designation: "Data Scientist", image: "/images/members/Akila.png", roleIcon: BarChart3, color: "rose" },
];

const ContributorPreview = () => {
  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-slate-950 via-purple-950/40 to-slate-950 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.7)); }
        }

        @keyframes shimmerText {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes roleIconFloat {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-6px) translateX(3px) rotate(5deg); }
          66% { transform: translateY(-3px) translateX(-3px) rotate(-5deg); }
        }

        @keyframes roleIconPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        @keyframes roleIconSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 2.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmerText 3s infinite;
        }

        .animate-role-icon-float {
          animation: roleIconFloat 3s ease-in-out infinite;
        }

        .animate-role-icon-pulse {
          animation: roleIconPulse 2.5s ease-in-out infinite;
        }

        .animate-role-icon-spin {
          animation: roleIconSpin 6s linear infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }

        .role-icon-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          border: 2px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .role-icon-badge::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          opacity: 0.5;
          filter: blur(10px);
          z-index: -1;
        }
      `}</style>

      {/* Animated cosmic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Floating icon elements with enhanced styling */}
        <div className="inline-flex gap-6 mb-10 justify-center items-center animate-slide-in-up">
          {[
            { Icon: Rocket, color: "text-cyan-400", delay: "0s", bg: "from-cyan-500/20 to-blue-500/10" },
            { Icon: Sparkles, color: "text-purple-400", delay: "0.5s", bg: "from-purple-500/20 to-pink-500/10" },
            { Icon: Star, color: "text-amber-400", delay: "1s", bg: "from-amber-500/20 to-orange-500/10" },
            { Icon: Orbit, color: "text-pink-400", delay: "1.5s", bg: "from-pink-500/20 to-rose-500/10" },
          ].map((item, idx) => {
            const { Icon, color, delay, bg } = item;
            return (
              <div 
                key={idx}
                className="relative animate-float" 
                style={{ animationDelay: delay }}
              >
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${bg} blur-lg`} />
                <div className="relative p-3 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm">
                  <Icon className={`${color} animate-pulse-glow`} size={36} strokeWidth={1.5} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Title */}
        <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight animate-slide-in-up delay-100">
          Stellar Minds
          <div className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-shimmer">
            Exploring Worlds
          </div>
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-light animate-slide-in-up delay-200">
          Our cosmic team unites <span className="font-bold text-cyan-300">advanced AI engineering</span> with 
          <span className="font-bold text-purple-300"> exoplanet science</span> to revolutionize the discovery of 
          <span className="font-bold text-pink-300"> worlds beyond our solar system</span>.
        </p>

        {/* Team Section */}
        <div className="flex flex-col items-center justify-center space-y-10">
          {/* Team Card */}
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/30 hover:border-cyan-400/60 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 group shadow-xl">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 backdrop-blur-sm hover:border-cyan-400/70 transition-all duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md" />
                  <Telescope className="w-5 h-5 text-cyan-400 relative animate-role-icon-spin" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-widest">Elite Contributors</span>
                <div className="relative">
                  <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-md" />
                  <Radio className="w-5 h-5 text-pink-400 relative animate-role-icon-float" strokeWidth={2.5} />
                </div>
              </div>
            </div>
            <AnimatedTooltip items={people} />
          </div>

          {/* Elite Badge */}
          <div className="flex items-center gap-8 flex-wrap justify-center animate-slide-in-up">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-pink-500/20 border border-amber-400/40 backdrop-blur-sm hover:border-amber-400/70 transition-all duration-300 group">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/30 rounded-full blur-md" />
                <Lightbulb className="w-5 h-5 text-amber-400 relative animate-role-icon-pulse" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-widest">Exoplanet Discovery Elite</span>
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-md" />
                <Zap className="w-5 h-5 text-pink-400 relative animate-role-icon-pulse group-hover:animate-role-icon-spin" strokeWidth={2.5} />
              </div>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-purple-500 to-transparent" />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 mt-12 w-full max-w-2xl animate-slide-in-up">
            {[
              { number: "4", label: "Core Team Members", icon: Star, color: "from-cyan-500/20 to-blue-500/20", iconColor: "text-cyan-400" },
              { number: "4", label: "AI Components", icon: Sparkles, color: "from-purple-500/20 to-pink-500/20", iconColor: "text-purple-400" },
              { number: "∞", label: "Exoplanets Discoverable", icon: Orbit, color: "from-amber-500/20 to-orange-500/20", iconColor: "text-amber-400" },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl bg-gradient-to-br ${stat.color} border border-white/20 hover:border-white/40 transition-all duration-300 group/stat backdrop-blur-sm hover:shadow-lg`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative mb-3 flex justify-center">
                    <div className="absolute inset-0 flex justify-center">
                      <div className={`w-12 h-12 ${stat.color.replace('bg-gradient-to-br ', '').replace('/20', '/30')} rounded-full blur-lg absolute`} />
                    </div>
                    <Icon className={`${stat.iconColor} group-hover/stat:scale-125 transition-transform w-6 h-6 relative animate-role-icon-float`} />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white mb-2 group-hover/stat:text-transparent group-hover/stat:bg-clip-text group-hover/stat:bg-gradient-to-r transition-all duration-300">{stat.number}</div>
                  <p className="text-xs text-slate-300 uppercase tracking-wide font-semibold">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorPreview;