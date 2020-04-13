import constants from "@/constants";
import { Project } from "@/models/Projects/Project.model";

const projects: Project[] = [
  {
    routeName: constants.projectRoutes.dhbw_richie,
    title: "DHBW Richie (WIP)",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      preview: "assets/projects/dhbwrichie/preview.png",
      tiIcon: "book",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  },
  {
    routeName: constants.projectRoutes.timos_icons,
    title: "Timos Icons",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      preview: "assets/projects/icons/preview.png",
      tiIcon: "heart",
      icon: "../img/projects/icons/icon-icons.png",
      background: "../img/projects/icons/preview2-icons.png"
    }
  },
  {
    routeName: constants.projectRoutes.work_gallery,
    title: "Work Gallery",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      preview: "assets/projects/workgallery/preview.png",
      tiIcon: "painting",
      icon: "../img/projects/icons/icon-icons.png",
      background: "../img/projects/workgallery/gallery-preview.png"
    }
  },
  {
    routeName: constants.projectRoutes.timos_components,
    title: "TC Components",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      preview: "assets/projects/tccomponents/hero.png",
      tiIcon: "component",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  },
  {
    routeName: constants.projectRoutes.nhl_stats,
    title: "NHL Stats (WIP)",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      preview: "assets/projects/nhlstats/preview.png",
      tiIcon: "hockey-stick",
      icon: "../img/projects/cassy/icon-cassy.png",
      background: "../img/projects/cassy/preview-cassy.png"
    }
  },
  {
    routeName: constants.projectRoutes.ams_pro,
    title: "AMS Pro",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      preview: "assets/projects/amspro/preview.png",
      tiIcon: "amspro",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  },
  {
    routeName: constants.projectRoutes.investing_collectors,
    title: "Investing Collectors",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      preview: "assets/projects/tccomponents/hero.png",
      tiIcon: "vehicle-front",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  }
];

export default projects;
