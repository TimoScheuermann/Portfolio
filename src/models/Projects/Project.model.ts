import constants from "@/constants";
import { ProjectImages } from "./ProjectImages.model";

export class Project {
  title: string = "%title%";
  description: string = "%description%";
  images: ProjectImages = new ProjectImages();
  routeName: string = constants.routes.home;
}
