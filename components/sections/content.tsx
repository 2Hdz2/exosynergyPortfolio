"use client";

import { Telescope, Zap, Target, BookOpen, Sparkles, Lightbulb, Radio } from "lucide-react";

const Content = () => {
  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden" id="scope">
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        .animate-slide-in { animation: slideIn 0.6s ease-out forwards; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "1s" }} />
      </div>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        
        {/* Scope */}
        <div 
          className="group rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/30 to-blue-950/30 hover:from-cyan-900/50 hover:to-blue-900/50 p-8 md:p-10 hover:border-cyan-400/60 transition-all duration-500 backdrop-blur-xl hover:shadow-lg hover:shadow-cyan-500/10 animate-slide-in"
          style={{ animationDelay: "0ms" }}
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 group-hover:border-cyan-300/60 transition-all duration-300">
              <Telescope className="w-8 h-8 text-cyan-400 animate-float" strokeWidth={1.5} />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors">
                Project Scope
              </h2>
              <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
                This comprehensive AI system modernizes exoplanet discovery by integrating machine learning, computer vision, and data analytics. Combining transit photometry, direct imaging, spectral analysis, and mineral identification, our solution enables robust detection, precise characterization, and comprehensive analysis of exoplanets to advance our understanding of planetary systems.
              </p>
            </div>
          </div>
        </div>

        {/* Problem */}
        <div 
          className="group rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/30 to-orange-950/30 hover:from-amber-900/50 hover:to-orange-900/50 p-8 md:p-10 hover:border-amber-400/60 transition-all duration-500 backdrop-blur-xl hover:shadow-lg hover:shadow-amber-500/10 animate-slide-in"
          style={{ animationDelay: "100ms" }}
        >
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-400/40 group-hover:border-amber-300/60 transition-all duration-300">
              <Zap className="w-8 h-8 text-amber-400 animate-float" strokeWidth={1.5} style={{ animationDelay: "0.2s" }} />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-amber-300 transition-colors">
                Research Problem
              </h2>
              <p className="text-slate-300 leading-relaxed font-light text-base md:text-lg">
                Exoplanet detection remains challenging due to weak signals, high noise levels, and the need for multi-method validation. Current approaches often rely on single detection techniques, missing faint signals and producing false positives. There is a critical need for intelligent, integrated frameworks that combine multiple observational methods and advanced AI techniques for reliable, consistent exoplanet discovery and characterization.
              </p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div 
          className="group rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/30 to-pink-950/30 hover:from-purple-900/50 hover:to-pink-900/50 p-8 md:p-10 hover:border-purple-400/60 transition-all duration-500 backdrop-blur-xl hover:shadow-lg hover:shadow-purple-500/10 animate-slide-in"
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/40 group-hover:border-purple-300/60 transition-all duration-300">
              <Target className="w-8 h-8 text-purple-400 animate-float" strokeWidth={1.5} style={{ animationDelay: "0.4s" }} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white group-hover:text-purple-300 transition-colors">
              Research Objectives
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-12">
            {[
              { icon: Sparkles, text: "Develop hybrid AI models combining transit photometry and direct imaging for high-accuracy detection" },
              { icon: Lightbulb, text: "Predict stellar parameters and evaluate exoplanet hosting suitability" },
              { icon: Radio, text: "Analyze atmospheric spectra and identify biosignatures" },
              { icon: BookOpen, text: "Identify extraterrestrial minerals using hyperspectral data" },
              { icon: Telescope, text: "Reduce false positives and improve detection confidence" },
              { icon: Zap, text: "Create unified platform for seamless multi-method exoplanet analysis" },
            ].map((obj, i) => {
              const Icon = obj.icon;
              return (
                <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group/obj">
                  <Icon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5 group-hover/obj:text-purple-300 transition-colors" />
                  <p className="text-slate-300 font-light group-hover/obj:text-slate-200 transition-colors">{obj.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;