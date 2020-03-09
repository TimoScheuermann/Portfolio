<template>
  <div content>
    <tc-header title="Projects"></tc-header>
    <div class="projects">
      <tc-card
        v-for="proj in projects"
        :key="proj.title"
        :title="proj.title"
        :subtitle="proj.description"
      >
        <tc-button :to="{ name: proj.routeName }" name="Read more" />
        <img :src="proj.images.background" />
      </tc-card>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TCCard from "@/components/tc/card/TC-Card.vue";
import projects from "@/projects";
import { Project } from "@/models/Projects/Project.model";
import TCHeader from "@/components/tc/header/TC-Header.vue";
import TCButton from "@/components/tc/button/TC-Button.vue";
@Component({
  components: {
    "tc-card": TCCard,
    "tc-header": TCHeader,
    "tc-button": TCButton
  }
})
export default class Projects extends Vue {
  public readonly projects: Project[] = projects;
}
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.projects {
  display: grid;
  grid-gap: 30px;
  margin-top: 20px;
  @media #{$isMobile} {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 60px;
  }
  @media #{$isDesktop} {
    grid-template-columns: repeat(2, 1fr);
  }
  .tc-button {
    margin-bottom: 20px;
  }
}
</style>
