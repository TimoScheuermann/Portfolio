import constants from "@/constants";
import { Project } from "@/models/Projects/Project.model";

const projects: Project[] = [
  {
    routeName: constants.projectRoutes.timos_components,
    title: "TC Components",
    shortName: "tc",
    description:
      "A library of high-quality ready to use components that will help you speed up your development workflow.",
    type: "Vue Component Library",
    icon: "component",
    mainComponent: "@/views/projects/tccomponents/TC-Components.vue",
    assets: {
      thumbnail: "assets/projects/tccomponents/thumbnail.png",
      combined: "assets/projects/tccomponents/preview.png",
      mobile: "assets/projects/tccomponents/preview_mobile.png",
      desktop: "assets/projects/tccomponents/preview_desktop.png"
    },
    displayAs: "combined"
  },
  {
    routeName: constants.projectRoutes.timos_icons,
    title: "Timos Icons",
    shortName: "ti",
    description:
      "With loved designed, highly professional, minimalistic icons for your next project.",
    type: "Icon Library",
    icon: "heart",
    mainComponent: "@/views/projects/timosicons/TimosIcons.vue",
    assets: {
      thumbnail: "assets/projects/timosicons/thumbnail.png",
      combined: "assets/projects/timosicons/preview.png",
      mobile: "assets/projects/timosicons/preview_mobile.png",
      desktop: "assets/projects/timosicons/preview_desktop.png"
    },
    displayAs: "combined"
  },
  {
    routeName: constants.projectRoutes.investing_collectors,
    title: "Investing Collectors",
    shortName: "ic",
    description:
      "Invest in rare supercars from Porsche, Mercedes, Ferrari and others",
    type: "Website",
    mainComponent:
      "@/views/projects/investingcollectors/InvestingCollectors.vue",
    icon: "vehicle-front",
    assets: {
      thumbnail: "assets/projects/investingcollectors/thumbnail.png",
      combined: "assets/projects/investingcollectors/preview.png",
      mobile: "assets/projects/investingcollectors/preview_mobile.png",
      desktop: "assets/projects/investingcollectors/preview_desktop.png"
    },
    displayAs: "mobile"
  },
  {
    routeName: constants.projectRoutes.work_gallery,
    title: "Work Gallery",
    shortName: "wg",
    description:
      "Just some random screenshots, design ideas that I came across over the years.",
    type: "Workgallery",
    icon: "photos",
    mainComponent: "@/views/projects/workgallery/WorkGallery.vue",
    assets: {
      thumbnail: "assets/projects/workgallery/thumbnail.png",
      combined: "assets/projects/workgallery/hero.png",
      mobile: "assets/projects/workgallery/preview_mobile.png",
      desktop: "assets/projects/workgallery/preview_desktop.png"
    },
    displayAs: "mobile"
  },
  {
    routeName: constants.projectRoutes.dhbw_richie,
    title: "DHBW Richie",
    shortName: "dh",
    description:
      "Fun little school project. Ask Richie specific questions to a lesson.",
    type: "University Project",
    icon: "book",
    mainComponent: "@/views/projects/dhbwrichie/DHBWRichie.vue",
    assets: {
      thumbnail: "assets/projects/dhbwrichie/thumbnail.png",
      combined: "assets/projects/dhbwrichie/preview.png",
      mobile: "assets/projects/dhbwrichie/preview_mobile.png",
      desktop: "assets/projects/dhbwrichie/preview_desktop.png"
    },
    displayAs: "desktop"
  },
  {
    routeName: constants.projectRoutes.nhl_stats,
    title: "NHL Stats",
    shortName: "ns",
    description:
      "Fun little scrool project to get every kind of combination of statistics about NHL Season 18/19",
    type: "University Project",
    icon: "hockey-stick",
    mainComponent: "@/views/projects/nhlstats/NHLStats.vue",
    assets: {
      thumbnail: "assets/projects/nhlstats/thumbnail.png",
      combined: "assets/projects/nhlstats/preview.png",
      mobile: "assets/projects/nhlstats/preview_mobile.png",
      desktop: "assets/projects/nhlstats/preview_desktop.png"
    },
    displayAs: "desktop"
  },
  {
    routeName: constants.projectRoutes.ams_pro,
    title: "AMS Pro",
    shortName: "am",
    description: "Arbeitsschutzsoftware, die sich lohnt.",
    type: "Icons",
    mainComponent: "@/views/projects/amspro/AMSPro.vue",
    icon: "amspro",
    assets: {
      thumbnail: "assets/projects/amspro/thumbnail.png",
      combined: "assets/projects/amspro/preview.png",
      mobile: "assets/projects/amspro/preview_mobile.png",
      desktop: "assets/projects/amspro/preview_desktop.png"
    },
    displayAs: "combined"
  }
];

export default projects;
