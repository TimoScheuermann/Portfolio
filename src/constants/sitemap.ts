import projects from '@/constants/projects';
import { SitemapGroup } from '@/models';

const sitemap: SitemapGroup[] = [
  {
    group: 'About me',
    items: [
      {
        name: 'Home',
        to: { name: 'home' },
      },
      {
        name: 'Projects',
        to: { name: 'projects' },
      },
      {
        name: 'Repertoire',
        to: { name: 'repertoire' },
      },
      {
        name: 'Contact',
        to: { name: 'contact' },
      },
      {
        name: 'Newsroom',
        to: { name: 'newsroom' },
      },
      {
        name: 'GitHub',
        to: { name: 'github' },
      },
      {
        name: 'Resume',
        to: { name: 'resume' },
      },
    ],
  },
  {
    group: 'Projects',
    items: [
      ...projects.map(x => {
        return { name: x.title, to: { name: x.routeName } };
      }),
    ],
  },
  {
    group: "Timo's Icons",
    items: [
      {
        name: 'Home',
        href: 'https://icons.timos.design',
      },
      {
        name: 'Icons',
        href: 'https://icons.timos.design/icons',
      },
      {
        name: 'Versions',
        href: 'https://icons.timos.design/version',
      },
      {
        name: 'Issues',
        href: 'https://icons.timos.design/issues',
      },
      {
        name: 'Getting Started',
        href: 'https://icons.timos.design/getting%20started',
      },
    ],
  },
  {
    group: 'TC Components',
    items: [
      {
        name: 'Home',
        href: 'https://components.timos.design/',
      },
      {
        name: 'Designer',
        href: 'https://components.timos.design/designer/',
      },
      {
        name: 'How to',
        href: 'https://components.timos.design/howto/',
      },
      {
        name: 'Demos',
        href: 'https://components.timos.design/demos/',
      },
    ],
  },
  {
    group: "Timo's Newsroom",
    items: [
      {
        name: 'Home',
        href: 'https://newsroom.timos.design/',
      },
    ],
  },
];

export default sitemap;
