// "use client";

// import { FileText, FilePlus, FileCheck, Book, GraduationCap, Download, ArrowRight } from "lucide-react";
// import Link from "next/link";

// interface DocumentItem {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   link: string;
// }

// // const documents: DocumentItem[] = [
// //   {
// //     title: "Project Charter",
// //     description: "Formal document outlining project objectives and execution plan.",
// //     icon: <FileText className="w-6 h-6" />,
// //     link: "#",
// //   },
// //   {
// //     title: "Project Proposal",
// //     description: "Core document with detailed project plan and methodology.",
// //     icon: <FilePlus className="w-6 h-6" />,
// //     link: "#",
// //   },
// //   {
// //     title: "Checklist",
// //     description: "Task completion list and progress tracking details.",
// //     icon: <FileCheck className="w-6 h-6" />,
// //     link: "#",
// //   },
// //   {
// //     title: "Research Paper",
// //     description: "Academic documentation of research findings and analysis.",
// //     icon: <Book className="w-6 h-6" />,
// //     link: "#",
// //   },
// //   {
// //     title: "Thesis",
// //     description: "Comprehensive research document and academic insights.",
// //     icon: <GraduationCap className="w-6 h-6" />,
// //     link: "#",
// //   },
// //   {
// //     title: "Logbook",
// //     description: "Record of activities and progress tracking.",
// //     icon: <FileText className="w-6 h-6" />,
// //     link: "#",
// //   },
// // ];




// interface DocumentItem {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   link: string;
// }

// const documents: DocumentItem[] = [
//   {
//     title: "Project Charter",
//     description: "Formal document outlining project objectives and execution plan.",
//     icon: <FileText className="w-6 h-6" />,
//     link: "#",
//   },
//   {
//     title: "Project Proposal",
//     description: "Core document with detailed project plan and methodology.",
//     icon: <FilePlus className="w-6 h-6" />,
//     link: "#",
//   },
//   {
//     title: "Checklist",
//     description: "Task completion list and progress tracking details.",
//     icon: <FileCheck className="w-6 h-6" />,
//     link: "#",
//   },
//   {
//     title: "Research Paper",
//     description: "Academic documentation of research findings and analysis.",
//     icon: <Book className="w-6 h-6" />,
//     link: "#",
//   },
//   {
//     title: "Thesis",
//     description: "Comprehensive research document and academic insights.",
//     icon: <GraduationCap className="w-6 h-6" />,
//     link: "#",
//   },
//   {
//     title: "Logbook",
//     description: "Record of activities and progress tracking.",
//     icon: <FileText className="w-6 h-6" />,
//     link: "#",
//   },
// ];

// interface SectionEntry {
//   label: string;
//   sub?: { label: string; link: string }[];
//   link?: string;
// }

// const sectionIndex: SectionEntry[] = [
//   {
//     label: "TAF (Topic Assessment Form)",
//     link: "#",
//   },
//   {
//     label: "Project Proposal",
//     sub: [
//       { label: "Project Presentation", link: "#" },
//       { label: "Project Document — H.A.H.E.K Hettiarachchi  IT22323248", link: "#" },
//       { label: "Project Document — Fernando M.K.C  IT22346254", link: "#" },
//       { label: "Project Document — Tissera W A H  IT22026866", link: "#" },
//       { label: "Project Document — C I Abeywickrama  IT22343048", link: "#" },
//     ],
//   },
//   { label: "Progress Presentation 01", link: "#" },
//   { label: "Progress Presentation 02", link: "#" },
//   { label: "Final Presentation", link: "#" },
//   {
//     label: "Research Paper",
//     sub: [
//       { label: "Exosynergy Research Paper", link: "#" },
//       { label: "Research Paper — H.A.H.E.K Hettiarachchi  IT22323248", link: "#" },
//       { label: "Research Paper — Fernando M.K.C  IT22346254", link: "#" },
//       { label: "Research Paper — Tissera W A H  IT22026866", link: "#" },
//       { label: "Research Paper — C I Abeywickrama  IT22343048", link: "#" },
//     ],
//   },
//   {
//     label: "Thesis",
//     sub: [
//       { label: "Exosynergy Thesis", link: "#" },
//       { label: "Thesis — H.A.H.E.K Hettiarachchi  IT22323248", link: "#" },
//       { label: "Thesis — Fernando M.K.C  IT22346254", link: "#" },
//       { label: "Thesis — Tissera W A H  IT22026866", link: "#" },
//       { label: "Thesis — C I Abeywickrama  IT22343048", link: "#" },
//     ],
//   },
// ];
// export default function Documents() {
//   return (
//     <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden" id="documents">
//       <style>{`
//         @keyframes iconFloat {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-12px) rotate(3deg); }
//           66% { transform: translateY(-6px) rotate(-3deg); }
//         }

