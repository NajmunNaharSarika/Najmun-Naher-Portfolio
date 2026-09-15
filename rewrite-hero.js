const fs = require('fs');

const code = `"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMapPin, FiBriefcase } from "react-icons/fi";
import { TypewriterText } from "./TypewriterText";
import { PersonalInfo } from "@/types/portfolio";

interface HeroProps {
  personalInfo: PersonalInfo;
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12 flex items-center relative z-10 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
          
          {/* ── LEFT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/20 dark:border-rose-500/25 bg-transparent dark:bg-rose-500/10 text-black/70 dark:text-rose-400 text-xs font-semibold mb-8 uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-rose-500/20 transition-colors duration-500 cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-emerald-500 animate-pulse" />
              Available for Roles
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-black dark:text-white tracking-tighter mb-4 leading-[0.9]"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-4 mb-8 h-8"
            >
              <div className="w-8 h-[2px] bg-black dark:bg-rose-500" />
              <div className="text-lg sm:text-xl font-medium text-black/60 dark:text-rose-200 uppercase tracking-widest">
                <TypewriterText texts={roles} />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-lg text-black/60 dark:text-slate-400 leading-relaxed max-w-lg mb-10 font-light"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black dark:bg-gradient-to-r dark:from-rose-500 dark:to-pink-600 text-white font-medium text-sm overflow-hidden rounded-none dark:rounded-xl dark:shadow-glow">
                <span className="relative z-10 transition-transform duration-500 group-hover:-translate-y-10">Hire Me</span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 bg-slate-900 dark:bg-gradient-to-r dark:from-rose-600 dark:to-pink-700 z-10">
                  Hire Me <FiArrowRight className="w-4 h-4" />
                </span>
              </a>
              
              <a href="/NajmunNaher_FinalCV.pdf" download="Najmun_Naher_CV.pdf" className="group inline-flex items-center gap-2 px-8 py-4 border border-black dark:border-slate-700 hover:bg-black dark:hover:bg-slate-800 hover:text-white dark:hover:text-white dark:bg-slate-800/50 text-black dark:text-slate-300 font-medium text-sm transition-colors duration-500 rounded-none dark:rounded-xl">
                <FiDownload className="w-4 h-4 group-hover:animate-bounce" /> Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Highly Aesthetic Photo Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center lg:justify-end relative"
          >
            <div className="relative group perspective-1000">
              <div className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[500px] overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-[16px_16px_0_0_rgba(0,0,0,1)] dark:shadow-[16px_16px_0_0_rgba(244,63,94,0.3)] transition-transform duration-700 hover:-translate-y-2 hover:-translate-x-2 border-2 border-black dark:border-slate-700">
                <Image
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover object-top transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-black dark:border-slate-700 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-black dark:text-white font-bold uppercase tracking-widest text-xs mb-1">Software Engineer</p>
                  <p className="text-black/60 dark:text-slate-400 text-[10px] uppercase tracking-widest">{personalInfo.address.current}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Hero.tsx', code);
console.log('Hero updated');
