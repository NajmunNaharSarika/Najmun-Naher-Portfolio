"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  personalInfo: {
    name: string;
    contact: {
      phone1: string;
      github: string;
      linkedin?: string;
    };
  };
}

export function Navbar({ personalInfo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check section in view
      const sections = ["hero", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#hero", id: "hero" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const cleanPhone = personalInfo.contact.phone1.replace(/[^0-9]/g, "");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 dark:bg-slate-950/80 backdrop-blur-lg py-3 shadow-md shadow-black/5 dark:shadow-black/20 border-b border-slate-200 dark:border-slate-800"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none min-w-0 shrink"
          >
            <div className="flex flex-col truncate">
              <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-black dark:text-white group-hover:text-black/70 dark:group-hover:text-rose-400 transition-colors truncate">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-semibold text-black/60 dark:text-slate-400 -mt-1 truncate">
                Junior Software Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200 dark:border-slate-800/80 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <m.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-black dark:bg-gradient-to-r dark:from-rose-500 dark:to-pink-600 rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Switch */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-black dark:text-rose-400 bg-slate-100 dark:bg-rose-950/40 border border-slate-200 dark:border-rose-800/60 hover:bg-slate-200 dark:hover:bg-rose-900/50 transition-colors shadow-sm"
              title="WhatsApp Message"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-black dark:text-slate-200 hover:text-black dark:hover:text-rose-400 hover:border-black transition-all shadow-sm"
              aria-label="GitHub Profile"
              title="View GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            {personalInfo.contact.linkedin && (
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-black dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 transition-all shadow-sm"
                aria-label="LinkedIn Profile"
                title="View LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            )}

            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-violet-900 dark:text-slate-200 shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-4 h-4" />
              ) : (
                <FiMenu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-5 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-none text-sm font-bold uppercase tracking-widest transition-colors border border-transparent ${
                    activeSection === link.id
                       ? "bg-black text-white dark:bg-slate-800 dark:border-slate-700"
                       : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <a
                  href={`tel:${personalInfo.contact.phone1}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest text-white bg-black hover:bg-black/80 dark:bg-slate-800 dark:hover:bg-slate-700 border border-black dark:border-slate-700 transition-colors"
                >
                  <FiPhoneCall className="w-4 h-4" />
                  <span>Call Direct</span>
                </a>
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-none bg-white dark:bg-slate-800 text-black dark:text-slate-200 border border-black dark:border-slate-700 hover:bg-black hover:text-white dark:hover:bg-slate-700 transition-colors"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                {personalInfo.contact.linkedin && (
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-none bg-white dark:bg-slate-800 text-black dark:text-slate-200 border border-black dark:border-slate-700 hover:bg-black hover:text-white dark:hover:bg-slate-700 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
