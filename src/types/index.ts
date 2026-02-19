export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  frontend: Skill[];
  backend: Skill[];
  aiml: Skill[];
  tools: Skill[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  grade?: string;
}
