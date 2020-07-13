<template>
  <div content class="projects--tccomponents">
    <porfolio-big-heading :title="project.type" :subtitle="project.title" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import constants from '@/constants';

import { getProject } from '@/utils';
import { Project } from '@/models/Project.model';
import PortfolioBigHeading from '@/components/Portfolio-BigHeading.vue';

@Component({
  components: {
    'porfolio-big-heading': PortfolioBigHeading,
  },
})
export default class TCComponents extends Vue {
  public constants: Record<string, unknown> = constants;

  get project(): Project {
    return getProject();
  }
}
</script>
