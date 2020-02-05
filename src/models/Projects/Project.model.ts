import { ProjectImages } from "./ProjectImages.model";

export class Project {
  mode: string = "light";
  title: string = "%title%";
  routeName: string = "home";
  description: string = "%description%";
  images: ProjectImages = new ProjectImages();
}
