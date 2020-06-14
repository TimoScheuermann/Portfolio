import constants from "@/constants";
import { ProjectAssets } from "./ProjectAssets";

export class Project {
  title: string = "%title%";
  description: string = "%description%";
  type: string = "%type%";
  routeName: string = constants.routes.home;
  mainComponent: string = "@/views/projects/%title%";
  icon: string = "";
  assets: ProjectAssets = new ProjectAssets();
  displayAs: "mobile" | "desktop" | "combined" = "combined";
  shortName: string = "";
}
