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
      component: () => import("../views/Home.vue")
    },
    {
      path: "/projects",
      component: EmptyRouter,
      children: [
        {
          name: "projects",
          path: "",
          component: () => import("../views/Projects.vue")
        },
        {
          name: "workgallery",
          path: "Work-Gallery",
          meta: {
            scrollNav: true
          },
          component: () => import("../views/projects/WorkGallery.vue")
        },
        {
          path: "Timos-Icons",
          component: EmptyRouter,
          children: [
            {
              path: "",
              name: "timosicons",
              meta: {
                scrollNav: true
              },
              component: () =>
                import("../views/projects/timosIcons/TimosIcons.vue")
            },
            {
              path: ":icon",
              name: "timosiconsdetail",
              meta: {
                scrollNav: true
              },
              component: () =>
                import("../views/projects/timosIcons/IconDetailView.vue")
            }
          ]
        },
        {
          name: "projectNF",
          path: "*",
          component: () => import("../views/projects/NotFound.vue")
        }
      ]
    },
    {
      path: "/repertoire",
      name: "repertoire",
      component: () => import("../views/Repertoire.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact.vue")
    },
    {
      path: "/github",
      name: "github",
      component: () => import("../views/GitHub.vue")
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});

export default router;
