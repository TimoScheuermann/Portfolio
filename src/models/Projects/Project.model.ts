import constants from "@/constants";

export class Project {
  title: string = "%title%";
  description: string = "%description%";
  // images: ProjectImages = new ProjectImages();
  routeName: string = constants.routes.home;
  mainComponent: string = "@/views/projects/%title%";
  thumbnail: string = "";
  icon: string = "";
}
