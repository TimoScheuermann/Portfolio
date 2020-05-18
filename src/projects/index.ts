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
    thumbnail: "assets/projects/preview.png"
  },
  {
    routeName: constants.projectRoutes.timos_icons,
    title: "Timos Icons",
    description:
      "With loved designed, highly professional, minimalistic icons for your next project.",
    icon: "heart",
    mainComponent: "@/views/projects/timosicons/TimosIcons.vue",
    thumbnail: "assets/projects/icons/preview.png"
  },
  {
    routeName: constants.projectRoutes.work_gallery,
    title: "Work Gallery",
    description:
      "Just some random screenshots, design ideas that I came across over the years.",

    icon: "painting",
    mainComponent: "@/views/projects/workgallery/WorkGallery.vue",
    thumbnail: "assets/projects/workgallery/preview.png"
  },
  {
    routeName: constants.projectRoutes.timos_components,
    title: "TC Components",
    description:
      "A library of high-quality ready to use components that will help you speed up your development workflow.",
    icon: "component",
    mainComponent: "@/views/projects/tccomponents/TC-Components.vue",
    thumbnail: "assets/projects/tccomponents/hero.png"
  },
  {
    routeName: constants.projectRoutes.nhl_stats,
    title: "NHL Stats (WIP)",
    description:
      "Fun little scrool project to get every kind of combination of statistics about NHL Season 18/19",
    icon: "hockey-stick",
    mainComponent: "@/views/projects/nhlstats/NHLStats.vue",
    thumbnail: "assets/projects/nhlstats/preview.png"
  },
  {
    routeName: constants.projectRoutes.ams_pro,
    title: "AMS Pro",
    description: "Arbeitsschutzsoftware, die sich lohnt.",
    thumbnail: "assets/projects/amspro/preview.png",
    mainComponent: "@/views/projects/amspro/AMSPro.vue",
    icon: "amspro"
  },
  {
    routeName: constants.projectRoutes.investing_collectors,
    title: "Investing Collectors",
    description:
      "Invest in rare supercars from Porsche, Mercedes, Ferrari and others",
    thumbnail: "assets/projects/tccomponents/hero.png",
    mainComponent:
      "@/views/projects/investingcollectors/InvestingCollectors.vue",
    icon: "vehicle-front"
  }
];

export default projects;
