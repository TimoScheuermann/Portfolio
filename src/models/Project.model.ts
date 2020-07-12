import { ProjectAssets } from './ProjectAssets';

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
}
