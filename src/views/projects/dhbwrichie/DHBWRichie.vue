<template>
  <div class="projects--dhbwrichie">
    <tc-header
      :title="project.title"
      backName="Projects"
      :backTo="{ name: constants.routes.projects }"
      :autoBackground="true"
    />
    <projects-default-hero
      :title="project.title"
      :src="project.assets.combined"
    />
    <div content>
      <project-title :title="project.type" :subtitle="project.title" />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import constants from "@/constants";
import ProjectsDefaultHero from "@/components/projects/common/Projects--Default-Hero.vue";
import ProjectsTitle from "@/components/projects/common/Projects--Title.vue";
import { getProject } from "@/utils/ProjectUtils";
import { Project } from "@/models/Projects/Project.model";

@Component({
  components: {
    "projects-default-hero": ProjectsDefaultHero,
    "project-title": ProjectsTitle,
  },
})
export default class DHBWRichie extends Vue {
  public constants: Record<string, unknown> = constants;

  get project(): Project {
    return getProject();
  }
}
</script>
<style lang="scss" scoped>
.projects--dhbwrichie {
  color: inherit;
}
</style>
