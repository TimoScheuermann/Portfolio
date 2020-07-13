<template>
  <tc-header
    variant="sticky"
    :title="project.title"
    backName="Projects"
    :backTo="{ name: constants.routes.projects }"
    :autoBackground="true"
  >
    <tc-button
      v-if="project.website"
      name="Website"
      variant="filled"
      :icon="project.icon"
      :href="project.website"
    />
  </tc-header>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Project } from '@/models/Project.model';
import { getProject } from '@/utils';
import constants from '@/constants';

@Component
export default class PortfolioProjectHeader extends Vue {
  public constants = constants;

  get project(): Project {
    return getProject(this.$route.name);
  }
}
</script>
