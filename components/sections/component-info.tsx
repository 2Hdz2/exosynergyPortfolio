"use client";

import { 
  Microscope, 
  Star, 
  Eye, 
  Cpu,
  GitBranch,
  ArrowRight,
  Sparkles,
  Zap,
  Orbit,
  Radio
} from "lucide-react";

const components = [
  {
    icon: Microscope,
    title: "Hybrid Exoplanet Detection",
    description: "Combines transit photometry and direct imaging with CNN/RNN architectures to detect exoplanets. Fuses multi-domain signals for robust detection confidence.",
    owner: "H.A.H.E.K. Hettiarachchi",
    github: "https://github.com/HeidiHettiarachchi/exo-hybrid-detection",
    color: "from-cyan-500 to-blue-500",
    icon2: Zap,
  },
  {
    icon: Star,
    title: "Stellar Classification",
    description: "Predicts stellar parameters from photometric data. Evaluates star suitability for hosting exoplanets using ML models trained on SDSS survey data.",
    owner: "Fernando M.K.C",
    github: "https://github.com/KCxRULZZ/Star-Suitability-Predictor.git",
    color: "from-amber-500 to-orange-500",
    icon2: Sparkles,
  },
  {
    icon: Eye,
    title: "Atmospheric Analysis",
    description: "Detects atmospheric gases and identifies biosignatures. Generates atmospheric profiles with confidence scores and compares with reference planets.",
    owner: "Tissera W A H",
    github: "https://github.com/HeidiHettiarachchi/ExoSynergy.git",
    color: "from-purple-500 to-pink-500",
    icon2: Radio,
  },
  {
    icon: Cpu,
    title: "Mineral Identification",
    description: "Uses U-Net deep learning on hyperspectral data for pixel-level mineral segmentation. Enables fast, consistent surface analysis without manual interpretation.",
    owner: "C I Abeywickrama",
    github: "#",
    color: "from-emerald-500 to-teal-500",
    icon2: Orbit,
  },
];

const ComponentInfo = () => {
  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-purple-950/30 to-slate-900 relative overflow-hidden" id="components">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0)); }
          50% { filter: drop-shadow(0 0 20px rgba(34, 211, 238, 0.5)); }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s" }} />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "8s", animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/40 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
            <span className="text-sm font-semibold text-cyan-300">AI Components</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Research Components
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Four integrated AI modules for comprehensive exoplanet discovery and analysis
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((comp, index) => {
            const Icon = comp.icon;
            const Icon2 = comp.icon2;
            
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-800/50 via-slate-800/30 to-slate-900/50 hover:from-slate-800/80 hover:via-slate-800/60 hover:to-slate-900/80 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/40 backdrop-blur-xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-cyan-500 via-purple-500 to-blue-500 pointer-events-none" />
                
                {/* Floating accent icon */}
                <div className="absolute -top-8 -right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Icon2 className="w-32 h-32 text-cyan-400 animate-float" style={{ animationDelay: `${index * 200}ms` }} />
                </div>

                <div className="relative z-10 space-y-6">
                  
                  {/* Icon with gradient background */}
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm group-hover:border-white/40 transition-all duration-300">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${comp.color}`}>
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {comp.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {comp.description}
                  </p>

                  {/* Owner with icon */}
                  <div className="pt-2 pb-4 border-t border-slate-700/50">
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Principal Investigator</p>
                    <p className="text-base font-semibold text-white flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-400" />
                      {comp.owner}
                    </p>
                  </div>

                  {/* GitHub Link */}
                  {comp.github !== "#" && (
                    <a
                      href={comp.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 group/link py-2 px-3 rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30"
                    >
                      <GitBranch className="w-4 h-4" />
                      View Repository
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComponentInfo;