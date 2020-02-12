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
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/repertoire",
      name: "repertoire",
      component: () => import("@/views/Repertoire.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue")
    },
    {
      path: "/github",
      name: "github",
      component: () => import("@/views/GitHub.vue")
    },
    {
      path: "/projects",
      component: EmptyRouter,
      children: [
        {
          path: "",
          name: constants.routes.projects,
          component: () => import("@/views/Projects.vue")
        },
        {
          path: "/amspro",
          name: constants.projectRoutes.ams_pro,
          component: () => import("@/views/projects/NotFound.vue")
        },
        {
          path: "/dhbwrichie",
          name: constants.projectRoutes.dhbw_richie,
          component: () => import("@/views/projects/NotFound.vue")
        },
        {
          path: "/nhlstats",
          name: constants.projectRoutes.nhl_stats,
          component: () => import("@/views/projects/NotFound.vue")
        },
        {
          path: "/timoscomponents",
          component: EmptyRouter,

          children: [
            {
              path: "",
              name: constants.projectRoutes.timos_components,
              meta: { customSidebar: true },
              component: () =>
                import("@/views/projects/ti-components/TI-Components.vue")
            },
            {
              path: ":comp",
              name: constants.projectRoutes.timos_components_detail,
              meta: { customSidebar: true },
              component: () =>
                import("@/views/projects/ti-components/TI-Components.vue")
            }
          ]
        },
        {
          path: "/timosicons",
          component: EmptyRouter,
          children: [
            {
              name: constants.projectRoutes.timos_icons,
              path: "",
              component: () =>
                import("@/views/projects/timosIcons/TimosIcons.vue")
            },
            {
              name: constants.projectRoutes.timos_icons_detail,
              path: ":icon",
              component: () =>
                import("@/views/projects/timosIcons/IconDetailView.vue")
            }
          ]
        },
        {
          path: "/workgallery",
          name: constants.projectRoutes.work_gallery,
          component: () => import("@/views/projects/WorkGallery.vue")
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
