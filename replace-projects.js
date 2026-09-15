const fs = require('fs');

const code = `"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiFolder, FiArrowRight } from "react-icons/fi";
import { ProjectItem } from "@/types/portfolio";

interface ProjectsProps {
  projects: ProjectItem[];
}

export function Projects({ projects }: ProjectsProps) {
  const [filter, setFilter] = useState<string>("all");

  const getProjectCategory = (project: ProjectItem) => {
    if (project.category) return project.category;
    const title = project.title.toLowerCase();
    const desc = project.description.toLowerCase();

    if (title.includes("asp.net") || desc.includes("asp.net")) return "dotnet";
    if (title.includes("c#") || title.includes("repository") || title.includes("linq")) return "csharp";
    if (title.includes("node") || title.includes("html & css")) return "web";
    if (title.includes("restaurant") || desc.includes("sql")) return "database";
    return "other";
  };

  const filterOptions = [
    { id: "all", label: "All Projects" },
    { id: "dotnet", label: "ASP.NET / Core" },
    { id: "csharp", label: "C# & Architecture" },
    { id: "web", label: "Web & Full Stack" },
    { id: "database", label: "Database & SQL" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    const cat = getProjectCategory(project);
    return cat === filter;
  });

  return (
    <section id="projects" className="relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-rose-500/10 border border-black/10 dark:border-rose-500/20 text-black dark:text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FiFolder className="w-3.5 h-3.5" />
            <span>Engineered Projects</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-black dark:text-white tracking-tighter uppercase mb-6">
            Selected Works.
          </h2>
          <div className="w-16 h-1 bg-black dark:bg-rose-500 mx-auto mb-6" />
          
          <p className="mt-3 text-lg text-black/60 dark:text-slate-400 font-light">
            A curated catalog of enterprise .NET solutions, full-stack systems, architectural demonstrations, and database projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={\`px-5 py-2.5 rounded-none text-xs sm:text-sm font-bold uppercase tracking-widest border transition-all duration-300 \${
                  filter === opt.id
                    ? "bg-black text-white border-black dark:bg-rose-500 dark:border-rose-500"
                    : "bg-transparent text-black/60 border-black/20 hover:border-black hover:text-black dark:text-slate-400 dark:border-slate-800 dark:hover:text-white dark:hover:border-slate-600"
                }\`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group flex flex-col justify-between bg-slate-50 dark:bg-slate-900 border border-black/10 dark:border-slate-800 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0_0_rgba(244,63,94,0.4)] transition-all duration-300 overflow-hidden"
              >
                <div>
                  <div className="relative h-56 w-full bg-slate-200 dark:bg-slate-900 overflow-hidden border-b border-black/10 dark:border-slate-800">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-rose-500/20 text-black dark:text-rose-300 text-[10px] font-bold uppercase tracking-widest border border-black/20 dark:border-rose-500/30 backdrop-blur-md">
                        {getProjectCategory(project).toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading font-black text-xl text-black dark:text-white mb-3 group-hover:text-black/70 dark:group-hover:text-rose-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-black/60 dark:text-slate-400 line-clamp-3 mb-5 leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 4).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-black/5 dark:bg-slate-800 text-black/70 dark:text-slate-300 border border-black/10 dark:border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between gap-4 mt-auto">
                  <Link
                    href={\`/projects/\${project.id}\`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-black dark:text-rose-400 hover:text-black/60 dark:hover:text-rose-300 transition-colors"
                  >
                    <span>Deep Dive</span>
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-black/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-white dark:text-slate-200 text-[10px] font-bold uppercase tracking-widest transition-all"
                  >
                    <FaGithub className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/NajmunNaharSarika"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-black dark:bg-slate-900 dark:hover:bg-slate-800 text-black hover:text-white dark:text-slate-200 border-2 border-black dark:border-slate-700 text-xs font-bold uppercase tracking-widest transition-all group"
          >
            <FaGithub className="w-4 h-4 text-black group-hover:text-white dark:text-rose-400" />
            <span>Explore All Repositories</span>
          </a>
        </div>

      </div>
    </section>
  );
}
`;

fs.writeFileSync('c:/Users/USER/Documents/Portfolio/src/components/Projects.tsx', code);
console.log('Projects design replaced.');
