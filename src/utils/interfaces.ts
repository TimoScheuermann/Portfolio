export interface INewsExtended {
  _id: string;
  title: string;
  project: IProjectNewsroom;
  type: 'update' | 'release' | 'feature';
  timestamp: number;
  content: string;
  thumbnail: string;
  featured?: string;
}

export interface IProject {
  _id: string;
  title: string;
  description: string;
  icon: string;

  hero: string;
  thumbnail: string;

  displayOnHome: boolean;

  website?: string;
  github?: string;
  npmjs?: string;

  designTools: string[];
  frameworks: string[];
  development: string[];

  sections?: IProjectSection[];
}

export interface IProjectNewsroom {
  _id: string;
  title: string;
  icon: string;
  website: string;
}

export interface IUser {
  _id: string;
  thirdPartyId: string;
  group: string;
  provider: string;
  username: string;
  avatar: string;
  firstLogin: number;
  lastLogin: number;
}

export interface IProjectSection {
  title: string;
  subtitle: string;
  items: IProjectSectionItem[];
}

export interface IProjectSectionItem {
  background: string;
  asset: string;
  title: string;
  description: string;
  size: 'large' | 'normal';
}
