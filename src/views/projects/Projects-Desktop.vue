<template>
  <div content class="projects-desktop">
    <portfolio-big-heading title="Most Recent" subtitle="Projects" />

    <tl-grid minWidth="100" class="project-grid">
      <router-link
        tsg="div"
        class="project-item"
        v-for="p in projects"
        :key="p.title"
        :to="{ name: p.routeName }"
      >
        <tc-card
          :title="p.title"
          :subtitle="p.description"
          :rounded="true"
          hover="true"
        >
          <portfolio-project-appicon :src="p.assets.appIcon" />
          <img :src="p.assets[p.displayAs]" />
        </tc-card>
      </router-link>
    </tl-grid>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import projects from '@/constants/projects';
import { Project } from '@/models';

import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';
import PortfolioProjectAppIcon from '@/components/project/Portfolio-ProjectAppIcon.vue';

@Component({
  components: {
    'portfolio-big-heading': PortfolioBigHeading,
    'portfolio-project-appicon': PortfolioProjectAppIcon,
  },
})
export default class ProjectsDesktop extends Vue {
  public projects: Project[] = projects;
}
</script>

<style lang="scss" scoped>
.projects-desktop {
  @media #{$isMobile} {
    display: none;
  }
  .project-grid {
    margin-top: 30px;
    grid-auto-flow: dense;
    .project-item {
      grid-column: span 4;
      justify-self: stretch;
      .tc-card {
        height: 100%;
      }
      img {
        max-height: 200px;
      }
    }

    .portfolio-project-appicon {
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(0.2);
      transform-origin: top left;
    }
  }
}
</style>