//         @keyframes iconSpin {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes iconPulseScale {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.1); }
//         }

//         @keyframes iconWiggle {
//           0%, 100% { transform: rotate(0deg); }
//           25% { transform: rotate(-5deg); }
//           75% { transform: rotate(5deg); }
//         }

//         @keyframes glowPulse {
//           0%, 100% { 
//             box-shadow: 0 0 20px rgba(168, 85, 247, 0.3), inset 0 0 15px rgba(168, 85, 247, 0.1);
//           }
//           50% { 
//             box-shadow: 0 0 40px rgba(168, 85, 247, 0.6), inset 0 0 30px rgba(168, 85, 247, 0.2);
//           }
//         }

//         @keyframes borderGlow {
//           0%, 100% {
//             border-color: rgba(168, 85, 247, 0.3);
//             box-shadow: 0 0 15px rgba(168, 85, 247, 0.1);
//           }
//           50% {
//             border-color: rgba(168, 85, 247, 0.6);
//             box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
//           }
//         }

//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-icon-float {
//           animation: iconFloat 3s ease-in-out infinite;
//         }

//         .animate-icon-spin {
//           animation: iconSpin 8s linear infinite;
//         }

//         .animate-icon-pulse {
//           animation: iconPulseScale 2s ease-in-out infinite;
//         }

//         .animate-icon-wiggle {
//           animation: iconWiggle 2.5s ease-in-out infinite;
//         }

//         .animate-glow-pulse {
//           animation: glowPulse 3s ease-in-out infinite;
//         }

//         .animate-border-glow {
//           animation: borderGlow 3s ease-in-out infinite;
//         }

//         .animate-slide-up {
//           animation: slideInUp 0.6s ease-out forwards;
//         }

//         .doc-icon-wrapper {
//           position: relative;
//           display: inline-flex;
//         }

//         .doc-icon-wrapper::before {
//           content: '';
//           position: absolute;
//           inset: -8px;
//           background: radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent);
//           border-radius: 50%;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           pointer-events: none;
//         }

//         .group:hover .doc-icon-wrapper::before {
//           opacity: 1;
//         }

//         .doc-icon-shine {
//           position: relative;
//           overflow: visible;
//         }

//         .doc-icon-shine::after {
//           content: '';
//           position: absolute;
//           top: -50%;
//           right: -50%;
//           width: 200%;
//           height: 200%;
//           background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
//           transform: rotate(45deg);
//           opacity: 0;
//           transition: opacity 0.3s;
//           pointer-events: none;
//         }

//         .group:hover .doc-icon-shine::after {
//           animation: shimmer 0.6s ease-in-out;
//         }

//         @keyframes shimmer {
//           0% { opacity: 0; transform: translateX(-100%) translateY(-100%) rotate(45deg); }
//           50% { opacity: 1; }
//           100% { opacity: 0; transform: translateX(100%) translateY(100%) rotate(45deg); }
//         }

//         .delay-100 { animation-delay: 100ms; }
//         .delay-200 { animation-delay: 200ms; }
//         .delay-300 { animation-delay: 300ms; }
//         .delay-400 { animation-delay: 400ms; }
//         .delay-500 { animation-delay: 500ms; }
//         .delay-600 { animation-delay: 600ms; }
//       `}</style>

//       {/* Background decorative elements */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
//         <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" style={{ animationDuration: '10s', animationDelay: '2s' }} />
//       </div>

//       <div className="max-w-6xl mx-auto relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-16 animate-slide-up flex flex-col items-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
//             <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
//             <span className="text-sm font-semibold text-purple-300">Documentation</span>
//           </div>
          
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
//             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
//               Comprehensive Resources
//             </span>
//           </h2>
//           <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-4">
//             In-depth documentation providing insights into research objectives, methodologies, and progress.
//           </p>
//         </div>

//         {/* Documents Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {documents.map((doc, index) => (
//             <Link
//               key={index}
//               href={doc.link}
//               className="group rounded-lg border-2 border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40 hover:from-purple-950/50 hover:to-slate-900/50 p-6 transition-all duration-300 hover:border-purple-500/60 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-900/20 animate-slide-up relative overflow-hidden"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Animated background gradient on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300 pointer-events-none" />

//               {/* Icon Container */}
//               <div className="mb-5 relative z-10">
//                 <div className="doc-icon-wrapper inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-600/30 to-pink-600/20 group-hover:from-purple-600/50 group-hover:to-pink-600/40 transition-all duration-300 relative border border-purple-500/20 group-hover:border-purple-400/50">
//                   {/* Icon with different animations */}
//                   <div className={`text-purple-300 group-hover:text-purple-200 transition-colors relative ${
//                     index % 4 === 0 ? 'animate-icon-float' :
//                     index % 4 === 1 ? 'animate-icon-spin' :
//                     index % 4 === 2 ? 'animate-icon-pulse' :
//                     'animate-icon-wiggle'
//                   }`}>
//                     {doc.icon}
//                   </div>
                  
