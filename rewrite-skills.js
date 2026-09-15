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
  FiCpu, FiBox
} from "react-icons/fi";
import { VscCode } from "react-icons/vsc";
import { SkillCategory } from "@/types/portfolio";

interface SkillsProps {
  skills: SkillCategory[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="relative overflow-hidden bg-white dark:bg-slate-950 text-black dark:text-slate-100 transition-colors duration-300">
      
      {/* Background elements for dark mode */}
      <div className="hidden dark:block absolute -left-40 top-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden dark:block absolute -right-40 bottom-20 w-[30rem] h-[30rem] bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="pt-12 pb-12 relative overflow-hidden">
        
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
            
            {/* Category 1: Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <div className="border-b-2 border-black dark:border-slate-800 pb-4 mb-6 transition-colors duration-300 group-hover:border-black dark:group-hover:border-rose-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 mb-1 block">01</span>
                <h3 className="text-xl font-bold tracking-tight dark:text-white">Languages</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <TbBrandCSharp className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">C#</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiJavascript className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">JavaScript</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiTypescript className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">TypeScript</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <span className="font-bold text-[10px]">TSQL</span>
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">T-SQL</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <TbBrandHtml5 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">HTML5 / CSS3</span>
                </li>
              </ul>
            </motion.div>

            {/* Category 2: Backend */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="border-b-2 border-black dark:border-slate-800 pb-4 mb-6 transition-colors duration-300 group-hover:border-black dark:group-hover:border-rose-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 mb-1 block">02</span>
                <h3 className="text-xl font-bold tracking-tight dark:text-white">Backend</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiDotnet className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">ASP.NET MVC 5</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiDotnet className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">ASP.NET Core</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <FaServer className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">RESTful APIs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <FiLayers className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Entity Framework</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <FiBox className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Clean Architecture</span>
                </li>
              </ul>
            </motion.div>

            {/* Category 3: Frontend */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group"
            >
              <div className="border-b-2 border-black dark:border-slate-800 pb-4 mb-6 transition-colors duration-300 group-hover:border-black dark:group-hover:border-rose-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 mb-1 block">03</span>
                <h3 className="text-xl font-bold tracking-tight dark:text-white">Frontend</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiAngular className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Angular</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <FiLayout className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Blazor</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <TbBrandTailwind className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiReact className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">React.js</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiNextdotjs className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Next.js</span>
                </li>
              </ul>
            </motion.div>

            {/* Category 4: Tools & DB */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group"
            >
              <div className="border-b-2 border-black dark:border-slate-800 pb-4 mb-6 transition-colors duration-300 group-hover:border-black dark:group-hover:border-rose-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 mb-1 block">04</span>
                <h3 className="text-xl font-bold tracking-tight dark:text-white">Data & Tools</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <TbDatabase className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">MS SQL Server</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiMongodb className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">MongoDB</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiGit className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Git & GitHub</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <VscCode className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Visual Studio 2022</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 flex flex-shrink-0 items-center justify-center border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-black dark:text-rose-400">
                    <SiDocker className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium dark:text-slate-300">Docker</span>
                </li>
              </ul>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}
`;
fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Skills.tsx', code);
console.log('Skills updated');
