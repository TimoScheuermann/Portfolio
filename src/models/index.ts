export interface Project {
  title: string;
  description: string;
  type: string;
  routeName: string;
  mainComponent: string;
  icon: string;
  assets: ProjectAssets;
  displayAs: 'mobile' | 'desktop' | 'combined';
  shortName: string;
  website?: string;
  latest?: boolean;
  tools?: Tool[];
}
export interface ProjectAssets {
  mobile: string;
  desktop: string;
  combined: string;
  thumbnail: string;
  appIcon?: string;
}
export interface Tool {
  name: string;
  img: string;
  type: 'framework' | 'design' | 'development';
}
export interface WorkGalleryItem {
  fileName: string;
  project?: string;
  display: string;
}
export interface SitemapGroup {
  group: string;
  items: SitemapItem[];
}
export interface SitemapItem {
  name: string;
  href?: string;
  to?: { name: string };
}

export type ToolName =
  | 'cassandra'
  | 'nuxtjs'
  | 'icomoon'
  | 'adobexd'
  | 'photoshop'
  | 'affinityphoto'
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'typescript'
  | 'nodejs'
  | 'vuejs'
  | 'angular'
  | 'nestjs'
  | 'mongodb'
  | 'mysql'
  | 'git'
  | 'npm'
  | 'yarn';
