interface LinkI {
  live: string;
  github: string;
}

interface ImageI {
  width: string;
  height: string;
  src: string;
  alt: string;
  sizes?: string;
}

export interface ProjectI {
  image: ImageI;
  title: string;
  summary: string;
  link: LinkI;
  tools: string[];
}

interface ContactI {
  type: string;
  line: string;
}

interface CVI {
  url: string;
}

export interface SiteLocalDataI {
  title: string;
  avatar: ImageI;
  intro: string;
  tools: string[];
  projects: ProjectI[];
  contacts: ContactI;
  cv: CVI;
}
