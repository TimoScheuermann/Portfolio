import { Project } from "@/models/Projects/Project.model";
import projects from "@/projects";
import router from "@/router";

export function getProject(): Project {
  return projects.filter((x) => x.routeName === router.currentRoute.name)[0];
}
