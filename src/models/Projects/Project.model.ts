import constants from "@/constants";
import { ProjectAssets } from "./ProjectAssets";

export class Project {
  title = "%title%";
  description = "%description%";
  type = "%type%";
  routeName: string = constants.routes.home;
  mainComponent = "@/views/projects/%title%";
  icon = "";
  assets: ProjectAssets = new ProjectAssets();
  displayAs: "mobile" | "desktop" | "combined" = "combined";
  shortName = "";
}
