<template>
  <tc-header
    variant="sticky"
    :title="project.title"
    backName="Projects"
    :backTo="{ name: routes.projects }"
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
import { Mixins, Component } from 'vue-property-decorator';
import routes from '@/constants/routes';
import ProjectView from '@/views/projects/ProjectView.mixin';

@Component
export default class PortfolioProjectHeader extends Mixins(ProjectView) {
  public routes = routes;
}
</script>
