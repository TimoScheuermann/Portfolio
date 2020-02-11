import { Project } from "@/models/Projects/Project.model";
import { RouteOptions } from "@/models/Projects/RouteOptions.model";
import projects from "@/projects";
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

let children = [
  {
    name: "projects",
    path: "",
    component: () => import("../views/Projects.vue")
  }
];
projects.forEach((x: Project) => {
  if (x.routeOptions.subPages!.length > 0) {
    const subPages = [
      {
        name: x.routeOptions.name,
        path: "",
        component: () =>
          import(`@/views/projects/${x.routeOptions.component}.vue`),
        meta: x.routeOptions.meta
      }
    ];
    x.routeOptions.subPages!.forEach((y: RouteOptions) => {
      subPages.push({
        name: y.name,
        path: y.path,
        component: () => import(`@/views/projects/${y.component}.vue`),
        meta: y.meta
      });
    });
    children.push({
      path: x.routeOptions.path,
      component: () => import("@/views/EmptyRouter.vue"),
      meta: x.routeOptions.meta,
      children: subPages
    });
  } else {
    children.push({
      name: x.routeOptions.name,
      component: () =>
        import(`@/views/projects/${x.routeOptions.component}.vue`),
      path: x.routeOptions.path,
      meta: x.routeOptions.meta
    });
  }
});
children.push({
  name: "projectNF",
  path: "*",
  component: () => import("../views/projects/NotFound.vue")
});

router.addRoutes([
  {
    path: "/projects",
    component: EmptyRouter,
    children: children
  }
]);

export default router;
