import constants from "@/constants";
import EmptyRouter from "@/views/EmptyRouter.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/Home.vue")
    },
    {
      path: "/repertoire",
      name: "repertoire",
      component: () => import("@/views/repertoire/Repertoire.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/contact/Contact.vue")
    },
    {
      path: "/github",
      name: "github",
      component: () => import("@/views/github/GitHub.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/views/resume/Resume.vue")
    },
    {
      path: "/projects",
      component: EmptyRouter,
      children: [
        {
          path: "",
          name: constants.routes.projects,
          component: () => import("@/views/projects/Projects.vue")
        },
        {
          path: "amspro",
          name: constants.projectRoutes.ams_pro,
          component: () => import("@/views/projects/amspro/AMSPro.vue")
        },
        {
          path: "investingcollectors",
          name: constants.projectRoutes.investing_collectors,
          component: () =>
            import(
              "@/views/projects/investingcollectors/InvestingCollectors.vue"
            )
        },
        {
          path: "dhbwrichie",
          name: constants.projectRoutes.dhbw_richie,
          component: () => import("@/views/projects/dhbwrichie/DHBWRichie.vue")
        },
        {
          path: "nhlstats",
          name: constants.projectRoutes.nhl_stats,
          component: () => import("@/views/projects/nhlstats/NHLStats.vue")
        },
        {
          path: "timoscomponents",
          component: EmptyRouter,
          children: [
            {
              path: "",
              name: constants.projectRoutes.timos_components,
              meta: { customSidebar: true },
              component: () =>
                import("@/views/projects/tccomponents/TC-Components.vue")
            },
            {
              path: "designer",
              name: constants.projectRoutes.timos_components_designer,
              meta: { customSidebar: true },
              component: () =>
                import("@/views/projects/tccomponents/TC-Components.vue")
            },
            {
              path: "getting-started",
              name: constants.projectRoutes.timos_components_getting_started,
              meta: { customSidebar: true },
              component: () =>
                import("@/views/projects/tccomponents/TC-Components.vue")
            },
            {
              path: ":comp",
              name: constants.projectRoutes.timos_components_detail,
              meta: { customSidebar: true },
              component: () =>
                import("@/views/projects/tccomponents/TC-Components.vue")
            }
          ]
        },
        {
          path: "timosicons",
          component: EmptyRouter,
          children: [
            {
              name: constants.projectRoutes.timos_icons,
              path: "",
              component: () =>
                import("@/views/projects/timosicons/TimosIcons.vue")
            },
            {
              name: constants.projectRoutes.timos_icons_versions,
              path: "resources/versions",
              component: () =>
                import(
                  "@/views/projects/timosicons/resources/TimosIcons--Versions.vue"
                )
            },
            {
              name: constants.projectRoutes.timos_icons_getting_started,
              path: "resources/howto",
              component: () =>
                import(
                  "@/views/projects/timosicons/resources/TimosIcons--GettingStarted.vue"
                )
            },
            {
              name: constants.projectRoutes.timos_icons_detail,
              path: ":icon",
              component: () =>
                import("@/views/projects/timosicons/TimosIconsDetail.vue")
            }
          ]
        },
        {
          path: "workgallery",
          name: constants.projectRoutes.work_gallery,
          component: () =>
            import("@/views/projects/workgallery/WorkGallery.vue")
        },
        {
          path: "*",
          name: constants.projectRoutes.not_found,
          component: () => import("@/views/projects/NotFound.vue")
        }
      ]
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});

export default router;