//                   {/* Glowing background effect */}
//                   <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-glow-pulse" />
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors relative z-10">
//                 {doc.title}
//               </h3>

//               {/* Description */}
//               <p className="text-sm text-slate-400 mb-5 group-hover:text-slate-300 transition-colors relative z-10">
//                 {doc.description}
//               </p>

//               {/* Link with animated arrow */}
//               <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors relative z-10">
//                 <span className="text-sm font-medium">View Document</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
//               </div>

//               {/* Bottom accent line */}
//               <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { FileText, FilePlus, FileCheck, Book, GraduationCap, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

interface DocumentItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const documents: DocumentItem[] = [
  {
    title: "Project Charter",
    description: "Formal document outlining project objectives and execution plan.",
    icon: <FileText className="w-6 h-6" />,
    link: "#",
  },
  {
    title: "Project Proposal",
    description: "Core document with detailed project plan and methodology.",
    icon: <FilePlus className="w-6 h-6" />,
    link: "#",
  },
  {
    title: "Checklist",
    description: "Task completion list and progress tracking details.",
    icon: <FileCheck className="w-6 h-6" />,
    link: "#",
  },
  {
    title: "Research Paper",
    description: "Academic documentation of research findings and analysis.",
    icon: <Book className="w-6 h-6" />,
    link: "#",
  },
  {
    title: "Thesis",
    description: "Comprehensive research document and academic insights.",
    icon: <GraduationCap className="w-6 h-6" />,
    link: "#",
  },
  {
    title: "Logbook",
    description: "Record of activities and progress tracking.",
    icon: <FileText className="w-6 h-6" />,
    link: "#",
  },
];

interface SectionEntry {
  label: string;
  link?: string;
  sub?: { label: string; link: string }[];
}

const sectionIndex: SectionEntry[] = [
  {
    label: "TAF (Topic Assessment Form)",
    link: "https://drive.google.com/file/d/1zeIXfYMS4F6qUiFkZ7mYvdX4H-LY8RUy/view?usp=sharing",
  },
  {
    label: "Project Proposal",
    sub: [
      { label: "Project Presentation", link: "https://drive.google.com/file/d/1990kIZJ-Oq0q8v41YVzbLmOZpVpLNuco/view?usp=sharing" },
      { label: "Project Document — H.A.H.E.K Hettiarachchi  IT22323248", link: "https://drive.google.com/pseudo/project-doc-hettiarachchi" },
      { label: "Project Document — Fernando M.K.C  IT22346254", link: "https://drive.google.com/pseudo/project-doc-fernando" },
      { label: "Project Document — Tissera W A H  IT22026866", link: "https://drive.google.com/file/d/1bXghk8j4PLOyZqSVusOBv22NuJGSfyeg/view?usp=sharing" },
      { label: "Project Document — C I Abeywickrama  IT22343048", link: "https://drive.google.com/pseudo/project-doc-abeywickrama" },
    ],
  },
  {
    label: "Progress Presentation 01",
    link: "https://drive.google.com/file/d/1WMqrWKO-CcgIAkdvCI8is1g0SfgWaoAg/view?usp=sharing",
  },
  {
    label: "Progress Presentation 02",
    link: "https://drive.google.com/file/d/1fz-Od0yh3bcLrUWwAm9DX_JHKdy2vc8-/view?usp=sharing",
  },
  {
    label: "Final Presentation",
    link: "https://drive.google.com/pseudo/final-presentation",
  },
  {
    label: "Research Paper",
    sub: [
      { label: "Exosynergy Research Paper", link: "https://drive.google.com/pseudo/research-paper-exosynergy" },
      { label: "Research Paper — H.A.H.E.K Hettiarachchi  IT22323248", link: "https://drive.google.com/pseudo/research-paper-hettiarachchi" },
      { label: "Research Paper — Fernando M.K.C  IT22346254", link: "https://drive.google.com/pseudo/research-paper-fernando" },
      { label: "Research Paper — Tissera W A H  IT22026866", link: "https://drive.google.com/pseudo/research-paper-tissera" },
      { label: "Research Paper — C I Abeywickrama  IT22343048", link: "https://drive.google.com/pseudo/research-paper-abeywickrama" },
    ],
  },
  {
    label: "Thesis",
    sub: [
      { label: "Exosynergy Thesis", link: "https://drive.google.com/pseudo/thesis-exosynergy" },
      { label: "Thesis — H.A.H.E.K Hettiarachchi  IT22323248", link: "https://drive.google.com/pseudo/thesis-hettiarachchi" },
      { label: "Thesis — Fernando M.K.C  IT22346254", link: "https://drive.google.com/pseudo/thesis-fernando" },
      { label: "Thesis — Tissera W A H  IT22026866", link: "https://drive.google.com/pseudo/thesis-tissera" },
      { label: "Thesis — C I Abeywickrama  IT22343048", link: "https://drive.google.com/pseudo/thesis-abeywickrama" },
    ],
  },
];

