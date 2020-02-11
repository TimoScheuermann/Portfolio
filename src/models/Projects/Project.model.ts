import { ProjectImages } from "./ProjectImages.model";
import { RouteOptions } from "./RouteOptions.model";

export class Project {
  title: string = "%title%";
  description: string = "%description%";
  images: ProjectImages = new ProjectImages();
  routeOptions: RouteOptions = new RouteOptions();
}
