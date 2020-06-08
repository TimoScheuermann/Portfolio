import constants from "@/constants";
import EmptyRouter from "@/views/EmptyRouter.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const prefix = "Timo Scheuermann | ";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/Home.vue"),
      meta: {
        title: prefix + "Home"
      }
    },
    {
      path: "/repertoire",
      name: "repertoire",
      component: () => import("@/views/repertoire/Repertoire.vue"),
      meta: {
        title: prefix + "Repertoire"
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/contact/Contact.vue"),
      meta: {
        title: prefix + "Contact"
      }
    },
    {
      path: "/github",
      name: "github",
      component: () => import("@/views/github/GitHub.vue"),
      meta: {
        title: prefix + "GitHub"
      }
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("@/views/resume/Resume.vue"),
      meta: {
        title: prefix + "Resume"
      }
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
            title: prefix + "Projects"
          }
        },
        {
          path: "amspro",
          name: constants.projectRoutes.ams_pro,
          component: () => import("@/views/projects/amspro/AMSPro.vue"),
          meta: {
            title: prefix + "AMS Pro"
          }
        },
        {
          path: "uno",
          name: "uno",
          component: () => import("@/views/projects/uno/Uno.vue"),
          meta: {
            title: prefix + "Uno"
          }
        },
        {
          path: "investingcollectors",
          name: constants.projectRoutes.investing_collectors,
          component: () =>
            import(
              "@/views/projects/investingcollectors/InvestingCollectors.vue"
            ),
          meta: {
            title: prefix + "Investing Collectors"
          }
        },
        {
          path: "dhbwrichie",
          name: constants.projectRoutes.dhbw_richie,
          component: () => import("@/views/projects/dhbwrichie/DHBWRichie.vue"),
          meta: {
            title: prefix + "DHBW Richie"
          }
        },
        {
          path: "nhlstats",
          name: constants.projectRoutes.nhl_stats,
          component: () => import("@/views/projects/nhlstats/NHLStats.vue"),
          meta: {
            title: prefix + "NHL Stats"
          }
        },
        {
          path: "timoscomponents",
          component: EmptyRouter,
          children: [
            {
              path: "",
              name: constants.projectRoutes.timos_components,
              meta: { customSidebar: true, title: "Timo's Components | Home" },
              component: () =>
                import("@/views/projects/tccomponents/TC-Components.vue")
            },
            {
              path: "designer",
              name: constants.projectRoutes.timos_components_designer,
              meta: {
                customSidebar: true,
                title: "Timo's Components | Designer"
              },
              component: () =>
                import("@/views/projects/tccomponents/TC-Components.vue")
            },
            {
              path: "getting-started",
              name: constants.projectRoutes.timos_components_getting_started,
              meta: {
                customSidebar: true,
                title: "Timo's Components | Getting Started"
              },
              component: () =>
                import("@/views/projects/tccomponents/TC-Components.vue")
            },
            {
              path: "icons",
              redirect: { name: constants.projectRoutes.timos_icons }
            },
            {
              path: ":comp",
              name: constants.projectRoutes.timos_components_detail,
              meta: {
                customSidebar: true,
                title: "Timo's Components | %comp%"
              },
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
                import("@/views/projects/timosicons/Timos-Icons.vue"),
              meta: {
                title: "Timo's Icons | Home"
              }
            },
            {
              path: "resources/requests",
              component: EmptyRouter,
              children: [
                {
                  name: constants.projectRoutes.timos_icons_requests,
                  path: "",
                  component: () =>
                    import(
                      "@/views/projects/timosicons/resources/Timos-Icons-Requests.vue"
                    ),
                  meta: {
                    title: "Timo's Icons | Requests"
                  }
                },
                {
                  name: constants.projectRoutes.timos_icons_requests_detail,
                  path: ":issue",
                  component: () =>
                    import(
                      "@/views/projects/timosicons/resources/Timos-Icons-Requests-Detail.vue"
                    ),
                  meta: {
                    title: "Timo's Icons | Request #%issue%"
                  }
                }
              ]
            },
            {
              name: constants.projectRoutes.timos_icons_versions,
              path: "resources/versions",
              component: () =>
                import(
                  "@/views/projects/timosicons/resources/Timos-Icons-Versions.vue"
                ),
              meta: {
                title: "Timo's Icons | Versions"
              }
            },
            {
              name: constants.projectRoutes.timos_icons_getting_started,
              path: "resources/howto",
              component: () =>
                import(
                  "@/views/projects/timosicons/resources/Timos-Icons-GettingStarted.vue"
                ),
              meta: {
                title: "Timo's Icons | How To"
              }
            },
            {
              name: constants.projectRoutes.timos_icons_detail,
              path: ":icon",
              component: () =>
                import("@/views/projects/timosicons/Timos-Icons-Detail.vue"),
              meta: {
                title: "Timo's Icons | %icon%"
              }
            }
          ]
        },
        {
          path: "workgallery",
          name: constants.projectRoutes.work_gallery,
          component: () =>
            import("@/views/projects/workgallery/WorkGallery.vue"),
          meta: {
            title: prefix + "Work Gallery"
          }
        },
        {
          path: "*",
          name: constants.projectRoutes.not_found,
          component: () => import("@/views/projects/NotFound.vue"),
          meta: {
            title: prefix + "Projects"
          }
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
