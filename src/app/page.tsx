import resumeData from "@/data/resumeData.json";
import { ResumeData } from "@/types/portfolio";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/Skills").then(mod => mod.Skills));
const Projects = dynamic(() => import("@/components/Projects").then(mod => mod.Projects));
const Education = dynamic(() => import("@/components/Education").then(mod => mod.Education));
const Contact = dynamic(() => import("@/components/Contact").then(mod => mod.Contact));
const Footer = dynamic(() => import("@/components/Footer").then(mod => mod.Footer));

export default function Home() {
  const data = resumeData as ResumeData;

  return (
    <main className="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      {/* Navigation Bar */}
      <Navbar personalInfo={data.personalInfo} />

      {/* Hero Presentation */}
      <Hero personalInfo={data.personalInfo} />

      {/* Categorized Skills Section */}
      <Skills skills={data.skills} />

      {/* GitHub Project Cards Grid */}
      <Projects projects={data.projects} />

      {/* Academic & Specialized Training Timeline */}
      <Education education={data.education} training={data.training} />

      {/* Interactive Contact & Location Map */}
      <Contact personalInfo={data.personalInfo} />

      {/* Site Footer */}
      <Footer personalInfo={data.personalInfo} />
    </main>
  );
}