export default function Documents() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden" id="documents">
      <style>{`
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(3deg); }
          66% { transform: translateY(-6px) rotate(-3deg); }
        }
        @keyframes iconSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes iconPulseScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes iconWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3), inset 0 0 15px rgba(168, 85, 247, 0.1); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6), inset 0 0 30px rgba(168, 85, 247, 0.2); }
        }
        @keyframes borderGlow {
          0%, 100% { border-color: rgba(168, 85, 247, 0.3); box-shadow: 0 0 15px rgba(168, 85, 247, 0.1); }
          50% { border-color: rgba(168, 85, 247, 0.6); box-shadow: 0 0 30px rgba(168, 85, 247, 0.3); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-icon-float { animation: iconFloat 3s ease-in-out infinite; }
        .animate-icon-spin { animation: iconSpin 8s linear infinite; }
        .animate-icon-pulse { animation: iconPulseScale 2s ease-in-out infinite; }
        .animate-icon-wiggle { animation: iconWiggle 2.5s ease-in-out infinite; }
        .animate-glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
        .animate-border-glow { animation: borderGlow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slideInUp 0.6s ease-out forwards; }
        .doc-icon-wrapper { position: relative; display: inline-flex; }
        .doc-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -8px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .group:hover .doc-icon-wrapper::before { opacity: 1; }
        .doc-icon-shine { position: relative; overflow: visible; }
        .doc-icon-shine::after {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%);
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }
        .group:hover .doc-icon-shine::after { animation: shimmer 0.6s ease-in-out; }
        @keyframes shimmer {
          0% { opacity: 0; transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 animate-slide-up flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-purple-300">Documentation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Resources
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-4">
            In-depth documentation providing insights into research objectives, methodologies, and progress.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <Link
              key={index}
              href={doc.link}
              className="group rounded-lg border-2 border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40 hover:from-purple-950/50 hover:to-slate-900/50 p-6 transition-all duration-300 hover:border-purple-500/60 backdrop-blur-sm hover:shadow-xl hover:shadow-purple-900/20 animate-slide-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300 pointer-events-none" />
              <div className="mb-5 relative z-10">
                <div className="doc-icon-wrapper inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-600/30 to-pink-600/20 group-hover:from-purple-600/50 group-hover:to-pink-600/40 transition-all duration-300 relative border border-purple-500/20 group-hover:border-purple-400/50">
                  <div className={`text-purple-300 group-hover:text-purple-200 transition-colors relative ${
                    index % 4 === 0 ? 'animate-icon-float' :
                    index % 4 === 1 ? 'animate-icon-spin' :
                    index % 4 === 2 ? 'animate-icon-pulse' :
                    'animate-icon-wiggle'
                  }`}>
                    {doc.icon}
                  </div>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none animate-glow-pulse" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-200 transition-colors relative z-10">
                {doc.title}
              </h3>
              <p className="text-sm text-slate-400 mb-5 group-hover:text-slate-300 transition-colors relative z-10">
                {doc.description}
              </p>
              <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors relative z-10">
                <span className="text-sm font-medium">View Document</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* ── Section Index ── */}
        <div className="mt-20 animate-slide-up">
          <div className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-purple-300">Section Index</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Document Directory
              </span>
            </h3>
          </div>

          <div className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm overflow-hidden divide-y divide-slate-700/40">
            {sectionIndex.map((entry, i) => (
              <div key={i} className="px-6 py-4">

                {/* Parent — linked if no sub, plain label if has sub */}
                {entry.sub ? (
                  <div className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-purple-500 shrink-0" />
                    <span className="text-sm font-semibold text-slate-200">
                      {entry.label}
                    </span>
                  </div>
                ) : (
                  <Link
                    href={entry.link ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 hover:text-purple-300 transition-colors"
                  >
                    <ChevronRight className="w-4 h-4 text-purple-500 group-hover:text-purple-300 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-purple-200 transition-colors">
                      {entry.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-purple-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                )}

                {/* Sub-items as bullet points */}
                {entry.sub && (
                  <ul className="mt-2 ml-7 space-y-1.5">
                    {entry.sub.map((sub, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500/60 shrink-0" />
                        <Link
                          href={sub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-1.5 text-sm text-slate-400 hover:text-purple-300 transition-colors duration-200"
                        >
                          {sub.label}
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            ))}
          </div>
        </div>
        {/* ── End Section Index ── */}

      </div>
    </section>
  );
}