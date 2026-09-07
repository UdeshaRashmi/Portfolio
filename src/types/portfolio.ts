export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Full-Stack' | 'Frontend' | 'Microservices' | 'AI / Research';
  description: string;
  detailedPoints: string[];
  technologies: string[];
  highlights?: string[];
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
  role?: string;
  badge?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Familiar';
    highlight?: boolean;
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  badgeColor: string;
  iconName: string;
  skills: string[];
}
