"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { useState, useEffect } from "react";
import { PersonalInfo } from "@/types/portfolio";

interface HeroProps {
  personalInfo: PersonalInfo;
}


function TypewriterText({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const speed = isDeleting ? 50 : 90;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setIdx((i) => (i + 1) % texts.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, idx, texts]);

  return (
    <span className="font-heading">
      {displayed}
      <span className="animate-cursor ml-0.5 inline-block w-[2px] h-[0.9em] bg-black dark:bg-rose-500 align-middle" />
    </span>
  );
}

export function Hero({ personalInfo }: HeroProps) {
  const roles = [
    "Software Engineer",
    "ASP.NET Core Specialist",
    "Full-Stack Developer",
  ];

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-white dark:bg-[#020617] text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-rose-500 dark:selection:text-white">
      
      {/* Subtle animated background grid for Light Mode, and gradient for Dark Mode */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] opacity-30 dark:opacity-100" />
      
      <div className="hidden dark:block absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-slate-500/15 via-slate-500/10 to-slate-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="hidden dark:block absolute -bottom-10 right-10 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 flex items-center relative z-10 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          
          {/* ── LEFT: Text Content ── */}
          <m.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <m.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/20 dark:border-rose-500/25 bg-transparent dark:bg-rose-500/10 text-black/70 dark:text-rose-400 text-xs font-semibold mb-8 uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-rose-500/20 transition-colors duration-500 cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-emerald-500 animate-pulse" />
              Available for Roles
            </m.div>

            <m.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-black dark:text-white tracking-tighter mb-4 leading-[0.9]"
            >
              {personalInfo.name}
            </m.h1>

            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-4 mb-8 min-h-[32px]"
            >
              <div className="w-8 h-[2px] bg-black dark:bg-rose-500" />
              <div className="text-lg sm:text-xl font-medium text-black/60 dark:text-rose-200 uppercase tracking-widest">
                <TypewriterText texts={roles} />
              </div>
            </m.div>

            <m.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-black/60 dark:text-slate-400 leading-relaxed max-w-lg mb-10 font-light text-justify"
            >
              {personalInfo.summary}
            </m.p>

            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="group relative inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-black dark:bg-gradient-to-r dark:from-rose-500 dark:to-pink-600 text-white font-medium text-sm overflow-hidden rounded-none dark:rounded-xl dark:shadow-glow">
                <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-10">Hire Me</span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 bg-slate-900 dark:bg-gradient-to-r dark:from-rose-600 dark:to-pink-700 z-10">
                  Hire Me <FiArrowRight className="w-4 h-4" />
                </span>
              </a>
              
              <a href="/NajmunNaher_FinalCV.pdf" download="Najmun_Naher_CV.pdf" className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-black dark:border-slate-700 hover:bg-black dark:hover:bg-slate-800 hover:text-white dark:hover:text-white dark:bg-slate-800/50 text-black dark:text-slate-300 font-medium text-sm transition-colors duration-500 rounded-none dark:rounded-xl">
                <FiDownload className="w-4 h-4 group-hover:animate-bounce" /> Download CV
              </a>
            </m.div>
          </m.div>

          {/* ── RIGHT: Highly Aesthetic Photo Card ── */}
          <m.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center lg:justify-end relative"
          >
            <div className="relative group perspective-1000">
              <div className="relative w-[260px] h-[360px] sm:w-[380px] sm:h-[500px] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-[16px_16px_0_0_rgba(0,0,0,1)] dark:shadow-[16px_16px_0_0_rgba(244,63,94,0.3)] transition-transform duration-700 hover:-translate-y-2 hover:-translate-x-2 border-2 border-black dark:border-slate-700">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, 380px"
                  className="object-cover object-top transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
