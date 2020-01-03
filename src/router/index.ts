import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue")
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
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
