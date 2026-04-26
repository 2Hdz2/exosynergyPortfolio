import { Satellite, Orbit, Sparkles, Compass, Lightbulb, Radio, Eye, Wind } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Satellite,
      title: "Hybrid Detection Engine",
      description: "Advanced combination of transit photometry and direct imaging powered by CNN/RNN neural networks for ultra-precise exoplanet detection across stellar systems",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-600/20",
      textColor: "text-cyan-400",
    },
    {
      icon: Orbit,
      title: "Stellar Intelligence",
      description: "AI-driven stellar parameter prediction and habitability assessment for identifying exoplanet host stars with optimal conditions for life",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-600/20",
      textColor: "text-purple-400",
    },
    {
      icon: Wind,
      title: "Spectral Analysis Suite",
      description: "Breakthrough atmospheric gas detection and biosignature identification with advanced confidence scoring for characterizing exoplanet atmospheres",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-600/20",
      textColor: "text-amber-400",
    },
    {
      icon: Radio,
      title: "Mineral Mapping System",
      description: "Cutting-edge U-Net deep learning architecture for pixel-level mineral identification and geological characterization of planetary surfaces",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-600/20",
      textColor: "text-pink-400",
    },
  ];

  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-purple-950/25 to-slate-950 relative overflow-hidden">
      {/* Advanced cosmic background with multiple nebula layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '11s', animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-500/15 to-transparent rounded-full blur-3xl" style={{ animationDuration: '13s', animationDelay: '2s' }} />
        {/* Stellar particles */}
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>

      <style>{`
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes icon-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes glow-border {
          0%, 100% { box-shadow: 0 0 25px rgba(34, 197, 226, 0.2), inset 0 0 20px rgba(34, 197, 226, 0.1); }
          50% { box-shadow: 0 0 45px rgba(34, 197, 226, 0.5), inset 0 0 30px rgba(34, 197, 226, 0.2); }
        }

        @keyframes pulse-shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        .animate-slide-in {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-float-card {
          animation: float-card 4s ease-in-out infinite;
        }

        .animate-icon-spin {
          animation: icon-rotate 8s ease-in-out infinite;
        }

        .animate-glow-border {
          animation: glow-border 3.5s ease-in-out infinite;
        }

        .premium-card-bg {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 82, 0.6));
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          border-color: currentColor;
        }
      `}</style>
      
      {/* Header */}
      <div className="text-center mb-20 max-w-4xl mx-auto relative z-10">
        <div className="inline-flex gap-3 mb-6 items-center">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Advanced Technology Platform</span>
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          Exoplanet Discovery Solution
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed font-light">
          A revolutionary AI-powered ecosystem seamlessly integrating four advanced detection and characterization modules for unprecedented exoplanet discovery capabilities
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 relative z-10">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="feature-card group relative rounded-2xl border border-slate-700/60 premium-card-bg hover:border-cyan-500/40 p-8 transition-all duration-500 overflow-hidden animate-float-card"
              style={{
                animation: `slide-in-left 0.8s ease-out forwards, float-card 4s ease-in-out infinite`,
                animationDelay: `${index * 0.15}s, ${index * 0.15}s`,
                opacity: 0,
              }}
            >
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${feature.color} pointer-events-none`} />

              {/* Glow effect on hover */}
              <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none blur`}
                style={{
                  background: `linear-gradient(135deg, rgba(${feature.color === 'from-cyan-500 to-blue-600' ? '34, 197, 226' : feature.color === 'from-purple-500 to-indigo-600' ? '168, 85, 247' : feature.color === 'from-amber-500 to-orange-600' ? '217, 119, 6' : '236, 72, 153'}, 0.5), transparent)`,
                }}
              />

              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl ${feature.bgColor} ${feature.textColor} mb-5 group-hover:scale-130 transition-transform duration-300 relative`}>
                  <Icon className="w-7 h-7 strokeWidth-2 group-hover:animate-icon-spin" />
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br ${feature.color}`} />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-300 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 text-base">
                  {feature.description}
                </p>
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
            </div>
          );
        })}
      </div>

      {/* Bottom Insight Box */}
      <div className="mt-20 text-center max-w-3xl mx-auto relative z-10">
        <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 via-purple-900/15 to-pink-900/20 backdrop-blur-sm p-8 hover:border-cyan-500/60 transition-all duration-500 group">
          <div className="flex items-start gap-4 mb-4">
            <Lightbulb className="w-7 h-7 text-cyan-400 flex-shrink-0 mt-1 animate-pulse drop-shadow-lg" strokeWidth={2.5} />
            <p className="text-slate-300 leading-relaxed font-light text-base">
              This unified ecosystem harnesses state-of-the-art artificial intelligence and deep learning architectures to fundamentally transform exoplanet discovery. Our system enables rapid, highly accurate detection and comprehensive multi-dimensional characterization of worlds orbiting distant stars, opening unprecedented frontiers in our understanding of planetary systems beyond Earth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;