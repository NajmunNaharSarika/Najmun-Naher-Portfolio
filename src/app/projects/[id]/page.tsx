import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  FiArrowLeft, FiGithub, FiExternalLink, FiLayers, 
  FiCheckCircle, FiCode, FiCpu, FiArrowRight, FiFolder, FiHome, FiMessageSquare
} from "react-icons/fi";
import { SiDotnet, SiNodedotjs, SiMongodb, SiSocketdotio, SiBootstrap } from "react-icons/si";
import { TbBrandCSharp, TbBrandHtml5, TbBrandCss3, TbDatabase, TbApi } from "react-icons/tb";
import resumeDataRaw from "../../../../data/resumeData.json";
import { ProjectItem, ResumeData } from "@/types/portfolio";

const resumeData = resumeDataRaw as unknown as ResumeData;

interface PageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return resumeData.projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = resumeData.projects.find((p) => p.id === params.id);
  if (!project) {
    return {
      title: "Project Not Found | Najmun Naher Portfolio",
    };
  }

  return {
    title: `${project.title} | Najmun Naher Projects`,
    description: project.description,
  };
}

const getTechIcon = (name: string) => {
  name = name.toLowerCase();
  if (name.includes("c#") || name.includes("csharp")) return TbBrandCSharp;
  if (name.includes(".net") || name.includes("dotnet")) return SiDotnet;
  if (name.includes("node") || name.includes("express")) return SiNodedotjs;
  if (name.includes("mongo")) return SiMongodb;
  if (name.includes("html")) return TbBrandHtml5;
  if (name.includes("css")) return TbBrandCss3;
  if (name.includes("socket")) return SiSocketdotio;
  if (name.includes("sql") || name.includes("database")) return TbDatabase;
  if (name.includes("bootstrap")) return SiBootstrap;
  if (name.includes("api") || name.includes("rest")) return TbApi;
  return FiCode;
};

