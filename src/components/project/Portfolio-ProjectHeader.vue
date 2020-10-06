<template>
  <tc-header
    variant="sticky"
    :title="project.title"
    :class="{ custom: !renderDefault }"
  >
    <tc-header-button
      slot="button"
      :routeName="routes.projects"
      name="Projects"
    />
    <tc-button
      v-if="project.website"
      name="Website"
      variant="filled"
      :icon="project.icon"
      :href="project.website"
    />
    <tc-button
      v-if="project.github"
      name="GitHub"
      variant="filled"
      icon="github"
      :href="project.github"
    />
  </tc-header>
</template>
<script lang="ts">
import { Mixins, Component } from 'vue-property-decorator';
import routes from '@/constants/routes';
import ProjectView from '@/views/projects/_ProjectView.mixin';

@Component
export default class PortfolioProjectHeader extends Mixins(ProjectView) {
  public routes = routes;
  public renderDefault = false;

  mounted() {
    document
      .querySelectorAll('.tl-sidebar--content')
      .forEach(x => x.addEventListener('scroll', () => this.scroll(x)));
  }

  beforeDestroy() {
    document
      .querySelectorAll('.tl-sidebar--content')
      .forEach(x => x.removeEventListener('scroll', () => this.scroll(x)));
  }

  public scroll(elem: Element) {
    this.renderDefault = elem.scrollTop >= 420;
  }
}
</script>

<style lang="scss" scoped>
.tc-header.custom {
  color: #fff;
  background: $background_dark !important;
}
</style>
