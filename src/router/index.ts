import constants from "@/constants";
import EmptyRouter from "@/views/EmptyRouter.vue";
import NProgress from "nprogress";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const prefix = "Timo Scheuermann | ";

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/Home.vue"),
      meta: {
        title: prefix + "Home",
      },
    },
    {
      path: "/repertoire",
      name: "repertoire",
      component: () => import("@/views/repertoire/Repertoire.vue"),
      meta: {
        title: prefix + "Repertoire",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/contact/Contact.vue"),
      meta: {
        title: prefix + "Contact",
      },
    },
    {
      path: "/github",
      name: "github",
      component: () => import("@/views/github/GitHub.vue"),
      meta: {
        title: prefix + "GitHub",
      },
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/views/resume/Resume.vue"),
      meta: {
        title: prefix + "Resume",
      },
    },
    {
      path: "/projects",
      component: EmptyRouter,
      children: [
        {
          path: "",
          name: constants.routes.projects,
          component: () => import("@/views/projects/Projects.vue"),
          meta: {
            title: prefix + "Projects",
          },
        },
        {
          path: "amspro",
          name: constants.projectRoutes.ams_pro,
          component: () => import("@/views/projects/amspro/AMSPro.vue"),
          meta: {
            title: prefix + "AMS Pro",
          },
        },
        {
          path: "uno",
          name: "uno",
          component: () => import("@/views/projects/uno/Uno.vue"),
          meta: {
            title: prefix + "Uno",
          },
        },
        {
          path: "investingcollectors",
          name: constants.projectRoutes.investing_collectors,
          component: () =>
            import(
              "@/views/projects/investingcollectors/InvestingCollectors.vue"
            ),
          meta: {
            title: prefix + "Investing Collectors",
          },
        },
        {
          path: "dhbwrichie",
          name: constants.projectRoutes.dhbw_richie,
          component: () => import("@/views/projects/dhbwrichie/DHBWRichie.vue"),
          meta: {
            title: prefix + "DHBW Richie",
          },
        },
        {
          path: "nhlstats",
          name: constants.projectRoutes.nhl_stats,
          component: () => import("@/views/projects/nhlstats/NHLStats.vue"),
          meta: {
            title: prefix + "NHL Stats",
          },
        },
        {
          path: "timoscomponents",
          name: constants.projectRoutes.timos_components,
          beforeEnter: () => {
            window.location.replace("https://components.timos.design");
          },
        },
        {
          path: "timosicons",
          name: constants.projectRoutes.timos_icons,
          beforeEnter: () => {
            window.location.replace("https://icons.timos.design");
          },
        },
        {
          path: "workgallery",
          name: constants.projectRoutes.work_gallery,
          component: () =>
            import("@/views/projects/workgallery/WorkGallery.vue"),
          meta: {
            title: prefix + "Work Gallery",
          },
        },
        {
          path: "*",
          name: constants.projectRoutes.not_found,
          component: () => import("@/views/projects/NotFound.vue"),
          meta: {
            title: prefix + "Projects",
          },
        },
      ],
    },
    {
      path: "*",
      redirect: { name: "home" },
    },
  ],
});

// eslint-disable-next-line
router.beforeResolve((to: any, _from: any, next: any) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
