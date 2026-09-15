export interface PersonalInfo {
  name: string;
  role: string;
  summary: string;
  contact: {
    phone1: string;
    phone2: string;
    email: string;
    github: string;
  };
  address: {
    current: string;
    permanent: string;
  };
}

export interface SkillsData {
  languages: string[];
  frameworks: string[];
  databases_and_patterns: string[];
  tools: string[];
}

export interface EducationItem {
  degree: string;
  institute: string;
  year: string;
  result: string;
}

export interface TrainingItem {
  course: string;
  institute: string;
  duration: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  features?: string[];
  imageUrl: string;
  github: string;
  liveUrl?: string;
  category?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: SkillsData;
  education: EducationItem[];
  training: TrainingItem[];
  projects: ProjectItem[];
}
