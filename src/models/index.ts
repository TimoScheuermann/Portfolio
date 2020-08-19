export interface Project {
  title: string;
  description: string;
  type: string;
  routeName: string;
  icon: string;
  assets: ProjectAssets;
  github?: string;
  website?: string;
  tools?: Tool[];
  hideInSidebar?: boolean;
  brightThumbnail?: boolean;
  showOnHome?: boolean;
}
export interface ProjectAssets {
  thumbnail: string;
  hero: string;
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
