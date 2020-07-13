import { Project } from '@/models/Project.model';
import projects from '@/projects';
import router from '@/router';

export function getProject(
  routeName: string | null = router.currentRoute.name + ''
): Project {
  return projects.filter((x: Project) => x.routeName === routeName)[0];
}
