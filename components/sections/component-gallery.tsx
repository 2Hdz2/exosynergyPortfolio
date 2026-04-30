"use client";
import Image from "next/image";
import { useState } from "react";
import { ImageIcon, Sparkles, X, Telescope, Wind, Zap, Gem } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageType {
  src: string;
  alt: string;
  icon?: any;
  color?: string;
}

const images: ImageType[] = [
  {
    src: "/images/diagrams/exoplanet-detection.gif",
    alt: "Hybrid Exoplanet Detection",
    icon: Telescope,
    color: "cyan"
  },
  {
    src: "/images/diagrams/Kaveesha's-Component-diagram.png",
    alt: "Stellar Classification",
    icon: Sparkles,
    color: "purple"
  },
  {
    src: "/images/diagrams/atmospheric-spectrum.gif",
    alt: "Atmospheric Analysis",
    icon: Wind,
    color: "green"
  },
  {
    src: "/images/diagrams/mineral-mapping.png",
    alt: "Mineral Identification",
    icon: Gem,
    color: "orange"
  },
];

export default function ComponentGallery() {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className="py-16 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" id="gallery">
        <style>{`
          @keyframes slideUp {
            from { 
              opacity: 0;
              transform: translateY(20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes shimmerLoad {
            0% { background-position: -1000px 0; }
            100% { background-position: 1000px 0; }
          }

          @keyframes iconFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-8px) rotate(5deg); }
            66% { transform: translateY(-4px) rotate(-5deg); }
          }

          @keyframes iconPulse {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.15); opacity: 1; }
          }

          @keyframes iconSpin {
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
          
          .animate-slide-up {
            animation: slideUp 0.6s ease-out forwards;
          }

          .animate-slide-in-left {
            animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          
          .shimmer-loading {
            background: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.2), rgba(255,255,255,0.1));
            background-size: 1000px 100%;
            animation: shimmerLoad 2s infinite;
          }

          .animate-icon-float {
            animation: iconFloat 3s ease-in-out infinite;
          }

          .animate-icon-pulse {
            animation: iconPulse 2.5s ease-in-out infinite;
          }

          .animate-icon-spin {
            animation: iconSpin 6s linear infinite;
          }

          .icon-badge {
            position: absolute;
            top: -12px;
            right: -12px;
            width: 52px;
            height: 52px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          }

          .icon-badge::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            opacity: 0.5;
            filter: blur(10px);
            z-index: -1;
          }
        `}</style>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-in-left">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 backdrop-blur-sm mb-6 hover:border-cyan-400/70 transition-all duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md" />
                <ImageIcon className="w-5 h-5 text-cyan-400 relative animate-icon-spin" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-widest">Visual Gallery</span>
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-md" />
                <Sparkles className="w-5 h-5 text-purple-400 relative animate-icon-float" strokeWidth={2.5} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Research Visualizations
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Interactive diagrams showcasing exoplanet detection and analysis methodologies
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {images.map((image, index) => {
              const IconComponent = image.icon || Sparkles;
              const colorMap: Record<string, { badge: string; border: string; glow: string; hover: string }> = {
                cyan: { badge: "from-cyan-500 to-blue-500", border: "border-cyan-500/30 hover:border-cyan-400/60", glow: "from-cyan-400/10 to-blue-400/10", hover: "hover:shadow-cyan-500/20" },
                purple: { badge: "from-purple-500 to-pink-500", border: "border-purple-500/30 hover:border-purple-400/60", glow: "from-purple-400/10 to-pink-400/10", hover: "hover:shadow-purple-500/20" },
                green: { badge: "from-green-500 to-cyan-500", border: "border-green-500/30 hover:border-green-400/60", glow: "from-green-400/10 to-cyan-400/10", hover: "hover:shadow-green-500/20" },
                orange: { badge: "from-orange-500 to-red-500", border: "border-orange-500/30 hover:border-orange-400/60", glow: "from-orange-400/10 to-red-400/10", hover: "hover:shadow-orange-500/20" },
              };
              const scheme = colorMap[image.color || "cyan"];
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-full group cursor-pointer">
                    {/* Title with icon */}
                    <div className="mb-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${scheme.badge} rounded-full blur-md opacity-30`} />
                        <IconComponent className={`w-5 h-5 relative animate-icon-float`} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-lg font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent group-hover:brightness-110 transition-all">
                        {image.alt}
                      </h3>
                    </div>

                    {/* Image Container */}
                    <div
                      className={`relative w-full h-64 rounded-2xl ${scheme.border} bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-500 overflow-hidden group/image shadow-lg ${scheme.hover}`}
                      onClick={() => setSelectedImage(image)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Role Icon Badge */}
                      <div className={`icon-badge bg-gradient-to-br ${scheme.badge} group-hover/image:animate-icon-pulse`}>
                        <IconComponent className="w-6 h-6 text-white animate-icon-float" strokeWidth={2.5} />
                      </div>

                      {/* Glow effect on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${scheme.glow} group-hover/image:opacity-100 opacity-0 transition-all duration-300`} />
                      
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        className="group-hover/image:scale-110 transition-transform duration-500 ease-out"
                        priority
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                        <div className="flex items-center gap-2 text-white font-semibold">
                          <ImageIcon className="w-5 h-5" />
                          Click to expand
                        </div>
                      </div>

                      {/* Accent line on hover */}
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${scheme.badge} opacity-0 group-hover/image:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Dialog */}
      {selectedImage && (
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="sm:max-w-4xl rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30">
            <DialogHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md" />
                  <Sparkles className="w-5 h-5 text-cyan-400 relative animate-icon-spin" strokeWidth={2.5} />
                </div>
              </div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                {selectedImage.alt}
              </DialogTitle>
            </DialogHeader>
            <div className="relative w-full h-[60vh] rounded-xl overflow-hidden border border-cyan-400/30 bg-black/40 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

