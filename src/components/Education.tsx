"use client";

import { m } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { FiBookOpen, FiAward } from "react-icons/fi";
import { EducationItem as EducationType, TrainingItem as TrainingType } from "@/types/portfolio";

interface EducationProps {
  education: EducationType[];
  training: TrainingType[];
}

export function Education({ education, training }: EducationProps) {
  return (
    <section id="education" className="relative overflow-hidden bg-slate-50 dark:bg-[#020617] text-black dark:text-slate-100 transition-colors duration-300">
      
      {/* Background decorations for dark mode */}
      <div className="hidden dark:block absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-slate-500/10 via-slate-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-8 pt-12 pb-24 relative z-10">
        
        <m.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase dark:text-white">
            Background
          </h2>
          <div className="w-16 h-1 bg-black dark:bg-rose-500 mx-auto mb-6" />
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-black dark:bg-rose-500/10 text-white dark:text-rose-500 dark:border dark:border-rose-500/25 flex items-center justify-center rounded-full">
                <FiBookOpen className="w-5 h-5 block dark:hidden" />
                <FaGraduationCap className="w-5 h-5 hidden dark:block" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight dark:text-white">Academics</h3>
            </div>

            <div className="space-y-12 pl-6 border-l-2 border-black/10 dark:border-slate-800">
              {education.map((edu, i) => (
                <m.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-black dark:border-rose-500 rounded-full group-hover:scale-150 transition-all duration-300" />
                  
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-black dark:bg-rose-500/20 text-white dark:text-rose-300 dark:border dark:border-rose-500/30 px-2 py-1">
                      {edu.year}
                    </span>
                    <span className="text-xs font-bold text-black/50 dark:text-slate-400">
                      {edu.result}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold leading-tight mb-2 group-hover:underline underline-offset-4 decoration-2 dark:text-slate-100">{edu.degree}</h4>
                  <p className="text-black/60 dark:text-slate-400 font-light text-sm">{edu.institute}</p>
                </m.div>
              ))}
            </div>
          </div>

          {/* Training Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 border-2 border-black dark:border-indigo-500/25 dark:bg-indigo-500/10 text-black dark:text-indigo-400 flex items-center justify-center rounded-full">
                <FiAward className="w-5 h-5 block dark:hidden" />
                <FaCertificate className="w-5 h-5 hidden dark:block" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight dark:text-white">Certifications</h3>
            </div>

            <div className="space-y-12 pl-6 border-l-2 border-black/10 dark:border-slate-800">
              {training.map((train, i) => (
                <m.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -left-[33px] top-1 w-4 h-4 bg-white dark:bg-slate-900 border-4 border-black/40 dark:border-indigo-500 rounded-full group-hover:border-black dark:group-hover:border-indigo-400 group-hover:scale-150 transition-all duration-300" />
                  
                  <div className="mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-indigo-500/30 dark:bg-indigo-500/10 text-black/70 dark:text-indigo-300 px-2 py-1">
                      {train.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold leading-tight mb-2 group-hover:underline underline-offset-4 decoration-2 dark:text-slate-100">{train.course}</h4>
                  <p className="text-black/60 dark:text-slate-400 font-light text-sm">{train.institute}</p>
                </m.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
