import { Project } from "@/models/Projects/Project.model";

const projects: Project[] = [
  {
    title: "DHBW Richie",
    routeOptions: {
      meta: {},
      name: "dhbwrichie",
      path: "DHBW-Richie",
      subPages: [],
      component: "WorkGallery"
    },
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      tiIcon: "book",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  },
  {
    title: "Timos Icons",
    routeOptions: {
      meta: {},
      name: "timosicons",
      path: "Timos-Icons",
      component: "timosIcons/TimosIcons",
      subPages: [
        {
          meta: {},
          name: "iconDetailview",
          path: ":icon",
          component: "timosIcons/IconDetailView"
        }
      ]
    },
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      tiIcon: "book",
      icon: "../img/projects/icons/icon-icons.png",
      background: "../img/projects/icons/preview2-icons.png"
    }
  },
  {
    title: "Work Gallery",
    routeOptions: {
      meta: {},
      name: "workgallery",
      path: "Work-Gallery",
      subPages: [],
      component: "WorkGallery"
    },
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      tiIcon: "book",
      icon: "../img/projects/icons/icon-icons.png",
      background: "../img/projects/workgallery/gallery-preview.png"
    }
  },
  {
    title: "NHL Stats",
    routeOptions: {
      meta: {},
      name: "nhlstats",
      path: "NHL-Stats",
      subPages: [],
      component: "WorkGallery"
    },
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      tiIcon: "book",
      icon: "../img/projects/cassy/icon-cassy.png",
      background: "../img/projects/cassy/preview-cassy.png"
    }
  },
  {
    title: "AMS Pro",
    routeOptions: {
      meta: {},
      name: "amspro",
      path: "AMS-Pro",
      subPages: [],
      component: "WorkGallery"
    },
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      tiIcon: "book",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  },
  {
    title: "TI Components",
    routeOptions: {
      meta: {
        customSidebar: true
      },
      name: "ticomponents",
      path: "TI-Components",
      component: "ti-components/TI-Components",
      subPages: [
        {
          meta: {
            customSidebar: true
          },
          name: "ticomponentsDetail",
          path: ":comp",
          component: "ti-components/TI-Components"
        }
      ]
    },
    description:
      "Lorem ipsum Zeile 1 Lorem ipsum Zeile 2 Lorem ipsum Zeile 3 Lorem ipsum Zeile 4",
    images: {
      tiIcon: "book",
      icon: "../img/projects/richie/icon-richie.png",
      background: "../img/projects/richie/preview3-richie.png"
    }
  }
];

export default projects;
