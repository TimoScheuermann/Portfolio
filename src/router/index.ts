import constants from '@/constants';
import EmptyRouter from '@/views/EmptyRouter.vue';
import ProjectSubview from '@/views/projects/Project-Subview.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

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
      component: () => import('@/views/home/Home.vue'),
      meta: {
        title: prefix + 'Home',
        dark: true,
      },
    },
    {
      path: '/repertoire',
      name: 'repertoire',
      component: () => import('@/views/repertoire/Repertoire.vue'),
      meta: {
        title: prefix + 'Repertoire',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact/Contact.vue'),
      meta: {
        title: prefix + 'Contact',
      },
    },
    {
      path: '/github',
      name: 'github',
      component: () => import('@/views/github/GitHub.vue'),
      meta: {
        title: prefix + 'GitHub',
      },
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('@/views/resume/Resume.vue'),
      meta: {
        title: prefix + 'Resume',
      },
    },
    {
      path: '/legal',
      component: EmptyRouter,
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
          },
        },
        {
          path: 'terms',
          name: 'terms',
          component: () => import('@/views/legal/TermsOfUse.vue'),
          meta: {
            title: prefix + 'Terms of use',
          },
        },
        { path: '*', redirect: { name: 'home' } },
      ],
    },
    {
      path: '/projects',
      component: ProjectSubview,
      children: [
        {
          path: '',
          name: constants.routes.projects,
          component: () => import('@/views/projects/Projects.vue'),
          meta: {
            title: prefix + 'Projects',
            customHero: true,
          },
        },
        {
          path: 'amspro',
          name: constants.projectRoutes.amspro,
          component: () => import('@/views/projects/amspro/AMSPro.vue'),
          meta: {
            title: prefix + 'AMS Pro',
          },
        },
        {
          path: 'uno',
          name: 'uno',
          component: () => import('@/views/projects/uno/Uno.vue'),
          meta: {
            title: prefix + 'Uno',
            dark: true,
          },
        },
        {
          path: 'investingcollectors',
          name: constants.projectRoutes.investingcollectors,
          component: () =>
            import(
              '@/views/projects/investingcollectors/InvestingCollectors.vue'
            ),
          meta: {
            title: prefix + 'Investing Collectors',
          },
        },
        {
          path: 'dhbwrichie',
          name: constants.projectRoutes.dhbwrichie,
          component: () => import('@/views/projects/dhbwrichie/DHBWRichie.vue'),
          meta: {
            title: prefix + 'DHBW Richie',
          },
        },
        {
          path: 'nhlstats',
          name: constants.projectRoutes.nhlstats,
          component: () => import('@/views/projects/nhlstats/NHLStats.vue'),
          meta: {
            title: prefix + 'NHL Stats',
          },
        },
        {
          path: 'tccomponents',
          name: constants.projectRoutes.tccomponents,
          component: () =>
            import('@/views/projects/tccomponents/TCComponents.vue'),
          meta: {
            title: prefix + 'TC Components',
          },
        },
        {
          path: 'timosicons',
          name: constants.projectRoutes.timosicons,
          component: () => import('@/views/projects/timosicons/TimosIcons.vue'),
          meta: {
            title: prefix + "Timo's Icons",
          },
        },
        {
          path: 'workgallery',
          name: constants.projectRoutes.workgallery,
          component: () =>
            import('@/views/projects/workgallery/WorkGallery.vue'),
          meta: {
            title: prefix + 'Work Gallery',
          },
        },
        {
          path: '*',
          name: constants.projectRoutes.notfound,
          component: () => import('@/views/projects/NotFound.vue'),
          meta: {
            title: prefix + 'Projects',
          },
        },
      ],
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
