import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Star, Orbit, Crown, Users2, Zap, Brain, Code2, BarChart3, Lightbulb } from "lucide-react";

const supervisors = [
  {
    id: "supervisor-1",
    name: "Mr. Samadhi Rathnayake",
    role: "Supervisor",
    avatar: "/images/members/Samadhi-sir.png",
    icon: Crown,
    color: "from-cyan-500 to-blue-500",
    accentColor: "cyan"
  },
  {
    id: "supervisor-2",
    name: "Dr. Kapila Dissanayake",
    role: "Co-Supervisor",
    avatar: "/images/members/Kapila-sir.png",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    accentColor: "purple"
  },
];

const members = [
  {
    id: "member-1",
    name: "Heidi",
    role: "Project Lead",
    avatar: "/images/members/heidi.png",
    icon: Users2,
    color: "from-indigo-500 to-blue-500",
    accentColor: "indigo"
  },
  {
    id: "member-2",
    name: "Kaveesha",
    role: "Researcher",
    avatar: "/images/members/kaveesha.png",
    icon: Lightbulb,
    color: "from-green-500 to-cyan-500",
    accentColor: "green"
  },
  {
    id: "member-3",
    name: "Chamudi",
    role: "Lead Developer",
    avatar: "/images/members/chamudhi.png",
    icon: Code2,
    color: "from-orange-500 to-red-500",
    accentColor: "orange"
  },
  {
    id: "member-4",
    name: "Akila",
    role: "Data Scientist",
    avatar: "/images/members/himaja.png",
    icon: BarChart3,
    color: "from-rose-500 to-pink-500",
    accentColor: "rose"
  },
];

