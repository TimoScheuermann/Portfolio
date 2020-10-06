import routes from '@/constants/routes';
import { getProject } from '@/utils';
import EmptyRouter from '@/views-interim/EmptyRouter.vue';
import ProjectsInterim from '@/views-interim/ProjectsInterim.vue';
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
      component: () => import('@/views/Home.vue'),
      meta: {
        title: prefix + 'Home',
        dark: true,
      },
    },
    {
      path: '/repertoire',
      name: routes.repertoire,
      component: () => import('@/views/Repertoire.vue'),
      meta: {
        title: prefix + 'Repertoire',
      },
    },
    {
      path: '/contact',
      name: routes.contact,
      component: () => import('@/views/Contact.vue'),
      meta: {
        title: prefix + 'Contact',
      },
    },
    {
      path: '/github',
      name: routes.github,
      component: () => import('@/views/GitHub.vue'),
      meta: {
        title: prefix + 'GitHub',
      },
    },
    {
      path: '/resume',
      name: routes.resume,
      component: () => import('@/views/Resume.vue'),
      meta: {
        title: prefix + 'Resume',
      },
    },
    {
      path: '/newsroom',
      name: routes.newsroom,
      component: () => import('@/views/Newsroom.vue'),
      meta: {
        title: prefix + 'Newsroom',
        description: getProject(routes.newsroom).description,
      },
    },
    {
      path: '/playground',
      component: () => import('@/views/Playground.vue'),
      meta: {
        title: prefix + 'Playground',
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
      path: '/projects',
      component: ProjectsInterim,
      children: [
        {
          path: '',
          name: routes.projects,
          component: () => import('@/views/projects/subviews/Projects.vue'),
          meta: {
            title: prefix + 'Projects',
            customHero: true,
          },
        },
        {
          path: 'ams-pro',
          name: routes.amspro,
          component: () => import('@/views/projects/AMSPro.vue'),
          meta: {
            title: prefix + 'AMS Pro',
            description: getProject(routes.amspro).description,
          },
        },
        {
          path: 'uno',
          name: 'uno',
          component: () => import('@/views/projects/uno/Uno.vue'),
          meta: {
            title: prefix + 'Uno',
            dark: true,
            customHero: true,
          },
        },
        {
          path: 'investing-collectors',
          name: routes.investingcollectors,
          component: () => import('@/views/projects/InvestingCollectors.vue'),
          meta: {
            title: prefix + 'Investing Collectors',
            description: getProject(routes.investingcollectors).description,
          },
        },
        {
          path: 'dhbw-richie',
          name: routes.dhbwrichie,
          component: () => import('@/views/projects/DHBWRichie.vue'),
          meta: {
            title: prefix + 'DHBW Richie',
            description: getProject(routes.dhbwrichie).description,
          },
        },
        {
          path: 'nhl-stats',
          name: routes.nhlstats,
          component: () => import('@/views/projects/NHLStats.vue'),
          meta: {
            title: prefix + 'NHL Stats',
            description: getProject(routes.nhlstats).description,
          },
        },
        {
          path: 'tccomponents',
          name: routes.tccomponents,
          component: () => import('@/views/projects/TCComponents.vue'),
          meta: {
            title: prefix + 'TC Components',
            description: getProject(routes.tccomponents).description,
          },
        },
        {
          path: 'timos-icons',
          name: routes.timosicons,
          component: () => import('@/views/projects/TimosIcons.vue'),
          meta: {
            title: prefix + "Timo's Icons",
            description: getProject(routes.timosicons).description,
          },
        },
        {
          path: 'workgallery',
          name: routes.workgallery,
          component: () => import('@/views/projects/WorkGallery.vue'),
          meta: {
            title: prefix + 'Work Gallery',
            description: getProject(routes.workgallery).description,
          },
        },
        {
          path: 'timos-accounts',
          name: routes.timosaccounts,
          component: () => import('@/views/projects/TimosAccounts.vue'),
          meta: {
            title: prefix + 'Timos Accounts',
            description: getProject(routes.timosaccounts).description,
          },
        },
        {
          path: 'gastro-assistant',
          name: routes.gastroassistant,
          component: () => import('@/views/projects/GastroAssistant.vue'),
          meta: {
            title: prefix + 'Gastro Assistant',
            description: getProject(routes.gastroassistant).description,
          },
        },
        {
          path: 'timos-translator',
          name: routes.timostranslator,
          component: () => import('@/views/projects/TimosTranslator.vue'),
          meta: {
            title: prefix + "Timo's Translator",
            description: getProject(routes.timostranslator).description,
          },
        },
        {
          path: 'website-builder',
          name: routes.websitebuilder,
          component: () => import('@/views/projects/WebsiteBuilder.vue'),
          meta: {
            title: prefix + 'Website Builder',
            description: getProject(routes.websitebuilder).description,
          },
        },
        {
          path: 'fitnesshub',
          name: routes.fitnesshub,
          component: () => import('@/views/projects/FitnessHub.vue'),
          meta: {
            title: prefix + 'FitnessHub',
            description: getProject(routes.fitnesshub).description,
          },
        },
        {
          path: '*',
          name: routes.notfound,
          component: () => import('@/views/projects/subviews/NotFound.vue'),
          meta: {
            title: prefix + 'Projects',
            customHero: true,
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
