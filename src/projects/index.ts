import constants from "@/constants";
import { Project } from "@/models/Projects/Project.model";

const projects: Project[] = [
  {
    routeName: constants.projectRoutes.dhbw_richie,
    title: "DHBW Richie (WIP)",
    description:
      "Fun little school project. Ask Richie specific questions to a lesson.",
    icon: "book",
    mainComponent: "@/views/projects/dhbwrichie/DHBWRichie.vue",
    thumbnail: "assets/projects/dhbwrichie/thumbnail.png",
    thumbnail_mobile: "assets/projects/dhbwrichie/thumbnail_mobile.png"
  },
  {
    routeName: constants.projectRoutes.timos_icons,
    title: "Timos Icons",
    description:
      "With loved designed, highly professional, minimalistic icons for your next project.",
    icon: "heart",
    mainComponent: "@/views/projects/timosicons/TimosIcons.vue",
    thumbnail: "assets/projects/timosicons/thumbnail.png",
    thumbnail_mobile: "assets/projects/timosicons/thumbnail_mobile.png"
  },
  {
    routeName: constants.projectRoutes.work_gallery,
    title: "Work Gallery",
    description:
      "Just some random screenshots, design ideas that I came across over the years.",

    icon: "painting",
    mainComponent: "@/views/projects/workgallery/WorkGallery.vue",
    thumbnail: "assets/projects/workgallery/thumbnail.png",
    thumbnail_mobile: "assets/projects/workgallery/thumbnail_mobile.png"
  },
  {
    routeName: constants.projectRoutes.timos_components,
    title: "TC Components",
    description:
      "A library of high-quality ready to use components that will help you speed up your development workflow.",
    icon: "component",
    mainComponent: "@/views/projects/tccomponents/TC-Components.vue",
    thumbnail: "assets/projects/tccomponents/thumbnail.png",
    thumbnail_mobile: "assets/projects/tccomponents/thumbnail_mobile.png"
  },
  {
    routeName: constants.projectRoutes.nhl_stats,
    title: "NHL Stats (WIP)",
    description:
      "Fun little scrool project to get every kind of combination of statistics about NHL Season 18/19",
    icon: "hockey-stick",
    mainComponent: "@/views/projects/nhlstats/NHLStats.vue",
    thumbnail: "assets/projects/nhlstats/thumbnail.png",
    thumbnail_mobile: "assets/projects/nhlstats/thumbnail_mobile.png"
  },
  {
    routeName: constants.projectRoutes.ams_pro,
    title: "AMS Pro",
    description: "Arbeitsschutzsoftware, die sich lohnt.",
    mainComponent: "@/views/projects/amspro/AMSPro.vue",
    icon: "amspro",
    thumbnail: "assets/projects/amspro/thumbnail.png",
    thumbnail_mobile: "assets/projects/amspro/thumbnail_mobile.png"
  },
  {
    routeName: constants.projectRoutes.investing_collectors,
    title: "Investing Collectors",
    description:
      "Invest in rare supercars from Porsche, Mercedes, Ferrari and others",
    mainComponent:
      "@/views/projects/investingcollectors/InvestingCollectors.vue",
    icon: "vehicle-front",
    thumbnail: "assets/projects/investingcollectors/thumbnail.png",
    thumbnail_mobile: "assets/projects/investingcollectors/thumbnail_mobile.png"
  }
];

export default projects;
