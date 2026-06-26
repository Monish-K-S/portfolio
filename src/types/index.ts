export interface Profile {
  name: string;
  title: string;
  about: string;
  github: string;
  linkedin: string;
  email: string;
  resume?: string;
  skills: Record<string, string[]>;
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  github: string;
  demo?: string;
  technologies: string[];
  image?: string;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  url: string;
  cover?: string;
}
