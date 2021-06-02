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

interface ProjectI {
  image: ImageI;
  title: string;
  summary: string;
  link: LinkI;
}

interface ContactI {
  type: string;
  line: string;
}

interface CVI {
  url: string;
}

export interface SiteLocalDataI {
  avatar: ImageI;
  intro: string;
  tools: string[];
  projects: ProjectI[];
  contacts: ContactI;
  cv: CVI;
}
