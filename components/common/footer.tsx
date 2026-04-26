"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Telescope, Star, Sparkles, Rocket, Send, MapPin, Mail } from "lucide-react";
import { SubscribeForm } from "./subscribe-form";
import Image from "next/image";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      <style>{`
        @keyframes floatBg {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(40px) scale(1.08); }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes orbitIcon {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(99, 102, 241, 0.7));
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes linkHover {
          from { transform: translateX(0); }
          to { transform: translateX(4px); }
        }

        @keyframes borderGlow {
          0%, 100% {
            border-color: rgba(99, 102, 241, 0.2);
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);
          }
          50% {
            border-color: rgba(99, 102, 241, 0.5);
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
          }
        }

        @keyframes shimmerText {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        .animate-float-bg {
          animation: floatBg 12s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-orbit-icon {
          animation: orbitIcon 3.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-link-hover {
          animation: linkHover 0.3s ease;
        }

        .animate-border-glow {
          animation: borderGlow 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmerText 2s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }

        .footer-link {
          position: relative;
          color: #cbd5e1;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #a5b4fc;
          text-shadow: 0 0 12px rgba(99, 102, 241, 0.5);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .glass-container {
          background: linear-gradient(135deg, rgba(30, 27, 75, 0.3) 0%, rgba(49, 46, 129, 0.2) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 1.5rem;
        }

        .glass-container:hover {
          border-color: rgba(99, 102, 241, 0.4);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.15);
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }

        .section-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #e0e7ff;
          letter-spacing: -0.01em;
        }

        .section-text {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .logo-text {
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.75rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(147, 112, 219, 0.05));
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: #a5b4fc;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(147, 112, 219, 0.15));
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        }

        .divider-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
        }

        .footer-image-overlay {
          background: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.7) 50%, transparent 100%);
        }

        .accent-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(147, 112, 219, 0.1));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 0.75rem;
          color: #a5b4fc;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .accent-badge:hover {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(147, 112, 219, 0.15));
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/15 to-purple-500/10 rounded-full blur-3xl animate-float-bg" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-indigo-500/5 rounded-full blur-3xl animate-float-bg" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/8 to-transparent rounded-full blur-3xl animate-float-bg" style={{ animationDelay: '2s' }} />
      </div>

      
      {/* Main Footer Content */}
      <div className="container px-4 py-16 mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand Section */}
          <div className="glass-container p-8 animate-slide-up">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Telescope className="w-7 h-7 text-indigo-500 dark:text-indigo-400 animate-orbit-icon animate-pulse-glow" strokeWidth={2} />
                <Sparkles className="absolute -top-2 -right-1 w-4 h-4 text-purple-400 animate-twinkle" />
              </div>
              <h2 className="logo-text text-2xl">
                Exoplanet Hub
              </h2>
            </div>
            <p className="section-text mb-6">
              Pioneering AI-driven discovery of distant worlds through advanced spectroscopy, hybrid detection, and atmospheric analysis.
            </p>
            <div className="accent-badge inline-flex">
              <Rocket className="w-4 h-4" />
              Space Research Initiative
            </div>
          </div>

          {/* Quick Links */}
          <div className="glass-container p-8 animate-slide-up delay-100">
            <h3 className="section-title mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-indigo-400" strokeWidth={2} />
              Quick Links
            </h3>
            <nav className="space-y-3">
              <Link href="#" className="footer-link">
                Home
              </Link>
              <Link href="#" className="footer-link">
                Research Components
              </Link>
              <Link href="#" className="footer-link">
                Discoveries
              </Link>
              <Link href="#" className="footer-link">
                Publications
              </Link>
              <Link href="#" className="footer-link">
                Presentations
              </Link>
              <Link href="#" className="footer-link">
                Team
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div className="glass-container p-8 animate-slide-up delay-200">
            <h3 className="section-title mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" strokeWidth={2} />
              Resources
            </h3>
            <nav className="space-y-3">
              <Link href="#" className="footer-link">
                Documentation
              </Link>
              <Link href="#" className="footer-link">
                API Reference
              </Link>
              <Link href="#" className="footer-link">
                Research Papers
              </Link>
              <Link href="#" className="footer-link">
                GitHub Repos
              </Link>
              <Link href="#" className="footer-link">
                Support
              </Link>
              <Link href="#" className="footer-link">
                Contact
              </Link>
            </nav>
          </div>

          {/* Newsletter Subscription */}
          <div className="glass-container p-8 animate-slide-up delay-300">
            <h3 className="section-title mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-pink-400" strokeWidth={2} />
              Stay Updated
            </h3>
            <p className="section-text mb-6">
              Subscribe to receive updates on exoplanet discoveries and research findings.
            </p>
            <SubscribeForm />
          </div>
        </div>

        {/* Divider */}
        <div className="divider-line my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row animate-slide-up delay-400">
          <p className="text-sm text-slate-400 flex items-center gap-2">
            <span>© {year} Exoplanet Research Initiative.</span>
            <span>Advancing cosmic knowledge through AI.</span>
          </p>

          {/* Social Links */}
          <div className="flex gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="social-icon hover:shadow-lg transition-all"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="social-icon hover:shadow-lg transition-all"
            >
              <Twitter className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="social-icon hover:shadow-lg transition-all"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="social-icon hover:shadow-lg transition-all"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <Link href="#" className="text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </footer>
  );
};

export default Footer;