export default function ProjectDetailsPage({ params }: PageProps) {
  const projectIndex = resumeData.projects.findIndex((p) => p.id === params.id);
  if (projectIndex === -1) {
    notFound();
  }

  const project: ProjectItem = resumeData.projects[projectIndex];
  const prevProject = projectIndex > 0 ? resumeData.projects[projectIndex - 1] : null;
  const nextProject = projectIndex < resumeData.projects.length - 1 ? resumeData.projects[projectIndex + 1] : null;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-black dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Floating Navigation Bar */}
      <div className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-black/10 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black dark:text-slate-300 hover:text-black/60 dark:hover:text-rose-400 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Quick Breadcrumb */}
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-slate-500">
            <Link href="/" className="hover:text-black dark:hover:text-white flex items-center gap-1">
              <FiHome className="w-3 h-3" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-black dark:hover:text-white">
              Projects
            </Link>
            <span>/</span>
            <span className="text-black dark:text-rose-500 truncate max-w-[200px]">{project.title}</span>
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-slate-800 hover:bg-black/80 dark:hover:bg-slate-700 text-white text-[10px] font-bold uppercase tracking-widest transition-all"
          >
            <FiGithub className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub Repository</span>
            <span className="sm:hidden">GitHub</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Project Header Banner */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 dark:bg-rose-500/10 border border-black/10 dark:border-rose-500/20 text-black dark:text-rose-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            <FiFolder className="w-3.5 h-3.5" />
            <span>{project.category ? `${project.category.toUpperCase()} Architecture` : "Software Project"}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black dark:text-white tracking-tighter uppercase mb-6 leading-[1.1]">
            {project.title}
          </h1>

          <p className="text-lg text-black/60 dark:text-slate-300 max-w-3xl leading-relaxed font-light">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-slate-800 hover:bg-black/80 dark:hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-widest transition-all"
            >
              <FiGithub className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
              <FiExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-black dark:bg-transparent dark:hover:bg-slate-800 text-black hover:text-white dark:text-rose-400 dark:hover:text-rose-300 border border-black dark:border-slate-700 text-xs font-bold uppercase tracking-widest transition-all"
            >
              <span>Discuss This Project</span>
            </Link>
          </div>
        </div>

        {/* Project Visual Image Showcase */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-200 dark:bg-slate-900 border border-black/10 dark:border-slate-800 mb-16 group overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/5 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-700" />
        </div>

        {/* Two-Column Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Comprehensive Overview & Features */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Long Overview */}
            <div className="bg-white dark:bg-slate-900 border border-black/10 dark:border-slate-800 p-8 sm:p-10 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0_0_rgba(244,63,94,0.4)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 border border-black dark:border-rose-500/50 flex items-center justify-center text-black dark:text-rose-400">
                  <FiLayers className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-widest text-black dark:text-white">
                  Project Overview
                </h2>
              </div>
              <p className="text-black/70 dark:text-slate-300 text-base leading-relaxed whitespace-pre-line font-light">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Features Breakdown */}
            {project.features && project.features.length > 0 && (
              <div className="bg-white dark:bg-slate-900 border border-black/10 dark:border-slate-800 p-8 sm:p-10 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0_0_rgba(244,63,94,0.4)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 border border-black dark:border-rose-500/50 flex items-center justify-center text-black dark:text-rose-400">
                    <FiCpu className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-widest text-black dark:text-white">
                    Key Features
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {project.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-start gap-4 p-4 border border-black/10 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50"
                    >
                      <div className="w-6 h-6 border border-black/20 dark:border-rose-500/30 flex items-center justify-center flex-shrink-0 bg-white dark:bg-slate-900">
                        <FiCheckCircle className="w-3.5 h-3.5 text-black dark:text-rose-400" />
                      </div>
                      <span className="text-sm font-medium text-black/80 dark:text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Tech Stack & Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Tech Stack Card */}
            <div className="bg-white dark:bg-slate-900 border border-black/10 dark:border-slate-800 p-8 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0_0_rgba(244,63,94,0.4)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <FiCode className="w-6 h-6 text-black dark:text-rose-400" />
                <h3 className="font-black uppercase tracking-widest text-lg text-black dark:text-white">
                  Technologies
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {(project.technologies || []).map((tech, tIdx) => {
                  const Icon = getTechIcon(tech);
                  return (
                    <div
                      key={tIdx}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-black/10 dark:border-slate-800 text-[10px] font-bold uppercase tracking-widest text-black/70 dark:text-slate-300"
                    >
                      <Icon className="w-3.5 h-3.5 text-black dark:text-rose-400" />
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-black dark:bg-slate-900 border border-black dark:border-slate-800 p-8 hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.2)] dark:hover:shadow-[8px_8px_0_0_rgba(244,63,94,0.4)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FiMessageSquare className="w-6 h-6 text-white dark:text-rose-400" />
                <h3 className="font-black uppercase tracking-widest text-lg text-white dark:text-white">
                  Collaborate
                </h3>
              </div>
              <p className="text-xs text-white/70 dark:text-slate-400 mb-6 leading-relaxed font-light">
                Interested in this project architecture or looking for a .NET and Web developer for your team?
              </p>
              <Link
                href="/#contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-white dark:border-rose-500 bg-transparent hover:bg-white dark:hover:bg-rose-500 text-white hover:text-black dark:text-rose-400 dark:hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <span>Send Direct Inquiry</span>
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Project Navigation (Prev / Next) */}
        <div className="mt-20 pt-10 border-t border-black/10 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.id}`}
              className="bg-white dark:bg-slate-900 p-6 border border-black/10 dark:border-slate-800 flex items-center gap-4 hover:border-black dark:hover:border-rose-500 transition-colors group text-left"
            >
              <div className="w-12 h-12 border border-black/10 dark:border-slate-700 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-rose-500 group-hover:text-white transition-colors text-black dark:text-slate-300">
                <FiArrowLeft className="w-5 h-5" />
              </div>
              <div className="overflow-hidden flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 block mb-1">Previous Project</span>
                <p className="text-sm font-black uppercase tracking-widest text-black dark:text-white truncate">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : <div />}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.id}`}
              className="bg-white dark:bg-slate-900 p-6 border border-black/10 dark:border-slate-800 flex items-center justify-end gap-4 hover:border-black dark:hover:border-rose-500 transition-colors group text-right w-full"
            >
              <div className="overflow-hidden flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 block mb-1">Next Project</span>
                <p className="text-sm font-black uppercase tracking-widest text-black dark:text-white truncate">
                  {nextProject.title}
                </p>
              </div>
              <div className="w-12 h-12 border border-black/10 dark:border-slate-700 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-rose-500 group-hover:text-white transition-colors text-black dark:text-slate-300">
                <FiArrowRight className="w-5 h-5" />
              </div>
            </Link>
          )}

        </div>

      </div>
    </main>
  );
}
