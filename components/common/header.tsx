"use client";

import * as React from "react";
import { Menu, ArrowRight, Telescope, Github, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toogle";

const Header = () => {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // <section className="py-4 bg-gradient-to-b from-transparent to-indigo-50/30 dark:to-indigo-950/20">
    <section className="sticky top-0 z-50 py-4 bg-gradient-to-b from-transparent to-indigo-50/30 dark:to-indigo-950/20">
      <style>{`
        @keyframes floatSmooth {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }

        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(99, 102, 241, 0.7);
          }
        }

        @keyframes shimmer-border {
          0%, 100% {
            border-color: rgba(99, 102, 241, 0.2);
            box-shadow: 0 8px 32px rgba(99, 102, 241, 0.08);
          }
          50% {
            border-color: rgba(99, 102, 241, 0.4);
            box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-icon {
          animation: floatSmooth 3.5s ease-in-out infinite;
        }

        .animate-glow-text {
          animation: glow-pulse 2.5s ease-in-out infinite;
        }

        .animate-shimmer-border {
          animation: shimmer-border 3s ease-in-out infinite;
        }

        .animate-slide-down {
          animation: slideInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .nav-bar {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.4) 0%, rgba(30, 27, 75, 0.3) 100%);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .nav-bar:hover {
          border-color: rgba(99, 102, 241, 0.4);
        }

        .nav-link {
          position: relative;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo-icon {
          transition: all 0.3s ease;
        }

        .logo-container:hover .logo-icon {
          animation: floatSmooth 2s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(99, 102, 241, 0.6));
        }

        .mobile-nav-content {
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.9) 100%);
        }
      `}</style>

      <div className="container mx-auto">
        {/* Desktop Navigation */}
        <nav className="hidden justify-between lg:flex sm:mx-10 md:mx-0 px-8 py-4 rounded-2xl mx-5 nav-bar animate-slide-down">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Link href="/" className="logo-container group">
                <Telescope className="logo-icon w-6 h-6 text-indigo-500 dark:text-indigo-400" strokeWidth={1.8} />
                <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  ExoSynergy
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-2">
              <Link
                className={cn(
                  "nav-link text-indigo-800 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#scope"
                onClick={(e) => scrollToSection(e, "scope")}
              >
                Components
              </Link>
              <Link
                className={cn(
                  "nav-link text-indigo-800 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#milestones"
                onClick={(e) => scrollToSection(e, "milestones")}
              >
                Research
              </Link>
              <Link
                className={cn(
                  "nav-link text-indigo-800 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#documents"
                onClick={(e) => scrollToSection(e, "documents")}
              >
                Publications
              </Link>
              <Link
                className={cn(
                  "nav-link text-indigo-800 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#presentations"
                onClick={(e) => scrollToSection(e, "presentations")}
              >
                Results
              </Link>
              <Link
                className={cn(
                  "nav-link text-indigo-800 dark:text-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-200",
                  buttonVariants({
                    variant: "ghost",
                  })
                )}
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
              >
                Team
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex gap-3 items-center">
            <Link
              href="https://github.com/HeidiHettiarachchi"
              target="_blank"
              className="inline-flex items-center justify-center h-10 w-10 rounded-lg text-indigo-700 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all duration-300"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5" strokeWidth={1.8} />
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden mx-5 animate-slide-down">
          <div className="flex items-center justify-between nav-bar rounded-2xl px-4 py-3">
            <div className="flex items-center gap-3">
              <Sheet key="right">
                <SheetTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="border-indigo-300 dark:border-indigo-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/40"
                  >
                    <Menu className="size-5" strokeWidth={1.8} />
                  </Button>
                </SheetTrigger>

                <SheetContent className="mobile-nav-content border-indigo-700/50 overflow-y-auto" side="left">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex justify-between items-center gap-2 mt-5">
                        <div className="flex items-center gap-2">
                          <Link href="/" className="logo-container">
                            <Telescope className="w-5 h-5 text-indigo-500 dark:text-indigo-400" strokeWidth={1.8} />
                            <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                              ExoSynergy
                            </span>
                          </Link>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href="https://github.com/HeidiHettiarachchi"
                            target="_blank"
                            className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-indigo-400 hover:bg-indigo-900/50 transition-all"
                            aria-label="GitHub"
                          >
                            <Github size={18} strokeWidth={1.8} />
                          </Link>
                          <ThemeToggle />
                        </div>
                      </div>
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Menu Items */}
                  <div className="mb-8 mt-10 flex flex-col gap-5">
                    <Link
                      href="#scope"
                      className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                      onClick={(e) => scrollToSection(e, "scope")}
                    >
                      Components
                    </Link>
                    <Link
                      href="#milestones"
                      className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                      onClick={(e) => scrollToSection(e, "milestones")}
                    >
                      Research
                    </Link>
                    <Link
                      href="#documents"
                      className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                      onClick={(e) => scrollToSection(e, "documents")}
                    >
                      Publications
                    </Link>
                    <Link
                      href="#presentations"
                      className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                      onClick={(e) => scrollToSection(e, "presentations")}
                    >
                      Results
                    </Link>
                    <Link
                      href="#about"
                      className="font-semibold text-indigo-300 hover:text-indigo-200 transition-colors"
                      onClick={(e) => scrollToSection(e, "about")}
                    >
                      Team
                    </Link>
                  </div>

                  {/* Footer Links */}
                  <div className="border-t border-indigo-700/50 pt-6">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-indigo-300 hover:text-indigo-200 hover:bg-indigo-900/40 text-sm"
                        )}
                        href="#"
                      >
                        Documentation
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-indigo-300 hover:text-indigo-200 hover:bg-indigo-900/40 text-sm"
                        )}
                        href="#"
                      >
                        Contact
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-indigo-300 hover:text-indigo-200 hover:bg-indigo-900/40 text-sm"
                        )}
                        href="#"
                      >
                        About Us
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-indigo-300 hover:text-indigo-200 hover:bg-indigo-900/40 text-sm"
                        )}
                        href="#"
                      >
                        Legal
                      </Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-4 flex flex-col gap-3">
                      <Link href="#" className="w-full">
                        <Button 
                          variant="outline" 
                          className="w-full border-indigo-600 text-indigo-400 hover:bg-indigo-900/40 hover:text-indigo-300"
                        >
                          Sign In
                        </Button>
                      </Link>
                      <Link href="#" className="w-full">
                        <Button 
                          className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold"
                        >
                          Get Started
                          <ArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex items-center gap-2">
                <Telescope className="w-5 h-5 text-indigo-500 dark:text-indigo-400 animate-float-icon" strokeWidth={1.8} />
                <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                  ExoSynergy
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="https://github.com/HeidiHettiarachchi"
                target="_blank"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} strokeWidth={1.8} />
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;