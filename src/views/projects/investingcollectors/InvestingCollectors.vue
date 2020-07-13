<template>
  <div content class="project-investingcollectors">
    <portfolio-big-heading :title="project.type" :subtitle="project.title" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { getProject } from '@/utils';
import { Project } from '@/models/Project.model';
import constants from '@/constants';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';

@Component({
  components: {
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
