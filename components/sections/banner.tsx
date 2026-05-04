"use client";
import React, { useEffect, useState } from "react";
import { Trophy, Star, Sparkles, BookOpen, ExternalLink, Award } from "lucide-react";
import Springer from "../../public/images/springer.jpg";

const Banner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full py-20 px-4 md:px-8 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow-trophy {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.4)); }
          50% { filter: drop-shadow(0 0 24px rgba(250, 204, 21, 0.9)); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.3); }
          50% { box-shadow: 0 0 0 10px rgba(250, 204, 21, 0); }
        }

        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-glow-trophy { animation: glow-trophy 2.5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-badge-pulse { animation: badge-pulse 2s ease-in-out infinite; }

        .fade-slide-1 { animation: fadeSlideUp 0.7s ease forwards 0.1s; opacity: 0; }
        .fade-slide-2 { animation: fadeSlideUp 0.7s ease forwards 0.3s; opacity: 0; }
        .fade-slide-3 { animation: fadeSlideUp 0.7s ease forwards 0.5s; opacity: 0; }
        .fade-slide-4 { animation: fadeSlideUp 0.7s ease forwards 0.7s; opacity: 0; }

        .shimmer-text {
          background: linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d, #f59e0b, #fbbf24);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .springer-badge {
          background: linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,60,0,0.08));
          border: 1px solid rgba(255,107,53,0.4);
        }

        .conference-badge {
          background: linear-gradient(135deg, rgba(250,204,21,0.12), rgba(245,158,11,0.06));
          border: 1px solid rgba(250,204,21,0.35);
        }
      `}</style>

      {/* Background atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s" }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "9s", animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "11s", animationDelay: "1s" }} />
        {/* Decorative stars */}
        {mounted && [
          { top: "12%", left: "8%", size: 3, delay: "0s" },
          { top: "25%", right: "6%", size: 2, delay: "0.5s" },
          { top: "65%", left: "5%", size: 2, delay: "1s" },
          { top: "80%", right: "10%", size: 3, delay: "1.5s" },
          { top: "45%", right: "3%", size: 2, delay: "0.8s" },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-300 animate-pulse"
            style={{
              top: star.top,
              left: (star as any).left,
              right: (star as any).right,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="rounded-3xl border border-yellow-500/20 overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, rgba(15,15,25,0.95) 0%, rgba(30,25,10,0.90) 50%, rgba(15,15,25,0.95) 100%)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 80px rgba(250,204,21,0.08), 0 40px 80px rgba(0,0,0,0.4)",
          }}
        >
          {/* Top gold bar */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60" />

          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)", backgroundSize: "50px 50px" }}
          />

          {/* Decorative corner orbits */}
          <div className="absolute top-6 right-6 opacity-20 pointer-events-none">
            <Star className="w-20 h-20 text-yellow-400 animate-spin-slow" strokeWidth={0.8} />
          </div>
          <div className="absolute bottom-6 left-6 opacity-15 pointer-events-none">
            <Sparkles className="w-14 h-14 text-amber-300 animate-float" strokeWidth={1} />
          </div>

          <div className="p-10 md:p-16 relative z-10">
            <div className="flex flex-col items-center text-center gap-8">

              {/* Trophy Icon */}
              <div className="fade-slide-1 relative">
                <div className="absolute inset-0 rounded-2xl bg-yellow-400/10 blur-xl scale-150" />
                <div className="relative p-5 rounded-2xl animate-badge-pulse"
                  style={{ background: "linear-gradient(135deg, rgba(250,204,21,0.15), rgba(245,158,11,0.08))", border: "1px solid rgba(250,204,21,0.3)" }}
                >
                  <Trophy className="w-14 h-14 text-yellow-400 animate-glow-trophy" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <div className="fade-slide-2 space-y-2">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-yellow-400/60" />
                  <Award className="w-4 h-4 text-yellow-400/70" />
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-yellow-400/60" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tight">
                  <span className="shimmer-text">Achievements</span>
                </h1>
              </div>

              {/* Achievement Card */}
              <div className="fade-slide-3 w-full max-w-2xl">
                <div className="rounded-2xl p-8 relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, rgba(250,204,21,0.06), rgba(245,158,11,0.03))",
                    border: "1px solid rgba(250,204,21,0.2)",
                    boxShadow: "inset 0 1px 0 rgba(250,204,21,0.1)",
                  }}
                >
                  {/* Hover shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(250,204,21,0.04), transparent)" }}
                  />

                  {/* Research paper text */}
                  <p className="text-slate-300 text-lg md:text-xl font-light leading-relaxed mb-6">
                    Research Paper selected for
                  </p>

                  {/* Conference Badge */}
                  <div className="conference-badge rounded-xl px-5 py-4 mb-4 inline-block w-full">
                    <div className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <div className="text-left">
                        <p className="text-yellow-300 font-bold text-base md:text-lg leading-snug">
                          <a href="https://www.icncda.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            International Conference on Networks, Computing Systems, and Data Analytics
                          </a>
                        </p>
                        <p className="text-yellow-400/70 text-sm font-semibold tracking-widest uppercase mt-1">
                          ICNCDA 2026
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow connector */}
                  <div className="flex items-center justify-center gap-3 my-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
                    <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Published to</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-600 to-transparent" />
                  </div>

                  {/* Springer Badge */}
                  <div className="springer-badge rounded-xl px-5 py-4 inline-flex items-center gap-3 w-full">
                    <ExternalLink className="w-5 h-5 text-orange-400 flex-shrink-0" strokeWidth={2} />
                    <div className="text-left">
                      <p className="text-orange-300 font-bold text-base md:text-lg">
                        Springer Journal
                      </p>
                      <p className="text-orange-400/60 text-xs uppercase tracking-widest mt-0.5">
                        Peer-Reviewed Publication
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo placeholder */}
              <div className="fade-slide-4 w-full max-w-2xl">
                <div className="rounded-2xl overflow-hidden border border-yellow-500/15 relative"
                  style={{ background: "linear-gradient(135deg, rgba(20,20,30,0.8), rgba(30,25,15,0.6))" }}
                >
                  {/* Replace the src below with your actual image path */}
                  <img
                    src={Springer.src}
                    alt="ICNCDA 2026 Achievement"
                    className="w-full object-cover"
                    onError={(e) => {
                      // Fallback placeholder if image not found
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div className="hidden flex flex-col items-center justify-center py-16 gap-3">
                    <Trophy className="w-12 h-12 text-yellow-400/30" strokeWidth={1} />
                    <p className="text-slate-600 text-sm">Conference photo coming soon</p>
                  </div>
                  {/* Gold overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom gold bar */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40" />
        </div>
      </div>
    </div>
  );
};

export default Banner;