const Team = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950 relative overflow-hidden" id="team">
      {/* Cosmic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      <style>{`
        @keyframes float-member {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes glow-card {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 226, 0.1), 0 0 40px rgba(34, 197, 226, 0.05); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 226, 0.25), 0 0 60px rgba(34, 197, 226, 0.15); }
        }

        @keyframes scale-in-fade {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes role-icon-float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-6px) translateX(3px) rotate(5deg); }
          66% { transform: translateY(-3px) translateX(-3px) rotate(-5deg); }
        }

        @keyframes role-icon-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        @keyframes role-icon-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes badge-shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes border-glow {
          0%, 100% { border-color: currentColor; opacity: 0.5; }
          50% { border-color: rgba(255, 255, 255, 0.8); opacity: 1; }
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

        .animate-slide-left {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .delay-100 { animation-delay: 100ms; }

        .animate-float-member {
          animation: float-member 3.5s ease-in-out infinite;
        }

        .animate-glow-card {
          animation: glow-card 3s ease-in-out infinite;
        }

        .animate-role-icon-float {
          animation: role-icon-float 3s ease-in-out infinite;
        }

        .animate-role-icon-pulse {
          animation: role-icon-pulse 2.5s ease-in-out infinite;
        }

        .animate-role-icon-spin {
          animation: role-icon-spin 6s linear infinite;
        }

        .animate-badge-shimmer {
          animation: badge-shimmer 2s infinite;
          background-size: 1000px 100%;
        }

        .member-card-bg {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(30, 41, 82, 0.5));
          backdrop-filter: blur(10px);
        }

        .avatar-ring {
          position: relative;
          display: inline-block;
        }

        .avatar-ring::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(34, 197, 226, 0.3), rgba(168, 85, 247, 0.2));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .member-card:hover .avatar-ring::before {
          opacity: 1;
        }

        .role-icon-container {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, var(--grad-color-1), var(--grad-color-2));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .role-icon-container::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: inherit;
          opacity: 0.5;
          filter: blur(12px);
          z-index: -1;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <Orbit className="w-14 h-14 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} strokeWidth={1.5} />
              <Users className="w-8 h-8 text-blue-400 absolute inset-3" strokeWidth={2} />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Meet Our Team
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A dedicated group of researchers and engineers advancing exoplanet discovery through cutting-edge AI and astronomical research
          </p>
        </div>

        {/* Supervisors Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10 animate-slide-left">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-lg" />
              <Star className="w-6 h-6 text-cyan-400 relative animate-role-icon-spin" strokeWidth={2.5} />
            </div>
            <h3 className="text-3xl font-bold text-white">Supervisors & Guides</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supervisors.map((person, index) => {
              const IconComponent = person.icon;
              return (
                <div
                  key={person.id}
                  className="member-card relative rounded-2xl border border-cyan-500/30 member-card-bg hover:border-cyan-500/60 p-8 transition-all duration-500 overflow-hidden animate-float-member group"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                    background: 'linear-gradient(135deg, rgba(34, 197, 226, 0.08), rgba(168, 85, 247, 0.04))',
                    '--grad-color-1': `rgb(${person.accentColor === 'cyan' ? '34, 197, 226' : '168, 85, 247'})`,
                    '--grad-color-2': `rgb(${person.accentColor === 'cyan' ? '59, 130, 246' : '236, 72, 153'})`,
                  } as React.CSSProperties}
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br from-cyan-500 to-purple-500 pointer-events-none" />
                  
                  {/* Role Icon Badge */}
                  <div className="role-icon-container group-hover:animate-role-icon-pulse">
                    <IconComponent className="w-6 h-6 text-white animate-role-icon-float" strokeWidth={2.5} />
                  </div>

                  {/* Avatar with glow */}
                  <div className="flex justify-center mb-6 relative">
                    <div className="avatar-ring">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300" />
                      <Avatar className="w-24 h-24 border-3 border-cyan-500 relative z-10 shadow-2xl shadow-cyan-400/50">
                        <AvatarImage src={person.avatar} />
                        <AvatarFallback className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white text-xl font-bold">
                          {person.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  {/* Info */}
                  <h4 className="text-2xl font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                    {person.name}
                  </h4>
                  <div className="flex justify-center mb-3">
                    <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 backdrop-blur-sm">
                      <p className="text-cyan-300 font-semibold text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        {person.role}
                      </p>
                    </span>
                  </div>

                  {/* Decoration */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <div className="flex items-center gap-3 mb-10 animate-slide-left delay-100">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-lg" />
              <Orbit className="w-6 h-6 text-blue-400 relative animate-role-icon-spin" style={{ animationDuration: '8s' }} strokeWidth={2} />
            </div>
            <h3 className="text-3xl font-bold text-white">Team Members</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((person, index) => {
              const IconComponent = person.icon;
              const colorMap: Record<string, { bg: string; border: string; glow: string }> = {
                indigo: { bg: 'from-indigo-500/20 to-blue-500/15', border: 'border-indigo-500/30 hover:border-indigo-500/60', glow: 'from-indigo-500 to-blue-500' },
                green: { bg: 'from-green-500/20 to-cyan-500/15', border: 'border-green-500/30 hover:border-green-500/60', glow: 'from-green-500 to-cyan-500' },
                orange: { bg: 'from-orange-500/20 to-red-500/15', border: 'border-orange-500/30 hover:border-orange-500/60', glow: 'from-orange-500 to-red-500' },
                rose: { bg: 'from-rose-500/20 to-pink-500/15', border: 'border-rose-500/30 hover:border-rose-500/60', glow: 'from-rose-500 to-pink-500' },
              };
              const colorScheme = colorMap[person.accentColor] || colorMap.indigo;
              return (
                <div
                  key={person.id}
                  className={`member-card relative rounded-2xl member-card-bg ${colorScheme.border} p-6 transition-all duration-500 overflow-hidden animate-float-member group`}
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    background: `linear-gradient(135deg, rgba(${person.accentColor === 'green' ? '34,197,226' : person.accentColor === 'orange' ? '234,88,12' : person.accentColor === 'rose' ? '244,63,94' : '99,102,241'}, 0.05), rgba(${person.accentColor === 'green' ? '59,130,246' : person.accentColor === 'orange' ? '239,68,68' : person.accentColor === 'rose' ? '236,72,153' : '139,92,246'}, 0.03))`,
                    '--grad-color-1': `rgb(${person.accentColor === 'green' ? '34,197,226' : person.accentColor === 'orange' ? '234,88,12' : person.accentColor === 'rose' ? '244,63,94' : '99,102,241'})`,
                    '--grad-color-2': `rgb(${person.accentColor === 'green' ? '59,130,246' : person.accentColor === 'orange' ? '239,68,68' : person.accentColor === 'rose' ? '236,72,153' : '139,92,246'})`,
                  } as React.CSSProperties}
                >
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${colorScheme.glow} pointer-events-none`} />

                  {/* Role Icon Badge */}
                  <div className="role-icon-container group-hover:animate-role-icon-pulse">
                    <IconComponent className="w-5 h-5 text-white animate-role-icon-float" strokeWidth={2.5} />
                  </div>

                  {/* Avatar with glow */}
                  <div className="flex justify-center mb-4 relative">
                    <div className="avatar-ring">
                      <div className={`absolute inset-0 rounded-full opacity-20 blur-lg group-hover:opacity-35 transition-opacity duration-300 bg-gradient-to-br ${colorScheme.glow}`} />
                      <Avatar className={`w-20 h-20 relative z-10 shadow-xl`} style={{
                        borderColor: `rgb(${person.accentColor === 'green' ? '34,197,226' : person.accentColor === 'orange' ? '234,88,12' : person.accentColor === 'rose' ? '244,63,94' : '99,102,241'})`,
                        boxShadow: `0 0 20px rgb(${person.accentColor === 'green' ? '34,197,226,0.4' : person.accentColor === 'orange' ? '234,88,12,0.4' : person.accentColor === 'rose' ? '244,63,94,0.4' : '99,102,241,0.4'})`
                      }}>
                        <AvatarImage src={person.avatar} />
                        <AvatarFallback className={`bg-gradient-to-br text-white font-bold`} style={{
                          background: `linear-gradient(135deg, rgb(${person.accentColor === 'green' ? '34,197,226' : person.accentColor === 'orange' ? '234,88,12' : person.accentColor === 'rose' ? '244,63,94' : '99,102,241'}), rgb(${person.accentColor === 'green' ? '59,130,246' : person.accentColor === 'orange' ? '239,68,68' : person.accentColor === 'rose' ? '236,72,153' : '139,92,246'}))`
                        }}>
                          {person.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  {/* Info */}
                  <h4 className="text-lg font-bold text-white mb-2 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                    {person.name}
                  </h4>
                  <div className="flex justify-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold`} style={{
                      background: `rgb(${person.accentColor === 'green' ? '34,197,226,0.15' : person.accentColor === 'orange' ? '234,88,12,0.15' : person.accentColor === 'rose' ? '244,63,94,0.15' : '99,102,241,0.15'})`,
                      color: `rgb(${person.accentColor === 'green' ? '34,197,226' : person.accentColor === 'orange' ? '234,88,12' : person.accentColor === 'rose' ? '244,63,94' : '99,102,241'})`,
                      border: `1px solid rgb(${person.accentColor === 'green' ? '34,197,226,0.4' : person.accentColor === 'orange' ? '234,88,12,0.4' : person.accentColor === 'rose' ? '244,63,94,0.4' : '99,102,241,0.4'})`
                    }}>
                      ✨ {person.role}
                    </span>
                  </div>

                  {/* Decoration */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${colorScheme.glow}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;