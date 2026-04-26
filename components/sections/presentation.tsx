"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Rocket,
  Globe,
  Zap,
  Star,
  Telescope,
  Radio,
  ArrowUpRight,
  Orbit,
  Lightbulb,
  Waves
} from "lucide-react";
import Link from "next/link";

const presentations = [
  {
    title: "Proposal Presentation",
    description: "Initial concept presentation to the panel and supervisor",
    icon: <Rocket className="w-6 h-6" />,
    link: "#",
    badge: "Phase 1",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-600/20",
    textColor: "text-cyan-400",
  },
  {
    title: "Progress Presentation 1",
    description: "Mid-stage progress update at 50% development",
    icon: <Orbit className="w-6 h-6" />,
    link: "#",
    badge: "Phase 2",
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-600/20",
    textColor: "text-purple-400",
  },
  {
    title: "Progress Presentation 2",
    description: "Advanced progress update at 90% development",
    icon: <Zap className="w-6 h-6" />,
    link: "#",
    badge: "Phase 3",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-600/20",
    textColor: "text-amber-400",
  },
  {
    title: "Final Presentation",
    description: "Comprehensive final presentation of completed system",
    icon: <Star className="w-6 h-6" />,
    link: "#",
    badge: "Phase 4",
    color: "from-yellow-500 to-amber-600",
    bgColor: "bg-yellow-600/20",
    textColor: "text-yellow-400",
  },
  {
    title: "Research Poster",
    description: "Visual summary of research objectives and findings",
    icon: <Telescope className="w-6 h-6" />,
    link: "#",
    badge: "Output",
    color: "from-indigo-500 to-purple-600",
    bgColor: "bg-indigo-600/20",
    textColor: "text-indigo-400",
  },
  {
    title: "Live Demo",
    description: "Live demonstration of the fully functional system",
    icon: <Waves className="w-6 h-6" />,
    link: "#",
    badge: "Demo",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-600/20",
    textColor: "text-emerald-400",
  },
];

export default function Presentations() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950 relative overflow-hidden" id="presentations">
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl" style={{ animationDuration: '12s', animationDelay: '1s' }} />
      </div>

      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(34, 197, 226, 0.4)); }
          50% { filter: drop-shadow(0 0 20px rgba(34, 197, 226, 0.7)); }
        }
        
        @keyframes orbit-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes border-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        .animate-float-up {
          animation: float-up 3.5s ease-in-out infinite;
        }

        .animate-glow-icon {
          animation: glow-pulse 2.5s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit-rotate 6s linear infinite;
        }

        .card-gradient {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 82, 0.6));
        }

        .card-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, currentColor, transparent);
          opacity: 0;
          transition: left 0.8s ease, opacity 0.5s ease;
        }

        .group:hover .card-gradient::before {
          opacity: 0.7;
          left: 100%;
        }

        .premium-glow {
          position: relative;
        }

        .premium-glow::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.5s ease;
          box-shadow: 0 0 30px rgba(34, 197, 226, 0.3) inset;
        }

        .group:hover .premium-glow::after {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex gap-3 mb-6 justify-center items-center">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Exoplanet Discovery Phases</span>
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Presentations & Deliverables
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Track our journey through the cosmos with comprehensive presentations showcasing exoplanet detection breakthroughs and scientific achievements
          </p>
        </div>

        {/* Presentations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((presentation, index) => (
            <Link
              key={index}
              href={presentation.link}
              className="group relative rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-500 hover:border-cyan-500/50"
            >
              {/* Enhanced card background */}
              <div className="card-gradient premium-glow h-full p-6 flex flex-col">
              
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${presentation.color} pointer-events-none`} />
                
                {/* Icon with orbital animation */}
                <div className={`inline-flex p-3.5 rounded-xl ${presentation.bgColor} ${presentation.textColor} mb-5 w-fit group-hover:scale-125 transition-transform duration-300 animate-float-up relative`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="animate-glow-icon relative">
                    {presentation.icon}
                  </div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{ boxShadow: `inset 0 0 20px ${presentation.textColor}` }} />
                </div>

                {/* Phase badge */}
                <div className={`inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r ${presentation.color} bg-opacity-15 border ${presentation.textColor}/40 ${presentation.textColor} text-xs font-bold mb-4 w-fit group-hover:bg-opacity-25 group-hover:border-opacity-80 transition-all duration-300`}>
                  {presentation.badge}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
                  {presentation.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm flex-grow mb-5 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
                  {presentation.description}
                </p>

                {/* Link Indicator */}
                <div className={`flex items-center gap-2 ${presentation.textColor} group-hover:text-white transition-all duration-300 font-semibold`}>
                  <span className="text-sm">Explore</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${presentation.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}