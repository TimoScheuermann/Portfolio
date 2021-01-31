import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

Vue.use(VueRouter);
const prefix = 'Timo Scheuermann | ';

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        title: prefix + 'Home',
        dark: true,
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue'),
      meta: {
        title: prefix + 'Contact',
      },
    },
    {
      path: '/github',
      name: 'github',
      component: () => import('@/views/GitHub.vue'),
      meta: {
        title: prefix + 'GitHub',
      },
    },
    {
      path: '/newsroom',
      name: 'newsroom',
      component: () => import('@/views/Newsroom.vue'),
      meta: {
        title: prefix + 'Newsroom',
      },
    },
    {
      path: '/project',
      component: () => import('@/views-interim/Interim-Project.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'projects' },
        },
        {
          path: ':project',
          name: 'project',
          component: () => import('@/views/Project.vue'),
          meta: {
            title: prefix + 'Project',
          },
        },
      ],
    },
    {
      path: '/legal',
      component: () => import('@/views-interim/Interim-Legal.vue'),
      children: [
        {
          path: '',
          redirect: { name: 'home' },
        },
        {
          path: 'privacy',
          name: 'privacy',
          component: () => import('@/views/legal/PrivacyPolicy.vue'),
          meta: {
            title: prefix + 'Privacy',
            hero: {
              title: 'Privacy Policy',
              updated: 'Last updated August 03, 2020',
            },
          },
        },
        {
          path: 'terms',
          name: 'terms',
          component: () => import('@/views/legal/TermsOfUse.vue'),
          meta: {
            title: prefix + 'Terms of Use',
            hero: {
              title: 'Terms of Use',
              updated: 'Last updated August 03, 2020',
            },
          },
        },
        {
          path: 'cookies',
          name: 'cookies',
          component: () => import('@/views/legal/CookiePolicy.vue'),
          meta: {
            title: prefix + 'Cookies',
            hero: {
              title: 'Cookie Policy',
              updated: 'Last updated August 03, 2020',
            },
          },
        },
        { path: '*', redirect: { name: 'home' } },
      ],
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects.vue'),
      meta: {
        title: prefix + 'Projects',
      },
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;

export function getTitle(route: Route = router.currentRoute): string {
  const name: string = route.meta.title;
  if (!name) prefix;
  return name;
}
