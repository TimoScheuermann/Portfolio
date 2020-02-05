<template>
  <div class="projects">
    <tc-card
      v-for="proj in projects"
      :key="proj.title"
      :title="proj.title"
      :subtitle="proj.description"
      :mode="proj.mode"
      :navigation="{ name: 'Read more', destiny: {name: proj.routeName}}"
    >
      <img :src="proj.images.background" />
    </tc-card>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCCard from "../components/shared/TC-Card.vue";
import projects from "@/projects";
import { Project } from "../models/Projects/Project.model";
@Component({
  components: {
    "tc-card": TCCard
  }
})
export default class Projects extends Vue {
  public readonly projects: Project[] = projects;
}
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
@media #{$isMobile} {
  .projects {
    grid-template-columns: repeat(1, 1fr);
  }
}
@media #{$isDesktop} {
  .projects {
    grid-template-columns: repeat(2, 1fr);
  }
}

.projects {
  display: grid;
  grid-gap: 10px;
  margin: 10px 0px;
}
</style>
