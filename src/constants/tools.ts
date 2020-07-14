import { Tool, ToolName } from '@/models';
const pre = 'assets/repertoire/';

const tools: Record<ToolName, Tool> = {
  cassandra: {
    name: 'Cassandra',
    img: pre + 'cassandra.png',
    type: 'development',
  },
  nuxtjs: {
    name: 'Nuxt.js',
    img: pre + 'nuxt.svg',
    type: 'framework',
  },
  icomoon: {
    name: 'IcoMoon',
    img: pre + 'icomoon.png',
    type: 'design',
  },
  adobexd: {
    name: 'Adobe XD',
    img: pre + 'adobexd.png',
    type: 'design',
  },
  photoshop: {
    name: 'Photoshop',
    img: pre + 'photoshop.svg',
    type: 'design',
  },
  affinityphoto: {
    name: 'Affinity Photo',
    img: pre + 'affinity.png',
    type: 'design',
  },

  html5: {
    name: 'HTML 5',
    img: pre + 'html.png',
    type: 'development',
  },
  css3: {
    name: 'CSS 3',
    img: pre + 'css.png',
    type: 'development',
  },
  javascript: {
    name: 'JavaScript',
    img: pre + 'js.png',
    type: 'development',
  },
  typescript: {
    name: 'TypeScript',
    img: pre + 'ts.png',
    type: 'development',
  },
  nodejs: {
    name: 'Node JS',
    img: pre + 'nodejs.png',
    type: 'framework',
  },
  vuejs: {
    name: 'Vue JS',
    img: pre + 'vuejs.png',
    type: 'framework',
  },
  angular: {
    name: 'Angular',
    img: pre + 'angular.png',
    type: 'framework',
  },
  nestjs: {
    name: 'Nest.js',
    img: pre + 'nest.svg',
    type: 'framework',
  },
  mongodb: {
    name: 'MongoDB',
    img: pre + 'mongodb.png',
    type: 'development',
  },
  mysql: {
    name: 'MySQL',
    img: pre + 'mysql.png',
    type: 'development',
  },
  git: {
    name: 'Git',
    img: pre + 'git.png',
    type: 'development',
  },
  npm: {
    name: 'NPM',
    img: pre + 'npm.png',
    type: 'development',
  },
  yarn: {
    name: 'Yarn',
    img: pre + 'yarn.png',
    type: 'development',
  },
};

export default tools;
