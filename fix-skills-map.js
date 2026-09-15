const fs = require('fs');
const code = `"use client";

import { motion } from "framer-motion";
import { 
  TbBrandCSharp, TbBrandHtml5, TbBrandCss3, TbDatabase,
  TbBrandTailwind
} from "react-icons/tb";
import { 
  SiDotnet, SiAngular, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiMongodb, SiRedis,
  SiGit, SiGithub, SiDocker, SiMicrosoftazure
} from "react-icons/si";
import { 
  FaServer, FaDatabase, FaCogs, FaCode,
  FaVial, FaCloud
} from "react-icons/fa";
import { 
  FiLayout, FiLayers, FiTerminal, FiDatabase,
  FiCpu, FiBox, FiTool
} from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import { SkillsData } from "@/types/portfolio";

interface SkillsProps {
  skills: SkillsData;
}

const getIconForSkill = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("c#")) return TbBrandCSharp;
  if (lower.includes("javascript")) return SiJavascript;
  if (lower.includes("typescript")) return SiTypescript;
  if (lower.includes("html") || lower.includes("css")) return TbBrandHtml5;
  if (lower.includes("mvc") || lower.includes("core") || lower.includes(".net")) return SiDotnet;
  if (lower.includes("angular")) return SiAngular;
  if (lower.includes("entity")) return FiLayers;
  if (lower.includes("sql") || lower.includes("t-sql")) return TbDatabase;
  if (lower.includes("pattern") || lower.includes("architecture")) return FiBox;
  if (lower.includes("visual studio")) return VscCode;
  if (lower.includes("git") || lower.includes("github")) return SiGit;
  if (lower.includes("azure")) return SiMicrosoftazure;
  if (lower.includes("docker")) return SiDocker;
  if (lower.includes("tailwind")) return TbBrandTailwind;
  if (lower.includes("react")) return SiReact;
  if (lower.includes("next")) return SiNextdotjs;
  if (lower.includes("mongo")) return SiMongodb;
  return FiCode;
};

export function Skills({ skills }: SkillsProps) {
  const categories = [
    { title: "Languages", data: skills.languages },
    { title: "Frameworks", data: skills.frameworks },
    { title: "Databases & Patterns", data: skills.databases_and_patterns },
    { title: "Tools & AI", data: skills.tools },
  ];

  return (
    <section id="skills" className="relative overflow-hidden bg-white dark:bg-slate-950 text-black dark:text-slate-100 transition-colors duration-300">
      
      {/* Background elements for dark mode */}
      <div className="hidden dark:block absolute -left-40 top-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden dark:block absolute -right-40 bottom-20 w-[30rem] h-[30rem] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="pt-12 pb-12 relative overflow-hidden z-10">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-6 uppercase dark:text-white">
              Technical Arsenal
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-rose-500 mx-auto mb-6" />
            <p className="text-lg text-black/60 dark:text-slate-400 font-light">
              Mastery across the stack. Focused on enterprise architecture, robust backends, and modern frontend ecosystems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: (idx + 1) * 0.1 }}
                className="group"
              >
                <div className="border-b-2 border-black dark:border-slate-800 pb-4 mb-6 transition-colors duration-300 group-hover:border-black dark:group-hover:border-rose-500">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 mb-1 block">0{idx + 1}</span>
                  <h3 className="text-xl font-bold tracking-tight dark:text-white">{cat.title}</h3>
                </div>
                <ul className="space-y-4">
                  {cat.data?.map((skill, sIdx) => {
                    const Icon = getIconForSkill(skill);
                    return (
                      <li key={sIdx} className="flex items-center gap-3">
                        <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium dark:text-slate-300">{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}

          </div>

        </div>
      </div>

    </section>
  );
}
`;
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', code);
console.log('Fixed Skills mapping');
