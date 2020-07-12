<template>
  <div class="project-investingcollectors">
    <portfolio-project-header /><portfolio-project-hero />
    <div content>
      <portfolio-big-heading :title="project.type" :subtitle="project.title" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { getProject } from '@/utils';
import { Project } from '@/models/Project.model';
import constants from '@/constants';
import PortfolioProjectHeader from '@/components/project/Portfolio-ProjectHeader.vue';
import PortfolioProjectHero from '@/components/project/Portfolio-ProjectHero.vue';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';

@Component({
  components: {
    'portfolio-project-header': PortfolioProjectHeader,
    'portfolio-project-hero': PortfolioProjectHero,
    'portfolio-big-heading': PortfolioBigHeading,
  },
})
export default class InvestingCollectors extends Vue {
  public constants: Record<string, unknown> = constants;

  get project(): Project {
    return getProject();
  }
}
</script>
