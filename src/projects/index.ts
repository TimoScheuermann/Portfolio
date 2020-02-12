import constants from "@/constants";
import { Project } from "@/models/Projects/Project.model";

const projects: Project[] = [
  {
    routeName: constants.projectRoutes.dhbw_richie,
    title: "DHBW Richie",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
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
      tiIcon: "painting",
      icon: "../img/projects/icons/icon-icons.png",
      background: "../img/projects/workgallery/gallery-preview.png"
    }
  },
  {
    routeName: constants.projectRoutes.nhl_stats,
    title: "NHL Stats",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
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
      tiIcon: "amspro",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  },
  {
    routeName: constants.projectRoutes.timos_components,
    title: "TI Components",
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      tiIcon: "components",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  }
];

export default projects;
