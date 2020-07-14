import projects from '@/constants/projects';
import tools from '@/constants/tools';
import { Project, Tool } from '@/models';
import router from '@/router';

export function getProject(
  routeName: string | null = router.currentRoute.name + ''
): Project {
  return projects.filter((x: Project) => x.routeName === routeName)[0];
}

export function getTools(
  type: Tool['type'],
  toolsArray: Tool[] = Object.values(tools)
): Tool[] {
  return toolsArray
    .filter(x => x.type === type)
    .sort((a, b) => a.name.localeCompare(b.name));
}
