import routes from '@/constants/routes';
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
      name: routes.home,
      component: () => import('@/views/home/Home.vue'),
      meta: {
        title: prefix + 'Home',
        dark: true,
      },
    },
    {
      path: '/repertoire',
      name: routes.repertoire,
      component: () => import('@/views/repertoire/Repertoire.vue'),
      meta: {
        title: prefix + 'Repertoire',
      },
    },
    {
      path: '/contact',
      name: routes.contact,
      component: () => import('@/views/contact/Contact.vue'),
      meta: {
        title: prefix + 'Contact',
      },
    },
    {
      path: '/github',
      name: routes.github,
      component: () => import('@/views/github/GitHub.vue'),
      meta: {
        title: prefix + 'GitHub',
      },
    },
    {
      path: '/resume',
      name: routes.resume,
      component: () => import('@/views/resume/Resume.vue'),
      meta: {
        title: prefix + 'Resume',
      },
    },
    {
      path: '/newsroom',
      name: routes.newsroom,
      component: () => import('@/views/newsroom/Newsroom.vue'),
      meta: {
        title: prefix + 'Newsroom',
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
          name: routes.privacy,
          component: () => import('@/views/legal/PrivacyPolicy.vue'),
          meta: {
            title: prefix + 'Privacy',
          },
        },
        {
          path: 'terms',
          name: routes.termsofuse,
          component: () => import('@/views/legal/TermsOfUse.vue'),
          meta: {
            title: prefix + 'Terms of Use',
          },
        },
        {
          path: 'cookies',
          name: routes.cookies,
          component: () => import('@/views/legal/CookiePolicy.vue'),
          meta: {
            title: prefix + 'Cookies',
          },
        },
        { path: '*', redirect: { name: 'home' } },
      ],
    },

    {
      path: 'impressum',
      name: routes.impressum,
      component: () => import('@/views/impressum/Impressum.vue'),
      meta: {
        title: prefix + 'Impressum',
      },
    },
    {
      path: '/projects',
      component: ProjectSubview,
      children: [
        {
          path: '',
          name: routes.projects,
          component: () => import('@/views/projects/Projects.vue'),
          meta: {
            title: prefix + 'Projects',
            customHero: true,
          },
        },
        {
          path: 'amspro',
          name: routes.amspro,
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
          name: routes.investingcollectors,
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
          name: routes.dhbwrichie,
          component: () => import('@/views/projects/dhbwrichie/DHBWRichie.vue'),
          meta: {
            title: prefix + 'DHBW Richie',
          },
        },
        {
          path: 'nhlstats',
          name: routes.nhlstats,
          component: () => import('@/views/projects/nhlstats/NHLStats.vue'),
          meta: {
            title: prefix + 'NHL Stats',
          },
        },
        {
          path: 'tccomponents',
          name: routes.tccomponents,
          component: () =>
            import('@/views/projects/tccomponents/TCComponents.vue'),
          meta: {
            title: prefix + 'TC Components',
          },
        },
        {
          path: 'timosicons',
          name: routes.timosicons,
          component: () => import('@/views/projects/timosicons/TimosIcons.vue'),
          meta: {
            title: prefix + "Timo's Icons",
          },
        },
        {
          path: 'workgallery',
          name: routes.workgallery,
          component: () =>
            import('@/views/projects/workgallery/WorkGallery.vue'),
          meta: {
            title: prefix + 'Work Gallery',
          },
        },
        {
          path: 'timosaccounts',
          name: routes.timosaccounts,
          component: () =>
            import('@/views/projects/timosaccounts/TimosAccounts.vue'),
          meta: {
            title: prefix + 'Timos Accounts',
          },
        },
        {
          path: '*',
          name: routes.notfound,
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
